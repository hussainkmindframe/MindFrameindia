/**
 * Home Page — Fully Responsive (Mindframe India)
 * Sections (top to bottom):
 * 1. Hero — background video + overlay heading
 * 2. Intro text + Quick Contact Form
 * 3. Core Services (numbered 3-col)
 * 4. Current Campaigns (3-col image grid)
 * 5. Our Work (YouTube 3-col)
 * 6. Behind The Scenes (YouTube 3-col)
 * 7. TV Commercials (YouTube 3-col)
 * 8. Celebrity Shoot (photo carousel)
 * 9. Outdoor & Print Media (4-col grid)
 * 10. Testimonials component
 */

import { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import toast from 'react-hot-toast';
import Testimonials from './Testimonial';

const gold = '#c9a84c';

const sectionTitle = (text) => (
  <div style={{ textAlign: 'center', marginBottom: 48 }}>
    <h2 style={{ 
      fontSize: 'clamp(28px, 5vw, 38px)', 
      fontWeight: 900, 
      fontFamily: 'Georgia, serif', 
      color: '#1a1a1a', 
      margin: '0 0 12px', 
      letterSpacing: -0.5 
    }}>
      {text}
    </h2>
    <div style={{ width: 60, height: 2, background: gold, margin: '0 auto' }} />
  </div>
);

// ─── YouTube Embed ───────────────────────────────────────────────────────────
function YTEmbed({ videoId, title }) {
  return (
    <div style={{ borderRadius: 4, overflow: 'hidden', background: '#000', aspectRatio: '16/9', width: '100%' }}>
      <iframe
        width="100%"
        height="100%"
        src={`https://www.youtube.com/embed/${videoId}`}
        title={title}
        frameBorder="0"
        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
        allowFullScreen
        style={{ display: 'block' }}
      />
    </div>
  );
}

// ─── Section wrapper ─────────────────────────────────────────────────────────
const Section = ({ children, bg = '#fff', py = 72 }) => (
  <section style={{ background: bg, padding: `${py}px 0` }}>
    <div style={{ maxWidth: 1200, margin: '0 auto', padding: '0 20px' }}>
      {children}
    </div>
  </section>
);

// ─── DATA ─────────────────────────────────────────────────────────────────────
const coreServices = [
  {
    num: '01',
    tag: 'BRAND IDENTITY',
    title: 'Set Yourself Apart',
    desc: 'As the best advertising and brand identity agency in Mumbai, we understand, analyze, and then build a compelling identity for your brand. By doing this, we help you create a truly considered, cohesive, and integrated brand identity that sets you apart from your competitors in the most aggressive market.',
  },
  {
    num: '02',
    tag: 'CREATIVE COMMUNICATION',
    title: 'Creations that Communicate Brand Persona',
    desc: 'Creative Communication can be the strongest pillar of your brand. We create communications that inform, engage and motivate your target audience to think about your brand in the very first place. You define your target audience and we help you communicate with them most creatively.',
  },
  {
    num: '03',
    tag: 'DIGITAL MARKETING',
    title: 'Digital Marketing Solutions For Your Brand',
    desc: 'Our expert team offers top-notch SEO, SEM, and social media services to elevate your brand\'s online presence. From strategic planning to campaign optimization, we deliver measurable results by analyzing past metrics and creating data-driven strategies. Partner with the best advertising agency in Mumbai to achieve success across all digital platforms.',
  },
];

const campaigns = [
  {
    img: 'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=600&q=80',
    title: 'Metro Grande Blockbuster Outdoor Campaign',
    desc: "Bringing Metro Grande's Vision to Life Through Blockbuster Outdoor Campaign",
  },
  {
    img: 'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=600&q=80',
    title: 'New Beginnings — 2 & 3 BHK',
    desc: 'A bold outdoor hoarding campaign for West Pioneer real estate launch',
  },
  {
    img: 'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=600&q=80',
    title: 'Tots Couture Week — Audition Call',
    desc: 'In-mall display campaign targeting Mumbai parents for the couture event',
  },
];

const ourWork = [
  { videoId: 'HVlb4RQJlxQ', title: 'Bharat Agri TVC 1 with Nawazuddin Siddiqui' },
  { videoId: '9iRpcyQt0U8', title: 'Bharat Agri TVC 2 with Nawazuddin Siddiqui' },
  { videoId: 'IRPOE4KxMLM', title: "Padma Bhushan Smt. Rajashree Birla's Corporate Film" },
  { videoId: 'GhHBpdY8n3I', title: 'Bharat Agri TVC 1 with Nawazuddin Siddiqui' },
  { videoId: 'xxEGGhcWhZs', title: 'Bharat Agri TVC 2 with Nawazuddin Siddiqui' },
  { videoId: 'CwkZPVZ9S1Y', title: "Padma Bhushan Smt. Rajashree Birla's Corporate Film" },
    { videoId: '43EDtFshuM8', title: 'Bharat Agri TVC 1 with Nawazuddin Siddiqui' },
  { videoId: 'NqGAfUfhA3I', title: 'Bharat Agri TVC 2 with Nawazuddin Siddiqui' },
  { videoId: '1IGCqY2TPJk', title: "Padma Bhushan Smt. Rajashree Birla's Corporate Film" },
  { videoId: 'Gdavi9Z8Gz8', title: 'Bharat Agri TVC 1 with Nawazuddin Siddiqui' },
  { videoId: 'qUP0qQW0uKo', title: 'Bharat Agri TVC 2 with Nawazuddin Siddiqui' },
  { videoId: 'vk3DHvMI0Lk', title: "Padma Bhushan Smt. Rajashree Birla's Corporate Film" },
];

const bts = [
  { videoId: 'W_HcPX39DiY', title: 'Filming with Nawazuddin Siddiqui' },
  { videoId: 'baiKTFFaok4', title: 'Mind Frame India — Big Screen BTS' },
  { videoId: 'N6QyM-R7SAs', title: 'Behind the Scenes with Shreyas Talpade: Metro Grande' },
];

const tvcs = [
  { videoId: 'QtD-QxzTe-w', title: 'Cancer Awareness in India | UMMEED Musical Journey' },
  { videoId: 'YQch1ko8Lgs', title: 'Supreme Furnitures TVC 60 Sec AD by Mind Frame India' },
  { videoId: 'Dd5dTy04hNg', title: 'Dil Se Khelo Latest Video Song 2019 | Shahnawaz Ali' },
    { videoId: 'Ys9fIbVVhuU', title: 'Cancer Awareness in India | UMMEED Musical Journey' },
  { videoId: 'cjJ153qKENU', title: 'Supreme Furnitures TVC 60 Sec AD by Mind Frame India' },
  { videoId: 'mL-zEtgcHBQ', title: 'Dil Se Khelo Latest Video Song 2019 | Shahnawaz Ali' },
  { videoId: 'mTLd_jczJwA', title: 'Cancer Awareness in India | UMMEED Musical Journey' },
  { videoId: '-3dI6pQGJEw', title: 'Supreme Furnitures TVC 60 Sec AD by Mind Frame India' },
  { videoId: 'Cq9UdCwl8QE', title: 'Dil Se Khelo Latest Video Song 2019 | Shahnawaz Ali' },
];

const celebrityPhotos = [
  'https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=300&q=80',
  'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=300&q=80',
  'https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=300&q=80',
  'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=300&q=80',
  'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=300&q=80',
  'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=300&q=80',
  'https://images.unsplash.com/photo-1544005313-94ddf0286df2?w=300&q=80',
  'https://images.unsplash.com/photo-1552058544-f2b08422138a?w=300&q=80',
  'https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=300&q=80',
  'https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=300&q=80',
  'https://images.unsplash.com/photo-1547425260-76bcadfb4f2c?w=300&q=80',
  'https://images.unsplash.com/photo-1488426862026-3ee34a7d66df?w=300&q=80',
];

const outdoorMedia = [
  'https://images.unsplash.com/photo-1508615039623-a25605d2b022?w=500&q=80',
  'https://images.unsplash.com/photo-1414235077428-338989a2e8c0?w=500&q=80',
  'https://images.unsplash.com/photo-1555421689-491a97ff2040?w=500&q=80',
  'https://images.unsplash.com/photo-1563986768494-4dee2763ff3f?w=500&q=80',
];

// ─── Responsive Celebrity Shoot Carousel ─────────────────────────────────────
function CelebCarousel() {
  const [page, setPage] = useState(0);
  const [perPage, setPerPage] = useState(6);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth < 640) {
        setPerPage(3);
      } else if (window.innerWidth < 1024) {
        setPerPage(4);
      } else {
        setPerPage(6);
      }
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const totalPages = Math.ceil(celebrityPhotos.length / perPage);
  const visible = celebrityPhotos.slice(page * perPage, page * perPage + perPage);

  return (
    <div>
      <div style={{ 
        display: 'grid', 
        gridTemplateColumns: `repeat(${perPage}, 1fr)`, 
        gap: 8, 
        marginBottom: 20 
      }}>
        {visible.map((src, i) => (
          <div key={i} style={{ aspectRatio: '3/4', overflow: 'hidden', background: '#eee' }}>
            <img 
              src={src} 
              alt="" 
              style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block' }} 
            />
          </div>
        ))}
      </div>
      <div style={{ display: 'flex', justifyContent: 'center', gap: 8, flexWrap: 'wrap' }}>
        {Array.from({ length: totalPages }).map((_, i) => (
          <button
            key={i}
            onClick={() => setPage(i)}
            style={{
              width: 10, 
              height: 10, 
              borderRadius: '50%', 
              border: 'none',
              background: i === page ? gold : '#ccc', 
              cursor: 'pointer', 
              padding: 0,
              transition: 'background 0.2s',
            }}
          />
        ))}
      </div>
    </div>
  );
}

