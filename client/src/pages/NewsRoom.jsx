import { useState } from "react";

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#faf8f5",
    minHeight: "100vh",
  },
};

const newsData = {
  2024: [
    {
      id: 1,
      title: "Elevating Fashion — Runway Campaign 2024",
      image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?w=600&q=80",
    },
    {
      id: 2,
      title: "Tots Couture Week — Powered by Little Tags Luxury",
      image: "https://images.unsplash.com/photo-1555529771-835f59fc5efe?w=600&q=80",
    },
    {
      id: 3,
      title: "8 Years & Counting — Mind Frame India Anniversary",
      image: "https://images.unsplash.com/photo-1516450360452-9312f5e86fc7?w=600&q=80",
    },
    {
      id: 4,
      title: "JGF Global Expansion — New York Food Expo Coverage",
      image: "https://images.unsplash.com/photo-1504674900247-0877df9cc836?w=600&q=80",
    },
  ],
  2023: [
    {
      id: 5,
      title: "Metro Grande Launch Campaign — Outdoor Media Blitz",
      image: "https://images.unsplash.com/photo-1486325212027-8081e485255e?w=600&q=80",
    },
    {
      id: 6,
      title: "Soul Brand Identity — Packaging & Print",
      image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
    },
    {
      id: 7,
      title: "Gudi Padwa Festival Campaign — Real Estate",
      image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
    },
  ],
  2022: [
    {
      id: 8,
      title: "Mysticity Product Launch — Digital & Print",
      image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=80",
    },
    {
      id: 9,
      title: "Sqiinful Beauty — Brand Campaign Reveal",
      image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
    },
  ],
  2021: [
    {
      id: 10,
      title: "Oishi Oishi — Packaging Design Feature",
      image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
    },
  ],
  2020: [
    {
      id: 11,
      title: "Mind Frame India — 5 Years of Creative Excellence",
      image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
    },
    {
      id: 12,
      title: "Annual Report Campaign — Brand Storytelling",
      image: "https://images.unsplash.com/photo-1542744094-3a31f272c490?w=600&q=80",
    },
  ],
};

const years = [2024, 2023, 2022, 2021, 2020];

