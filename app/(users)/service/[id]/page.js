import SubHeader from "../../components/sub-header";
import { FaCheckCircle, FaMedkit, FaAmbulance, FaUsers, FaPhoneAlt, FaChartLine, FaTrophy } from "react-icons/fa";
import Link from "next/link";

const SERVICE_MAP = {
  "pharmacology":    "Pharmacology Service",
  "orthopedic":      "Orthopedic Service",
  "hematology":      "Hematology Service",
  "plastic-surgery": "Plastic Surgery Service",
  "neurology":       "Neurology Service",
  "ophthalmology":   "Ophthalmology Service",
  "dental-care":     "Dental Care Service",
  "service-check":   "Service & Check"
};

const STATS = [
  { Icon: FaUsers,     value: "567+", label: "Active Clients" },
  { Icon: FaPhoneAlt,  value: "23K+", label: "Team Support" },
  { Icon: FaChartLine, value: "241+", label: "Projects Completed" },
  { Icon: FaTrophy,    value: "16K+", label: "Award Winner" },
];

const ALL_SERVICES = [
  "Medical lab service",
  "Dental best service",
  "Dedicate doctor best",
  "Team can help achieve",
  "Medical goals lab",
];

export async function generateMetadata({ params }) {
  const resolvedParams = await params;
  const serviceName = SERVICE_MAP[resolvedParams.id] || "Medical Service";
  return {
    title: `${serviceName} – Medilo Healthcare`,
    description: `Learn more about our professional ${serviceName} and state-of-the-art facilities at Medilo.`,
  };
}

