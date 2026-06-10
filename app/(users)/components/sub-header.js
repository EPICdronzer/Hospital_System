"use client";

import Link from "next/link";

export default function SubHeader({ title, currentPage }) {
  return (
    <section
      style={{
        position: "relative",
        backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1200&q=80')",
        backgroundSize: "cover",
        backgroundPosition: "center 30%",
        padding: "60px 0",
        fontFamily: "'Segoe UI', sans-serif",
        color: "#ffffff"
      }}
    >
      {/* Navy transparent overlay */}
      <div
        style={{
          position: "absolute",
          inset: 0,
          backgroundColor: "rgba(13, 27, 75, 0.85)", // deep premium navy matching the theme
          zIndex: 0
        }}
      />

      <div
        style={{
          position: "relative",
          zIndex: 1,
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "flex",
          flexDirection: "column",
          alignItems: "center",
          textAlign: "center"
        }}
      >
        <h1
          style={{
            fontSize: "36px",
            fontWeight: 900,
            margin: "0 0 12px 0",
            letterSpacing: "-0.5px"
          }}
        >
          {title}
        </h1>

        {/* Breadcrumbs */}
        <div
          style={{
            display: "flex",
            alignItems: "center",
            gap: 8,
            fontSize: "13.5px",
            fontWeight: 600,
            color: "rgba(255, 255, 255, 0.75)"
          }}
        >
          <Link href="/" style={{ color: "#ffffff", textDecoration: "none", transition: "color 0.2s" }}
            onMouseEnter={(e) => e.target.style.color = "#2783e3"}
            onMouseLeave={(e) => e.target.style.color = "#ffffff"}>
            Home
          </Link>
          <span>»</span>
          <span style={{ color: "#2783e3" }}>{currentPage}</span>
        </div>
      </div>
    </section>
  );
}
