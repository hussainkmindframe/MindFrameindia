/**
 * Admin Sidebar Component
 * Responsive sidebar with hamburger menu
 */

import { useState } from 'react';
import { MdDashboard, MdArticle, MdAdd, MdLogout, MdClose, MdMenu } from 'react-icons/md';

export default function AdminSidebar({ activeTab, setActiveTab, isOpen, onToggleSidebar, onLogout }) {
  const menuItems = [
    { id: 'dashboard', label: 'Dashboard', icon: MdDashboard, description: 'View overview' },
    { id: 'blogs', label: 'Manage Blogs', icon: MdArticle, description: 'Edit blogs' },
    { id: 'add', label: 'Add New Blog', icon: MdAdd, description: 'Create blog' },
  ];

  return (
    <>
      {/* Mobile Overlay */}
      {isOpen && (
        <div
          className="fixed inset-0 bg-black/50 md:hidden z-30 backdrop-blur-sm transition-opacity duration-300"
          onClick={onToggleSidebar}
        ></div>
      )}

      {/* Sidebar */}
      <aside
        className={`fixed md:static inset-y-0 left-0 w-72 bg-gradient-to-b from-primary to-primary/90 text-white transition-all duration-300 ease-in-out z-40 flex flex-col shadow-xl ${
          isOpen ? 'translate-x-0' : '-translate-x-full md:translate-x-0'
        }`}
      >
        {/* Header */}
        <div className="relative px-6 py-8 border-b border-gray-700/50 backdrop-blur-md bg-black/10">
          {/* Close Button (Mobile Only) */}
          <button
            onClick={onToggleSidebar}
            className="absolute top-4 right-4 md:hidden p-2 hover:bg-gray-700 rounded-lg transition-colors"
            aria-label="Close sidebar"
          >
            <MdClose className="w-6 h-6" />
          </button>

          {/* Logo */}
          <div>
            <h2 className="text-2xl font-bold flex items-center gap-2">
              <div className="text-3xl">🎯</div>
              <span className="bg-gradient-to-r from-secondary via-blue-400 to-accent bg-clip-text text-transparent">
                Mindframe
              </span>
            </h2>
            <p className="text-xs text-gray-400 mt-1 font-semibold uppercase tracking-wider">Admin Panel</p>
          </div>
        </div>

        {/* Menu Items */}
        <nav className="flex-1 px-4 py-8 space-y-3 overflow-y-auto scrollbar-hide">
          {menuItems.map((item) => {
            const Icon = item.icon;
            return (
              <button
                key={item.id}
                onClick={() => {
                  setActiveTab(item.id);
                  // Close sidebar on mobile after selection
                  if (window.innerWidth < 768) {
                    onToggleSidebar();
                  }
                }}
                className={`w-full text-left px-4 py-4 rounded-xl transition-all duration-200 flex items-center gap-4 group relative overflow-hidden ${
                  activeTab === item.id
                    ? 'bg-gradient-to-r from-secondary to-blue-600 text-white shadow-lg shadow-secondary/50 scale-105'
                    : 'text-gray-300 hover:bg-gray-700/40 hover:text-white'
                }`}
              >
                {/* Background Gradient Animation */}
                {activeTab === item.id && (
                  <div className="absolute inset-0 bg-gradient-to-r from-secondary/20 to-blue-600/20 opacity-50 animate-pulse"></div>
                )}

                {/* Content */}
                <Icon className="text-2xl group-hover:scale-110 transition-transform duration-200" />
                <div className="flex-1 relative z-10">
                  <p className="font-semibold text-sm md:text-base leading-tight">{item.label}</p>
                  <p className={`text-xs mt-1 ${activeTab === item.id ? 'text-blue-100' : 'text-gray-400'}`}>
                    {item.description}
                  </p>
                </div>

                {/* Active Indicator */}
                {activeTab === item.id && (
                  <div className="w-2 h-2 bg-white rounded-full animate-pulse"></div>
                )}
              </button>
            );
          })}
        </nav>

        {/* Divider */}
        <div className="border-t border-gray-700/50"></div>

        {/* User Info & Logout */}
        <div className="px-4 py-6 space-y-4">
          {/* User Card */}
          <div className="bg-gradient-to-br from-gray-700/30 to-gray-800/30 rounded-xl p-4 border border-gray-600/50 backdrop-blur-sm">
            <div className="flex items-center gap-3">
              <div className="w-12 h-12 bg-gradient-to-br from-secondary to-accent rounded-lg flex items-center justify-center text-xl font-bold">
                👤
              </div>
              <div className="flex-1 min-w-0">
                <p className="text-sm font-semibold text-white truncate">Admin User</p>
                <p className="text-xs text-gray-400 truncate">Administrator</p>
              </div>
            </div>
          </div>

          {/* Logout Button */}
          <button
            onClick={onLogout}
            className="w-full px-4 py-3 bg-gradient-to-r from-red-600 to-red-700 hover:from-red-700 hover:to-red-800 text-white rounded-xl transition-all duration-200 font-semibold flex items-center justify-center gap-2 shadow-lg hover:shadow-xl hover:scale-105 active:scale-95"
          >
            <MdLogout className="text-lg" />
            <span>Logout</span>
          </button>

          {/* Quick Info */}
          <div className="text-xs text-gray-400 text-center pt-2 border-t border-gray-700/50">
            <p>Logged in as Admin</p>
          </div>
        </div>
      </aside>
    </>
  );
}
