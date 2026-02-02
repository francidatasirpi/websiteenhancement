#!/bin/bash

# S3 Deployment Script for Datasirpi Website
# Usage: ./deploy-s3.sh

set -e

# Load environment variables
if [ -f .env.local ]; then
    export $(cat .env.local | grep -v '^#' | xargs)
else
    echo "Error: .env.local file not found"
    exit 1
fi

# Validate required variables
if [ -z "$AWS_ACCESS_KEY_ID" ] || [ "$AWS_ACCESS_KEY_ID" = "your_access_key_here" ]; then
    echo "Error: AWS_ACCESS_KEY_ID not configured in .env.local"
    exit 1
fi

if [ -z "$S3_BUCKET" ] || [ "$S3_BUCKET" = "your-bucket-name" ]; then
    echo "Error: S3_BUCKET not configured in .env.local"
    exit 1
fi

echo "🔨 Building production bundle..."
npm run build

echo "📤 Uploading to S3 bucket: $S3_BUCKET..."
aws s3 sync build/ s3://$S3_BUCKET --delete \
    --cache-control "max-age=31536000" \
    --exclude "index.html" \
    --exclude "*.json"

# Upload HTML and JSON with shorter cache
aws s3 sync build/ s3://$S3_BUCKET \
    --cache-control "max-age=0, no-cache, no-store, must-revalidate" \
    --include "index.html" \
    --include "*.json"

echo "✅ Deployed to S3 successfully!"

# Invalidate CloudFront cache if distribution ID is provided
if [ -n "$CLOUDFRONT_DISTRIBUTION_ID" ] && [ "$CLOUDFRONT_DISTRIBUTION_ID" != "your_distribution_id" ]; then
    echo "🔄 Invalidating CloudFront cache..."
    aws cloudfront create-invalidation \
        --distribution-id $CLOUDFRONT_DISTRIBUTION_ID \
        --paths "/*"
    echo "✅ CloudFront cache invalidation initiated!"
fi

echo ""
echo "🚀 Deployment complete!"
