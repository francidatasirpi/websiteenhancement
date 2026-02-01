import React, { useEffect, useState, useCallback } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import { routesPath, blogApiConfig } from '../../constants';
import './blogs.scss';
import SEO from '../../common/components/SEO';

const BlogList = ({ blogs, onSelectBlog }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  const handleClick = (blog) => {
    navigate(`${routesPath.blogs}/${blog.slug}`);
  };

  return (
    <div className="blog-list">
      <h1 className="blog-list-title">Our Blog</h1>
      <p className="blog-list-subtitle">Insights and updates from Datasirpi</p>

      <div className="blog-grid">
        {blogs.map(blog => (
          <article
            key={blog.id}
            className="blog-card"
            onClick={() => handleClick(blog)}
          >
            {blog.thumbnail && (
              <div className="blog-card-image">
                <img src={blog.thumbnail} alt={blog.title} />
              </div>
            )}
            <div className="blog-card-content">
              <div className="blog-card-meta">
                <span className="blog-card-date">{formatDate(blog.created_at)}</span>
                {blog.tags && blog.tags.length > 0 && (
                  <div className="blog-card-tags">
                    {blog.tags.slice(0, 3).map(tag => (
                      <span key={tag.id || tag.name} className="blog-tag">
                        {tag.name || tag}
                      </span>
                    ))}
                  </div>
                )}
              </div>
              <h2 className="blog-card-title">{blog.title}</h2>
              <p className="blog-card-excerpt">{blog.excerpt}</p>
              <div className="blog-card-author">
                <span>By {blog.author?.name || 'Datasirpi'}</span>
              </div>
            </div>
          </article>
        ))}
      </div>

      {blogs.length === 0 && (
        <div className="blog-empty">
          <p>No blog posts available yet.</p>
        </div>
      )}
    </div>
  );
};

const BlogDetail = ({ blog, onBack }) => {
  const navigate = useNavigate();

  const formatDate = (dateString) => {
    return new Date(dateString).toLocaleDateString('en-US', {
      year: 'numeric',
      month: 'long',
      day: 'numeric'
    });
  };

  return (
    <div className="blog-detail">
      <button className="blog-back-btn" onClick={() => navigate(routesPath.blogs)}>
        ← Back to Blogs
      </button>

      <article className="blog-article">
        {blog.thumbnail && (
          <img
            src={blog.thumbnail}
            alt={blog.title}
            className="blog-article-thumbnail"
          />
        )}

        <header className="blog-article-header">
          <h1 className="blog-article-title">{blog.title}</h1>

          <div className="blog-article-meta">
            <span className="blog-article-author">By {blog.author?.name || 'Datasirpi'}</span>
            <span className="blog-article-date">{formatDate(blog.created_at)}</span>
          </div>

          {blog.tags && blog.tags.length > 0 && (
            <div className="blog-article-tags">
              {blog.tags.map(tag => (
                <span key={tag.id || tag.name} className="blog-tag">
                  {tag.name || tag}
                </span>
              ))}
            </div>
          )}
        </header>

        {blog.excerpt && (
          <p className="blog-article-excerpt">{blog.excerpt}</p>
        )}

        <div
          className="blog-article-content"
          dangerouslySetInnerHTML={{ __html: blog.content }}
        />
      </article>
    </div>
  );
};

const Blogs = () => {
  const { id } = useParams(); // id is actually the slug
  const [blogs, setBlogs] = useState([]);
  const [selectedBlog, setSelectedBlog] = useState(null);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState(null);

  const fetchBlogs = useCallback(async () => {
    try {
      setLoading(true);
      setError(null);

      // Fetch blogs filtered by site tag
      const url = blogApiConfig.siteTag
        ? `${blogApiConfig.baseUrl}/api/blogs/tags/${blogApiConfig.siteTag}`
        : `${blogApiConfig.baseUrl}/api/blogs`;

      const response = await fetch(url);

      if (!response.ok) {
        throw new Error('Failed to fetch blogs');
      }

      const result = await response.json();
      // API returns { data: [...], total, page, ... } so extract the data array
      const blogsData = result.data || result || [];
      setBlogs(Array.isArray(blogsData) ? blogsData : []);
    } catch (err) {
      console.error('Error fetching blogs:', err);
      setError(err.message);
      setBlogs([]); // Set empty array on error
    } finally {
      setLoading(false);
    }
  }, []);

  const fetchBlogBySlug = useCallback(async (slug) => {
    try {
      setLoading(true);
      setError(null);

      const response = await fetch(`${blogApiConfig.baseUrl}/api/blogs/${slug}`);

      if (!response.ok) {
        throw new Error('Blog not found');
      }

      const data = await response.json();
      setSelectedBlog(data);
    } catch (err) {
      console.error('Error fetching blog:', err);
      setError(err.message);
    } finally {
      setLoading(false);
    }
  }, []);

  useEffect(() => {
    if (id) {
      fetchBlogBySlug(id);
    } else {
      fetchBlogs();
      setSelectedBlog(null);
    }
  }, [id, fetchBlogs, fetchBlogBySlug]);

  if (loading) {
    return (
      <div className="blog-container">
        <div className="blog-loading">
          <div className="blog-spinner"></div>
          <p>Loading...</p>
        </div>
      </div>
    );
  }

  if (error) {
    return (
      <div className="blog-container">
        <div className="blog-error">
          <p>Unable to load blogs. Please try again later.</p>
          <button onClick={() => id ? fetchBlogBySlug(id) : fetchBlogs()}>
            Retry
          </button>
        </div>
      </div>
    );
  }

  return (
    <div className="blog-container">
      <SEO
        title={selectedBlog ? selectedBlog.title : "Blog"}
        description={selectedBlog ? selectedBlog.excerpt : "Insights, updates and technical articles from Datasirpi on platform engineering, cybersecurity, Salesforce, and AI."}
        canonical={selectedBlog ? `/blogs/${selectedBlog.slug}` : "/blogs"}
        keywords="blog, technology, platform engineering, cybersecurity, Salesforce, AI, cloud computing"
        type={selectedBlog ? "article" : "website"}
      />
      {selectedBlog ? (
        <BlogDetail blog={selectedBlog} />
      ) : (
        <BlogList blogs={blogs} />
      )}
    </div>
  );
};

export default Blogs;
