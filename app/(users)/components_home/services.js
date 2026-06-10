"use client";

import { FaHeadset, FaUserMd, FaCheckCircle, FaPlay, FaUsers, FaPhoneAlt, FaChartLine, FaTrophy } from "react-icons/fa";
import Link from "next/link";

const STATS = [
  { Icon: FaUsers,     value: "567+",  label: "Active Clients" },
  { Icon: FaPhoneAlt,  value: "23K+",  label: "Team Support" },
  { Icon: FaChartLine, value: "241+",  label: "Projects Completed" },
  { Icon: FaTrophy,    value: "16K+",  label: "Award Winner" },
];

export default function AboutUs() {
  return (
    <section aria-label="About Us" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── Main About Row ── */}
      <div style={{ backgroundColor: "#ffffff", padding: "80px 0 60px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", display: "flex", gap: 64, alignItems: "center", flexWrap: "wrap" }}>

          {/* LEFT: Image block */}
          <div style={{ position: "relative", flex: "0 0 auto", width: 390 }}>
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
              {/* Placeholder — replace src with actual image */}
              <img
                src="https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=800&q=80"
                alt="Doctors reviewing patient information"
                style={{ width: "100%", height: 460, objectFit: "cover", display: "block" }}
                onError={(e) => {
                  e.target.style.display = "none";
                  e.target.nextSibling.style.display = "flex";
                }}
              />
              {/* Fallback placeholder */}
              <div style={{
                display: "none", width: "100%", height: 460,
                background: "linear-gradient(135deg,#dbe8f8 0%,#b8cfee 100%)",
                alignItems: "center", justifyContent: "center", color: "#6b93c4", fontSize: 14,
              }}>
                [ Doctor Photo ]
              </div>
            </div>

            {/* Stethoscope image — decorative, bottom-left */}
            <div style={{
              position: "absolute", bottom: -30, left: -40, zIndex: 0,
              opacity: 0.55, fontSize: 90, color: "#c5d8ef", lineHeight: 1,
              pointerEvents: "none", userSelect: "none",
            }}>
              ⚕
            </div>

            {/* Badge: 26+ Experience */}
            <div style={{
              position: "absolute", bottom: 20, right: -16, zIndex: 2,
              width: 96, height: 96, borderRadius: "50%",
              backgroundColor: "#0d1b4b",
              display: "flex", flexDirection: "column", alignItems: "center", justifyContent: "center",
              boxShadow: "0 4px 18px rgba(13,27,75,0.35)",
            }}>
              <span style={{ color: "#fff", fontWeight: 900, fontSize: 22, lineHeight: 1 }}>26+</span>
              <span style={{ color: "rgba(180,200,240,0.85)", fontSize: 11, marginTop: 3 }}>Experience</span>
            </div>
          </div>

          {/* RIGHT: Content */}
          <div style={{ flex: 1, minWidth: 280 }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, backgroundColor: "#2783e3" }} />
              <span style={{ color: "#2783e3", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                Our About Us
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 32, lineHeight: 1.25, margin: "0 0 16px" }}>
              More Than 26+ Years About<br />Provide Medical.
            </h2>

            {/* Body */}
            <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.75, margin: "0 0 28px", maxWidth: 460 }}>
              We are privileged to work with hundreds of future-thinking medical professionals,
              including many of the world's top healthcare brands — feel safe and comfortable
              in establishing your care with us.
            </p>

            {/* Feature rows */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16, marginBottom: 24 }}>

              {/* Client Support */}
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", flex: 1, padding: "12px 16px", backgroundColor: "#f5f7fb", borderRadius: 4 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#0d1b4b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <FaHeadset style={{ color: "#fff", fontSize: 18 }} />
                  </div>
                  <span style={{ color: "#0d1b4b", fontWeight: 700, fontSize: 15 }}>Client Support</span>
                </div>
                {/* Thumbnail */}
                <div style={{ width: 90, height: 64, borderRadius: 4, overflow: "hidden", flexShrink: 0, backgroundColor: "#d1dff5" }}>
                  <img src="https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=400&q=80" alt="Client support" style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { e.target.style.display = "none"; }} />
                </div>
              </div>

              {/* Doctor Support */}
              <div style={{ display: "flex", gap: 16, alignItems: "center" }}>
                <div style={{ display: "flex", gap: 12, alignItems: "center", flex: 1, padding: "12px 16px", backgroundColor: "#f5f7fb", borderRadius: 4 }}>
                  <div style={{ width: 40, height: 40, borderRadius: "50%", backgroundColor: "#0d1b4b", display: "flex", alignItems: "center", justifyContent: "center", flexShrink: 0 }}>
                    <FaUserMd style={{ color: "#fff", fontSize: 18 }} />
                  </div>
                  <span style={{ color: "#0d1b4b", fontWeight: 700, fontSize: 15 }}>Doctor Support</span>
                </div>
                {/* Thumbnail */}
                <div style={{ width: 90, height: 64, borderRadius: 4, overflow: "hidden", flexShrink: 0, backgroundColor: "#d1dff5" }}>
                  <img src="https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" alt="Doctor support" style={{ width: "100%", height: "100%", objectFit: "cover" }}
                    onError={(e) => { e.target.style.display = "none"; }} />
                </div>
              </div>
            </div>

            {/* Inline note with read more */}
            <div style={{ display: "flex", alignItems: "flex-start", gap: 10, marginBottom: 32, padding: "12px 16px", borderLeft: "2px solid #e5eaf2" }}>
              <FaCheckCircle style={{ color: "#2783e3", fontSize: 16, marginTop: 2, flexShrink: 0 }} />
              <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                There are many variations of passes available for this medical service.{" "}
                <Link href="/about" style={{ color: "#2783e3", fontWeight: 700, textDecoration: "none" }}>READ MORE +</Link>
              </p>
            </div>

            {/* CTA Buttons */}
            <div style={{ display: "flex", gap: 16, alignItems: "center", flexWrap: "wrap" }}>
              {/* Play button + text → about page */}
              <Link href="/about" style={{
                display: "flex", alignItems: "center", gap: 10,
                textDecoration: "none",
              }}>
                <div style={{
                  width: 44, height: 44, borderRadius: "50%",
                  backgroundColor: "#2783e3",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  boxShadow: "0 0 0 8px rgba(39,131,227,0.15)",
                }}>
                  <FaPlay style={{ color: "#fff", fontSize: 14, marginLeft: 2 }} />
                </div>
                <span style={{ color: "#0d1b4b", fontWeight: 700, fontSize: 14 }}>How We Work</span>
              </Link>

              {/* About More button */}
              <Link href="/about" style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                backgroundColor: "#2783e3", color: "#fff",
                padding: "12px 28px", borderRadius: 4,
                fontWeight: 700, fontSize: 14, textDecoration: "none",
                transition: "background 0.2s",
              }}>
                About More »
              </Link>
            </div>
          </div>

        </div>
      </div>

      {/* ── Stats Counter ── */}
      <div style={{ backgroundColor: "#f5f7fb", padding: "52px 0" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }}>
            {STATS.map(({ Icon, value, label }) => (
              <div key={label} style={{
                textAlign: "center", padding: "28px 16px",
                backgroundColor: "#ffffff", borderRadius: 6,
                boxShadow: "0 1px 6px rgba(0,0,0,0.06)",
              }}>
                {/* Icon circle */}
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
                <p style={{ color: "#6b7280", fontSize: 13, margin: 0, fontWeight: 500 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </section>
  );
}