/**
 * Testimonials Page — Updated Design (Mindframe India)
 */

import { useState, useEffect, useCallback } from 'react';

const gold = '#c9a84c';

const logos = [
  {
    name: 'New India Assurance',
    render: () => (
      <svg width="60" height="60" viewBox="0 0 60 60">
        <circle cx="30" cy="30" r="28" fill="none" stroke="#1a3a6b" strokeWidth="2" />
        <circle cx="30" cy="30" r="20" fill="#e8eef8" />
        <text x="30" y="34" textAnchor="middle" fontSize="8" fill="#1a3a6b" fontFamily="Georgia">INDIA</text>
      </svg>
    ),
  },
  {
    name: 'InFocus',
    render: () => (
      <span style={{ fontSize: 22, fontWeight: 800, fontStyle: 'italic', letterSpacing: -0.5 }}>
        <span style={{ color: '#003087' }}>In</span>
        <span style={{ color: '#e8002d' }}>Focus</span>
      </span>
    ),
  },
  {
    name: 'Pratimoksha',
    render: () => (
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: 18, fontWeight: 800 }}>
          <span style={{ color: '#555' }}>prati</span>
          <span style={{ color: '#e8b84b' }}>moksha</span>
        </span>
        <span style={{ display: 'block', fontSize: 9, color: '#888', letterSpacing: 1 }}>Enlighten Yoga Center</span>
      </div>
    ),
  },
  {
    name: 'Leadership Mavericks',
    render: () => (
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: 14, fontWeight: 800, color: '#003087', letterSpacing: 1, display: 'block' }}>Leadership</span>
        <span style={{ fontSize: 9, color: '#888', letterSpacing: 2, display: 'block' }}>MAVERICKS</span>
      </div>
    ),
  },
  {
    name: 'Lilavati Hospital',
    render: () => (
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: 12, fontWeight: 700, color: '#333', display: 'block' }}>Lilavati Hospital</span>
        <span style={{ fontSize: 10, color: '#666', display: 'block' }}>And Research Centre</span>
      </div>
    ),
  },
  {
    name: 'Supreme Furniture',
    render: () => (
      <div style={{ textAlign: 'center' }}>
        <span style={{ fontSize: 18, fontWeight: 900, color: '#c8102e', letterSpacing: 1, display: 'block' }}>Supreme</span>
        <span style={{ fontSize: 10, fontWeight: 700, color: '#555', letterSpacing: 1, display: 'block' }}>FURNITURE</span>
        <span style={{ fontSize: 9, color: '#888', fontStyle: 'italic', display: 'block' }}>Truly Stylish</span>
      </div>
    ),
  },
];

const testimonials = [
  {
    text: "These days social media is the most sought after branding & communication medium and we could have no better partner than Mind Frame India for providing us with all the necessary assistance in making our presence felt on the social media platforms. I am particularly impressed with their creativity and agility to engage with our social media followers. Their openness to input is a positive trait that makes us comfortable working with them. Simply want to say that you guys are doing a great job and keep up the good work.",
    author: 'Officer – Marketing',
    company: 'Lilavati Hospital And Research Centre',
  },
  {
    text: "Mind Frame India has been an exceptional partner in our branding journey. Their team's deep understanding of digital marketing combined with their creative prowess has helped us build a strong online presence. The results have been outstanding and we couldn't be more pleased with their work.",
    author: 'Director – Brand Strategy',
    company: 'Leadership Mavericks',
  },
  {
    text: "Working with Mind Frame India has been a transformative experience for our brand. Their strategic approach to creative communication and their ability to understand our target audience has helped us grow significantly. We highly recommend their services to any business looking to make an impact.",
    author: 'Head – Marketing & Communications',
    company: 'InFocus',
  },
  {
    text: "The team at Mind Frame India brings unmatched creativity and professionalism to every project. From concept to execution, they have consistently delivered beyond our expectations. Their commitment to quality and their proactive approach make them a true partner in our success.",
    author: 'General Manager',
    company: 'Supreme Furniture',
  },
  {
    text: "Mind Frame has been instrumental in transforming our digital presence. Their holistic approach combining creativity with data-driven strategies has yielded remarkable results for our wellness brand. We are proud to have them as our marketing partners.",
    author: 'Founder & Director',
    company: 'Pratimoksha Yoga Center',
  },
];

