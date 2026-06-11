"use client";

import { useState } from "react";
import Link from "next/link";
import { FaUser, FaRegComment, FaChevronRight } from "react-icons/fa";

const POSTS = [
  {
    id: 1,
    title: "डिजिटल स्वास्थ्य और चिकित्सा सेवाएँ | Digital Health & Medical Care",
    excerpt: "भारतीय स्वास्थ्य सेवा के क्षेत्र में तकनीकी प्रगति और सुधार | Tech advancements and improvements in the Indian healthcare landscape.",
    img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=600&q=80",
    category: "चिकित्सा | MEDICAL",
    date: "May 02",
    author: "Admin"
  },
  {
    id: 2,
    title: "भारतीय स्वास्थ्य देखभाल प्रणाली का भविष्य | Future of Indian Healthcare",
    excerpt: "निवारक स्वास्थ्य सेवा और कल्याण के महत्व पर एक मार्गदर्शिका | A complete guide on the vital importance of preventive health and wellness.",
    img: "https://images.unsplash.com/photo-1516841273335-e39b37888115?auto=format&fit=crop&w=600&q=80",
    category: "स्वास्थ्य | HEALTH",
    date: "April 12",
    author: "Admin"
  },
  {
    id: 3,
    title: "कार्यस्थल पर संक्रमण की रोकथाम और सुरक्षा | Infection Prevention at Work",
    excerpt: "स्वच्छता और स्वास्थ्य सुरक्षा बनाए रखने के आवश्यक उपाय | Essential guidelines to maintain a safe, hygienic, and sterile workspace.",
    img: "https://images.unsplash.com/photo-1559839734-2b71ea197ec2?auto=format&fit=crop&w=600&q=80",
    category: "कल्याण | WELLNESS",
    date: "Jan 02",
    author: "Admin"
  },
  {
    id: 4,
    title: "सामुदायिक स्वास्थ्य सेवा और ग्रामीण विकास | Community Health Initiatives",
    excerpt: "दूरदराज के क्षेत्रों में प्राथमिक चिकित्सा सेवाओं की सुगमता | Bridging the gap in accessibility of primary care services in rural India.",
    img: "https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80",
    category: "चिकित्सा | MEDICAL",
    date: "June 02",
    author: "Admin"
  },
  {
    id: 5,
    title: "महामारी सुरक्षा एवं स्वास्थ्य प्रबंधन | Pandemic Safety Protocols",
    excerpt: "सार्वजनिक स्थानों और अस्पतालों में सुरक्षा नियमों का पालन | Key updates and safety practices to prevent transmission and ensure safety.",
    img: "https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80",
    category: "स्वास्थ्य | HEALTH",
    date: "May 22",
    author: "Admin"
  },
  {
    id: 6,
    title: "टेलीमेडिसिन: घर बैठे ऑनलाइन चिकित्सा परामर्श | Rise of Telemedicine",
    excerpt: "डिजिटल माध्यम से देश के प्रमुख डॉक्टरों से संपर्क करने का तरीका | Connecting you to top medical experts instantly via online consultations.",
    img: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=600&q=80",
    category: "चिकित्सा | MEDICAL",
    date: "Feb 10",
    author: "Admin"
  }
];

