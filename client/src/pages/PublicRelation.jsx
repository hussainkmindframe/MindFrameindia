const prServices = [
  {
    id: 1,
    title: "Organic Press Release Writing and Distribution",
    desc: "The primary objective of our press release writing and distribution service is to maximize the reach and impact of your brand. In order to ensure your message is conveyed in a clear, compelling manner, we craft engaging, authentic press releases tailored to resonate with your target audience. In order to capture attention and maintain brand integrity and voice, our experienced writers produce content that is compelling and compelling. With our distribution strategy, we ensure that your press release reaches the right audience. We utilize a comprehensive network of industry influencers and media contacts, along with digital platforms, for effective distribution of your message. Our approach is both organic and strategic, aiming for high-quality exposure that enhances the visibility and credibility of your brand. We position your brand at the forefront of industry discussions by analyzing media trends and leveraging our insights. As a result, your brand will be recognized and engaged by more people.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <rect x="6" y="10" width="36" height="28" rx="3" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M6 18l12 8 12-8 12 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 30l8-6M42 30l-8-6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 2,
    title: "Online Reputation Management",
    desc: "Today, maintaining a positive online reputation is essential to the success of any business in the digital age. Mind Frame India is dedicated to monitoring, managing, and improving the digital presence of our clients in order to ensure they remain competitive in a crowded market. We track mentions of our clients across various online platforms, including social media, reviews, and forums, as part of our proactive approach to addressing negative publicity. Our team implements a range of strategies to highlight positive content, engage with the audience constructively, and swiftly handle potential reputation bumps. We assist our clients in shaping and improving public perception by crafting customized content and utilizing the powerful tools of SEO and social media optimization. This not only strengthens their reputation but also creates trust and credibility in their target audience. We are committed to maintaining a stellar online image for our clients so that they will receive the recognition they deserve, resulting in greater consumer confidence and enhanced business growth.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <circle cx="24" cy="24" r="16" stroke="#b08d57" strokeWidth="1.5" />
        <path d="M24 12v4M24 32v4M12 24h4M32 24h4" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="24" cy="24" r="6" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
  {
    id: 3,
    title: "Brand Stories & Brand Launch",
    desc: "Each brand has a unique story to tell, so Mind Frame India excels at telling compelling narratives that resonate with your target audience. In addition to informing but also inspiring your audience, our expert team helps you identify your brand's values, mission, and vision as part of our collaborative approach. We tell engaging, relatable, and memorable stories that make your brand stand out on the market. When launching a new brand, we take a strategic and meticulous approach to ensure buzz and excitement. We carefully manage all aspects of the launch, including pre-launch teasers and grand unveilings. Digital marketing, influencer partnerships, and media engagement enable your brand to establish a strong market position and gain attention from day one. Success and growth of your brand are our top priorities.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M24 6l4 12h12l-10 8 4 12-10-8-10 8 4-12L8 18h12z" stroke="#b08d57" strokeWidth="1.5" strokeLinejoin="round" />
        <path d="M24 6v6M24 30v12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 4,
    title: "Brand Building with PR",
    desc: "At Mind Frame India, we view PR as a cornerstone of effective brand building. As part of our strategy for creating authentic connections with our clients, we integrate public relations into broader marketing strategies. As part of our approach, we ensure that all interactions reinforce the brand's core values and mission through consistent messaging across all platforms. We increase brand awareness and establish a credible, authoritative presence in the industry by utilizing strategic storytelling, media engagement, and targeted campaigns. PR campaigns are customized to meet the specific needs of our clients based on our understanding of their brand's unique nuances. Brand awareness and audience loyalty are increased when the brand is profiled through coverage. By building lasting relationships with thought leaders and key influencers, we aim to increase brand visibility and influence perceptions in a positive manner. Ultimately, we want your brand to stand out in a constantly changing market, while also flourishing.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M8 28l10-12 8 6 10-14 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
        <path d="M6 38h36" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
      </svg>
    ),
  },
  {
    id: 5,
    title: "Influencer Marketing",
    desc: "Mind Frame India develops influencer marketing strategies that align with your brand's goals. Influencer marketing has become a powerful marketing tool. We begin with identifying influencers who are authentic representations of your brand and connect with your target audience. In order to achieve organic and credible collaborations with influencers, it is essential that we build genuine relationships with them. We design campaigns that engage their followers by utilizing their unique voice and style. By building on the influencer's established audience, we increase your brand's visibility and credibility. Our team optimizes and improves your campaigns according to actionable metrics, such as engagement rates, reach, and conversion. Through strategic partnerships and creative storytelling, we connect your brand with your audience.",
    icon: (
      <svg viewBox="0 0 48 48" fill="none" width="48" height="48">
        <path d="M16 20c0-4.4 3.6-8 8-8s8 3.6 8 8" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <path d="M8 38c0-6.6 7.2-12 16-12s16 5.4 16 12" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" />
        <circle cx="38" cy="24" r="4" stroke="#b08d57" strokeWidth="1.5" />
      </svg>
    ),
  },
];

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#f5f3ef",
    minHeight: "100vh",
  },
  goldTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(22px, 3vw, 28px)",
    fontWeight: 600,
    color: "#b08d57",
    textAlign: "center",
    marginBottom: "16px",
    letterSpacing: "-0.3px",
  },
  underline: {
    width: "60px",
    height: "2px",
    background: "#b08d57",
    margin: "0 auto 24px",
  },
  body: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "14px",
    color: "#555",
    lineHeight: 1.75,
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "20px",
    fontWeight: 700,
    color: "#1a1510",
    textAlign: "center",
    margin: "18px 0 12px",
    letterSpacing: "-0.2px",
  },
};

