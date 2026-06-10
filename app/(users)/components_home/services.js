"use client";

import { FaHeadset, FaUserMd, FaCheckCircle, FaPlay, FaUsers, FaPhoneAlt, FaChartLine, FaTrophy, FaPlus } from "react-icons/fa";
import Link from "next/link";

const STATS = [
  { Icon: FaUsers,     value: "567+",  label: "संतुष्ट मरीज (Satisfied Patients)" },
  { Icon: FaPhoneAlt,  value: "24/7",  label: "सहयोग टीम (24/7 Support)" },
  { Icon: FaChartLine, value: "241+",  label: "सफल उपचार (Treatments Done)" },
  { Icon: FaTrophy,    value: "16+",   label: "पुरस्कार विजेता (Awards Won)" },
];

export default function AboutUs() {
  return (
    <>
      <style>{`
        @keyframes float-slow {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(5deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        @keyframes float-reverse {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(8px) rotate(-8deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .float-icon-slow {
          animation: float-slow 6s ease-in-out infinite;
        }
        .float-icon-rev {
          animation: float-reverse 5s ease-in-out infinite;
        }
        .abu-row {
          display: flex;
          gap: 64px;
          align-items: center;
          flex-wrap: wrap;
        }
        .abu-img-col {
          position: relative;
          flex: 0 0 auto;
          width: 390px;
        }
        .abu-text-col {
          flex: 1;
          min-width: 280px;
        }
        .abu-stats-grid {
          display: grid;
          grid-template-columns: repeat(2, 1fr);
          gap: 24px;
          max-width: 800px;
          margin: 0 auto;
        }
        @media (max-width: 1023px) {
          .abu-img-col { width: 100%; max-width: 460px; margin: 0 auto; }
          .abu-row { flex-direction: column; gap: 40px; }
        }
        @media (max-width: 767px) {
          .abu-img-col { max-width: 100% !important; }
          .abu-main-img { height: 240px !important; }
        }
        @media (max-width: 479px) {
          .abu-stats-grid { grid-template-columns: 1fr !important; }
          .abu-main-img { height: 200px !important; }
        }
      `}</style>

      <section aria-label="About Us" style={{ fontFamily: "'Segoe UI', sans-serif", position: "relative", overflow: "hidden" }}>

        {/* Floating doctor signs for Indian/Hindi theme & animation */}
        <div className="float-icon-slow" style={{ position: "absolute", top: "15%", left: "5%", fontSize: "32px", color: "rgba(39, 131, 227, 0.15)", pointerEvents: "none" }}>⚕</div>
        <div className="float-icon-rev" style={{ position: "absolute", top: "70%", right: "8%", fontSize: "28px", color: "rgba(18, 136, 7, 0.15)", pointerEvents: "none" }}>✚</div>
        <div className="float-icon-slow" style={{ position: "absolute", bottom: "10%", left: "8%", fontSize: "24px", color: "rgba(255, 153, 51, 0.15)", pointerEvents: "none" }}>⚕</div>

        {/* ── Main About Row ── */}
        <div style={{ backgroundColor: "#ffffff", padding: "80px 0 60px" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div className="abu-row">

              {/* LEFT: Image block */}
              <div className="abu-img-col">
                {/* Dot pattern top-left */}
                <div style={{
                  position: "absolute", top: -20, left: -24,
                  display: "grid", gridTemplateColumns: "repeat(6, 10px)", gap: 6,
                  zIndex: 0,
                }}>
                  {Array.from({ length: 30 }).map((_, i) => (
                    <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#d1dff5" }} />
                  ))}
                </div>

                {/* Main photo */}
                <div style={{ position: "relative", zIndex: 1, borderRadius: 4, overflow: "hidden" }}>
                  <img
                    src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                    alt="Doctors reviewing patient information"
                    className="abu-main-img"
                    style={{ width: "100%", height: 340, objectFit: "cover", objectPosition: "center top", display: "block" }}
                  />
                </div>

                {/* Stethoscope watermark */}
                <div className="float-icon-slow" style={{
                  position: "absolute", bottom: -30, left: -40, zIndex: 0,
                  opacity: 0.55, fontSize: 90, color: "#c5d8ef", lineHeight: 1,
                  pointerEvents: "none", userSelect: "none",
                }}>⚕</div>

                {/* Badge: 26+ Experience */}
                <div style={{
                  position: "absolute", bottom: 20, right: -16, zIndex: 2,
                  width: 96, height: 96, borderRadius: "50%",
                  backgroundColor: "#0d1b4b",
                  display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 4px 18px rgba(13,27,75,0.35)",
                }}>
                  <span style={{ color: "#fff", fontWeight: 900, fontSize: 22, lineHeight: 1 }}>26+</span>
                  <span style={{ color: "rgba(180,200,240,0.85)", fontSize: 11, marginTop: 3 }}>वर्षों का अनुभव</span>
                </div>
              </div>

              {/* RIGHT: Content */}
              <div className="abu-text-col">
                {/* Eyebrow */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <div style={{ width: 28, height: 2, backgroundColor: "#FF9933" }} />
                  <span style={{ color: "#FF9933", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                    हमारा परिचय | Our About Us
                  </span>
                </div>

                {/* Heading */}
                <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 32, lineHeight: 1.25, margin: "0 0 16px" }}>
                  चिकित्सा क्षेत्र में 26+ वर्षों का<br />विश्वास और सेवा
                </h2>

                {/* Body */}
                <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75, margin: "0 0 28px", maxWidth: 460 }}>
                  हमें भारत के बेहतरीन और भविष्य-उन्मुख स्वास्थ्य पेशेवरों और अस्पतालों के साथ काम करने का सौभाग्य मिला है। आपकी सुरक्षा और स्वास्थ्य ही हमारा परम कर्तव्य है।
                </p>

                {/* Feature rows */}
                <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>
                  {/* Client Support */}
                  <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", flex: 1, minWidth: 200, padding: "12px 16px", backgroundColor: "#f5f7fb", borderRadius: 4 }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#0d1b4b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <FaHeadset style={{ color: "#fff", fontSize: 18 }} />
                      </div>
                      <span style={{ color: "#0d1b4b", fontWeight: 700, fontSize: 15 }}>संतुष्ट मरीज सेवा | Patient Support</span>
                    </div>
                    <div style={{ width: 90, height: 64, borderRadius: 4, overflow: "hidden", flexShrink: 0, backgroundColor: "#d1dff5" }}>
                      <img src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=400&q=80" alt="Client support" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>

                  {/* Doctor Support */}
                  <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                    <div style={{ display: "flex", gap: 12, alignItems: "center", flex: 1, minWidth: 200, padding: "12px 16px", backgroundColor: "#f5f7fb", borderRadius: 4 }}>
                      <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#0d1b4b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                        <FaUserMd style={{ color: "#fff", fontSize: 18 }} />
                      </div>
                      <span style={{ color: "#0d1b4b", fontWeight: 700, fontSize: 15 }}>विशेषज्ञ चिकित्सक सेवा | Expert Doctors</span>
                    </div>
                    <div style={{ width: 90, height: 64, borderRadius: 4, overflow: "hidden", flexShrink: 0, backgroundColor: "#d1dff5" }}>
                      <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" alt="Doctor support" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                  </div>
                </div>

                {/* Inline note */}
                <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 32, padding: "12px 16px", borderLeft: "3px solid #128807" }}>
                  <FaCheckCircle style={{ color: "#128807", fontSize: 16, marginTop: 2, flexShrink: 0 }} />
                  <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                    चिकित्सा सेवाओं और स्वास्थ्य सुविधाओं के लिए हमारे पास कई योजनाएं उपलब्ध हैं।{" "}
                    <Link href="/about" style={{ color: "#FF9933", fontWeight: 700, textDecoration: "none" }}>और पढ़ें | READ MORE +</Link>
                  </p>
                </div>

                {/* CTA Buttons */}
                <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
                  <a 
                    href="https://www.youtube.com/watch?v=Mx3sZxhFJ_E" 
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ display: "flex", alignItems: "center", gap: 10, textDecoration: "none" }}
                  >
                    <div style={{
                      width: 44, height: 44, borderRadius: "50%",
                      backgroundColor: "#2783e3",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      boxShadow: "0 0 0 8px rgba(39,131,227,0.15)",
                    }}>
                      <FaPlay style={{ color: "#fff", fontSize: 14, marginLeft: 2 }} />
                    </div>
                    <span style={{ color: "#0d1b4b", fontWeight: 700, fontSize: 14 }}>काम करने का तरीका (वीडियो)</span>
                  </a>
                  <Link href="/about" style={{
                    display: "inline-flex", alignItems: "center", gap: 8,
                    backgroundColor: "#2783e3", color: "#fff",
                    padding: "12px 28px", borderRadius: 4,
                    fontWeight: 700, fontSize: 14, textDecoration: "none",
                  }}>
                    हमारे बारे में »
                  </Link>
                </div>
              </div>

            </div>
          </div>
        </div>

        {/* ── Stats Counter (2 Columns x 2 Rows) ── */}
        <div style={{ backgroundColor: "#f5f7fb", padding: "52px 0" }}>
          <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
            <div className="abu-stats-grid">
              {STATS.map(({ Icon, value, label }) => (
                <div key={label} style={{
                  textAlign: "center", padding: "28px 16px",
                  backgroundColor: "#ffffff", borderRadius: 6,
                  boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
                  borderTop: "3px solid #FF9933", // Elegant saffron border
                }}>
                  <div style={{
                    width: 64, height: 64, borderRadius: "50%",
                    backgroundColor: "#0d1b4b",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    margin: "0 auto 16px",
                  }}>
                    <Icon style={{ color: "#fff", fontSize: 26 }} />
                  </div>
                  <p style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 30, lineHeight: 1, margin: "0 0 6px" }}>
                    {value}
                  </p>
                  <p style={{ color: "#6b7280", fontSize: 13, margin: 0, fontWeight: 600 }}>
                    {label}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

      </section>
    </>
  );
}