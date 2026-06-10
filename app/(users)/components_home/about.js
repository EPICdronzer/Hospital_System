"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaCheckCircle, FaPhoneAlt, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const BULLETS = [
  "उच्च योग्य और अनुभवी चिकित्सा पेशेवर (Expert Doctors)",
  "अत्याधुनिक निदान और उपचार सुविधाएं (Modern Facilities)",
  "त्वरित प्रतिक्रिया टीम के साथ 24/7 आपातकालीन सेवा (24/7 Emergency)",
  "सहानुभूतिपूर्ण व्यवहार और रोगी-प्रथम दृष्टिकोण (Compassionate Care)",
];

const IMAGES = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
];

export default function About() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / (track.clientWidth || 300));
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
        .about-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 60px;
          align-items: center;
        }
        .about-img-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 12px;
        }
        @media (max-width: 1023px) {
          .about-grid {
            grid-template-columns: 1fr !important;
            gap: 40px !important;
          }
        }
        @media (max-width: 479px) {
          .about-img-grid {
            grid-template-columns: 1fr !important;
          }
          .about-img-grid > div {
            height: 200px !important;
          }
        }

        .about-desktop-wrapper { display: block; }
        .about-mobile-wrapper  { display: none; }

        @media (max-width: 767px) {
          .about-desktop-wrapper { display: none !important; }
          .about-mobile-wrapper  { display: block !important; max-width: 320px; margin: 0 auto !important; }
        }

        .about-mobile-track {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: 12px;
          padding: 0 16px 12px;
        }
        .about-mobile-track::-webkit-scrollbar { display: none; }
        .about-mobile-track > * {
          scroll-snap-align: start;
          flex: 0 0 88vw;
          max-width: 320px;
          height: 220px;
          border-radius: 6px;
          overflow: hidden;
        }
      `}</style>

      <section
        aria-label="Why Choose Medilo"
        style={{ backgroundColor: "#f5f7fb", padding: "80px 0", position: "relative", overflow: "hidden" }}
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

        <div
          style={{
            maxWidth: 1200,
            margin: "0 auto",
            padding: "0 24px",
            position: "relative",
            zIndex: 1
          }}
        >
          <div className="about-grid">

            {/* LEFT — Image collage */}
            <div>
              {/* Desktop grid */}
              <div className="about-desktop-wrapper">
                <div className="about-img-grid">
                  {IMAGES.map((src, i) => (
                    <div
                      key={i}
                      style={{
                        overflow: "hidden",
                        height: i < 2 ? 220 : 180,
                        borderRadius: 4,
                      }}
                    >
                      <img
                        src={src}
                        alt="Medical staff"
                        style={{
                          width: "100%",
                          height: "100%",
                          objectFit: "cover",
                          display: "block",
                          transition: "transform 0.4s",
                        }}
                        onMouseEnter={(e) => (e.currentTarget.style.transform = "scale(1.04)")}
                        onMouseLeave={(e) => (e.currentTarget.style.transform = "scale(1)")}
                      />
                    </div>
                  ))}
                </div>
              </div>

              {/* Mobile Swipe Slider */}
              <div className="about-mobile-wrapper">
                {/* Prev/Next arrows */}
                <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: "0 16px 10px" }}>
                  <button
                    onClick={() => { const t = trackRef.current; if (t) t.scrollBy({ left: -320, behavior: "smooth" }); }}
                    style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#0d1b4b", border: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: "pointer" }}
                    aria-label="Previous"
                  ><FaChevronLeft size={13} /></button>
                  <button
                    onClick={() => { const t = trackRef.current; if (t) t.scrollBy({ left: 320, behavior: "smooth" }); }}
                    style={{ width: 34, height: 34, borderRadius: "50%", backgroundColor: "#2783e3", border: "none", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff", cursor: "pointer" }}
                    aria-label="Next"
                  ><FaChevronRight size={13} /></button>
                </div>
                <div className="about-mobile-track" ref={trackRef} onScroll={handleScroll}>
                  {IMAGES.map((src, i) => (
                    <div key={i} style={{ overflow: "hidden", borderRadius: 6 }}>
                      <img
                        src={src}
                        alt="Medical staff mobile"
                        style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
                      />
                    </div>
                  ))}
                </div>
                {/* Dots */}
                <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
                  {IMAGES.map((_, i) => (
                    <div key={i} style={{ width: 8, height: 8, borderRadius: "50%", backgroundColor: i === current ? "#2783e3" : "#d1dff5", transition: "background 0.2s" }} />
                  ))}
                </div>
              </div>
            </div>

            {/* RIGHT — Text content */}
            <div>
              <p
                style={{
                  color: "#FF9933", // Tricolor Saffron
                  fontWeight: 700,
                  fontSize: 13,
                  textTransform: "uppercase",
                  letterSpacing: "0.1em",
                  marginBottom: 10,
                }}
              >
                हमारा परिचय | About Us
              </p>
              <h2
                style={{
                  color: "#0d1b4b",
                  fontWeight: 900,
                  fontSize: 32,
                  lineHeight: 1.2,
                  margin: "0 0 18px 0",
                }}
              >
                मरीजों का हमारे डॉक्टरों पर
                <br />
                अटूट विश्वास
              </h2>
              <p
                style={{
                  color: "#6b7280",
                  fontSize: 14,
                  lineHeight: 1.75,
                  margin: "0 0 24px 0",
                }}
              >
                मेडिलो (Medilo) पिछले दो दशकों से भारत में विश्व स्तरीय स्वास्थ्य सेवाएं प्रदान कर रहा है। हमारे चिकित्सकों और नर्सों की समर्पित टीम प्रत्येक रोगी को सर्वोत्तम उपचार सुनिश्चित करने के लिए सदैव तत्पर है।
              </p>

              {/* Bullet list */}
              <ul style={{ listStyle: "none", padding: 0, margin: "0 0 30px 0" }}>
                {BULLETS.map((item) => (
                  <li
                    key={item}
                    style={{
                      display: "flex",
                      alignItems: "flex-start",
                      gap: 10,
                      marginBottom: 12,
                      fontSize: 14,
                      color: "#374151",
                    }}
                  >
                    <FaCheckCircle
                      style={{ color: "#128807", fontSize: 16, flexShrink: 0, marginTop: 2 }} // Tricolor Green
                    />
                    {item}
                  </li>
                ))}
              </ul>

              {/* CTA buttons */}
              <div style={{ display: "flex", alignItems: "center", gap: 16, flexWrap: "wrap" }}>
                <Link
                  href="/about"
                  style={{
                    display: "inline-block",
                    backgroundColor: "#FF9933",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 13,
                    padding: "12px 26px",
                    borderRadius: 4,
                    textDecoration: "none",
                    transition: "background 0.2s",
                  }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e07f24"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#FF9933"}
                >
                  अधिक जानें | Learn More
                </Link>
                <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                  <span
                    style={{
                      width: 40,
                      height: 40,
                      borderRadius: "50%",
                      backgroundColor: "#128807",
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "center",
                    }}
                  >
                    <FaPhoneAlt style={{ color: "#fff", fontSize: 14 }} />
                  </span>
                  <div>
                    <p style={{ margin: 0, fontSize: 11, color: "#6b7280" }}>कॉल करें | Call Now</p>
                    <p style={{ margin: 0, fontWeight: 800, fontSize: 14, color: "#0d1b4b" }}>
                      +91 99695 69535
                    </p>
                  </div>
                </div>
              </div>
            </div>

          </div>
        </div>
      </section>
    </>
  );
}
