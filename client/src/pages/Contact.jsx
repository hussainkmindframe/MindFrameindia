/**
 * Contact Page — Updated Design (Mindframe India)
 */

import { useState } from 'react';
import toast from 'react-hot-toast';

const gold = '#c9a84c';

const inputStyle = {
  border: 'none',
  borderBottom: '1px solid #999',
  background: 'transparent',
  fontFamily: 'Georgia, serif',
  fontSize: 13,
  color: '#1a1a1a',
  padding: '8px 0',
  outline: 'none',
  width: '100%',
};

const services = [
  ['Digital Marketing', 'Corporate Films/TVCs/Film Production'],
  ['Website Design & Development', 'Video Animation 2D/3D'],
  ['Creative Designing', 'Augmented Reality/Virtual Reality'],
  ['Brand Identity', 'Product Campaign'],
  ['Creative Campaign', 'Media Planning'],
  ['ATL/BTL', ''],
];

const offices = [
  {
    heading: 'HEAD OFFICE',
    city: 'MUMBAI, INDIA',
    address: '6th Floor Bhukanvala Chambers B-22, Off Link Road, Veera Desai Rd, Andheri West, Mumbai, Maharashtra 400053',
    phone: '+91 9892000733',
    email: 'info@mindframeindia.com',
  },
];

const branches = [
  {
    city: '– MUMBAI , INDIA',
    address: '302, 3rd Floor, Crescent Towers, Behind Crystal Plaza, Next to Morya House, Off Link Road, Andheri (West), Mumbai – 400 053',
    phone: '+91 9892000733 / +91 9167830733',
    email: 'info@mindframeindia.com',
  },
  {
    city: '– HYDERABAD , INDIA',
    address: '501, Fifth floor, Pioneer Heights, Lane Opp International Public School, Manikonda Road, Hyderabad 500008',
    phone: '',
    email: 'info@mindframeindia.com',
  },
  {
    city: '– DUBAI , UAE',
    address: 'No: 606, 6th floor, Gardens 4, Near Ibn Battuta Mall, P. O. Box 234637, Dubai, United Arab Emirates',
    phone: '+91 9892000733',
    email: 'info@mindframeindia.com',
  },
  {
    city: '– CALIFORNIA , UNITED STATES OF AMERICA',
    address: 'Bishop Ranch 3, 2603 Camino Ramon, Suite 200, San Ramon, California 94583, United States of America',
    phone: '+1 (925) 205 8356',
    email: 'info@mindframeglobal.com',
  },
];

