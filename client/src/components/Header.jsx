/**
 * Header Component
 * Navigation header with logo and menu
 */

import { useState } from 'react';
import { Link } from 'react-router-dom';
import { useAuthStore } from '../utils/authStore';

export default function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const { isAuthenticated, logout } = useAuthStore();

  const handleLogout = async () => {
    await logout();
    setIsOpen(false);
  };

  return (
    <header className="bg-white shadow-md sticky top-0 z-50">
      <nav className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between items-center h-16">
          {/* Logo */}
          <Link
            to="/"
            className="flex items-center gap-2 text-2xl font-bold text-primary hover:text-secondary transition-colors"
          >
            <span className="bg-gradient-to-r from-secondary to-accent bg-clip-text text-transparent">
              Mindframe
            </span>
            <span className="text-gray-600">Agency</span>
          </Link>

          {/* Desktop Menu */}
          <div className="hidden md:flex items-center gap-8">
            <Link
              to="/"
              className="text-gray-600 hover:text-secondary transition-colors font-medium"
            >
              Home
            </Link>
            <Link
              to="/blogs"
              className="text-gray-600 hover:text-secondary transition-colors font-medium"
            >
              Blogs
            </Link>
            <Link
              to="/about"
              className="text-gray-600 hover:text-secondary transition-colors font-medium"
            >
              About
            </Link>
            <Link
              to="/contact"
              className="text-gray-600 hover:text-secondary transition-colors font-medium"
            >
              Contact
            </Link>

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/admin/login"
                className="px-4 py-2 bg-secondary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium"
              >
                Admin
              </Link>
            )}
          </div>

          {/* Mobile Menu Button */}
          <button
            onClick={() => setIsOpen(!isOpen)}
            className="md:hidden flex flex-col gap-1 cursor-pointer"
          >
            <span
              className={`h-0.5 w-6 bg-primary transition-all ${
                isOpen ? 'rotate-45 translate-y-2' : ''
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-primary transition-all ${
                isOpen ? 'opacity-0' : ''
              }`}
            ></span>
            <span
              className={`h-0.5 w-6 bg-primary transition-all ${
                isOpen ? '-rotate-45 -translate-y-2' : ''
              }`}
            ></span>
          </button>
        </div>

        {/* Mobile Menu */}
        {isOpen && (
          <div className="md:hidden pb-4 border-t border-gray-200 flex flex-col gap-2">
            <Link
              to="/"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Home
            </Link>
            <Link
              to="/blogs"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Blogs
            </Link>
            <Link
              to="/about"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              About
            </Link>
            <Link
              to="/contact"
              onClick={() => setIsOpen(false)}
              className="block px-4 py-2 text-gray-600 hover:bg-gray-100 rounded-lg transition-colors"
            >
              Contact
            </Link>

            {isAuthenticated ? (
              <button
                onClick={handleLogout}
                className="w-full text-left px-4 py-2 bg-red-500 text-white rounded-lg hover:bg-red-600 transition-colors font-medium"
              >
                Logout
              </button>
            ) : (
              <Link
                to="/admin/login"
                onClick={() => setIsOpen(false)}
                className="block px-4 py-2 bg-secondary text-white rounded-lg hover:bg-blue-700 transition-colors font-medium text-center"
              >
                Admin
              </Link>
            )}
          </div>
        )}
      </nav>
    </header>
  );
}
