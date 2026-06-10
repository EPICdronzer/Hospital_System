import SubHeader from "../components/sub-header";
import AboutUs from "../components_about/about-us";
import DoctorsTeam from "../components_about/doctors-team";
import WatchVideo from "../components_about/watch-video";

export const metadata = {
  title: "About Us – Medilo Healthcare",
  description: "Learn more about Medilo, our 26+ years of history, our expert medical specialist team, and our state-of-the-art facilities.",
};

export default function AboutPage() {
  return (
    <main>
      <SubHeader title="About Us" currentPage="About" />
      <AboutUs />
      <WatchVideo />
      <DoctorsTeam />
    </main>
  );
}
