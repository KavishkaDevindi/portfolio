import { TbUsersGroup, TbTarget, TbBulb, TbBolt } from "react-icons/tb"

const experiences = [
  {
    role: "Full-stack Developer Intern",
    company: "SyntaxErreur",
    period: "May 2024 – November 2024",
    duration: "6 months",
    type: "Internship",
    location: "Remote",
    description:
      "Worked as a Full-Stack Developer Intern in an Agile team, contributing to web and mobile application development while gaining hands-on experience in manual testing, debugging, API integration, and software quality.",
    achievements: [
      "Developed responsive web interfaces and contributed to mobile application features.",
      "Integrated and tested REST APIs while troubleshooting application issues.",
      "Performed manual testing and debugging to identify functional defects.",
      "Worked with Prisma ORM, databases, Git, and GitHub in an Agile development environment.",
      
    ],
    stack: ["React Native", "React", "Node.js", "Tailwind CSS", "MySQL", "Prisma ORM", "Git", "Git Hub"],
  },
]



function TimelineCard({
  item,
  index,
}: {
  item: (typeof experiences)[0]
  index: number
}) {
  const typeColor =
    item.type === "Internship" ? "#7c6dff" : item.type === "Freelance" ? "#9d8fff" : "#b09fff"

  return (
    <div
      className="animate-fade-up card-hover"
      style={{
        animationDelay: `${index * 0.15}s`,
        padding: "2rem",
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        background: "rgba(14,14,24,0.6)",
        position: "relative",
        overflow: "hidden",
      }}
    >
      {/* Left accent bar */}
      <div
        style={{
          position: "absolute",
          left: 0,
          top: 0,
          bottom: 0,
          width: "3px",
          background: `linear-gradient(to bottom, ${typeColor}, transparent)`,
          borderRadius: "3px 0 0 3px",
        }}
      />

      <div
        style={{
          display: "flex",
          justifyContent: "space-between",
          alignItems: "flex-start",
          flexWrap: "wrap",
          gap: "1rem",
          marginBottom: "1.25rem",
        }}
      >
        <div>
          <div style={{ display: "flex", alignItems: "center", gap: "0.75rem", marginBottom: "0.4rem" }}>
            <span
              style={{
                fontSize: "0.7rem",
                fontFamily: "'JetBrains Mono',monospace",
                color: typeColor,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                padding: "0.2rem 0.65rem",
                border: `1px solid ${typeColor}40`,
                borderRadius: "100px",
                background: `${typeColor}0f`,
              }}
            >
              {item.type}
            </span>
            <span style={{ fontSize: "0.8rem", color: "#7a7a9a" }}>📍 {item.location}</span>
          </div>
          <h3
            className="font-display"
            style={{
              fontSize: "1.35rem",
              fontWeight: 600,
              margin: 0,
              color: "#f0eeff",
              letterSpacing: "-0.02em",
            }}
          >
            {item.role}
          </h3>
          <div style={{ color: "#b09fff", fontWeight: 500, marginTop: "4px" }}>{item.company}</div>
        </div>

        <div style={{ textAlign: "right" }}>
          <div
            className="font-mono"
            style={{
              fontSize: "0.82rem",
              color: "#7a7a9a",
              padding: "0.3rem 0.85rem",
              border: "1px solid rgba(255,255,255,0.08)",
              borderRadius: "6px",
              background: "rgba(255,255,255,0.03)",
            }}
          >
            {item.period}
          </div>
          <div style={{ fontSize: "0.78rem", color: "#7a7a9a", marginTop: "4px", textAlign: "right" }}>
            {item.duration}
          </div>
        </div>
      </div>

      <p style={{ color: "#9a9ab8", lineHeight: 1.75, margin: "0 0 1.25rem", fontSize: "0.95rem" }}>
        {item.description}
      </p>

      <ul style={{ margin: "0 0 1.5rem", paddingLeft: "1.25rem", display: "flex", flexDirection: "column", gap: "0.6rem" }}>
        {item.achievements.map((a) => (
          <li
            key={a}
            style={{
              color: "#c0bedd",
              fontSize: "0.9rem",
              lineHeight: 1.6,
              listStyleType: "none",
              display: "flex",
              alignItems: "flex-start",
              gap: "0.6rem",
              paddingLeft: 0,
            }}
          >
            <span style={{ color: typeColor, marginTop: "0.3em", flexShrink: 0 }}>▸</span>
            {a}
          </li>
        ))}
      </ul>

      <div style={{ display: "flex", flexWrap: "wrap", gap: "0.5rem" }}>
        {item.stack.map((tech) => (
          <span
            key={tech}
            style={{
              fontSize: "0.78rem",
              padding: "0.25rem 0.7rem",
              borderRadius: "6px",
              border: "1px solid rgba(124,109,255,0.2)",
              background: "rgba(124,109,255,0.07)",
              color: "#a09fd4",
              fontFamily: "'JetBrains Mono',monospace",
            }}
          >
            {tech}
          </span>
        ))}
      </div>
    </div>
  )
}

