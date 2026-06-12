"use client";

import { useState, useEffect } from "react";
import { usePathname } from "next/navigation";
import { FaWhatsapp, FaPhoneAlt } from "react-icons/fa";

export default function FloatingContact() {
  const [isVisible, setIsVisible] = useState(true);
  const pathname = usePathname();

  useEffect(() => {
    const footer = document.querySelector("footer");
    if (!footer) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        setIsVisible(!entry.isIntersecting);
      },
      {
        rootMargin: "0px",
        threshold: 0,
      }
    );

    observer.observe(footer);

    return () => {
      observer.disconnect();
    };
  }, [pathname]);

  return (
    <div
      style={{
        position: "fixed",
        right: "20px",
        bottom: "30px",
        display: "flex",
        flexDirection: "column",
        gap: "14px",
        zIndex: 9999,
        opacity: isVisible ? 1 : 0,
        pointerEvents: isVisible ? "auto" : "none",
        transform: isVisible ? "translateY(0)" : "translateY(20px)",
        transition: "opacity 0.3s ease, transform 0.3s ease",
      }}
    >
      <style>{`
        .floating-btn {
          width: 52px;
          height: 52px;
          border-radius: 50%;
          display: flex;
          align-items: center;
          justify-content: center;
          color: #ffffff;
          text-decoration: none;
          box-shadow: 0 4px 15px rgba(0,0,0,0.2);
          transition: all 0.3s cubic-bezier(0.175, 0.885, 0.32, 1.275);
          position: relative;
        }
        .floating-btn:hover {
          transform: scale(1.1) translateY(-3px);
          box-shadow: 0 6px 20px rgba(0,0,0,0.3);
        }
        .floating-tooltip {
          position: absolute;
          right: 64px;
          background-color: #0d1b4b;
          color: #ffffff;
          padding: 6px 12px;
          border-radius: 4px;
          font-size: 12px;
          font-weight: 700;
          white-space: nowrap;
          opacity: 0;
          visibility: hidden;
          transition: all 0.3s ease;
          box-shadow: 0 4px 10px rgba(0,0,0,0.15);
          pointer-events: none;
        }
        .floating-btn:hover .floating-tooltip {
          opacity: 1;
          visibility: visible;
          right: 60px;
        }
        @keyframes pulse-whatsapp {
          0%, 100% { box-shadow: 0 0 0 0 rgba(37, 211, 102, 0.5); }
          50% { box-shadow: 0 0 0 10px rgba(37, 211, 102, 0); }
        }
        @keyframes pulse-call {
          0%, 100% { box-shadow: 0 0 0 0 rgba(255, 153, 51, 0.5); }
          50% { box-shadow: 0 0 0 10px rgba(255, 153, 51, 0); }
        }
        .whatsapp-pulse {
          animation: pulse-whatsapp 2s infinite;
        }
        .call-pulse {
          animation: pulse-call 2s infinite 0.5s;
        }
      `}</style>
      
      {/* Call Button */}
      <a
        href="tel:+919969569535"
        className="floating-btn call-pulse"
        style={{
          background: "linear-gradient(135deg, #FF9933 0%, #e07f24 100%)",
        }}
        aria-label="Call Us"
      >
        <FaPhoneAlt size={18} />
        <span className="floating-tooltip">कॉल करें | Call Now</span>
      </a>

      {/* WhatsApp Button */}
      <a
        href="https://wa.me/919969569535"
        className="floating-btn whatsapp-pulse"
        style={{
          background: "linear-gradient(135deg, #25d366 0%, #128c7e 100%)",
        }}
        target="_blank"
        rel="noopener noreferrer"
        aria-label="WhatsApp Us"
      >
        <FaWhatsapp size={22} />
        <span className="floating-tooltip">व्हाट्सएप | WhatsApp Us</span>
      </a>
    </div>
  );
}
