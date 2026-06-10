import Link from "next/link";
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
  FaMapMarkerAlt,
  FaEnvelope,
} from "react-icons/fa";

export default function Topbar() {
  return (
    <div style={{ backgroundColor: "#0d1b4b", color: "#fff" }}>
      <style>{`
        @media (max-width: 767px) {
          .topbar-location,
          .topbar-divider,
          .topbar-socials {
            display: none !important;
          }
          .topbar-container {
            justify-content: center !important;
            padding: 6px 16px !important;
          }
          .topbar-contact-info {
            justify-content: center !important;
            width: 100% !important;
          }
        }
      `}</style>
      <div
        className="topbar-container"
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "8px 24px",
          display: "flex",
          alignItems: "center",
          justifyContent: "space-between",
          flexWrap: "wrap",
          gap: 8,
        }}
      >
        {/* Left — Contact info & Greetings */}
        <div className="topbar-contact-info" style={{ display: "flex", alignItems: "center", gap: 20, flexWrap: "wrap" }}>
          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "#FF9933", // Tricolor saffron
              fontSize: 12,
              fontWeight: 800,
            }}
          >
            नमस्ते | Namaste
          </span>

          <span className="topbar-divider" style={{ color: "rgba(255,255,255,0.2)" }}>|</span>

          <a
            href="mailto:contact@medilo.in"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "rgba(255,255,255,0.8)",
              textDecoration: "none",
              fontSize: 12,
            }}
          >
            <FaEnvelope style={{ fontSize: 11 }} />
            contact@medilo.in
          </a>

          <span className="topbar-divider" style={{ color: "rgba(255,255,255,0.2)" }}>|</span>

          <span
            className="topbar-location"
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "rgba(255,255,255,0.8)",
              fontSize: 12,
            }}
          >
            <FaMapMarkerAlt style={{ fontSize: 11 }} />
            कनॉट प्लेस, नई दिल्ली (New Delhi, India)
          </span>
        </div>

        {/* Right — Social icons */}
        <div className="topbar-socials" style={{ display: "flex", alignItems: "center", gap: 6 }}>
          {[
            { Icon: FaFacebookF, label: "Facebook" },
            { Icon: FaPinterestP, label: "Pinterest" },
            { Icon: FaTwitter, label: "Twitter" },
            { Icon: FaInstagram, label: "Instagram" },
          ].map(({ Icon, label }) => (
            <Link
              key={label}
              href="#"
              aria-label={label}
              style={{
                width: 26,
                height: 26,
                borderRadius: "50%",
                border: "1px solid rgba(255,255,255,0.28)",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "rgba(255,255,255,0.65)",
                textDecoration: "none",
                fontSize: 10,
              }}
            >
              <Icon />
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
