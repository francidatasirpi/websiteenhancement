package repository

import (
	"database/sql"
	"time"

	"github.com/datasirpi/blog-service/internal/models"
	"github.com/google/uuid"
	"github.com/gosimple/slug"
	"github.com/jmoiron/sqlx"
)

type BlogRepository struct {
	db *sqlx.DB
}

func NewBlogRepository(db *sqlx.DB) *BlogRepository {
	return &BlogRepository{db: db}
}

func (r *BlogRepository) ListPublished(page, pageSize int) ([]models.Blog, int, error) {
	offset := (page - 1) * pageSize

	var total int
	err := r.db.Get(&total, `SELECT COUNT(*) FROM blogs WHERE status = 'published'`)
	if err != nil {
		return nil, 0, err
	}

	var blogs []models.Blog
	query := `
		SELECT b.id, b.title, b.slug, b.excerpt, b.content, b.thumbnail, 
			   b.status, b.author_id, COALESCE(u.name, 'Unknown') as author_name,
			   b.published_at, b.created_at, b.updated_at
		FROM blogs b
		LEFT JOIN users u ON b.author_id = u.id
		WHERE b.status = 'published'
		ORDER BY b.published_at DESC
		LIMIT $1 OFFSET $2
	`
	err = r.db.Select(&blogs, query, pageSize, offset)
	if err != nil {
		return nil, 0, err
	}

	// Load tags for each blog
	for i := range blogs {
		blogs[i].Tags, _ = r.GetTagsForBlog(blogs[i].ID)
	}

	return blogs, total, nil
}

func (r *BlogRepository) ListAll(page, pageSize int, status string) ([]models.Blog, int, error) {
	offset := (page - 1) * pageSize

	var total int
	countQuery := `SELECT COUNT(*) FROM blogs`
	if status != "" {
		countQuery += ` WHERE status = $1`
		err := r.db.Get(&total, countQuery, status)
		if err != nil {
			return nil, 0, err
		}
	} else {
		err := r.db.Get(&total, countQuery)
		if err != nil {
			return nil, 0, err
		}
	}

	var blogs []models.Blog
	query := `
		SELECT b.id, b.title, b.slug, b.excerpt, b.content, b.thumbnail, 
			   b.status, b.author_id, COALESCE(u.name, 'Unknown') as author_name,
			   b.published_at, b.created_at, b.updated_at
		FROM blogs b
		LEFT JOIN users u ON b.author_id = u.id
	`
	if status != "" {
		query += ` WHERE b.status = $3`
	}
	query += ` ORDER BY b.created_at DESC LIMIT $1 OFFSET $2`

	if status != "" {
		err := r.db.Select(&blogs, query, pageSize, offset, status)
		if err != nil {
			return nil, 0, err
		}
	} else {
		err := r.db.Select(&blogs, query, pageSize, offset)
		if err != nil {
			return nil, 0, err
		}
	}

	for i := range blogs {
		blogs[i].Tags, _ = r.GetTagsForBlog(blogs[i].ID)
	}

	return blogs, total, nil
}

func (r *BlogRepository) GetBySlug(blogSlug string) (*models.Blog, error) {
	var blog models.Blog
	query := `
		SELECT b.id, b.title, b.slug, b.excerpt, b.content, b.thumbnail, 
			   b.status, b.author_id, COALESCE(u.name, 'Unknown') as author_name,
			   b.published_at, b.created_at, b.updated_at
		FROM blogs b
		LEFT JOIN users u ON b.author_id = u.id
		WHERE b.slug = $1 AND b.status = 'published'
	`
	err := r.db.Get(&blog, query, blogSlug)
	if err != nil {
		return nil, err
	}

	blog.Tags, _ = r.GetTagsForBlog(blog.ID)
	return &blog, nil
}

func (r *BlogRepository) GetByID(id uuid.UUID) (*models.Blog, error) {
	var blog models.Blog
	query := `
		SELECT b.id, b.title, b.slug, b.excerpt, b.content, b.thumbnail, 
			   b.status, b.author_id, COALESCE(u.name, 'Unknown') as author_name,
			   b.published_at, b.created_at, b.updated_at
		FROM blogs b
		LEFT JOIN users u ON b.author_id = u.id
		WHERE b.id = $1
	`
	err := r.db.Get(&blog, query, id)
	if err != nil {
		return nil, err
	}

	blog.Tags, _ = r.GetTagsForBlog(blog.ID)
	return &blog, nil
}

