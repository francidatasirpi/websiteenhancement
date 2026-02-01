#!/bin/bash

# S3 Deployment Script for Datasirpi Website
# Usage: ./scripts/deploy-s3.sh
#
# Prerequisites:
# - AWS CLI installed
# - AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY set in environment or .env.local

set -e

# Load environment variables from .env.local if it exists
if [ -f .env.local ]; then
    export $(grep -v '^#' .env.local | grep -E '^AWS_' | xargs)
fi

# S3 Bucket names
PRIMARY_BUCKET="www.datasirpi.com"
SECONDARY_BUCKET="datasirpi.com"
AWS_REGION="${AWS_REGION:-ap-south-1}"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🚀 Starting S3 Deployment...${NC}"

# Check if AWS credentials are set
if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
    echo "❌ Error: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY must be set"
    echo "   Add them to your .env.local file:"
    echo "   AWS_ACCESS_KEY_ID=your_access_key"
    echo "   AWS_SECRET_ACCESS_KEY=your_secret_key"
    exit 1
fi

# Check if build directory exists
if [ ! -d "build" ]; then
    echo "❌ Error: build directory not found. Run 'npm run build' first."
    exit 1
fi

echo -e "${GREEN}✓ AWS credentials found${NC}"
echo -e "${GREEN}✓ Build directory exists${NC}"

# Configure AWS CLI
export AWS_DEFAULT_REGION=$AWS_REGION

# Deploy to primary bucket (www.datasirpi.com)
echo ""
echo -e "${YELLOW}📦 Deploying to s3://${PRIMARY_BUCKET}...${NC}"
aws s3 sync build/ s3://${PRIMARY_BUCKET} \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "index.html" \
    --exclude "*.json"

# Upload index.html and JSON files with no-cache
aws s3 cp build/index.html s3://${PRIMARY_BUCKET}/index.html \
    --cache-control "no-cache, no-store, must-revalidate"

aws s3 cp build/manifest.json s3://${PRIMARY_BUCKET}/manifest.json \
    --cache-control "no-cache, no-store, must-revalidate" 2>/dev/null || true

aws s3 cp build/sitemap.xml s3://${PRIMARY_BUCKET}/sitemap.xml \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "application/xml"

aws s3 cp build/robots.txt s3://${PRIMARY_BUCKET}/robots.txt \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/plain"

echo -e "${GREEN}✓ Deployed to s3://${PRIMARY_BUCKET}${NC}"

# Deploy to secondary bucket (datasirpi.com) - this might be a redirect bucket
echo ""
echo -e "${YELLOW}📦 Deploying to s3://${SECONDARY_BUCKET}...${NC}"
aws s3 sync build/ s3://${SECONDARY_BUCKET} \
    --delete \
    --cache-control "public, max-age=31536000" \
    --exclude "index.html" \
    --exclude "*.json"

aws s3 cp build/index.html s3://${SECONDARY_BUCKET}/index.html \
    --cache-control "no-cache, no-store, must-revalidate"

aws s3 cp build/manifest.json s3://${SECONDARY_BUCKET}/manifest.json \
    --cache-control "no-cache, no-store, must-revalidate" 2>/dev/null || true

aws s3 cp build/sitemap.xml s3://${SECONDARY_BUCKET}/sitemap.xml \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "application/xml"

aws s3 cp build/robots.txt s3://${SECONDARY_BUCKET}/robots.txt \
    --cache-control "no-cache, no-store, must-revalidate" \
    --content-type "text/plain"

echo -e "${GREEN}✓ Deployed to s3://${SECONDARY_BUCKET}${NC}"

echo ""
echo -e "${GREEN}🎉 Deployment complete!${NC}"
echo ""
echo "Your site is now live at:"
echo "  - https://www.datasirpi.com"
echo "  - https://datasirpi.com"
