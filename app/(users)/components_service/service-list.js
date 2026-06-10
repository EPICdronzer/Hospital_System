"use client";

import { useState } from "react";
import Link from "next/link";
import { FaMedkit, FaAmbulance, FaHeartbeat, FaUserMd, FaBrain, FaPills, FaTooth, FaSyringe, FaChevronRight, FaPrint } from "react-icons/fa";

const SERVICES = [
  {
    id: "pharmacology",
    number: "01",
    name: "Pharmacology",
    desc: "Medical competitor research startup to financial",
    Icon: FaMedkit,
    img: "https://images.unsplash.com/photo-1584308666744-24d5c474f2ae?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "orthopedic",
    number: "02",
    name: "Orthopedic",
    desc: "Medical competitor research startup to financial",
    Icon: FaAmbulance,
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "hematology",
    number: "03",
    name: "Hematology",
    desc: "Medical competitor research startup to financial",
    Icon: FaHeartbeat,
    img: "https://images.unsplash.com/photo-1579154261294-a101a257a837?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "plastic-surgery",
    number: "04",
    name: "Plastic Surgery",
    desc: "Medical competitor research startup to financial",
    Icon: FaUserMd,
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "neurology",
    number: "05",
    name: "Neurology",
    desc: "Medical competitor research startup to financial",
    Icon: FaBrain,
    img: "https://images.unsplash.com/photo-1559757175-5700dde675bc?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "ophthalmology",
    number: "06",
    name: "Ophthalmology",
    desc: "Medical competitor research startup to financial",
    Icon: FaPills,
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "dental-care",
    number: "07",
    name: "Dental Care",
    desc: "Medical competitor research startup to financial",
    Icon: FaTooth,
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
  },
  {
    id: "service-check",
    number: "08",
    name: "Service & Check",
    desc: "Medical competitor research startup to financial",
    Icon: FaSyringe,
    img: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=600&q=80"
  }
];

export default function ServiceList() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <style>{`
        .svc-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 24px;
        }
        @media (max-width: 1023px) {
          .svc-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 479px) {
          .svc-grid { grid-template-columns: 1fr !important; }
        }
        .svc-header {
          display: flex;
          justify-content: space-between;
          align-items: flex-end;
          margin-bottom: 56px;
          flex-wrap: wrap;
          gap: 24px;
        }
      `}</style>
    <section aria-label="Our Best Services" style={{ backgroundColor: "#ffffff", padding: "80px 0", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        
        {/* Top Header Section */}
        <div className="svc-header">
          <div style={{ maxWidth: 500 }}>
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, backgroundColor: "#2783e3" }} />
              <span style={{ color: "#2783e3", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.10em" }}>
                OUR BEST SERVICE
              </span>
            </div>
            <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 36, lineHeight: 1.2, margin: 0 }}>
              High-Quality Services<br />This Doctor
            </h2>
          </div>
          <div style={{ maxWidth: 520 }}>
            <p style={{ color: "#6b7280", fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
              We are privileged to work with hundreds of future-thinking medial,
              including many of the world's top hardware, software, and brands,
              feel safe and comfortable in establishing.
            </p>
          </div>
        </div>

        {/* 8-Card Grid */}
        <div className="svc-grid">
          {SERVICES.map(({ id, number, name, desc, Icon, img }, index) => {
            const isHovered = hoveredCard === index;
            
            return (
              <Link 
                href={`/service/${id}`} 
                key={id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  position: "relative",
                  display: "block",
                  padding: "40px 32px",
                  borderRadius: 8,
                  textDecoration: "none",
                  overflow: "hidden",
                  cursor: "pointer",
                  height: 240,
                  transition: "all 0.4s ease",
                  backgroundColor: isHovered ? "#0d1b4b" : "#eff3f8",
                  boxShadow: isHovered ? "0 10px 25px rgba(13,27,75,0.2)" : "none"
                }}
              >
                
                {/* Background Image Layer (visible on hover) */}
                <div style={{
                  position: "absolute",
                  inset: 0,
                  backgroundImage: `url('${img}')`,
                  backgroundSize: "cover",
                  backgroundPosition: "center",
                  opacity: isHovered ? 0.15 : 0,
                  transition: "opacity 0.4s ease",
                  zIndex: 0
                }} />

                {/* Content Wrapper */}
                <div style={{ position: "relative", zIndex: 1, height: "100%", display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
                  
                  {/* Top: Icon + Right Chevron / Number */}
                  <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center" }}>
                    
                    {/* Icon container */}
                    <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
                      <div style={{
                        width: 44, height: 44, borderRadius: "50%",
                        backgroundColor: isHovered ? "#2783e3" : "#0d1b4b",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        color: "#ffffff", transition: "background-color 0.4s ease"
                      }}>
                        <Icon style={{ fontSize: 18 }} />
                      </div>
                      
                      {/* Chevron Arrow pointing right */}
                      <FaChevronRight style={{ color: isHovered ? "#2783e3" : "#0d1b4b", fontSize: 12, transition: "color 0.4s ease" }} />
                    </div>

                    {/* Top Right Digit */}
                    <span style={{
                      fontSize: 16,
                      fontWeight: 800,
                      color: isHovered ? "rgba(255,255,255,0.3)" : "rgba(13,27,75,0.15)",
                      transition: "color 0.4s ease",
                      fontFamily: "Courier, monospace"
                    }}>
                      {number}
                    </span>

                  </div>

                  {/* Bottom: Text details */}
                  <div style={{ marginTop: 24 }}>
                    <h3 style={{
                      color: isHovered ? "#ffffff" : "#0d1b4b",
                      fontWeight: 800,
                      fontSize: 18,
                      margin: "0 0 8px 0",
                      transition: "color 0.4s ease"
                    }}>
                      {name}
                    </h3>
                    <p style={{
                      color: isHovered ? "rgba(255,255,255,0.7)" : "#6b7280",
                      fontSize: 12.5,
                      lineHeight: 1.5,
                      margin: 0,
                      transition: "color 0.4s ease"
                    }}>
                      {desc}
                    </p>
                  </div>

                </div>

                {/* Bottom Right Semicircle overlap graphic (Visible on Hover) */}
                <div style={{
                  position: "absolute",
                  bottom: -20,
                  right: -20,
                  width: 50,
                  height: 50,
                  borderRadius: "50%",
                  backgroundColor: "#2783e3",
                  opacity: isHovered ? 0.85 : 0,
                  transform: isHovered ? "scale(1.2)" : "scale(0.8)",
                  transition: "all 0.4s ease",
                  zIndex: 1
                }} />

              </Link>
            );
          })}
        </div>

        {/* Bottom checklist row */}
        <div style={{
          marginTop: 48,
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: 10,
          flexWrap: "wrap"
        }}>
          <div style={{
            width: 32, height: 32, borderRadius: "50%",
            backgroundColor: "#2783e3", display: "flex",
            alignItems: "center", justifyCenter: "center", color: "#ffffff", paddingLeft: 8
          }}>
            <FaPrint style={{ fontSize: 13 }} />
          </div>
          <p style={{ color: "#0d1b4b", fontSize: 14, fontWeight: 700, margin: 0 }}>
            Delivering tomorrow's health care for your family.{" "}
            <span style={{ color: "#6b7280", fontWeight: 500 }}>medical this View </span>
            <Link href="/contact" style={{ color: "#2783e3", fontWeight: 800, textDecoration: "none" }}>
              SEE MORE »
            </Link>
          </p>
        </div>

      </div>
    </section>
    </>
  );
}
