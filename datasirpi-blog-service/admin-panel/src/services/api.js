import axios from 'axios';

const API_URL = import.meta.env.VITE_API_URL || '';

const api = axios.create({
    baseURL: API_URL,
    headers: {
        'Content-Type': 'application/json',
    },
});

// Add auth token to requests
api.interceptors.request.use((config) => {
    const token = localStorage.getItem('token');
    if (token) {
        config.headers.Authorization = `Bearer ${token}`;
    }
    return config;
});

// Handle auth errors
api.interceptors.response.use(
    (response) => response,
    (error) => {
        if (error.response?.status === 401) {
            localStorage.removeItem('token');
            window.location.href = '/login';
        }
        return Promise.reject(error);
    }
);

// Auth
export const login = (email, password) =>
    api.post('/api/auth/login', { email, password });

export const getMe = () =>
    api.get('/api/admin/me');

// Blogs - Public
export const getPublishedBlogs = (page = 1, pageSize = 10) =>
    api.get(`/api/blogs?page=${page}&page_size=${pageSize}`);

export const getBlogBySlug = (slug) =>
    api.get(`/api/blogs/${slug}`);

// Blogs - Admin
export const getAllBlogs = (page = 1, pageSize = 10, status = '') =>
    api.get(`/api/admin/blogs?page=${page}&page_size=${pageSize}${status ? `&status=${status}` : ''}`);

export const getBlog = (id) =>
    api.get(`/api/admin/blogs/${id}`);

export const createBlog = (data) =>
    api.post('/api/admin/blogs', data);

export const updateBlog = (id, data) =>
    api.put(`/api/admin/blogs/${id}`, data);

export const deleteBlog = (id) =>
    api.delete(`/api/admin/blogs/${id}`);

// Upload
export const uploadImage = (file) => {
    const formData = new FormData();
    formData.append('file', file);
    return api.post('/api/admin/upload', formData, {
        headers: {
            'Content-Type': 'multipart/form-data',
        },
    });
};

// Tags
export const getTags = () =>
    api.get('/api/tags');

export default api;
