/**
 * Auth Store (Zustand)
 * Manages authentication state globally
 */

import { create } from 'zustand';
import authService from '../services/authService';

export const useAuthStore = create((set) => ({
  admin: null,
  loading: false,
  error: null,
  isAuthenticated: false,

  login: async (email, password) => {
    set({ loading: true, error: null });
    try {
      const response = await authService.login(email, password);
      const { token, admin } = response.data;

      authService.setToken(token);
      set({
        admin,
        isAuthenticated: true,
        loading: false,
      });

      return response.data;
    } catch (error) {
      const errorMsg = error.response?.data?.message || 'Login failed';
      set({ error: errorMsg, loading: false });
      throw error;
    }
  },

  logout: async () => {
    try {
      await authService.logout();
    } catch (error) {
      console.error('Logout error:', error);
    } finally {
      authService.removeToken();
      set({
        admin: null,
        isAuthenticated: false,
      });
    }
  },

  checkAuth: async () => {
    if (!authService.isAuthenticated()) {
      set({ isAuthenticated: false });
      return;
    }

    try {
      const response = await authService.getMe();
      set({
        admin: response.data.admin,
        isAuthenticated: true,
      });
    } catch (error) {
      authService.removeToken();
      set({
        admin: null,
        isAuthenticated: false,
      });
    }
  },

  clearError: () => set({ error: null }),
}));

export default useAuthStore;
