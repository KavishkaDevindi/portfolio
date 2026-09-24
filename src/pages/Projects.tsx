import { useState } from "react"
import Ol_edu from "../assets/Ol_edu.png"
import SplendEng from "../assets/SplendEng.jpeg"
import TravelVoyage from "../assets/TravelVoyage.jpeg"
import ChessyGrill from "../assets/ChessyGrill.jpeg"

import { FaGithub } from "react-icons/fa"

const projects = [
  {
    id: 1,
    title: "TravelVoyage",
    subtitle: "Web Application",
    category: "Web",
    description:
      "Web application for exploring Sri Lankan destinations, booking tour packages, and managing travel content through a secure user and admin platform.",
    stack: ["React Native", "Tailwind CSS", "Node.js", "MySQL"],
    highlights: [
      "Explore popular destinations across Sri Lanka and discover detailed travel information.",
      "Browse and book tour packages based on different travel preferences and requirements.",
      "Search for and book hotels for convenient accommodation planning.",
      "Manage travel content through a secure user and admin platform.",
    ],
    image: TravelVoyage,
    github: "https://github.com/KavishkaDevindi/TravelVoyage",
    // live: "#",
    featured: true,
  },
  {
    id: 2,
    title: "Ol_edu_app",
    subtitle: "Mobile App",
    category: "Mobile",
    description:
      "Mobile application for O/L students to upload, share, and download study notes and past papers, providing a collaborative platform for accessible learning resources.",
    stack: ["Flutter","Dart", "Node.js", "MySQL", "API"],
    highlights: [
      "Create a collaborative platform where students can share useful educational resources.",
      "Easily access study materials anytime to support exam preparation and learning.",
      "Upload and share study notes and past papers with other O/L students.",
      "Access past papers and learning resources in one convenient mobile application.",
    ],
    image: Ol_edu,
    github: "https://github.com/KavishkaDevindi/Ol_edu_app",
    // live: "#",
    featured: true,
  },
  {
    id: 3,
    title: "ChessyGrill",
    subtitle: "Restaurant reservation system",
    category: "Web",
    description:
      "A responsive restaurant reservation system that allows users to book, view, and manage table reservations seamlessly.",
    stack: ["HTML","CSS","JavaScript"],
    highlights: [
      "Built a responsive restaurant reservation system.",
      "Enabled users to book and manage table reservations.",
      "TDesigned a user-friendly interface for seamless reservations",
    ],
    image: ChessyGrill,
    github: "https://github.com/KavishkaDevindi/ChessyGrills",
    // live: "#",
    featured: false,
  },
  {
    id: 4,
    title: "SplendEng",
    subtitle: "English resource management platform",
    category: "web",
    description:
      "An English resource management platform that organizes study materials, quizzes, and learning progress for learners.",
    stack: ["HTML","CSS","JavaScript","PHP"],
    highlights: [
      "Organized study materials and learning resources.",
      "Added quizzes to support learner assessment.",
      "Tracked learning progress through a user-friendly interface.",
    ],
    image: SplendEng,
    github: "https://github.com/KavishkaDevindi/SplendEng",
    // live: null,
    featured: false,
  },

]

const categories = ["All", "Web", "Mobile"]

