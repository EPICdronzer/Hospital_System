"use client";

import Link from "next/link";
import { FaPlay, FaMedkit, FaTint, FaHeartbeat } from "react-icons/fa";

const FEATURES = [
  {
    Icon: FaMedkit,
    title: "उत्कृष्ट चिकित्सा सेवा (Medical Service)",
    desc: "रोगियों के लिए चौबीसों घंटे सर्वोत्तम चिकित्सा उपचार, परामर्श और विशेषज्ञ देखभाल उपलब्ध है।",
  },
  {
    Icon: FaTint,
    title: "रक्त परीक्षण और जाँच (Blood & Check)",
    desc: "त्वरित और सटीक रिपोर्टिंग के साथ सभी प्रकार के रक्त परीक्षण और प्रयोगशाला सुविधाएं।",
  },
  {
    Icon: FaHeartbeat,
    title: "हृदय स्वास्थ्य देखभाल (Heart-Beat Care)",
    desc: "हृदय संबंधी रोगों के निदान, उपचार और हृदय की नियमित जांच के लिए विशेषज्ञ सुविधाएं।",
  },
];

export default function WhyChoose() {
  return (
    <>
      <style>{`
        .wc-bottom-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 48px;
          max-width: 1200px;
          margin: 0 auto;
          padding: 96px 40px 0;
          position: relative;
          z-index: 1;
        }
        .wc-floating-card {
          position: absolute;
          bottom: -44px;
          left: 50%;
          transform: translateX(-50%);
          width: 58%;
          max-width: 720px;
          min-width: 280px;
          background: #ffffff;
          padding: 26px 40px;
          display: flex;
          gap: 16px;
          justify-content: center;
          flex-wrap: wrap;
          z-index: 10;
        }
        @media (max-width: 1023px) {
          .wc-bottom-grid {
            grid-template-columns: 1fr !important;
            padding: 64px 24px 0 !important;
            gap: 32px !important;
          }
          .wc-floating-card {
            width: 90% !important;
            bottom: -52px !important;
            padding: 20px 24px !important;
          }
        }
        @media (max-width: 767px) {
          .wc-floating-card {
            position: static !important;
            transform: none !important;
            width: 100% !important;
            max-width: 100% !important;
            margin: 0 !important;
            border-top: 1px solid #e5eaf2;
            box-shadow: none !important;
          }
          .wc-top-pad { padding-bottom: 32px !important; }
        }
        .wc-footer-inner {
          max-width: 1200px;
          margin: 0 auto;
          padding: 18px 40px;
          display: flex;
          align-items: center;
          justify-content: space-between;
          flex-wrap: wrap;
          gap: 16px;
        }
        @media (max-width: 767px) {
          .wc-footer-inner {
            padding: 18px 24px !important;
            flex-direction: column;
            align-items: flex-start;
          }
        }
      `}</style>

      <style>{`
        @keyframes float-up-down {
          0% { transform: translateY(0) scale(1); }
          50% { transform: translateY(-8px) scale(1.05); }
          100% { transform: translateY(0) scale(1); }
        }
        .wc-floating-icon {
          animation: float-up-down 5s ease-in-out infinite;
        }
      `}</style>
      <section aria-label="Why Choose Us" style={{ fontFamily: "'Segoe UI', sans-serif", position: "relative", overflow: "hidden" }}>

        {/* Floating doctor signs for Indian/Hindi touch */}
        <div className="wc-floating-icon" style={{ position: "absolute", top: "10%", left: "8%", fontSize: "28px", color: "rgba(255, 153, 51, 0.15)", pointerEvents: "none" }}>⚕</div>
        <div className="wc-floating-icon" style={{ position: "absolute", top: "25%", right: "10%", fontSize: "32px", color: "rgba(18, 136, 7, 0.15)", pointerEvents: "none" }}>✚</div>

        {/* ── TOP: White intro block ── */}
        <div className="wc-top-pad" style={{ backgroundColor: "#ffffff", padding: "56px 24px 120px", textAlign: "center", position: "relative" }}>

          {/* Dot pattern top-right */}
          <div style={{
            position: "absolute", top: 16, right: 40,
            display: "grid", gridTemplateColumns: "repeat(5, 1fr)", gap: 5,
            pointerEvents: "none",
          }}>
            {Array.from({ length: 20 }).map((_, i) => (
              <div key={i} style={{ width: 4, height: 4, borderRadius: "50%", backgroundColor: "#b8d0f0" }} />
            ))}
          </div>

          {/* Play icon wrapped in link to YouTube */}
          <a
            href="https://www.youtube.com/watch?v=Mx3sZxhFJ_E"
            target="_blank"
            rel="noopener noreferrer"
            title="Watch hospital video on YouTube"
            style={{ display: "block", textDecoration: "none", width: 52, height: 52, margin: "0 auto 20px" }}
          >
            <div style={{ position: "relative", width: 52, height: 52 }}>
              <div style={{
                position: "absolute", inset: -7, borderRadius: "50%",
                border: "1.5px solid rgba(13,27,75,0.15)",
                boxShadow: "0 0 12px rgba(39, 131, 227, 0.2)"
              }} />
              <div style={{
                width: 52, height: 52, borderRadius: "50%",
                border: "2px solid #FF9933", // Saffron border
                display: "flex", alignItems: "center", justifyContent: "center",
                backgroundColor: "#ffffff",
                transition: "transform 0.2s"
              }}
                onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.1)"}
                onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <FaPlay style={{ color: "#FF9933", fontSize: 16, marginLeft: 3 }} />
              </div>
            </div>
          </a>

          {/* Heading */}
          <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 30, lineHeight: 1.35, margin: "0 0 12px" }}>
            हम प्रदान करते हैं सर्वश्रेष्ठ चिकित्सा{" "}
            <span style={{
              display: "inline-block",
              border: "2px solid #128807",
              color: "#128807",
              padding: "1px 12px",
              fontWeight: 900,
            }}>
              स्वास्थ्य सेवाएं
            </span>
          </h2>

          {/* Subtext */}
          <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.7, maxWidth: 420, margin: "0 auto" }}>
            नमस्ते! चिकित्सा क्षेत्र में भविष्य-उन्मुख स्वास्थ्य सेवाओं, तकनीकों और अनुभवी विशेषज्ञों के साथ हम आपकी उत्तम सेवा के लिए सदैव तत्पर हैं।
          </p>

          {/* Floating CTA card */}
          <div className="wc-floating-card" style={{
            boxShadow: "0 8px 32px rgba(0,0,0,0.1)",
          }}>
            <Link href="/contact" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "#FF9933", color: "#fff",
              padding: "13px 32px", borderRadius: 24,
              fontWeight: 700, fontSize: 14, textDecoration: "none",
              transition: "background 0.2s",
            }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e07f24"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#FF9933"}
            >
              संपर्क करें | Contact »
            </Link>
            <Link href="/timetable" style={{
              display: "inline-flex", alignItems: "center", gap: 8,
              backgroundColor: "#128807", color: "#fff",
              padding: "13px 32px", borderRadius: 24,
              fontWeight: 700, fontSize: 14, textDecoration: "none",
              transition: "background 0.2s",
            }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#0f7206"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#128807"}
            >
              समय सारणी | Timetable »
            </Link>
          </div>
        </div>

        {/* ── BOTTOM: Dark navy block ── */}
        <div style={{ backgroundColor: "#0d1b4b", position: "relative", overflow: "hidden" }}>

          {/* Shield watermark */}
          <div style={{
            position: "absolute", bottom: 50, right: 40,
            width: 160, height: 160, opacity: 0.13,
            border: "12px solid #ffffff", borderRadius: "50% 50% 50% 50% / 40% 40% 60% 60%",
            pointerEvents: "none",
          }} />
          <div style={{
            position: "absolute", bottom: 78, right: 94,
            color: "#ffffff", fontSize: 52, opacity: 0.13,
            pointerEvents: "none", userSelect: "none", lineHeight: 1,
          }}>+</div>

          <div className="wc-bottom-grid">

            {/* ── LEFT: eyebrow + heading + doctor image ── */}
            <div style={{ display: "flex", flexDirection: "column" }}>
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 2, backgroundColor: "#FF9933" }} />
                <span style={{ color: "#FF9933", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  हमारी विशेषताएं | Our Features
                </span>
              </div>
              <h2 style={{ color: "#ffffff", fontWeight: 900, fontSize: 28, lineHeight: 1.3, margin: "0 0 32px" }}>
                सर्वश्रेष्ठ चिकित्सा समाधान<br />और निरंतर सेवा
              </h2>
              {/* Doctor image */}
              <div style={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
                <img
                  src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80"
                  alt="Medical team"
                  style={{
                    width: "100%", maxWidth: 340, display: "block",
                    objectFit: "cover",
                    borderRadius: "8px 8px 0 0", paddingBottom: 0,
                    maxHeight: 380,
                  }}
                />
              </div>
            </div>

            {/* ── RIGHT: body + features ── */}
            <div style={{ paddingTop: 4, paddingBottom: 48 }}>
              <p style={{ color: "rgba(200,220,255,0.8)", fontSize: 13, lineHeight: 1.8, margin: "0 0 32px" }}>
                हम भारत के अग्रणी चिकित्सकों और आधुनिक तकनीकों के साथ मिलकर काम करते हैं ताकि प्रत्येक नागरिक को सुरक्षित और उत्तम स्वास्थ्य सेवा मिल सके।
              </p>
              {FEATURES.map(({ Icon, title, desc }, i) => (
                <div key={title}>
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "18px 0" }}>
                    <div style={{
                      width: 46, height: 46, borderRadius: "50%",
                      backgroundColor: "#1a3b8c",
                      border: "2px solid rgba(39,131,227,0.4)",
                      display: "flex", alignItems: "center", justifyContent: "center",
                      flexShrink: 0,
                    }}>
                      <Icon style={{ color: "#60a5fa", fontSize: 19 }} />
                    </div>
                    <div>
                      <h4 style={{ color: "#ffffff", fontWeight: 800, fontSize: 15, margin: "0 0 5px" }}>
                        {title}
                      </h4>
                      <p style={{ color: "rgba(200,220,255,0.65)", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                        {desc}
                      </p>
                    </div>
                  </div>
                  {i < FEATURES.length - 1 && (
                    <div style={{ height: 1, backgroundColor: "rgba(255,255,255,0.08)" }} />
                  )}
                </div>
              ))}
            </div>

          </div>

          {/* ── Saffron/Tricolor footer strip ── */}
          <div style={{ backgroundColor: "#128807", position: "relative", zIndex: 1, marginTop: 48 }}>
            <div className="wc-footer-inner">
              <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
                <div style={{ width: 3, height: 38, backgroundColor: "#FF9933", borderRadius: 2, flexShrink: 0 }} />
                <div>
                  <p style={{ color: "#ffffff", fontWeight: 800, fontSize: 15, margin: "0 0 2px" }}>
                    विशेषज्ञ सहयोग दल से संपर्क करें | Support Team
                  </p>
                  <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 12, margin: 0 }}>
                    आपके स्वास्थ्य की गुणवत्ता सुनिश्चित करना हमारा मुख्य ध्येय है
                  </p>
                </div>
              </div>
              <Link href="/contact" style={{
                display: "inline-flex", alignItems: "center", gap: 6,
                backgroundColor: "#ffffff", color: "#0d1b4b",
                padding: "10px 22px",
                fontWeight: 700, fontSize: 13, textDecoration: "none",
                borderRadius: 4,
                whiteSpace: "nowrap",
              }}>
                संपर्क करें | Contact Now »
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}