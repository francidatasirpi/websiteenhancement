.PHONY: dev dev-logs dev-down dev-clean build build-api build-admin k8s-apply k8s-delete test

# ============================================
# Local Development
# ============================================

# Start all services
dev:
	docker-compose up -d --build
	@echo ""
	@echo "🚀 Services started:"
	@echo "   - Admin Panel:  http://localhost:3001"
	@echo "   - API:          http://localhost:8080"
	@echo "   - MinIO Console: http://localhost:9001 (minioadmin/minioadmin)"
	@echo ""
	@echo "📝 Default login: admin@datasirpi.com / admin123"

# View logs
dev-logs:
	docker-compose logs -f

# View API logs only
dev-logs-api:
	docker-compose logs -f api

# Stop all services
dev-down:
	docker-compose down

# Stop and remove volumes (clean slate)
dev-clean:
	docker-compose down -v
	docker system prune -f

# Restart API only
dev-restart-api:
	docker-compose restart api

# ============================================
# Build
# ============================================

# Build API Docker image
build-api:
	cd api && docker build -t blog-api:latest .

# Build Admin Panel for production
build-admin:
	cd admin-panel && npm install && npm run build

# Build both
build: build-api build-admin

# ============================================
# Kubernetes Deployment
# ============================================

# Apply Kubernetes manifests
k8s-apply:
	kubectl apply -k k8s/

# Delete Kubernetes resources
k8s-delete:
	kubectl delete -k k8s/

# View pod status
k8s-status:
	kubectl get pods -n blog-service

# View API logs in Kubernetes
k8s-logs:
	kubectl logs -n blog-service -l app=blog-api -f

# ============================================
# Testing
# ============================================

# Test API health
test-health:
	@curl -s http://localhost:8080/health | jq

# Test public blogs endpoint
test-blogs:
	@curl -s http://localhost:8080/api/blogs | jq

# ============================================
# Utilities
# ============================================

# Generate bcrypt hash for password
hash-password:
	@read -p "Enter password: " pwd && \
	docker run --rm -it golang:1.21-alpine go run -mod=mod golang.org/x/crypto/bcrypt -hash "$$pwd"

# Connect to PostgreSQL
db-shell:
	docker-compose exec postgres psql -U blogadmin -d blogdb
