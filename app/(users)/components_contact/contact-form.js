"use client";

import { useState, useEffect } from "react";
import { FaPhoneAlt, FaEnvelopeOpen } from "react-icons/fa";

export default function ContactForm() {
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    subject: "",
    phone: "",
    comments: "",
    captchaInput: ""
  });
  
  const [captchaCode, setCaptchaCode] = useState("");
  const [status, setStatus] = useState({ type: "", message: "" });

  const generateCaptcha = () => {
    const chars = "0123456789abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ";
    let code = "";
    for (let i = 0; i < 6; i++) {
      code += chars[Math.floor(Math.random() * chars.length)];
    }
    setCaptchaCode(code);
  };

  useEffect(() => {
    generateCaptcha();
  }, []);

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!formData.name || !formData.email || !formData.comments) {
      setStatus({ type: "error", message: "कृपया सभी आवश्यक फ़ील्ड (नाम, ईमेल और टिप्पणी) भरें। | Please fill in all required fields (Name, Email, and Comments)." });
      return;
    }
    
    if (formData.captchaInput.trim() !== captchaCode) {
      setStatus({ type: "error", message: "सत्यापन कोड मेल नहीं खाता। कृपया पुनः प्रयास करें। | Verification word does not match the CAPTCHA code. Please try again." });
      generateCaptcha(); 
      setFormData(prev => ({ ...prev, captchaInput: "" }));
      return;
    }

    setStatus({ type: "success", message: "धन्यवाद! आपका संदेश सफलतापूर्वक भेज दिया गया है। | Thank you! Your request has been sent successfully." });
    setFormData({
      name: "",
      email: "",
      subject: "",
      phone: "",
      comments: "",
      captchaInput: ""
    });
    generateCaptcha(); // regenerate on success
  };

  return (
    <>
      <style>{`
        .cf-layout {
          display: grid;
          grid-template-columns: 1fr 1.2fr;
          gap: 64px;
          align-items: stretch;
        }
        .cf-inputs-grid { grid-template-columns: 1fr 1fr; gap: 16px; }
        @media (max-width: 1023px) {
          .cf-layout { grid-template-columns: 1fr !important; gap: 32px !important; }
        }
        @media (max-width: 767px) {
          .cf-image-wrapper {
            padding: 16px 16px 0 16px !important;
          }
          .cf-hero-img {
            height: 200px !important;
          }
          .cf-emergency-box {
            width: 100% !important;
            padding: 16px 20px !important;
            margin-top: 16px !important;
            margin-bottom: 16px !important;
            box-sizing: border-box !important;
          }
        }
        @media (max-width: 599px) {
          .cf-inputs-grid { grid-template-columns: 1fr !important; }
        }
      `}</style>
    <section aria-label="Contact Form Section" style={{ padding: "80px 0", backgroundColor: "#ffffff", fontFamily: "'Segoe UI', sans-serif" }}>
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>
        
        <div className="cf-layout">
          
          {/* LEFT COLUMN: Dentist image and Emergency Badge */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "space-between" }}>
            
            {/* Main Wrapper with light blue box and top navy border */}
            <div className="cf-image-wrapper" style={{
              backgroundColor: "#eaf2ff", // light blue background
              borderTop: "6px solid #0d1b4b", // thick navy border line at the top
              borderRadius: "4px 4px 0 0",
              padding: "40px 40px 0 40px",
              position: "relative",
              flex: 1,
              display: "flex",
              flexDirection: "column",
              alignItems: "center"
            }}>
              
              {/* Doctor / Dentist holding teeth model */}
              <div className="cf-hero-img" style={{ position: "relative", width: "100%", height: 320, zIndex: 1 }}>
                <img 
                  src="https://images.unsplash.com/photo-1588776814546-1ffcf47267a5?auto=format&fit=crop&w=600&q=80"
                  alt="Dentist holding teeth model"
                  style={{ width: "100%", height: "100%", objectFit: "cover", borderRadius: 4 }}
                />
                
                {/* Dentist/Dental Molecule Graphic (Overlay) */}
                <div style={{
                  position: "absolute",
                  top: -20,
                  right: -20,
                  width: 100,
                  height: 100,
                  backgroundImage: "radial-gradient(#2783e3 20%, transparent 20%), radial-gradient(#2783e3 20%, transparent 20%)",
                  backgroundPosition: "0 0, 10px 10px",
                  backgroundSize: "20px 20px",
                  opacity: 0.35,
                  zIndex: 0
                }} />
              </div>

              {/* Emergency Call Box directly nested at the bottom */}
              <div className="cf-emergency-box" style={{
                backgroundColor: "#0d1b4b", // dark navy blue
                padding: "24px 32px",
                width: "90%",
                borderRadius: 4,
                display: "flex",
                alignItems: "center",
                gap: 20,
                boxShadow: "0 8px 25px rgba(13,27,75,0.15)",
                marginTop: 30,
                marginBottom: 30,
                zIndex: 2
              }}>
                <div style={{
                  width: 52,
                  height: 52,
                  borderRadius: "50%",
                  backgroundColor: "#1e293b",
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "center",
                  color: "#2783e3",
                  border: "2.5px solid #2783e3"
                }}>
                  {/* Phone icon with detail */}
                  <FaPhoneAlt style={{ fontSize: 18 }} />
                </div>
                <div>
                  <h4 style={{ color: "#ffffff", fontWeight: 800, fontSize: 18, margin: "0 0 4px" }}>आपातकालीन कॉल | Emergency Call</h4>
                  <p style={{ color: "#a5b4fc", fontSize: 13, margin: 0, fontWeight: 500 }}>24/7 - त्वरित सहायता | Support and Assistance</p>
                </div>
              </div>

            </div>

          </div>

          {/* RIGHT COLUMN: Contact Form */}
          <div style={{ display: "flex", flexDirection: "column", justifyContent: "center" }}>
            
            {/* Eyebrow */}
            <div style={{ display: "flex", alignItems: "center", gap: 8, marginBottom: 12 }}>
              <div style={{ width: 28, height: 2, backgroundColor: "#2783e3" }} />
              <span style={{ color: "#2783e3", fontWeight: 700, fontSize: 12, textTransform: "uppercase", letterSpacing: "0.1em" }}>
                हमसे संपर्क करें | CONTACT US
              </span>
            </div>

            {/* Heading */}
            <h2 style={{ color: "#0d1b4b", fontWeight: 900, fontSize: 34, lineHeight: 1.25, margin: "0 0 28px" }}>
              हमारे विशेषज्ञ डॉक्टरों से मिलें<br />
              <span style={{ fontSize: 20, fontWeight: 700, color: "#6b7280" }}>Meet Our Specialist Doctors</span>
            </h2>

            {/* Status Feedback */}
            {status.message && (
              <div style={{
                padding: "12px 20px",
                borderRadius: 4,
                marginBottom: 20,
                fontSize: 13.5,
                fontWeight: 600,
                backgroundColor: status.type === "success" ? "#ecfdf5" : "#fef2f2",
                color: status.type === "success" ? "#047857" : "#b91c1c",
                border: status.type === "success" ? "1px solid #10b981" : "1px solid #f87171"
              }}>
                {status.message}
              </div>
            )}

            {/* Form */}
            <form onSubmit={handleSubmit} style={{ display: "flex", flexDirection: "column", gap: 16 }}>
              
              {/* Inputs Grid (2x2) */}
              <div className="cf-inputs-grid">
                <input
                  type="text"
                  name="name"
                  value={formData.name}
                  onChange={handleChange}
                  placeholder="आपका नाम | Your name"
                  required
                  style={{
                    backgroundColor: "#f3f4f6",
                    border: "none",
                    padding: "14px 20px",
                    borderRadius: 4,
                    fontSize: 13.5,
                    color: "#0d1b4b",
                    outline: "none",
                    width: "100%"
                  }}
                />
                <input
                  type="email"
                  name="email"
                  value={formData.email}
                  onChange={handleChange}
                  placeholder="आपका ईमेल | Your email"
                  required
                  style={{
                    backgroundColor: "#f3f4f6",
                    border: "none",
                    padding: "14px 20px",
                    borderRadius: 4,
                    fontSize: 13.5,
                    color: "#0d1b4b",
                    outline: "none",
                    width: "100%"
                  }}
                />
                <input
                  type="text"
                  name="subject"
                  value={formData.subject}
                  onChange={handleChange}
                  placeholder="विषय | Your Subject"
                  style={{
                    backgroundColor: "#f3f4f6",
                    border: "none",
                    padding: "14px 20px",
                    borderRadius: 4,
                    fontSize: 13.5,
                    color: "#0d1b4b",
                    outline: "none",
                    width: "100%"
                  }}
                />
                <input
                  type="text"
                  name="phone"
                  value={formData.phone}
                  onChange={handleChange}
                  placeholder="आपका फ़ोन नंबर | Your phone"
                  style={{
                    backgroundColor: "#f3f4f6",
                    border: "none",
                    padding: "14px 20px",
                    borderRadius: 4,
                    fontSize: 13.5,
                    color: "#0d1b4b",
                    outline: "none",
                    width: "100%"
                  }}
                />
              </div>

              {/* Textarea */}
              <textarea
                name="comments"
                value={formData.comments}
                onChange={handleChange}
                placeholder="आपकी टिप्पणी | Your comments"
                rows={5}
                required
                style={{
                  backgroundColor: "#f3f4f6",
                  border: "none",
                  padding: "14px 20px",
                  borderRadius: 4,
                  fontSize: 13.5,
                  color: "#0d1b4b",
                  outline: "none",
                  resize: "vertical",
                  width: "100%"
                }}
              />

              {/* Captcha Verification */}
              <div style={{ display: "flex", flexDirection: "column", gap: 8, maxWidth: 350 }}>
                <input
                  type="text"
                  name="captchaInput"
                  value={formData.captchaInput}
                  onChange={handleChange}
                  placeholder="नीचे दिया गया कोड टाइप करें | Type the below word"
                  required
                  style={{
                    backgroundColor: "#f3f4f6",
                    border: "none",
                    padding: "12px 20px",
                    borderRadius: 4,
                    fontSize: 13.5,
                    color: "#0d1b4b",
                    outline: "none",
                    width: "100%"
                  }}
                />
                
                {/* Styled CAPTCHA Display Box */}
                <div style={{
                  display: "flex",
                  alignItems: "center",
                  justifyContent: "space-between",
                  gap: 16
                }}>
                  <div style={{
                    backgroundColor: "#e2e8f0",
                    padding: "10px 24px",
                    borderRadius: 4,
                    fontWeight: 700,
                    fontSize: 18,
                    letterSpacing: 6,
                    color: "#475569",
                    userSelect: "none",
                    fontStyle: "italic",
                    textDecoration: "line-through",
                    display: "inline-block",
                    fontFamily: "Courier, monospace",
                    boxShadow: "inset 0 2px 4px rgba(0,0,0,0.06)"
                  }}>
                    {captchaCode}
                  </div>
                  <button
                    type="button"
                    onClick={generateCaptcha}
                    style={{
                      background: "none",
                      border: "none",
                      color: "#2783e3",
                      fontSize: 12,
                      fontWeight: 700,
                      cursor: "pointer"
                    }}
                  >
                    नया कोड | Refresh
                  </button>
                </div>
              </div>

              {/* Submit Button */}
              <div style={{ marginTop: 12 }}>
                <button
                  type="submit"
                  style={{
                    backgroundColor: "#2783e3",
                    color: "#ffffff",
                    border: "none",
                    padding: "13px 36px",
                    borderRadius: 24,
                    fontWeight: 700,
                    fontSize: 14,
                    cursor: "pointer",
                    transition: "background 0.2s"
                  }}
                  onMouseEnter={(e) => e.target.style.backgroundColor = "#1667b9"}
                  onMouseLeave={(e) => e.target.style.backgroundColor = "#2783e3"}
                >
                  संदेश भेजें | Send Request
                </button>
              </div>

            </form>

          </div>

        </div>

      </div>
    </section>
    </>
  );
}
