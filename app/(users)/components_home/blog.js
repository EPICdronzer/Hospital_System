"use client";

import { useState, useRef, useEffect } from "react";
import Link from "next/link";
import { FaCalendarAlt, FaUser, FaArrowRight, FaChevronLeft, FaChevronRight } from "react-icons/fa";

const POSTS = [
  {
    id: 1,
    date: "June 20, 2024",
    category: "Health Tips",
    title: "We round Solution york Health Blog",
    excerpt:
      "Medical experts share the latest insights on maintaining a healthy lifestyle and preventive care strategies.",
    img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 2,
    date: "June 18, 2024",
    category: "Medical News",
    title: "The Medical Of This Working Health",
    excerpt:
      "New advances in medical technology are revolutionizing patient care and treatment outcomes worldwide.",
    img: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
  },
  {
    id: 3,
    date: "June 15, 2024",
    category: "Patient Care",
    title: "Best Practices For Patient Service",
    excerpt:
      "Our dedicated team of professionals ensures every patient receives personalized and compassionate care.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
  },
];

function BlogCard({ id, date, category, title, excerpt, img }) {
  return (
    <article
      style={{
        backgroundColor: "#ffffff",
        overflow: "hidden",
        boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
        borderRadius: 4,
        flexShrink: 0,
      }}
    >
      {/* Image */}
      <div style={{ overflow: "hidden", height: 210 }}>
        <img
          src={img}
          alt={title}
          style={{
            width: "100%",
            height: "100%",
            objectFit: "cover",
            display: "block",
            transition: "transform 0.4s",
          }}
        />
      </div>

      {/* Meta */}
      <div
        style={{
          display: "flex",
          alignItems: "center",
          gap: 16,
          backgroundColor: "#eef3ff",
          padding: "10px 20px",
        }}
      >
        <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#6b7280", fontSize: 12 }}>
          <FaCalendarAlt style={{ color: "#2783e3" }} />
          {date}
        </span>
        <span style={{ display: "flex", alignItems: "center", gap: 6, color: "#6b7280", fontSize: 12 }}>
          <FaUser style={{ color: "#2783e3" }} />
          {category}
        </span>
      </div>

      {/* Content */}
      <div style={{ padding: "20px 20px 24px" }}>
        <h3 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 16, lineHeight: 1.4, margin: "0 0 10px 0" }}>
          {title}
        </h3>
        <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.65, margin: "0 0 18px 0" }}>
          {excerpt}
        </p>
        <Link
          href={`/blog/${id}`}
          style={{
            display: "inline-flex",
            alignItems: "center",
            gap: 6,
            color: "#2783e3",
            fontWeight: 700,
            fontSize: 13,
            textDecoration: "none",
          }}
        >
          Read More <FaArrowRight style={{ fontSize: 11 }} />
        </Link>
      </div>
    </article>
  );
}

