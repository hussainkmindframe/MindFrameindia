import { useState } from "react";

const jobs = [
  {
    id: 1,
    location: "Mumbai",
    title: "Client Servicing Executive",
    experience: "Minimum Experience – 0-2 years.",
    description: [
      "Client Servicing Executive plays a critical role in satisfying clients and thus bringing repeat business.",
      "They are the primary point of contact for the company's clientele and need to have good communications, interpersonal and problem solving skills. The major skills and competencies other than desired educational qualification that Mind Frame India is looking for in a candidate are:",
    ],
    requirements: [
      "MBA",
      "Ability to handle pressure and multitasking skills",
      "Active problem solving skills",
      "Good interpersonal skills",
      "Good communication skills",
      "Customer Focus",
    ],
  },
  {
    id: 2,
    location: "Mumbai",
    title: "Business Development Executive",
    experience: "Minimum Experience – 2-3 years.",
    description: [
      "Fresher who completed 2-3 month internship.",
      "Shape your career as a Business Development Executive with Mind Frame India Advertising and Communication.",
    ],
    requirements: [
      "Excellent Communication Skills",
      "MBA's (Sales & Marketing)",
      "Min. Experience – 3 Years",
      "Advertising agency experience would be an added advantage",
    ],
  },
  {
    id: 3,
    location: "Mumbai",
    title: "Graphic Designer",
    experience: "Minimum Experience – 3 years.",
    description: [
      "Shape your career with Mind Frame India Advertising and Communication.",
      "Industries you will experience on are Healthcare, FMCG, Retail Brands, Luxury Brands, FnB Brands, Insurance etc.",
    ],
    requirements: [
      "Min. Experience – 3 Years",
      "Corel Draw",
      "Illustrator",
      "Adobe Photoshop and familiar with new versions.",
      "Experience in designing Website page.",
    ],
  },
];

const applyOptions = [
  "Client Servicing Executive",
  "Business Development Executive",
  "Graphic Designer",
  "Other",
];

const socialIcons = {
  facebook: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M18 2h-3a5 5 0 00-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 011-1h3z"/>
    </svg>
  ),
  instagram: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round">
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5"/>
      <circle cx="12" cy="12" r="4"/>
      <circle cx="17.5" cy="6.5" r="1.5" fill="currentColor" stroke="none"/>
    </svg>
  ),
  twitter: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M23 3a10.9 10.9 0 01-3.14 1.53 4.48 4.48 0 00-7.86 3v1A10.66 10.66 0 013 4s-4 9 5 13a11.64 11.64 0 01-7 2c9 5 20 0 20-11.5a4.5 4.5 0 00-.08-.83A7.72 7.72 0 0023 3z"/>
    </svg>
  ),
  linkedin: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M16 8a6 6 0 016 6v7h-4v-7a2 2 0 00-2-2 2 2 0 00-2 2v7h-4v-7a6 6 0 016-6zM2 9h4v12H2z"/>
      <circle cx="4" cy="4" r="2"/>
    </svg>
  ),
  youtube: (
    <svg width="18" height="18" viewBox="0 0 24 24" fill="currentColor">
      <path d="M22.54 6.42a2.78 2.78 0 00-1.95-1.96C18.88 4 12 4 12 4s-6.88 0-8.59.46a2.78 2.78 0 00-1.95 1.96A29 29 0 001 12a29 29 0 00.46 5.58A2.78 2.78 0 003.41 19.6C5.12 20 12 20 12 20s6.88 0 8.59-.46a2.78 2.78 0 001.95-1.95A29 29 0 0023 12a29 29 0 00-.46-5.58z"/>
      <polygon points="9.75 15.02 15.5 12 9.75 8.98 9.75 15.02" fill="white"/>
    </svg>
  ),
};

const CheckIcon = () => (
  <svg width="16" height="16" viewBox="0 0 24 24" fill="none" style={{ flexShrink: 0, marginTop: "2px" }}>
    <circle cx="12" cy="12" r="10" stroke="#b08d57" strokeWidth="1.5"/>
    <path d="M8 12l3 3 5-6" stroke="#b08d57" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round"/>
  </svg>
);

