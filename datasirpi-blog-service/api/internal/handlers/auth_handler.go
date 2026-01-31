package handlers

import (
	"net/http"

	"github.com/datasirpi/blog-service/internal/models"
	"github.com/datasirpi/blog-service/internal/services"
	"github.com/gin-gonic/gin"
)

type AuthHandler struct {
	service *services.AuthService
}

func NewAuthHandler(service *services.AuthService) *AuthHandler {
	return &AuthHandler{service: service}
}

// Login handles user login
func (h *AuthHandler) Login(c *gin.Context) {
	var req models.LoginRequest
	if err := c.ShouldBindJSON(&req); err != nil {
		c.JSON(http.StatusBadRequest, gin.H{"error": err.Error()})
		return
	}

	response, err := h.service.Login(req.Email, req.Password)
	if err != nil {
		c.JSON(http.StatusUnauthorized, gin.H{"error": err.Error()})
		return
	}

	c.JSON(http.StatusOK, response)
}

// Me returns the current authenticated user
func (h *AuthHandler) Me(c *gin.Context) {
	email := c.MustGet("email").(string)
	role := c.MustGet("role").(string)
	userID := c.MustGet("user_id")

	c.JSON(http.StatusOK, gin.H{
		"id":    userID,
		"email": email,
		"role":  role,
	})
}
