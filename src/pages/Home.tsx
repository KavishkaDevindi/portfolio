import { useEffect, useRef, useState } from "react"
import { Link } from "react-router-dom"
import my from "../assets/my.png"

import {
  SiReact,
  SiTypescript,
  SiNodedotjs,
  SiFlutter,
  SiMysql,
  SiGit,
  SiFigma,
  SiTailwindcss,
} from "react-icons/si"
import { TbApi } from "react-icons/tb"

import { FaGithub, FaLinkedinIn } from "react-icons/fa"
import { MdEmail } from "react-icons/md"

const roles = ["Full-Stack Developer"," Aspiring QA Engineer"]

function TypewriterText({ words }: { words: string[] }) {
  const [index, setIndex] = useState(0)
  const [text, setText] = useState("")
  const [deleting, setDeleting] = useState(false)
  const timeout = useRef<ReturnType<typeof setTimeout> | null>(null)

  useEffect(() => {
    const word = words[index % words.length]
    const speed = deleting ? 60 : 110

    timeout.current = setTimeout(() => {
      if (!deleting && text === word) {
        setTimeout(() => setDeleting(true), 1600)
        return
      }
      if (deleting && text === "") {
        setDeleting(false)
        setIndex((i) => i + 1)
        return
      }
      setText((t) => (deleting ? t.slice(0, -1) : word.slice(0, t.length + 1)))
    }, speed)

    return () => {
      if (timeout.current) clearTimeout(timeout.current)
    }
  }, [text, deleting, index, words])

  return (
    <span>
      {text}
      <span
        style={{
          display: "inline-block",
          width: "2px",
          height: "1em",
          background: "#7c6dff",
          marginLeft: "2px",
          verticalAlign: "text-bottom",
          animation: "blink 1s step-end infinite",
        }}
      />
      <style>{`@keyframes blink{0%,100%{opacity:1}50%{opacity:0}}`}</style>
    </span>
  )
}

function GlowOrb({ style }: { style: React.CSSProperties }) {
  return (
    <div
      style={{
        position: "absolute",
        borderRadius: "50%",
        filter: "blur(80px)",
        pointerEvents: "none",
        ...style,
      }}
    />
  )
}

