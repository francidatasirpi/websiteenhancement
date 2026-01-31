import { Routes, Route, Navigate } from 'react-router-dom';
import { useAuth } from './hooks/useAuth';
import Login from './pages/Login';
import Dashboard from './pages/Dashboard';
import BlogList from './pages/BlogList';
import BlogEditor from './pages/BlogEditor';
import Settings from './pages/Settings';

function ProtectedRoute({ children }) {
    const { user } = useAuth();

    if (!user) {
        return <Navigate to="/login" replace />;
    }

    return children;
}

function App() {
    return (
        <Routes>
            <Route path="/login" element={<Login />} />
            <Route path="/dashboard" element={
                <ProtectedRoute><Dashboard /></ProtectedRoute>
            } />
            <Route path="/blogs" element={
                <ProtectedRoute><BlogList /></ProtectedRoute>
            } />
            <Route path="/blogs/new" element={
                <ProtectedRoute><BlogEditor /></ProtectedRoute>
            } />
            <Route path="/blogs/:id" element={
                <ProtectedRoute><BlogEditor /></ProtectedRoute>
            } />
            <Route path="/settings" element={
                <ProtectedRoute><Settings /></ProtectedRoute>
            } />
            <Route path="/" element={<Navigate to="/dashboard" replace />} />
        </Routes>
    );
}

export default App;
