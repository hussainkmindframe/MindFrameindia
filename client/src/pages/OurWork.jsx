// import { useState } from "react";
// import wrk1 from '../assets/work/wrk1.jpg';
// import wrk2 from '../assets/work/wrk2.jpg';
// import wrk3 from '../assets/work/wrk6.jpg';
// import wrk4 from '../assets/work/wrk7.jpg';
// import wrk5 from '../assets/work/wrk8.jpg';
// import wrk6 from '../assets/work/wrk9.jpg';
// import wrk7 from '../assets/work/wrk10.jpg';
// import wrk8 from '../assets/work/wrk10.jpg';
// import wrk9 from '../assets/work/wrk11.jpg';
// import wrk10 from '../assets/work/wrk12.jpg';
// import wrk11 from '../assets/work/wrk13.jpg';
// import wrk12 from '../assets/work/wrk14.jpg';
// import wrk13  from '../assets/work/wrk13.jpg';
// import wrk14 from '../assets/work/wrk14.jpg';
// import wrk15 from '../assets/work/wrk15.jpg';
// import wrk16 from '../assets/work/wrk16.jpg';
// import wrk17 from '../assets/work/wrk17.jpg';
// import wrk18 from '../assets/work/wrk18.jpg';
// import wrk19 from '../assets/work/wrk19.jpg';
// import wrk20 from '../assets/work/wrk20.jpg';
// import wrk21 from '../assets/work/wrk21.jpg';
// import wrk22 from '../assets/work/wrk22.jpg';
// import wrk23 from '../assets/work/wrk23.jpg';
// import wrk24 from '../assets/work/wrk24.jpg';
// import wrk25 from '../assets/work/wrk25.jpg';
// import wrk26 from '../assets/work/wrk26.jpg';
// import wrk27 from '../assets/work/wrk27.jpg';
// import wrk28 from '../assets/work/wrk28.jpg';
// import wrk29 from '../assets/work/wrk29.jpg';
// import wrk30 from '../assets/work/wrk30.jpg';
// import wrk31 from '../assets/work/wrk31.jpg';
// import wrk32 from '../assets/work/wrk32.jpg';


// const projects = [
//   {
//     id: 1,
//     title: "Soul Packaging Design",
//     category: "DESIGN · OUR WORK",
//     tag: "Packaging",
//     image: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?w=600&q=80",
//   },
//   {
//     id: 2,
//     title: "Mysticity Packaging Design",
//     category: "DESIGN · OUR WORK",
//     tag: "Packaging",
//     image: "https://images.unsplash.com/photo-1556742502-ec7c0e9f34b1?w=600&q=80",
//   },
//   {
//     id: 3,
//     title: "JGF Packaging Design",
//     category: "DESIGN · OUR WORK",
//     tag: "Packaging",
//     image: "https://images.unsplash.com/photo-1637681438591-4d2c7e3e0a6e?w=600&q=80",
//   },
//   {
//     id: 4,
//     title: "JGF's Global Expansion: Making Waves at New York Food Expos",
//     category: "DESIGN · HOARDING · OUR WORK",
//     tag: "Events",
//     image: "https://images.unsplash.com/photo-1540575467063-178a50c2df87?w=600&q=80",
//   },
//   {
//     id: 5,
//     title: "Tots Couture Week (Registration Campaign)",
//     category: "DESIGN · HOARDING · OUR WORK",
//     tag: "Campaign",
//     image: "https://images.unsplash.com/photo-1601933470096-0e34634ffcde?w=600&q=80",
//   },
//   {
//     id: 6,
//     title: "Metro Grande - Gudi Padwa (Outdoor Campaign)",
//     category: "DESIGN · HOARDING · OUR WORK",
//     tag: "Outdoor",
//     image: "https://images.unsplash.com/photo-1605810230434-7631ac76ec81?w=600&q=80",
//   },
//   {
//     id: 7,
//     title: "Metro Grande: Plus Kya Hai? (Outdoor Campaign)",
//     category: "DESIGN · HOARDING · OUR WORK",
//     tag: "Outdoor",
//     image: "https://images.unsplash.com/photo-1571902943202-507ec2618e8f?w=600&q=80",
//   },
//   {
//     id: 8,
//     title: "Metro Grande 2024 Outdoor Campaign",
//     category: "DESIGN · HOARDING · BRANDING · OUR WORK",
//     tag: "Outdoor",
//     image: "https://images.unsplash.com/photo-1614850523296-d8c1af93d400?w=600&q=80",
//   },
//   {
//     id: 9,
//     title: "Metro Grande 200+ Outdoor Campaign",
//     category: "DESIGN · HOARDING · OUR WORK",
//     tag: "Outdoor",
//     image: "https://images.unsplash.com/photo-1568454537842-d933259bb258?w=600&q=80",
//   },
//   {
//     id: 10,
//     title: "Metro Grande Blockbuster Outdoor Campaign",
//     category: "DESIGN · HOARDING · OUR WORK",
//     tag: "Outdoor",
//     image: "https://images.unsplash.com/photo-1497366811353-6870744d04b2?w=600&q=80",
//   },
//   {
//     id: 11,
//     title: "Oishi Oishi Packaging Design",
//     category: "DESIGN · OUR WORK",
//     tag: "Packaging",
//     image: "https://images.unsplash.com/photo-1563379091339-03b21ab4a4f8?w=600&q=80",
//   },
//   {
//     id: 12,
//     title: "Sqiinful Packaging Design",
//     category: "DESIGN · OUR WORK",
//     tag: "Packaging",
//     image: "https://images.unsplash.com/photo-1596462502278-27bfdc403348?w=600&q=80",
//   },
// ];

