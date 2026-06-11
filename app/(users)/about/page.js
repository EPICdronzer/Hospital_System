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
      {/* Timetable widget – right-aligned, below the about images */}
      <div style={{
        background: "#f8fafc",
        padding: "0 24px 60px",
      }}>
        <div style={{ maxWidth: 1200, margin: "0 auto" }}>
          <div style={{ display: "flex", justifyContent: "flex-end" }}>
            <div style={{ width: "100%", maxWidth: 560 }}>
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
