"use client";

import Link from "next/link";

export default function WatchVideo() {
  return (
    <section 
      aria-label="Watch Video" 
      style={{ 
        position: "relative",
        backgroundImage: "url('https://images.unsplash.com/photo-1579154261294-a101a257a837?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center",
        padding: "80px 0",
        fontFamily: "'Segoe UI', sans-serif"
      }}
    >
      <style>{`
        .wv-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 48px;
          align-items: center;
        }
        @media (max-width: 767px) {
          .wv-layout {
            grid-template-columns: 1fr !important;
            gap: 28px !important;
          }
          .wv-video-col {
            order: -1;
          }
          .wv-text-col {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
          }
          .wv-text-col h2 {
            font-size: 26px !important;
          }
          .wv-text-col p {
            text-align: center !important;
          }
          .wv-eyebrow {
            justify-content: center !important;
          }
        }
      `}</style>

      {/* Dark Blue Overlay */}
      <div style={{
        position: "absolute",
        inset: 0,
        backgroundColor: "rgba(13, 27, 75, 0.9)", // Dark navy overlay matching mockup
        zIndex: 0
      }} />

      <div style={{ position: "relative", zIndex: 1, maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        <div className="wv-layout">
          
          {/* LEFT: Embedded Hospital Video */}
          <div className="wv-video-col" style={{ display: "flex", justifyContent: "center", width: "100%" }}>
            <div style={{
              width: "100%",
              maxWidth: 480,
              aspectRatio: "16/9",
              borderRadius: 8,
              overflow: "hidden",
              boxShadow: "0 6px 24px rgba(0,0,0,0.35)",
              border: "3px solid rgba(255,255,255,0.1)"
            }}>
              <iframe
                src="https://www.youtube.com/embed/XHOmBV4js_E"
                title="Indian Hospital Tour Corporate Film"
                width="100%"
                height="100%"
                style={{ border: 0 }}
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              />
            </div>
          </div>

          {/* RIGHT: Text Content */}
          <div className="wv-text-col">
            {/* Eyebrow */}
            <div className="wv-eyebrow" style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 16 }}>
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
              We are privileged to work with hundreds of future-thinking medical,
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
    </section>
  );
}
