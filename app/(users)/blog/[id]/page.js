import SubHeader from "../../components/sub-header";
import { FaUser, FaCalendarAlt, FaStar, FaStarHalfAlt, FaSearch, FaMedkit, FaPlay, FaRegClock, FaMapMarkerAlt, FaRegCommentDots } from "react-icons/fa";
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
      <SubHeader title="Blog Details" currentPage={`Blog / Article ${blogId}`} />

      <section style={{ padding: "80px 0 160px", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          
          {/* Main 2-Column Grid */}
          <div style={{ display: "grid", gridTemplateColumns: "2.2fr 1fr", gap: 48 }} className="grid-cols-1 lg:grid-cols-2">
            
            {/* LEFT COLUMN: Main content */}
            <div>
              {/* Main photo */}
              <div style={{ borderRadius: 8, overflow: "hidden", height: 420, marginBottom: 24, boxShadow: "0 4px 15px rgba(0,0,0,0.06)" }}>
                <img
                  src="https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=800&q=80"
                  alt="Doctors consulting"
                  style={{ width: "100%", height: "100%", objectFit: "cover" }}
                />
              </div>

              {/* Meta information */}
              <div style={{ display: "flex", gap: 20, marginBottom: 24, color: "#6b7280", fontSize: 13.5, fontWeight: 600 }}>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaUser style={{ color: "#2783e3" }} /> Medilo
                </span>
                <span style={{ display: "flex", alignItems: "center", gap: 8 }}>
                  <FaCalendarAlt style={{ color: "#2783e3" }} /> June 10, 2024
                </span>
              </div>

              {/* Description paragraphs */}
              <p style={{ color: "#4b5563", fontSize: 14.5, lineHeight: 1.8, marginBottom: 20 }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text, and a search for 'lorem ipsum' will uncover many web sites still in their infancy.
              </p>
              
              <p style={{ color: "#4b5563", fontSize: 14.5, lineHeight: 1.8, marginBottom: 32 }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters.
              </p>

              {/* Middle Grid: Testimonial & Progress Bars */}
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 24, marginBottom: 32 }} className="grid-cols-1 md:grid-cols-2">
                
                {/* Highlight/Testimonial Box */}
                <div style={{
                  backgroundColor: "#eff6ff",
                  padding: 24,
                  borderRadius: 8,
                  borderLeft: "4px solid #2783e3"
                }}>
                  {/* Stars */}
                  <div style={{ display: "flex", gap: 4, color: "#eab308", marginBottom: 12 }}>
                    <FaStar /><FaStar /><FaStar /><FaStar /><FaStarHalfAlt />
                  </div>
                  <p style={{ color: "#1e3a8a", fontSize: 13, lineHeight: 1.6, fontWeight: 500, margin: "0 0 16px 0", fontStyle: "italic" }}>
                    "We are privileged to work with hundreds of ncluding many of the world's top hardware, dental, and brands, feel safe and comfortable"
                  </p>
                  {/* Doctor Info */}
                  <div style={{ display: "flex", alignItems: "center", gap: 12 }}>
                    <div style={{ width: 44, height: 44, borderRadius: "50%", overflow: "hidden", border: "2px solid #ffffff" }}>
                      <img src="https://images.unsplash.com/photo-1607990281513-2c110a25bd8c?auto=format&fit=crop&w=150&q=80" alt="Dr Mehara" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div>
                      <h5 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 13.5, margin: 0 }}>Dr. Mehara Bara</h5>
                      <p style={{ color: "#6b7280", fontSize: 11, margin: 0 }}>Dental Manager</p>
                    </div>
                  </div>
                </div>

                {/* Medical Lab Progress Bars */}
                <div style={{
                  border: "1px solid #e2e8f0",
                  padding: 24,
                  borderRadius: 8
                }}>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 16, margin: "0 0 8px 0" }}>Medical Lab:</h4>
                  <p style={{ color: "#6b7280", fontSize: 12.5, lineHeight: 1.5, margin: "0 0 16px 0" }}>
                    We businesss standard chunk of ness reproduced we bet it
                  </p>

                  {/* Progress bars list */}
                  <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
                    {/* Dental */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, fontWeight: 700, color: "#0d1b4b", marginBottom: 4 }}>
                        <span>Dental</span>
                        <span>85%</span>
                      </div>
                      <div style={{ width: "100%", height: 6, backgroundColor: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ width: "85%", height: "100%", backgroundColor: "#2783e3" }} />
                      </div>
                    </div>

                    {/* Medical */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, fontWeight: 700, color: "#0d1b4b", marginBottom: 4 }}>
                        <span>Medical</span>
                        <span>65%</span>
                      </div>
                      <div style={{ width: "100%", height: 6, backgroundColor: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ width: "65%", height: "100%", backgroundColor: "#2783e3" }} />
                      </div>
                    </div>

                    {/* Solution */}
                    <div>
                      <div style={{ display: "flex", justifyContent: "space-between", fontSize: 11.5, fontWeight: 700, color: "#0d1b4b", marginBottom: 4 }}>
                        <span>Solution</span>
                        <span>78%</span>
                      </div>
                      <div style={{ width: "100%", height: 6, backgroundColor: "#e2e8f0", borderRadius: 3, overflow: "hidden" }}>
                        <div style={{ width: "78%", height: "100%", backgroundColor: "#2783e3" }} />
                      </div>
                    </div>
                  </div>

                </div>

              </div>

              {/* Paragraph below middle grid */}
              <p style={{ color: "#4b5563", fontSize: 14.5, lineHeight: 1.8, marginBottom: 48 }}>
                It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout. The point of using Lorem Ipsum is that it has a more-or-less normal distribution of letters, as opposed to using 'Content here, content here', making it look like readable English. Many desktop publishing packages and web page editors now use Lorem Ipsum as their default model text.
              </p>

              {/* COMMENTS SECTION */}
              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 40, marginBottom: 56 }}>
                <h3 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 20, margin: "0 0 28px 0" }}>Comments (3)</h3>
                
                <div style={{ display: "flex", flexDirection: "column", gap: 24 }}>
                  {/* Comment 1 */}
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                      <img src="https://images.unsplash.com/photo-1594824476967-48c8b964273f?auto=format&fit=crop&w=150&q=80" alt="Dr Barat" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ flex: 1, paddingBottom: 20, borderBottom: "1px solid #f1f5f9" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 14.5, margin: 0 }}>Dr. Barat Mara</h4>
                        <a href="#reply" style={{ color: "#2783e3", fontWeight: 700, fontSize: 12.5, textDecoration: "none" }}>Reply</a>
                      </div>
                      <p style={{ color: "rgba(13,27,75,0.45)", fontSize: 11, fontWeight: 600, margin: "0 0 8px 0" }}>June 14, 2023 12:00 AM</p>
                      <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                        Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.
                      </p>
                    </div>
                  </div>

                  {/* Comment 2 */}
                  <div style={{ display: "flex", gap: 16, alignItems: "flex-start" }}>
                    <div style={{ width: 52, height: 52, borderRadius: "50%", overflow: "hidden", flexShrink: 0 }}>
                      <img src="https://images.unsplash.com/photo-1622253692010-333f2da6031d?auto=format&fit=crop&w=150&q=80" alt="Dr Morat" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                    </div>
                    <div style={{ flex: 1, paddingBottom: 20, borderBottom: "1px solid #f1f5f9" }}>
                      <div style={{ display: "flex", justifyContent: "space-between", alignItems: "center", marginBottom: 6 }}>
                        <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 14.5, margin: 0 }}>Dr. Morat Kara</h4>
                        <a href="#reply" style={{ color: "#2783e3", fontWeight: 700, fontSize: 12.5, textDecoration: "none" }}>Reply</a>
                      </div>
                      <p style={{ color: "rgba(13,27,75,0.45)", fontSize: 11, fontWeight: 600, margin: "0 0 8px 0" }}>June 14, 2023 12:00 AM</p>
                      <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                        Lorem ipsum is simply free textdolor sit amet, consectetur notted adipisicing elit sed do iusmod tempor incididu.
                      </p>
                    </div>
                  </div>
                </div>

              </div>

              {/* APPOINTMENT FORM IN DETAILS */}
              <div style={{ borderTop: "1px solid #e2e8f0", paddingTop: 40 }} id="reply">
                <h3 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 24, margin: "0 0 24px 0" }}>Make an Appointment</h3>
                
                <form style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-cols-1 sm:grid-cols-2">
                  <input type="text" placeholder="Your Name" style={{ backgroundColor: "#f3f4f6", border: "none", padding: "14px 20px", borderRadius: 4, fontSize: 13.5, color: "#0d1b4b", outline: "none" }} />
                  <input type="email" placeholder="Your Email" style={{ backgroundColor: "#f3f4f6", border: "none", padding: "14px 20px", borderRadius: 4, fontSize: 13.5, color: "#0d1b4b", outline: "none" }} />
                  <input type="text" placeholder="Your Phone" style={{ backgroundColor: "#f3f4f6", border: "none", padding: "14px 20px", borderRadius: 4, fontSize: 13.5, color: "#0d1b4b", outline: "none" }} />
                  
                  <select style={{ backgroundColor: "#f3f4f6", border: "none", padding: "14px 20px", borderRadius: 4, fontSize: 13.5, color: "#0d1b4b", outline: "none" }}>
                    <option>Choose Service</option>
                    <option>Cardiology</option>
                    <option>Dental Care</option>
                    <option>Neurology</option>
                    <option>Orthopedics</option>
                  </select>

                  <input type="text" placeholder="Office Address" style={{ backgroundColor: "#f3f4f6", border: "none", padding: "14px 20px", borderRadius: 4, fontSize: 13.5, color: "#0d1b4b", outline: "none" }} />
                  <input type="date" placeholder="dd-mm-yyyy" style={{ backgroundColor: "#f3f4f6", border: "none", padding: "14px 20px", borderRadius: 4, fontSize: 13.5, color: "#0d1b4b", outline: "none" }} />
                  
                  <div style={{ gridColumn: "1 / -1", marginTop: 12 }}>
                    <button type="submit" style={{ backgroundColor: "#2783e3", color: "#ffffff", border: "none", padding: "13px 36px", borderRadius: 24, fontWeight: 700, fontSize: 14, cursor: "pointer" }}>
                      Contact Now
                    </button>
                  </div>
                </form>
              </div>

            </div>

            {/* RIGHT COLUMN: Sidebar widgets */}
            <div>
              {/* Search Widget */}
              <div style={{ display: "flex", marginBottom: 32 }}>
                <input
                  type="text"
                  placeholder="Search..."
                  style={{
                    flex: 1,
                    padding: "12px 16px",
                    border: "1.5px solid #e2e8f0",
                    borderRight: "none",
                    borderRadius: "4px 0 0 4px",
                    outline: "none",
                    fontSize: 13.5
                  }}
                />
                <button style={{
                  backgroundColor: "#0d1b4b",
                  border: "none",
                  color: "#ffffff",
                  padding: "0 18px",
                  borderRadius: "0 4px 4px 0",
                  cursor: "pointer"
                }}>
                  <FaSearch />
                </button>
              </div>

              {/* Blue Highlight Sidebar Card */}
              <div style={{
                position: "relative",
                backgroundImage: "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=400&q=80')",
                backgroundSize: "cover",
                backgroundPosition: "center",
                padding: "40px 24px",
                borderRadius: 6,
                color: "#ffffff",
                marginBottom: 32,
                overflow: "hidden"
              }}>
                <div style={{ position: "absolute", inset: 0, backgroundColor: "rgba(39, 131, 227, 0.95)", zIndex: 0 }} />
                
                <div style={{ position: "relative", zIndex: 1, textAlign: "center" }}>
                  <div style={{
                    width: 52, height: 52, borderRadius: "50%",
                    border: "2px solid #ffffff", display: "flex",
                    alignItems: "center", justifyCenter: "center",
                    margin: "0 auto 16px", color: "#ffffff", paddingLeft: 16
                  }}>
                    <FaMedkit style={{ fontSize: 18 }} />
                  </div>
                  <h4 style={{ fontSize: 20, fontWeight: 800, margin: "0 0 10px 0" }}>Heart Surgery</h4>
                  <p style={{ fontSize: 12.5, lineHeight: 1.6, opacity: 0.85, margin: "0 0 20px 0" }}>
                    Medical competitor research startup to financial
                  </p>
                  <button style={{
                    width: 36, height: 36, borderRadius: "50%",
                    backgroundColor: "#ffffff", color: "#2783e3",
                    border: "none", display: "flex", alignItems: "center",
                    justifyContent: "center", margin: "0 auto", cursor: "pointer"
                  }}>
                    <FaPlay style={{ fontSize: 11, marginLeft: 2 }} />
                  </button>
                </div>
              </div>

              {/* Recent Post Widget */}
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: 24, marginBottom: 32 }}>
                <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 16, margin: "0 0 20px 0", borderBottom: "2px solid #f1f5f9", paddingBottom: 10 }}>
                  Recent Post
                </h4>
                
                <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
                  {[1, 2, 3].map((postIdx) => (
                    <div key={postIdx} style={{ display: "flex", gap: 12, alignItems: "center" }}>
                      <div style={{ width: 64, height: 56, borderRadius: 4, overflow: "hidden", flexShrink: 0 }}>
                        <img src={`https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=100&q=80`} alt="Thumb" style={{ width: "100%", height: "100%", objectFit: "cover" }} />
                      </div>
                      <div>
                        <span style={{ fontSize: 11, color: "#9ca3af", fontWeight: 600 }}>June 10, 2024</span>
                        <h5 style={{ margin: "4px 0 0 0", color: "#0d1b4b", fontWeight: 800, fontSize: 12.5, lineHeight: 1.4 }}>
                          <Link href={`/blog/${postIdx}`} style={{ color: "inherit", textDecoration: "none" }}>We play chimney pot Chip bonne.</Link>
                        </h5>
                      </div>
                    </div>
                  ))}
                </div>
              </div>

              {/* Categories Widget */}
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: 24, marginBottom: 32 }}>
                <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 16, margin: "0 0 20px 0", borderBottom: "2px solid #f1f5f9", paddingBottom: 10 }}>
                  Categories
                </h4>
                
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    { name: "Dental", count: "06" },
                    { name: "Medical Lab", count: "14" },
                    { name: "Professional", count: "12" },
                    { name: "Technology", count: "23" },
                    { name: "Single-Business", count: "17" },
                    { name: "Pharmacy", count: "22" }
                  ].map((cat) => (
                    <li key={cat.name} style={{ display: "flex", justifyContent: "space-between", fontSize: 13.5, color: "#4b5563" }}>
                      <span style={{ fontWeight: 600 }}>⇒ {cat.name}</span>
                      <span style={{ color: "#9ca3af" }}>({cat.count})</span>
                    </li>
                  ))}
                </ul>
              </div>

              {/* Tags Widget */}
              <div style={{ border: "1px solid #e2e8f0", borderRadius: 6, padding: 24 }}>
                <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 16, margin: "0 0 20px 0", borderBottom: "2px solid #f1f5f9", paddingBottom: 10 }}>
                  Tags
                </h4>
                
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["Doctor", "Glasses", "Surgery", "Optician", "Health", "Help", "Neurology", "Education"].map((tag) => (
                    <span key={tag} style={{
                      backgroundColor: "#f3f4f6",
                      color: "#4b5563",
                      fontSize: 12,
                      fontWeight: 600,
                      padding: "6px 12px",
                      borderRadius: 4,
                      cursor: "pointer"
                    }}>
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