function PRServiceCard({ svc }) {
  return (
    <div className="pr-card">
      <div className="pr-icon">{svc.icon}</div>
      <h3 style={styles.cardTitle}>{svc.title}</h3>
      <p style={styles.body}>{svc.desc}</p>
    </div>
  );
}

export default function PublicRelation() {
  return (
    <div style={styles.page}>
      <style>
        {`
          @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:ital,wght@0,400;0,600;0,700;1,600&family=DM+Sans:wght@300;400;500;600;700&display=swap');
          * { box-sizing: border-box; margin: 0; padding: 0; }

          .pr-card {
            background: #fff;
            border: 1px solid #e8e2d9;
            border-radius: 12px;
            padding: 40px 28px 36px;
            display: flex;
            flex-direction: column;
            align-items: center;
            text-align: center;
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            height: 100%;
          }
          .pr-card:hover {
            box-shadow: 0 20px 40px rgba(176, 141, 87, 0.12);
            transform: translateY(-6px);
            border-color: #b08d57;
          }
          .pr-icon {
            transition: all 0.35s cubic-bezier(0.4, 0, 0.2, 1);
            display: inline-flex;
          }
          .pr-card:hover .pr-icon {
            transform: scale(1.08) rotate(-3deg);
          }
          .pr-icon svg stroke {
            transition: stroke 0.3s ease;
          }
          .pr-card:hover .pr-icon svg stroke {
            stroke: #9a7842;
          }

          .services-grid {
            display: grid;
            grid-template-columns: repeat(3, 1fr);
            gap: 28px;
            max-width: 1300px;
            margin: 0 auto;
            padding: 20px 24px 60px;
          }

          @media (max-width: 1024px) {
            .services-grid {
              grid-template-columns: repeat(2, 1fr);
              gap: 24px;
            }
          }
          @media (max-width: 640px) {
            .services-grid {
              grid-template-columns: 1fr;
              gap: 20px;
            }
            .pr-card {
              padding: 32px 24px 28px;
            }
          }

          .hero-section {
            position: relative;
            height: 450px;
            overflow: hidden;
          }
          .hero-overlay {
            position: absolute;
            inset: 0;
            background: linear-gradient(135deg, rgba(0,0,0,0.75) 0%, rgba(0,0,0,0.55) 100%);
            display: flex;
            align-items: center;
            justify-content: center;
            flex-direction: column;
          }
          .hero-title {
            font-family: 'DM Sans', sans-serif;
            font-size: clamp(36px, 6vw, 64px);
            font-weight: 800;
            color: #fff;
            letter-spacing: -1.5px;
            line-height: 1.2;
            text-align: center;
            max-width: 900px;
            margin: 0 24px;
          }
          .hero-subtitle {
            font-family: 'Cormorant Garamond', serif;
            font-size: clamp(16px, 2vw, 20px);
            color: #b08d57;
            margin-top: 20px;
            letter-spacing: 4px;
            text-transform: uppercase;
          }
          .breadcrumb {
            position: absolute;
            top: 20px;
            left: 0;
            right: 0;
            text-align: center;
            font-family: 'DM Sans', sans-serif;
            font-size: 11px;
            letter-spacing: 2px;
            color: rgba(255,255,255,0.7);
            text-transform: uppercase;
          }

          .intro-section {
            background: #fff;
            padding: 64px 24px 56px;
            border-bottom: 1px solid #e8e2d9;
          }

          .services-section {
            background: #f5f3ef;
            padding: 60px 0 40px;
          }

          .why-section {
            background: #fff;
            padding: 60px 24px;
          }

          .approach-section {
            background: #f5f3ef;
            padding: 60px 24px;
            text-align: center;
          }

          .contact-section {
            background: #fff;
            padding: 60px 24px;
          }

          .footer-strip {
            border-top: 1px solid #e8e2d9;
            padding: 28px 24px;
            text-align: center;
            background: #fff;
          }

          .contact-form {
            background: #f5f3ef;
            border-radius: 16px;
            padding: 40px;
            max-width: 700px;
            margin: 0 auto;
          }
          .form-input {
            width: 100%;
            padding: 14px 16px;
            border: 1px solid #e8e2d9;
            border-radius: 8px;
            font-family: 'DM Sans', sans-serif;
            font-size: 14px;
            transition: all 0.3s ease;
            margin-bottom: 20px;
            background: #fff;
          }
          .form-input:focus {
            outline: none;
            border-color: #b08d57;
            box-shadow: 0 0 0 2px rgba(176,141,87,0.1);
          }
          .form-row {
            display: grid;
            grid-template-columns: 1fr 1fr;
            gap: 20px;
          }
          @media (max-width: 560px) {
            .form-row {
              grid-template-columns: 1fr;
              gap: 0;
            }
            .contact-form {
              padding: 28px;
            }
          }
        `}
      </style>

      {/* HERO SECTION */}
      <div className="hero-section">
        <img
          src="https://images.unsplash.com/photo-1557804506-669a67965ba0?w=1600&q=85"
          alt="Public Relations Agency"
          style={{ width: "100%", height: "100%", objectFit: "cover" }}
        />
        <div className="hero-overlay">
          <div className="breadcrumb">Home / Services / Public Relations</div>
          <div className="hero-title">
            Leading PR Agency in Mumbai
          </div>
          <div className="hero-subtitle">BUILDING BRAND REPUTATION</div>
        </div>
      </div>

      {/* INTRO SECTION */}
      <div className="intro-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto" }}>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "32px" }}>
            We are the most reputable PR agency in Mumbai with over 14 years of experience. Our company offers a wide range of services personalized to meet the needs of our clients. As a public relations agency, we are skilled in media relations, corporate communications, crisis management, brand building, and digital PR. It is our goal to provide our clients with compelling narratives and executive strategic campaigns that enhance their visibility and reputation within the competitive market environment.
          </p>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
            By using our experience and energy, we get the attention of influencers and invest in the right areas. As part of our PR services, we utilize the best practices, new ideas and innovative methods for distributing messages.
          </p>
        </div>
      </div>

      {/* CONTACT FORM SECTION */}
      <div className="contact-section">
        <div style={{ maxWidth: "700px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={styles.goldTitle}>Fill in your details and you'll hear from us shortly!</h2>
          <div style={styles.underline} />
        </div>
        
        <div className="contact-form">
          <form onSubmit={(e) => e.preventDefault()}>
            <div className="form-row">
              <input type="text" placeholder="Name*" className="form-input" required />
              <input type="email" placeholder="E-mail*" className="form-input" required />
            </div>
            <div className="form-row">
              <input type="tel" placeholder="Mobile No.*" className="form-input" required />
              <input type="text" placeholder="Location*" className="form-input" required />
            </div>
            <textarea 
              placeholder="Message (Requirement)*" 
              className="form-input" 
              rows="4"
              required
            />
            <button
              type="submit"
              style={{
                background: "#b08d57",
                border: "none",
                padding: "14px 32px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#1a1510",
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderRadius: "8px",
                letterSpacing: "1px",
                width: "100%",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.background = "#9a7842";
                e.currentTarget.style.transform = "translateY(-2px)";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.background = "#b08d57";
                e.currentTarget.style.transform = "translateY(0)";
              }}
            >
              SEND MESSAGE
            </button>
          </form>
        </div>
      </div>

      {/* WHY CHOOSE US SECTION */}
      <div className="why-section">
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={styles.goldTitle}>Why We are Best PR Agency In Mumbai</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
            Mind Frame India as a top PR agency possesses qualities such as creativity, strong networking skills, and a keen ability to adapt to changing media landscapes. We are known for our strategic thinking, effective communication, and the ability to build trust with both clients and influencers. Additionally, our dedication to continuous learning and staying ahead of industry trends ensures that we consistently provide top-notch service and innovative solutions.
          </p>
        </div>
      </div>

      {/* OUR KEY SERVICES SECTION */}
      <div className="why-section" style={{ background: "#f5f3ef" }}>
        <div style={{ maxWidth: "1000px", margin: "0 auto", textAlign: "center" }}>
          <h2 style={styles.goldTitle}>Our Key Services</h2>
          <div style={styles.underline} />
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8, marginBottom: "20px" }}>
            We maintain strong relationships with influential news organizations, journalists, and influencers across a variety of industries through our team of PR professionals. As a result of these connections, we are able to secure valuable media coverage for our clients, including press releases, interviews, product reviews, and thought leadership articles.
          </p>
          <p style={{ ...styles.body, textAlign: "center", fontSize: "15px", lineHeight: 1.8 }}>
            We assist companies in developing a messaging strategy that aligns with their overall brand identity. Through internal and external communications, we ensure that our clients' messages are clear, impactful, and resonate with their target audience.
          </p>
        </div>
      </div>

      {/* OUR PUBLIC RELATIONS SERVICES INCLUDE SECTION */}
      <div className="services-section">
        <div style={{ textAlign: "center", marginBottom: "20px", padding: "0 24px" }}>
          <h2 style={styles.goldTitle}>Our Public Relations services include:</h2>
          <div style={styles.underline} />
        </div>
        <div className="services-grid">
          {prServices.map((svc) => (
            <PRServiceCard key={svc.id} svc={svc} />
          ))}
        </div>
      </div>

     

  
    </div>
  );
}