import { useState, useEffect, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { FiSave, FiArrowLeft, FiUpload, FiX, FiCheck, FiClock } from 'react-icons/fi';
import Layout from '../components/Layout';
import RichTextEditor from '../components/RichTextEditor';
import { getBlog, createBlog, updateBlog, uploadImage } from '../services/api';

function BlogEditor() {
    const { id } = useParams();
    const navigate = useNavigate();
    const [loading, setLoading] = useState(false);
    const [saving, setSaving] = useState(false);
    const [versions, setVersions] = useState([]);
    const [blog, setBlog] = useState({
        title: '',
        excerpt: '',
        content: '',
        thumbnail: '',
        status: 'draft',
        tags: [],
    });
    const [tagInput, setTagInput] = useState('');
    const [lastSavedAt, setLastSavedAt] = useState(null);

    useEffect(() => {
        if (id) {
            loadBlog();
        }
    }, [id]);

    const loadBlog = async () => {
        try {
            setLoading(true);
            const res = await getBlog(id);
            setBlog({
                title: res.data.title || '',
                excerpt: res.data.excerpt || '',
                content: res.data.content || '',
                thumbnail: res.data.thumbnail || '',
                status: res.data.status || 'draft',
                tags: res.data.tags?.map(t => t.name) || [],
            });
        } catch (error) {
            console.error('Failed to load blog:', error);
            alert('Failed to load blog');
        } finally {
            setLoading(false);
        }
    };

    const handleAutoSave = useCallback(async (content) => {
        if (!id) return; // Only auto-save for existing blogs

        try {
            await updateBlog(id, {
                ...blog,
                content,
                tags: blog.tags
            });
            setLastSavedAt(new Date());

            // Add to versions (local only for now)
            setVersions(prev => [{
                id: Date.now(),
                created_at: new Date().toISOString(),
                content: content,
                author: 'Auto-save'
            }, ...prev.slice(0, 9)]); // Keep last 10 versions

        } catch (error) {
            console.error('Auto-save failed:', error);
            throw error;
        }
    }, [id, blog]);

    const handleRestoreVersion = (version) => {
        if (window.confirm('Restore this version? Your current changes will be lost.')) {
            setBlog(prev => ({ ...prev, content: version.content }));
        }
    };

    const handleSubmit = async (status) => {
        if (!blog.title.trim()) {
            alert('Please enter a title');
            return;
        }
        if (!blog.excerpt.trim()) {
            alert('Please enter an excerpt');
            return;
        }
        if (!blog.content.trim()) {
            alert('Please add some content');
            return;
        }

        try {
            setSaving(true);
            const data = {
                ...blog,
                status,
                tags: blog.tags,
            };

            if (id) {
                await updateBlog(id, data);
            } else {
                await createBlog(data);
            }
            navigate('/blogs');
        } catch (error) {
            console.error('Failed to save blog:', error);
            alert('Failed to save blog');
        } finally {
            setSaving(false);
        }
    };

    const handleThumbnailUpload = async (e) => {
        const file = e.target.files[0];
        if (!file) return;

        try {
            const res = await uploadImage(file);
            setBlog(prev => ({ ...prev, thumbnail: res.data.url }));
        } catch (error) {
            console.error('Failed to upload thumbnail:', error);
            alert('Failed to upload thumbnail');
        }
    };

    const addTag = () => {
        const tag = tagInput.trim().toLowerCase();
        if (tag && !blog.tags.includes(tag)) {
            setBlog(prev => ({ ...prev, tags: [...prev.tags, tag] }));
            setTagInput('');
        }
    };

    const removeTag = (tag) => {
        setBlog(prev => ({ ...prev, tags: prev.tags.filter(t => t !== tag) }));
    };

    const handleTagKeyDown = (e) => {
        if (e.key === 'Enter') {
            e.preventDefault();
            addTag();
        }
    };

    if (loading) {
        return (
            <Layout>
                <div className="loading">
                    <div className="spinner" />
                </div>
            </Layout>
        );
    }

    return (
        <Layout>
            <div className="page-header">
                <div style={{ display: 'flex', alignItems: 'center', gap: '1rem' }}>
                    <button className="btn btn-ghost" onClick={() => navigate('/blogs')}>
                        <FiArrowLeft />
                    </button>
                    <h1 className="page-title">{id ? 'Edit Blog' : 'New Blog'}</h1>
                    {lastSavedAt && (
                        <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)', display: 'flex', alignItems: 'center', gap: '0.25rem' }}>
                            <FiClock size={12} />
                            Last saved {lastSavedAt.toLocaleTimeString()}
                        </span>
                    )}
                </div>
                <div style={{ display: 'flex', gap: '0.5rem' }}>
                    <button
                        className="btn btn-secondary"
                        onClick={() => handleSubmit('draft')}
                        disabled={saving}
                    >
                        <FiSave />
                        Save Draft
                    </button>
                    <button
                        className="btn btn-success"
                        onClick={() => handleSubmit('published')}
                        disabled={saving}
                    >
                        <FiCheck />
                        Publish
                    </button>
                </div>
            </div>

            <div style={{ display: 'grid', gridTemplateColumns: '1fr 300px', gap: '1.5rem' }}>
                {/* Main Content */}
                <div>
                    <div className="form-group">
                        <label className="form-label">Title</label>
                        <input
                            type="text"
                            className="form-input"
                            placeholder="Enter blog title..."
                            value={blog.title}
                            onChange={(e) => setBlog(prev => ({ ...prev, title: e.target.value }))}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Excerpt</label>
                        <textarea
                            className="form-textarea"
                            placeholder="Brief summary of the blog post..."
                            value={blog.excerpt}
                            onChange={(e) => setBlog(prev => ({ ...prev, excerpt: e.target.value }))}
                            rows={3}
                        />
                    </div>

                    <div className="form-group">
                        <label className="form-label">Content</label>
                        <RichTextEditor
                            content={blog.content}
                            onChange={(content) => setBlog(prev => ({ ...prev, content }))}
                            autoSave={!!id}
                            onAutoSave={handleAutoSave}
                            versions={versions}
                            onRestoreVersion={handleRestoreVersion}
                        />
                    </div>
                </div>

                {/* Sidebar */}
                <div>
                    <div className="card" style={{ marginBottom: '1rem' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' }}>Thumbnail</h3>
                        <label className={`image-upload ${blog.thumbnail ? 'has-image' : ''}`}>
                            <input
                                type="file"
                                accept="image/*"
                                onChange={handleThumbnailUpload}
                                style={{ display: 'none' }}
                            />
                            {blog.thumbnail ? (
                                <img src={blog.thumbnail} alt="Thumbnail" />
                            ) : (
                                <div className="image-upload-placeholder">
                                    <FiUpload />
                                    <p>Click to upload thumbnail</p>
                                </div>
                            )}
                        </label>
                        {blog.thumbnail && (
                            <button
                                className="btn btn-ghost btn-sm"
                                style={{ marginTop: '0.5rem', width: '100%' }}
                                onClick={() => setBlog(prev => ({ ...prev, thumbnail: '' }))}
                            >
                                <FiX /> Remove
                            </button>
                        )}
                    </div>

                    <div className="card" style={{ marginBottom: '1rem' }}>
                        <h3 style={{ marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' }}>Status</h3>
                        <select
                            className="form-select"
                            value={blog.status}
                            onChange={(e) => setBlog(prev => ({ ...prev, status: e.target.value }))}
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                    </div>

                    <div className="card">
                        <h3 style={{ marginBottom: '1rem', fontSize: '0.875rem', fontWeight: '600' }}>Tags</h3>
                        <div style={{ display: 'flex', gap: '0.5rem', marginBottom: '0.75rem' }}>
                            <input
                                type="text"
                                className="form-input"
                                placeholder="Add tag..."
                                value={tagInput}
                                onChange={(e) => setTagInput(e.target.value)}
                                onKeyDown={handleTagKeyDown}
                            />
                            <button className="btn btn-secondary btn-sm" onClick={addTag}>
                                Add
                            </button>
                        </div>
                        {blog.tags.length > 0 && (
                            <div className="tags">
                                {blog.tags.map(tag => (
                                    <span key={tag} className="tag">
                                        {tag}
                                        <button className="tag-remove" onClick={() => removeTag(tag)}>
                                            <FiX size={12} />
                                        </button>
                                    </span>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Auto-save Info */}
                    {id && (
                        <div className="card" style={{ marginTop: '1rem' }}>
                            <h3 style={{ marginBottom: '0.5rem', fontSize: '0.875rem', fontWeight: '600' }}>
                                <FiClock style={{ marginRight: '0.5rem' }} />
                                Auto-save
                            </h3>
                            <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                Changes are automatically saved every 2 seconds while editing.
                                {versions.length > 0 && ` ${versions.length} version(s) saved.`}
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </Layout>
    );
}

export default BlogEditor;
