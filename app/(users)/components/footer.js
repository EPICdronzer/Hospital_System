import Link from "next/link";
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaStethoscope,
  FaEnvelope,
  FaWhatsapp,
} from "react-icons/fa";

export default function Footer() {
  return (
    <footer aria-label="Site footer" style={{ fontFamily: "'Segoe UI', Arial, sans-serif" }}>

      {/* ── MAIN FOOTER ── */}
      <div style={{ background: "#0f1a4e", padding: "40px 0 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="footer-grid">

            {/* Col 1 – Brand */}
            <div className="footer-brand-col">
              <Link href="/" className="footer-logo-link">
                <span className="footer-logo-icon">
                  <FaStethoscope style={{ color: "#ffffff", fontSize: 18 }} />
                </span>
                <span style={{ color: "#ffffff", fontWeight: 800, fontSize: 22, letterSpacing: "-0.5px" }}>
                  मेडिलो | Medilo
                </span>
              </Link>

              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, lineHeight: 1.7, margin: "12px 0 14px" }}>
                स्वास्थ्य सेवा में विश्वसनीयता। Trusted healthcare across India — compassionate doctors, 24/7 seva.
              </p>

              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaClock style={{ color: "#FF9933", fontSize: 11, flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>सोम–शुक्र: 8am – 6pm (Mon–Fri)</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaMapMarkerAlt style={{ color: "#FF9933", fontSize: 11, flexShrink: 0 }} />
                  <span style={{ color: "rgba(255,255,255,0.75)", fontSize: 12 }}>कनॉट प्लेस, नई दिल्ली – 110001</span>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaPhone style={{ color: "#FF9933", fontSize: 11, flexShrink: 0 }} />
                  <a href="tel:+919969569535" style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, textDecoration: "none" }}>+91 99695 69535</a>
                </li>
                <li style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaWhatsapp style={{ color: "#25d366", fontSize: 12, flexShrink: 0 }} />
                  <a href="https://wa.me/919969569535" style={{ color: "rgba(255,255,255,0.75)", fontSize: 12, textDecoration: "none" }}>WhatsApp पर संपर्क करें</a>
                </li>
              </ul>

              <div style={{ display: "flex", gap: 8, marginTop: 14 }}>
                {[FaFacebookF, FaPinterestP, FaTwitter, FaInstagram].map((Icon, i) => (
                  <Link key={i} href="#" aria-label="social"
                    style={{
                      width: 28, height: 28, borderRadius: "50%", border: "1px solid rgba(255,255,255,0.25)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      color: "rgba(255,255,255,0.65)", textDecoration: "none", fontSize: 10,
                      transition: "all 0.15s"
                    }}
                    onMouseEnter={e => { e.currentTarget.style.background = "#2783e3"; e.currentTarget.style.borderColor = "#2783e3"; e.currentTarget.style.color = "#fff"; }}
                    onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.borderColor = "rgba(255,255,255,0.25)"; e.currentTarget.style.color = "rgba(255,255,255,0.65)"; }}
                  >
                    <Icon />
                  </Link>
                ))}
              </div>
            </div>

            {/* Col 2 – Quick Links */}
            <div className="footer-col">
              <h3 style={{ color: "#FF9933", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 20, height: 2, background: "#FF9933", display: "inline-block" }} /> त्वरित लिंक | Quick Links
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "मुख्य पृष्ठ | Home", href: "/" },
                  { label: "परिचय | About Us", href: "/about" },
                  { label: "सेवाएं | Services", href: "/service" },
                  { label: "समय सारणी | Timetable", href: "/timetable" },
                  { label: "ब्लॉग | Blog", href: "/blog" },
                  { label: "संपर्क | Contact", href: "/contact" },
                ].map(item => (
                  <li key={item.href}>
                    <Link href={item.href}
                      style={{ color: "rgba(190,215,255,0.8)", fontSize: 12.5, textDecoration: "none", transition: "color 0.15s", display: "flex", alignItems: "center", gap: 6 }}
                      onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(190,215,255,0.8)"}
                    >
                      <span style={{ color: "#2783e3", fontSize: 8 }}>▶</span> {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 3 – Services */}
            <div className="footer-col">
              <h3 style={{ color: "#FF9933", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 20, height: 2, background: "#FF9933", display: "inline-block" }} /> हमारी सेवाएं | Services
              </h3>
              <ul style={{ listStyle: "none", margin: 0, padding: 0, display: "flex", flexDirection: "column", gap: 8 }}>
                {[
                  { label: "हृदय रोग | Cardiology", href: "/service" },
                  { label: "हड्डी रोग | Orthopedic", href: "/service" },
                  { label: "तंत्रिका रोग | Neurology", href: "/service" },
                  { label: "दंत चिकित्सा | Dental Care", href: "/service" },
                  { label: "नेत्र विज्ञान | Ophthalmology", href: "/service" },
                  { label: "स्त्री रोग | Gynecology", href: "/service" },
                ].map(item => (
                  <li key={item.label}>
                    <Link href={item.href}
                      style={{ color: "rgba(190,215,255,0.8)", fontSize: 12.5, textDecoration: "none", transition: "color 0.15s", display: "flex", alignItems: "center", gap: 6 }}
                      onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
                      onMouseLeave={e => e.currentTarget.style.color = "rgba(190,215,255,0.8)"}
                    >
                      <span style={{ color: "#128807", fontSize: 8 }}>▶</span> {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* Col 4 – Newsletter/Contact CTA */}
            <div className="footer-col">
              <h3 style={{ color: "#FF9933", fontWeight: 800, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 14, display: "flex", alignItems: "center", gap: 8 }}>
                <span style={{ width: 20, height: 2, background: "#FF9933", display: "inline-block" }} /> अपॉइंटमेंट | Appointment
              </h3>
              <p style={{ color: "rgba(255,255,255,0.65)", fontSize: 12.5, lineHeight: 1.7, margin: "0 0 14px" }}>
                अपना अपॉइंटमेंट बुक करें। Book your appointment with our specialist doctors today.
              </p>
              <a href="/contact"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 6,
                  background: "#2783e3", color: "#fff", fontWeight: 700,
                  fontSize: 12.5, padding: "9px 20px", textDecoration: "none",
                  marginBottom: 10, transition: "background 0.15s"
                }}
                onMouseEnter={e => e.currentTarget.style.background = "#1a6fd0"}
                onMouseLeave={e => e.currentTarget.style.background = "#2783e3"}
              >
                अपॉइंटमेंट बुक करें »
              </a>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginTop: 4 }}>
                <FaEnvelope style={{ color: "#FF9933", fontSize: 12 }} />
                <a href="mailto:contact@medilo.in" style={{ color: "rgba(190,215,255,0.8)", fontSize: 12, textDecoration: "none" }}>contact@medilo.in</a>
              </div>
            </div>

          </div>
        </div>

        {/* Indian tricolor divider */}
        <div style={{ display: "flex", height: 3, marginTop: 32 }}>
          <div style={{ flex: 1, background: "#FF9933" }} />
          <div style={{ flex: 1, background: "#ffffff" }} />
          <div style={{ flex: 1, background: "#128807" }} />
        </div>
      </div>

      {/* ── BOTTOM BAR ── */}
      <div style={{ background: "#080e2b", padding: "12px 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", flexWrap: "wrap", alignItems: "center", justifyContent: "space-between", gap: 8 }}>
          <p style={{ color: "rgba(190,210,255,0.7)", fontSize: 12, margin: 0 }}>
            © 2024 <span style={{ color: "#ffffff", fontWeight: 600 }}>मेडिलो | Medilo</span> — सर्वाधिकार सुरक्षित | All Rights Reserved.
          </p>
          <nav style={{ display: "flex", gap: 16, flexWrap: "wrap" }}>
            {[
              { label: "Privacy Policy", href: "#" },
              { label: "Terms of Service", href: "#" },
              { label: "Sitemap", href: "#" },
            ].map(item => (
              <Link key={item.label} href={item.href}
                style={{ color: "rgba(190,210,255,0.6)", fontSize: 12, textDecoration: "none", transition: "color 0.15s" }}
                onMouseEnter={e => e.currentTarget.style.color = "#ffffff"}
                onMouseLeave={e => e.currentTarget.style.color = "rgba(190,210,255,0.6)"}
              >
                {item.label}
              </Link>
            ))}
          </nav>
        </div>
      </div>

      <style>{`
        .footer-grid {
          display: grid;
          grid-template-columns: 1.6fr 1fr 1fr 1.2fr;
          gap: 32px;
        }
        .footer-brand-col {}
        .footer-col {}
        .footer-logo-link {
          display: flex;
          align-items: center;
          gap: 10px;
          text-decoration: none;
          margin-bottom: 0;
        }
        .footer-logo-icon {
          width: 36px;
          height: 36px;
          border-radius: 50%;
          background: #2783e3;
          display: flex;
          align-items: center;
          justify-content: center;
          flex-shrink: 0;
        }
        @media (max-width: 1023px) {
          .footer-grid {
            grid-template-columns: 1fr 1fr !important;
            gap: 24px !important;
          }
        }
        @media (max-width: 639px) {
          .footer-grid {
            grid-template-columns: 1fr !important;
            gap: 20px !important;
          }
        }
      `}</style>
    </footer>
  );
}