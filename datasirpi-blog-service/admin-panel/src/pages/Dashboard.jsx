import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import { getAllBlogs } from '../services/api';
import { FiFileText, FiCheck, FiEdit3, FiPlus } from 'react-icons/fi';

function Dashboard() {
    const [stats, setStats] = useState({
        total: 0,
        published: 0,
        drafts: 0,
    });
    const [recentBlogs, setRecentBlogs] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            try {
                const [allRes, publishedRes, draftRes] = await Promise.all([
                    getAllBlogs(1, 5, ''),
                    getAllBlogs(1, 1, 'published'),
                    getAllBlogs(1, 1, 'draft'),
                ]);

                setStats({
                    total: allRes.data.total,
                    published: publishedRes.data.total,
                    drafts: draftRes.data.total,
                });
                setRecentBlogs(allRes.data.data || []);
            } catch (error) {
                console.error('Failed to fetch dashboard data:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchData();
    }, []);

    if (loading) {
        return (
            <div className="loading">
                <div className="spinner"></div>
            </div>
        );
    }

    return (
        <div>
            <div className="page-header">
                <h1 className="page-title">Dashboard</h1>
                <Link to="/blogs/new" className="btn btn-primary">
                    <FiPlus /> New Blog
                </Link>
            </div>

            <div className="stats-grid">
                <div className="stat-card primary">
                    <h3>Total Blogs</h3>
                    <div className="stat-value">{stats.total}</div>
                </div>
                <div className="stat-card success">
                    <h3>Published</h3>
                    <div className="stat-value">{stats.published}</div>
                </div>
                <div className="stat-card warning">
                    <h3>Drafts</h3>
                    <div className="stat-value">{stats.drafts}</div>
                </div>
            </div>

            <div className="card">
                <h2 style={{ marginBottom: '1rem' }}>Recent Blogs</h2>

                {recentBlogs.length === 0 ? (
                    <div className="empty-state">
                        <FiFileText />
                        <p>No blogs yet. Create your first blog!</p>
                        <Link to="/blogs/new" className="btn btn-primary" style={{ marginTop: '1rem' }}>
                            <FiPlus /> Create Blog
                        </Link>
                    </div>
                ) : (
                    <div className="table-container">
                        <table className="table">
                            <thead>
                                <tr>
                                    <th>Title</th>
                                    <th>Status</th>
                                    <th>Date</th>
                                    <th>Actions</th>
                                </tr>
                            </thead>
                            <tbody>
                                {recentBlogs.map((blog) => (
                                    <tr key={blog.id}>
                                        <td>{blog.title}</td>
                                        <td>
                                            <span className={`badge ${blog.status === 'published' ? 'badge-success' : 'badge-warning'}`}>
                                                {blog.status === 'published' ? <FiCheck size={12} /> : <FiEdit3 size={12} />}
                                                {' '}{blog.status}
                                            </span>
                                        </td>
                                        <td>{new Date(blog.created_at).toLocaleDateString()}</td>
                                        <td>
                                            <Link to={`/blogs/${blog.id}`} className="btn btn-secondary btn-icon">
                                                <FiEdit3 />
                                            </Link>
                                        </td>
                                    </tr>
                                ))}
                            </tbody>
                        </table>
                    </div>
                )}
            </div>
        </div>
    );
}

export default Dashboard;