export default function Home() {
  const heroRef = useRef<HTMLDivElement>(null)
  const [mousePos, setMousePos] = useState({ x: 0, y: 0 })

  useEffect(() => {
    const onMove = (e: MouseEvent) => {
      if (!heroRef.current) return
      const rect = heroRef.current.getBoundingClientRect()
      setMousePos({
        x: ((e.clientX - rect.left) / rect.width) * 100,
        y: ((e.clientY - rect.top) / rect.height) * 100,
      })
    }
    window.addEventListener("mousemove", onMove)
    return () => window.removeEventListener("mousemove", onMove)
  }, [])

  const stats = [
    { value: "6", label: "Months Experience" },
    { value: "10+", label: "Projects Built" },
    { value: "5+", label: "Technologies" },
    { value: "100%", label: "Passion" },
  ]

  return (
    <div style={{ overflow: "hidden" }}>
      {/* Hero */}
      <section
        ref={heroRef}
        className="bg-grid"
        style={{
          minHeight: "100vh",
          position: "relative",
          display: "flex",
          alignItems: "center",
          paddingTop: "68px",
          overflow: "hidden",
        }}
      >
        <GlowOrb
          style={{
            width: "600px",
            height: "600px",
            background: "radial-gradient(circle, rgba(124,109,255,0.18) 0%, transparent 70%)",
            top: "-100px",
            right: "-200px",
          }}
        />
        <GlowOrb
          style={{
            width: "400px",
            height: "400px",
            background: "radial-gradient(circle, rgba(176,159,255,0.1) 0%, transparent 70%)",
            bottom: "0",
            left: "-100px",
          }}
        />
        {/* Interactive glow following mouse */}
        <div
          style={{
            position: "absolute",
            width: "500px",
            height: "500px",
            borderRadius: "50%",
            background: "radial-gradient(circle, rgba(124,109,255,0.08) 0%, transparent 70%)",
            filter: "blur(40px)",
            left: `${mousePos.x}%`,
            top: `${mousePos.y}%`,
            transform: "translate(-50%, -50%)",
            transition: "left 0.8s ease, top 0.8s ease",
            pointerEvents: "none",
          }}
        />

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "4rem 2rem",
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: "4rem",
            alignItems: "center",
            position: "relative",
            zIndex: 2,
          }}
        >
          {/* Left content */}
          <div>
            <div
              className="animate-fade-up font-mono"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "8px",
                fontSize: "0.78rem",
                color: "#7c6dff",
                letterSpacing: "0.1em",
                textTransform: "uppercase",
                marginBottom: "1.5rem",
                padding: "0.4rem 1rem",
                border: "1px solid rgba(124,109,255,0.25)",
                borderRadius: "100px",
                background: "rgba(124,109,255,0.06)",
              }}
            >
              <span
                style={{
                  width: "6px",
                  height: "6px",
                  borderRadius: "50%",
                  background: "#7c6dff",
                  animation: "pulse-ring 2s ease-out infinite",
                  flexShrink: 0,
                }}
              />
              Available for opportunities
            </div>

            <h1
              className="font-display animate-fade-up delay-100"
              style={{
                fontSize: "clamp(2.8rem, 5vw, 4.2rem)",
                fontWeight: 700,
                lineHeight: 1.1,
                margin: "0 0 0.8rem",
                letterSpacing: "-0.03em",
                color: "#f0eeff",
              }}
            >
              Hi, I'm{" "}
              <span className="gradient-text">Kavishka</span>
              <br />
              <span className="font-display" style={{ fontStyle: "italic", fontWeight: 300 }}>
                Devindi
              </span>
            </h1>

            <div
              className="animate-fade-up delay-200"
              style={{
                fontSize: "clamp(1.1rem, 2vw, 1.4rem)",
                color: "#7a7a9a",
                marginBottom: "1.5rem",
                fontWeight: 300,
                minHeight: "2rem",
              }}
            >
              <TypewriterText words={roles} />
            </div>

            <p
              className="animate-fade-up delay-300"
              style={{
                color: "#9a9ab8",
                lineHeight: 1.75,
                maxWidth: "480px",
                marginBottom: "2.5rem",
                fontSize: "1rem",
                fontWeight: 300,
              }}
            >
              Software Technology graduate with practical experience in manual testing, debugging, API testing, and software quality practices. Aspiring QA professional passionate about identifying defects, validating functionality, and ensuring reliable, high-quality software.
            </p>

            <div
              className="animate-fade-up delay-400"
              style={{ display: "flex", gap: "1rem", flexWrap: "wrap" }}
            >
              <Link
                to="/projects"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0.75rem 1.75rem",
                  background: "linear-gradient(135deg, #7c6dff, #9d8fff)",
                  color: "#fff",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 500,
                  fontSize: "0.95rem",
                  transition: "all 0.2s ease",
                  boxShadow: "0 0 30px rgba(124,109,255,0.35)",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
                  ;(e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 50px rgba(124,109,255,0.5)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
                  ;(e.currentTarget as HTMLElement).style.boxShadow =
                    "0 0 30px rgba(124,109,255,0.35)"
                }}
              >
                View My Work
                <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
                  <path d="m5 12h14M12 5l7 7-7 7" />
                </svg>
              </Link>

              <Link
                to="/contact"
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  padding: "0.75rem 1.75rem",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "#c0bedd",
                  borderRadius: "8px",
                  textDecoration: "none",
                  fontWeight: 400,
                  fontSize: "0.95rem",
                  transition: "all 0.2s ease",
                  background: "rgba(255,255,255,0.03)",
                }}
                onMouseEnter={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(124,109,255,0.5)"
                  ;(e.currentTarget as HTMLElement).style.background = "rgba(124,109,255,0.08)"
                }}
                onMouseLeave={(e) => {
                  ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.12)"
                  ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"
                }}
              >
                Get In Touch
              </Link>
            </div>

            

            {/* Socials */}
