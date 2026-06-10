import SubHeader from "../../components/sub-header";
import { FaCheckCircle, FaMedkit, FaAmbulance, FaUsers, FaPhoneAlt, FaChartLine, FaTrophy, FaStethoscope } from "react-icons/fa";
import Link from "next/link";

const SERVICE_MAP = {
  "pharmacology": "Pharmacology Service",
  "orthopedic": "Orthopedic Service",
  "hematology": "Hematology Service",
  "plastic-surgery": "Plastic Surgery Service",
  "neurology": "Neurology Service",
  "ophthalmology": "Ophthalmology Service",
  "dental-care": "Dental Care Service",
  "service-check": "Service & Check"
};

const STATS = [
  { Icon: FaUsers,     value: "567+",  label: "Active Clients" },
  { Icon: FaPhoneAlt,  value: "23K+",  label: "Team Support" },
  { Icon: FaChartLine, value: "241+",  label: "Projects Completed" },
  { Icon: FaTrophy,    value: "16K+",  label: "Award Winner" },
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
      <SubHeader title={serviceName} currentPage={`Services / ${serviceName}`} />

      <section style={{ padding: "80px 0", backgroundColor: "#ffffff" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          
          {/* TOP SECTION: Sidebar List + Large Image */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 2.2fr", gap: 48, marginBottom: 48 }} className="grid-cols-1 lg:grid-cols-2">
            
            {/* Left Sidebar (All Service:) */}
            <div>
              <div style={{
                backgroundColor: "#f4f7fc",
                padding: "32px 24px",
                borderRadius: 8,
                border: "1px solid #e2e8f0"
              }}>
                <h3 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 18, margin: "0 0 20px 0" }}>
                  All Service:
                </h3>
                <ul style={{ listStyle: "none", padding: 0, margin: 0, display: "flex", flexDirection: "column", gap: 12 }}>
                  {[
                    "Medical lab service",
                    "Dental best service",
                    "Dedicate doctor best",
                    "Team can help achieve",
                    "Medical goals lab"
                  ].map((serviceItem, idx) => (
                    <li key={idx} style={{
                      display: "flex",
                      alignItems: "center",
                      gap: 12,
                      backgroundColor: "#ffffff",
                      padding: "12px 16px",
                      borderRadius: 24,
                      boxShadow: "0 2px 6px rgba(0,0,0,0.03)",
                      fontSize: 13.5,
                      fontWeight: 700,
                      color: "#0d1b4b"
                    }}>
                      <FaCheckCircle style={{ color: "#2783e3", fontSize: 16, flexShrink: 0 }} />
                      {serviceItem}
                    </li>
                  ))}
                </ul>
              </div>
            </div>

            {/* Right Main Image */}
            <div style={{ borderRadius: 8, overflow: "hidden", height: 380, boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
              <img
                src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=800&q=80"
                alt="Doctors explaining case"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

          </div>

          {/* SERVICE DETAILS CONTENT */}
          <div style={{ marginBottom: 48 }}>
            <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 26, margin: "0 0 16px 0" }}>
              Service Details:
            </h2>
            
            <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.8, margin: "0 0 16px 0" }}>
              It is a long established fact that a reader will be distracted restore inexpensive e-markets vis to is a long established fact that a reader will be distracted restore inexpensive e-markets vis to corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic, by the readable content of a page when looking, vis corporate intellectual capital. Holisticly reinvent compelling niche markets via scalable strategic, by the readable content of a page when looking at its layout. The point to this singis that normal distribution of Medical.
            </p>

            <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.8, margin: "0 0 28px 0" }}>
              We is a long established fact that a reader will be distracted restore inexpensive e-markets vis tontelectual capital. Holisticly reinvent compelling niche markets via scalable strategic, by the readable content of a page when looking, vis corporate intellectual capital. vis corporate intellectual capitalh olisticly reinvent compelling niche markets via scalable strategic, by the readable content of a page when looking.
            </p>
          </div>

          {/* DUAL SECTION: Patient Photo + Cards */}
          <div style={{ display: "grid", gridTemplateColumns: "1fr 1.2fr", gap: 48, alignItems: "center", marginBottom: 48 }} className="grid-cols-1 lg:grid-cols-2">
            
            {/* Left Patient Photo */}
            <div style={{ borderRadius: 8, overflow: "hidden", height: 260, boxShadow: "0 6px 20px rgba(0,0,0,0.08)" }}>
              <img
                src="https://images.unsplash.com/photo-1581594693702-fbdc51b2763b?auto=format&fit=crop&w=600&q=80"
                alt="Patient receiving care"
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
            </div>

            {/* Right Sub-Service Cards */}
            <div style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              <div style={{ display: "grid", gridTemplateColumns: "1fr 1fr", gap: 16 }} className="grid-cols-1 sm:grid-cols-2">
                
                {/* Card 1: Service & Check */}
                <div style={{ backgroundColor: "#f4f7fc", padding: "24px 20px", borderRadius: 8, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#2783e3", display: "flex", alignItems: "center", justifyCenter: "center", color: "#ffffff", paddingLeft: 10 }}>
                    <FaMedkit style={{ fontSize: 16 }} />
                  </div>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: 0 }}>Service & Check</h4>
                  <p style={{ color: "#6b7280", fontSize: 12.5, lineHeight: 1.5, margin: 0 }}>
                    Medical competitor research startup to financial
                  </p>
                </div>

                {/* Card 2: Medical Care */}
                <div style={{ backgroundColor: "#f4f7fc", padding: "24px 20px", borderRadius: 8, display: "flex", flexDirection: "column", gap: 12 }}>
                  <div style={{ width: 36, height: 36, borderRadius: "50%", backgroundColor: "#2783e3", display: "flex", alignItems: "center", justifyCenter: "center", color: "#ffffff", paddingLeft: 10 }}>
                    <FaAmbulance style={{ fontSize: 16 }} />
                  </div>
                  <h4 style={{ color: "#0d1b4b", fontWeight: 800, fontSize: 15, margin: 0 }}>Medical Care</h4>
                  <p style={{ color: "#6b7280", fontSize: 12.5, lineHeight: 1.5, margin: 0 }}>
                    Medical competitor research startup to financial
                  </p>
                </div>

              </div>

              {/* Sub Check Line */}
              <div style={{ display: "flex", alignItems: "flex-start", gap: 8, marginTop: 12 }}>
                <FaCheckCircle style={{ color: "#2783e3", fontSize: 16, marginTop: 2, flexShrink: 0 }} />
                <p style={{ color: "#6b7280", fontSize: 13, lineHeight: 1.5, margin: 0 }}>
                  There are many variations of pass available this medical service the team{" "}
                  <Link href="/contact" style={{ color: "#2783e3", fontWeight: 700, textDecoration: "none" }}>READ MORE +</Link>
                </p>
              </div>

            </div>

          </div>

          {/* BOTTOM PARAGRAPH TEXT */}
          <div style={{ marginBottom: 64 }}>
            <p style={{ color: "#6b7280", fontSize: 14, lineHeight: 1.8, margin: 0 }}>
              We is a long established fact that a reader will be distracted restore inexpensive e-markets vis tontelectual capital. Holisticly reinvent compelling niche markets via scalable strategic, by the readable content of a page when looking, vis corporate intellectual capital. vis corporate intellectual capitalh olisticly reinvent compelling niche markets via scalable strategic, by the readable content of a page when looking.
            </p>
          </div>

        </div>
      </section>

      {/* STATS COUNTER ROW */}
      <div style={{ backgroundColor: "#f4f7fc", padding: "56px 0 136px" }}>
        <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
          <div style={{ display: "grid", gridTemplateColumns: "repeat(4, 1fr)", gap: 16 }} className="grid-cols-1 sm:grid-cols-2 lg:grid-cols-4">
            {STATS.map(({ Icon, value, label }) => (
              <div key={label} style={{
                textAlign: "center", padding: "28px 16px",
                backgroundColor: "#ffffff", borderRadius: 6,
                boxShadow: "0 2px 10px rgba(0,0,0,0.04)",
              }}>
                <div style={{
                  width: 52, height: 52, borderRadius: "50%",
                  backgroundColor: "#0d1b4b",
                  display: "flex", alignItems: "center", justifyContent: "center",
                  margin: "0 auto 16px",
                }}>
                  <Icon style={{ color: "#fff", fontSize: 22 }} />
                </div>
                <p style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 28, lineHeight: 1, margin: "0 0 6px" }}>
                  {value}
                </p>
                <p style={{ color: "#6b7280", fontSize: 12.5, margin: 0, fontWeight: 500 }}>
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
