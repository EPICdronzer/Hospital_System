"use client";

import { useState, useRef, useEffect } from "react";
import { FaChevronLeft, FaChevronRight } from "react-icons/fa";

const IMAGES = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80",
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=600&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80"
];

export default function Gallery() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / (track.clientWidth || 320));
    setCurrent(index);
  };

  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const timer = setInterval(() => {
      const track = trackRef.current;
      if (!track) return;

      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: 292, behavior: "smooth" }); // item width 280 + gap 12
      }
    }, 3500);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        .gallery-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          grid-template-rows: 220px 220px;
          gap: 12px;
        }
        @media (max-width: 767px) {
          .gallery-grid {
            grid-template-columns: 1fr !important;
            grid-template-rows: auto !important;
          }
          .gallery-grid > div {
            grid-column: 1 / 2 !important;
            height: 200px !important;
          }
        }
        @media (min-width: 768px) and (max-width: 1023px) {
          .gallery-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            grid-template-rows: 200px 200px 200px !important;
          }
          .gallery-big-left  { grid-column: 1 / 3 !important; }
          .gallery-small-right { grid-column: 1 / 2 !important; }
          .gallery-small-mid   { grid-column: 2 / 3 !important; }
          .gallery-big-right   { grid-column: 1 / 3 !important; }
        }
        .gallery-img {
          width: 100%;
          height: 100%;
          object-fit: cover;
          display: block;
          transition: transform 0.4s ease;
        }
        .gallery-item {
          overflow: hidden;
          border-radius: 4px;
        }
        .gallery-item:hover .gallery-img {
          transform: scale(1.04);
        }

        .gallery-desktop { display: block; }
        .gallery-mobile  { display: none; }

        @media (max-width: 767px) {
          .gallery-desktop { display: none !important; }
          .gallery-mobile  { display: block !important; }
        }

        .gallery-mobile-track {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: 12px;
          padding: 0 16px 12px;
        }
        .gallery-mobile-track::-webkit-scrollbar { display: none; }
        .gallery-mobile-track > * {
          scroll-snap-align: start;
          flex: 0 0 88vw;
          max-width: 320px;
          height: 240px;
          border-radius: 6px;
          overflow: hidden;
        }
      `}</style>

      <section
        aria-label="Our Gallery"
        style={{ backgroundColor: "#ffffff", padding: "80px 0", position: "relative", overflow: "hidden" }}
      >
        {/* Subtle background watermarks */}
        <div style={{
          position: "absolute", top: 16, left: 20, zIndex: 0,
          opacity: 0.05, fontSize: 140, color: "#0d1b4b", lineHeight: 1,
          pointerEvents: "none", userSelect: "none",
        }}>⚕</div>
        <div style={{
          position: "absolute", bottom: 20, right: 20, zIndex: 0,
          opacity: 0.05, fontSize: 140, color: "#0d1b4b", lineHeight: 1,
          pointerEvents: "none", userSelect: "none",
        }}>✚</div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p
              style={{
                color: "#2783e3",
                fontWeight: 700,
                fontSize: 13,
                textTransform: "uppercase",
                letterSpacing: "0.1em",
                marginBottom: 8,
              }}
            >
              Visual Highlights
            </p>
            <h2
              style={{
                color: "#0d1b4b",
                fontWeight: 900,
                fontSize: 32,
                margin: 0,
              }}
            >
              Our Galleries
            </h2>
          </div>

          {/* Gallery grid — Desktop */}
          <div className="gallery-desktop">
            <div className="gallery-grid">
              {/* Row 1: big left (col 1-2) */}
              <div className="gallery-item gallery-big-left" style={{ gridColumn: "1 / 3" }}>
                <img
                  className="gallery-img"
                  src={IMAGES[0]}
                  alt="Medical team"
                />
              </div>
              {/* Row 1: small right (col 3) */}
              <div className="gallery-item gallery-small-right" style={{ gridColumn: "3 / 4" }}>
                <img
                  className="gallery-img"
                  src={IMAGES[1]}
                  alt="Doctor"
                />
              </div>

              {/* Row 2: small left (col 1) */}
              <div className="gallery-item" style={{ gridColumn: "1 / 2" }}>
                <img
                  className="gallery-img"
                  src={IMAGES[2]}
                  alt="Doctor with patient"
                />
              </div>
              {/* Row 2: small middle (col 2) */}
              <div className="gallery-item gallery-small-mid" style={{ gridColumn: "2 / 3" }}>
                <img
                  className="gallery-img"
                  src={IMAGES[3]}
                  alt="Medical professional"
                />
              </div>
              {/* Row 2: small right (col 3) */}
              <div className="gallery-item gallery-big-right" style={{ gridColumn: "3 / 4" }}>
                <img
                  className="gallery-img"
                  src={IMAGES[4]}
                  alt="Medical staff"
                />
              </div>
            </div>
          </div>

          {/* Gallery Carousel — Mobile */}
          <div className="gallery-mobile">
            {/* Prev/Next arrows */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: "0 16px 10px" }}>
              <button
                onClick={() => {
                  const t = trackRef.current;
                  if (t) t.scrollBy({ left: -320, behavior: "smooth" });
                }}
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  backgroundColor: "#0d1b4b", border: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", cursor: "pointer",
                }}
                aria-label="Previous image"
              >
                <FaChevronLeft size={13} />
              </button>
              <button
                onClick={() => {
                  const t = trackRef.current;
                  if (t) t.scrollBy({ left: 320, behavior: "smooth" });
                }}
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  backgroundColor: "#2783e3", border: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", cursor: "pointer",
                }}
                aria-label="Next image"
              >
                <FaChevronRight size={13} />
              </button>
            </div>
            <div className="gallery-mobile-track" ref={trackRef} onScroll={handleScroll}>
              {IMAGES.map((src, i) => (
                <div key={i} className="gallery-item">
                  <img
                    className="gallery-img"
                    src={src}
                    alt={`Gallery ${i + 1}`}
                  />
                </div>
              ))}
            </div>
            {/* Dot indicators */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
              {IMAGES.map((_, i) => (
                <div
                  key={i}
                  style={{
                    width: 8, height: 8, borderRadius: "50%",
                    backgroundColor: i === current ? "#2783e3" : "#d1dff5",
                    transition: "background 0.2s",
                  }}
                />
              ))}
            </div>
          </div>

        </div>
      </section>
    </>
  );
}