<div
  className="animate-fade-up delay-500"
  style={{ display: "flex", gap: "1rem", marginTop: "2rem" }}
>
  {[
    {
      label: "GitHub",
      href: "https://github.com/KavishkaDevindi",
      Icon: FaGithub,
    },
    {
      label: "LinkedIn",
      href: "https://www.linkedin.com/in/kavishka-devindi-56094a2a2/",
      Icon: FaLinkedinIn,
    },
    {
      label: "Email",
      href: "mailto:kavishka026devindi@gmail.com",
      Icon: MdEmail,
    },
  ].map(({ label, href, Icon }) => (
    <a
      key={label}
      href={href}
      aria-label={label}
      style={{
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        width: "40px",
        height: "40px",
        borderRadius: "8px",
        border: "1px solid rgba(255,255,255,0.1)",
        color: "#7a7a9a",
        transition: "all 0.2s ease",
        background: "rgba(255,255,255,0.03)",
      }}
      onMouseEnter={(e) => {
        ;(e.currentTarget as HTMLElement).style.color = "#b09fff"
        ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(124,109,255,0.5)"
        ;(e.currentTarget as HTMLElement).style.background = "rgba(124,109,255,0.1)"
      }}
      onMouseLeave={(e) => {
        ;(e.currentTarget as HTMLElement).style.color = "#7a7a9a"
        ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.1)"
        ;(e.currentTarget as HTMLElement).style.background = "rgba(255,255,255,0.03)"
      }}
    >
      <Icon size={18} />
    </a>
  ))}