// const tags = ["All", "Packaging", "Campaign", "Outdoor", "Events"];

// const tagColors = {
//   Packaging: "#b08d57",
//   Campaign: "#7a9e7e",
//   Outdoor: "#5b7fa6",
//   Events: "#a0748a",
//   All: "#888",
// };

// export default function OurWork() {
//   const [activeTag, setActiveTag] = useState("All");
//   const [hoveredId, setHoveredId] = useState(null);

//   const filtered =
//     activeTag === "All"
//       ? projects
//       : projects.filter((p) => p.tag === activeTag);

//   return (
//     <div style={styles.page}>
//       <style>{`
//         @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

//         * { box-sizing: border-box; margin: 0; padding: 0; }

//         .card-img {
//           width: 100%;
//           height: 220px;
//           object-fit: cover;
//           display: block;
//           transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
//         }

//         .project-card {
//           background: #fff;
//           border-radius: 4px;
//           overflow: hidden;
//           cursor: pointer;
//           position: relative;
//           transition: box-shadow 0.3s ease;
//         }

//         .project-card:hover .card-img {
//           transform: scale(1.06);
//         }

//         .project-card:hover {
//           box-shadow: 0 12px 40px rgba(0,0,0,0.13);
//         }

//         .hover-overlay {
//           position: absolute;
//           inset: 0;
//           background: linear-gradient(to top, rgba(20,15,10,0.72) 0%, rgba(20,15,10,0.1) 60%, transparent 100%);
//           opacity: 0;
//           transition: opacity 0.35s ease;
//           display: flex;
//           align-items: flex-end;
//           padding: 20px;
//           pointer-events: none;
//         }

//         .project-card:hover .hover-overlay {
//           opacity: 1;
//         }

//         .hover-cta {
//           color: #fff;
//           font-family: 'DM Sans', sans-serif;
//           font-size: 13px;
//           letter-spacing: 1.5px;
//           text-transform: uppercase;
//           border-bottom: 1px solid rgba(255,255,255,0.6);
//           padding-bottom: 2px;
//         }

//         .filter-btn {
//           font-family: 'DM Sans', sans-serif;
//           font-size: 12px;
//           letter-spacing: 1.4px;
//           text-transform: uppercase;
//           padding: 7px 18px;
//           border-radius: 2px;
//           border: 1px solid #ccc;
//           background: transparent;
//           cursor: pointer;
//           transition: all 0.22s ease;
//           color: #888;
//         }