// ─── Quick Contact Form ───────────────────────────────────────────────────────
function QuickContactForm() {
  const [form, setForm] = useState({ name: '', email: '', phone: '', city: '', company: '', designation: '' });
  const [loading, setLoading] = useState(false);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => setIsMobile(window.innerWidth < 768);
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  const inputStyle = {
    border: 'none', 
    borderBottom: '1px solid #bbb',
    background: 'transparent', 
    fontFamily: 'Georgia, serif',
    fontSize: 13, 
    color: '#1a1a1a', 
    padding: '8px 0',
    outline: 'none', 
    width: '100%',
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!form.name || !form.email || !form.phone) {
      toast.error('Please fill required fields');
      return;
    }
    setLoading(true);
    setTimeout(() => {
      toast.success("Thank you! We'll be in touch shortly.");
      setForm({ name: '', email: '', phone: '', city: '', company: '', designation: '' });
      setLoading(false);
    }, 1000);
  };

  return (
    <div style={{ border: '1px solid #ddd', padding: '28px 28px 32px', fontFamily: 'Georgia, serif' }}>
      <p style={{ fontSize: 14, fontWeight: 700, textAlign: 'center', margin: '0 0 10px', color: '#1a1a1a' }}>
        Fill in your details and you'll hear from us shortly!
      </p>
      <div style={{ width: 40, height: 2, background: gold, margin: '0 auto 24px' }} />
      <form onSubmit={handleSubmit}>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? 16 : '0 24px', 
          marginBottom: 20 
        }}>
          <input placeholder="Name*" value={form.name} onChange={e => setForm({ ...form, name: e.target.value })} style={inputStyle} />
          <input placeholder="E-mail*" type="email" value={form.email} onChange={e => setForm({ ...form, email: e.target.value })} style={inputStyle} />
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? 16 : '0 24px', 
          marginBottom: 20 
        }}>
          <input placeholder="Contact No.*" value={form.phone} onChange={e => setForm({ ...form, phone: e.target.value })} style={inputStyle} />
          <input placeholder="City" value={form.city} onChange={e => setForm({ ...form, city: e.target.value })} style={inputStyle} />
        </div>
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? 16 : '0 24px', 
          marginBottom: 28 
        }}>
          <input placeholder="Your Company Name*" value={form.company} onChange={e => setForm({ ...form, company: e.target.value })} style={inputStyle} />
          <input placeholder="Designation*" value={form.designation} onChange={e => setForm({ ...form, designation: e.target.value })} style={inputStyle} />
        </div>
        <button
          type="submit"
          disabled={loading}
          style={{
            background: gold, 
            color: '#fff', 
            border: 'none',
            padding: '11px 32px', 
            fontSize: 11, 
            fontWeight: 700,
            textTransform: 'uppercase', 
            letterSpacing: 2,
            cursor: loading ? 'not-allowed' : 'pointer',
            fontFamily: 'Georgia, serif', 
            opacity: loading ? 0.7 : 1,
            width: isMobile ? '100%' : 'auto',
          }}
        >
          {loading ? 'SENDING...' : 'SUBMIT'}
        </button>
      </form>
    </div>
  );
}

