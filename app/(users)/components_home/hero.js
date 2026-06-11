"use client";
import { useState, useEffect } from "react";
import { FaCheckCircle, FaPhoneAlt, FaEnvelope, FaPlay } from "react-icons/fa";

export default function Hero() {
  const [card1Hovered, setCard1Hovered] = useState(false);
  const [card2Hovered, setCard2Hovered] = useState(false);
  const [cacheBuster, setCacheBuster] = useState("");

  useEffect(() => {
    setCacheBuster(Date.now().toString());
  }, []);

  return (
    <section className="relative w-full">

      {/* ══════════════════════ HERO BANNER ══════════════════════ */}
      <div className="relative overflow-hidden min-h-[500px] pb-[90px] flex items-center max-sm:min-h-[420px] max-sm:pb-[120px]">

        {/* ✅ Background image — fixed filename: hero-bg.png.png */}
        <img
          src={cacheBuster ? `/hero-bg.png.png?v=${cacheBuster}` : "/hero-bg.png.png"}
          alt="Medical hero background"
          className="absolute inset-0 w-full h-full object-cover object-center"
          style={{ zIndex: 0 }}
        />

        {/* Dark overlay for text readability */}
        <div className="absolute inset-0 bg-black/40" style={{ zIndex: 1 }} />

        {/* TEXT CONTENT */}
        <div
          className="relative w-full max-w-[1200px] mx-auto px-[68px] pt-[70px] pb-[40px] max-[900px]:px-[40px] max-[900px]:pt-[60px] max-sm:px-5 max-sm:pt-[44px] max-sm:pb-7"
          style={{ zIndex: 20 }}
        >
          <div className="max-w-[500px] max-sm:max-w-full">

            {/* Sanskrit medical motto eyebrow */}
            <div className="flex items-center gap-2 mb-3">
              <span className="text-[#FF9933] text-[13px] font-extrabold uppercase tracking-widest bg-white/10 px-3 py-1 rounded-md">
                सेवा परमो धर्मः | Service is the Supreme Duty
              </span>
            </div>

            <h1 className="text-white text-[44px] max-[900px]:text-[34px] max-sm:text-[26px] max-[380px]:text-[20px] font-black leading-[1.15] mb-4 tracking-tight font-sans">
              स्वस्थ भारत, समृद्ध भारत<br />
              <span className="text-[#128807]">Dedicated Patient Seva</span>
            </h1>

            <p className="text-[#bdd1f0] text-[13.5px] max-sm:text-[13px] leading-[1.75] mb-4 max-w-[380px] max-sm:max-w-full font-sans">
              नमस्ते (Namaste)! Welcome to Medilo Healthcare India. We offer premier healthcare facilities blended with compassionate Indian hospitality and care.
            </p>

            <ul className="list-none m-0 mb-7 p-0 flex flex-col gap-[9px]">
              {["अनुभवी एवं समर्पित चिकित्सक दल (Expert Indian Doctors)", "24/7 आपातकालीन सेवा एवं सहयोग (Emergency Seva)"].map((item) => (
                <li key={item} className="flex items-center gap-2 text-white text-[13.5px] font-sans">
                  <FaCheckCircle className="text-[#128807] shrink-0 text-[15px]" />
                  {item}
                </li>
              ))}
            </ul>

            {/* CTA row */}
            <div className="flex items-center gap-6 flex-wrap gap-y-3 max-sm:gap-[14px] max-[380px]:text-[12px]">
              {/* Contact Now button */}
              <a
                href="/contact"
                className="inline-flex items-center gap-1.5 bg-[#FF9933] hover:bg-[#e07f24] text-white font-bold text-[14px] max-[380px]:text-[12px] px-7 py-3 rounded-full no-underline transition-colors duration-150 whitespace-nowrap font-sans shadow-lg"
              >
                संपर्क करें | Contact <span className="font-black text-[16px]">»</span>
              </a>

              {/* How We Work button pointing to YouTube */}
              <a
                href="https://www.youtube.com/watch?v=Mx3sZxhFJ_E"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-3 text-white font-semibold text-[14px] max-[380px]:text-[12px] no-underline hover:opacity-80 transition-opacity duration-150 whitespace-nowrap font-sans"
              >
                <span className="w-[38px] h-[38px] rounded-full bg-[#128807] flex items-center justify-center shrink-0">
                  <FaPlay className="text-[10px] text-white ml-0.5" />
                </span>
                वीडियो देखें | Watch Video
              </a>
            </div>

          </div>

          {/* ✅ Doctor Image on Right (hidden on mobile/tablet) */}
          <div className="absolute right-[38px] bottom-[-90px] hidden lg:block w-[480px] h-[650px] z-30 pointer-events-none">
            <img
              src={cacheBuster ? `/indian_doctor_hero.png?v=${cacheBuster}` : "/indian_doctor_hero.png"}
              alt="Indian Doctor Medilo"
              className="absolute inset-0 w-full h-full object-contain object-bottom"
            />
          </div>
        </div>

        {/* 24 Hrs Badge — centered in the hero */}
        <div
          aria-label="24 hours support"
          className="absolute z-30 w-[90px] h-[90px] rounded-full bg-[#2783e3] border-4 border-white shadow-[0_4px_18px_rgba(39,131,227,0.5)] hidden lg:flex flex-col items-center justify-center text-white font-sans"
          style={{
            left: "50%",
            top: "50%",
            transform: "translate(-50%, -50%)",
          }}
        >
          <span className="text-[28px] font-black leading-none">24</span>
          <span className="text-[8px] font-bold uppercase tracking-[0.5px] text-center leading-[1.35]">
            Hours<br />Support
          </span>
        </div>

      </div>
      {/* END HERO BANNER */}

      {/* ══════════════════════ OVERLAPPING CARDS ══════════════════════ */}
      <div
        className="relative z-40 max-w-[860px] mx-auto -mt-[70px] px-8 grid grid-cols-2 gap-4 max-sm:grid-cols-1 max-sm:-mt-[60px] max-sm:px-4 max-[900px]:px-5"
      >

        {/* Card 1 – Emergency Call */}
        <div
          role="button"
          tabIndex={0}
          className="flex items-start gap-[18px] p-7 shadow-[0_6px_30px_rgba(0,0,0,0.12)] cursor-pointer transition-colors duration-[250ms] font-sans max-sm:border-r-0 max-sm:border-b-2 max-sm:border-b-[#e0ecff]"
          onClick={() => (window.location.href = "tel:+1234567890")}
          onKeyDown={(e) => e.key === "Enter" && (window.location.href = "tel:+1234567890")}
          onMouseEnter={() => setCard1Hovered(true)}
          onMouseLeave={() => setCard1Hovered(false)}
          style={{
            backgroundColor: card1Hovered ? "#0d2060" : "#ffffff",
          }}
        >
          <div
            className="w-16 h-16 flex items-center justify-center shrink-0 rounded-md text-white transition-colors duration-[250ms]"
            style={{ backgroundColor: card1Hovered ? "#2783e3" : "#0d2060" }}
          >
            <FaPhoneAlt className="text-[26px]" />
          </div>
          <div>
            <h2
              className="font-extrabold text-[20px] mb-1 transition-colors duration-[250ms] font-sans"
              style={{ color: card1Hovered ? "#ffffff" : "#0d2060" }}
            >
              Emergency Call
            </h2>
            <p
              className="text-[13px] mb-4 transition-colors duration-[250ms] font-sans"
              style={{ color: card1Hovered ? "#bdd1f0" : "#999" }}
            >
              24/7 – Support and easy
            </p>
            <button
              className="border-none cursor-pointer text-[12px] font-bold py-[9px] px-5 rounded-[3px] font-sans tracking-[0.02em] transition-[background-color,color] duration-[250ms]"
              onClick={(e) => { e.stopPropagation(); window.location.href = "tel:+1234567890"; }}
              style={{
                backgroundColor: card1Hovered ? "#2783e3" : "#2783e3",
                color: "#ffffff",
              }}
            >
              Appointment Now
            </button>
          </div>
        </div>

        {/* Card 2 – Your Message */}
        <div
          role="button"
          tabIndex={0}
          className="flex items-start gap-[18px] p-7 shadow-[0_6px_30px_rgba(0,0,0,0.12)] cursor-pointer transition-colors duration-[250ms] font-sans"
          onClick={() => (window.location.href = "mailto:medixo25822@gmail.com")}
          onKeyDown={(e) => e.key === "Enter" && (window.location.href = "mailto:medixo25822@gmail.com")}
          onMouseEnter={() => setCard2Hovered(true)}
          onMouseLeave={() => setCard2Hovered(false)}
          style={{ backgroundColor: card2Hovered ? "#0d2060" : "#ffffff" }}
        >
          <div
            className="w-16 h-16 flex items-center justify-center shrink-0 rounded-md text-white transition-colors duration-[250ms]"
            style={{ backgroundColor: card2Hovered ? "#2783e3" : "#0d2060" }}
          >
            <FaEnvelope className="text-[26px]" />
          </div>
          <div>
            <h2
              className="font-extrabold text-[20px] mb-1 transition-colors duration-[250ms] font-sans"
              style={{ color: card2Hovered ? "#ffffff" : "#0d2060" }}
            >
              Your Message
            </h2>
            <p
              className="text-[13px] mb-4 transition-colors duration-[250ms] font-sans"
              style={{ color: card2Hovered ? "#bdd1f0" : "#999" }}
            >
              medixo25822@gmail.com
            </p>
            <button
              className="border-none cursor-pointer text-[12px] font-bold py-[9px] px-5 rounded-[3px] font-sans tracking-[0.02em] transition-[background-color,color] duration-[250ms]"
              onClick={(e) => { e.stopPropagation(); window.location.href = "mailto:medixo25822@gmail.com"; }}
              style={{
                backgroundColor: "#2783e3",
                color: "#ffffff",
              }}
            >
              Appointment Now
            </button>
          </div>
        </div>

        {/* Divider */}
        <div className="col-span-2 max-sm:col-span-1 h-[2px] bg-white" />
      </div>

      {/* White space below cards */}
      <div className="bg-white h-[60px]" />

    </section>
  );
}