//         .filter-btn:hover {
//           border-color: #b08d57;
//           color: #b08d57;
//         }

//         .filter-btn.active {
//           background: #b08d57;
//           border-color: #b08d57;
//           color: #fff;
//         }

//         @media (max-width: 768px) {
//           .grid { grid-template-columns: repeat(2, 1fr) !important; }
//           .card-img { height: 160px !important; }
//         }

//         @media (max-width: 480px) {
//           .grid { grid-template-columns: 1fr !important; }
//           .card-img { height: 200px !important; }
//         }
//       `}</style>

//       {/* Header */}
//       <div style={styles.header}>
//         <p style={styles.subheading}>Mind Frame India's</p>
//         <h1 style={styles.heading}>Creative Communication<br />& Advertising Campaigns</h1>
//         <div style={styles.divider} />
//       </div>

//       {/* Filter Tabs */}
//       <div style={styles.filters}>
//         {tags.map((tag) => (
//           <button
//             key={tag}
//             className={`filter-btn ${activeTag === tag ? "active" : ""}`}
//             onClick={() => setActiveTag(tag)}
//           >
//             {tag}
//           </button>
//         ))}
//       </div>

//       {/* Grid */}
//       <div
//         className="grid"
//         style={{
//           display: "grid",
//           gridTemplateColumns: "repeat(3, 1fr)",
//           gap: "24px",
//           maxWidth: "1100px",
//           margin: "0 auto",
//           padding: "0 24px 80px",
//         }}
//       >
//         {filtered.map((project) => (
//           <div
//             key={project.id}
//             className="project-card"
//             onMouseEnter={() => setHoveredId(project.id)}
//             onMouseLeave={() => setHoveredId(null)}
//           >
//             <div style={{ overflow: "hidden", position: "relative" }}>
//               <img
//                 src={project.image}
//                 alt={project.title}
//                 className="card-img"
//               />
//               <div className="hover-overlay">
//                 <span className="hover-cta">View Project</span>
//               </div>
//             </div>

//             <div style={styles.cardBody}>
//               <span
//                 style={{
//                   ...styles.tag,
//                   background: tagColors[project.tag] + "18",
//                   color: tagColors[project.tag],
//                   borderColor: tagColors[project.tag] + "40",
//                 }}
//               >
//                 {project.tag}
//               </span>
//               <h3 style={styles.cardTitle}>{project.title}</h3>
//               <p style={styles.cardCategory}>{project.category}</p>
//             </div>
//           </div>
//         ))}
//       </div>
//     </div>
//   );
// }

// const styles = {
//   page: {
//     fontFamily: "'DM Sans', sans-serif",
//     background: "#faf8f5",
//     minHeight: "100vh",
//   },
//   header: {
//     textAlign: "center",
//     padding: "64px 24px 32px",
//   },
//   subheading: {
//     fontFamily: "'DM Sans', sans-serif",
//     fontSize: "13px",
//     letterSpacing: "2.5px",
//     textTransform: "uppercase",
//     color: "#b08d57",
//     marginBottom: "10px",
//   },
//   heading: {
//     fontFamily: "'Cormorant Garamond', serif",
//     fontSize: "clamp(28px, 4vw, 42px)",
//     fontWeight: 600,
//     color: "#1a1510",
//     lineHeight: 1.25,
//     marginBottom: "20px",
//   },
//   divider: {
//     width: "48px",
//     height: "2px",
//     background: "#b08d57",
//     margin: "0 auto 40px",
//   },
//   filters: {
//     display: "flex",
//     justifyContent: "center",
//     flexWrap: "wrap",
//     gap: "10px",
//     maxWidth: "1100px",
//     margin: "0 auto 40px",
//     padding: "0 24px",
//   },
//   cardBody: {
//     padding: "16px 18px 20px",
//     background: "#fff",
//   },
//   tag: {
//     display: "inline-block",
//     fontSize: "10px",
//     letterSpacing: "1px",
//     textTransform: "uppercase",
//     padding: "3px 10px",
//     borderRadius: "2px",
//     border: "1px solid",
//     marginBottom: "10px",
//     fontWeight: 500,
//   },
//   cardTitle: {
//     fontFamily: "'Cormorant Garamond', serif",
//     fontSize: "17px",
//     fontWeight: 600,
//     color: "#1a1510",
//     lineHeight: 1.4,
//     marginBottom: "8px",
//   },
//   cardCategory: {
//     fontSize: "10px",
//     letterSpacing: "1px",
//     textTransform: "uppercase",
//     color: "#b08d57",
//     fontWeight: 400,
//   },
// };









