</div>

          </div>

          {/* Right — profile visual */}
          <div
            className="animate-fade-in delay-300"
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              position: "relative",
            }}
          >
            <div
              className="animate-float"
              style={{
                position: "relative",
                width: "340px",
                height: "340px",
              }}
            >
              {/* Decorative rings */}
              <div
                style={{
                  position: "absolute",
                  inset: "-24px",
                  borderRadius: "50%",
                  border: "1px solid rgba(124,109,255,0.15)",
                }}
              />
              <div
                style={{
                  position: "absolute",
                  inset: "-48px",
                  borderRadius: "50%",
                  border: "1px dashed rgba(124,109,255,0.08)",
                }}
              />

              {/* Avatar circle */}
              <div
                style={{
                  width: "340px",
                  height: "340px",
                  borderRadius: "50%",
                  overflow: "hidden",
                  background: "linear-gradient(135deg, #14141f, #1e1e30)",
                  border: "2px solid rgba(124,109,255,0.3)",
                  boxShadow: "0 0 60px rgba(124,109,255,0.2), inset 0 0 60px rgba(124,109,255,0.05)",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  position: "relative",
                }}
              >
                <img
                  src={my}
                  alt="Kavishka Devindi — Software Engineer"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
                <div
                  style={{
                    position: "absolute",
                    inset: 0,
                    background: "linear-gradient(180deg, transparent 50%, rgba(5,5,10,0.4) 100%)",
                  }}
                />
              </div>

              {/* Floating badge — experience */}
              {/* <div
                style={{
                  position: "absolute",
                  bottom: "10px",
                  left: "-40px",
                  background: "rgba(14,14,24,0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(124,109,255,0.3)",
                  borderRadius: "12px",
                  padding: "0.6rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              > */}
                {/* <span style={{ fontSize: "1.4rem" }}>💼</span> */}
                <div>
                  {/* <div style={{ fontSize: "0.7rem", color: "#7a7a9a", fontFamily: "'JetBrains Mono',monospace" }}>
                    EXPERIENCE
                  </div> */}
                  {/* <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f0eeff" }}>6 Months</div> */}
                </div>
              {/* </div> */}

              {/* Floating badge — stack */}
              <div
                style={{
                  position: "absolute",
                  top: "20px",
                  right: "-50px",
                  background: "rgba(14,14,24,0.95)",
                  backdropFilter: "blur(12px)",
                  border: "1px solid rgba(124,109,255,0.3)",
                  borderRadius: "12px",
                  padding: "0.6rem 1rem",
                  display: "flex",
                  alignItems: "center",
                  gap: "10px",
                  boxShadow: "0 8px 32px rgba(0,0,0,0.4)",
                }}
              >
                {/* <span style={{ fontSize: "1.4rem" }}>⚡</span> */}
                <div>
                  <div style={{ fontSize: "0.7rem", color: "#7a7a9a", fontFamily: "'JetBrains Mono',monospace" }}>
                    FOCUS
                  </div>
                  <div style={{ fontSize: "0.9rem", fontWeight: 600, color: "#f0eeff" }}>Aspiring QA Engineer</div>
                </div>
              </div>
            </div>
          </div>
        </div>


        {/* Mobile grid responsive */}
        <style>{`
          @media (max-width: 768px) {
            .hero-grid { grid-template-columns: 1fr !important; }
            .hero-avatar { display: none !important; }
          }
        `}</style>
      </section>

      {/* Stats strip */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          borderBottom: "1px solid rgba(255,255,255,0.06)",
          background: "rgba(14,14,24,0.5)",
          padding: "2rem 0",
        }}
      >
        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 2rem",
            display: "grid",
            gridTemplateColumns: "repeat(4, 1fr)",
            gap: "1rem",
          }}
        >
          {stats.map((stat, i) => (
            <div
              key={stat.label}
              className="animate-fade-up"
              style={{
                textAlign: "center",
                animationDelay: `${i * 0.1}s`,
              }}
            >
              <div
                className="shimmer-text font-display"
                style={{
                  fontSize: "2rem",
                  fontWeight: 700,
                  letterSpacing: "-0.02em",
                }}
              >
                {stat.value}
              </div>
              <div
                style={{
                  fontSize: "0.8rem",
                  color: "#7a7a9a",
                  fontFamily: "'JetBrains Mono',monospace",
                  textTransform: "uppercase",
                  letterSpacing: "0.06em",
                  marginTop: "4px",
                }}
              >
                {stat.label}
              </div>
            </div>
          ))}
        </div>
        <style>{`
          @media (max-width: 600px) { .stats-grid { grid-template-columns: repeat(2,1fr) !important; } }
        `}</style>
      </section>

      {/* Skills preview */}
      <section
        style={{
          maxWidth: "1200px",
          margin: "0 auto",
          padding: "6rem 2rem",
        }}
      >
        <div style={{ marginBottom: "3rem" }}>
          <span
            className="font-mono"
            style={{
              fontSize: "0.75rem",
              color: "#7c6dff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            what i work with
          </span>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(1.8rem, 3vw, 2.6rem)",
              fontWeight: 600,
              margin: "0.5rem 0 0",
              letterSpacing: "-0.02em",
            }}
          >
            Technology Stack
          </h2>
        </div>

        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(auto-fill, minmax(130px, 1fr))",
            gap: "1rem",
          }}
        >

          {[
  { name: "React",      Icon: SiReact,       color: "#61DAFB" },
  { name: "TypeScript", Icon: SiTypescript,  color: "#3178C6" },
  { name: "Node.js",    Icon: SiNodedotjs,   color: "#339933" },
  { name: "Flutter",    Icon: SiFlutter,     color: "#02569B" },
  { name: "MySQL",      Icon: SiMysql,       color: "#4479A1" },
  { name: "Git",        Icon: SiGit,         color: "#F05032" },
  { name: "Figma",      Icon: SiFigma,       color: "#F24E1E" },
  { name: "REST APIs",  Icon: TbApi,         color: "#7c6dff" },
  { name: "Tailwind",   Icon: SiTailwindcss, color: "#06B6D4" },
].map(({ name, Icon, color }) => (
  <div
    key={name}
    className="card-hover"
    style={{
      padding: "1.4rem 1rem",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "12px",
      background: "rgba(14,14,24,0.5)",
      textAlign: "center",
      cursor: "default",
      display: "flex",
      flexDirection: "column",
      alignItems: "center",
      gap: "0.65rem",
      transition: "all 0.25s ease",
    }}
    onMouseEnter={(e) => {
      e.currentTarget.style.borderColor = `${color}55`
      e.currentTarget.style.background = `${color}10`
      e.currentTarget.style.transform = "translateY(-3px)"
      const iconEl = e.currentTarget.firstChild as HTMLElement
      if (iconEl) iconEl.style.color = color
    }}
    onMouseLeave={(e) => {
      e.currentTarget.style.borderColor = "rgba(255,255,255,0.07)"
      e.currentTarget.style.background = "rgba(14,14,24,0.5)"
      e.currentTarget.style.transform = "translateY(0)"
      const iconEl = e.currentTarget.firstChild as HTMLElement
      if (iconEl) iconEl.style.color = "#c0bedd"
    }}
  >
    <Icon
      size={30}
      style={{ color: "#c0bedd", transition: "color 0.25s ease" }}
    />
    <div style={{ fontSize: "0.82rem", color: "#c0bedd", fontWeight: 500 }}>
      {name}
    </div>
  </div>
))}

        </div>
      </section>

      {/* CTA */}
      <section
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "5rem 2rem",
          textAlign: "center",
          position: "relative",
          overflow: "hidden",
        }}
      >
        <GlowOrb
          style={{
            width: "500px",
            height: "300px",
            background: "radial-gradient(ellipse, rgba(124,109,255,0.12) 0%, transparent 70%)",
            top: "50%",
            left: "50%",
            transform: "translate(-50%,-50%)",
          }}
        />
        <div style={{ position: "relative", zIndex: 2 }}>
          <h2
            className="font-display"
            style={{
              fontSize: "clamp(2rem, 4vw, 3rem)",
              fontWeight: 600,
              letterSpacing: "-0.03em",
              marginBottom: "1rem",
            }}
          >
            Let's create something{" "}
            <span className="gradient-text font-display" style={{ fontStyle: "italic" }}>
              reliable?
            </span>
          </h2>
          <p style={{ color: "#7a7a9a", marginBottom: "2.5rem", fontSize: "1.05rem" }}>
            Let's connect and talk about software quality, testing, and new opportunities.
          </p>
          <Link
            to="/contact"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: "8px",
              padding: "0.9rem 2.2rem",
              background: "linear-gradient(135deg, #7c6dff, #9d8fff)",
              color: "#fff",
              borderRadius: "8px",
              textDecoration: "none",
              fontWeight: 500,
              fontSize: "1rem",
              transition: "all 0.2s ease",
              boxShadow: "0 0 40px rgba(124,109,255,0.35)",
            }}
            onMouseEnter={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 60px rgba(124,109,255,0.55)"
              ;(e.currentTarget as HTMLElement).style.transform = "translateY(-2px)"
            }}
            onMouseLeave={(e) => {
              ;(e.currentTarget as HTMLElement).style.boxShadow = "0 0 40px rgba(124,109,255,0.35)"
              ;(e.currentTarget as HTMLElement).style.transform = "translateY(0)"
            }}
          >
            Start a Conversation
            <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2">
              <path d="m5 12h14M12 5l7 7-7 7" />
            </svg>
          </Link>
        </div>
      </section>

      {/* Footer */}
      <footer
        style={{
          borderTop: "1px solid rgba(255,255,255,0.06)",
          padding: "2rem",
          textAlign: "center",
          color: "#7a7a9a",
          fontSize: "0.82rem",
          fontFamily: "'JetBrains Mono',monospace",
        }}
      >
        © 2025 Kavishka Devindi · Built with React & Vite
      </footer>
    </div>
  )
}
