import { NavLink, useNavigate } from 'react-router-dom';
import { useAuth } from '../hooks/useAuth';
import { useTheme } from '../hooks/useTheme';
import { FiHome, FiFileText, FiLogOut, FiSun, FiMoon, FiSettings } from 'react-icons/fi';

function Layout({ children }) {
    const { user, logout } = useAuth();
    const { theme, toggleTheme } = useTheme();
    const navigate = useNavigate();

    const handleLogout = () => {
        logout();
        navigate('/login');
    };

    return (
        <div className="layout">
            <aside className="sidebar">
                <div className="sidebar-logo">
                    <FiFileText size={28} />
                    <h1>Blog Admin</h1>
                </div>

                <nav className="sidebar-nav">
                    <NavLink to="/dashboard" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <FiHome />
                        <span>Dashboard</span>
                    </NavLink>
                    <NavLink to="/blogs" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <FiFileText />
                        <span>Blogs</span>
                    </NavLink>
                    <NavLink to="/settings" className={({ isActive }) => `nav-item ${isActive ? 'active' : ''}`}>
                        <FiSettings />
                        <span>Settings</span>
                    </NavLink>
                </nav>

                <div className="sidebar-footer">
                    <div className="sidebar-actions">
                        <button className="theme-toggle" onClick={toggleTheme} title={`Switch to ${theme === 'dark' ? 'light' : 'dark'} mode`}>
                            {theme === 'dark' ? <FiSun /> : <FiMoon />}
                            <span>{theme === 'dark' ? 'Light' : 'Dark'}</span>
                        </button>
                    </div>

                    <div className="user-info">
                        <div className="user-avatar">
                            {user?.name?.charAt(0) || 'A'}
                        </div>
                        <div className="user-details">
                            <div className="user-name">{user?.name || 'Admin'}</div>
                            <div className="user-role">{user?.role || 'Administrator'}</div>
                        </div>
                        <button className="btn btn-icon btn-ghost" onClick={handleLogout} title="Logout">
                            <FiLogOut />
                        </button>
                    </div>
                </div>
            </aside>

            <main className="main-content">
                {children}
            </main>
        </div>
    );
}

export default Layout;
