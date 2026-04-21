const teams = [
  {
    id: "directors",
    title: "Directors",
    isHeader: true,
    members: [
      {
        name: "Mir Shahnawaz Ali",
        role: "Director – Creative & Digital Branding",
        img: "https://images.unsplash.com/photo-1506794778202-cad84cf45f1d?w=200&q=80",
      },
      {
        name: "Hina Ali",
        role: "Creative Director (Health Care)",
        img: "https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=200&q=80",
      },
      {
        name: "Aaqib Ali",
        role: "Brand Management & Digital Marketing",
        img: "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=200&q=80",
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
        img: "https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=200&q=80",
        nameGold: true,
      },
      null,
      {
        name: "Shadab Sayyad",
        role: "Accounts & Admin",
        img: "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=200&q=80",
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
        img: "https://images.unsplash.com/photo-1534528741775-53994a69daeb?w=200&q=80",
        nameGold: true,
      },
      null,
      {
        name: "Aashi Suman",
        role: "Client Service Executive",
        img: "https://images.unsplash.com/photo-1531746020798-e6953c6e8e04?w=200&q=80",
        nameGold: true,
      },
    ],
  },
  {
    id: "designers",
    title: "Graphic Designers",
    members: [
      {
        name: "Arif Farooqui",
        role: "Motion Graphics Designer",
        img: "https://images.unsplash.com/photo-1519085360753-af0119f7cbe7?w=200&q=80",
      },
      {
        name: "Rashmika Shah",
        role: "Graphic Designer",
        img: null,
      },
      {
        name: "Neha Lad",
        role: "Graphic Designer",
        img: "https://images.unsplash.com/photo-1524250502761-1ac6f2e30d43?w=200&q=80",
      },
      null,
      {
        name: "Salome Chetty",
        role: "Graphic Designer",
        img: "https://images.unsplash.com/photo-1489424731084-a5d8b219a5bb?w=200&q=80",
      },
      null,
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
        img: "https://images.unsplash.com/photo-1570295999919-56ceb5ecca61?w=200&q=80",
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
        img: "https://images.unsplash.com/photo-1539571696357-5a69c17a67c6?w=200&q=80",
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
        img: "https://images.unsplash.com/photo-1531427186611-ecfd6d936c79?w=200&q=80",
      },
      {
        name: "Taufiq Mulla",
        role: "App Developer",
        img: "https://images.unsplash.com/photo-1463453091185-61582044d556?w=200&q=80",
      },
      {
        name: "Aitaf Ali",
        role: "Web Developer",
        img: "https://images.unsplash.com/photo-1472099645785-5658abf4ff4e?w=200&q=80",
      },
    ],
  },
];

function Avatar({ member }) {
  if (!member) return <div />;
  return (
    <div style={{ display: "flex", flexDirection: "column", alignItems: "center", textAlign: "center" }}>
      <div style={{
        width: "110px", height: "110px",
        borderRadius: "50%",
        overflow: "hidden",
        border: "2px solid #e8e2d9",
        marginBottom: "14px",
        background: "#eee",
        flexShrink: 0,
      }}>
        {member.img ? (
          <img
            src={member.img}
            alt={member.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
          />
        ) : (
          <div style={{
            width: "100%", height: "100%",
            background: "#ddd",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <svg viewBox="0 0 48 48" width="48" height="48" fill="none">
              <circle cx="24" cy="18" r="10" fill="#bbb"/>
              <path d="M4 44c0-11 9-18 20-18s20 7 20 18" fill="#bbb"/>
            </svg>
          </div>
        )}
      </div>
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "13.5px",
        fontWeight: 500,
        color: member.nameGold ? "#b08d57" : "#1a1510",
        marginBottom: "4px",
        lineHeight: 1.3,
      }}>{member.name}</p>
      <div style={{ width: "60px", height: "1px", background: "#d4b896", margin: "4px auto 6px" }} />
      <p style={{
        fontFamily: "'DM Sans', sans-serif",
        fontSize: "12px",
        color: "#888",
        lineHeight: 1.4,
      }}>{member.role}</p>
    </div>
  );
}

function TeamSection({ team }) {
  const rows = [];
  for (let i = 0; i < team.members.length; i += 3) {
    rows.push(team.members.slice(i, i + 3));
  }

  return (
    <div style={{ borderTop: "1px solid #e0d0c8", padding: "44px 24px" }}>
      <div style={{ maxWidth: "960px", margin: "0 auto" }}>
        {/* Section heading */}
        <div style={{ textAlign: "center", marginBottom: "36px" }}>
          <h2 style={{
            fontFamily: team.isHeader
              ? "'Cormorant Garamond', serif"
              : "'DM Sans', sans-serif",
            fontSize: team.isHeader ? "clamp(32px, 5vw, 52px)" : "clamp(16px, 2.5vw, 20px)",
            fontWeight: team.isHeader ? 700 : 400,
            color: team.isHeader ? "#1a1510" : "#b08d57",
            letterSpacing: team.isHeader ? "-0.5px" : "0.3px",
            marginBottom: team.isHeader ? "10px" : "12px",
          }}>
            {team.title}
          </h2>
          {!team.isHeader && (
            <div style={{ width: "200px", height: "1px", background: "#b08d57", margin: "0 auto" }} />
          )}
          {team.isHeader && (
            <div style={{ width: "48px", height: "2px", background: "#b08d57", margin: "0 auto" }} />
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
    <div style={{ fontFamily: "'DM Sans', sans-serif", background: "#fff", minHeight: "100vh" }}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600;700&family=DM+Sans:wght@300;400;500;600&display=swap');
        * { box-sizing: border-box; margin: 0; padding: 0; }

        @media (max-width: 560px) {
          .team-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
      `}</style>

      {/* Breadcrumb */}
      <div style={{ textAlign: "center", padding: "20px 24px 0" }}>
        <p style={{
          fontFamily: "'DM Sans', sans-serif",
          fontSize: "11px", color: "#aaa", letterSpacing: "0.5px",
        }}>
          Home &nbsp;$&nbsp; Our Team
        </p>
      </div>

      {/* Team sections */}
      {teams.map(team => (
        <TeamSection key={team.id} team={team} />
      ))}
    </div>
  );
}