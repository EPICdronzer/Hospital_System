"use client";

import { useState } from "react";
import Link from "next/link";
import { FaClock, FaCalendarAlt, FaUserMd, FaPhone } from "react-icons/fa";

const CACHE_BUSTER = typeof Date !== "undefined" ? Date.now() : "";

const DAYS = ["Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday", "Sunday"];

const DOCTORS = [
  {
    id: "jayesh-vyas",
    name: "Dr. Jayesh Vyas",
    specialty: "हृदय रोग | Cardiologist",
    img: "/dr_jayesh_vyas.png",
    schedule: {
      Monday:    { time: "09:00 – 13:00", status: "available" },
      Tuesday:   { time: "10:00 – 14:00", status: "available" },
      Wednesday: { time: "Off",           status: "off" },
      Thursday:  { time: "09:00 – 13:00", status: "available" },
      Friday:    { time: "08:00 – 12:00", status: "available" },
      Saturday:  { time: "10:00 – 13:00", status: "available" },
      Sunday:    { time: "Off",           status: "off" },
    },
  },
  {
    id: "sandeep-banerjee",
    name: "Dr. Sandeep Banerjee",
    specialty: "सामान्य चिकित्सक | General Physician",
    img: "/dr_sandeep_banerjee.png",
    schedule: {
      Monday:    { time: "08:00 – 12:00", status: "available" },
      Tuesday:   { time: "Off",           status: "off" },
      Wednesday: { time: "09:00 – 14:00", status: "available" },
      Thursday:  { time: "09:00 – 13:00", status: "available" },
      Friday:    { time: "10:00 – 14:00", status: "available" },
      Saturday:  { time: "Off",           status: "off" },
      Sunday:    { time: "09:00 – 12:00", status: "available" },
    },
  },
  {
    id: "nirmala-patel",
    name: "Dr. Nirmala Patel",
    specialty: "तंत्रिका रोग | Neurologist",
    img: "/dr_nirmala_patel.png",
    schedule: {
      Monday:    { time: "11:00 – 15:00", status: "available" },
      Tuesday:   { time: "09:00 – 13:00", status: "available" },
      Wednesday: { time: "10:00 – 14:00", status: "available" },
      Thursday:  { time: "Off",           status: "off" },
      Friday:    { time: "09:00 – 12:00", status: "available" },
      Saturday:  { time: "10:00 – 13:00", status: "available" },
      Sunday:    { time: "Off",           status: "off" },
    },
  },
  {
    id: "rahul-choudhury",
    name: "Dr. Rahul Choudhury",
    specialty: "हड्डी रोग | Orthopedic Surgeon",
    img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=400&q=80",
    schedule: {
      Monday:    { time: "Off",           status: "off" },
      Tuesday:   { time: "10:00 – 14:00", status: "available" },
      Wednesday: { time: "09:00 – 13:00", status: "available" },
      Thursday:  { time: "08:00 – 12:00", status: "available" },
      Friday:    { time: "Off",           status: "off" },
      Saturday:  { time: "09:00 – 13:00", status: "available" },
      Sunday:    { time: "10:00 – 13:00", status: "available" },
    },
  },
  {
    id: "aisha-khan",
    name: "Dr. Aisha Khan",
    specialty: "त्वचा रोग | Dermatologist",
    img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=400&q=80",
    schedule: {
      Monday:    { time: "09:00 – 13:00", status: "available" },
      Tuesday:   { time: "10:00 – 14:00", status: "available" },
      Wednesday: { time: "Off",           status: "off" },
      Thursday:  { time: "09:00 – 13:00", status: "available" },
      Friday:    { time: "10:00 – 14:00", status: "available" },
      Saturday:  { time: "Off",           status: "off" },
      Sunday:    { time: "Off",           status: "off" },
    },
  },
  {
    id: "madhavan-nair",
    name: "Dr. Madhavan Nair",
    specialty: "कैंसर रोग | Oncologist",
    img: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
    schedule: {
      Monday:    { time: "10:00 – 15:00", status: "available" },
      Tuesday:   { time: "Off",           status: "off" },
      Wednesday: { time: "10:00 – 14:00", status: "available" },
      Thursday:  { time: "Off",           status: "off" },
      Friday:    { time: "09:00 – 13:00", status: "available" },
      Saturday:  { time: "09:00 – 12:00", status: "available" },
      Sunday:    { time: "Off",           status: "off" },
    },
  },
  {
    id: "priya-sharma",
    name: "Dr. Priya Sharma",
    specialty: "स्त्री रोग | Gynecologist",
    img: "/dr_priya_sharma.png",
    schedule: {
      Monday:    { time: "08:00 – 12:00", status: "available" },
      Tuesday:   { time: "09:00 – 13:00", status: "available" },
      Wednesday: { time: "10:00 – 14:00", status: "available" },
      Thursday:  { time: "09:00 – 13:00", status: "available" },
      Friday:    { time: "Off",           status: "off" },
      Saturday:  { time: "Off",           status: "off" },
      Sunday:    { time: "09:00 – 12:00", status: "available" },
    },
  },
  {
    id: "devendra-lal",
    name: "Dr. Devendra Lal",
    specialty: "मनोचिकित्सक | Psychiatrist",
    img: "https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=400&q=80",
    schedule: {
      Monday:    { time: "Off",           status: "off" },
      Tuesday:   { time: "10:00 – 14:00", status: "available" },
      Wednesday: { time: "09:00 – 13:00", status: "available" },
      Thursday:  { time: "10:00 – 15:00", status: "available" },
      Friday:    { time: "09:00 – 13:00", status: "available" },
      Saturday:  { time: "10:00 – 13:00", status: "available" },
      Sunday:    { time: "Off",           status: "off" },
    },
  },
];

