/**
 * Modern Admin Login Page
 * Professional Teal/Slate Theme
 */

import { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../utils/authStore';
import { MdEmail, MdLock, MdLogin } from 'react-icons/md';
import toast from 'react-hot-toast';

export default function AdminLogin() {
  const navigate = useNavigate();
  const { login } = useAuthStore();
  const [loading, setLoading] = useState(false);
  const [formData, setFormData] = useState({
    email: '',
    password: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData({
      ...formData,
      [name]: value,
    });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      const data = await login(formData.email, formData.password);
      
      // Keep compatibility with other parts of the app that expect 'token' instead of 'authToken'
      if (data && data.token) {
        localStorage.setItem('token', data.token);
        localStorage.setItem('admin', JSON.stringify(data.admin));
      }

      toast.success('Welcome back!');
      navigate('/admin/dashboard');
    } catch (error) {
      console.error('Login error:', error);
      toast.error(error?.response?.data?.message || 'Login failed. Please try again.');
    } finally {
      setLoading(false);
    }
  };

  const fillDemoCredentials = () => {
    setFormData({
      email: 'admin@mindframe.com',
      password: 'SecurePassword123!',
    });
  };

  return (
    <div className="min-h-screen bg-gradient-to-br from-slate-50 to-slate-100 flex items-center justify-center p-4">
      {/* Decorative Background Blurs */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-gradient-to-br from-teal-400/10 to-teal-600/5 rounded-full blur-3xl -z-10"></div>
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-gradient-to-tr from-teal-400/10 to-teal-600/5 rounded-full blur-3xl -z-10"></div>

      <div className="w-full max-w-md">
        {/* Header with Gradient Bar */}
        <div className="h-1 bg-gradient-to-r from-teal-500 to-teal-600 rounded-full mb-8"></div>

        {/* Login Card */}
        <div className="bg-white rounded-2xl shadow-2xl overflow-hidden border border-slate-100">
          {/* Card Header */}
          <div className="bg-gradient-to-r from-teal-500/5 to-slate-500/5 p-8 border-b border-slate-100">
            <h1 className="text-3xl font-bold text-slate-900">Admin Panel</h1>
            <p className="text-sm text-slate-600 mt-2">Manage your digital marketing business</p>
          </div>

          {/* Form */}
          <form onSubmit={handleSubmit} className="p-8 space-y-6">
            {/* Email Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Email Address</label>
              <div className="relative">
                <MdEmail className="absolute left-3 top-3.5 text-xl text-slate-400" />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="admin@mindframe.com"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {/* Password Input */}
            <div>
              <label className="block text-sm font-semibold text-slate-700 mb-2">Password</label>
              <div className="relative">
                <MdLock className="absolute left-3 top-3.5 text-xl text-slate-400" />
                <input
                  type="password"
                  name="password"
                  value={formData.password}
                  onChange={handleChange}
                  className="w-full pl-10 pr-4 py-3 border border-slate-300 rounded-lg focus:outline-none focus:border-teal-500 focus:ring-2 focus:ring-teal-500/20 transition-all"
                  placeholder="••••••••"
                  required
                  disabled={loading}
                />
              </div>
            </div>

            {/* Submit Button */}
            <button
              type="submit"
              disabled={loading}
              className="w-full px-6 py-3 bg-gradient-to-r from-teal-500 to-teal-600 hover:from-teal-600 hover:to-teal-700 text-white rounded-lg font-semibold transition-all shadow-lg hover:shadow-xl disabled:opacity-50 disabled:cursor-not-allowed flex items-center justify-center gap-2 active:scale-95"
            >
              <MdLogin className="text-lg" />
              {loading ? 'Logging in...' : 'Login to Admin'}
            </button>
          </form>

          {/* Demo Credentials Section */}
          <div className="px-8 pb-6 border-t border-slate-100">
            <p className="text-xs text-slate-600 mb-3">Demo Credentials for Testing:</p>
            <div className="bg-slate-50 rounded-lg p-4 mb-4 border border-slate-200">
              <p className="text-xs text-slate-700 mb-1">
                <span className="font-semibold">Email:</span> admin@mindframe.com
              </p>
              <p className="text-xs text-slate-700">
                <span className="font-semibold">Password:</span> SecurePassword123!
              </p>
            </div>
            <button
              type="button"
              onClick={fillDemoCredentials}
              className="w-full px-4 py-2 bg-slate-100 hover:bg-slate-200 text-slate-700 rounded-lg font-medium text-sm transition-colors"
            >
              Use Demo Credentials
            </button>
          </div>

          {/* Footer */}
          <div className="px-8 py-4 bg-slate-50 border-t border-slate-100 text-center">
            <p className="text-xs text-slate-500">
              🔒 Secure Admin Access • Protected by JWT
            </p>
          </div>
        </div>

        {/* Additional Info */}
        <p className="text-center text-xs text-slate-500 mt-6">
          Mindframe India © 2024 • Digital Marketing Agency
        </p>
      </div>
    </div>
  );
}
