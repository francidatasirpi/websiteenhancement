package services

import (
	"context"
	"io"

	"github.com/datasirpi/blog-service/internal/models"
)

type UploadService struct {
	s3Client *S3Client
	bucket   string
}

func NewUploadService(s3Client *S3Client, bucket string) *UploadService {
	return &UploadService{
		s3Client: s3Client,
		bucket:   bucket,
	}
}

func (s *UploadService) UploadImage(ctx context.Context, file io.Reader, filename string, contentType string) (*models.UploadResponse, error) {
	url, err := s.s3Client.Upload(ctx, file, filename, contentType)
	if err != nil {
		return nil, err
	}

	return &models.UploadResponse{
		URL:      url,
		Filename: filename,
	}, nil
}
