/**
 * ProtectedRoute Component
 * Ensures only authenticated admins can access routes
 */

import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../utils/authStore';
import Loading from './Loading';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, authCheckComplete } = useAuthStore();

  // If auth check is not complete, show loading
  if (!authCheckComplete) {
    return <Loading />;
  }

  // If not authenticated, redirect to login
  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  // Only render children if authenticated
  return children;
}
