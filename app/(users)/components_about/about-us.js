"use client";

import { useState } from "react";
import Link from "next/link";
import { FaHeadset, FaUserMd, FaCheckCircle, FaPlay, FaChevronDown, FaEnvelope, FaPhoneAlt, FaMapMarkerAlt, FaRegClock } from "react-icons/fa";

export default function AboutUs() {
  const [expanded, setExpanded] = useState(false);

  const toggleExpand = (e) => {
    e.preventDefault();
    setExpanded(!expanded);
  };

  return (
    <>
      <style>{`
        .abus-main-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 64px;
          align-items: center;
        }
        .abus-support-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 24px;
        }
        .abus-contact-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 24px;
        }
        .abus-img-col {
          position: relative;
          height: 500px;
          display: flex;
          align-items: center;
          justify-content: center;
        }
        @media (max-width: 1023px) {
          .abus-main-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
          .abus-img-col {
            height: 360px !important;
            width: 100%;
          }
        }
        @media (max-width: 767px) {
          .abus-support-grid { grid-template-columns: 1fr !important; }
          .abus-contact-grid { grid-template-columns: 1fr !important; }
          /* Stack images on mobile */
          .abus-img-col {
            height: auto !important;
            display: flex !important;
            flex-direction: column !important;
            gap: 16px !important;
            padding: 0 4px !important;
            overflow: hidden !important;
          }
          .abus-img-abs-top {
            position: static !important;
            width: 100% !important;
            height: 200px !important;
            border-radius: 8px !important;
          }
          .abus-img-abs-bot {
            position: static !important;
            width: 100% !important;
            height: 180px !important;
            border-radius: 8px !important;
            border: none !important;
          }
          .abus-deco-semicircle,
          .abus-deco-dots,
          .abus-deco-badge,
          .abus-deco-howwework {
            display: none !important;
          }
        }
      `}</style>
    <section aria-label="Our About Us" style={{ backgroundColor: "#ffffff", padding: "80px 0", fontFamily: "'Segoe UI', sans-serif", position: "relative", overflow: "hidden" }}>
      {/* Subtle background watermarks */}
      <div style={{
        position: "absolute", top: 16, left: 20, zIndex: 0,
        opacity: 0.05, fontSize: 140, color: "#0d1b4b", lineHeight: 1,
        pointerEvents: "none", userSelect: "none",
      }}>✚</div>
      <div style={{
        position: "absolute", bottom: 20, right: 20, zIndex: 0,
        opacity: 0.05, fontSize: 140, color: "#0d1b4b", lineHeight: 1,
        pointerEvents: "none", userSelect: "none",
      }}>⚕</div>

      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>
        
        {/* Main Row */}
        <div className="abus-main-grid">
          
          {/* LEFT: Image Collage */}
          <div className="abus-img-col">
            
            {/* Left Blue Semi-circle Shape overlay */}
            <div className="abus-deco-semicircle" style={{
              position: "absolute",
              left: -40,
              top: "10%",
              width: 140,
              height: 280,
              border: "25px solid #2783e3",
              borderRight: "none",
              borderTopLeftRadius: 140,
              borderBottomLeftRadius: 140,
              opacity: 0.85,
              zIndex: 0,
              pointerEvents: "none"
            }} />

            {/* Dot Pattern (Bottom-Left of Top Image) */}
            <div className="abus-deco-dots" style={{
              position: "absolute",
              left: 40,
              bottom: 40,
              display: "grid",
              gridTemplateColumns: "repeat(5, 12px)",
              gap: 8,
              zIndex: 0,
              pointerEvents: "none"
            }}>
              {Array.from({ length: 25 }).map((_, i) => (
                <div key={i} style={{ width: 5, height: 5, borderRadius: "50%", backgroundColor: "#cbd5e1" }} />
              ))}
            </div>

            {/* Top-Left Image (Nurses with Tablet) */}
            <div className="abus-img-abs-top" style={{
              position: "absolute",
              left: 40,
              top: 10,
              width: "60%",
              height: "70%",
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 10px 25px rgba(0,0,0,0.1)",
              zIndex: 1
            }}>
              <img 
                src="https://images.unsplash.com/photo-1576765608535-5f04d1e3f289?auto=format&fit=crop&w=600&q=80" 
                alt="Nurses consulting tablet" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Bottom-Right Image (Patient in Bed) */}
            <div className="abus-img-abs-bot" style={{
              position: "absolute",
              right: 10,
              bottom: 10,
              width: "60%",
              height: "55%",
              borderRadius: 4,
              overflow: "hidden",
              boxShadow: "0 12px 30px rgba(0,0,0,0.15)",
              border: "6px solid #ffffff",
              zIndex: 3
            }}>
              <img 
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80" 
                alt="Patient receiving care" 
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Overlapping Badge: 26+ Experience */}
            <div className="abus-deco-badge" style={{
              position: "absolute",
              left: "32%",
              bottom: "34%",
              width: 120,
              height: 120,
              borderRadius: "50%",
              backgroundColor: "#0d1b4b",
              border: "6px solid #ffffff",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              justifyContent: "center",
              boxShadow: "0 6px 20px rgba(13,27,75,0.3)",
              zIndex: 4
            }}>
              <span style={{ color: "#ffffff", fontWeight: 900, fontSize: 26, lineHeight: 1 }}>26+</span>
              <span style={{ color: "#ffffff", fontSize: 10, fontWeight: 700, textTransform: "uppercase", marginTop: 2, letterSpacing: "0.05em" }}>Experience</span>
            </div>

            {/* How We Work Indicator (vertical text + arrow) */}
            <div className="abus-deco-howwework" style={{
              position: "absolute",
              right: "34%",
              top: "40%",
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
              gap: 8,
              zIndex: 5
            }}>
              <span style={{ 
                writingMode: "vertical-rl", 
                textTransform: "capitalize", 
                color: "#0d1b4b", 
                fontWeight: 800, 
                fontSize: 11,
                letterSpacing: "0.1em",
                transform: "rotate(180deg)" 
              }}>
                How We Work
              </span>
              <div style={{
                width: 32,
                height: 32,
                borderRadius: "50%",
                backgroundColor: "#2783e3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 3px 8px rgba(39,131,227,0.4)"
              }}>
                <FaPlay style={{ color: "#ffffff", fontSize: 10, transform: "rotate(-90deg)", marginLeft: 1 }} />
              </div>
            </div>

          </div>

          {/* RIGHT: Text Content */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, backgroundColor: "#2783e3" }} />
              <span style={{ color: "#2783e3", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                OUR ABOUT US
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 36, lineHeight: 1.2, margin: "0 0 16px" }}>
              More Than 26+ Years About<br />Provide Medical.
            </h2>

            {/* Paragraph */}
            <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75, margin: "0 0 28px" }}>
              We are privileged to work with hundreds of future-thinking medial,
              including many of the world's top hardware, software, and brands,
              feel safe and comfortable in establishing.
            </p>

            {/* Support Columns */}
            <div className="abus-support-grid">
              {/* Client Support */}
              <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{
                    width: 36, height: 36, borderRadius: "50%",
                    border: "1.5px solid #2783e3", display: "flex",
                    alignItems: "center", justifyContent: "center", color: "#0d1b4b"
                  }}>
                    <FaHeadset style={{ fontSize: 16 }} />
                  </span>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: 0 }}>Client Support</h4>
                </div>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  But must explain to you medical of and pain was.
                </p>
              </div>

              {/* Doctor Support */}
              <div style={{ borderBottom: "1px solid #e2e8f0", paddingBottom: 16 }}>
                <div style={{ display: "flex", alignItems: "center", gap: 12, marginBottom: 10 }}>
                  <span style={{
                    width: 36, height: 36, borderRadius: "50%",
                    border: "1.5px solid #2783e3", display: "flex",
                    alignItems: "center", justifyContent: "center", color: "#0d1b4b"
                  }}>
                    <FaUserMd style={{ fontSize: 16 }} />
                  </span>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: 0 }}>Doctor Support</h4>
                </div>
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  But must explain to you medical of and pain was.
                </p>
              </div>
            </div>

            {/* Read More Bullet Line */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 32 }}>
              <FaCheckCircle style={{ color: "#0d1b4b", fontSize: 16, marginTop: 2, flexShrink: 0 }} />
              <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                There are many variations of pass available this medical service the team{" "}
                <a href="/contact" onClick={(e) => { e.stopPropagation(); }} style={{ color: "#2783e3", fontWeight: 700, textDecoration: "none" }}>
                  READ MORE +
                </a>
              </p>
            </div>

            {/* CTA Button */}
            <div>
              <button 
                onClick={toggleExpand} 
                style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: 8,
                  backgroundColor: "#2783e3",
                  color: "#ffffff",
                  padding: "13px 32px",
                  borderRadius: 24,
                  fontWeight: 700,
                  fontSize: 14,
                  border: "none",
                  cursor: "pointer",
                  transition: "background 0.2s"
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1667b9"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2783e3"}
              >
                About More <span style={{ fontWeight: 900 }}>»</span>
              </button>
            </div>

          </div>

        </div>

        {/* ── EXPANDABLE TRANSITION CONTACT BLOCK ── */}
        <div style={{
          maxHeight: expanded ? "600px" : "0px",
          opacity: expanded ? 1 : 0,
          transform: expanded ? "translateY(0)" : "translateY(-15px)",
          overflow: "hidden",
          transition: "max-height 0.6s cubic-bezier(0.4, 0, 0.2, 1), opacity 0.6s ease, transform 0.6s ease",
          marginTop: expanded ? 48 : 0,
          backgroundColor: "#f8fafc",
          borderRadius: 8,
          border: expanded ? "1.5px solid #e2e8f0" : "1.5px solid transparent"
        }}>
          <div style={{ padding: "32px 40px" }}>
            <h3 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 22, margin: "0 0 8px" }}>
              Get In Touch With Medilo Support
            </h3>
            <p style={{ color: "#6b7280", fontSize: 13.5, lineHeight: 1.6, margin: "0 0 24px" }}>
              Have questions about our medical programs, specialists, or want to schedule an urgent consultation? Speak directly to our support desk right now.
            </p>
            
            <div className="abus-contact-grid">
              {/* Call Support */}
              <div style={{ backgroundColor: "#ffffff", padding: 20, borderRadius: 6, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#eff6ff", display: "flex", alignItems: "center", justifyCenter: "center", color: "#2783e3", flexShrink: 0, paddingLeft: 10 }}>
                    <FaPhoneAlt style={{ fontSize: 14 }} />
                  </div>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: 0 }}>Call Center</h4>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: 11, color: "#6b7280" }}>Hotline Support 24/7</p>
                <a href="tel:+09969569535" style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 14, textDecoration: "none" }}>+099 695 695 35</a>
              </div>

              {/* Email Support */}
              <div style={{ backgroundColor: "#ffffff", padding: 20, borderRadius: 6, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#eff6ff", display: "flex", alignItems: "center", justifyCenter: "center", color: "#2783e3", flexShrink: 0, paddingLeft: 10 }}>
                    <FaEnvelope style={{ fontSize: 14 }} />
                  </div>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: 0 }}>Email Us</h4>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: 11, color: "#6b7280" }}>Direct Email Desk</p>
                <a href="mailto:support@medilo.com" style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 14, textDecoration: "none" }}>support@medilo.com</a>
              </div>

              {/* Clinic Visit */}
              <div style={{ backgroundColor: "#ffffff", padding: 20, borderRadius: 6, boxShadow: "0 2px 10px rgba(0,0,0,0.04)" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", marginBottom: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#eff6ff", display: "flex", alignItems: "center", justifyCenter: "center", color: "#2783e3", flexShrink: 0, paddingLeft: 10 }}>
                    <FaMapMarkerAlt style={{ fontSize: 14 }} />
                  </div>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: 0 }}>Our Location</h4>
                </div>
                <p style={{ margin: "0 0 4px", fontSize: 11, color: "#6b7280" }}>Main Hospital Block</p>
                <span style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 14 }}>12 Medical Road, NY</span>
              </div>
            </div>

            <div style={{ marginTop: 24, padding: "16px 20px", backgroundColor: "#eff6ff", borderRadius: 6, display: "flex", alignItems: "center", gap: 12 }}>
              <FaRegClock style={{ color: "#2783e3", fontSize: 18 }} />
              <p style={{ color: "#1e3a8a", fontSize: 12.5, fontWeight: 600, margin: 0 }}>
                Our emergency trauma units are fully staffed 24/7/365. For immediate dispatch, call the hotline listed above.
              </p>
            </div>
          </div>
        </div>

      </div>
    </section>
    </>
  );
}
