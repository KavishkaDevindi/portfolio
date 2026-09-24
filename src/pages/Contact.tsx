import { MdEmail, MdLocationOn } from "react-icons/md"
import { FaLinkedinIn, FaGithub } from "react-icons/fa"


export default function Contact() {
  const contactInfo = [
  {
    Icon: MdEmail,
    label: "Email",
    href: "mailto:kavishka026devindi@gmail.com",
  },
  {
    Icon: FaLinkedinIn,
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/kavishka-devindi-56094a2a2/",
  },
  {
    Icon: FaGithub,
    label: "GitHub",
    href: "https://github.com/KavishkaDevindi",
  },
  {
    Icon: MdLocationOn,
    label: "Location",
    value: "Homagama, Sri Lanka",
    href: null,
  },
]

  return (
    <div style={{ minHeight: "100vh", display: "flex", flexDirection: "column", justifyContent: "center", paddingTop: "68px" }}>
      <section
        style={{
          maxWidth: "700px",
          margin: "0 auto",
          padding: "4rem 2rem 6rem",
          width: "100%",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
        }}
      >
        {/* Header - Centered */}
        <div style={{ textAlign: "center", width: "100%", marginBottom: "3.5rem" }}>
          <span
            className="font-mono"
            style={{
              fontSize: "0.75rem",
              color: "#7c6dff",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
            }}
          >
            get in touch
          </span>
          <h1
            className="font-display animate-fade-up"
            style={{
              fontSize: "clamp(2.2rem, 4vw, 3.5rem)",
              fontWeight: 700,
              margin: "0.5rem 0 1rem",
              letterSpacing: "-0.03em",
            }}
          >
            Let's{" "}
            <span className="gradient-text font-display" style={{ fontStyle: "italic" }}>
              Connect
            </span>
          </h1>
          <p
            style={{
              color: "#9a9ab8",
              fontSize: "1.05rem",
              maxWidth: "520px",
              lineHeight: 1.7,
              margin: "0 auto",
            }}
          >
            I'm currently open to new opportunities — whether it's a full-time role, internship, or an
            interesting project. 
          </p>
        </div>

        {/* Contact info section - Centered */}
        <div className="animate-fade-up delay-100" style={{ width: "100%" }}>
          <div style={{ display: "flex", flexDirection: "column", gap: "1rem", marginBottom: "2.5rem" }}>


            {contactInfo.map((info) => (
  <div
    key={info.label}
    style={{
      display: "flex",
      alignItems: "center",
      gap: "1rem",
      padding: "1.1rem 1.25rem",
      border: "1px solid rgba(255,255,255,0.07)",
      borderRadius: "12px",
      background: "rgba(14,14,24,0.5)",
      transition: "border-color 0.2s ease",
      cursor: info.href ? "pointer" : "default",
    }}
    onMouseEnter={(e) => {
      if (info.href)
        (e.currentTarget as HTMLElement).style.borderColor = "rgba(124,109,255,0.3)"
    }}
    onMouseLeave={(e) => {
      ;(e.currentTarget as HTMLElement).style.borderColor = "rgba(255,255,255,0.07)"
    }}
    onClick={() => {
      if (info.href) window.location.href = info.href
    }}
  >
    <div
      style={{
        width: "42px",
        height: "42px",
        borderRadius: "10px",
        background: "rgba(124,109,255,0.1)",
        border: "1px solid rgba(124,109,255,0.2)",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
        color: "#7c6dff",
        flexShrink: 0,
      }}
    >
      <info.Icon size={20} />
    </div>
    <div>
      <div
        style={{
          fontSize: "0.7rem",
          fontFamily: "'JetBrains Mono',monospace",
          color: "#7a7a9a",
          textTransform: "uppercase",
          letterSpacing: "0.08em",
          marginBottom: "2px",
        }}
      >
        {info.label}
      </div>
      <div style={{ fontSize: "0.9rem", color: "#c0bedd", fontWeight: 400 }}>
        {info.value}
      </div>
    </div>
  </div>
))}

          </div>

        </div>
      </section>

      <style>{`
        @keyframes spin { to { transform: rotate(360deg); } }
      `}</style>
    </div>
  )
}