package models

import (
	"time"

	"github.com/google/uuid"
)

type BlogStatus string

const (
	StatusDraft     BlogStatus = "draft"
	StatusPublished BlogStatus = "published"
	StatusArchived  BlogStatus = "archived"
)

type Blog struct {
	ID          uuid.UUID  `json:"id" db:"id"`
	Title       string     `json:"title" db:"title"`
	Slug        string     `json:"slug" db:"slug"`
	Excerpt     string     `json:"excerpt" db:"excerpt"`
	Content     string     `json:"content" db:"content"`
	Thumbnail   *string    `json:"thumbnail" db:"thumbnail"`
	Status      BlogStatus `json:"status" db:"status"`
	AuthorID    uuid.UUID  `json:"author_id" db:"author_id"`
	AuthorName  string     `json:"author_name" db:"author_name"`
	PublishedAt *time.Time `json:"published_at" db:"published_at"`
	CreatedAt   time.Time  `json:"created_at" db:"created_at"`
	UpdatedAt   time.Time  `json:"updated_at" db:"updated_at"`
	Tags        []Tag      `json:"tags" db:"-"`
}

type Tag struct {
	ID   uuid.UUID `json:"id" db:"id"`
	Name string    `json:"name" db:"name"`
	Slug string    `json:"slug" db:"slug"`
}

type User struct {
	ID        uuid.UUID `json:"id" db:"id"`
	Email     string    `json:"email" db:"email"`
	Password  string    `json:"-" db:"password"`
	Name      string    `json:"name" db:"name"`
	Role      string    `json:"role" db:"role"`
	CreatedAt time.Time `json:"created_at" db:"created_at"`
}

// Request DTOs
type CreateBlogRequest struct {
	Title     string   `json:"title" binding:"required"`
	Excerpt   string   `json:"excerpt" binding:"required"`
	Content   string   `json:"content" binding:"required"`
	Thumbnail string   `json:"thumbnail"`
	Status    string   `json:"status"`
	Tags      []string `json:"tags"`
}

type UpdateBlogRequest struct {
	Title     string   `json:"title"`
	Excerpt   string   `json:"excerpt"`
	Content   string   `json:"content"`
	Thumbnail string   `json:"thumbnail"`
	Status    string   `json:"status"`
	Tags      []string `json:"tags"`
}

type LoginRequest struct {
	Email    string `json:"email" binding:"required,email"`
	Password string `json:"password" binding:"required"`
}

type LoginResponse struct {
	Token string `json:"token"`
	User  User   `json:"user"`
}

type PaginatedResponse struct {
	Data       interface{} `json:"data"`
	Total      int         `json:"total"`
	Page       int         `json:"page"`
	PageSize   int         `json:"page_size"`
	TotalPages int         `json:"total_pages"`
}

type UploadResponse struct {
	URL      string `json:"url"`
	Filename string `json:"filename"`
}
