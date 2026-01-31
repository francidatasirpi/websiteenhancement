import { useState, useEffect } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { FiPlus, FiEdit2, FiTrash2, FiEye, FiDownload, FiSearch } from 'react-icons/fi';
import Layout from '../components/Layout';
import BlogPreview from '../components/BlogPreview';
import { getAllBlogs, getBlog, deleteBlog } from '../services/api';

function BlogList() {
    const navigate = useNavigate();
    const [blogs, setBlogs] = useState([]);
    const [loading, setLoading] = useState(true);
    const [page, setPage] = useState(1);
    const [totalPages, setTotalPages] = useState(1);
    const [statusFilter, setStatusFilter] = useState('');
    const [searchTerm, setSearchTerm] = useState('');
    const [previewBlog, setPreviewBlog] = useState(null);
    const [loadingPreview, setLoadingPreview] = useState(false);

    useEffect(() => {
        loadBlogs();
    }, [page, statusFilter]);

    const loadBlogs = async () => {
        try {
            setLoading(true);
            const res = await getAllBlogs(page, 10, statusFilter);
            setBlogs(res.data.data || []);
            setTotalPages(res.data.total_pages || 1);
        } catch (error) {
            console.error('Failed to load blogs:', error);
        } finally {
            setLoading(false);
        }
    };

    const handleDelete = async (id, title) => {
        if (window.confirm(`Are you sure you want to delete "${title}"?`)) {
            try {
                await deleteBlog(id);
                loadBlogs();
            } catch (error) {
                console.error('Failed to delete blog:', error);
                alert('Failed to delete blog');
            }
        }
    };

    const handlePreview = async (blog) => {
        setLoadingPreview(true);
        try {
            // Fetch full blog content
            const res = await getBlog(blog.id);
            setPreviewBlog(res.data);
        } catch (error) {
            console.error('Failed to load blog:', error);
            alert('Failed to load blog preview');
        } finally {
            setLoadingPreview(false);
        }
    };

    const handleQuickExportPDF = async (blog) => {
        setLoadingPreview(true);
        try {
            const res = await getBlog(blog.id);
            const fullBlog = res.data;

            // Dynamically import html2pdf
            const html2pdf = (await import('html2pdf.js')).default;

            // Create temporary element
            const element = document.createElement('div');
            element.innerHTML = `
        <div style="font-family: Georgia, serif; max-width: 800px; margin: 0 auto; padding: 40px 20px; color: #1a1a1a;">
          ${fullBlog.thumbnail ? `<img src="${fullBlog.thumbnail}" style="width: 100%; max-height: 400px; object-fit: cover; border-radius: 8px; margin-bottom: 20px;" />` : ''}
          <h1 style="font-size: 2rem; margin-bottom: 0.5rem;">${fullBlog.title}</h1>
          <p style="color: #666; margin-bottom: 2rem;">By ${fullBlog.author?.name || 'Admin'} • ${new Date(fullBlog.created_at).toLocaleDateString()}</p>
          ${fullBlog.excerpt ? `<p style="font-size: 1.125rem; color: #444; font-style: italic; margin-bottom: 2rem;">${fullBlog.excerpt}</p>` : ''}
          <hr style="border: none; border-top: 1px solid #eee; margin: 2rem 0;" />
          <div style="line-height: 1.8;">${fullBlog.content}</div>
        </div>
      `;

            document.body.appendChild(element);

            const opt = {
                margin: [0.5, 0.5, 0.5, 0.5],
                filename: `${fullBlog.slug || 'blog'}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: { scale: 2, useCORS: true },
                jsPDF: { unit: 'in', format: 'a4', orientation: 'portrait' }
            };

            await html2pdf().set(opt).from(element).save();
            document.body.removeChild(element);
        } catch (error) {
            console.error('Failed to export PDF:', error);
            alert('Failed to export PDF');
        } finally {
            setLoadingPreview(false);
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            day: '2-digit',
            month: '2-digit',
            year: 'numeric'
        });
    };

    const filteredBlogs = blogs.filter(blog =>
        blog.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        blog.excerpt?.toLowerCase().includes(searchTerm.toLowerCase())
    );

    return (
        <Layout>
            <div className="page-header">
                <h1 className="page-title">Blogs</h1>
                <div style={{ display: 'flex', gap: '0.75rem', alignItems: 'center' }}>
                    <div className="search-input-wrapper">
                        <FiSearch className="search-icon" />
                        <input
                            type="text"
                            className="form-input search-input"
                            placeholder="Search blogs..."
                            value={searchTerm}
                            onChange={(e) => setSearchTerm(e.target.value)}
                        />
                    </div>
                    <select
                        className="form-select"
                        value={statusFilter}
                        onChange={(e) => setStatusFilter(e.target.value)}
                        style={{ width: '150px' }}
                    >
                        <option value="">All Status</option>
                        <option value="published">Published</option>
                        <option value="draft">Draft</option>
                    </select>
                    <Link to="/blogs/new" className="btn btn-primary">
                        <FiPlus />
                        New Blog
                    </Link>
                </div>
            </div>

            <div className="card">
                {loading ? (
                    <div className="loading">
                        <div className="spinner" />
                    </div>
                ) : filteredBlogs.length === 0 ? (
                    <div className="empty-state">
                        <p>No blogs found</p>
                        <Link to="/blogs/new" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                            Create your first blog
                        </Link>
                    </div>
                ) : (
                    <>
                        <div className="table-container">
                            <table className="table">
                                <thead>
                                    <tr>
                                        <th>Title</th>
                                        <th>Author</th>
                                        <th>Status</th>
                                        <th>Created</th>
                                        <th>Published</th>
                                        <th style={{ textAlign: 'right' }}>Actions</th>
                                    </tr>
                                </thead>
                                <tbody>
                                    {filteredBlogs.map(blog => (
                                        <tr key={blog.id}>
                                            <td>
                                                <div>
                                                    <strong>{blog.title}</strong>
                                                    <div style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                                        /{blog.slug}
                                                    </div>
                                                </div>
                                            </td>
                                            <td>{blog.author?.name || 'Admin'}</td>
                                            <td>
                                                <span className={`badge ${blog.status === 'published' ? 'badge-success' : 'badge-warning'}`}>
                                                    {blog.status === 'published' && '✓ '}
                                                    {blog.status}
                                                </span>
                                            </td>
                                            <td>{formatDate(blog.created_at)}</td>
                                            <td>{blog.published_at ? formatDate(blog.published_at) : '-'}</td>
                                            <td>
                                                <div className="action-buttons">
                                                    <button
                                                        className="btn btn-ghost btn-icon"
                                                        onClick={() => handlePreview(blog)}
                                                        title="Preview"
                                                        disabled={loadingPreview}
                                                    >
                                                        <FiEye />
                                                    </button>
                                                    <button
                                                        className="btn btn-ghost btn-icon"
                                                        onClick={() => handleQuickExportPDF(blog)}
                                                        title="Download PDF"
                                                        disabled={loadingPreview}
                                                    >
                                                        <FiDownload />
                                                    </button>
                                                    <button
                                                        className="btn btn-ghost btn-icon"
                                                        onClick={() => navigate(`/blogs/${blog.id}`)}
                                                        title="Edit"
                                                    >
                                                        <FiEdit2 />
                                                    </button>
                                                    <button
                                                        className="btn btn-ghost btn-icon text-danger"
                                                        onClick={() => handleDelete(blog.id, blog.title)}
                                                        title="Delete"
                                                    >
                                                        <FiTrash2 />
                                                    </button>
                                                </div>
                                            </td>
                                        </tr>
                                    ))}
                                </tbody>
                            </table>
                        </div>

                        {/* Pagination */}
                        {totalPages > 1 && (
                            <div className="pagination">
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => setPage(p => Math.max(1, p - 1))}
                                    disabled={page === 1}
                                >
                                    Previous
                                </button>
                                <span className="pagination-info">
                                    Page {page} of {totalPages}
                                </span>
                                <button
                                    className="btn btn-secondary btn-sm"
                                    onClick={() => setPage(p => Math.min(totalPages, p + 1))}
                                    disabled={page === totalPages}
                                >
                                    Next
                                </button>
                            </div>
                        )}
                    </>
                )}
            </div>

            {/* Preview Modal */}
            {previewBlog && (
                <BlogPreview
                    blog={previewBlog}
                    onClose={() => setPreviewBlog(null)}
                />
            )}
        </Layout>
    );
}

export default BlogList;
