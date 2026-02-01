#!/bin/bash

# CloudFront Cache Invalidation Script
# Usage: ./scripts/invalidate-cache.sh
#
# Prerequisites:
# - AWS CLI installed
# - AWS credentials and CloudFront distribution IDs set in .env.local

set -e

# Load environment variables from .env.local if it exists
if [ -f .env.local ]; then
    export $(grep -v '^#' .env.local | grep -E '^(AWS_|CLOUDFRONT_)' | xargs)
fi

AWS_REGION="${AWS_REGION:-ap-south-1}"

# Colors for output
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
RED='\033[0;31m'
NC='\033[0m' # No Color

echo -e "${YELLOW}🔄 Starting CloudFront Cache Invalidation...${NC}"

# Check if AWS credentials are set
if [ -z "$AWS_ACCESS_KEY_ID" ] || [ -z "$AWS_SECRET_ACCESS_KEY" ]; then
    echo -e "${RED}❌ Error: AWS_ACCESS_KEY_ID and AWS_SECRET_ACCESS_KEY must be set${NC}"
    exit 1
fi

export AWS_DEFAULT_REGION=$AWS_REGION

# Invalidate www.datasirpi.com distribution
if [ -n "$CLOUDFRONT_DISTRIBUTION_WWW" ]; then
    echo -e "${YELLOW}📦 Invalidating cache for www.datasirpi.com...${NC}"
    INVALIDATION_ID_WWW=$(aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_WWW" \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)
    echo -e "${GREEN}✓ Invalidation created: ${INVALIDATION_ID_WWW}${NC}"
else
    echo -e "${YELLOW}⚠ CLOUDFRONT_DISTRIBUTION_WWW not set, skipping...${NC}"
fi

# Invalidate datasirpi.com distribution (if different)
if [ -n "$CLOUDFRONT_DISTRIBUTION_APEX" ] && [ "$CLOUDFRONT_DISTRIBUTION_APEX" != "$CLOUDFRONT_DISTRIBUTION_WWW" ]; then
    echo -e "${YELLOW}📦 Invalidating cache for datasirpi.com...${NC}"
    INVALIDATION_ID_APEX=$(aws cloudfront create-invalidation \
        --distribution-id "$CLOUDFRONT_DISTRIBUTION_APEX" \
        --paths "/*" \
        --query 'Invalidation.Id' \
        --output text)
    echo -e "${GREEN}✓ Invalidation created: ${INVALIDATION_ID_APEX}${NC}"
elif [ -n "$CLOUDFRONT_DISTRIBUTION_APEX" ]; then
    echo -e "${YELLOW}⚠ Apex distribution same as www, skipping...${NC}"
else
    echo -e "${YELLOW}⚠ CLOUDFRONT_DISTRIBUTION_APEX not set, skipping...${NC}"
fi

echo ""
echo -e "${GREEN}🎉 Cache invalidation complete!${NC}"
echo ""
echo "Note: Invalidations typically take 1-5 minutes to propagate globally."
echo "You can check status in the AWS Console under CloudFront > Invalidations"
