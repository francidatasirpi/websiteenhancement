package config

import (
	"os"
	"strings"
)

type Config struct {
	DatabaseURL    string
	JWTSecret      string
	Port           string
	AllowedOrigins []string

	// S3 Configuration
	S3Endpoint     string
	S3Bucket       string
	S3AccessKey    string
	S3SecretKey    string
	S3Region       string
	S3UsePathStyle bool
}

func Load() *Config {
	allowedOrigins := os.Getenv("ALLOWED_ORIGINS")
	origins := []string{"*"}
	if allowedOrigins != "" {
		origins = strings.Split(allowedOrigins, ",")
	}

	port := os.Getenv("PORT")
	if port == "" {
		port = "8080"
	}

	return &Config{
		DatabaseURL:    getEnv("DATABASE_URL", "postgres://blogadmin:blogpassword@localhost:5432/blogdb?sslmode=disable"),
		JWTSecret:      getEnv("JWT_SECRET", "dev-secret-change-in-production-min-32-chars"),
		Port:           port,
		AllowedOrigins: origins,
		S3Endpoint:     getEnv("S3_ENDPOINT", ""),
		S3Bucket:       getEnv("S3_BUCKET", "blog-images"),
		S3AccessKey:    getEnv("S3_ACCESS_KEY", ""),
		S3SecretKey:    getEnv("S3_SECRET_KEY", ""),
		S3Region:       getEnv("S3_REGION", "ap-south-1"),
		S3UsePathStyle: getEnv("S3_USE_PATH_STYLE", "false") == "true",
	}
}

func getEnv(key, defaultValue string) string {
	if value := os.Getenv(key); value != "" {
		return value
	}
	return defaultValue
}
