import Link from "next/link";
import { FaCheckCircle, FaPhoneAlt } from "react-icons/fa";

const BULLETS = [
  "Highly qualified and experienced medical professionals",
  "State-of-the-art diagnostic and treatment facilities",
  "24/7 emergency care with rapid response team",
  "Patient-first approach with compassionate service",
];

const IMAGES = [
  "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80",
  "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
];

export default function About() {
  return (
    <section
      aria-label="Why Choose Medilo"
      style={{ backgroundColor: "#f5f7fb", padding: "80px 0" }}
    >
      <div
        style={{
          maxWidth: 1200,
          margin: "0 auto",
          padding: "0 24px",
          display: "grid",
          gridTemplateColumns: "1fr 1fr",
          gap: 60,
          alignItems: "center",
        }}
        className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16"
      >

        {/* LEFT — Image collage */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "1fr 1fr",
            gap: 12,
          }}
        >
          {IMAGES.map((src, i) => (
            <div
              key={i}
              style={{
                overflow: "hidden",
                height: i < 2 ? 200 : 170,
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
              />
            </div>
          ))}
        </div>

        {/* RIGHT — Text content */}
        <div>
          <p
            style={{
              color: "#2783e3",
              fontWeight: 700,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 10,
            }}
          >
            About Us
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
            Why Patient Trust
            <br />
            Our Doctor
          </h2>
          <p
            style={{
              color: "#6b7280",
              fontSize: 14,
              lineHeight: 1.75,
              margin: "0 0 24px 0",
            }}
          >
            Medilo has been providing world-class healthcare for over two decades.
            Our dedicated team of specialists, nurses, and support staff work
            together to ensure every patient receives the best possible care.
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
                  style={{ color: "#2783e3", fontSize: 16, flexShrink: 0, marginTop: 2 }}
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
                backgroundColor: "#1a3b8c",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: 13,
                padding: "12px 26px",
                textDecoration: "none",
              }}
            >
              Learn More
            </Link>
            <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
              <span
                style={{
                  width: 40,
                  height: 40,
                  borderRadius: "50%",
                  backgroundColor: "#2783e3",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                }}
              >
                <FaPhoneAlt style={{ color: "#fff", fontSize: 14 }} />
              </span>
              <div>
                <p style={{ margin: 0, fontSize: 11, color: "#6b7280" }}>Call Us Now</p>
                <p style={{ margin: 0, fontWeight: 800, fontSize: 14, color: "#0d1b4b" }}>
                  099 695 695 35
                </p>
              </div>
            </div>
          </div>
        </div>

      </div>
    </section>
  );
}
