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
      <div
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
        {/* Left — Contact info */}
        <div style={{ display: "flex", alignItems: "center", gap: 20 }}>
          <a
            href="mailto:demo@example.com"
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
            demo@example.com
          </a>

          <span style={{ color: "rgba(255,255,255,0.2)" }}>|</span>

          <span
            style={{
              display: "flex",
              alignItems: "center",
              gap: 6,
              color: "rgba(255,255,255,0.8)",
              fontSize: 12,
            }}
          >
            <FaMapMarkerAlt style={{ fontSize: 11 }} />
            15/K, Dhaka London City, LOT
          </span>
        </div>

        {/* Right — Social icons */}
        <div style={{ display: "flex", alignItems: "center", gap: 6 }}>
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
