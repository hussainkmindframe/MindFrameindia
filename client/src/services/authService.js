/**
 * Authentication Service
 * Handles all auth-related API calls
 */

import apiClient from './apiClient';

export const authService = {
  login: (email, password) =>
    apiClient.post('/auth/login', { email, password }),

  getMe: () =>
    apiClient.get('/auth/me'),

  logout: () =>
    apiClient.post('/auth/logout'),

  setToken: (token) => {
    localStorage.setItem('authToken', token);
  },

  getToken: () =>
    localStorage.getItem('authToken'),

  removeToken: () => {
    localStorage.removeItem('authToken');
  },

  isAuthenticated: () =>
    !!localStorage.getItem('authToken'),
};

export default authService;
