import SubHeader from "../../components/sub-header";
import {
  FaUser, FaCalendarAlt, FaStar, FaStarHalfAlt,
  FaSearch, FaMedkit, FaPlay
} from "react-icons/fa";
import Link from "next/link";

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  return {
    title: `Blog Post ${resolvedParams.id} – Medilo Healthcare`,
    description: `Read articles, health tips and guidelines for post ${resolvedParams.id} on the Medilo Healthcare Blog.`,
  };
}

export default async function BlogDetailsPage({ params }) {
  const resolvedParams = await params;
  const blogId = resolvedParams.id;

  return (
    <main style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <style>{`
        /* ── Outer 2-col: content + sidebar ── */
        .blog-outer-grid {
          display: grid;
          grid-template-columns: 2.2fr 1fr;
          gap: 48px;
          align-items: start;
        }

        /* ── Inner mid grid: testimonial + progress bars ── */
        .blog-mid-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 24px;
          margin-bottom: 32px;
        }

        /* ── Appointment form fields ── */
        .blog-form-grid {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }

        /* ── Hero image ── */
        .blog-hero-img {
          height: 400px;
        }

        /* ── Tablet ── */
        @media (max-width: 1023px) {
          .blog-outer-grid {
            grid-template-columns: 1fr !important;
          }
          .blog-hero-img {
            height: 300px !important;
          }
        }

        /* ── Mobile ── */
        @media (max-width: 767px) {
          .blog-outer-grid {
            grid-template-columns: 1fr !important;
            gap: 32px !important;
          }
          .blog-mid-grid {
            grid-template-columns: 1fr !important;
            gap: 16px !important;
          }
          .blog-form-grid {
            grid-template-columns: 1fr !important;
          }
          .blog-hero-img {
            height: 220px !important;
          }
          .blog-form-grid input,
          .blog-form-grid select {
            width: 100% !important;
            box-sizing: border-box !important;
          }
        }

        /* ── Shared input styles ── */
        .blog-input {
          background: #f3f4f6;
          border: none;
          padding: 13px 16px;
          border-radius: 4px;
          font-size: 13.5px;
          color: #0d1b4b;
          outline: none;
          width: 100%;
          box-sizing: border-box;
        }
      `}</style>

      <SubHeader title="Blog Details" currentPage={`Blog / Article ${blogId}`} />

      <section style={{ padding: "64px 0 80px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

          <div className="blog-outer-grid">

            {/* ═══════════════════════════════════
                LEFT: Main Content
            ═══════════════════════════════════ */}
            <div>

              {/* Hero image */}
              <div className="blog-hero-img" style={{ borderRadius: 8, overflow: "hidden", marginBottom: 24, boxShadow: "0 4px 15px rgba(0,0,0,0.07)" }}>
                <img
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=900&q=80"
                  alt="Doctors consulting"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Meta */}
              <div style={{ display: "flex", gap: 20, marginBottom: 20, color: "#6b7280", fontSize: 13, fontWeight: 600, flexWrap: "wrap" }}>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <FaUser style={{ color: "#2783e3" }} /> Medilo
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 6 }}>
                  <FaCalendarAlt style={{ color: "#2783e3" }} /> June 10, 2024
                </span>
              </div>

              {/* Body text */}
              <p style={{ color: "#4b5563", fontSize: 14.5, lineHeight: 1.85, marginBottom: 18 }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>
              <p style={{ color: "#4b5563", fontSize: 14.5, lineHeight: 1.85, marginBottom: 28 }}>
                Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </p>

              {/* Mid grid: Testimonial + Progress bars */}
              <div className="blog-mid-grid">

                {/* Testimonial */}
                <div style={{
                  backgroundColor: "#eff6ff",
                  padding: 22,
                  borderRadius: 8,
                  borderLeft: "4px solid #2783e3"
                }}>
                  <div style={{ display: "flex", gap: 4, color: "#eab308", marginBottom: 12 }}>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
                  <p style={{ color: "#1e3a8a", fontSize: 13, lineHeight: 1.65, fontWeight: 500, margin: "0 0 16px", fontStyle: "italic" }}>
                    "We are privileged to work with hundreds of including many of the world's top hardware, dental, and brands, feel safe and comfortable"
                  </p>
                  <div style={{ display: "flex", alignItems: "center", gap: 10 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", border: "2px solid #fff", flexShrink: 0 }}>
                      <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=150&q=80" alt="Dr Mehara" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <h5 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 13, margin: 0 }}>Dr. Mehara Bara</h5>
                      <p style={{ color: "#6b7280", fontSize: 11, margin: 0 }}>Dental Manager</p>
                    </div>
                  </div>
                </div>

                {/* Progress Bars */}
                <div style={{ border: "1px solid #e2e8f0", padding: 22, borderRadius: 8 }}>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: "0 0 6px" }}>Medical Lab:</h4>
                  <p style={{ color: "#6b7280", fontSize: 12, lineHeight: 1.5, margin: "0 0 16px" }}>
                    We business standard chunk of ness reproduced we bet it
                  </p>
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {[{ label: "Dental", pct: "85%" }, { label: "Medical", pct: "65%" }, { label: "Solution", pct: "78%" }].map(({ label, pct }) => (
                      <div key={label}>
                        <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, fontWeight: 700, color: "#0d1b4b", marginBottom: 4 }}>
                          <span>{label}</span><span>{pct}</span>
                        </div>
                        <div style={{ width: "100%", height: 6, backgroundColor: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                          <div style={{ width: pct, height: "100%", backgroundColor: "#2783e3" }} />
                        </div>
                      </div>
                    ))}
                  </div>
                </div>

              </div>

              {/* Bottom paragraph */}
              <p style={{ color: "#4b5563", fontSize: 14.5, lineHeight: 1.85, marginBottom: 48 }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English.
              </p>

              {/* ── COMMENTS ── */}
              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 36, marginBottom: 48 }}>
                <h3 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 20, margin: "0 0 24px" }}>Comments (3)</h3>

                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {[
                    { img: "https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&q=80", name: "Dr. Barat Mara" },
                    { img: "https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80", name: "Dr. Morat Kara" },
                  ].map((c) => (
                    <div key={c.name} style={{ display: "flex", gap: 14, alignItems: "flex-start" }}>
                      <div style={{ width: 50, height: 50, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                        <img src={c.img} alt={c.name} style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div style={{ flex: 1, minWidth: 0, paddingBottom: 20, borderBottom: "1px solid #f1f5f9" }}>
                        <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 4, flexWrap: "wrap", gap: 6 }}>
                          <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 14, margin: 0 }}>{c.name}</h4>
                          <a href="#reply" style={{ color: "#2783e3", fontWeight: 700, fontSize: 12, textDecoration: "none" }}>Reply</a>
                        </div>
                        <p style={{ color: "rgba(13,27,75,0.45)", fontSize: 11, fontWeight: 600, margin: "0 0 7px" }}>June 14, 2023 12:00 AM</p>
                        <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                          Lorem ipsum is simply free text dolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.
                        </p>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* ── APPOINTMENT FORM ── */}
              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 36 }} id="reply">
                <h3 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 22, margin: "0 0 22px" }}>Make an Appointment</h3>
                <form className="blog-form-grid">
                  <input className="blog-input" type="text" placeholder="Your Name" />
                  <input className="blog-input" type="email" placeholder="Your Email" />
                  <input className="blog-input" type="text" placeholder="Your Phone" />
                  <select className="blog-input" style={{ cursor: "pointer" }}>
                    <option>Choose Service</option>
                    <option>Cardiology</option>
                    <option>Dental Care</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                  </select>
                  <input className="blog-input" type="text" placeholder="Office Address" />
                  <input className="blog-input" type="date" />
                  <div style={{ gridColumn: "1 / -1", marginTop: 8 }}>
                    <button
                      type="submit"
                      style={{ backgroundColor: "#2783e3", color: "#fff", border: "none", padding: "13px 36px", borderRadius: 24, fontWeight: 700, fontSize: 14, cursor: "pointer" }}
                    >
                      Contact Now
                    </button>
                  </div>
                </form>
              </div>

            </div>

            {/* ═══════════════════════════════════
                RIGHT: Sidebar
            ═══════════════════════════════════ */}
            <div>

              {/* Search */}
              <div style={{ display: "flex", marginBottom: 28 }}>
                <input
                  type="text"
                  placeholder="Search..."
                  style={{ flex: 1, padding: "12px 14px", border: "1.5px solid #e2e8f0", borderRight: "none", borderRadius: "4px 0 0 4px", outline: "none", fontSize: 13 }}
                />
                <button style={{ backgroundColor: "#0d1b4b", border: "none", color: "#fff", padding: "0 16px", borderRadius: "0 4px 4px 0", cursor: "pointer" }}>
                  <FaSearch />
                </button>
              </div>

              {/* Blue highlight card */}
              <div style={{ position: "relative", backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80')", backgroundSize: "cover", backgroundPosition: "center", padding: "36px 20px", borderRadius: 6, color: "#fff", marginBottom: 28, overflow: "hidden" }}>
                <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(39,131,227,0.95)", zIndex: 0 }} />
                <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <div style={{ width: 50, height: 50, borderRadius: "50%", border: "2px solid #fff", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto 14px", color: "#fff" }}>
                    <FaMedkit style={{ fontSize: 18 }} />
                  </div>
                  <h4 style={{ fontSize: 18, fontWeight: 800, margin: "0 0 8px" }}>Heart Surgery</h4>
                  <p style={{ fontSize: 12, lineHeight: 1.6, opacity: 0.85, margin: "0 0 18px" }}>Medical competitor research startup to financial</p>
                  <a
                    href="https://www.youtube.com/watch?v=Mx3sZxhFJ_E"
                    target="_blank"
                    rel="noopener noreferrer"
                    style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#fff", color: "#2783e3", border: "none", display: "flex", alignItems: "center", justifyContent: "center", margin: "0 auto", cursor: "pointer", textDecoration: "none" }}
                    aria-label="Watch Heart Surgery video on YouTube"
                  >
                    <FaPlay style={{ fontSize: 11, marginLeft: 2 }} />
                  </a>
                </div>
              </div>

              {/* Recent Posts */}
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: 20, marginBottom: 24 }}>
                <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: "0 0 16px", borderBottom: "2px solid #f1f5f9", paddingBottom: 10 }}>Recent Post</h4>
                <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                  {[1, 2, 3].map((i) => (
                    <div key={i} style={{ display: "flex", gap: 10, alignItems: "center" }}>
                      <div style={{ width: 60, height: 50, borderRadius: 4, overflow: "hidden", flexShrink: 0 }}>
                        <img src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=100&q=80" alt="thumb" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div>
                        <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600 }}>June 10, 2024</span>
                        <h5 style={{ margin: "3px 0 0", color: "#0d1b4b", fontWeight: 800, fontSize: 12, lineHeight: 1.4 }}>
                          <Link href={`/blog/${i}`} style={{ color: "inherit", textDecoration: "none" }}>We play chimney pot Chip bonne.</Link>
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories */}
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: 20, marginBottom: 24 }}>
                <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: "0 0 16px", borderBottom: "2px solid #f1f5f9", paddingBottom: 10 }}>Categories</h4>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                  {[
                    { name: "Dental", count: "06" },
                    { name: "Medical Lab", count: "14" },
                    { name: "Professional", count: "12" },
                    { name: "Technology", count: "23" },
                    { name: "Single-Business", count: "17" },
                    { name: "Pharmacy", count: "22" },
                  ].map((cat) => (
                    <li key={cat.name} style={{ display: "flex", justifyContent: "space-between", fontSize: 13, color: "#4b5563" }}>
                      <span style={{ fontWeight: 600 }}>⇒ {cat.name}</span>
                      <span style={{ color: "#9ca3af" }}>({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags */}
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: 20 }}>
                <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: "0 0 16px", borderBottom: "2px solid #f1f5f9", paddingBottom: 10 }}>Tags</h4>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Doctor", "Glasses", "Surgery", "Optician", "Health", "Help", "Neurology", "Education"].map((tag) => (
                    <span key={tag} style={{ backgroundColor: "#f3f4f6", color: "#4b5563", fontSize: 12, fontWeight: 600, padding: "6px 12px", borderRadius: 4, cursor: "pointer" }}>
                      {tag}
                    </span>
                  ))}
                </div>
              </div>

            </div>
          </div>
        </div>
      </section>
    </main>
  );
}