func (r *BlogRepository) ListByTag(tagSlug string, page, pageSize int) ([]models.Blog, int, error) {
	offset := (page - 1) * pageSize

	var total int
	countQuery := `
		SELECT COUNT(DISTINCT b.id) FROM blogs b
		JOIN blog_tags bt ON b.id = bt.blog_id
		JOIN tags t ON bt.tag_id = t.id
		WHERE t.slug = $1 AND b.status = 'published'
	`
	err := r.db.Get(&total, countQuery, tagSlug)
	if err != nil {
		return nil, 0, err
	}

	var blogs []models.Blog
	query := `
		SELECT DISTINCT b.id, b.title, b.slug, b.excerpt, b.content, b.thumbnail, 
			   b.status, b.author_id, COALESCE(u.name, 'Unknown') as author_name,
			   b.published_at, b.created_at, b.updated_at
		FROM blogs b
		LEFT JOIN users u ON b.author_id = u.id
		JOIN blog_tags bt ON b.id = bt.blog_id
		JOIN tags t ON bt.tag_id = t.id
		WHERE t.slug = $1 AND b.status = 'published'
		ORDER BY b.published_at DESC
		LIMIT $2 OFFSET $3
	`
	err = r.db.Select(&blogs, query, tagSlug, pageSize, offset)
	if err != nil {
		return nil, 0, err
	}

	for i := range blogs {
		blogs[i].Tags, _ = r.GetTagsForBlog(blogs[i].ID)
	}

	return blogs, total, nil
}

func (r *BlogRepository) Create(blog *models.Blog) error {
	blog.ID = uuid.New()
	blog.Slug = slug.Make(blog.Title)
	blog.CreatedAt = time.Now()
	blog.UpdatedAt = time.Now()

	if blog.Status == models.StatusPublished {
		now := time.Now()
		blog.PublishedAt = &now
	}

	query := `
		INSERT INTO blogs (id, title, slug, excerpt, content, thumbnail, status, author_id, published_at, created_at, updated_at)
		VALUES ($1, $2, $3, $4, $5, $6, $7, $8, $9, $10, $11)
	`
	_, err := r.db.Exec(query, blog.ID, blog.Title, blog.Slug, blog.Excerpt, blog.Content,
		blog.Thumbnail, blog.Status, blog.AuthorID, blog.PublishedAt, blog.CreatedAt, blog.UpdatedAt)
	return err
}

func (r *BlogRepository) Update(blog *models.Blog) error {
	blog.UpdatedAt = time.Now()

	// If status changed to published and wasn't published before
	if blog.Status == models.StatusPublished && blog.PublishedAt == nil {
		now := time.Now()
		blog.PublishedAt = &now
	}

	query := `
		UPDATE blogs 
		SET title = $1, slug = $2, excerpt = $3, content = $4, thumbnail = $5, 
			status = $6, published_at = $7, updated_at = $8
		WHERE id = $9
	`
	_, err := r.db.Exec(query, blog.Title, blog.Slug, blog.Excerpt, blog.Content,
		blog.Thumbnail, blog.Status, blog.PublishedAt, blog.UpdatedAt, blog.ID)
	return err
}

func (r *BlogRepository) Delete(id uuid.UUID) error {
	_, err := r.db.Exec(`DELETE FROM blogs WHERE id = $1`, id)
	return err
}

func (r *BlogRepository) GetTagsForBlog(blogID uuid.UUID) ([]models.Tag, error) {
	var tags []models.Tag
	query := `
		SELECT t.id, t.name, t.slug
		FROM tags t
		JOIN blog_tags bt ON t.id = bt.tag_id
		WHERE bt.blog_id = $1
	`
	err := r.db.Select(&tags, query, blogID)
	if err != nil && err != sql.ErrNoRows {
		return nil, err
	}
	return tags, nil
}

func (r *BlogRepository) SetTagsForBlog(blogID uuid.UUID, tagNames []string) error {
	// Remove existing tags
	_, err := r.db.Exec(`DELETE FROM blog_tags WHERE blog_id = $1`, blogID)
	if err != nil {
		return err
	}

	if len(tagNames) == 0 {
		return nil
	}

	// Insert or get tags and associate with blog
	for _, tagName := range tagNames {
		tagSlug := slug.Make(tagName)

		// Insert tag if not exists
		var tagID uuid.UUID
		err := r.db.Get(&tagID, `SELECT id FROM tags WHERE slug = $1`, tagSlug)
		if err == sql.ErrNoRows {
			tagID = uuid.New()
			_, err = r.db.Exec(`INSERT INTO tags (id, name, slug) VALUES ($1, $2, $3)`, tagID, tagName, tagSlug)
			if err != nil {
				return err
			}
		} else if err != nil {
			return err
		}

		// Associate tag with blog
		_, err = r.db.Exec(`INSERT INTO blog_tags (blog_id, tag_id) VALUES ($1, $2) ON CONFLICT DO NOTHING`, blogID, tagID)
		if err != nil {
			return err
		}
	}

	return nil
}