export default function Contact() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    company: '',
    anything: '',
    services: [],
  });
  const [loading, setLoading] = useState(false);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleServiceToggle = (service) => {
    setFormData((prev) => ({
      ...prev,
      services: prev.services.includes(service)
        ? prev.services.filter((s) => s !== service)
        : [...prev.services, service],
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.phone) {
      toast.error('Please fill in all required fields');
      return;
    }
    if (formData.services.length === 0) {
      toast.error('Please select at least one service');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success('Thank you! We will get back to you soon.');
      setFormData({ name: '', email: '', phone: '', company: '', anything: '', services: [] });
      setLoading(false);
    }, 1000);
  };

  const dividerStyle = { border: 'none', borderTop: '1px solid #e0ddd5', margin: '0 0 28px' };
  const cityStyle = { fontSize: 12, color: '#888', textTransform: 'uppercase', letterSpacing: 1, margin: '0 0 8px' };
  const addrStyle = { fontSize: 12.5, color: '#444', lineHeight: 1.65, margin: '0 0 4px' };
  const contactLineStyle = { fontSize: 12, color: '#666', margin: '2px 0' };

  return (
    <div style={{ background: '#f7f6f2', fontFamily: 'Georgia, serif', minHeight: '100vh' }}>
      <div style={{ maxWidth: 1200, margin: '0 auto', padding: '56px 48px 80px' }}>

        {/* Title */}
        <h1 style={{ fontSize: 46, fontWeight: 900, color: '#1a1a1a', margin: '0 0 10px', letterSpacing: -1 }}>
          Get In Touch
        </h1>
        <div style={{ width: 60, height: 3, background: gold, marginBottom: 48 }} />

        {/* Two Column Layout */}
        <div style={{ display: 'grid', gridTemplateColumns: '1fr 1.5fr', gap: 64, alignItems: 'flex-start' }}>

          {/* Left: Office Addresses */}
          <div>
            {/* Head Office */}
            <div style={{ marginBottom: 28, paddingBottom: 28, borderBottom: '1px solid #e0ddd5' }}>
              <h2 style={{ fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2, color: '#1a1a1a', margin: '0 0 4px' }}>
                HEAD OFFICE
              </h2>
              <p style={cityStyle}>MUMBAI, INDIA</p>
              <p style={addrStyle}>{offices[0].address}</p>
              <p style={contactLineStyle}>Email: {offices[0].email}</p>
              <p style={contactLineStyle}>Mob: {offices[0].phone}</p>
            </div>

            {/* Branch Offices */}
            <div style={{ marginBottom: 28, paddingBottom: 10, borderBottom: '1px solid #e0ddd5' }}>
              <h2 style={{ fontSize: 13, fontWeight: 900, textTransform: 'uppercase', letterSpacing: 2, color: '#1a1a1a', margin: '0 0 20px' }}>
                BRANCH OFFICES
              </h2>
            </div>

            {branches.map((b, i) => (
              <div
                key={i}
                style={{
                  marginBottom: i < branches.length - 1 ? 24 : 0,
                  paddingBottom: i < branches.length - 1 ? 24 : 0,
                  borderBottom: i < branches.length - 1 ? '1px solid #e0ddd5' : 'none',
                }}
              >
                <p style={{ ...cityStyle, color: '#1a1a1a', fontWeight: 700 }}>{b.city}</p>
                <p style={addrStyle}>{b.address}</p>
                {b.phone && <p style={contactLineStyle}>Mob: {b.phone}</p>}
                <p style={contactLineStyle}>Email: {b.email}</p>
              </div>
            ))}
          </div>

          {/* Right: Form */}
          <form onSubmit={handleSubmit}>
            {/* Name + Email */}
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: 20, marginBottom: 20 }}>
              <input
                name="name"
                value={formData.name}
                onChange={handleChange}
                placeholder="Name*"
                style={inputStyle}
                required
              />
              <input
                name="email"
                type="email"
                value={formData.email}
                onChange={handleChange}
                placeholder="E-mail*"
                style={inputStyle}
                required
              />
            </div>

            {/* Phone */}
            <div style={{ marginBottom: 20 }}>
              <input
                name="phone"
                type="tel"
                value={formData.phone}
                onChange={handleChange}
                placeholder="Phone*"
                style={inputStyle}
                required
              />
            </div>

            {/* Company */}
            <div style={{ marginBottom: 24 }}>
              <input
                name="company"
                value={formData.company}
                onChange={handleChange}
                placeholder="Your Company Name & Location*"
                style={inputStyle}
              />
            </div>

            {/* Services */}
            <p style={{ fontSize: 12, color: '#444', margin: '0 0 14px', lineHeight: 1.5 }}>
              I require the following services ( select at least one )
            </p>
            <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '8px 16px', marginBottom: 24 }}>
              {services.flat().filter(Boolean).map((s) => (
                <label
                  key={s}
                  style={{ display: 'flex', alignItems: 'center', gap: 6, fontSize: 12, color: '#333', cursor: 'pointer' }}
                >
                  <input
                    type="checkbox"
                    checked={formData.services.includes(s)}
                    onChange={() => handleServiceToggle(s)}
                    style={{ width: 13, height: 13, accentColor: gold, cursor: 'pointer', flexShrink: 0 }}
                  />
                  {s}
                </label>
              ))}
            </div>

            {/* Anything else */}
            <div style={{ marginBottom: 28 }}>
              <input
                name="anything"
                value={formData.anything}
                onChange={handleChange}
                placeholder="Anything else you would like us to know.."
                style={inputStyle}
              />
            </div>

            {/* Submit */}
            <button
              type="submit"
              disabled={loading}
              style={{
                background: loading ? '#b8952e' : gold,
                color: '#fff',
                border: 'none',
                padding: '12px 36px',
                fontSize: 11,
                fontWeight: 700,
                textTransform: 'uppercase',
                letterSpacing: 2,
                cursor: loading ? 'not-allowed' : 'pointer',
                fontFamily: 'Georgia, serif',
                opacity: loading ? 0.7 : 1,
              }}
            >
              {loading ? 'SENDING...' : 'SUBMIT'}
            </button>
          </form>
        </div>
      </div>
    </div>
  );
}