import React from 'react';

const videos = [
  {
    id: 1,
    title: "Supreme Furnitures TVC 60 Sec AD by Mind Frame India",
    ytId: "YQch1ko8Lgs",
  },
  {
    id: 2,
    title: "ABMH Mother & Child Care MIDDLE CLASS 30 HINDI TVC",
    ytId: "Ys9fIbVVhuU",
  },
  {
    id: 3,
    title: "UMMEED – An Emotional Cancer Awareness Campaign for Aditya Birla Memorial Hospital | Pune",
    ytId: "9u7dQGzBXJQ",
  },
  {
    id: 4,
    title: "Kohler TVC – The Bold Look of Kohler",
    ytId: "XMCYvxx3H2Y",
  },
  {
    id: 5,
    title: "Five Fat Monk Dim Sum Story Part 1 | Food & Beverages Ads | Mind Frame India",
    ytId: "Cq9UdCwl8QE",
  },
  {
    id: 6,
    title: "ABMH Mother & Child Care ELITE CLASS 30 HINDI TVC",
    ytId: "g0R83YLwAJc",
  },
];

// Direct YouTube Embed Component - Bilkul waise hi jaise Home page mein hai
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

export default function Television() {
  return (
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        /* ── HERO ── */
        .tv-hero {
          position: relative; height: 480px; overflow: hidden;
        }
        .tv-hero img {
          width: 100%; height: 100%;
          object-fit: cover; object-position: center;
        }
        .tv-hero-overlay {
          position: absolute; inset: 0;
          background: linear-gradient(135deg, rgba(0,0,0,0.68) 0%, rgba(10,5,30,0.55) 100%);
          display: flex; align-items: center; justify-content: center; flex-direction: column;
        }
        .tv-breadcrumb {
          position: absolute; top: 20px; left: 0; right: 0;
          text-align: center; font-size: 11px;
          letter-spacing: 2.5px; color: rgba(255,255,255,0.6);
          text-transform: uppercase;
        }
        .tv-hero-title {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(26px, 5vw, 56px);
          font-weight: 800; color: #fff;
          letter-spacing: -1.5px; line-height: 1.15;
          text-align: center; max-width: 860px; padding: 0 24px;
        }
        .tv-hero-subtitle {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(13px, 1.8vw, 18px);
          color: #b08d57; margin-top: 18px;
          letter-spacing: 4px; text-transform: uppercase;
        }

        /* ── LAYOUT: LEFT TEXT + RIGHT FORM ── */
        .tv-intro-wrap {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 0;
          max-width: 1200px;
          margin: 0 auto;
          padding: 72px 60px 60px;
        }
        .tv-intro-left { padding-right: 60px; }
        .tv-intro-right { padding-left: 40px; border-left: 1px solid #e8e2d9; }

        /* LEFT TEXT */
        .tv-main-heading {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 2.5vw, 27px);
          font-weight: 700; color: #b08d57;
          text-align: center; margin-bottom: 12px; line-height: 1.3;
        }
        .tv-gold-line {
          width: 55px; height: 2px;
          background: #b08d57; margin: 0 auto 28px;
        }
        .tv-sub-gold {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(17px, 2vw, 22px);
          font-weight: 700; font-style: italic;
          color: #b08d57; margin-bottom: 14px; line-height: 1.3;
        }
        .tv-body {
          font-size: 13px; font-weight: 300;
          color: #555; line-height: 1.85; margin-bottom: 14px;
        }
        .tv-body strong { font-weight: 600; color: #333; }
        .tv-body em { font-style: italic; }

        /* RIGHT FORM */
        .tv-form-label {
          font-size: 13px; font-weight: 500; color: #444;
          margin-bottom: 20px; display: block;
        }
        .tv-form-grid {
          display: grid; grid-template-columns: 1fr 1fr; gap: 12px;
          margin-bottom: 12px;
        }
        .tv-input {
          width: 100%; padding: 10px 12px;
          border: 1px solid #d4cdc4; border-radius: 2px;
          font-size: 12.5px; font-family: 'DM Sans', sans-serif;
          color: #333; outline: none;
          transition: border-color 0.2s;
        }
        .tv-input:focus { border-color: #b08d57; }
        .tv-input::placeholder { color: #aaa; }
        .tv-textarea {
          width: 100%; padding: 10px 12px;
          border: 1px solid #d4cdc4; border-radius: 2px;
          font-size: 12.5px; font-family: 'DM Sans', sans-serif;
          color: #333; outline: none; resize: vertical;
          min-height: 100px; transition: border-color 0.2s;
          margin-bottom: 14px;
        }
        .tv-textarea:focus { border-color: #b08d57; }
        .tv-textarea::placeholder { color: #aaa; }
        .tv-send-btn {
          display: inline-block; padding: 12px 28px;
          background: #b08d57; color: #fff;
          font-size: 11px; font-weight: 700; letter-spacing: 2px;
          text-transform: uppercase; border: none; cursor: pointer;
          transition: background 0.25s, transform 0.2s;
          border-radius: 2px;
        }
        .tv-send-btn:hover { background: #9a7842; transform: translateY(-1px); }

        /* ── ARTICLE SECTION ── */
        .tv-article {
          background: #f9f7f4;
          border-top: 1px solid #e8e2d9;
          padding: 64px 60px;
          max-width: 1200px;
          margin: 0 auto;
        }
        .tv-article-h2 {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(20px, 2.8vw, 28px);
          font-weight: 700; color: #b08d57;
          text-align: center; margin-bottom: 20px;
          line-height: 1.3;
        }
        .tv-article-h3 {
          font-family: 'DM Sans', sans-serif;
          font-size: clamp(15px, 1.8vw, 18px);
          font-weight: 700; color: #1a1510;
          margin: 28px 0 8px;
        }
        .tv-article-body {
          font-size: 13px; font-weight: 300;
          color: #555; line-height: 1.85; margin-bottom: 8px;
        }
        .tv-article-body strong { font-weight: 600; color: #333; }
        .tv-bullet {
          font-size: 13px; font-weight: 300;
          color: #555; line-height: 1.85;
          padding-left: 20px; margin-bottom: 6px;
          position: relative;
        }
        .tv-bullet::before {
          content: '•'; position: absolute; left: 0;
          color: #b08d57;
        }

        /* ── VIDEO SECTION ── */
        .tv-videos-wrap {
          padding: 60px 24px 80px;
          max-width: 1300px; margin: 0 auto;
        }
        .tv-videos-tagline {
          font-family: 'Cormorant Garamond', serif;
          font-size: clamp(18px, 2.2vw, 24px);
          font-weight: 600; font-style: italic;
          color: #b08d57; text-align: center;
          margin-bottom: 36px;
        }
        .tv-videos-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 16px;
        }

        @media (max-width: 900px) {
          .tv-intro-wrap { grid-template-columns: 1fr; padding: 48px 24px; }
          .tv-intro-left { padding-right: 0; margin-bottom: 48px; }
          .tv-intro-right { padding-left: 0; border-left: none; border-top: 1px solid #e8e2d9; padding-top: 40px; }
          .tv-article { padding: 48px 24px; }
          .tv-videos-grid { grid-template-columns: repeat(2, 1fr); }
          .tv-hero { height: 320px; }
        }
        @media (max-width: 560px) {
          .tv-videos-grid { grid-template-columns: 1fr; }
        }
      `}</style>

      {/* ── HERO ── */}
      <div className="tv-hero">
        <img
          src="https://images.unsplash.com/photo-1478720568477-152d9b164e26?w=1600&q=85"
          alt="Television Advertising Agency Mumbai"
        />
        <div className="tv-hero-overlay">
          <div className="tv-breadcrumb">Home / Services / Television Advertising</div>
          <div className="tv-hero-title">Television Advertising Agency in Mumbai</div>
          <div className="tv-hero-subtitle">IMPACTFUL TV CAMPAIGNS THAT DELIVER ROI</div>
        </div>
      </div>

      {/* ── INTRO: LEFT TEXT + RIGHT FORM ── */}
      <div className="tv-intro-wrap">

        {/* LEFT */}
        <div className="tv-intro-left">
          <h2 className="tv-main-heading">Cost Effective Television Advertising Agency in Mumbai</h2>
          <div className="tv-gold-line" />
          <h3 className="tv-sub-gold">Welcome to Mind Frame India – Leading Television Advertising Agency in Mumbai</h3>
          <p className="tv-body">
            At <strong>Mind Frame India</strong>, we specialize in creating <em>impactful television campaigns</em> and corporate films that leave a lasting impression. With over a decade of experience, our results-driven approach has solidified our position as the top television advertising agency in Mumbai.
          </p>
          <p className="tv-body">
            From compelling TV commercials to brand-enhancing corporate films, we're here to help your business connect with millions of viewers and stand out from the competition.
          </p>
        </div>

        {/* RIGHT FORM */}
        <div className="tv-intro-right">
          <span className="tv-form-label">Fill in your details and you'll hear from us shortly!</span>
          <div className="tv-form-grid">
            <input className="tv-input" placeholder="Name*" />
            <input className="tv-input" placeholder="E-mail*" />
            <input className="tv-input" placeholder="Mobile No.*" />
            <input className="tv-input" placeholder="Location*" />
          </div>
          <textarea className="tv-textarea" placeholder="Message (Requirement)*" />
          <button className="tv-send-btn">Send Message</button>
        </div>

      </div>

      {/* ── ARTICLE SECTION ── */}
      <div style={{ background: "#f9f7f4", borderTop: "1px solid #e8e2d9", borderBottom: "1px solid #e8e2d9" }}>
        <div className="tv-article">

          <h2 className="tv-article-h2">Why Choose Mind Frame India For TV Advertising?</h2>
          <p className="tv-article-body">
            Do you want to boost your brand's visibility and reach through strategic TV ad campaigns? We at <strong>Mind Frame India</strong> are here to make it happen. We help our clients connect with millions of viewers in India with our TV advertising. We specializes in making high-quality, impactful TV commercials that effectively convey your brand's message and resonate with your target audience. Our team of talented creative professionals, media planners, and strategists work closely with you to understand your business objectives and craft a tailor-made TV advertising strategy that delivers measurable results.
          </p>

          <h3 className="tv-article-h3">Build Instant Credibility</h3>
          <p className="tv-article-body">
            Television is a powerful advertising medium that instantly boosts brand credibility and trustworthiness in the eyes of consumers. Consumers perceive brands that advertise on TV as more established and reputable, giving them an edge over their competitors. Mind Frame India helps brands quickly achieve the desired visibility and position themselves as industry leaders through strategic TV ad campaigns.
          </p>

          <h3 className="tv-article-h3">Targeted Reach, Maximum Exposure</h3>
          <p className="tv-article-body">
            There is no doubt that television ads are best to drive sales and increase brand awareness as they expose your brand to million of potential customer. TV ads reach to targeted audience and deliver to maximum exposure to your brand.
          </p>

          <h3 className="tv-article-h3">High Recall Value and Immediate Impact</h3>
          <p className="tv-article-body">
            TV commercials are noted for their strong recall and immediate effect, as they imprint product imagery and brand messaging on viewers' minds. We at Mind Frame India aim to create visually compelling and memorable TV commercials that remain etched in the minds of your target audience long after they see your ad, ultimately driving increased brand recognition and recall.
          </p>

          <h2 className="tv-article-h2" style={{ marginTop: 48 }}>The Power of TV Advertising</h2>

          <h3 className="tv-article-h3">Build Instant Credibility</h3>
          <p className="tv-article-body">
            TV advertising establishes your brand as credible and trustworthy in the eyes of consumers. With visually stunning and memorable commercials, we help your business stand out and build confidence among your audience.
          </p>

          <h3 className="tv-article-h3">Targeted Reach with Maximum Visibility</h3>
          <p className="tv-article-body">
            Our campaigns are designed to connect with millions of potential customers across India. By leveraging TV's expansive reach, we maximize exposure and drive brand awareness effectively.
          </p>

          <h3 className="tv-article-h3">High Recall Value</h3>
          <p className="tv-article-body">
            Television commercials are known for their lasting impact. We create visually compelling TVCs that embed your brand's message in your audience's minds, leading to increased recognition and strong recall value.
          </p>

          <h2 className="tv-article-h2" style={{ marginTop: 48 }}>The Mind Frame Advantage – Our In-House Production Team</h2>
          <p className="tv-article-body">What makes us stand out is our in-house production team. Here's why it makes a difference:</p>
          <p className="tv-bullet"><strong>Cost-Effective Solutions:</strong> Enjoy reduced production costs without compromising quality.</p>
          <p className="tv-bullet"><strong>Creative Control:</strong> Greater flexibility and alignment with your vision.</p>
          <p className="tv-bullet"><strong>Faster Turnaround:</strong> Bring ideas to life quickly with minimized delays.</p>
          <p className="tv-bullet"><strong>Confidentiality Assured:</strong> Reduced risks of conflicts or data breaches.</p>
          <p className="tv-article-body" style={{ marginTop: 12 }}>
            Our production expertise ensures your commercials aren't just compelling — they're extraordinary.
          </p>

          <h2 className="tv-article-h2" style={{ marginTop: 48 }}>Our Process – Seamless Collaboration from Start to Finish</h2>

          <h3 className="tv-article-h3">Understanding Your Brand</h3>
          <p className="tv-article-body">
            We begin by deeply understanding your brand, target audience, and marketing goals to ensure our campaigns align with your objectives.
          </p>

          <h3 className="tv-article-h3">Creative Concept Development</h3>
          <p className="tv-article-body">
            Our creative team brings your brand story to life by developing engaging, out-of-the-box concepts that captivate and inspire.
          </p>

          <h3 className="tv-article-h3">Production Excellence</h3>
          <p className="tv-article-body">
            Using the latest technology and a talented in-house team, we produce high-quality TVCs with quick turnaround times, ensuring every detail reflects your brand values.
          </p>

          <h3 className="tv-article-h3">Flawless Campaign Execution</h3>
          <p className="tv-article-body">
            From strategic media planning to seamless delivery, we handle every aspect of your campaign to achieve maximum exposure and success.
          </p>

        </div>
      </div>

      {/* ── VIDEO GRID - Direct YouTube Videos (No Thumbnail, No Modal) ── */}
      <div className="tv-videos-wrap">
        <p className="tv-videos-tagline">We create stories that generate leads.</p>
        <div className="tv-videos-grid">
          {videos.map((v) => (
            <YTEmbed key={v.id} videoId={v.ytId} title={v.title} />
          ))}
        </div>
      </div>

    </div>
  );
}