import { useState } from "react";
import wrk1 from '../assets/work/wrk1.png';
import wrk2 from '../assets/work/wrk2.jpg';
import wrk3 from '../assets/work/wrk3.png';
import wrk4 from '../assets/work/wrk4.png';
import wrk5 from '../assets/work/wrk5.jpg';
import wrk6 from '../assets/work/wrk6.jpg';
import wrk7 from '../assets/work/wrk7.jpg';
import wrk8 from '../assets/work/wrk8.jpg';
import wrk9 from '../assets/work/wrk9.jpg';
import wrk10 from '../assets/work/wrk10.jpg';
import wrk11 from '../assets/work/wrk11.jpg';
import wrk12 from '../assets/work/wrk12.jpg';
import wrk13 from '../assets/work/wrk13.jpg';
import wrk14 from '../assets/work/wrk14.jpg';
import wrk15 from '../assets/work/wrk15.jpg';
import wrk16 from '../assets/work/wrk16.jpg';
import wrk17 from '../assets/work/wrk17.jpg';
import wrk18 from '../assets/work/wrk18.jpg';
import wrk19 from '../assets/work/wrk19.jpg';
import wrk20 from '../assets/work/wrk20.jpg';
import wrk21 from '../assets/work/wrk21.jpg';
import wrk22 from '../assets/work/wrk22.jpg';
import wrk23 from '../assets/work/wrk23.jpg';
import wrk24 from '../assets/work/wrk24.jpg';
import wrk25 from '../assets/work/wrk25.jpg';
import wrk26 from '../assets/work/wrk26.jpg';
import wrk27 from '../assets/work/wrk27.jpg';
import wrk28 from '../assets/work/wrk28.jpg';
import wrk29 from '../assets/work/wrk29.jpg';
import wrk30 from '../assets/work/wrk30.jpg';
import wrk31 from '../assets/work/wrk31.jpg';
import wrk32 from '../assets/work/wrk32.jpg';

const projects = [
  {
    id: 1,
    title: "Soul Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk1,
  },
  {
    id: 2,
    title: "Mysticity Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk2,
  },
  {
    id: 3,
    title: "JGF Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk3,
  },
  {
    id: 4,
    title: "JGF's Global Expansion: Making Waves at New York Food Expos",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Events",
    image: wrk4,
  },
  {
    id: 5,
    title: "Tots Couture Week (Registration Campaign)",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Campaign",
    image: wrk5,
  },
  {
    id: 6,
    title: "Metro Grande - Gudi Padwa (Outdoor Campaign)",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: wrk6,
  },
  {
    id: 7,
    title: "Metro Grande: Plus Kya Hai? (Outdoor Campaign)",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: wrk7,
  },
  {
    id: 8,
    title: "Metro Grande 2024 Outdoor Campaign",
    category: "DESIGN · HOARDING · BRANDING · OUR WORK",
    tag: "Outdoor",
    image: wrk8,
  },
  {
    id: 9,
    title: "Metro Grande 200+ Outdoor Campaign",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: wrk9,
  },
  {
    id: 10,
    title: "Metro Grande Blockbuster Outdoor Campaign",
    category: "DESIGN · HOARDING · OUR WORK",
    tag: "Outdoor",
    image: wrk10,
  },
  {
    id: 11,
    title: "Oishi Oishi Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk11,
  },
  {
    id: 12,
    title: "Sqiinful Packaging Design",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk12,
  },
  {
    id: 13,
    title: "Project 13",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk13,
  },
  {
    id: 14,
    title: "Project 14",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk14,
  },
  {
    id: 15,
    title: "Project 15",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk15,
  },
  {
    id: 16,
    title: "Project 16",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk16,
  },
  {
    id: 17,
    title: "Project 17",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk17,
  },
  {
    id: 18,
    title: "Project 18",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk18,
  },
  {
    id: 19,
    title: "Project 19",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: wrk19,
  },
  {
    id: 20,
    title: "Project 20",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: wrk20,
  },
  {
    id: 21,
    title: "Project 21",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk21,
  },
  {
    id: 22,
    title: "Project 22",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk22,
  },
  {
    id: 23,
    title: "Project 23",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk23,
  },
  {
    id: 24,
    title: "Project 24",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk24,
  },
  {
    id: 25,
    title: "Project 25",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk25,
  },
  {
    id: 26,
    title: "Project 26",
    category: "DESIGN · OUR WORK",
    tag: "Packaging",
    image: wrk26,
  },
  {
    id: 27,
    title: "Project 27",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: wrk27,
  },
  {
    id: 28,
    title: "Project 28",
    category: "DESIGN · OUR WORK",
    tag: "Events",
    image: wrk28,
  },
  {
    id: 29,
    title: "Project 29",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk29,
  },
  {
    id: 30,
    title: "Project 30",
    category: "DESIGN · OUR WORK",
    tag: "Campaign",
    image: wrk30,
  },
  {
    id: 31,
    title: "Project 31",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk31,
  },
  {
    id: 32,
    title: "Project 32",
    category: "DESIGN · OUR WORK",
    tag: "Outdoor",
    image: wrk32,
  },
];