export default function Experience() {
  return (
    <div style={{ minHeight: "100vh", paddingTop: "68px" }}>
      <section
        style={{
          maxWidth: "900px",
          margin: "0 auto",
          padding: "4rem 2rem 6rem",
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
          work history
        </span>
        <h1
          className="font-display animate-fade-up"
          style={{
            fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
            fontWeight: 700,
            margin: "0.5rem 0 3rem",
            letterSpacing: "-0.03em",
          }}
        >
          Experience &{" "}
          <span className="gradient-text font-display" style={{ fontStyle: "italic" }}>
            Growth
          </span>
        </h1>

        {/* Timeline */}
        <div style={{ position: "relative" }}>
          {/* Vertical line */}
          <div
            style={{
              position: "absolute",
              left: "0",
              top: "0",
              bottom: "0",
              width: "1px",
              background: "linear-gradient(to bottom, rgba(124,109,255,0.5), rgba(124,109,255,0.05))",
              display: "none",
            }}
          />

          <div style={{ display: "flex", flexDirection: "column", gap: "1.5rem" }}>
            <div>
              <h2
                style={{
                  fontSize: "0.78rem",
                  fontFamily: "'JetBrains Mono',monospace",
                  color: "#7a7a9a",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "1rem",
                }}
              >
                Industry Experience
              </h2>
              {experiences.map((exp, i) => (
                <TimelineCard key={exp.company} item={exp} index={i} />
              ))}
            </div>

            <div style={{ marginTop: "1rem" }}>
              <h2
                style={{
                  fontSize: "0.78rem",
                  fontFamily: "'JetBrains Mono',monospace",
                  color: "#7a7a9a",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "1rem",
                }}
              >
                {/* Independent Work */}
              </h2>
              {/* {freelanceProjects.map((exp, i) => (
                <TimelineCard key={exp.company} item={exp} index={i + experiences.length} />
              ))} */}
            </div>
          </div>
        </div>

        {/* What I bring */}
        <div
          style={{
            marginTop: "4rem",
            padding: "2rem",
            border: "1px solid rgba(124,109,255,0.2)",
            borderRadius: "16px",
            background: "rgba(124,109,255,0.05)",
          }}
        >
          <h3
            className="font-display"
            style={{
              fontSize: "1.3rem",
              fontWeight: 600,
              marginBottom: "1.5rem",
              color: "#f0eeff",
              letterSpacing: "-0.02em",
            }}
          >
            What I bring to a team
          </h3>
          <div
            style={{
              display: "grid",
              gridTemplateColumns: "repeat(auto-fill, minmax(200px, 1fr))",
              gap: "1rem",
            }}
          >
          

            {[
              { Icon: TbUsersGroup, title: "Collaboration", desc: "Comfortable in Agile teams with daily syncs" },
              { Icon: TbTarget,     title: "Focus",         desc: "Detail-oriented with commitment to quality" },
              { Icon: TbBulb,       title: "Curiosity",     desc: "Eager to learn and adopt new technologies" },
              { Icon: TbBolt,       title: "Delivery",      desc: "Meet deadlines and communicate proactively" },
].map(({ Icon, title, desc }) => (
  <div
    key={title}
    style={{
      padding: "1.25rem",
      border: "1px solid rgba(255,255,255,0.06)",
      borderRadius: "10px",
      background: "rgba(14,14,24,0.5)",
    }}
  >
    <Icon
      size={22}
      style={{
        color: "#7c6dff",
        marginBottom: "0.6rem",
        display: "block",
      }}
    />
    <div style={{ fontWeight: 600, color: "#f0eeff", fontSize: "0.92rem", marginBottom: "4px" }}>
      {title}
    </div>
    <div style={{ color: "#7a7a9a", fontSize: "0.82rem", lineHeight: 1.5 }}>{desc}</div>
  </div>
))}

            
          </div>
        </div>
      </section>
    </div>
  )
}
