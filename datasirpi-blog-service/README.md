# Datasirpi Blog Service

A standalone blog service with Golang API and React admin panel, designed to integrate with the Datasirpi static website.

## Architecture

```
┌─────────────────────────────────────────────────────────────────────────────┐
│                         LOCAL DEVELOPMENT (Docker Compose)                   │
├─────────────────────────────────────────────────────────────────────────────┤
│                                                                              │
│   ┌─────────────┐    ┌─────────────┐    ┌─────────────┐    ┌─────────────┐  │
│   │   Admin UI  │    │   Blog API  │    │ PostgreSQL  │    │    MinIO    │  │
│   │  (React)    │───▶│  (Golang)   │───▶│  (Database) │    │  (S3 mock)  │  │
│   │  :3001      │    │  :8080      │    │  :5432      │    │  :9000      │  │
│   └─────────────┘    └─────────────┘    └─────────────┘    └─────────────┘  │
│                                                                              │
└─────────────────────────────────────────────────────────────────────────────┘
```

## Quick Start

### Prerequisites

- Docker & Docker Compose
- Make (optional, for convenience commands)

### Start Development Environment

```bash
# Start all services
make dev

# Or without make:
docker-compose up -d --build
```

Services will be available at:
- **Admin Panel**: http://localhost:3001
- **API**: http://localhost:8080
- **MinIO Console**: http://localhost:9001

### Default Login

- **Email**: `admin@datasirpi.com`
- **Password**: `admin123`

## Project Structure

```
datasirpi-blog-service/
├── api/                          # Golang Backend
│   ├── cmd/server/               # Entry point
│   ├── internal/
│   │   ├── config/               # Configuration
│   │   ├── handlers/             # HTTP handlers
│   │   ├── middleware/           # Auth, CORS
│   │   ├── models/               # Data models
│   │   ├── repository/           # Database operations
│   │   └── services/             # Business logic
│   ├── migrations/               # SQL migrations
│   └── Dockerfile
│
├── admin-panel/                  # React Admin UI
│   ├── src/
│   │   ├── components/           # Reusable components
│   │   ├── pages/                # Page components
│   │   ├── services/             # API client
│   │   └── hooks/                # Custom hooks
│   └── Dockerfile
│
├── k8s/                          # Kubernetes manifests
├── docker-compose.yml            # Local development
├── Makefile                      # Common commands
└── README.md
```

## API Endpoints

### Public Endpoints (No Auth)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/health` | Health check |
| POST | `/api/auth/login` | Admin login |
| GET | `/api/blogs` | List published blogs |
| GET | `/api/blogs/:slug` | Get blog by slug |
| GET | `/api/blogs/tags/:tag` | Blogs by tag |
| GET | `/api/tags` | List all tags |

### Admin Endpoints (Auth Required)

| Method | Endpoint | Description |
|--------|----------|-------------|
| GET | `/api/admin/me` | Current user info |
| GET | `/api/admin/blogs` | List all blogs |
| POST | `/api/admin/blogs` | Create blog |
| PUT | `/api/admin/blogs/:id` | Update blog |
| DELETE | `/api/admin/blogs/:id` | Delete blog |
| POST | `/api/admin/upload` | Upload image |

## Development Commands

```bash
# Start services
make dev

# View logs
make dev-logs

# Stop services
make dev-down

# Clean (remove volumes)
make dev-clean

# Connect to database
make db-shell

# Test API health
make test-health
```

## Kubernetes Deployment

### 1. Update Configuration

Edit `k8s/secret.yaml` with your production values:
- `DATABASE_URL`: PostgreSQL connection string
- `JWT_SECRET`: Secure random string (32+ characters)

Edit `k8s/configmap.yaml`:
- `S3_BUCKET`: Your S3 bucket name
- `S3_REGION`: AWS region
- `ALLOWED_ORIGINS`: Your domains

### 2. Build and Push Docker Image

```bash
# Build image
docker build -t your-registry/blog-api:latest ./api

# Push to registry
docker push your-registry/blog-api:latest
```

### 3. Update Deployment Image

Edit `k8s/api/deployment.yaml` and update the image:
```yaml
image: your-registry/blog-api:latest
```

### 4. Deploy

```bash
# Apply all manifests
make k8s-apply

# Or:
kubectl apply -k k8s/

# Check status
make k8s-status
```

## Integration with Main Website

Update your main website's constants file:

```javascript
// src/constants.js
export const blogsApiUrl = "https://blog-api.datasirpi.com/api";
```

Then update the blogs page to fetch from the API:

```jsx
// Fetch blogs
const response = await fetch(`${blogsApiUrl}/blogs`);
const data = await response.json();
```

## Environment Variables

### API

| Variable | Description | Default |
|----------|-------------|---------|
| DATABASE_URL | PostgreSQL connection string | - |
| JWT_SECRET | JWT signing secret | - |
| PORT | Server port | 8080 |
| ALLOWED_ORIGINS | CORS origins (comma-separated) | * |
| S3_ENDPOINT | S3/MinIO endpoint | - |
| S3_BUCKET | S3 bucket name | blog-images |
| S3_ACCESS_KEY | S3 access key | - |
| S3_SECRET_KEY | S3 secret key | - |
| S3_REGION | S3 region | ap-south-1 |
| S3_USE_PATH_STYLE | Use path-style S3 URLs | false |

### Admin Panel

| Variable | Description | Default |
|----------|-------------|---------|
| VITE_API_URL | Backend API URL | - |

## Creating a New Admin User

1. Generate password hash:
```bash
# Use bcrypt to hash password
# Example with htpasswd (install via brew install httpd):
htpasswd -bnBC 10 "" "your-password" | tr -d ':\n'
```

2. Insert into database:
```sql
INSERT INTO users (email, password, name, role)
VALUES ('newadmin@example.com', '$2a$10$...hash...', 'New Admin', 'admin');
```

## License

MIT
