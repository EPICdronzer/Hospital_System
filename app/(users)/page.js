import Hero from "./components_home/hero";
import Services from "./components_home/services";
import About from "./components_home/about";
import Gallery from "./components_home/gallery";
import WhyChoose from "./components_home/whychoose";
import Doctors from "./components_home/doctors";
import Blog from "./components_home/blog";

/* ─────────────────────────────────────────────
   SEO METADATA – Next.js App Router
───────────────────────────────────────────── */
export const metadata = {
  title: "Medilo – Trusted Medical & Healthcare Services",
  description:
    "Medilo provides world-class medical care with 24/7 emergency support, expert doctors, and patient-first service. Book your appointment today.",
  keywords: [
    "hospital",
    "medical",
    "healthcare",
    "doctors",
    "emergency care",
    "patient service",
    "Medilo",
    "appointment",
  ],
  authors: [{ name: "Medilo Healthcare" }],
  metadataBase: new URL("https://medilo.com"),
  alternates: { canonical: "/" },
  openGraph: {
    title: "Medilo – Trusted Medical & Healthcare Services",
    description:
      "World-class medical care with 24/7 emergency support, expert doctors, and patient-first service.",
    url: "https://medilo.com",
    siteName: "Medilo",
    type: "website",
  },
};

export default function HomePage() {
  return (
    <main id="top">
      {/* 1. Hero Banner + Info Cards */}
      <Hero />

      {/* 2. Services Cards + Stats Counter */}
      <Services />

      {/* 3. About / Why Trust Our Doctors */}
      <About />

      {/* 4. Photo Gallery */}
      <Gallery />

      {/* 5. Why Choose Medilo (blue CTA section) */}
      <WhyChoose />

      {/* 6. Expert Doctors Team */}
      <Doctors />

      {/* 7. Latest Blog Posts */}
      <Blog />
    </main>
  );
}