export default function Projects() {
  const [active, setActive] = useState("All")
  const [expanded, setExpanded] = useState<number | null>(null)

  const filtered = active === "All" ? projects : projects.filter((p) => p.category === active)

  return (
    <div style={{ minHeight: "100vh", paddingTop: "68px" }}>
      <section
        style={{
          maxWidth: "1200px",
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
          what i've built
        </span>
        <div
          style={{
            display: "flex",
            justifyContent: "space-between",
            alignItems: "flex-end",
            flexWrap: "wrap",
            gap: "1.5rem",
            marginBottom: "3rem",
          }}
        >
          <h1
            className="font-display animate-fade-up"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              margin: "0.5rem 0 0",
              letterSpacing: "-0.03em",
            }}
          >
            Selected{" "}
            <span className="gradient-text font-display" style={{ fontStyle: "italic" }}>
              Projects
            </span>
          </h1>

          <div style={{ display: "flex", gap: "0.5rem" }}>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => setActive(cat)}
                style={{
                  padding: "0.45rem 1.1rem",
                  borderRadius: "100px",
                  border: "1px solid",
                  borderColor: active === cat ? "rgba(124,109,255,0.6)" : "rgba(255,255,255,0.1)",
                  background: active === cat ? "rgba(124,109,255,0.15)" : "transparent",
                  color: active === cat ? "#b09fff" : "#7a7a9a",
                  cursor: "pointer",
                  fontSize: "0.85rem",
                  fontFamily: "'Outfit',sans-serif",
                  fontWeight: active === cat ? 500 : 400,
                  transition: "all 0.2s ease",
                }}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>

        {/* Featured projects — larger */}
        <div style={{ marginBottom: "2rem" }}>
          {filtered.filter((p) => p.featured).length > 0 && (
            <>
              <h2
                style={{
                  fontSize: "0.75rem",
                  fontFamily: "'JetBrains Mono',monospace",
                  color: "#7a7a9a",
                  textTransform: "uppercase",
                  letterSpacing: "0.12em",
                  marginBottom: "1.5rem",
                }}
              >
                Featured
              </h2>
              <div
                style={{
                  display: "grid",
                  gridTemplateColumns: "repeat(auto-fill, minmax(480px, 1fr))",
                  gap: "1.5rem",
                  marginBottom: "3rem",
                }}
              >
                {filtered
                  .filter((p) => p.featured)
                  .map((project, i) => (
                    <ProjectCard
                      key={project.id}
                      project={project}
                      index={i}
                      large
                      expanded={expanded === project.id}
                      onToggle={() =>
                        setExpanded(expanded === project.id ? null : project.id)
                      }
                    />
                  ))}
              </div>
            </>
          )}
        </div>

        {/* Rest */}
        {filtered.filter((p) => !p.featured).length > 0 && (
          <>
            <h2
              style={{
                fontSize: "0.75rem",
                fontFamily: "'JetBrains Mono',monospace",
                color: "#7a7a9a",
                textTransform: "uppercase",
                letterSpacing: "0.12em",
                marginBottom: "1.5rem",
              }}
            >
              More Projects
            </h2>
            <div
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(auto-fill, minmax(320px, 1fr))",
                gap: "1.25rem",
              }}
            >
              {filtered
                .filter((p) => !p.featured)
                .map((project, i) => (
                  <ProjectCard
                    key={project.id}
                    project={project}
                    index={i + 2}
                    large={false}
                    expanded={expanded === project.id}
                    onToggle={() =>
                      setExpanded(expanded === project.id ? null : project.id)
                    }
                  />
                ))}
            </div>
          </>
        )}

        {filtered.length === 0 && (
          <div style={{ textAlign: "center", padding: "4rem", color: "#7a7a9a" }}>
            No projects in this category yet.
          </div>
        )}
      </section>
    </div>
  )
}

