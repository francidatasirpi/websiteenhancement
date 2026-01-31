package services

import (
	"context"
	"fmt"
	"io"
	"path/filepath"
	"time"

	"github.com/aws/aws-sdk-go-v2/aws"
	"github.com/aws/aws-sdk-go-v2/config"
	"github.com/aws/aws-sdk-go-v2/credentials"
	"github.com/aws/aws-sdk-go-v2/service/s3"
	cfg "github.com/datasirpi/blog-service/internal/config"
	"github.com/google/uuid"
)

type S3Client struct {
	client   *s3.Client
	bucket   string
	endpoint string
}

func NewS3Client(appConfig *cfg.Config) (*S3Client, error) {
	var awsCfg aws.Config
	var err error

	if appConfig.S3Endpoint != "" {
		// Use custom endpoint (MinIO for local dev)
		customResolver := aws.EndpointResolverWithOptionsFunc(func(service, region string, options ...interface{}) (aws.Endpoint, error) {
			return aws.Endpoint{
				URL:               appConfig.S3Endpoint,
				HostnameImmutable: true,
			}, nil
		})

		awsCfg, err = config.LoadDefaultConfig(context.TODO(),
			config.WithRegion(appConfig.S3Region),
			config.WithEndpointResolverWithOptions(customResolver),
			config.WithCredentialsProvider(credentials.NewStaticCredentialsProvider(
				appConfig.S3AccessKey,
				appConfig.S3SecretKey,
				"",
			)),
		)
	} else {
		// Use default AWS config (production)
		awsCfg, err = config.LoadDefaultConfig(context.TODO(),
			config.WithRegion(appConfig.S3Region),
		)
	}

	if err != nil {
		return nil, err
	}

	client := s3.NewFromConfig(awsCfg, func(o *s3.Options) {
		if appConfig.S3UsePathStyle {
			o.UsePathStyle = true
		}
	})

	return &S3Client{
		client:   client,
		bucket:   appConfig.S3Bucket,
		endpoint: appConfig.S3Endpoint,
	}, nil
}

func (s *S3Client) Upload(ctx context.Context, file io.Reader, filename string, contentType string) (string, error) {
	// Generate unique filename
	ext := filepath.Ext(filename)
	key := fmt.Sprintf("uploads/%s/%s%s", time.Now().Format("2006/01"), uuid.New().String(), ext)

	_, err := s.client.PutObject(ctx, &s3.PutObjectInput{
		Bucket:      aws.String(s.bucket),
		Key:         aws.String(key),
		Body:        file,
		ContentType: aws.String(contentType),
	})
	if err != nil {
		return "", err
	}

	// Return the URL
	var url string
	if s.endpoint != "" {
		// Local MinIO URL
		url = fmt.Sprintf("%s/%s/%s", s.endpoint, s.bucket, key)
	} else {
		// AWS S3 URL
		url = fmt.Sprintf("https://%s.s3.amazonaws.com/%s", s.bucket, key)
	}

	return url, nil
}
