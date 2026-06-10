import Link from "next/link";
import { FaCalendarAlt, FaUser, FaArrowRight } from "react-icons/fa";

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

export default function Blog() {
  return (
    <section
      aria-label="Latest Blog"
      style={{ backgroundColor: "#ffffff", padding: "80px 0px",marginBottom:"80px" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

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
            From Our Blog
          </p>
          <h2
            style={{
              color: "#0d1b4b",
              fontWeight: 900,
              fontSize: 32,
              margin: 0,
            }}
          >
            Our Latest Blog
          </h2>
        </div>

        {/* Blog cards grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-7">
          {POSTS.map(({ id, date, category, title, excerpt, img }) => (
            <article
              key={id}
              style={{
                backgroundColor: "#ffffff",
                overflow: "hidden",
                boxShadow: "0 2px 16px rgba(0,0,0,0.08)",
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
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#6b7280",
                    fontSize: 12,
                  }}
                >
                  <FaCalendarAlt style={{ color: "#2783e3" }} />
                  {date}
                </span>
                <span
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#6b7280",
                    fontSize: 12,
                  }}
                >
                  <FaUser style={{ color: "#2783e3" }} />
                  {category}
                </span>
              </div>

              {/* Content */}
              <div style={{ padding: "20px 20px 24px" }}>
                <h3
                  style={{
                    color: "#0d1b4b",
                    fontWeight: 800,
                    fontSize: 16,
                    lineHeight: 1.4,
                    margin: "0 0 10px 0",
                  }}
                >
                  {title}
                </h3>
                <p
                  style={{
                    color: "#6b7280",
                    fontSize: 13,
                    lineHeight: 1.65,
                    margin: "0 0 18px 0",
                  }}
                >
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
          ))}
        </div>

      </div>

      {/* See All Posts CTA */}
      <div style={{ textAlign: "center", marginTop: 48 }}>
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
        >
          See All Posts »
        </Link>
      </div>
    </section>
  );
}