function ProjectCard({
  project,
  index,
  large,
  expanded,
  onToggle,
}: {
  project: (typeof projects)[0]
  index: number
  large: boolean
  expanded: boolean
  onToggle: () => void
}) {
  const catColor = project.category === "Mobile" ? "#9d8fff" : "#7c6dff"

  return (
    <div
      className="animate-fade-up card-hover"
      style={{
        animationDelay: `${index * 0.1}s`,
        border: "1px solid rgba(255,255,255,0.07)",
        borderRadius: "16px",
        background: "rgba(14,14,24,0.6)",
        overflow: "hidden",
        display: "flex",
        flexDirection: "column",
      }}
    >
      {/* Image */}
      <div
        style={{
          height: large ? "220px" : "170px",
          overflow: "hidden",
          position: "relative",
          background: "#0e0e18",
        }}
      >
        <img
          src={project.image}
          alt={project.title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            opacity: 0.75,
            transition: "opacity 0.3s ease, transform 0.4s ease",
          }}
          onMouseEnter={(e) => {
            ;(e.currentTarget as HTMLElement).style.opacity = "0.9"
            ;(e.currentTarget as HTMLElement).style.transform = "scale(1.03)"
          }}
          onMouseLeave={(e) => {
            ;(e.currentTarget as HTMLElement).style.opacity = "0.75"
            ;(e.currentTarget as HTMLElement).style.transform = "scale(1)"
          }}
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(180deg, transparent 40%, rgba(14,14,24,0.8) 100%)",
          }}
        />
        <span
          style={{
            position: "absolute",
            top: "1rem",
            right: "1rem",
            fontSize: "0.68rem",
            fontFamily: "'JetBrains Mono',monospace",
            color: catColor,
            padding: "0.2rem 0.65rem",
            border: `1px solid ${catColor}40`,
            borderRadius: "100px",
            background: "rgba(5,5,10,0.8)",
            letterSpacing: "0.08em",
          }}
        >
          {project.category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "1.5rem", flex: 1, display: "flex", flexDirection: "column" }}>
        <h3
          className="font-display"
          style={{
            fontSize: large ? "1.35rem" : "1.15rem",
            fontWeight: 600,
            margin: "0 0 4px",
            letterSpacing: "-0.02em",
            color: "#f0eeff",
          }}
        >
          {project.title}
        </h3>
        <div style={{ fontSize: "0.82rem", color: "#7c6dff", marginBottom: "0.75rem" }}>
          {project.subtitle}
        </div>
        <p
          style={{
            color: "#9a9ab8",
            fontSize: "0.9rem",
            lineHeight: 1.7,
            margin: "0 0 1rem",
            flex: large ? "none" : 1,
          }}
        >
          {project.description}
        </p>

        {/* Expandable highlights */}
        {expanded && (
          <ul
            style={{
              margin: "0 0 1rem",
              padding: 0,
              display: "flex",
              flexDirection: "column",
              gap: "0.5rem",
            }}
          >
            {project.highlights.map((h) => (
              <li
                key={h}
                style={{
                  display: "flex",
                  gap: "0.6rem",
                  alignItems: "flex-start",
                  color: "#c0bedd",
                  fontSize: "0.85rem",
                  lineHeight: 1.6,
                  listStyleType: "none",
                }}
              >
                <span style={{ color: catColor, marginTop: "0.25em", flexShrink: 0 }}>▸</span>
                {h}
              </li>
            ))}
          </ul>
        )}

        {/* Stack */}
        <div style={{ display: "flex", flexWrap: "wrap", gap: "0.4rem", marginBottom: "1.25rem" }}>
          {project.stack.map((t) => (
            <span
              key={t}
              style={{
                fontSize: "0.72rem",
                padding: "0.2rem 0.6rem",
                borderRadius: "5px",
                border: "1px solid rgba(124,109,255,0.18)",
                background: "rgba(124,109,255,0.06)",
                color: "#9a9ab8",
                fontFamily: "'JetBrains Mono',monospace",
              }}
            >
              {t}
            </span>
          ))}
        </div>

        {/* Actions */}
        <div style={{ display: "flex", gap: "0.75rem", alignItems: "center" }}>
          {/* <a
            href={project.github}
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "6px",
              fontSize: "0.82rem",
              color: "#9a9ab8",
              textDecoration: "none",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = "#b09fff"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = "#9a9ab8"
            }}
          >
            <svg width="14" height="14" viewBox="0 0 24 24" fill="currentColor">
              <path d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0 1 12 6.844a9.59 9.59 0 0 1 2.504.337c1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.02 10.02 0 0 0 22 12.017C22 6.484 17.522 2 12 2z" />
            </svg>
            Code
          </a> */}
          <a
  href="https://github.com/KavishkaDevindi"
  target="_blank"
  rel="noopener noreferrer"
  style={{
    display: "inline-flex",
    alignItems: "center",
    gap: "6px",
    color: "#c0bedd",
    textDecoration: "none",
    fontSize: "0.85rem",
    transition: "color 0.2s ease",
  }}
  onMouseEnter={(e) => {
    ;(e.currentTarget as HTMLElement).style.color = "#b09fff"
  }}
  onMouseLeave={(e) => {
    ;(e.currentTarget as HTMLElement).style.color = "#c0bedd"
  }}
>
  <FaGithub size={14} />
  Code
</a>
          
          <button
            onClick={onToggle}
            style={{
              marginLeft: "auto",
              background: "none",
              border: "none",
              cursor: "pointer",
              fontSize: "0.78rem",
              color: "#7c6dff",
              fontFamily: "'Outfit',sans-serif",
              padding: 0,
              display: "flex",
              alignItems: "center",
              gap: "4px",
              transition: "color 0.2s ease",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = "#b09fff"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.color = "#7c6dff"
            }}
          >
            {expanded ? "Less" : "Details"}
            <svg
              width="12"
              height="12"
              viewBox="0 0 24 24"
              fill="none"
              stroke="currentColor"
              strokeWidth="2"
              style={{ transform: expanded ? "rotate(180deg)" : "none", transition: "transform 0.2s" }}
            >
              <polyline points="6 9 12 15 18 9" />
            </svg>
          </button>
        </div>
      </div>
    </div>
  )
}
