package repository

import (
	"github.com/datasirpi/blog-service/internal/models"
	"github.com/jmoiron/sqlx"
)

type UserRepository struct {
	db *sqlx.DB
}

func NewUserRepository(db *sqlx.DB) *UserRepository {
	return &UserRepository{db: db}
}

func (r *UserRepository) GetByEmail(email string) (*models.User, error) {
	var user models.User
	err := r.db.Get(&user, `SELECT id, email, password, name, role, created_at FROM users WHERE email = $1`, email)
	if err != nil {
		return nil, err
	}
	return &user, nil
}

func (r *UserRepository) GetByID(id string) (*models.User, error) {
	var user models.User
	err := r.db.Get(&user, `SELECT id, email, password, name, role, created_at FROM users WHERE id = $1`, id)
	if err != nil {
		return nil, err
	}
	return &user, nil
}
