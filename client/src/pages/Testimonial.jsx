/**
 * Testimonials Page — Enhanced Design (Mindframe India)
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
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const goTo = useCallback((idx) => {
    setVisible(false);
    setTimeout(() => {
      setCurrent((idx + testimonials.length) % testimonials.length);
      setVisible(true);
    }, 300);
  }, []);

  useEffect(() => {
    const timer = setInterval(() => goTo(current + 1), 6000);
    return () => clearInterval(timer);
  }, [current, goTo]);

  const ArrowButton = ({ direction, onClick }) => (
    <button
      onClick={onClick}
      aria-label={direction === 'prev' ? 'Previous' : 'Next'}
      style={{
        width: isMobile ? 40 : 48,
        height: isMobile ? 40 : 48,
        borderRadius: '50%',
        border: `2px solid ${gold}`,
        background: '#fff',
        cursor: 'pointer',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'center',
        fontSize: isMobile ? 20 : 24,
        color: gold,
        transition: 'all 0.3s ease',
        fontFamily: 'Georgia, serif',
        boxShadow: '0 2px 8px rgba(0,0,0,0.1)',
      }}
      onMouseEnter={(e) => {
        e.currentTarget.style.background = gold;
        e.currentTarget.style.color = '#fff';
        e.currentTarget.style.transform = 'scale(1.05)';
      }}
      onMouseLeave={(e) => {
        e.currentTarget.style.background = '#fff';
        e.currentTarget.style.color = gold;
        e.currentTarget.style.transform = 'scale(1)';
      }}
    >
      {direction === 'prev' ? '←' : '→'}
    </button>
  );

  const DotButton = ({ index, isActive, onClick }) => (
    <button
      onClick={onClick}
      style={{
        width: isActive ? 12 : 8,
        height: isActive ? 12 : 8,
        borderRadius: '50%',
        background: isActive ? gold : '#ccc',
        border: 'none',
        cursor: 'pointer',
        padding: 0,
        transition: 'all 0.3s ease',
        transform: isActive ? 'scale(1.2)' : 'scale(1)',
        boxShadow: isActive ? `0 0 0 2px rgba(201,168,76,0.2)` : 'none',
      }}
      onMouseEnter={(e) => {
        if (!isActive) e.currentTarget.style.background = '#999';
      }}
      onMouseLeave={(e) => {
        if (!isActive) e.currentTarget.style.background = '#ccc';
      }}
    />
  );

  return (
    <div style={{ fontFamily: 'Georgia, serif', color: '#1a1a1a' }}>

      {/* Logo Strip - Responsive */}
      <div
        style={{
          background: '#fff',
          padding: isMobile ? '24px 20px' : '32px 48px',
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? 24 : 56,
          flexWrap: 'wrap',
          borderBottom: '1px solid #eee',
        }}
      >
        {logos.map((logo) => (
          <div
            key={logo.name}
            style={{
              height: isMobile ? 50 : 68,
              display: 'flex',
              alignItems: 'center',
              justifyContent: 'center',
              opacity: 0.7,
              filter: 'grayscale(30%)',
              transition: 'all 0.3s ease',
              cursor: 'pointer',
              transform: 'scale(1)',
            }}
            onMouseEnter={(e) => {
              e.currentTarget.style.opacity = '1';
              e.currentTarget.style.filter = 'grayscale(0%)';
              e.currentTarget.style.transform = 'scale(1.05)';
            }}
            onMouseLeave={(e) => {
              e.currentTarget.style.opacity = '0.7';
              e.currentTarget.style.filter = 'grayscale(30%)';
              e.currentTarget.style.transform = 'scale(1)';
            }}
            title={logo.name}
          >
            {logo.render()}
          </div>
        ))}
      </div>

      {/* Testimonials Carousel - Enhanced */}
      <div
        style={{
          background: 'linear-gradient(135deg, #f4f3ef 0%, #faf9f5 100%)',
          padding: isMobile ? '48px 20px' : '72px 48px 64px',
          textAlign: 'center',
          position: 'relative',
        }}
      >
        {/* Decorative Quote Icon */}
        <div style={{
          fontSize: 80,
          color: `${gold}15`,
          fontFamily: 'Georgia, serif',
          position: 'absolute',
          top: isMobile ? 20 : 40,
          left: isMobile ? 20 : 60,
          opacity: 0.3,
          pointerEvents: 'none',
        }}>
          "
        </div>

        <h2 style={{ 
          fontSize: isMobile ? 32 : 48, 
          fontWeight: 900, 
          margin: '0 0 12px', 
          letterSpacing: -1,
          background: `linear-gradient(135deg, #1a1a1a 0%, #333 100%)`,
          WebkitBackgroundClip: 'text',
          WebkitTextFillColor: 'transparent',
          backgroundClip: 'text'
        }}>
          Testimonials
        </h2>
        <div style={{ width: 60, height: 2, background: gold, margin: '0 auto 48px' }} />

        {/* Main Testimonial Content with Side Navigation */}
        <div style={{
          display: 'flex',
          alignItems: 'center',
          justifyContent: 'center',
          gap: isMobile ? 16 : 32,
          maxWidth: 1100,
          margin: '0 auto',
        }}>
          {/* Previous Button */}
          <ArrowButton direction="prev" onClick={() => goTo(current - 1)} />

          {/* Testimonial Text */}
          <div
            style={{
              opacity: visible ? 1 : 0,
              transition: 'opacity 0.3s ease',
              flex: 1,
              maxWidth: 760,
            }}
          >
            {/* Quote marks */}
            <div style={{ fontSize: 40, color: gold, opacity: 0.5, marginBottom: 16 }}>
              <span>“</span>
            </div>
            
            <p style={{ 
              fontSize: isMobile ? 13 : 14, 
              color: '#444', 
              lineHeight: 1.9, 
              textAlign: 'center', 
              margin: '0 0 28px',
              fontStyle: 'italic',
              fontWeight: 400
            }}>
              {testimonials[current].text}
            </p>
            
            <div style={{ 
              width: 40, 
              height: 2, 
              background: gold, 
              margin: '0 auto 20px',
              opacity: 0.5
            }} />
            
            <p style={{ 
              fontSize: isMobile ? 13 : 14, 
              fontWeight: 700, 
              color: '#1a1a1a', 
              margin: '0 0 4px',
              letterSpacing: 0.5
            }}>
              {testimonials[current].author}
            </p>
            <p style={{ 
              fontSize: isMobile ? 12 : 13, 
              color: gold, 
              margin: 0,
              fontWeight: 500
            }}>
              {testimonials[current].company}
            </p>
          </div>

          {/* Next Button */}
          <ArrowButton direction="next" onClick={() => goTo(current + 1)} />
        </div>

        {/* Navigation Dots */}
        <div style={{ 
          display: 'flex', 
          alignItems: 'center', 
          justifyContent: 'center', 
          gap: isMobile ? 10 : 12, 
          marginTop: 48,
          flexWrap: 'wrap'
        }}>
          {testimonials.map((_, i) => (
            <DotButton
              key={i}
              index={i}
              isActive={i === current}
              onClick={() => goTo(i)}
            />
          ))}
        </div>

        {/* Progress Indicator */}
        <div style={{
          marginTop: 32,
          fontSize: 12,
          color: '#999',
          letterSpacing: 1
        }}>
          {current + 1} / {testimonials.length}
        </div>
      </div>

    </div>
  );
}