export default function TimetableSection() {
  const [activeDay, setActiveDay] = useState("Monday");

  const todayDoctors = DOCTORS.map((doc) => ({
    ...doc,
    todaySlot: doc.schedule[activeDay],
  }));

  return (
    <section style={{ fontFamily: "'Segoe UI', sans-serif", backgroundColor: "#f8fafc" }}>

      {/* Top intro */}
      <div style={{ backgroundColor: "#ffffff", padding: "64px 24px 48px", textAlign: "center" }}>
        <div style={{ maxWidth: 700, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 12 }}>
            <div style={{ width: 28, height: 2, backgroundColor: "#FF9933" }} />
            <span style={{ color: "#FF9933", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              साप्ताहिक समय सारणी | Weekly Schedule
            </span>
            <div style={{ width: 28, height: 2, backgroundColor: "#128807" }} />
          </div>
          <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 36, margin: "0 0 16px" }}>
            डॉक्टर की उपलब्धता<br />
            <span style={{ fontSize: 20, fontWeight: 700, color: "#6b7280" }}>Doctor Availability Timetable</span>
          </h2>
          <p style={{ color: "#6b7280", fontSize: 14.5, lineHeight: 1.75, margin: 0 }}>
            हमारे विशेषज्ञ डॉक्टरों का साप्ताहिक समय देखें और अपना अपॉइंटमेंट बुक करें।
            Check our specialist doctors' weekly schedules and book your appointment at a convenient time.
          </p>
        </div>
      </div>

      {/* Day Tabs */}
      <div style={{ backgroundColor: "#0d1b4b", padding: "0 24px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", display: "flex", gap: 0, overflowX: "auto" }}>
          {DAYS.map((day) => {
            const isActive = day === activeDay;
            return (
              <button
                key={day}
                onClick={() => setActiveDay(day)}
                style={{
                  padding: "16px 24px",
                  border: "none",
                  cursor: "pointer",
                  fontWeight: 700,
                  fontSize: 13.5,
                  color: isActive ? "#ffffff" : "rgba(255,255,255,0.55)",
                  backgroundColor: isActive ? "#2783e3" : "transparent",
                  borderBottom: isActive ? "3px solid #2783e3" : "3px solid transparent",
                  whiteSpace: "nowrap",
                  transition: "all 0.2s ease",
                  fontFamily: "'Segoe UI', sans-serif",
                  letterSpacing: "0.01em",
                }}
                onMouseEnter={(e) => {
                  if (!isActive) e.currentTarget.style.color = "#ffffff";
                }}
                onMouseLeave={(e) => {
                  if (!isActive) e.currentTarget.style.color = "rgba(255,255,255,0.55)";
                }}
              >
                {day}
              </button>
            );
          })}
        </div>
      </div>

      {/* Doctor Cards for Selected Day */}
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "48px 24px 80px" }}>
        <div style={{
          display: "grid",
          gridTemplateColumns: "repeat(4, 1fr)",
          gap: 24,
        }}
          className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4"
        >
          {todayDoctors.map((doc) => {
            const isOff = doc.todaySlot.status === "off";
            return (
              <div
                key={doc.id}
                style={{
                  backgroundColor: "#ffffff",
                  borderRadius: 0,
                  overflow: "hidden",
                  boxShadow: "0 4px 18px rgba(0,0,0,0.07)",
                  opacity: isOff ? 0.6 : 1,
                  transition: "transform 0.2s, box-shadow 0.2s",
                }}
                onMouseEnter={(e) => {
                  if (!isOff) {
                    e.currentTarget.style.transform = "translateY(-4px)";
                    e.currentTarget.style.boxShadow = "0 10px 30px rgba(0,0,0,0.12)";
                  }
                }}
                onMouseLeave={(e) => {
                  e.currentTarget.style.transform = "translateY(0)";
                  e.currentTarget.style.boxShadow = "0 4px 18px rgba(0,0,0,0.07)";
                }}
              >
                {/* Image */}
                <div style={{ height: 200, overflow: "hidden", position: "relative" }}>
                  <img
                    src={doc.img.startsWith("/") ? `${doc.img}?v=${CACHE_BUSTER}` : doc.img}
                    alt={doc.name}
                    style={{ width: "100%", height: "100%", objectFit: "cover", objectPosition: "top" }}
                  />
                  {/* Status badge */}
                  <div style={{
                    position: "absolute",
                    top: 12,
                    right: 12,
                    backgroundColor: isOff ? "#6b7280" : "#10b981",
                    color: "#ffffff",
                    fontSize: 10,
                    fontWeight: 700,
                    padding: "3px 10px",
                    borderRadius: 0,
                    textTransform: "uppercase",
                    letterSpacing: "0.08em",
                  }}>
                    {isOff ? "Day Off" : "Available"}
                  </div>
                </div>

                {/* Details */}
                <div style={{ padding: "20px 20px 24px" }}>
                  <h3 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 16, margin: "0 0 4px" }}>
                    {doc.name}
                  </h3>
                  <p style={{ color: "#2783e3", fontSize: 12.5, fontWeight: 700, margin: "0 0 14px", textTransform: "uppercase", letterSpacing: "0.06em" }}>
                    {doc.specialty}
                  </p>

                  {/* Time slot */}
                  <div style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 8,
                    padding: "10px 14px",
                    backgroundColor: isOff ? "#f3f4f6" : "#eff6ff",
                    borderRadius: 0,
                    marginBottom: 16,
                  }}>
                    <FaClock style={{ color: isOff ? "#9ca3af" : "#2783e3", fontSize: 13, flexShrink: 0 }} />
                    <span style={{ color: isOff ? "#9ca3af" : "#0d1b4b", fontSize: 13, fontWeight: 600 }}>
                      {doc.todaySlot.time}
                    </span>
                  </div>

                  {/* CTA */}
                  {isOff ? (
                    <p style={{ color: "#9ca3af", fontSize: 12.5, textAlign: "center", margin: 0 }}>
                      Not available today
                    </p>
                  ) : (
                    <Link
                      href={`/doctor/${doc.id}`}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        justifyContent: "center",
                        gap: 8,
                        backgroundColor: "#0d1b4b",
                        color: "#ffffff",
                        padding: "10px 0",
                        borderRadius: 0,
                        fontWeight: 700,
                        fontSize: 13,
                        textDecoration: "none",
                        transition: "background 0.2s",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#2783e3"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0d1b4b"}
                    >
                      <FaPhone style={{ fontSize: 11 }} />
                      Book Appointment
                    </Link>
                  )}
                </div>
              </div>
            );
          })}
        </div>

        {/* Legend */}
        <div style={{ marginTop: 40, display: "flex", justifyContent: "center", gap: 32, flexWrap: "wrap" }}>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#10b981" }} />
            <span style={{ color: "#4b5563", fontSize: 13, fontWeight: 600 }}>Available</span>
          </div>
          <div style={{ display: "flex", alignItems: "center", gap: 8 }}>
            <div style={{ width: 12, height: 12, borderRadius: "50%", backgroundColor: "#6b7280" }} />
            <span style={{ color: "#4b5563", fontSize: 13, fontWeight: 600 }}>Day Off</span>
          </div>
        </div>
      </div>

      {/* Bottom CTA Banner */}
      <div style={{ backgroundColor: "#0d1b4b", padding: "48px 24px", textAlign: "center" }}>
        <div style={{ maxWidth: 600, margin: "0 auto" }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 14, marginBottom: 20 }}>
            <FaCalendarAlt style={{ color: "#2783e3", fontSize: 28 }} />
            <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: 24, margin: 0 }}>
              Need an Appointment?
            </h3>
          </div>
          <p style={{ color: "rgba(255,255,255,0.7)", fontSize: 14, lineHeight: 1.7, margin: "0 0 28px" }}>
            Our scheduling team is available 24/7 to help you find the right time and specialist for your needs.
          </p>
          <div style={{ display: "flex", gap: 16, justifyContent: "center", flexWrap: "wrap" }}>
            <Link
              href="/contact"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                backgroundColor: "#2783e3", color: "#ffffff",
                padding: "13px 32px", borderRadius: 0,
                fontWeight: 700, fontSize: 14, textDecoration: "none",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1a6fd0"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#2783e3"}
            >
              Contact Us »
            </Link>
            <a
              href="tel:+09969569535"
              style={{
                display: "inline-flex", alignItems: "center", gap: 8,
                backgroundColor: "rgba(255,255,255,0.1)", color: "#ffffff",
                padding: "13px 32px", borderRadius: 0,
                fontWeight: 700, fontSize: 14, textDecoration: "none",
                border: "1.5px solid rgba(255,255,255,0.3)",
                transition: "background 0.2s",
              }}
              onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.2)"}
              onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "rgba(255,255,255,0.1)"}
            >
              <FaPhone style={{ fontSize: 12 }} />
              Call Now
            </a>
          </div>
        </div>
      </div>

      <style>{`
        @media (max-width: 1024px) {
          .grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        @media (max-width: 640px) {
          .grid-cols-1.sm\\:grid-cols-2.lg\\:grid-cols-4 {
            grid-template-columns: 1fr !important;
          }
        }
      `}</style>
    </section>
  );
}
