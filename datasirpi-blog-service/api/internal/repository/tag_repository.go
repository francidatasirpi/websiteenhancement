package repository

import (
	"github.com/datasirpi/blog-service/internal/models"
	"github.com/jmoiron/sqlx"
)

type TagRepository struct {
	db *sqlx.DB
}

func NewTagRepository(db *sqlx.DB) *TagRepository {
	return &TagRepository{db: db}
}

func (r *TagRepository) GetAll() ([]models.Tag, error) {
	var tags []models.Tag
	err := r.db.Select(&tags, `SELECT id, name, slug FROM tags ORDER BY name`)
	if err != nil {
		return nil, err
	}
	return tags, nil
}
