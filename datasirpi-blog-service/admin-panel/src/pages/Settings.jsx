import { useState } from 'react';
import { FiSun, FiMoon, FiMonitor, FiSave, FiCheck } from 'react-icons/fi';
import Layout from '../components/Layout';
import { useTheme } from '../hooks/useTheme';

function Settings() {
    const { theme, setTheme } = useTheme();
    const [saved, setSaved] = useState(false);
    const [settings, setSettings] = useState({
        autoSave: true,
        autoSaveInterval: 2000,
        showWordCount: true,
        defaultStatus: 'draft',
    });

    const handleSave = () => {
        localStorage.setItem('editorSettings', JSON.stringify(settings));
        setSaved(true);
        setTimeout(() => setSaved(false), 2000);
    };

    return (
        <Layout>
            <div className="page-header">
                <h1 className="page-title">Settings</h1>
                <button className="btn btn-primary" onClick={handleSave}>
                    {saved ? <FiCheck /> : <FiSave />}
                    {saved ? 'Saved!' : 'Save Settings'}
                </button>
            </div>

            <div style={{ maxWidth: '600px' }}>
                {/* Appearance */}
                <div className="card" style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                        Appearance
                    </h2>

                    <div className="form-group">
                        <label className="form-label">Theme</label>
                        <div style={{ display: 'flex', gap: '0.75rem' }}>
                            <button
                                className={`btn ${theme === 'light' ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => setTheme('light')}
                                style={{ flex: 1 }}
                            >
                                <FiSun />
                                Light
                            </button>
                            <button
                                className={`btn ${theme === 'dark' ? 'btn-primary' : 'btn-secondary'}`}
                                onClick={() => setTheme('dark')}
                                style={{ flex: 1 }}
                            >
                                <FiMoon />
                                Dark
                            </button>
                            <button
                                className="btn btn-secondary"
                                onClick={() => {
                                    const prefersDark = window.matchMedia('(prefers-color-scheme: dark)').matches;
                                    setTheme(prefersDark ? 'dark' : 'light');
                                }}
                                style={{ flex: 1 }}
                                title="Use system preference"
                            >
                                <FiMonitor />
                                System
                            </button>
                        </div>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                            Choose between light and dark theme, or auto-detect from your system settings.
                        </p>
                    </div>
                </div>

                {/* Editor Settings */}
                <div className="card" style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                        Editor Settings
                    </h2>

                    <div className="form-group">
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                checked={settings.autoSave}
                                onChange={(e) => setSettings(prev => ({ ...prev, autoSave: e.target.checked }))}
                                style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
                            />
                            <span>
                                <strong style={{ display: 'block' }}>Auto-save</strong>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                    Automatically save changes while editing
                                </span>
                            </span>
                        </label>
                    </div>

                    <div className="form-group">
                        <label className="form-label">Auto-save Interval</label>
                        <select
                            className="form-select"
                            value={settings.autoSaveInterval}
                            onChange={(e) => setSettings(prev => ({ ...prev, autoSaveInterval: parseInt(e.target.value) }))}
                        >
                            <option value={1000}>Every 1 second</option>
                            <option value={2000}>Every 2 seconds</option>
                            <option value={5000}>Every 5 seconds</option>
                            <option value={10000}>Every 10 seconds</option>
                            <option value={30000}>Every 30 seconds</option>
                        </select>
                    </div>

                    <div className="form-group">
                        <label style={{ display: 'flex', alignItems: 'center', gap: '0.75rem', cursor: 'pointer' }}>
                            <input
                                type="checkbox"
                                checked={settings.showWordCount}
                                onChange={(e) => setSettings(prev => ({ ...prev, showWordCount: e.target.checked }))}
                                style={{ width: '18px', height: '18px', accentColor: 'var(--primary)' }}
                            />
                            <span>
                                <strong style={{ display: 'block' }}>Show Word Count</strong>
                                <span style={{ fontSize: '0.75rem', color: 'var(--text-muted)' }}>
                                    Display word count in the editor footer
                                </span>
                            </span>
                        </label>
                    </div>
                </div>

                {/* Default Settings */}
                <div className="card" style={{ marginBottom: '1.5rem' }}>
                    <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                        Defaults
                    </h2>

                    <div className="form-group">
                        <label className="form-label">Default Blog Status</label>
                        <select
                            className="form-select"
                            value={settings.defaultStatus}
                            onChange={(e) => setSettings(prev => ({ ...prev, defaultStatus: e.target.value }))}
                        >
                            <option value="draft">Draft</option>
                            <option value="published">Published</option>
                        </select>
                        <p style={{ fontSize: '0.75rem', color: 'var(--text-muted)', marginTop: '0.5rem' }}>
                            Default status for new blog posts
                        </p>
                    </div>
                </div>

                {/* Keyboard Shortcuts */}
                <div className="card">
                    <h2 style={{ fontSize: '1.125rem', fontWeight: '600', marginBottom: '1.5rem' }}>
                        Keyboard Shortcuts
                    </h2>

                    <div style={{ display: 'grid', gap: '0.75rem' }}>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Bold</span>
                            <kbd>Ctrl + B</kbd>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Italic</span>
                            <kbd>Ctrl + I</kbd>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Underline</span>
                            <kbd>Ctrl + U</kbd>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Link</span>
                            <kbd>Ctrl + K</kbd>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Quick Commands</span>
                            <kbd>/</kbd>
                        </div>
                        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center' }}>
                            <span>Save Draft</span>
                            <kbd>Ctrl + S</kbd>
                        </div>
                    </div>
                </div>
            </div>
        </Layout>
    );
}

export default Settings;
