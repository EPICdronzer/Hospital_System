import SubHeader from "../components/sub-header";
import AboutUs from "../components_about/about-us";
import DoctorsTeam from "../components_about/doctors-team";
import WatchVideo from "../components_about/watch-video";
import MiniTimetable from "../components_about/mini-timetable";

export const metadata = {
  title: "About Us – Medilo Healthcare",
  description: "Learn more about Medilo, our 26+ years of history, our expert medical specialist team, and our state-of-the-art facilities.",
};

export default function AboutPage() {
  return (
    <main>
      <SubHeader title="About Us" currentPage="About" />
      <AboutUs />
      {/* Timetable widget & Info Card Row */}
      <div style={{
        background: "#f8fafc",
        padding: "0 24px 60px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <style>{`
            .about-widgets-grid {
              display: grid;
              grid-template-columns: 1.15fr 0.85fr;
              gap: 48px;
            }
            @media (max-width: 1023px) {
              .about-widgets-grid {
                grid-template-columns: 1fr !important;
                gap: 40px !important;
              }
            }
          `}</style>
          
          <div className="about-widgets-grid">
            {/* LEFT COLUMN: Indian-themed Info Card */}
            <div className="about-info-card" style={{
              backgroundColor: "#0d1b4b",
              borderLeft: "6px solid #FF9933",
              borderRight: "6px solid #128807",
              padding: "40px 32px",
              color: "#ffffff",
              display: "flex",
              flexDirection: "column",
              justifyContent: "space-between",
              boxShadow: "0 10px 30px rgba(13,27,75,0.15)",
              fontFamily: "'Segoe UI', Arial, sans-serif"
            }}>
              <div>
                {/* Eyebrow */}
                <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                  <span style={{ color: "#FF9933", fontWeight: 800, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.08em" }}>
                    चिकित्सा सहायता | Medical Seva
                  </span>
                </div>
                {/* Heading */}
                <h3 style={{ fontSize: "24px", fontWeight: 900, margin: "0 0 16px 0", color: "#ffffff", lineHeight: 1.3 }}>
                  स्वास्थ्य सेवा एवं परामर्श के लिए आज ही संपर्क करें<br />
                  <span style={{ fontSize: "16px", fontWeight: 700, color: "#cbd5e1" }}>Get Premium Medical Consultation Today</span>
                </h3>
                {/* Description */}
                <p style={{ color: "#94a3b8", fontSize: "13.5px", lineHeight: 1.6, margin: "0 0 24px 0" }}>
                  हम आपकी सेवा में निरंतर समर्पित हैं। किसी भी चिकित्सकीय सहायता, ओपीडी समय अथवा तत्काल परामर्श के लिए हमारे हेल्पलाइन नंबर पर संपर्क करें।
                  We are here to support your medical needs. Contact us for any OPD schedules or instant support.
                </p>
                {/* Features List */}
                <ul style={{ listStyle: "none", padding: 0, margin: "0 0 32px 0", display: "flex", flexDirection: "column", gap: "10px" }}>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", fontWeight: 600 }}>
                    <span style={{ color: "#128807" }}>✔</span> 24/7 निःशुल्क एम्बुलेंस सेवा | Free Ambulance
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", fontWeight: 600 }}>
                    <span style={{ color: "#128807" }}>✔</span> आपातकालीन देखभाल इकाई | ICU & Emergency Care
                  </li>
                  <li style={{ display: "flex", alignItems: "center", gap: "10px", fontSize: "13.5px", fontWeight: 600 }}>
                    <span style={{ color: "#128807" }}>✔</span> दवाओं की होम डिलीवरी | Pharmacy Home Delivery
                  </li>
                </ul>
              </div>
              {/* Call CTA Action */}
              <div style={{ display: "flex", alignItems: "center", gap: "20px", flexWrap: "wrap" }}>
                <a href="tel:+919969569535" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  gap: "8px",
                  backgroundColor: "#FF9933",
                  color: "#ffffff",
                  fontWeight: 700,
                  fontSize: "14px",
                  padding: "12px 28px",
                  textDecoration: "none",
                  boxShadow: "0 4px 12px rgba(255,153,51,0.3)",
                  transition: "background 0.2s"
                }}
                  onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#e07f24"}
                  onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#FF9933"}
                >
                  कॉल करें | Call Now
                </a>
                <a href="/contact" style={{
                  display: "inline-flex",
                  alignItems: "center",
                  color: "#ffffff",
                  fontWeight: 600,
                  fontSize: "13.5px",
                  textDecoration: "none",
                  borderBottom: "1.5px solid #ffffff",
                  paddingBottom: "2px",
                  transition: "opacity 0.2s"
                }}
                  onMouseEnter={(e) => e.currentTarget.style.opacity = 0.8}
                  onMouseLeave={(e) => e.currentTarget.style.opacity = 1}
                >
                  पूछताछ करें | Enquiry »
                </a>
              </div>
            </div>

            {/* RIGHT COLUMN: The Timetable */}
            <div style={{ width: "100%", maxWidth: 560, justifySelf: "end" }}>
              {/* Eyebrow label */}
              <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
                <div style={{ width: 28, height: 2, background: "#FF9933" }} />
                <span style={{ color: "#FF9933", fontWeight: 700, fontSize: 11, textTransform: "uppercase", letterSpacing: "0.12em", fontFamily: "'Segoe UI', Arial, sans-serif" }}>
                  डॉक्टर का समय | Doctor Timings
                </span>
              </div>
              <MiniTimetable />
            </div>
          </div>
        </div>
      </div>
      <WatchVideo />
      <DoctorsTeam />
    </main>
  );
}
