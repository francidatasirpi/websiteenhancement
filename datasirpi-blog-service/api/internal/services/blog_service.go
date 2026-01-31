package services

import (
	"github.com/datasirpi/blog-service/internal/models"
	"github.com/datasirpi/blog-service/internal/repository"
	"github.com/google/uuid"
	"github.com/gosimple/slug"
)

type BlogService struct {
	blogRepo *repository.BlogRepository
	tagRepo  *repository.TagRepository
}

func NewBlogService(blogRepo *repository.BlogRepository, tagRepo *repository.TagRepository) *BlogService {
	return &BlogService{
		blogRepo: blogRepo,
		tagRepo:  tagRepo,
	}
}

func (s *BlogService) ListPublished(page, pageSize int) ([]models.Blog, int, error) {
	return s.blogRepo.ListPublished(page, pageSize)
}

func (s *BlogService) ListAll(page, pageSize int, status string) ([]models.Blog, int, error) {
	return s.blogRepo.ListAll(page, pageSize, status)
}

func (s *BlogService) GetBySlug(blogSlug string) (*models.Blog, error) {
	return s.blogRepo.GetBySlug(blogSlug)
}

func (s *BlogService) GetByID(id uuid.UUID) (*models.Blog, error) {
	return s.blogRepo.GetByID(id)
}

func (s *BlogService) ListByTag(tagSlug string, page, pageSize int) ([]models.Blog, int, error) {
	return s.blogRepo.ListByTag(tagSlug, page, pageSize)
}

func (s *BlogService) Create(req models.CreateBlogRequest, authorID uuid.UUID) (*models.Blog, error) {
	status := models.StatusDraft
	if req.Status == "published" {
		status = models.StatusPublished
	}

	blog := &models.Blog{
		Title:    req.Title,
		Slug:     slug.Make(req.Title),
		Excerpt:  req.Excerpt,
		Content:  req.Content,
		Status:   status,
		AuthorID: authorID,
	}

	if req.Thumbnail != "" {
		blog.Thumbnail = &req.Thumbnail
	}

	if err := s.blogRepo.Create(blog); err != nil {
		return nil, err
	}

	// Set tags
	if len(req.Tags) > 0 {
		if err := s.blogRepo.SetTagsForBlog(blog.ID, req.Tags); err != nil {
			return nil, err
		}
	}

	return s.blogRepo.GetByID(blog.ID)
}

func (s *BlogService) Update(id uuid.UUID, req models.UpdateBlogRequest) (*models.Blog, error) {
	blog, err := s.blogRepo.GetByID(id)
	if err != nil {
		return nil, err
	}

	if req.Title != "" {
		blog.Title = req.Title
		blog.Slug = slug.Make(req.Title)
	}
	if req.Excerpt != "" {
		blog.Excerpt = req.Excerpt
	}
	if req.Content != "" {
		blog.Content = req.Content
	}
	if req.Thumbnail != "" {
		blog.Thumbnail = &req.Thumbnail
	}
	if req.Status != "" {
		blog.Status = models.BlogStatus(req.Status)
	}

	if err := s.blogRepo.Update(blog); err != nil {
		return nil, err
	}

	// Update tags
	if req.Tags != nil {
		if err := s.blogRepo.SetTagsForBlog(blog.ID, req.Tags); err != nil {
			return nil, err
		}
	}

	return s.blogRepo.GetByID(id)
}

func (s *BlogService) Delete(id uuid.UUID) error {
	return s.blogRepo.Delete(id)
}

func (s *BlogService) GetAllTags() ([]models.Tag, error) {
	return s.tagRepo.GetAll()
}