export default function Testimonials() {
  const [current, setCurrent] = useState(0);
  const [visible, setVisible] = useState(true);

  const goTo = useCallback((idx) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((idx + testimonials.length) % testimonials.length);
      setVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 5000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const arrowBtn = (onClick, label) => (
    <button
      onClick={onClick}
      aria-label={label}
      style={{
        width: 38, height: 38, borderRadius: '50%',
        border: '1.5px solid #999', background: '#fff',
        cursor: 'pointer', display: 'flex', alignItems: 'center', justifyContent: 'center',
        fontSize: 18, color: '#333', transition: 'all 0.2s',
        fontFamily: 'Georgia, serif',
      }}
      onMouseOver={(e) => { e.currentTarget.style.background = gold; e.currentTarget.style.borderColor = gold; e.currentTarget.style.color = '#fff'; }}
      onMouseOut={(e) => { e.currentTarget.style.background = '#fff'; e.currentTarget.style.borderColor = '#999'; e.currentTarget.style.color = '#333'; }}
    >
      {label === 'Previous' ? '‹' : '›'}
    </button>
  );

  return (
    <div style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>

      {/* Logo Strip */}
      <div
        style={{
          background: '#fff',
          padding: '32px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: 56,
          flexWrap: 'wrap',
          borderBottom: '1px solid #eee',
        }}
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            style={{
              height: 68,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.8,
              filter: 'grayscale(20%)',
              transition: 'all 0.2s',
              cursor: 'pointer',
            }}
            onMouseOver={(e) => { e.currentTarget.style.opacity = 1; e.currentTarget.style.filter = 'none'; }}
            onMouseOut={(e) => { e.currentTarget.style.opacity = 0.8; e.currentTarget.style.filter = 'grayscale(20%)'; }}
            title={logo.name}
          >
            {logo.render()}
          </div>
        ))}
      </div>

      {/* Testimonials Carousel */}
      <div
        style={{
          background: '#f4f3ef',
          padding: '72px 48px 64px',
          textAlign: 'center',
        }}
      >
        <h2 style={{ fontSize: 48, fontWeight: 900, margin: '0 0 12px', letterSpacing: -1 }}>
          Testimonials
        </h2>
        <div style={{ width: 60, height: 2, background: gold, margin: '0 auto 48px' }} />

        {/* Quote */}
        <div
          style={{
            opacity: visible ? 1 : 0,
            transition: 'opacity 0.3s ease',
            maxWidth: 760,
            margin: '0 auto 32px',
          }}
        >
          <p style={{ fontSize: 14, color: '#333', lineHeight: 1.95, textAlign: 'left', margin: '0 0 28px', minHeight: 120 }}>
            {testimonials[current].text}
          </p>
          <p style={{ fontSize: 13.5, fontWeight: 700, color: '#1a1a1a', margin: '0 0 4px' }}>
            {testimonials[current].author}
          </p>
          <p style={{ fontSize: 13, color: gold, margin: 0 }}>
            {testimonials[current].company}
          </p>
        </div>

        {/* Navigation */}
        <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', gap: 24, marginTop: 36 }}>
          {arrowBtn(() => goTo(current - 1), 'Previous')}

          {/* Dots */}
          <div style={{ display: 'flex', gap: 7, alignItems: 'center' }}>
            {testimonials.map((_, i) => (
              <button
                key={i}
                onClick={() => goTo(i)}
                style={{
                  width: i === current ? 10 : 8,
                  height: i === current ? 10 : 8,
                  borderRadius: '50%',
                  background: i === current ? gold : '#ccc',
                  border: 'none',
                  cursor: 'pointer',
                  padding: 0,
                  transition: 'all 0.2s',
                }}
              />
            ))}
          </div>

          {arrowBtn(() => goTo(current + 1), 'Next')}
        </div>
      </div>

    </div>
  );
}