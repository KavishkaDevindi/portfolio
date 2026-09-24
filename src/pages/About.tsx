import { Link } from "react-router-dom"
import QA from "../assets/QA.jpg"

const skills = [
  { category: "Software Testing", items: [ "Manual Testing", "STLC", "SDLC"," Test Case Fundamentals"," Debugging"], color: "#7c6dff" },
  { category: "API & Databases", items: ["REST APIs","API Testing", "Postman","MySQL","SQL"," Prisma ORM "], color: "#9d8fff" },
  { category: "Test Automation (Learning)", items: [" Selenium WebDriver","TestNG","Maven"], color: "#b09fff" },
  { category: "Programming", items: ["Java", "JavaScript","TypeScript","C","Dart"], color: "#7c6dff" },
  { category: "Web & Mobile Development", items: ["HTML5", "CSS3","React","Tailwind CSS","Node.js","Flutter"], color: "#9d8fff" },
  { category: "Tools", items: ["Git", "GitHub", "VS Code"], color: "#b09fff" },
]

export default function About() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "68px" }}>
      {/* Page header */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "4rem 2rem 2rem",
        }}
      >
        <span
          className="font-mono"
          style={{
            fontSize: "0.75rem",
            color: "#7c6dff",
            letterSpacing: "0.1em",
            textTransform: "uppercase",
          }}
        >
          about me
        </span>
        <h1
          className="font-display animate-fade-up"
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 700,
            margin: "0.5rem 0 0",
            letterSpacing: "-0.03em",
          }}
        >
          The person who sees beyond{" "}
          <span className="gradient-text font-display" style={{ fontStyle: "italic" }}>
            the code
          </span>
        </h1>
      </section>

      {/* Main grid */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "2rem 2rem 5rem",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: "4rem",
          alignItems: "start",
        }}
      >
        {/* Left — bio */}
        <div className="animate-fade-up delay-100">
          <div
            style={{
              width: "100%",
              aspectRatio: "4/3",
              borderRadius: "16px",
              overflow: "hidden",
              marginBottom: "2rem",
              position: "relative",
              border: "1px solid rgba(124,109,255,0.2)",
              background: "#0e0e18",
            }}
          >
            <img
              src={QA}
              alt="Software engineering workspace with code on screen"
              style={{ width: "100%", height: "100%", objectFit: "cover", opacity: 0.8 }}
            />
            <div
              style={{
                position: "absolute",
                inset: 0,
                background: "linear-gradient(135deg, rgba(124,109,255,0.2) 0%, transparent 50%)",
              }}
            />
          </div>

          <div style={{ display: "flex", flexDirection: "column", gap: "1.25rem" }}>
            <p style={{ color: "#c0bedd", lineHeight: 1.8, margin: 0, fontSize: "1rem" }}>
              I'm <strong style={{ color: "#f0eeff" }}>Kavishka Devindi</strong>, a Software Technology graduate 
              and Aspiring QA Professional with practical experience in manual testing, debugging, API testing, 
              and software quality practices. I am passionate about identifying defects, validating application functionality, 
              and helping create reliable and user-friendly software.
            </p>
            <p style={{ color: "#9a9ab8", lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>
              During my 6-month industry internship, I worked with web and mobile applications as a Full-Stack Developer Intern 
              while gaining hands-on exposure to manual testing, debugging, REST API testing, and investigating application issues. Working closely with developers in an Agile environment helped me understand how testing and quality fit into the software development lifecycle.
            </p>
            <p style={{ color: "#9a9ab8", lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>
              I have also been developing my QA skills through hands-on projects and continuous learning in manual testing, 
              API testing with Postman, Selenium WebDriver, SQL, and software testing fundamentals. I enjoy analyzing application
              behavior, finding potential issues, and thinking from both a user's and a quality perspective.
            </p>
            <p style={{ color: "#9a9ab8", lineHeight: 1.8, margin: 0, fontSize: "0.97rem" }}>
              I am a detail-oriented, curious, and continuously learning professional who is now focused on building a career 
              in Quality Assurance and contributing to teams that value reliable, high-quality software.
            </p>
          </div>

          <div style={{ display: "flex", gap: "1rem", marginTop: "2rem", flexWrap: "wrap" }}>
            {/* <Link
              to="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.7rem 1.5rem",
                background: "linear-gradient(135deg, #7c6dff, #9d8fff)",
                color: "#fff",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 500,
                fontSize: "0.9rem",
                boxShadow: "0 0 24px rgba(124,109,255,0.3)",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
              }}
            >
              Download CV
              <svg width="15" height="15" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                <path d="M21 15v4a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2v-4" />
                <polyline points="7 10 12 15 17 10" />
                <line x1="12" y1="15" x2="12" y2="3" />
              </svg>
            </Link> */}
            <Link
              to="/projects"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                padding: "0.7rem 1.5rem",
                border: "1px solid rgba(255,255,255,0.12)",
                color: "#c0bedd",
                borderRadius: "8px",
                textDecoration: "none",
                fontWeight: 400,
                fontSize: "0.9rem",
                transition: "all 0.2s ease",
              }}
              onMouseEnter={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(124,109,255,0.5)"
                ;(e.currentTarget as HTMLElement).style.background = "rgba(124,109,255,0.08)"
              }}
              onMouseLeave={(e) => {
                ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"
                ;(e.currentTarget as HTMLElement).style.background = "transparent"
              }}
            >
              See My Work
            </Link>
          </div>
        </div>

        {/* Right — skills grid */}
        <div className="animate-fade-up delay-200">
          <h2
            className="font-display"
            style={{
              fontSize: "1.5rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
              letterSpacing: "-0.02em",
            }}
          >
            Skills & Technologies
          </h2>

          <div style={{ display: "flex", flexDirection: "column", gap: "1rem" }}>
            {skills.map((group) => (
              <div
                key={group.category}
                style={{
                  padding: "1.25rem",
                  border: "1px solid rgba(255,255,255,0.07)",
                  borderRadius: "12px",
                  background: "rgba(14,14,24,0.5)",
                  transition: "border-color 0.2s ease",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(124,109,255,0.25)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"
                }}
              >
                <div
                  style={{
                    fontSize: "0.72rem",
                    fontFamily: "'JetBrains Mono',monospace",
                    color: group.color,
                    textTransform: "uppercase",
                    letterSpacing: "0.1em",
                    marginBottom: "0.75rem",
                  }}
                >
                  {group.category}
                </div>
                <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
                  {group.items.map((item) => (
                    <span
                      key={item}
                      style={{
                        fontSize: "0.82rem",
                        padding: "0.28rem 0.75rem",
                        borderRadius: "100px",
                        border: `1px solid ${group.color}30`,
                        background: `${group.color}0f`,
                        color: "#c0bedd",
                        fontWeight: 400,
                      }}
                    >
                      {item}
                    </span>
                  ))}
                </div>
              </div>
            ))}
          </div>

          {/* Education card */}
          <div
            style={{
              marginTop: "1.5rem",
              padding: "1.5rem",
              border: "1px solid rgba(124,109,255,0.25)",
              borderRadius: "12px",
              background: "rgba(124,109,255,0.06)",
            }}
          >
            <div
              style={{
                fontSize: "0.72rem",
                fontFamily: "'JetBrains Mono',monospace",
                color: "#7c6dff",
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: "0.75rem",
              }}
            >
              🎓 Education
            </div>
            <div style={{ fontWeight: 600, color: "#f0eeff", fontSize: "1rem" }}>
              Bachelor of Information and Communication Technology Honours (Software Technologies)
            </div>
            <div style={{ color: "#7a7a9a", fontSize: "0.88rem", marginTop: "4px" }}>
              Graduated · 2026
            </div>
            <div style={{ color: "#9a9ab8", fontSize: "0.85rem", marginTop: "8px", lineHeight: 1.6 }}>
              Focused on software testing, quality assurance practices, API testing, 
              debugging, software development lifecycle, and Agile methodologies.
            </div>
          </div>
        </div>
      </section>

      <style>{`
        @media (max-width: 768px) {
          section[style*="grid-template-columns: 1fr 1fr"] {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </div>
  )
}
