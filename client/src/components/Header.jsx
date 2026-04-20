/**
 * Header Component — Responsive (Mindframe India)
 */

import { useState, useRef, useEffect } from 'react';
import { Link, useLocation } from 'react-router-dom';
import { useAuthStore } from '../utils/authStore';

const gold = '#c9a84c';

const navLinks = [
  { label: 'Home', to: '/' },
  { label: 'About Us', to: '/about' },
  {
    label: 'Services',
    to: '/services',
    dropdown: [
      'Brand Identity',
      'Branding & Marketing',
      'Digital Marketing',
      'Advertising Services',
      'TV Ads & Campaigns',
      'Website Development',
      'Mobile App Development',
    ],
  },
  { label: 'Our Work', to: '/work' },
  { label: 'Client Testimonials', to: '/testimonials' },
  { label: 'Blogs', to: '/blogs' },
  { label: 'News Room', to: '/news' },
  { label: 'Contact Us', to: '/contact' },
];

export default function Header() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [servicesOpen, setServicesOpen] = useState(false);
  const [mobileServicesOpen, setMobileServicesOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const { isAuthenticated, logout } = useAuthStore();
  const location = useLocation();
  const dropdownRef = useRef(null);

  // Close desktop dropdown on outside click
  useEffect(() => {
    const handleClick = (e) => {
      if (dropdownRef.current && !dropdownRef.current.contains(e.target)) {
        setServicesOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClick);
    return () => document.removeEventListener('mousedown', handleClick);
  }, []);

  // Close mobile menu on route change
  useEffect(() => {
    setMobileOpen(false);
    setServicesOpen(false);
    setMobileServicesOpen(false);
    setSearchOpen(false);
  }, [location.pathname]);

  const isActive = (to) => location.pathname === to;

  const linkStyle = (to) => ({
    fontSize: 13.5,
    color: '#1a1a1a',
    textDecoration: 'none',
    whiteSpace: 'nowrap',
    paddingBottom: 3,
    borderBottom: isActive(to) ? `2px solid ${gold}` : '2px solid transparent',
    fontWeight: isActive(to) ? 600 : 400,
    fontFamily: 'Georgia, serif',
    transition: 'border-color 0.2s',
    cursor: 'pointer',
  });

  return (
    <>
      <style>{`
        .mf-desktop-nav { display: flex; }
        .mf-mobile-menu { display: none; }
        @media (max-width: 900px) {
          .mf-desktop-nav { display: none !important; }
          .mf-mobile-menu { display: block; }
        }
      `}</style>

      <header
        style={{
          background: '#fff',
          borderBottom: '1px solid #eee',
          position: 'sticky',
          top: 0,
          zIndex: 50,
          fontFamily: 'Georgia, serif',
        }}
      >
        <nav
          style={{
            maxWidth: 1300,
            margin: '0 auto',
            padding: '0 24px',
            display: 'flex',
            alignItems: 'center',
            height: 72,
            position: 'relative',
          }}
        >
          {/* Logo */}
          <div style={{ flex: '0 0 auto' }}>
            <Link to="/" style={{ textDecoration: 'none' }}>
              <div
                style={{
                  width: 58,
                  height: 58,
                  borderRadius: '50%',
                  border: `1.5px solid ${gold}`,
                  background: '#fff',
                  display: 'flex',
                  alignItems: 'center',
                  justifyContent: 'center',
                }}
              >
                <div style={{ textAlign: 'center', lineHeight: 1 }}>
                  <span style={{ fontSize: 16, fontWeight: 900, color: gold, display: 'block' }}>MF</span>
                  <span style={{ fontSize: 5, letterSpacing: 2, color: '#555', textTransform: 'uppercase', display: 'block', marginTop: 2 }}>
                    MIND FRAME
                  </span>
                </div>
              </div>
            </Link>
          </div>

          {/* Desktop Center Nav */}
          <div
            className="mf-desktop-nav"
            style={{
              position: 'absolute',
              left: '50%',
              transform: 'translateX(-50%)',
              alignItems: 'center',
              gap: 22,
            }}
          >
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.to} style={{ position: 'relative' }} ref={dropdownRef}>
                  <span
                    onClick={() => setServicesOpen(!servicesOpen)}
                    style={{ ...linkStyle(link.to), display: 'flex', alignItems: 'center', gap: 4 }}
                    onMouseOver={(e) => (e.currentTarget.style.borderBottomColor = gold)}
                    onMouseOut={(e) => { if (!isActive(link.to)) e.currentTarget.style.borderBottomColor = 'transparent'; }}
                  >
                    {link.label}
                    <span style={{ fontSize: 10, color: '#888', marginLeft: 2 }}>∨</span>
                  </span>
                  {servicesOpen && (
                    <div
                      style={{
                        position: 'absolute', top: '100%', left: 0,
                        background: '#fff', border: '1px solid #eee',
                        boxShadow: '0 4px 16px rgba(0,0,0,0.08)',
                        minWidth: 220, zIndex: 100, marginTop: 8,
                      }}
                    >
                      {link.dropdown.map((item) => (
                        <Link
                          key={item}
                          to="/services"
                          onClick={() => setServicesOpen(false)}
                          style={{
                            display: 'block', padding: '10px 16px',
                            fontSize: 13, color: '#333', textDecoration: 'none',
                            borderBottom: '1px solid #f5f5f5', fontFamily: 'Georgia, serif',
                          }}
                          onMouseOver={(e) => { e.currentTarget.style.color = gold; e.currentTarget.style.background = '#fafaf8'; }}
                          onMouseOut={(e) => { e.currentTarget.style.color = '#333'; e.currentTarget.style.background = 'transparent'; }}
                        >
                          {item}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  style={linkStyle(link.to)}
                  onMouseOver={(e) => (e.currentTarget.style.borderBottomColor = gold)}
                  onMouseOut={(e) => { if (!isActive(link.to)) e.currentTarget.style.borderBottomColor = 'transparent'; }}
                >
                  {link.label}
                </Link>
              )
            )}
          </div>

          {/* Right Icons */}
          <div style={{ marginLeft: 'auto', display: 'flex', alignItems: 'center', gap: 14 }}>
            {/* Search */}
            <button
              onClick={() => setSearchOpen(!searchOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, color: '#444', display: 'flex', alignItems: 'center' }}
            >
              <svg width="17" height="17" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <circle cx="11" cy="11" r="7" />
                <line x1="21" y1="21" x2="16.65" y2="16.65" />
              </svg>
            </button>

            {/* Hamburger */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{ background: 'none', border: 'none', cursor: 'pointer', padding: 4, display: 'flex', flexDirection: 'column', gap: 4.5, justifyContent: 'center' }}
              aria-label="Menu"
            >
              <span style={{ display: 'block', width: 22, height: 1.5, background: '#333', transition: 'all 0.25s', transform: mobileOpen ? 'rotate(45deg) translateY(6px)' : 'none' }} />
              <span style={{ display: 'block', width: 22, height: 1.5, background: '#333', transition: 'all 0.25s', opacity: mobileOpen ? 0 : 1 }} />
              <span style={{ display: 'block', width: 22, height: 1.5, background: '#333', transition: 'all 0.25s', transform: mobileOpen ? 'rotate(-45deg) translateY(-6px)' : 'none' }} />
            </button>
          </div>
        </nav>

        {/* Search Bar */}
        {searchOpen && (
          <div style={{ borderTop: '1px solid #eee', padding: '12px 24px', background: '#fafaf8' }}>
            <input
              autoFocus
              type="text"
              placeholder="Search..."
              style={{
                width: '100%', border: 'none',
                borderBottom: `1px solid ${gold}`,
                background: 'transparent', fontFamily: 'Georgia, serif',
                fontSize: 14, padding: '6px 0', outline: 'none', color: '#1a1a1a',
              }}
            />
          </div>
        )}

        {/* Mobile Menu */}
        <div
          className="mf-mobile-menu"
          style={{
            maxHeight: mobileOpen ? '100vh' : 0,
            overflow: 'hidden',
            transition: 'max-height 0.35s ease',
            borderTop: mobileOpen ? '1px solid #eee' : 'none',
            background: '#fff',
          }}
        >
          <div style={{ padding: '8px 0 16px' }}>
            {navLinks.map((link) =>
              link.dropdown ? (
                <div key={link.to}>
                  <button
                    onClick={() => setMobileServicesOpen(!mobileServicesOpen)}
                    style={{
                      width: '100%', display: 'flex', alignItems: 'center',
                      justifyContent: 'space-between', padding: '13px 24px',
                      background: 'none', border: 'none', cursor: 'pointer',
                      fontFamily: 'Georgia, serif', fontSize: 14,
                      color: isActive(link.to) ? gold : '#1a1a1a',
                      fontWeight: isActive(link.to) ? 600 : 400,
                      borderBottom: '1px solid #f5f5f5',
                      textAlign: 'left',
                    }}
                  >
                    {link.label}
                    <span style={{ fontSize: 11, color: '#888', transform: mobileServicesOpen ? 'rotate(180deg)' : 'none', transition: 'transform 0.2s', display: 'inline-block' }}>∨</span>
                  </button>
                  {/* Services sub-items */}
                  <div
                    style={{
                      maxHeight: mobileServicesOpen ? 400 : 0,
                      overflow: 'hidden',
                      transition: 'max-height 0.3s ease',
                      background: '#fafaf8',
                    }}
                  >
                    {link.dropdown.map((item) => (
                      <Link
                        key={item}
                        to="/services"
                        onClick={() => setMobileOpen(false)}
                        style={{
                          display: 'block', padding: '11px 36px',
                          fontSize: 13, color: '#555', textDecoration: 'none',
                          borderBottom: '1px solid #f0f0f0', fontFamily: 'Georgia, serif',
                        }}
                      >
                        — {item}
                      </Link>
                    ))}
                  </div>
                </div>
              ) : (
                <Link
                  key={link.to}
                  to={link.to}
                  style={{
                    display: 'block', padding: '13px 24px',
                    fontSize: 14, textDecoration: 'none',
                    color: isActive(link.to) ? gold : '#1a1a1a',
                    fontWeight: isActive(link.to) ? 600 : 400,
                    fontFamily: 'Georgia, serif',
                    borderBottom: '1px solid #f5f5f5',
                    borderLeft: isActive(link.to) ? `3px solid ${gold}` : '3px solid transparent',
                  }}
                >
                  {link.label}
                </Link>
              )
            )}

            {/* Auth */}
            <div style={{ padding: '12px 24px 4px' }}>
              {isAuthenticated ? (
                <button
                  onClick={logout}
                  style={{
                    fontSize: 13, color: '#c00', background: 'none',
                    border: 'none', cursor: 'pointer', fontFamily: 'Georgia, serif', padding: 0,
                  }}
                >
                  Logout
                </button>
              ) : (
                <Link
                  to="/admin/login"
                  style={{ fontSize: 13, color: gold, fontFamily: 'Georgia, serif', textDecoration: 'none' }}
                >
                  Admin
                </Link>
              )}
            </div>
          </div>
        </div>
      </header>
    </>
  );
}