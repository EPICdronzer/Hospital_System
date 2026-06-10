"use client";

import { useState } from "react";
import Link from "next/link";
import { FaPlay } from "react-icons/fa";

export default function WatchVideo() {
  const [showVideo, setShowVideo] = useState(false);

  return (
    <section 
      aria-label="Watch Video" 
      style={{ 
        position: "relative",
        backgroundImage: "url('https://images.unsplash.com/photo-1579154261294-a101a257a837?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "120px 0",
        fontFamily: "'Segoe UI', sans-serif"
      }}
    >
      {/* Dark Blue Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(13, 27, 75, 0.9)", // Dark navy overlay matching mockup
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "center" }} className="grid-cols-1 md:grid-cols-2">
          
          {/* LEFT: Play Button */}
          <div style={{ display: "flex", justifyContent: "center", mdJustifyContent: "flex-start" }}>
            <button 
              onClick={() => setShowVideo(true)}
              style={{
                display: "flex",
                alignItems: "center",
                gap: 16,
                background: "none",
                border: "none",
                cursor: "pointer",
                padding: 0
              }}
            >
              <span style={{
                width: 72,
                height: 72,
                borderRadius: "50%",
                backgroundColor: "#2783e3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 0 0 10px rgba(39, 131, 227, 0.25)",
                transition: "transform 0.3s",
                marginLeft: 10
              }}
              onMouseEnter={(e) => e.currentTarget.style.transform = "scale(1.08)"}
              onMouseLeave={(e) => e.currentTarget.style.transform = "scale(1)"}
              >
                <FaPlay style={{ color: "#ffffff", fontSize: 20, marginLeft: 4 }} />
              </span>
              <span style={{ color: "#ffffff", fontWeight: 800, fontSize: 15, textTransform: "uppercase", letterSpacing: "0.05em" }}>
                WATCH VIDEO
              </span>
            </button>
          </div>

          {/* RIGHT: Text Content */}
          <div>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
              <div style={{ width: 28, height: 2, backgroundColor: "#2783e3" }} />
              <span style={{ color: "#2783e3", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                OUR WATCH VIDEO
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ color: "#ffffff", fontWeight: 900, fontSize: 36, lineHeight: 1.2, margin: "0 0 18px" }}>
              Professional Medical Care<br />Measure Medical.
            </h2>

            {/* Paragraph */}
            <p style={{ color: "rgba(255,255,255,0.8)", fontSize: 14, lineHeight: 1.75, margin: "0 0 28px" }}>
              We are privileged to work with hundreds of future-thinking medial,
              including many of the world's top hardware, software, and brands,
              feel safe and comfortable in establishing.
            </p>

            {/* CTA Button */}
            <Link 
              href="/contact" 
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: 8,
                backgroundColor: "#ffffff",
                color: "#0d1b4b",
                padding: "13px 32px",
                borderRadius: 24,
                fontWeight: 700,
                fontSize: 14,
                textDecoration: "none",
                boxShadow: "0 4px 15px rgba(0,0,0,0.15)",
                transition: "all 0.2s"
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#2783e3";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#0d1b4b";
              }}
            >
              Video More <span style={{ fontWeight: 900 }}>»</span>
            </Link>
          </div>

        </div>
      </div>

      {/* Indian Hospital Video Modal Popup */}
      {showVideo && (
        <div 
          onClick={() => setShowVideo(false)}
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(0, 0, 0, 0.85)",
            zIndex: 9999,
            display: "flex",
            alignItems: "center",
            justifyContent: "center",
            padding: 24
          }}
        >
          <div 
            onClick={(e) => e.stopPropagation()}
            style={{
              position: "relative",
              width: "100%",
              maxWidth: 800,
              aspectRatio: "16/9",
              backgroundColor: "#000000",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 10px 40px rgba(0,0,0,0.5)"
            }}
          >
            <button 
              onClick={() => setShowVideo(false)}
              style={{
                position: "absolute",
                top: 12,
                right: 12,
                background: "rgba(255, 255, 255, 0.25)",
                color: "#ffffff",
                border: "none",
                borderRadius: "50%",
                width: 32,
                height: 32,
                cursor: "pointer",
                fontWeight: "bold",
                fontSize: 16,
                zIndex: 10,
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                transition: "background 0.2s"
              }}
              onMouseEnter={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.4)"}
              onMouseLeave={(e) => e.currentTarget.style.background = "rgba(255, 255, 255, 0.25)"}
            >
              ✕
            </button>
            <iframe
              src="https://www.youtube.com/embed/XHOmBV4js_E?autoplay=1"
              title="Indian Hospital Tour Corporate Film"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
              allowFullScreen
            />
          </div>
        </div>
      )}

    </section>
  );
}