// ─── HOME PAGE ────────────────────────────────────────────────────────────────
export default function Home() {
  const [isMobile, setIsMobile] = useState(false);
  const [isTablet, setIsTablet] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 768);
      setIsTablet(window.innerWidth >= 768 && window.innerWidth < 1024);
    };
    handleResize();
    window.addEventListener('resize', handleResize);
    return () => window.removeEventListener('resize', handleResize);
  }, []);

  return (
    <div style={{ fontFamily: 'Georgia, serif', overflowX: 'hidden' }}>

      {/* ── 1. HERO: Background Video ───────────────────────────────────────── */}
      <section style={{ 
        position: 'relative', 
        height: '100vh', 
        minHeight: 560, 
        overflow: 'hidden', 
        display: 'flex', 
        alignItems: 'center', 
        justifyContent: 'center' 
      }}>
        {/* Background video */}
        <video
          autoPlay
          muted
          loop
          playsInline
          style={{ position: 'absolute', inset: 0, width: '100%', height: '100%', objectFit: 'cover', zIndex: 0 }}
        >
          <source src="https://www.w3schools.com/html/mov_bbb.mp4" type="video/mp4" />
        </video>

        {/* Dark overlay */}
        <div style={{ position: 'absolute', inset: 0, background: 'rgba(10,10,20,0.62)', zIndex: 1 }} />

        {/* Content */}
        <div style={{ position: 'relative', zIndex: 2, textAlign: 'center', padding: '0 20px', maxWidth: 900, margin: '0 auto' }}>
          <p style={{ 
            fontSize: 'clamp(10px, 3vw, 12px)', 
            letterSpacing: 'clamp(3px, 1vw, 4px)', 
            textTransform: 'uppercase', 
            color: gold, 
            marginBottom: 16, 
            fontWeight: 600 
          }}>
            Advertising & Creative Communications
          </p>
          <h1
            style={{
              fontSize: 'clamp(32px, 8vw, 72px)',
              fontWeight: 900, 
              color: '#fff', 
              lineHeight: 1.1,
              margin: '0 0 20px', 
              letterSpacing: -1,
            }}
          >
            Leading Advertising Agency in Mumbai
          </h1>
          <div style={{ width: 60, height: 2, background: gold, margin: '0 auto 24px' }} />
          <p style={{ 
            fontSize: 'clamp(14px, 2vw, 16px)', 
            color: 'rgba(255,255,255,0.82)', 
            lineHeight: 1.6, 
            marginBottom: 36, 
            maxWidth: 640, 
            margin: '0 auto 36px',
            padding: '0 16px'
          }}>
            Conceptualizing strategic communication campaigns for leading brands across FMCG, FnB, Travel, Luxury, IT, Healthcare, and more.
          </p>
          <div style={{ display: 'flex', gap: 16, justifyContent: 'center', flexWrap: 'wrap', padding: '0 16px' }}>
            <Link
              to="/contact"
              style={{
                padding: 'clamp(10px, 2vw, 13px) clamp(24px, 4vw, 32px)', 
                background: gold, 
                color: '#fff',
                textDecoration: 'none', 
                fontWeight: 700, 
                fontSize: 'clamp(10px, 2vw, 12px)',
                letterSpacing: 2, 
                textTransform: 'uppercase', 
                fontFamily: 'Georgia, serif',
                display: 'inline-block',
              }}
            >
              GET IN TOUCH
            </Link>
            <Link
              to="/about"
              style={{
                padding: 'clamp(10px, 2vw, 13px) clamp(24px, 4vw, 32px)', 
                background: 'transparent',
                border: '1px solid rgba(255,255,255,0.6)', 
                color: '#fff',
                textDecoration: 'none', 
                fontWeight: 600, 
                fontSize: 'clamp(10px, 2vw, 12px)',
                letterSpacing: 2, 
                textTransform: 'uppercase', 
                fontFamily: 'Georgia, serif',
                display: 'inline-block',
              }}
            >
              ABOUT US
            </Link>
          </div>
        </div>

        {/* Scroll hint */}
        <div style={{ 
          position: 'absolute', 
          bottom: 28, 
          left: '50%', 
          transform: 'translateX(-50%)', 
          zIndex: 2, 
          display: isMobile ? 'none' : 'flex', 
          flexDirection: 'column', 
          alignItems: 'center', 
          gap: 6 
        }}>
          <span style={{ fontSize: 10, color: 'rgba(255,255,255,0.5)', letterSpacing: 2, textTransform: 'uppercase' }}>Scroll</span>
          <div style={{ width: 1, height: 32, background: 'rgba(255,255,255,0.3)' }} />
        </div>
      </section>

      {/* ── 2. INTRO + QUICK CONTACT FORM ──────────────────────────────────── */}
      <Section bg="#fff" py={isMobile ? 48 : 72}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 32 : 48 }}>
          <h2 style={{ 
            fontSize: 'clamp(28px, 5vw, 38px)', 
            fontWeight: 900, 
            fontFamily: 'Georgia, serif', 
            color: '#1a1a1a', 
            margin: '0 0 12px', 
            letterSpacing: -0.5,
            padding: '0 16px'
          }}>
            Leading Advertising Agency in Mumbai
          </h2>
          <div style={{ width: 60, height: 2, background: gold, margin: '0 auto' }} />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : '1fr 1fr', 
          gap: isMobile ? 40 : 56, 
          alignItems: 'flex-start' 
        }}>
          {/* Left: Company Intro */}
          <div style={{ fontSize: 'clamp(13px, 2vw, 13.5px)', color: '#333', lineHeight: 1.9, padding: '0 8px' }}>
            <p style={{ margin: '0 0 16px' }}>
              Over the last decade, the ad agency Mumbai based, <strong>Mind Frame India, which is one of the best advertising agency in Mumbai</strong> has been conceptualizing strategic communication campaigns for various brands. Being a <strong>Mumbai Advertising Agency</strong>, we have been creating consumer-centric strategies and designs for clients across various industry verticals.
            </p>
            <p style={{ margin: '0 0 16px' }}>
              The most prominent industries are FMCG, FnB, Travel Industry, Luxury Brands, Information Technology, Health Care, Insurance Sector, Hotels, Fashion Labels, Retail Brands, various franchise brands, and many more. Competing with ad agencies in Mumbai, Mind Frame India also caters to International markets like the US, the Middle East, and the Far East countries.
            </p>
            <p style={{ margin: 0 }}>
              Our company's consistent and integrated workflow motivates our team to keep working toward perfection always. We provide above-the-line marketing (ATL), below-the-line marketing (BTL), digital marketing services, creative solutions, and branding solutions, positioning us as a full-service marketing agency in Mumbai.
            </p>
          </div>

          {/* Right: Quick Contact Form */}
          <QuickContactForm />
        </div>
      </Section>

      {/* ── 3. CORE SERVICES ───────────────────────────────────────────────── */}
      <Section bg="#f7f6f2" py={isMobile ? 56 : 80}>
        <div style={{ textAlign: 'center', marginBottom: isMobile ? 40 : 56 }}>
          <h2 style={{ 
            fontSize: 'clamp(24px, 5vw, 38px)', 
            fontWeight: 900, 
            fontFamily: 'Georgia, serif', 
            color: '#1a1a1a', 
            margin: '0 0 12px', 
            letterSpacing: -0.5, 
            maxWidth: 560, 
            marginLeft: 'auto', 
            marginRight: 'auto', 
            lineHeight: 1.2,
            padding: '0 16px'
          }}>
            Core Services of a Modern Advertising Agency In Mumbai
          </h2>
          <div style={{ width: 60, height: 2, background: gold, margin: '0 auto' }} />
        </div>

        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
          gap: isMobile ? 40 : 32 
        }}>
          {coreServices.map((s) => (
            <div key={s.num}>
              <p style={{ fontSize: 11, color: '#aaa', letterSpacing: 1, margin: '0 0 10px' }}>
                <span style={{ color: '#888' }}>{s.num}/</span>{' '}
                <span style={{ color: gold, fontWeight: 700 }}>{s.tag}</span>
              </p>
              <h3 style={{ fontSize: 'clamp(18px, 3vw, 20px)', fontWeight: 900, color: '#1a1a1a', margin: '0 0 14px', lineHeight: 1.3 }}>
                {s.title}
              </h3>
              <p style={{ fontSize: 'clamp(13px, 2vw, 13px)', color: '#555', lineHeight: 1.85, margin: 0 }}>{s.desc}</p>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 4. CURRENT CAMPAIGNS ───────────────────────────────────────────── */}
      <Section bg="#f0efe9" py={isMobile ? 48 : 72}>
        {sectionTitle('Current Campaigns')}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
          gap: isMobile ? 16 : 4 
        }}>
          {campaigns.map((c, i) => (
            <div
              key={i}
              style={{ 
                position: 'relative', 
                overflow: 'hidden', 
                aspectRatio: '4/3', 
                cursor: 'pointer',
                borderRadius: isMobile ? 8 : 0,
                marginBottom: isMobile ? 4 : 0
              }}
              onMouseOver={(e) => { if(!isMobile) e.currentTarget.querySelector('.camp-overlay').style.opacity = 1; }}
              onMouseOut={(e) => { if(!isMobile) e.currentTarget.querySelector('.camp-overlay').style.opacity = i === 1 ? 1 : 0; }}
            >
              <img 
                src={c.img} 
                alt={c.title} 
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }} 
              />
              <div
                className="camp-overlay"
                style={{
                  position: 'absolute', 
                  inset: 0,
                  background: 'rgba(20,18,14,0.55)',
                  display: 'flex', 
                  flexDirection: 'column',
                  justifyContent: 'flex-end', 
                  padding: 20,
                  opacity: isMobile ? 1 : (i === 1 ? 1 : 0),
                  transition: 'opacity 0.3s',
                }}
              >
                <p style={{ fontSize: 'clamp(12px, 3vw, 14px)', fontWeight: 700, color: '#fff', margin: '0 0 6px' }}>{c.title}</p>
                <p style={{ fontSize: 'clamp(10px, 2vw, 12px)', color: 'rgba(255,255,255,0.8)', margin: 0 }}>{c.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </Section>

      {/* ── 5. OUR WORK ────────────────────────────────────────────────────── */}
      <Section bg="#f7f6f2" py={isMobile ? 48 : 72}>
        {sectionTitle('Our Work')}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
          gap: 16 
        }}>
          {ourWork.map((v) => <YTEmbed key={v.videoId} videoId={v.videoId} title={v.title} />)}
        </div>
      </Section>

      {/* ── 6. BEHIND THE SCENES ───────────────────────────────────────────── */}
      <Section bg="#fff" py={isMobile ? 48 : 72}>
        {sectionTitle('Behind The Scenes')}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
          gap: 16 
        }}>
          {bts.map((v) => <YTEmbed key={v.title} videoId={v.videoId} title={v.title} />)}
        </div>
      </Section>

      {/* ── 7. TV COMMERCIALS ──────────────────────────────────────────────── */}
      <Section bg="#f7f6f2" py={isMobile ? 48 : 72}>
        {sectionTitle('TV Commercials')}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? '1fr' : (isTablet ? 'repeat(2, 1fr)' : 'repeat(3, 1fr)'), 
          gap: 16 
        }}>
          {tvcs.map((v) => <YTEmbed key={v.title} videoId={v.videoId} title={v.title} />)}
        </div>
      </Section>

      {/* ── 8. CELEBRITY SHOOT ─────────────────────────────────────────────── */}
      <Section bg="#fff" py={isMobile ? 48 : 72}>
        {sectionTitle('Celebrity Shoot')}
        <CelebCarousel />
      </Section>

      {/* ── 9. OUTDOOR & PRINT MEDIA ───────────────────────────────────────── */}
      <Section bg="#f0efe9" py={isMobile ? 48 : 72}>
        {sectionTitle('Outdoor & Print Media')}
        <div style={{ 
          display: 'grid', 
          gridTemplateColumns: isMobile ? 'repeat(2, 1fr)' : 'repeat(4, 1fr)', 
          gap: isMobile ? 8 : 4 
        }}>
          {outdoorMedia.map((src, i) => (
            <div key={i} style={{ aspectRatio: '4/3', overflow: 'hidden', borderRadius: isMobile ? 8 : 0 }}>
              <img
                src={src} 
                alt=""
                style={{ width: '100%', height: '100%', objectFit: 'cover', display: 'block', transition: 'transform 0.4s' }}
                onMouseOver={(e) => { if(!isMobile) e.currentTarget.style.transform = 'scale(1.05)'; }}
                onMouseOut={(e) => { if(!isMobile) e.currentTarget.style.transform = 'scale(1)'; }}
              />
            </div>
          ))}
        </div>
      </Section>

      {/* ── 10. TESTIMONIALS ───────────────────────────────────────────────── */}
      <Testimonials />

    </div>
  );
}