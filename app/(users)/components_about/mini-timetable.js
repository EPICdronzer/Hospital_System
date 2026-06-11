"use client";

import { useState } from "react";
import { FaClock, FaCheckCircle } from "react-icons/fa";

const DAYS = ["सोम", "मंगल", "बुध", "गुरु", "शुक्र", "शनि", "रवि"];
const DAYS_EN = ["Mon", "Tue", "Wed", "Thu", "Fri", "Sat", "Sun"];

const SCHEDULE = [
  {
    doctor: "Dr. Jayesh Vyas",
    specialty: "हृदय रोग | Cardiology",
    slots: ["09:00–13:00", "10:00–14:00", "Off", "09:00–13:00", "08:00–12:00", "10:00–13:00", "Off"],
  },
  {
    doctor: "Dr. Priya Sharma",
    specialty: "स्त्री रोग | Gynecology",
    slots: ["08:00–12:00", "09:00–13:00", "10:00–14:00", "09:00–13:00", "Off", "Off", "09:00–12:00"],
  },
  {
    doctor: "Dr. Nirmala Patel",
    specialty: "तंत्रिका रोग | Neurology",
    slots: ["11:00–15:00", "09:00–13:00", "10:00–14:00", "Off", "09:00–12:00", "10:00–13:00", "Off"],
  },
  {
    doctor: "Dr. Aisha Khan",
    specialty: "त्वचा रोग | Dermatology",
    slots: ["09:00–13:00", "10:00–14:00", "Off", "09:00–13:00", "10:00–14:00", "Off", "Off"],
  },
];

export default function MiniTimetable() {
  const [activeDay, setActiveDay] = useState(0);

  return (
    <div style={{ width: "100%", fontFamily: "'Segoe UI', Arial, sans-serif" }}>
      {/* Header */}
      <div style={{
        background: "#0d1b4b",
        padding: "14px 20px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <div>
          <p style={{ color: "#FF9933", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.1em", margin: 0 }}>
            समय सारणी | Doctor Schedule
          </p>
          <h3 style={{ color: "#ffffff", fontWeight: 800, fontSize: 16, margin: "2px 0 0" }}>
            साप्ताहिक उपलब्धता | Weekly Availability
          </h3>
        </div>
        <FaClock style={{ color: "#2783e3", fontSize: 22 }} />
      </div>

      {/* Day tabs */}
      <div style={{
        display: "grid",
        gridTemplateColumns: "repeat(7, 1fr)",
        background: "#f0f4ff",
        borderBottom: "2px solid #e2e8f0",
      }}>
        {DAYS.map((day, i) => (
          <button
            key={i}
            onClick={() => setActiveDay(i)}
            style={{
              padding: "8px 2px",
              border: "none",
              cursor: "pointer",
              fontWeight: 700,
              fontSize: 10,
              color: activeDay === i ? "#ffffff" : "#0d1b4b",
              background: activeDay === i ? "#2783e3" : "transparent",
              transition: "all 0.15s",
              fontFamily: "'Segoe UI', sans-serif",
            }}
          >
            <div>{day}</div>
            <div style={{ fontSize: 9, fontWeight: 500, opacity: 0.8 }}>{DAYS_EN[i]}</div>
          </button>
        ))}
      </div>

      {/* Doctor rows */}
      <div>
        {SCHEDULE.map((row, i) => {
          const slot = row.slots[activeDay];
          const isOff = slot === "Off";
          return (
            <div
              key={i}
              style={{
                display: "flex",
                alignItems: "center",
                justifyContent: "space-between",
                padding: "10px 16px",
                borderBottom: i < SCHEDULE.length - 1 ? "1px solid #f0f0f0" : "none",
                background: i % 2 === 0 ? "#fafbff" : "#ffffff",
              }}
            >
              <div style={{ flex: 1 }}>
                <p style={{ color: "#0d1b4b", fontWeight: 700, fontSize: 12.5, margin: "0 0 2px" }}>{row.doctor}</p>
                <p style={{ color: "#6b7280", fontSize: 10.5, margin: 0 }}>{row.specialty}</p>
              </div>
              <div style={{
                display: "flex",
                alignItems: "center",
                gap: 5,
                padding: "4px 10px",
                background: isOff ? "#f3f4f6" : "#eff6ff",
                flexShrink: 0,
              }}>
                {isOff
                  ? <span style={{ color: "#9ca3af", fontSize: 11, fontWeight: 600 }}>छुट्टी | Day Off</span>
                  : <>
                      <FaCheckCircle style={{ color: "#10b981", fontSize: 10 }} />
                      <span style={{ color: "#0d1b4b", fontSize: 11, fontWeight: 700 }}>{slot}</span>
                    </>
                }
              </div>
            </div>
          );
        })}
      </div>

      {/* Footer CTA */}
      <div style={{
        background: "#FF9933",
        padding: "10px 16px",
        display: "flex",
        alignItems: "center",
        justifyContent: "space-between",
      }}>
        <span style={{ color: "#ffffff", fontSize: 12, fontWeight: 700 }}>
          अपॉइंटमेंट बुक करें | Book Appointment
        </span>
        <a
          href="/timetable"
          style={{
            color: "#ffffff",
            fontWeight: 800,
            fontSize: 11.5,
            textDecoration: "none",
            background: "#0d1b4b",
            padding: "5px 14px",
          }}
        >
          Full Schedule »
        </a>
      </div>
    </div>
  );
}