export default async function ServiceDetailsPage({ params }) {
  const resolvedParams = await params;
  const serviceId = resolvedParams.id;
  const serviceName = SERVICE_MAP[serviceId] || "Medical Service";

  return (
    <main style={{ fontFamily: "'Segoe UI', sans-serif" }}>
      <style>{`
        /* ── Top section: sidebar + image ── */
        .svc-top-grid {
          display: grid;
          grid-template-columns: 1fr 2.2fr;
          gap: 40px;
          margin-bottom: 48px;
          align-items: start;
        }
        /* ── Dual section: photo + cards ── */
        .svc-dual-grid {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 40px;
          align-items: center;
          margin-bottom: 48px;
        }
        /* ── Stats grid ── */
        .svc-stats-grid {
          display: grid;
          grid-template-columns: repeat(4, 1fr);
          gap: 16px;
        }
        /* ── Sub cards ── */
        .svc-sub-cards {
          display: grid;
          grid-template-columns: 1fr 1fr;
          gap: 16px;
        }
        /* ── Tablet breakpoint ── */
        @media (max-width: 1023px) {
          .svc-top-grid {
            grid-template-columns: 1fr !important;
          }
          .svc-dual-grid {
            grid-template-columns: 1fr !important;
          }
          .svc-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
          }
        }
        /* ── Mobile breakpoint ── */
        @media (max-width: 767px) {
          .svc-top-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .svc-dual-grid {
            grid-template-columns: 1fr !important;
            gap: 24px !important;
          }
          .svc-stats-grid {
            grid-template-columns: repeat(2, 1fr) !important;
            gap: 12px !important;
          }
          .svc-sub-cards {
            grid-template-columns: 1fr !important;
          }
          .svc-top-image {
            height: 220px !important;
          }
          .svc-patient-image {
            height: 180px !important;
          }
        }
        @media (max-width: 479px) {
          .svc-stats-grid {
            grid-template-columns: 1fr 1fr !important;
          }
        }
      `}</style>

      <SubHeader title={serviceName} currentPage={`Services / ${serviceName}`} />

      <section style={{ padding: "64px 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

          {/* ── TOP: Sidebar + Image ── */}
          <div className="svc-top-grid">

            {/* Left Sidebar */}
            <div style={{
              backgroundColor: "#f4f7fc",
              padding: "28px 20px",
              borderRadius: 8,
              border: "1px solid #e2e8f0"
            }}>
              <h3 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 17, margin: "0 0 18px" }}>
                All Service:
              </h3>
              <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 10 }}>
                {ALL_SERVICES.map((item, idx) => (
                  <li key={idx} style={{
                    display: "flex",
                    alignItems: "center",
                    gap: 10,
                    backgroundColor: "#ffffff",
                    padding: "10px 14px",
                    borderRadius: 24,
                    boxShadow: "0 2px 6px rgba(0,0,0,0.04)",
                    fontSize: 13,
                    fontWeight: 700,
                    color: "#0d1b4b"
                  }}>
                    <FaCheckCircle style={{ color: "#2783e3", fontSize: 15, flexShrink: 0 }} />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Right Main Image */}
            <div className="svc-top-image" style={{ borderRadius: 8, overflow: "hidden", height: 360, boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Doctors explaining case"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>
          </div>

          {/* ── SERVICE DETAILS ── */}
          <div style={{ marginBottom: 40 }}>
            <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 24, margin: "0 0 14px" }}>
              Service Details:
            </h2>
            <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.8, margin: "0 0 14px" }}>
              It is a long established fact that a reader will be distracted restore inexpensive e-markets vis to corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic, by the readable content of a page when looking at its layout. The point to this is that normal distribution of Medical services ensures patient safety and quality care.
            </p>
            <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
              We are a long established fact that a reader will be distracted restore inexpensive e-markets vis corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic, by the readable content of a page when looking at the overall layout.
            </p>
          </div>

          {/* ── DUAL: Patient Photo + Cards ── */}
          <div className="svc-dual-grid">

            {/* Left Patient Photo */}
            <div className="svc-patient-image" style={{ borderRadius: 8, overflow: "hidden", height: 240, boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80"
                alt="Patient receiving care"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Right Sub-Service Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 14 }}>
              <div className="svc-sub-cards">
                <div style={{ backgroundColor: "#f4f7fc", padding: "20px 16px", borderRadius: 8, display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#2783e3", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <FaMedkit style={{ fontSize: 15 }} />
                  </div>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 14, margin: 0 }}>Service & Check</h4>
                  <p style={{ color: "#6b7280", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                    Medical competitor research startup to financial
                  </p>
                </div>
                <div style={{ backgroundColor: "#f4f7fc", padding: "20px 16px", borderRadius: 8, display: "flex", flexDirection: "column", gap: 10 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#2783e3", display: "flex", alignItems: "center", justifyContent: "center", color: "#fff" }}>
                    <FaAmbulance style={{ fontSize: 15 }} />
                  </div>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 14, margin: 0 }}>Medical Care</h4>
                  <p style={{ color: "#6b7280", fontSize: 12, lineHeight: 1.5, margin: 0 }}>
                    Medical competitor research startup to financial
                  </p>
                </div>
              </div>

              <div style={{ display: "flex", alignItems: "flex-start", gap: 8 }}>
                <FaCheckCircle style={{ color: "#2783e3", fontSize: 15, marginTop: 2, flexShrink: 0 }} />
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.6, margin: 0 }}>
                  There are many variations of pass available this medical service the team{" "}
                  <Link href="/contact" style={{ color: "#2783e3", fontWeight: 700, textDecoration: "none" }}>READ MORE +</Link>
                </p>
              </div>
            </div>
          </div>

          {/* ── BOTTOM TEXT ── */}
          <div style={{ marginBottom: 48 }}>
            <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
              We is a long established fact that a reader will be distracted restore inexpensive e-markets vis corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic, by the readable content of a page when looking, vis corporate intellectual capital.
            </p>
          </div>
        </div>
      </section>

      {/* ── STATS COUNTER ── */}
      <div style={{ backgroundColor: "#f4f7fc", padding: "56px 0 80px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div className="svc-stats-grid">
            {STATS.map(({ Icon, value, label }) => (
              <div key={label} style={{
                textAlign: "center", padding: "24px 12px",
                backgroundColor: "#ffffff", borderRadius: 6,
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}>
                <div style={{
                  width: 50, height: 50, borderRadius: "50%",
                  backgroundColor: "#0d1b4b",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 14px",
                }}>
                  <Icon style={{ color: "#fff", fontSize: 20 }} />
                </div>
                <p style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 26, lineHeight: 1, margin: "0 0 5px" }}>
                  {value}
                </p>
                <p style={{ color: "#6b7280", fontSize: 12, margin: 0, fontWeight: 500 }}>
                  {label}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

    </main>
  );
}
