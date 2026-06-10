"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import {
  FaFacebookF, FaPinterestP, FaTwitter, FaInstagram,
  FaChevronLeft, FaChevronRight,
} from "react-icons/fa";

const DOCTORS = [
  { id: "jayesh-vyas",      name: "Dr. Jayesh Vyas",      specialty: "हृदय रोग विशेषज्ञ (Cardiologist)",       img: "https://images.unsplash.com/photo-1612349317150-e413f6a5b16d?auto=format&fit=crop&w=400&q=80" },
  { id: "sandeep-banerjee", name: "Dr. Sandeep Banerjee", specialty: "सामान्य चिकित्सक (General Physician)",   img: "https://images.unsplash.com/photo-1537368910025-700350fe46c7?auto=format&fit=crop&w=400&q=80" },
  { id: "nirmala-patel",    name: "Dr. Nirmala Patel",    specialty: "तंत्रिका रोग विशेषज्ञ (Neurologist)",      img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=400&q=80" },
  { id: "rahul-choudhury",  name: "Dr. Rahul Choudhury",  specialty: "हड्डी रोग विशेषज्ञ (Orthopedic Surgeon)", img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80" },
  { id: "aisha-khan",       name: "Dr. Aisha Khan",       specialty: "त्वचा रोग विशेषज्ञ (Dermatologist)",      img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80" },
  { id: "madhavan-nair",    name: "Dr. Madhavan Nair",    specialty: "कैंसर रोग विशेषज्ञ (Oncologist)",          img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80" },
  { id: "priya-sharma",     name: "Dr. Priya Sharma",     specialty: "स्त्री रोग विशेषज्ञ (Gynecologist)",        img: "https://images.unsplash.com/photo-1651008376811-b90baee60c1f?auto=format&fit=crop&w=400&q=80" },
  { id: "devendra-lal",     name: "Dr. Devendra Lal",     specialty: "मनोचिकित्सक (Psychiatrist)",        img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80" },
];

const SOCIALS   = [FaFacebookF, FaPinterestP, FaTwitter, FaInstagram];
const CARD_HEIGHT = 360;

/* ── Shared Doctor Card ── */
function DoctorCard({ doc, isHovered, onEnter, onLeave }) {
  return (
    <Link
      href={`/doctor/${doc.id}`}
      onMouseEnter={onEnter}
      onMouseLeave={onLeave}
      style={{
        cursor: "pointer",
        height: CARD_HEIGHT,
        position: "relative",
        display: "block",
        textDecoration: "none",
        borderRadius: 6,
        overflow: "hidden",
        flexShrink: 0,
      }}
    >
      {/* Photo layer */}
      <div style={{
        position: "absolute", inset: 0, overflow: "hidden",
        opacity: isHovered ? 0 : 1,
        transition: "opacity 0.3s ease",
      }}>
        <img
          src={doc.img} alt={doc.name}
          style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center", display: "block" }}
        />
        {/* Gradient name tag */}
        <div style={{
          position: "absolute", bottom: 0, left: 0, right: 0,
          background: "linear-gradient(to top, rgba(13,27,75,0.92) 0%, transparent 100%)",
          padding: "40px 16px 16px",
          textAlign: "center",
        }}>
          <h3 style={{ color: "#fff", fontWeight: 800, fontSize: 15, margin: "0 0 2px" }}>{doc.name}</h3>
          <p style={{ color: "rgba(190,215,255,0.9)", fontSize: 12, margin: 0 }}>{doc.specialty}</p>
        </div>
      </div>

      {/* Blue hover info layer */}
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
          width: 112, height: 112, borderRadius: "50%",
          border: "4px solid #ffffff", overflow: "hidden",
          marginBottom: 14, flexShrink: 0,
          boxShadow: "0 4px 20px rgba(0,0,0,0.25)",
        }}>
          <img src={doc.img} alt={doc.name}
            style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top center" }} />
        </div>

        <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: 16, margin: "0 0 4px" }}>{doc.name}</h3>
        <p style={{ color: "rgba(255,255,255,0.85)", fontSize: 13, margin: "0 0 16px" }}>{doc.specialty}</p>

        {/* Social buttons — use <button> to avoid nested <a> inside card's <a> */}
        <div style={{ display: "flex", gap: 8, justifyContent: "center" }}>
          {SOCIALS.map((Icon, j) => (
            <button
              key={j}
              onClick={(e) => e.stopPropagation()}
              style={{
                width: 32, height: 32, borderRadius: "50%",
                backgroundColor: "#ffffff",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#0d1b4b", fontSize: 12,
                border: "none", cursor: "pointer", padding: 0,
                transition: "background 0.2s, color 0.2s",
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.backgroundColor = "#0d1b4b";
                e.currentTarget.style.color = "#ffffff";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.backgroundColor = "#ffffff";
                e.currentTarget.style.color = "#0d1b4b";
              }}
            >
              <Icon />
            </button>
          ))}
        </div>
      </div>
    </Link>
  );
}

export default function DoctorsTeam() {
  const [hoveredId, setHoveredId]       = useState(null);
  const [currentSlide, setCurrentSlide] = useState(0);
  const [animating, setAnimating]       = useState(false);
  const [direction, setDirection]       = useState("left");
  const mobileTrackRef = useRef(null);

  const VISIBLE     = 4;
  const TOTAL_PAGES = Math.ceil(DOCTORS.length / VISIBLE);
  const startIndex  = currentSlide * VISIBLE;
  const visibleDocs = DOCTORS.slice(startIndex, startIndex + VISIBLE);

  const goToSlide = (next, dir = "left") => {
    if (animating || next === currentSlide) return;
    setDirection(dir);
    setAnimating(true);
    setTimeout(() => {
      setCurrentSlide(next);
      setHoveredId(null);
      setAnimating(false);
    }, 380);
  };

  const prev = () => goToSlide(Math.max(0, currentSlide - 1), "right");
  const next = () => goToSlide(Math.min(TOTAL_PAGES - 1, currentSlide + 1), "left");

  // Autoplay desktop slideshow
  useEffect(() => {
    const timer = setInterval(() => {
      if (typeof window !== "undefined" && window.innerWidth >= 768) {
        goToSlide((currentSlide + 1) % TOTAL_PAGES, "left");
      }
    }, 4500);
    return () => clearInterval(timer);
  }, [currentSlide, TOTAL_PAGES, animating]);

  // Autoplay mobile swiper
  useEffect(() => {
    if (typeof window === "undefined") return;
    const isMobile = window.innerWidth < 768;
    if (!isMobile) return;

    const timer = setInterval(() => {
      const track = mobileTrackRef.current;
      if (!track) return;
      const maxScroll = track.scrollWidth - track.clientWidth;
      if (track.scrollLeft >= maxScroll - 5) {
        track.scrollTo({ left: 0, behavior: "smooth" });
      } else {
        track.scrollBy({ left: 292, behavior: "smooth" });
      }
    }, 3800);
    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        @keyframes slideInLeft  { from { opacity:0; transform:translateX(60px);  } to { opacity:1; transform:translateX(0); } }
        @keyframes slideInRight { from { opacity:0; transform:translateX(-60px); } to { opacity:1; transform:translateX(0); } }
        @keyframes slideOutLeft  { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(-60px); } }
        @keyframes slideOutRight { from { opacity:1; transform:translateX(0); } to { opacity:0; transform:translateX(60px);  } }
        .dteam-enter-left  { animation: slideInLeft  0.38s ease forwards; }
        .dteam-enter-right { animation: slideInRight 0.38s ease forwards; }
        .dteam-exit-left   { animation: slideOutLeft  0.38s ease forwards; }
        .dteam-exit-right  { animation: slideOutRight 0.38s ease forwards; }

        @keyframes float-icon {
          0% { transform: translateY(0px) rotate(0deg); }
          50% { transform: translateY(-10px) rotate(3deg); }
          100% { transform: translateY(0px) rotate(0deg); }
        }
        .float-doc-icon {
          animation: float-icon 4.5s ease-in-out infinite;
        }

        .dteam-desktop { display: block; }
        .dteam-mobile  { display: none; }

        @media (max-width: 767px) {
          .dteam-desktop { display: none !important; }
          .dteam-mobile  { display: block !important; }
        }

        .dteam-mobile-track {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: 16px;
          padding: 0 20px 16px;
        }
        .dteam-mobile-track::-webkit-scrollbar { display: none; }
        .dteam-mobile-track > * {
          scroll-snap-align: start;
          flex: 0 0 88vw;
          max-width: 340px;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .dteam-grid-inner {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
      `}</style>

      <section aria-label="Our Specialist Doctors" style={{ fontFamily: "'Segoe UI', sans-serif" }}>
        <div style={{ position: "relative" }}>

          {/* White top */}
          <div style={{ backgroundColor: "#ffffff", paddingTop: 64, position: "relative", overflow: "hidden" }}>
            {/* Animated medical watermarks with Indian Flag colors */}
            <div className="float-doc-icon" style={{
              position: "absolute", top: 12, left: 24, zIndex: 0,
              opacity: 0.12, fontSize: 130, color: "#FF9933", lineHeight: 1,
              pointerEvents: "none", userSelect: "none",
            }}>⚕</div>
            <div className="float-doc-icon" style={{
              position: "absolute", bottom: 10, right: 30, zIndex: 0,
              opacity: 0.12, fontSize: 130, color: "#128807", lineHeight: 1,
              pointerEvents: "none", userSelect: "none",
            }}>✚</div>

            <div style={{ textAlign: "center", marginBottom: 48, position: "relative", zIndex: 1 }}>
              <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
                <div style={{ width: 32, height: 2, backgroundColor: "#FF9933" }} />
                <span style={{ color: "#FF9933", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em" }}>
                  हमारे विशेषज्ञ चिकित्सक | Our Doctor Team
                </span>
                <div style={{ width: 32, height: 2, backgroundColor: "#128807" }} />
              </div>
              <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 34, lineHeight: 1.25, margin: 0 }}>
                मिलें हमारे विशेषज्ञ डॉक्टरों से<br />
                <span style={{ fontSize: "20px", fontWeight: 700, color: "#6b7280" }}>Meet Our Specialist Doctor Team</span>
              </h2>
            </div>
          </div>

          {/* Navy bottom half bg */}
          <div style={{
            backgroundColor: "#0d1b4b",
            position: "absolute", bottom: 0, left: 0, right: 0,
            height: "50%", zIndex: 0,
          }} />

          {/* ── DESKTOP: paginated carousel ── */}
          <div className="dteam-desktop" style={{ position: "relative", zIndex: 2, maxWidth: 1100, margin: "0 auto", padding: "0 24px", overflow: "hidden" }}>
            <div
              className={
                (animating
                  ? direction === "left" ? "dteam-exit-left" : "dteam-exit-right"
                  : direction === "left" ? "dteam-enter-left" : "dteam-enter-right") + " dteam-grid-inner"
              }
              style={{
                display: "grid",
                gridTemplateColumns: "repeat(4, 1fr)",
                gap: 12,
              }}
            >
              {visibleDocs.map((doc, i) => {
                const gIdx = startIndex + i;
                return (
                  <DoctorCard
                    key={`${currentSlide}-${i}`}
                    doc={doc}
                    isHovered={hoveredId === gIdx}
                    onEnter={() => setHoveredId(gIdx)}
                    onLeave={() => setHoveredId(null)}
                  />
                );
              })}
            </div>
          </div>

          {/* ── MOBILE: horizontal swipe carousel ── */}
          <div className="dteam-mobile" style={{ position: "relative", zIndex: 2 }}>
            <div className="dteam-mobile-track" ref={mobileTrackRef}>
              {DOCTORS.map((doc) => (
                <DoctorCard
                  key={doc.id}
                  doc={doc}
                  isHovered={hoveredId === doc.id}
                  onEnter={() => setHoveredId(doc.id)}
                  onLeave={() => setHoveredId(null)}
                />
              ))}
            </div>
          </div>

          {/* Navy bottom: dots + arrows */}
          <div style={{ backgroundColor: "#0d1b4b", paddingTop: 32, paddingBottom: 48 }}>
            <div className="dteam-desktop" style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 16 }}>
              <button onClick={prev} disabled={currentSlide === 0 || animating} style={{
                width: 36, height: 36, borderRadius: "50%",
                backgroundColor: currentSlide === 0 ? "rgba(255,255,255,0.1)" : "#2783e3",
                border: "none", cursor: currentSlide === 0 ? "not-allowed" : "pointer",
                display: "flex", alignItems: "center", justifyContent: "center",
                color: "#fff", fontSize: 13, transition: "background 0.2s",
              }}>
                <FaChevronLeft />
              </button>

              <div style={{ display: "flex", gap: 10, alignItems: "center" }}>
                {Array.from({ length: TOTAL_PAGES }).map((_, i) => {
                  const isActive = i === currentSlide;
                  return (
                    <button
                      key={i}
                      onClick={() => goToSlide(i, i > currentSlide ? "left" : "right")}
                      style={{
                        width: isActive ? 32 : 12, height: 12,
                        borderRadius: isActive ? 6 : "50%",
                        backgroundColor: isActive ? "#2783e3" : "rgba(255,255,255,0.35)",
                        border: "none", cursor: "pointer", padding: 0,
                        transition: "all 0.3s cubic-bezier(0.4, 0, 0.2, 1)",
                      }}
                    />
                  );
                })}
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
          </div>

        </div>
      </section>
    </>
  );
}
