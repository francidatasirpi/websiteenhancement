package main

import (
	"log"

	"github.com/datasirpi/blog-service/internal/config"
	"github.com/datasirpi/blog-service/internal/handlers"
	"github.com/datasirpi/blog-service/internal/middleware"
	"github.com/datasirpi/blog-service/internal/repository"
	"github.com/datasirpi/blog-service/internal/services"
	"github.com/gin-gonic/gin"
)

func main() {
	// Load configuration
	cfg := config.Load()

	// Initialize database
	db, err := repository.NewPostgresDB(cfg.DatabaseURL)
	if err != nil {
		log.Fatalf("Failed to connect to database: %v", err)
	}
	defer db.Close()

	// Run migrations
	if err := repository.RunMigrations(db, cfg.DatabaseURL); err != nil {
		log.Printf("Warning: Failed to run migrations: %v", err)
	}

	// Initialize S3 client
	s3Client, err := services.NewS3Client(cfg)
	if err != nil {
		log.Fatalf("Failed to initialize S3 client: %v", err)
	}

	// Initialize repositories
	blogRepo := repository.NewBlogRepository(db)
	userRepo := repository.NewUserRepository(db)
	tagRepo := repository.NewTagRepository(db)

	// Initialize services
	blogService := services.NewBlogService(blogRepo, tagRepo)
	authService := services.NewAuthService(userRepo, cfg.JWTSecret)
	uploadService := services.NewUploadService(s3Client, cfg.S3Bucket)

	// Initialize handlers
	blogHandler := handlers.NewBlogHandler(blogService)
	authHandler := handlers.NewAuthHandler(authService)
	uploadHandler := handlers.NewUploadHandler(uploadService)

	// Setup router
	router := gin.Default()

	// CORS middleware
	router.Use(middleware.CORS(cfg.AllowedOrigins))

	// Health check
	router.GET("/health", func(c *gin.Context) {
		c.JSON(200, gin.H{"status": "ok", "service": "blog-api"})
	})

	// Public routes
	api := router.Group("/api")
	{
		// Auth routes
		api.POST("/auth/login", authHandler.Login)

		// Public blog routes
		blogs := api.Group("/blogs")
		{
			blogs.GET("", blogHandler.ListPublished)
			blogs.GET("/:slug", blogHandler.GetBySlug)
			blogs.GET("/tags/:tag", blogHandler.ListByTag)
		}

		// Public tags route
		api.GET("/tags", blogHandler.GetTags)
	}

	// Admin routes (protected)
	admin := router.Group("/api/admin")
	admin.Use(middleware.Auth(cfg.JWTSecret))
	{
		// Current user
		admin.GET("/me", authHandler.Me)

		// Blog management
		admin.GET("/blogs", blogHandler.ListAll)
		admin.GET("/blogs/:id", blogHandler.GetByID)
		admin.POST("/blogs", blogHandler.Create)
		admin.PUT("/blogs/:id", blogHandler.Update)
		admin.DELETE("/blogs/:id", blogHandler.Delete)

		// Image upload
		admin.POST("/upload", uploadHandler.UploadImage)
	}

	// Start server
	log.Printf("🚀 Blog API server starting on port %s", cfg.Port)
	if err := router.Run(":" + cfg.Port); err != nil {
		log.Fatalf("Failed to start server: %v", err)
	}
}
