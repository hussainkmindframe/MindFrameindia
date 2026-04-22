/**
 * ProtectedRoute Component
 * Ensures only authenticated admins can access routes
 */

import { Navigate } from 'react-router-dom';
import { useAuthStore } from '../utils/authStore';
import Loading from './Loading';

export default function ProtectedRoute({ children }) {
  const { isAuthenticated, authCheckComplete } = useAuthStore();

  // Wait for auth check to complete
  if (!authCheckComplete) {
    return <Loading />;
  }

  if (!isAuthenticated) {
    return <Navigate to="/admin/login" replace />;
  }

  return children;
}