export default function NewsRoom() {
  const [openYears, setOpenYears] = useState({ 2024: true });
  const [hovered, setHovered] = useState(null);

  const toggle = (year) => {
    setOpenYears((prev) => ({ ...prev, [year]: !prev[year] }));
  };

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Playfair+Display:wght@400;700;900&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .hero-title-black {
          font-family: 'Playfair Display', serif;
          font-size: clamp(56px, 10vw, 120px);
          font-weight: 900;
          color: #111;
          line-height: 1;
          letter-spacing: -2px;
        }
        .hero-title-gold {
          font-family: 'Playfair Display', serif;
          font-size: clamp(56px, 10vw, 120px);
          font-weight: 700;
          color: #b08d57;
          line-height: 1;
          letter-spacing: -2px;
        }

        .news-card {
          position: relative;
          border-radius: 6px;
          overflow: hidden;
          cursor: pointer;
          flex: 0 0 300px;
          height: 200px;
          transition: transform 0.35s cubic-bezier(0.25,0.46,0.45,0.94), box-shadow 0.3s ease;
        }

        .news-card:hover {
          transform: translateY(-5px);
          box-shadow: 0 18px 48px rgba(0,0,0,0.2);
        }

        .news-card img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(0.25,0.46,0.45,0.94);
        }

        .news-card:hover img {
          transform: scale(1.08);
        }

        .card-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(10,8,5,0.85) 0%, rgba(10,8,5,0.1) 55%, transparent 100%);
          opacity: 0;
          transition: opacity 0.3s ease;
          display: flex;
          align-items: flex-end;
          padding: 16px;
        }

        .news-card:hover .card-overlay {
          opacity: 1;
        }

        .card-overlay-text {
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          font-weight: 400;
          line-height: 1.4;
        }

        .year-row {
          border-top: 1px solid #e0d9ce;
          padding: 18px 0;
          cursor: pointer;
          transition: background 0.2s;
          user-select: none;
        }

        .year-row:hover .year-label {
          color: #b08d57;
        }

        .year-label {
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          color: #555;
          transition: color 0.2s;
          display: flex;
          align-items: center;
          gap: 12px;
        }

        .year-label.open {
          color: #1a1510;
          font-weight: 500;
        }

        .scroll-track {
          display: flex;
          gap: 20px;
          overflow-x: auto;
          padding: 6px 0 20px;
          scroll-behavior: smooth;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: thin;
          scrollbar-color: #b08d57 #f0ece4;
        }

        .scroll-track::-webkit-scrollbar {
          height: 4px;
        }
        .scroll-track::-webkit-scrollbar-thumb {
          background: #b08d57;
          border-radius: 2px;
        }
        .scroll-track::-webkit-scrollbar-track {
          background: #f0ece4;
        }

        .accordion-body {
          overflow: hidden;
          transition: max-height 0.4s cubic-bezier(0.4,0,0.2,1), opacity 0.35s ease;
        }

        .breadcrumb {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          color: #b08d57;
          letter-spacing: 1px;
          margin-bottom: 24px;
        }

        @media (max-width: 600px) {
          .news-card { flex: 0 0 240px; height: 160px; }
          .hero-section { height: 240px !important; }
        }
      `}</style>

      {/* HERO BANNER */}
      <div
        className="hero-section"
        style={{
          position: "relative",
          height: "360px",
          overflow: "hidden",
          background: "#1a1510",
        }}
      >
        {/* Newspaper texture bg */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            backgroundImage: `url('https://images.unsplash.com/photo-1504711434969-e33886168f5c?w=1400&q=60')`,
            backgroundSize: "cover",
            backgroundPosition: "center",
            opacity: 0.35,
            filter: "grayscale(100%)",
          }}
        />
        {/* Overlay */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(to bottom, rgba(250,248,245,0.55) 0%, rgba(250,248,245,0.15) 100%)",
          }}
        />

        {/* Breadcrumb */}
        <div style={{ position: "absolute", top: 20, left: "50%", transform: "translateX(-50%)", zIndex: 2 }}>
          <span className="breadcrumb">Home &nbsp;$&nbsp; Blogs &nbsp;$&nbsp; News Room</span>
        </div>

        {/* Title */}
        <div
          style={{
            position: "absolute",
            inset: 0,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            gap: "16px",
            zIndex: 2,
            flexWrap: "wrap",
            padding: "0 24px",
          }}
        >
          <span className="hero-title-black">News</span>
          <span className="hero-title-gold">Room</span>
        </div>
      </div>

      {/* CONTENT */}
      <div style={{ maxWidth: "1100px", margin: "0 auto", padding: "40px 24px 80px" }}>

        {years.map((year, i) => {
          const isOpen = !!openYears[year];
          const items = newsData[year] || [];
          return (
            <div key={year}>
              {/* Year Row */}
              <div className="year-row" onClick={() => toggle(year)}>
                <div className={`year-label ${isOpen ? "open" : ""}`}>
                  <span style={{
                    fontSize: "18px",
                    color: isOpen ? "#b08d57" : "#aaa",
                    transition: "transform 0.3s",
                    display: "inline-block",
                    transform: isOpen ? "rotate(0deg)" : "rotate(0deg)",
                    lineHeight: 1,
                  }}>
                    {isOpen ? "—" : "+"}
                  </span>
                  {year} Newsrooms
                </div>
              </div>

              {/* Accordion Body */}
              <div
                className="accordion-body"
                style={{
                  maxHeight: isOpen ? "400px" : "0px",
                  opacity: isOpen ? 1 : 0,
                }}
              >
                <div className="scroll-track">
                  {items.map((item) => (
                    <div
                      key={item.id}
                      className="news-card"
                      onMouseEnter={() => setHovered(item.id)}
                      onMouseLeave={() => setHovered(null)}
                    >
                      <img src={item.image} alt={item.title} />
                      <div className="card-overlay">
                        <p className="card-overlay-text">{item.title}</p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* bottom border for last item */}
              {i === years.length - 1 && (
                <div style={{ borderTop: "1px solid #e0d9ce" }} />
              )}
            </div>
          );
        })}
      </div>
    </div>
  );
}