export default function Blog() {
  const [current, setCurrent] = useState(0);
  const trackRef = useRef(null);

  const prev = () => setCurrent((c) => Math.max(0, c - 1));
  const next = () => setCurrent((c) => Math.min(POSTS.length - 1, c + 1));

  // Handle mobile scroll dot highlighting
  const handleScroll = () => {
    const track = trackRef.current;
    if (!track) return;
    const index = Math.round(track.scrollLeft / (track.clientWidth || 320));
    setCurrent(index);
  };

  // Autoplay mobile swiper
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
        track.scrollBy({ left: 336, behavior: "smooth" }); // card width + gap (320px + 16px)
      }
    }, 4000);

    return () => clearInterval(timer);
  }, []);

  return (
    <>
      <style>{`
        .blog-desktop { display: block; }
        .blog-mobile  { display: none; }

        @media (max-width: 767px) {
          .blog-desktop { display: none !important; }
          .blog-mobile  { display: block !important; }
        }

        .blog-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }

        @media (min-width: 768px) and (max-width: 1023px) {
          .blog-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }

        .blog-mobile-track {
          display: flex;
          overflow-x: auto;
          scroll-snap-type: x mandatory;
          -webkit-overflow-scrolling: touch;
          scrollbar-width: none;
          gap: 16px;
          padding: 0 16px 12px;
        }
        .blog-mobile-track::-webkit-scrollbar { display: none; }
        .blog-mobile-track > * {
          scroll-snap-align: start;
          flex: 0 0 85vw;
          max-width: 320px;
        }
      `}</style>

      <section
        aria-label="Latest Blog"
        style={{ backgroundColor: "#ffffff", padding: "80px 0 80px", marginBottom: "80px", position: "relative", overflow: "hidden" }}
      >
        {/* Subtle background watermarks */}
        <div style={{
          position: "absolute", top: 16, left: 20, zIndex: 0,
          opacity: 0.05, fontSize: 140, color: "#0d1b4b", lineHeight: 1,
          pointerEvents: "none", userSelect: "none",
        }}>✚</div>
        <div style={{
          position: "absolute", bottom: 20, right: 20, zIndex: 0,
          opacity: 0.05, fontSize: 140, color: "#0d1b4b", lineHeight: 1,
          pointerEvents: "none", userSelect: "none",
        }}>⚕</div>

        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px", position: "relative", zIndex: 1 }}>

          {/* Heading */}
          <div style={{ textAlign: "center", marginBottom: 48 }}>
            <p style={{ color: "#2783e3", fontWeight: 700, fontSize: 13, textTransform: "uppercase", letterSpacing: "0.1em", marginBottom: 8 }}>
              From Our Blog
            </p>
            <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 32, margin: 0 }}>
              Our Latest Blog
            </h2>
          </div>

          {/* Desktop grid */}
          <div className="blog-desktop">
            <div className="blog-grid">
              {POSTS.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
          </div>

          {/* Mobile swipe carousel */}
          <div className="blog-mobile">
            {/* Prev/Next arrows */}
            <div style={{ display: "flex", justifyContent: "flex-end", gap: 8, padding: "0 16px 10px" }}>
              <button
                onClick={() => {
                  const t = trackRef.current;
                  if (t) t.scrollBy({ left: -336, behavior: "smooth" });
                }}
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  backgroundColor: "#0d1b4b", border: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", cursor: "pointer",
                }}
                aria-label="Previous post"
              >
                <FaChevronLeft size={13} />
              </button>
              <button
                onClick={() => {
                  const t = trackRef.current;
                  if (t) t.scrollBy({ left: 336, behavior: "smooth" });
                }}
                style={{
                  width: 34, height: 34, borderRadius: "50%",
                  backgroundColor: "#2783e3", border: "none",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  color: "#fff", cursor: "pointer",
                }}
                aria-label="Next post"
              >
                <FaChevronRight size={13} />
              </button>
            </div>
            <div className="blog-mobile-track" ref={trackRef} onScroll={handleScroll}>
              {POSTS.map((post) => (
                <BlogCard key={post.id} {...post} />
              ))}
            </div>
            {/* Dot indicators */}
            <div style={{ display: "flex", justifyContent: "center", gap: 8, marginTop: 16 }}>
              {POSTS.map((_, i) => (
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

        {/* See All Posts CTA */}
        <div style={{ textAlign: "center", marginTop: 48, position: "relative", zIndex: 1 }}>
          <Link
            href="/blog"
            style={{
              display: "inline-flex",
              alignItems: "center",
              gap: 8,
              backgroundColor: "#0d1b4b",
              color: "#ffffff",
              padding: "13px 36px",
              borderRadius: 24,
              fontWeight: 700,
              fontSize: 14,
              textDecoration: "none",
              transition: "background 0.2s",
            }}
            onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#1a2f6e"}
            onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#0d1b4b"}
          >
            See All Posts »
          </Link>
        </div>
      </section>
    </>
  );
}
