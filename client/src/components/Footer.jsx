/**
 * Footer Component — Updated Design (Mindframe India)
 */

import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaFacebook, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from 'react-icons/fa6';
import logo from '../assets/Logo-MFI.png';


const goldColor = '#c9a84c';

const SocialLink = ({ href, children }) => {
  const baseStyle = {
    width: 34, height: 34,
    border: '1px solid #333',
    color: '#888',
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
    transition: 'all 0.2s',
    textDecoration: 'none',
  };
  const [hovered, setHovered] = useState(false);

  return (
    <a
      href={href}
      style={{
        ...baseStyle,
        borderColor: hovered ? goldColor : '#333',
        color: hovered ? goldColor : '#888',
      }}
      onMouseEnter={() => setHovered(true)}
      onMouseLeave={() => setHovered(false)}
    >
      {children}
    </a>
  );
};

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const quickLinks = [
    { label: 'About Us', to: '/about' },
    { label: 'Our Team', to: '/team' },
    { label: 'Our Work', to: '/work' },
    { label: 'Brand Presentation', to: '/brand' },
    { label: 'Blogs', to: '/blogs' },
    { label: 'Careers', to: '/careers' },
    { label: 'Disclaimer', to: '/disclaimer' },
    { label: 'Privacy Policy', to: '/privacy' },
    { label: 'Sitemap', to: '/sitemap' },
  ];

  const services = [
    'Brand Identity',
    'Branding and Marketing',
    'Digital Marketing',
    'Advertising Services',
    'Best Television Advertising Agency in Mumbai | TV Ads Campaigns',
    'Website Development',
    'Mobile App Development',
  ];

  const locations = [
    {
      label: 'Head Office',
      address:
        'B28 Venue – 6th Floor, Bhukanvala Chambers, Behind Crystal Plaza, Next to Mourya House, Off Link Road, Andheri West, Mumbai, Maharashtra 400053',
    },
    {
      label: 'Branch Office',
      address:
        '302, 3rd Floor, Crescent Towers, Behind Crystal Plaza, Next to Mourya House, Off Link Road, Andheri West, Mumbai, Maharashtra 400053',
    },
    {
      label: 'U.S. Office',
      address:
        'Bishop Ranch 3, 2603 Camino Ramon, Suite 200, San Ramon, California 94583, United States of America',
    },
    
  ];

  return (
    <footer style={{ background: '#0d0f1a', color: '#fff', padding: '56px 40px 28px', width: '100%' }}>
      <div style={{ maxWidth: 1280, margin: '0 auto' }}>

        {/* Top Grid */}
        <div
          style={{
            display: 'grid',
            gridTemplateColumns: 'repeat(auto-fit, minmax(200px, 1fr))',
            gap: 40,
            marginBottom: 40,
          }}
        >

{/* Brand / Logo */}
<div 
  style={{ 
    display: 'flex', 
    flexDirection: 'column', 
    gap: 16,
    alignItems: 'flex-start',   // 👈 main fix
    textAlign: 'left'           // 👈 text bhi left
  }}
>
  
  {/* LOGO IMAGE */}
  <img
    src={logo}
    alt="Mindframe India Logo"
    style={{
      height: 100,
      width: 'auto',
      objectFit: 'contain',
      display: 'block'          // 👈 extra safety
    }}
  />

  {/* TEXT */}
  <div>
    <h3 style={{ 
      fontSize: 14, 
      fontWeight: 700, 
      color: '#fff', 
      margin: '0 0 6px', 
      lineHeight: 1.4 
    }}>
      Leading Advertising Agency in Mumbai
    </h3>

    <p style={{ 
      fontSize: 12, 
      color: goldColor, 
      fontStyle: 'italic', 
      lineHeight: 1.6, 
      margin: 0 
    }}>
      Our Commitment Is To Give Value To Your Business And Help You Soar Beyond The Horizons Of Success.
    </p>
  </div>

  {/* CONTACT */}
  <div style={{ fontSize: 12, color: '#aaa' }}>
    <p style={{ margin: '0 0 4px' }}>
      Mob: <span style={{ color: '#fff' }}>+91 9892000733 / +91 9167830733</span>
    </p>
    <p style={{ margin: 0 }}>
      Email: <span style={{ color: '#fff' }}>info@mindframeindia.com</span>
    </p>
  </div>
</div>


          {/* Quick Links */}
          <div>
            <h4 style={{
              fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: 2, color: '#fff', margin: '0 0 16px',
              paddingBottom: 8, borderBottom: `1px solid ${goldColor}`,
            }}>
              Quick Links
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {quickLinks.map((item) => (
                <li key={item.to} style={{ marginBottom: 10, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: goldColor, fontSize: 10, marginTop: 2, flexShrink: 0 }}>○</span>
                  <Link
                    to={item.to}
                    style={{ color: '#bbb', fontSize: 13, textDecoration: 'none', lineHeight: 1.4 }}
                    onMouseEnter={(e) => (e.target.style.color = goldColor)}
                    onMouseLeave={(e) => (e.target.style.color = '#bbb')}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h4 style={{
              fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: 2, color: '#fff', margin: '0 0 16px',
              paddingBottom: 8, borderBottom: `1px solid ${goldColor}`,
            }}>
              Our Services
            </h4>
            <ul style={{ listStyle: 'none', padding: 0, margin: 0 }}>
              {services.map((s, i) => (
                <li key={i} style={{ marginBottom: 10, display: 'flex', alignItems: 'flex-start', gap: 8 }}>
                  <span style={{ color: goldColor, fontSize: 10, marginTop: 2, flexShrink: 0 }}>○</span>
                  <span style={{ color: '#bbb', fontSize: 13, lineHeight: 1.4 }}>{s}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Our Locations */}
          <div>
            <h4 style={{
              fontSize: 11, fontWeight: 700, textTransform: 'uppercase',
              letterSpacing: 2, color: '#fff', margin: '0 0 16px',
              paddingBottom: 8, borderBottom: `1px solid ${goldColor}`,
            }}>
              Our Locations
            </h4>
            <div style={{ display: 'flex', flexDirection: 'column', gap: 14 }}>
              {locations.map((loc, i) => (
                <div key={i}>
                  <p style={{ fontSize: 11, fontWeight: 700, textTransform: 'uppercase', letterSpacing: 1, color: goldColor, margin: '0 0 4px' }}>
                    {loc.label}
                  </p>
                  <p style={{ fontSize: 12, color: '#999', lineHeight: 1.55, margin: 0 }}>
                    {loc.address}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* Divider */}
        <hr style={{ border: 'none', borderTop: '1px solid #2a2d3a', margin: '0 0 20px' }} />

        {/* Bottom Bar */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'space-between', flexWrap: 'wrap', gap: 12 }}>
          <p style={{ fontSize: 12, color: '#c9a84c', margin: 0 }}>
            © {currentYear} Mindframe India. All rights reserved.
          </p>
          <div style={{ display: 'flex', gap: 10 }}>
            <SocialLink href="#"><FaFacebook size={14} /></SocialLink>
            <SocialLink href="#"><FaXTwitter size={14} /></SocialLink>
            <SocialLink href="#"><FaLinkedinIn size={14} /></SocialLink>
          </div>
        </div>

      </div>
    </footer>
  );
}