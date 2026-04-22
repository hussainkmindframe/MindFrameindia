/**
 * Admin Layout Component
 * Shared layout for all admin pages with sidebar and header
 */

import { useState, useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { useAuthStore } from '../utils/authStore';
import AdminSidebar from './AdminSidebar';
import { MdMenu, MdClose } from 'react-icons/md';

const gold = '#c9a84c';

const THEME = {
  bg: '#f8f9fa',
  bgCard: '#ffffff',
  border: '1px solid #eef2f6',
  text: '#1a1a1a',
  textMuted: '#6c757d',
  textDim: '#495057',
  gold: gold,
  green: '#10b981',
  font: "'Inter', 'Segoe UI', 'Georgia', serif",
};

export default function AdminLayout({ pageTitle, pageSubtitle, children }) {
  const navigate = useNavigate();
  const { admin, logout, checkAuth } = useAuthStore();
  const [sidebarOpen, setSidebarOpen] = useState(true);

  useEffect(() => { checkAuth(); }, []);

  const handleLogout = async () => {
    await logout();
    navigate('/admin/login');
  };

  const toggleSidebar = () => setSidebarOpen(!sidebarOpen);

  if (!admin) return null;

  return (
    <div style={{
      display: 'flex', height: '100vh',
      background: THEME.bg,
      fontFamily: THEME.font, overflow: 'hidden',
    }}>
      {/* Sidebar */}
      <AdminSidebar 
        isOpen={sidebarOpen} 
        onToggleSidebar={toggleSidebar}
        onLogout={handleLogout}
      />

      {/* Main */}
      <div style={{ flex: 1, display: 'flex', flexDirection: 'column', overflow: 'hidden', minWidth: 0 }}>

        {/* Header */}
        <header style={{
          background: '#ffffff',
          borderBottom: '1px solid #eef2f6',
          padding: '0 1.5rem',
          height: '64px',
          display: 'flex', alignItems: 'center', justifyContent: 'space-between',
          flexShrink: 0, gap: '1rem',
        }}>
          <div style={{ display: 'flex', alignItems: 'center', gap: '12px' }}>
            <button
              onClick={toggleSidebar}
              className="md:hidden"
              style={{
                background: '#f8f9fa', border: '1px solid #eef2f6',
                borderRadius: '8px', padding: '7px', cursor: 'pointer',
                color: '#6c757d', display: 'flex', alignItems: 'center', justifyContent: 'center',
              }}
            >
              {sidebarOpen ? <MdClose style={{ fontSize: '18px' }} /> : <MdMenu style={{ fontSize: '18px' }} />}
            </button>
            <div>
              <h1 style={{ color: '#1a1a1a', fontSize: '20px', fontWeight: '700', margin: 0, letterSpacing: '-0.3px' }}>{pageTitle}</h1>
              <p style={{ color: THEME.textMuted, fontSize: '12px', margin: 0 }}>{pageSubtitle}</p>
            </div>
          </div>

          <div style={{ display: 'flex', alignItems: 'center', gap: '10px' }}>
            <div style={{
              display: 'flex', alignItems: 'center', gap: '6px',
              padding: '5px 12px',
              background: 'rgba(16,185,129,0.08)', border: '1px solid rgba(16,185,129,0.15)',
              borderRadius: '20px',
            }}>
              <span style={{ width: '6px', height: '6px', borderRadius: '50%', background: THEME.green, display: 'inline-block' }} />
              <span style={{ color: '#0a7c4e', fontSize: '12px', fontWeight: '500' }}>Online</span>
            </div>
          </div>
        </header>

        {/* Content */}
        <main style={{ flex: 1, overflowY: 'auto', padding: '1.5rem' }}>
          {children}
        </main>
      </div>
    </div>
  );
}