export default function BlogList() {
  const [hoveredCard, setHoveredCard] = useState(null);

  return (
    <>
      <style>{`
        .bl-grid {
          display: grid;
          grid-template-columns: repeat(3, 1fr);
          gap: 28px;
        }
        @media (max-width: 1023px) {
          .bl-grid { grid-template-columns: repeat(2, 1fr) !important; }
        }
        @media (max-width: 599px) {
          .bl-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    <section aria-label="Our Largest Blog" style={{ backgroundColor: "#ffffff", padding: "80px 0", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 56 }}>
          <div style={{ display: "flex", alignItems: "center", justifyContent: "center", gap: 10, marginBottom: 10 }}>
            <div style={{ width: 18, height: 2, backgroundColor: "#2783e3" }} />
            <span style={{ color: "#2783e3", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em" }}>
              हमारा ब्लॉग | OUR LARGEST BLOG
            </span>
            <div style={{ width: 18, height: 2, backgroundColor: "#2783e3" }} />
          </div>
          <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 34, lineHeight: 1.25, margin: 0 }}>
            नवीनतम लेख और समाचार<br />
            <span style={{ fontSize: 18, fontWeight: 700, color: "#6b7280" }}>Latest Posts & Articles</span>
          </h2>
        </div>

        {/* 6-Card Grid */}
        <div className="bl-grid">
          {POSTS.map(({ id, title, excerpt, img, category, date, author }, index) => {
            const isHovered = hoveredCard === index;
            
            return (
              <Link 
                href={`/blog/${id}`}
                key={id}
                onMouseEnter={() => setHoveredCard(index)}
                onMouseLeave={() => setHoveredCard(null)}
                style={{
                  display: "block",
                  backgroundColor: "#ffffff",
                  borderRadius: 4,
                  overflow: "hidden",
                  textDecoration: "none",
                  boxShadow: isHovered ? "0 10px 30px rgba(0,0,0,0.12)" : "0 4px 15px rgba(0,0,0,0.05)",
                  transition: "all 0.3s ease",
                  position: "relative"
                }}
              >
                {/* Image Wrapper */}
                <div style={{ position: "relative", height: 220, overflow: "hidden" }}>
                  
                  {/* Image */}
                  <img
                    src={img}
                    alt={title}
                    style={{
                      width: "100%",
                      height: "100%",
                      objectFit: "cover",
                      transform: isHovered ? "scale(1.05)" : "scale(1)",
                      transition: "transform 0.4s ease",
                      display: "block"
                    }}
                  />

                  {/* Top-Left Category Badge */}
                  <span style={{
                    position: "absolute",
                    top: 16,
                    left: 16,
                    backgroundColor: "#2783e3",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: 11,
                    padding: "4px 12px",
                    borderRadius: 12,
                    zIndex: 2
                  }}>
                    {category}
                  </span>

                  {/* Overlapping Date Tag on Bottom Right */}
                  <div style={{
                    position: "absolute",
                    bottom: 0,
                    right: 16,
                    backgroundColor: isHovered ? "#2783e3" : "#0d1b4b",
                    color: "#ffffff",
                    padding: "8px 16px",
                    fontWeight: 700,
                    fontSize: 12,
                    textAlign: "center",
                    borderTopLeftRadius: 4,
                    borderTopRightRadius: 4,
                    zIndex: 2,
                    transition: "background-color 0.3s ease",
                    fontFamily: "Courier, monospace",
                    textTransform: "uppercase"
                  }}>
                    {date.split(" ")[0]}
                    <br />
                    <span style={{ fontSize: 13 }}>{date.split(" ")[1]}</span>
                  </div>

                </div>

                {/* Details Content padding */}
                <div style={{ padding: "24px 24px 32px 24px" }}>
                  
                  {/* Meta (Author + Comments) */}
                  <div style={{ display: "flex", gap: 16, marginBottom: 14, color: "#6b7280", fontSize: 12.5, fontWeight: 500 }}>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FaUser style={{ color: "#2783e3", fontSize: 11 }} /> लेखक | By: {author}
                    </span>
                    <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                      <FaRegComment style={{ color: "#2783e3", fontSize: 12 }} /> टिप्पणी | Comment
                    </span>
                  </div>

                  {/* Title */}
                  <h3 style={{
                    color: "#0d1b4b",
                    fontWeight: 800,
                    fontSize: 17,
                    lineHeight: 1.4,
                    margin: "0 0 12px 0",
                    transition: "color 0.3s ease"
                  }}>
                    {title}
                  </h3>

                  {/* Excerpt */}
                  <p style={{
                    color: "#6b7280",
                    fontSize: 13.5,
                    lineHeight: 1.6,
                    margin: "0 0 20px 0"
                  }}>
                    {excerpt}
                  </p>

                  {/* Read More Link */}
                  <span style={{
                    display: "inline-flex",
                    alignItems: "center",
                    gap: 6,
                    color: "#2783e3",
                    fontWeight: 700,
                    fontSize: 13.5
                  }}>
                    और पढ़ें | Read More <FaChevronRight style={{ fontSize: 9 }} />
                  </span>

                </div>

                {/* Diagonal Blue Corner Ribbon (Visible/Enlarges on Hover) */}
                <div style={{
                  position: "absolute",
                  bottom: 0,
                  right: 0,
                  width: 0,
                  height: 0,
                  borderStyle: "solid",
                  borderWidth: isHovered ? "0 0 24px 24px" : "0 0 0px 0px",
                  borderColor: `transparent transparent #2783e3 transparent`,
                  transition: "all 0.3s ease",
                  zIndex: 3
                }} />

              </Link>
            );
          })}
        </div>

      </div>
    </section>
    </>
  );
}
