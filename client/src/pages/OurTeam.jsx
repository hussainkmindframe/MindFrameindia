import Shanawaz from '../assets/team/Shanawaz-sir.jpg';
import Hina from '../assets/team/hina-mam.jpg';
import Aaqib from '../assets/team/aaqib.jpg';
import Harsha from '../assets/team/Harsha.png';
import Shadab from '../assets/team/shadab.png';
import Veena from '../assets/team/veena.png';
import Aashi from '../assets/team/aashi.png';
import Abdul from '../assets/team/abdul.png';
import Taufiq from '../assets/team/taufiq.png';
import Altaf from '../assets/team/altaf.png';
import Aman from '../assets/team/aman.png';
import salome from '../assets/team/salome.png';
import Pranay from '../assets/team/Pranay.jpg';

const teams = [
  {
    id: "directors",
    title: "Directors",
    isHeader: true,
    members: [
      {
        name: "Mir Shahnawaz Ali",
        role: "Director – Creative & Digital Branding",
        img: Shanawaz,
      },
      {
        name: "Hina Ali",
        role: "Creative Director (Health Care)",
        img: Hina,
      },
      {
        name: "Aaqib Ali",
        role: "Brand Management & Digital Marketing",
        img: Aaqib,
      },
    ],
  },
  {
    id: "operations",
    title: "Operations Management Team",
    members: [
      {
        name: "Harsha Vishwakarma",
        role: "Human Resources",
        img: Harsha,
        nameGold: true,
      },
      null,
      {
        name: "Shadab Sayyad",
        role: "Accounts & Admin",
        img: Shadab,
      },
    ],
  },
  {
    id: "client",
    title: "Client Servicing Team",
    members: [
      {
        name: "Veena Kolety",
        role: "Client Service Executive",
        img: Veena,
        nameGold: true,
      },
      null,
      {
        name: "Aashi Suman",
        role: "Client Service Executive",
        img: Aashi,
        nameGold: true,
      },
    ],
  },
  {
    id: "designers",
    title: "Graphic Designers",
    members: [
      {
        name: "Rashmika Shah",
        role: "Graphic Designer",
        img: null,
      },
      {
        name: "Neha Lad",
        role: "Graphic Designer",
        img: null, // no import provided for Neha
      },
      {
        name: "Salome Chetty",
        role: "Graphic Designer",
        img: salome,
      },
    ],
  },
  {
    id: "uiux",
    title: "UI / UX Designer",
    members: [
      null,
      {
        name: "Pranay Ramani",
        role: "UI / UX Designer",
        img: Pranay,
        nameGold: true,
      },
      null,
    ],
  },
  {
    id: "digital",
    title: "Digital Marketing Team",
    members: [
      null,
      {
        name: "Aman Tiwari",
        role: "Social Media Executive",
        img: Aman,
        nameGold: true,
      },
      null,
    ],
  },
  {
    id: "it",
    title: "IT & Development Team",
    members: [
      {
        name: "Abdul Ansari",
        role: "Sr. Full Stack Developer",
        img: Abdul,
      },
      {
        name: "Taufiq Mulla",
        role: "App Developer",
        img: Taufiq,
      },
      {
        name: "Aitaf Ali",
        role: "Web Developer",
        img: Altaf,
      },
    ],
  },
];

function Avatar({ member }) {
  if (!member) return <div />;
  return (
    <div
      style={{
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
        textAlign: "center",
      }}
    >
      <div
        style={{
          width: "110px",
          height: "110px",
          borderRadius: "50%",
          overflow: "hidden",
          border: "2px solid #e8e2d9",
          marginBottom: "14px",
          background: "#eee",
          flexShrink: 0,
        }}
      >
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            style={{
              width: "100%",
              height: "100%",
              objectFit: "cover",
              objectPosition: "top",
            }}
          />
        ) : (
          <div
            style={{
              width: "100%",
              height: "100%",
              background: "#ddd",
              display: "flex",
              alignItems: "center",
              justifyContent: "center",
            }}
          >
            <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
              <circle cx="24" cy="18" r="10" fill="#bbb" />
              <path d="M4 44c0-11 9-18 20-18s20 7 20 18" fill="#bbb" />
            </svg>
          </div>
        )}
      </div>
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "13.5px",
          fontWeight: 500,
          color: member.nameGold ? "#b08d57" : "#1a1510",
          marginBottom: "4px",
          lineHeight: 1.3,
        }}
      >
        {member.name}
      </p>
      <div
        style={{
          width: "60px",
          height: "1px",
          background: "#d4b896",
          margin: "4px auto 6px",
        }}
      />
      <p
        style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "12px",
          color: "#888",
          lineHeight: 1.4,
        }}
      >
        {member.role}
      </p>
    </div>
  );
}

function TeamSection({ team }) {
  const members = team.members;
  const rows = [];
  for (let i = 0; i < members.length; i += 3) {
    rows.push(members.slice(i, i + 3));
  }

  return (
    <div style={{ borderTop: "1px solid #e0d0c8", padding: "44px 24px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h2
            style={{
              fontFamily: team.isHeader
                ? "'Cormorant Garamond', serif"
                : "'DM Sans', sans-serif",
              fontSize: team.isHeader
                ? "clamp(32px, 5vw, 52px)"
                : "clamp(16px, 2.5vw, 20px)",
              fontWeight: team.isHeader ? 700 : 400,
              color: team.isHeader ? "#1a1510" : "#b08d57",
              letterSpacing: team.isHeader ? "-0.5px" : "0.3px",
              marginBottom: team.isHeader ? "10px" : "12px",
            }}
          >
            {team.title}
          </h2>
          {!team.isHeader && (
            <div
              style={{
                width: "200px",
                height: "1px",
                background: "#b08d57",
                margin: "0 auto",
              }}
            />
          )}
          {team.isHeader && (
            <div
              style={{
                width: "48px",
                height: "2px",
                background: "#b08d57",
                margin: "0 auto",
              }}
            />
          )}
        </div>

        {/* Member rows */}
        {rows.map((row, ri) => (
          <div
            key={ri}
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(3, 1fr)",
              gap: "32px 16px",
              marginBottom: ri < rows.length - 1 ? "32px" : 0,
            }}
          >
            {row.map((member, ci) =>
              member ? (
                <Avatar key={ci} member={member} />
              ) : (
                <div key={ci} />
              )
            )}
          </div>
        ))}
      </div>
    </div>
  );
}

export default function OurTeam() {
  return (
    <div
      style={{
        fontFamily: "'DM Sans', sans-serif",
        background: "#fff",
        minHeight: "100vh",
      }}
    >
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @media (max-width: 560px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Breadcrumb */}
      <div style={{ textAlign: "center", padding: "20px 24px 0" }}>
        <p
          style={{
            fontFamily: "'DM Sans', sans-serif",
            fontSize: "11px",
            color: "#aaa",
            letterSpacing: "0.5px",
          }}
        >
          Home &nbsp;›&nbsp; Our Team
        </p>
      </div>

      {/* Team sections */}
      {teams.map((team) => (
        <TeamSection key={team.id} team={team} />
      ))}
    </div>
  );
}