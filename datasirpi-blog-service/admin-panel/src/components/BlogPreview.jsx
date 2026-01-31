import { useRef, useState } from 'react';
import { FiX, FiDownload, FiPrinter, FiMaximize2, FiMinimize2, FiShare2 } from 'react-icons/fi';

function BlogPreview({ blog, onClose }) {
    const contentRef = useRef(null);
    const [isFullscreen, setIsFullscreen] = useState(false);
    const [exporting, setExporting] = useState(false);

    const handleExportPDF = async () => {
        if (!contentRef.current) return;

        setExporting(true);
        try {
            // Dynamically import html2pdf to avoid SSR issues
            const html2pdf = (await import('html2pdf.js')).default;

            const element = contentRef.current;
            const opt = {
                margin: [0.75, 0.75, 0.75, 0.75],
                filename: `${blog.slug || 'blog'}.pdf`,
                image: { type: 'jpeg', quality: 0.98 },
                html2canvas: {
                    scale: 2,
                    useCORS: true,
                    letterRendering: true,
                },
                jsPDF: {
                    unit: 'in',
                    format: 'a4',
                    orientation: 'portrait'
                },
                pagebreak: { mode: ['avoid-all', 'css', 'legacy'] }
            };

            await html2pdf().set(opt).from(element).save();
        } catch (error) {
            console.error('Failed to export PDF:', error);
            alert('Failed to export PDF. Please try again.');
        } finally {
            setExporting(false);
        }
    };

    const handlePrint = () => {
        const printContent = contentRef.current.innerHTML;
        const printWindow = window.open('', '_blank');
        printWindow.document.write(`
      <!DOCTYPE html>
      <html>
        <head>
          <title>${blog.title}</title>
          <style>
            body {
              font-family: 'Georgia', serif;
              line-height: 1.8;
              max-width: 800px;
              margin: 40px auto;
              padding: 0 20px;
              color: #1a1a1a;
            }
            h1 { font-size: 2.5rem; margin-bottom: 0.5rem; }
            h2 { font-size: 1.75rem; margin-top: 2rem; }
            h3 { font-size: 1.25rem; margin-top: 1.5rem; }
            p { margin: 1rem 0; }
            img { max-width: 100%; height: auto; }
            pre { background: #f5f5f5; padding: 1rem; overflow-x: auto; }
            code { background: #f5f5f5; padding: 0.2em 0.4em; }
            blockquote { border-left: 4px solid #ccc; padding-left: 1rem; margin: 1rem 0; color: #666; }
            table { border-collapse: collapse; width: 100%; margin: 1rem 0; }
            th, td { border: 1px solid #ddd; padding: 0.75rem; text-align: left; }
            th { background: #f5f5f5; }
            .callout { padding: 1rem; margin: 1rem 0; border-radius: 4px; border-left: 4px solid; }
            .callout-info { background: #e3f2fd; border-color: #2196f3; }
            .callout-warning { background: #fff3e0; border-color: #ff9800; }
            .callout-success { background: #e8f5e9; border-color: #4caf50; }
            .callout-error { background: #ffebee; border-color: #f44336; }
            .callout-tip { background: #f3e5f5; border-color: #9c27b0; }
            .meta { color: #666; font-size: 0.875rem; margin-bottom: 2rem; }
            .tags { display: flex; gap: 0.5rem; flex-wrap: wrap; margin-top: 0.5rem; }
            .tag { background: #eee; padding: 0.25rem 0.75rem; border-radius: 100px; font-size: 0.75rem; }
            @media print {
              body { margin: 0; }
            }
          </style>
        </head>
        <body>
          ${printContent}
        </body>
      </html>
    `);
        printWindow.document.close();
        printWindow.print();
    };

    const handleShare = async () => {
        const shareData = {
            title: blog.title,
            text: blog.excerpt,
            url: window.location.origin + '/blogs/' + blog.slug,
        };

        if (navigator.share) {
            try {
                await navigator.share(shareData);
            } catch (error) {
                console.log('Share cancelled');
            }
        } else {
            // Fallback: copy to clipboard
            navigator.clipboard.writeText(shareData.url);
            alert('Link copied to clipboard!');
        }
    };

    const formatDate = (dateString) => {
        return new Date(dateString).toLocaleDateString('en-US', {
            year: 'numeric',
            month: 'long',
            day: 'numeric'
        });
    };

    return (
        <div className={`preview-modal-overlay ${isFullscreen ? 'fullscreen' : ''}`}>
            <div className="preview-modal">
                <div className="preview-modal-header">
                    <h2>Blog Preview</h2>
                    <div className="preview-modal-actions">
                        <button
                            className="btn btn-secondary btn-sm"
                            onClick={handleShare}
                            title="Share"
                        >
                            <FiShare2 />
                        </button>
                        <button
                            className="btn btn-secondary btn-sm"
                            onClick={handlePrint}
                            title="Print"
                        >
                            <FiPrinter />
                        </button>
                        <button
                            className="btn btn-primary btn-sm"
                            onClick={handleExportPDF}
                            disabled={exporting}
                            title="Download PDF"
                        >
                            <FiDownload />
                            {exporting ? 'Exporting...' : 'PDF'}
                        </button>
                        <button
                            className="btn btn-ghost btn-sm"
                            onClick={() => setIsFullscreen(!isFullscreen)}
                            title={isFullscreen ? 'Exit Fullscreen' : 'Fullscreen'}
                        >
                            {isFullscreen ? <FiMinimize2 /> : <FiMaximize2 />}
                        </button>
                        <button className="preview-modal-close" onClick={onClose}>
                            <FiX />
                        </button>
                    </div>
                </div>

                <div className="preview-modal-body">
                    <div className="preview-content-wrapper" ref={contentRef}>
                        {/* Blog Header */}
                        <article className="blog-preview-article">
                            {blog.thumbnail && (
                                <img
                                    src={blog.thumbnail}
                                    alt={blog.title}
                                    className="blog-preview-thumbnail"
                                />
                            )}

                            <h1 className="blog-preview-title">{blog.title}</h1>

                            <div className="meta">
                                <span>By {blog.author?.name || 'Admin'}</span>
                                <span> • </span>
                                <span>{formatDate(blog.created_at)}</span>
                                {blog.tags && blog.tags.length > 0 && (
                                    <div className="tags">
                                        {blog.tags.map(tag => (
                                            <span key={tag.id || tag.name} className="tag">
                                                {tag.name || tag}
                                            </span>
                                        ))}
                                    </div>
                                )}
                            </div>

                            {blog.excerpt && (
                                <p className="blog-preview-excerpt">{blog.excerpt}</p>
                            )}

                            <hr style={{ margin: '2rem 0', border: 'none', borderTop: '1px solid #eee' }} />

                            {/* Blog Content */}
                            <div
                                className="blog-content"
                                dangerouslySetInnerHTML={{ __html: blog.content }}
                            />
                        </article>
                    </div>
                </div>
            </div>
        </div>
    );
}

export default BlogPreview;
