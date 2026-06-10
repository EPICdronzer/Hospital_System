"use client";

import Link from "next/link";
import { FaPlay, FaMedkit, FaTint, FaHeartbeat } from "react-icons/fa";

const FEATURES = [
  {
    Icon: FaMedkit,
    title: "Medical Service",
    desc: "Lorem Ipsum is simply dummy text of the printing and Lorem bean the industry's.",
  },
  {
    Icon: FaTint,
    title: "Blood & Check",
    desc: "Lorem Ipsum is simply dummy text of the printing and Lorem bean the industry's.",
  },
  {
    Icon: FaHeartbeat,
    title: "Heart-Beat",
    desc: "Lorem Ipsum is simply dummy text of the printing and Lorem bean the industry's.",
  },
];

export default function WhyChoose() {
  return (
    <section aria-label="Why Choose Us" style={{ fontFamily: "'Segoe UI', sans-serif" }}>

      {/* ── TOP: White intro block ── */}
      {/* paddingBottom is large to make room for the card that overlaps down into navy */}
      <div style={{ backgroundColor: "#ffffff", padding: "56px 24px 120px", textAlign: "center", position: "relative" }}>

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

        {/* Play icon with double ring */}
        <div style={{ position: "relative", width: 52, height: 52, margin: "0 auto 20px" }}>
          <div style={{
            position: "absolute", inset: -7, borderRadius: "50%",
            border: "1.5px solid rgba(13,27,75,0.15)",
          }} />
          <div style={{
            width: 52, height: 52, borderRadius: "50%",
            border: "2px solid #0d1b4b",
            display: "flex", alignItems: "center", justifyContent: "center",
          }}>
            <FaPlay style={{ color: "#0d1b4b", fontSize: 16, marginLeft: 3 }} />
          </div>
        </div>

        {/* Heading */}
        <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 30, lineHeight: 1.35, margin: "0 0 12px" }}>
          We Provide Medical This Services{" "}
          <span style={{
            display: "inline-block",
            border: "2px solid #2783e3",
            color: "#2783e3",
            padding: "1px 12px",
            fontWeight: 900,
          }}>
            Health
          </span>
          <br />
          Who Generally Alone
        </h2>

        {/* Subtext */}
        <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.7, maxWidth: 380, margin: "0 auto 0" }}>
          We are privileged to work with hundreds of future-thinking medical,
          including many of the world's top hardware, software.
        </p>

        {/* ── Floating card: sits at bottom, half overlaps into navy below ── */}
        <div style={{
          position: "absolute",
          bottom: -44,           /* negative = half the card height, pulls it down into navy */
          left: "50%",
          transform: "translateX(-50%)",
          width: "58%",
          maxWidth: 720,
          backgroundColor: "#ffffff",
          padding: "26px 40px",
          display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap",
          zIndex: 10,
        }}>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            backgroundColor: "#2783e3", color: "#fff",
            padding: "13px 32px", borderRadius: 24,
            fontWeight: 700, fontSize: 14, textDecoration: "none",
          }}>
            Contact Now »
          </Link>
          <Link href="/timetable" style={{
            display: "inline-flex", alignItems: "center", gap: 8,
            backgroundColor: "#0d1b4b", color: "#fff",
            padding: "13px 32px", borderRadius: 24,
            fontWeight: 700, fontSize: 14, textDecoration: "none",
          }}>
            See Time Table »
          </Link>
        </div>
      </div>

      {/* ── BOTTOM: Dark navy block ── */}
      <div style={{ backgroundColor: "#0d1b4b", position: "relative", overflow: "hidden" }}>

        {/* Shield watermark bottom-right */}
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

        <div style={{
          maxWidth: 1200, margin: "0 auto",
          padding: "96px 40px 0",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 48,
          position: "relative", zIndex: 1,
        }}>

          {/* ── LEFT COLUMN: eyebrow + heading + doctors image ── */}
          <div style={{ display: "flex", flexDirection: "column" }}>

            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, backgroundColor: "#2783e3" }} />
              <span style={{ color: "#2783e3", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                Our Choose Us
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ color: "#ffffff", fontWeight: 900, fontSize: 28, lineHeight: 1.3, margin: "0 0 32px" }}>
              More Than Working Now<br />Solution Medical.
            </h2>

            {/* Doctors image — sits at bottom of left col, overflows section bottom */}
            <div style={{ flex: 1, display: "flex", alignItems: "flex-end" }}>
              <img
                src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=600&q=80"
                alt="Medical team"
                style={{ width: "100%", maxWidth: 340, display: "block", objectFit: "cover", borderRadius: "8px", paddingBottom: 48 }}
                onError={(e) => {
                  e.currentTarget.style.display = "none";
                  document.getElementById("doctor-fallback").style.display = "flex";
                }}
              />
              <div id="doctor-fallback" style={{
                display: "none", width: 280, height: 260,
                background: "rgba(255,255,255,0.05)", 
                alignItems: "center", justifyContent: "center",
                color: "rgba(255,255,255,0.3)", fontSize: 13,
                marginBottom: -4,
              }}>
                [ Doctors Image ]
              </div>
            </div>
          </div>

          {/* ── RIGHT COLUMN: body text + 3 features ── */}
          <div style={{ paddingTop: 4, paddingBottom: 48 }}>

            {/* Body paragraph */}
            <p style={{ color: "rgba(200,220,255,0.8)", fontSize: 13, lineHeight: 1.8, margin: "0 0 32px" }}>
              We are privileged to work with hundreds of future-thinking medical, including many
              of the world's top hardware, software, and brands — feel safe and comfortable in establishing.
            </p>

            {/* Feature rows */}
            {FEATURES.map(({ Icon, title, desc }, i) => (
              <div key={title}>
                <div style={{ display: "flex", gap: 16, alignItems: "flex-start", padding: "18px 0" }}>
                  {/* Icon circle */}
                  <div style={{
                    width: 46, height: 46, borderRadius: "50%",
                    backgroundColor: "#1a3b8c",
                    border: "2px solid rgba(39,131,227,0.4)",
                    display: "flex", alignItems: "center", justifyContent: "center",
                    flexShrink: 0,
                  }}>
                    <Icon style={{ color: "#60a5fa", fontSize: 19 }} />
                  </div>
                  {/* Text */}
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

        {/* ── Teal footer strip ── */}
        <div style={{ backgroundColor: "#2783e3", position: "relative", zIndex: 1 }}>
          <div style={{
            maxWidth: 1200, margin: "0 auto", padding: "18px 40px",
            display: "flex", alignItems: "center", justifyContent: "space-between",
            flexWrap: "wrap", gap: 16,
          }}>
          <div style={{ display: "flex", gap: 14, alignItems: "center" }}>
            <div style={{ width: 3, height: 38, backgroundColor: "#ffffff", borderRadius: 2, flexShrink: 0 }} />
            <div>
              <p style={{ color: "#ffffff", fontWeight: 800, fontSize: 15, margin: "0 0 2px" }}>
                Meet The Team Support
              </p>
              <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 12, margin: 0 }}>
                For us, there are because a quality
              </p>
            </div>
          </div>
          <Link href="/contact" style={{
            display: "inline-flex", alignItems: "center", gap: 6,
            backgroundColor: "#ffffff", color: "#0d1b4b",
            padding: "10px 22px", 
            fontWeight: 700, fontSize: 13, textDecoration: "none",
            whiteSpace: "nowrap",
          }}>
            Contact Now »
          </Link>
          </div>
        </div>

      </div>
    </section>
  );
}