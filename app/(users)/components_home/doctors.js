"use client";

import { useState } from "react";
import Link from "next/link";
import { FaFacebookF, FaPinterestP, FaTwitter, FaInstagram, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const DOCTORS = [
  { id: "james-wilson",   name: "Dr. James Wilson",   specialty: "Cardiologist",       img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" },
  { id: "samuel-brooks",  name: "Dr. Samuel Brooks",  specialty: "General Physician",   img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80" },
  { id: "norma-pedric",   name: "Dr. Norma Pedric",   specialty: "Neurologist",         img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" },
  { id: "robert-chen",    name: "Dr. Robert Chen",    specialty: "Orthopedic Surgeon",  img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" },
  { id: "aisha-khan",     name: "Dr. Aisha Khan",     specialty: "Dermatologist",       img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80" },
  { id: "michael-torres", name: "Dr. Michael Torres", specialty: "Oncologist",          img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80" },
  { id: "priya-sharma",   name: "Dr. Priya Sharma",   specialty: "Gynecologist",        img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80" },
  { id: "david-lee",      name: "Dr. David Lee",      specialty: "Psychiatrist",        img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80" },
];

const SOCIALS    = [FaFacebookF, FaPinterestP, FaTwitter, FaInstagram];
const VISIBLE    = 4;
const CARD_HEIGHT = 320;
const TOTAL_PAGES = Math.ceil(DOCTORS.length / VISIBLE);

export default function Doctors() {
  const [hoveredIndex, setHoveredIndex] = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating]       = useState(false);
  const [direction, setDirection]       = useState("left"); // "left" | "right"

  const startIndex    = currentSlide * VISIBLE;
  const visibleDoctors = DOCTORS.slice(startIndex, startIndex + VISIBLE);

  const goToSlide = (next, dir = "left") => {
    if (animating || next === currentSlide) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(next);
      setHoveredIndex(null);
      setAnimating(false);
    }, 380);
  };

  const prev = () => goToSlide(Math.max(0, currentSlide - 1), "right");
  const next = () => goToSlide(Math.min(TOTAL_PAGES - 1, currentSlide + 1), "left");

  return (
    <>
      {/* Keyframe styles injected once */}
      <style>{`
        @keyframes slideInLeft  { from { opacity:0; transform:translateX(60px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInRight { from { opacity:0; transform:translateX(-60px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideOutLeft  { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(-60px); } }
        @keyframes slideOutRight { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(60px);  } }
        .cards-enter-left  { animation: slideInLeft  0.38s ease forwards; }
        .cards-enter-right { animation: slideInRight 0.38s ease forwards; }
        .cards-exit-left   { animation: slideOutLeft  0.38s ease forwards; }
        .cards-exit-right  { animation: slideOutRight 0.38s ease forwards; }
      `}</style>

      <section aria-label="Our Expert Doctors" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
        <div style={{ position: "relative" }}>

          {/* White top */}
          <div style={{ backgroundColor: "#ffffff", paddingTop: 64 }}>
            <div style={{ textAlign: "center", marginBottom: 48 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 32, height: 2, backgroundColor: "#2783e3" }} />
                <span style={{ color: "#2783e3", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  Our Team Member
                </span>
                <div style={{ width: 32, height: 2, backgroundColor: "#2783e3" }} />
              </div>
              <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 34, lineHeight: 1.25, margin: 0 }}>
                Meet Our Specialist This<br />Doctor Meeting
              </h2>
            </div>
          </div>

          {/* Navy bottom half bg */}
          <div style={{
            backgroundColor: "#0d1b4b",
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "50%", zIndex: 0,
          }} />

          {/* Cards row — overflow hidden so slide animation is clipped */}
          <div style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "0 24px", overflow: "hidden" }}>
            <div
              className={
                animating
                  ? direction === "left" ? "cards-exit-left" : "cards-exit-right"
                  : direction === "left" ? "cards-enter-left" : "cards-enter-right"
              }
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 8,
              }}
            >
              {visibleDoctors.map((doc, i) => {
                const globalIndex = startIndex + i;
                const isHovered   = hoveredIndex === globalIndex;
                return (
                  <Link
                    key={`${currentSlide}-${i}`}
                    href={`/doctor/${doc.id}`}
                    onMouseEnter={() => setHoveredIndex(globalIndex)}
                    onMouseLeave={() => setHoveredIndex(null)}
                    style={{ cursor: "pointer", height: CARD_HEIGHT, position: "relative", display: "block", textDecoration: "none" }}
                  >
                    {/* Photo layer */}
                    <div style={{
                      position: "absolute", inset: 0, overflow: "hidden",
                      opacity: isHovered ? 0 : 1,
                      transition: "opacity 0.3s ease",
                    }}>
                      <img
                        src={doc.img} alt={doc.name}
                        style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top", display: "block" }}
                      />
                    </div>

                    {/* Blue info layer */}
                    <div style={{
                      position: "absolute", inset: 0,
                      backgroundColor: "#2783e3",
                      padding: "28px 20px 24px",
                      textAlign: "center",
                      display: "flex", flexDirection: "column",
                      alignItems: "center", justifyContent: "center",
                      overflow: "hidden",
                      opacity: isHovered ? 1 : 0,
                      transition: "opacity 0.3s ease",
                    }}>
                      {/* Navy triangle top-right */}
                      <div style={{
                        position: "absolute", top: 0, right: 0,
                        width: 0, height: 0, borderStyle: "solid",
                        borderWidth: "0 88px 88px 0",
                        borderColor: "transparent #0d1b4b transparent transparent",
                      }} />

                      {/* Circle photo */}
                      <div style={{
                        width: 108, height: 108, borderRadius: "50%",
                        border: "4px solid #ffffff", overflow: "hidden",
                        marginBottom: 16, flexShrink: 0,
                      }}>
                        <img src={doc.img} alt={doc.name}
                          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }} />
                      </div>

                      <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: 16, margin: "0 0 4px" }}>{doc.name}</h3>
                      <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, margin: "0 0 16px" }}>{doc.specialty}</p>

                      <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
                        {SOCIALS.map((Icon, j) => (
                          <Link key={j} href="#" style={{
                            width: 32, height: 32, borderRadius: "50%",
                            backgroundColor: "#ffffff",
                            display: "flex", alignItems: "center", justifyContent: "center",
                            color: "#0d1b4b", textDecoration: "none", fontSize: 12,
                          }}>
                            <Icon />
                          </Link>
                        ))}
                      </div>
                    </div>
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Navy bottom: dots + arrows + See Timetable */}
          <div style={{ backgroundColor: "#0d1b4b", paddingTop: 32, paddingBottom: 48 }}>
            <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16, flexWrap: "wrap" }}>

              <button onClick={prev} disabled={currentSlide === 0 || animating} style={{
                width: 36, height: 36, borderRadius: "50%",
                backgroundColor: currentSlide === 0 ? "rgba(255,255,255,0.1)" : "#2783e3",
                border: "none", cursor: currentSlide === 0 ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: 13, transition: "background 0.2s",
              }}>
                <FaChevronLeft />
              </button>

              <div style={{ display: "flex", gap: 10 }}>
                {Array.from({ length: TOTAL_PAGES }).map((_, i) => (
                  <button key={i} onClick={() => goToSlide(i, i > currentSlide ? "left" : "right")} style={{
                    width: 14, height: 14, borderRadius: "50%",
                    backgroundColor: i === currentSlide ? "#2783e3" : "rgba(255,255,255,0.35)",
                    border: "none", cursor: "pointer", padding: 0,
                    transition: "background 0.2s",
                  }} />
                ))}
              </div>

              <button onClick={next} disabled={currentSlide === TOTAL_PAGES - 1 || animating} style={{
                width: 36, height: 36, borderRadius: "50%",
                backgroundColor: currentSlide === TOTAL_PAGES - 1 ? "rgba(255,255,255,0.1)" : "#2783e3",
                border: "none", cursor: currentSlide === TOTAL_PAGES - 1 ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: 13, transition: "background 0.2s",
              }}>
                <FaChevronRight />
              </button>

            </div>

            {/* See Time Table CTA */}
            <div style={{ textAlign: "center", marginTop: 28 }}>
              <Link
                href="/timetable"
                style={{
                  display: "inline-flex", alignItems: "center", gap: 8,
                  backgroundColor: "#2783e3", color: "#ffffff",
                  padding: "11px 28px", borderRadius: 24,
                  fontWeight: 700, fontSize: 13.5, textDecoration: "none",
                  boxShadow: "0 4px 14px rgba(39,131,227,0.3)",
                  transition: "background 0.2s",
                }}
                onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1a6fd0"}
                onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2783e3"}
              >
                See Time Table »
              </Link>
            </div>
          </div>

        </div>
      </section>
    </>
  );
}