const tags = ["All", "Packaging", "Campaign", "Outdoor", "Events"];

const tagColors = {
  Packaging: "#b08d57",
  Campaign: "#7a9e7e",
  Outdoor: "#5b7fa6",
  Events: "#a0748a",
  All: "#888",
};

export default function OurWork() {
  const [activeTag, setActiveTag] = useState("All");
  const [hoveredId, setHoveredId] = useState(null);

  const filtered =
    activeTag === "All"
      ? projects
      : projects.filter((p) => p.tag === activeTag);

  return (
    <div style={styles.page}>
      <style>{`
        @import url('https://fonts.googleapis.com/css2?family=Cormorant+Garamond:wght@400;600&family=DM+Sans:wght@300;400;500&display=swap');

        * { box-sizing: border-box; margin: 0; padding: 0; }

        .card-img {
          width: 100%;
          height: 220px;
          object-fit: cover;
          display: block;
          transition: transform 0.55s cubic-bezier(0.25, 0.46, 0.45, 0.94);
        }

        .project-card {
          background: #fff;
          border-radius: 4px;
          overflow: hidden;
          cursor: pointer;
          position: relative;
          transition: box-shadow 0.3s ease;
        }

        .project-card:hover .card-img {
          transform: scale(1.06);
        }

        .project-card:hover {
          box-shadow: 0 12px 40px rgba(0,0,0,0.13);
        }

        .hover-overlay {
          position: absolute;
          inset: 0;
          background: linear-gradient(to top, rgba(20,15,10,0.72) 0%, rgba(20,15,10,0.1) 60%, transparent 100%);
          opacity: 0;
          transition: opacity 0.35s ease;
          display: flex;
          align-items: flex-end;
          padding: 20px;
          pointer-events: none;
        }

        .project-card:hover .hover-overlay {
          opacity: 1;
        }

        .hover-cta {
          color: #fff;
          font-family: 'DM Sans', sans-serif;
          font-size: 13px;
          letter-spacing: 1.5px;
          text-transform: uppercase;
          border-bottom: 1px solid rgba(255,255,255,0.6);
          padding-bottom: 2px;
        }

        .filter-btn {
          font-family: 'DM Sans', sans-serif;
          font-size: 12px;
          letter-spacing: 1.4px;
          text-transform: uppercase;
          padding: 7px 18px;
          border-radius: 2px;
          border: 1px solid #ccc;
          background: transparent;
          cursor: pointer;
          transition: all 0.22s ease;
          color: #888;
        }

        .filter-btn:hover {
          border-color: #b08d57;
          color: #b08d57;
        }

        .filter-btn.active {
          background: #b08d57;
          border-color: #b08d57;
          color: #fff;
        }

        .work-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
          max-width: 1100px;
          margin: 0 auto;
          padding: 0 24px 80px;
        }

        @media (max-width: 900px) {
          .work-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
          .card-img {
            height: 180px !important;
          }
        }

        @media (max-width: 560px) {
          .work-grid {
            grid-template-columns: 1fr !important;
            padding: 0 16px 60px !important;
          }
          .card-img {
            height: 220px !important;
          }
          .work-header {
            padding: 40px 16px 24px !important;
          }
          .work-filters {
            padding: 0 16px !important;
            gap: 8px !important;
          }
          .filter-btn {
            font-size: 11px !important;
            padding: 6px 13px !important;
          }
        }
      `}</style>

      {/* Header */}
      <div className="work-header" style={styles.header}>
        <p style={styles.subheading}>Mind Frame India's</p>
        <h1 style={styles.heading}>Creative Communication<br />& Advertising Campaigns</h1>
        <div style={styles.divider} />
      </div>

      {/* Filter Tabs */}
      <div className="work-filters" style={styles.filters}>
        {tags.map((tag) => (
          <button
            key={tag}
            className={`filter-btn ${activeTag === tag ? "active" : ""}`}
            onClick={() => setActiveTag(tag)}
          >
            {tag}
          </button>
        ))}
      </div>

      {/* Grid */}
      <div className="work-grid">
        {filtered.map((project) => (
          <div
            key={project.id}
            className="project-card"
            onMouseEnter={() => setHoveredId(project.id)}
            onMouseLeave={() => setHoveredId(null)}
          >
            <div style={{ overflow: "hidden", position: "relative" }}>
              <img
                src={project.image}
                alt={project.title}
                className="card-img"
              />
              <div className="hover-overlay">
                <span className="hover-cta">View Project</span>
              </div>
            </div>

            <div style={styles.cardBody}>
              <span
                style={{
                  ...styles.tag,
                  background: tagColors[project.tag] + "18",
                  color: tagColors[project.tag],
                  borderColor: tagColors[project.tag] + "40",
                }}
              >
                {project.tag}
              </span>
              <h3 style={styles.cardTitle}>{project.title}</h3>
              <p style={styles.cardCategory}>{project.category}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

const styles = {
  page: {
    fontFamily: "'DM Sans', sans-serif",
    background: "#faf8f5",
    minHeight: "100vh",
  },
  header: {
    textAlign: "center",
    padding: "64px 24px 32px",
  },
  subheading: {
    fontFamily: "'DM Sans', sans-serif",
    fontSize: "13px",
    letterSpacing: "2.5px",
    textTransform: "uppercase",
    color: "#b08d57",
    marginBottom: "10px",
  },
  heading: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "clamp(28px, 4vw, 42px)",
    fontWeight: 600,
    color: "#1a1510",
    lineHeight: 1.25,
    marginBottom: "20px",
  },
  divider: {
    width: "48px",
    height: "2px",
    background: "#b08d57",
    margin: "0 auto 40px",
  },
  filters: {
    display: "flex",
    justifyContent: "center",
    flexWrap: "wrap",
    gap: "10px",
    maxWidth: "1100px",
    margin: "0 auto 40px",
    padding: "0 24px",
  },
  cardBody: {
    padding: "16px 18px 20px",
    background: "#fff",
  },
  tag: {
    display: "inline-block",
    fontSize: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    padding: "3px 10px",
    borderRadius: "2px",
    border: "1px solid",
    marginBottom: "10px",
    fontWeight: 500,
  },
  cardTitle: {
    fontFamily: "'Cormorant Garamond', serif",
    fontSize: "17px",
    fontWeight: 600,
    color: "#1a1510",
    lineHeight: 1.4,
    marginBottom: "8px",
  },
  cardCategory: {
    fontSize: "10px",
    letterSpacing: "1px",
    textTransform: "uppercase",
    color: "#b08d57",
    fontWeight: 400,
  },
};