export default function Careers() {
  const [form, setForm] = useState({
    name: "", email: "", subject: "", age: "",
    experience: "", mobile: "", location: "",
    applyFor: "", resume: null,
  });

  const handleChange = (e) => {
    const { name, value, files } = e.target;
    setForm((f) => ({ ...f, [name]: files ? files[0] : value }));
  };

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        .input-field {
          width: 100%;
          background: transparent;
          border: none;
          border-bottom: 1px solid #ccc;
          padding: 8px 0;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          color: #1a1510;
          outline: none;
          transition: border-color .2s;
        }
        .input-field:focus { border-bottom-color: #b08d57; }
        .input-field::placeholder { color: #aaa; font-size: 12px; }

        select.input-field { cursor: pointer; }

        .send-btn {
          background: #b08d57;
          color: #fff;
          border: none;
          padding: 12px 32px;
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          cursor: pointer;
          border-radius: 2px;
          transition: background .2s, transform .2s;
          margin-top: 24px;
        }
        .send-btn:hover { background: #8a6830; transform: translateY(-1px); }

        .social-link {
          color: #555;
          transition: color .2s, transform .2s;
          display: inline-flex;
        }
        .social-link:hover { color: #b08d57; transform: scale(1.15); }

        .job-row {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 40px;
          align-items: start;
        }
        @media (max-width: 640px) {
          .job-row { grid-template-columns: 1fr; gap: 24px; }
          .form-row { grid-template-columns: 1fr !important; }
          .contact-inner { flex-direction: column !important; }
        }
      `}</style>

      {/* ── HEADER ── */}
      <div style={{ background: "#fff", padding: "32px 24px 48px", textAlign: "center" }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
          color: "#999", letterSpacing: "0.5px", marginBottom: "20px",
        }}>
          Home &nbsp;→&nbsp; Careers
        </p>
        <h1 style={{
          fontFamily: "'Cormorant Garamond', serif",
          fontSize: "clamp(42px, 8vw, 72px)",
          fontWeight: 700, color: "#b08d57",
          letterSpacing: "-1px", lineHeight: 1,
          marginBottom: "14px",
        }}>
          Careers
        </h1>
        <div style={{ width: "48px", height: "2px", background: "#b08d57", margin: "0 auto" }} />
      </div>

      {/* ── JOB LISTINGS ── */}
      <div style={{ background: "#fff" }}>
        {jobs.map((job, i) => (
          <div
            key={job.id}
            style={{
              background: i % 2 === 0 ? "#fff" : "#f7f5f1",
              padding: "48px 0",
            }}
          >
            <div style={{ maxWidth: "840px", margin: "0 auto", padding: "0 24px" }}>
              <div className="job-row">
                {/* Left */}
                <div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "11px", letterSpacing: "1px",
                    textTransform: "uppercase", color: "#b08d57",
                    marginBottom: "8px",
                  }}>{job.location}</p>
                  <h2 style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "clamp(20px, 3vw, 28px)",
                    fontWeight: 700, color: "#1a1510",
                    marginBottom: "10px", lineHeight: 1.2,
                  }}>{job.title}</h2>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "12px", fontWeight: 600,
                    color: "#1a1510", marginBottom: "18px",
                  }}>{job.experience}</p>
                  {job.description.map((para, j) => (
                    <p key={j} style={{
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px", color: "#666",
                      lineHeight: 1.8, marginBottom: "12px",
                    }}>{para}</p>
                  ))}
                </div>

                {/* Right — Requirements */}
                <div>
                  <p style={{
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px", fontWeight: 600,
                    color: "#1a1510", marginBottom: "16px",
                  }}>Requirements:</p>
                  <ul style={{ listStyle: "none", display: "flex", flexDirection: "column", gap: "10px" }}>
                    {job.requirements.map((req, k) => (
                      <li key={k} style={{ display: "flex", alignItems: "flex-start", gap: "10px" }}>
                        <CheckIcon />
                        <span style={{
                          fontFamily: "'DM Sans', sans-serif",
                          fontSize: "13px", color: "#555", lineHeight: 1.5,
                        }}>{req}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

     {/* ── GET IN TOUCH ── */}
      <div style={{ background: "#1a1510", padding: "60px 24px 64px" }}>
        <div style={{
          maxWidth: "840px", margin: "0 auto",
          display: "flex", gap: "60px",
          flexWrap: "wrap",
        }}
          className="contact-inner"
        >
          {/* Left info */}
          <div style={{ minWidth: "220px", flex: "0 0 220px" }}>
            <h2 style={{
              fontFamily: "'DM Sans', sans-serif",
              fontSize: "clamp(28px, 4vw, 42px)",
              fontWeight: 700, color: "#fff",
              lineHeight: 1.1, marginBottom: "12px",
            }}>
              Get In<br />Touch
            </h2>
            <div style={{ width: "40px", height: "2px", background: "#b08d57", marginBottom: "24px" }} />
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "#aaa", lineHeight: 1.9, marginBottom: "16px" }}>
              302, 3rd Floor, Crescent Towers, Behind Crystal Plaza, Next to Morya House, Off Link Road, Andheri (West), Mumbai – 400 053
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "#ccc", marginBottom: "4px" }}>
              <span style={{ color: "#b08d57" }}>Ph.:</span> +91 22 65707081, +91 22 40125517/18/19
            </p>
            <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12.5px", color: "#ccc", marginBottom: "24px" }}>
              <span style={{ color: "#b08d57" }}>M.:</span> +91 9892000733
            </p>
            <div style={{ display: "flex", gap: "16px" }}>
              {Object.entries(socialIcons).map(([name, icon]) => (
                <a key={name} href="#" className="social-link" style={{ color: "#888", transition: "color 0.3s ease", fontSize: "18px" }}
                  onMouseEnter={(e) => e.currentTarget.style.color = "#b08d57"}
                  onMouseLeave={(e) => e.currentTarget.style.color = "#888"}
                >
                  {icon}
                </a>
              ))}
            </div>
          </div>

          {/* Right form */}
          <div style={{ flex: 1, minWidth: "280px" }}>
            <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: "20px 32px" }} className="form-row">
              {[
                { name: "name", label: "Name*", type: "text" },
                { name: "email", label: "E-mail*", type: "email" },
                { name: "subject", label: "Subject*", type: "text", full: true },
                { name: "age", label: "Age*", type: "text" },
                { name: "experience", label: "Experience*", type: "text" },
                { name: "mobile", label: "Mobile No.*", type: "tel", full: true },
                { name: "location", label: "Location*", type: "text", full: true },
              ].map(({ name, label, type, full }) => (
                <div key={name} style={{ gridColumn: full ? "1 / -1" : undefined }}>
                  <input
                    type={type}
                    name={name}
                    placeholder={label}
                    value={form[name]}
                    onChange={handleChange}
                    className="input-field"
                    style={{
                      width: "100%",
                      background: "rgba(255,255,255,0.08)",
                      border: "1px solid #333",
                      borderRadius: "6px",
                      padding: "12px 14px",
                      fontFamily: "'DM Sans', sans-serif",
                      fontSize: "13px",
                      color: "#fff",
                      transition: "all 0.3s ease",
                    }}
                  />
                  <style>{`
                    .input-field::placeholder { color: #666; }
                    .input-field:focus { outline: none; border-color: #b08d57; background: rgba(176,141,87,0.1); }
                  `}</style>
                </div>
              ))}

              {/* Apply For */}
              <div style={{ gridColumn: "1 / -1" }}>
                <p style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#b08d57", marginBottom: "6px", letterSpacing: "0.5px" }}>
                  Apply For* :
                </p>
                <select
                  name="applyFor"
                  value={form.applyFor}
                  onChange={handleChange}
                  className="input-field"
                  style={{
                    width: "100%",
                    background: "rgba(255,255,255,0.08)",
                    border: "1px solid #333",
                    borderRadius: "6px",
                    padding: "12px 14px",
                    fontFamily: "'DM Sans', sans-serif",
                    fontSize: "13px",
                    color: form.applyFor ? "#fff" : "#888",
                    cursor: "pointer",
                    transition: "all 0.3s ease",
                  }}
                >
                  <option value="" disabled style={{ color: "#888", background: "#1a1510" }}>Select a position</option>
                  {applyOptions.map(opt => (
                    <option key={opt} value={opt} style={{ color: "#fff", background: "#1a1510" }}>{opt}</option>
                  ))}
                </select>
              </div>

              {/* Resume */}
              <div style={{ gridColumn: "1 / -1", display: "flex", alignItems: "center", gap: "12px", flexWrap: "wrap" }}>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "12px", color: "#b08d57", letterSpacing: "0.5px" }}>
                  Resume* :
                </span>
                <label style={{
                  fontFamily: "'DM Sans', sans-serif", fontSize: "12px",
                  padding: "8px 18px", border: "1px solid #b08d57",
                  borderRadius: "4px", color: "#b08d57", cursor: "pointer",
                  background: "transparent", transition: "all 0.3s ease",
                }}
                onMouseEnter={(e) => {
                  e.currentTarget.style.background = "#b08d57";
                  e.currentTarget.style.color = "#1a1510";
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.background = "transparent";
                  e.currentTarget.style.color = "#b08d57";
                }}>
                  Choose File
                  <input
                    type="file" name="resume" accept=".pdf,.doc,.docx"
                    onChange={handleChange} style={{ display: "none" }}
                  />
                </label>
                <span style={{ fontFamily: "'DM Sans', sans-serif", fontSize: "11px", color: "#888" }}>
                  {form.resume ? form.resume.name : "No file chosen"}
                </span>
              </div>
            </div>

            <button 
              className="send-btn" 
              style={{
                marginTop: "32px",
                background: "#b08d57",
                border: "none",
                padding: "14px 32px",
                fontFamily: "'DM Sans', sans-serif",
                fontSize: "13px",
                fontWeight: 600,
                color: "#1a1510",
                cursor: "pointer",
                transition: "all 0.3s ease",
                borderRadius: "4px",
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
              Send Message
            </button>
          </div>
        </div>
      </div>

    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#fff",
    minHeight: "100vh",
  },
};