"use client";

import Link from "next/link";
import { useState, useRef, useEffect } from "react";
import { useRouter } from "next/navigation";
import {
  FaStethoscope,
  FaChevronDown,
  FaSearch,
  FaBars,
  FaTimes,
} from "react-icons/fa";

const NAV_LINKS = [
  { label: "मुख्य पृष्ठ | Home",    href: "/",          drop: false },
  { label: "परिचय | About Us",   href: "/about",     drop: false },
  { label: "सेवाएं | Services", href: "/service",   drop: false },
  { label: "ब्लॉग | Blog",      href: "/blog",      drop: false },
  { label: "समय सारणी | Timetable", href: "/timetable", drop: false },
  { label: "संपर्क | Contact",   href: "/contact",   drop: false },
];

const SEARCH_INDEX = [
  { title: "मुख्य पृष्ठ | Home",            href: "/",           category: "Page" },
  { title: "परिचय | About Us",        href: "/about",      category: "Page" },
  { title: "सेवाएं | Our Services",    href: "/service",    category: "Page" },
  { title: "ब्लॉग | Blog",            href: "/blog",       category: "Page" },
  { title: "समय सारणी | Timetable",       href: "/timetable",  category: "Page" },
  { title: "संपर्क | Contact Us",      href: "/contact",    category: "Page" },
  { title: "औषध विज्ञान | Pharmacology",          href: "/service/pharmacology",    category: "Service" },
  { title: "हड्डी रोग विज्ञान | Orthopedic",            href: "/service/orthopedic",      category: "Service" },
  { title: "रक्त विज्ञान | Hematology",            href: "/service/hematology",      category: "Service" },
  { title: "प्लास्टिक सर्जरी | Plastic Surgery",       href: "/service/plastic-surgery", category: "Service" },
  { title: "न्यूरोलॉजी | Neurology",             href: "/service/neurology",       category: "Service" },
  { title: "नेत्र विज्ञान | Ophthalmology",         href: "/service/ophthalmology",   category: "Service" },
  { title: "दंत चिकित्सा | Dental Care",           href: "/service/dental-care",     category: "Service" },
  { title: "स्वास्थ्य जांच | Service & Check",       href: "/service/service-check",   category: "Service" },
  { title: "Dr. Jayesh Vyas",      href: "/doctor/jayesh-vyas",     category: "Doctor" },
  { title: "Dr. Sandeep Banerjee",  href: "/doctor/sandeep-banerjee",    category: "Doctor" },
  { title: "Dr. Nirmala Patel",      href: "/doctor/nirmala-patel",     category: "Doctor" },
  { title: "Dr. Rahul Choudhury",   href: "/doctor/rahul-choudhury",      category: "Doctor" },
  { title: "Dr. Aisha Khan",        href: "/doctor/aisha-khan",       category: "Doctor" },
  { title: "Dr. Madhavan Nair",    href: "/doctor/madhavan-nair",   category: "Doctor" },
  { title: "Dr. Priya Sharma",      href: "/doctor/priya-sharma",     category: "Doctor" },
  { title: "Dr. Devendra Lal",         href: "/doctor/devendra-lal",        category: "Doctor" },
  { title: "Medical Of This Working Health Blog", href: "/blog/1",    category: "Blog" },
  { title: "There Is Only One Thing That Is Hospital", href: "/blog/2", category: "Blog" },
  { title: "Working World and Infection Prevention", href: "/blog/3", category: "Blog" },
];

const CATEGORY_COLORS = {
  Page:    "#0d1b4b",
  Service: "#2783e3",
  Doctor:  "#10b981",
  Blog:    "#f59e0b",
};

export default function Navbar() {
  const [mobileOpen, setMobileOpen] = useState(false);
  const [searchOpen, setSearchOpen] = useState(false);
  const [query, setQuery] = useState("");
  const [results, setResults] = useState([]);
  const searchRef = useRef(null);
  const inputRef = useRef(null);
  const router = useRouter();

  /* ── Search logic ── */
  const handleSearch = (val) => {
    setQuery(val);
    if (!val.trim()) { setResults([]); return; }
    const q = val.toLowerCase();
    const filtered = SEARCH_INDEX.filter(
      (item) =>
        item.title.toLowerCase().includes(q) ||
        item.category.toLowerCase().includes(q)
    ).slice(0, 8);
    setResults(filtered);
  };

  const handleSearchSubmit = (e) => {
    e.preventDefault();
    if (results.length > 0) {
      router.push(results[0].href);
      closeSearch();
    }
  };

  const openSearch = () => {
    setSearchOpen(true);
    setTimeout(() => inputRef.current?.focus(), 50);
  };

  const closeSearch = () => {
    setSearchOpen(false);
    setQuery("");
    setResults([]);
  };

  /* Close on outside click */
  useEffect(() => {
    const handler = (e) => {
      if (searchRef.current && !searchRef.current.contains(e.target)) {
        closeSearch();
      }
    };
    if (searchOpen) document.addEventListener("mousedown", handler);
    return () => document.removeEventListener("mousedown", handler);
  }, [searchOpen]);

  /* Close on Escape */
  useEffect(() => {
    const handler = (e) => { if (e.key === "Escape") closeSearch(); };
    document.addEventListener("keydown", handler);
    return () => document.removeEventListener("keydown", handler);
  }, []);

  return (
    <>
      <nav
        style={{
          backgroundColor: "#ffffff",
          borderBottom: "2px solid #2783e3",
          boxShadow: "0 1px 6px rgba(0,0,0,0.07)",
          position: "sticky",
          top: 0,
          zIndex: 50,
        }}
        aria-label="Main navigation"
      >
        {/* Sleek Indian flag tricolor top border */}
        <div style={{ display: "flex", height: "4px", width: "100%" }}>
          <div style={{ flex: 1, backgroundColor: "#FF9933" }} />
          <div style={{ flex: 1, backgroundColor: "#ffffff" }} />
          <div style={{ flex: 1, backgroundColor: "#128807" }} />
        </div>

        <div
          style={{
            maxWidth: "1200px",
            margin: "0 auto",
            padding: "0 24px",
            height: "64px",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "24px",
          }}
        >
          {/* ── Logo ── */}
          <a
            href="/"
            style={{
              display: "flex",
              alignItems: "center",
              gap: "10px",
              textDecoration: "none",
              flexShrink: 0,
            }}
            aria-label="Medilo home"
          >
            <span
              style={{
                width: "42px",
                height: "42px",
                borderRadius: "50%",
                backgroundColor: "#2783e3",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                boxShadow: "0 2px 8px rgba(39,131,227,0.35)",
              }}
            >
              <FaStethoscope style={{ color: "#ffffff", fontSize: "18px" }} />
            </span>
            <span
              style={{
                color: "#0d1b4b",
                fontWeight: 800,
                fontSize: "22px",
                letterSpacing: "-0.5px",
                fontFamily: "'Segoe UI', Arial, sans-serif",
              }}
            >
              मेडिलो | Medilo
            </span>
          </a>

          {/* ── Desktop Nav Links ── */}
          <ul
            style={{
              display: "none",
              listStyle: "none",
              margin: 0,
              padding: 0,
              gap: "24px",
              alignItems: "center",
            }}
            className="desktop-nav"
          >
            {NAV_LINKS.map(({ label, href }) => (
              <li key={label} style={{ position: "relative" }}>
                <a
                  href={href}
                  style={{
                    display: "flex",
                    alignItems: "center",
                    gap: "4px",
                    color: "#333333",
                    fontWeight: 500,
                    fontSize: "14.5px",
                    textDecoration: "none",
                    fontFamily: "'Segoe UI', Arial, sans-serif",
                    whiteSpace: "nowrap",
                    transition: "color 0.15s",
                  }}
                  onMouseEnter={(e) => (e.currentTarget.style.color = "#2783e3")}
                  onMouseLeave={(e) => (e.currentTarget.style.color = "#333333")}
                >
                  {label}
                </a>
              </li>
            ))}
          </ul>

          {/* ── Right Controls ── */}
          <div style={{ display: "flex", alignItems: "center", gap: "10px" }}>
            {/* Search Button */}
            <button
              className="desktop-search"
              aria-label="Search"
              onClick={openSearch}
              style={{
                width: "36px",
                height: "36px",
                borderRadius: "50%",
                border: "1.5px solid #cccccc",
                background: "transparent",
                display: "flex",
                alignItems: "center",
                justifyContent: "center",
                color: "#555555",
                cursor: "pointer",
                transition: "border-color 0.15s, color 0.15s",
                flexShrink: 0,
              }}
              onMouseEnter={(e) => {
                e.currentTarget.style.borderColor = "#2783e3";
                e.currentTarget.style.color = "#2783e3";
              }}
              onMouseLeave={(e) => {
                e.currentTarget.style.borderColor = "#cccccc";
                e.currentTarget.style.color = "#555555";
              }}
            >
              <FaSearch style={{ fontSize: "13px" }} />
            </button>

            {/* Contact Now CTA */}
            <a
              className="desktop-contact"
              href="/contact"
              style={{
                display: "inline-flex",
                alignItems: "center",
                gap: "6px",
                backgroundColor: "#2783e3",
                color: "#ffffff",
                fontWeight: 700,
                fontSize: "14px",
                padding: "9px 22px",
                borderRadius: "999px",
                textDecoration: "none",
                fontFamily: "'Segoe UI', Arial, sans-serif",
                whiteSpace: "nowrap",
                transition: "background-color 0.15s",
                letterSpacing: "0.01em",
              }}
              onMouseEnter={(e) => (e.currentTarget.style.backgroundColor = "#1a6fd0")}
              onMouseLeave={(e) => (e.currentTarget.style.backgroundColor = "#2783e3")}
            >
              Contact Now <span style={{ fontWeight: 900, fontSize: "15px" }}>»</span>
            </a>

            {/* Mobile Toggle */}
            <button
              onClick={() => setMobileOpen(!mobileOpen)}
              style={{
                background: "none",
                border: "none",
                color: "#0d1b4b",
                cursor: "pointer",
                fontSize: "20px",
                display: "none",
                padding: "4px",
              }}
              className="mobile-toggle"
              aria-label={mobileOpen ? "Close menu" : "Open menu"}
            >
              {mobileOpen ? <FaTimes /> : <FaBars />}
            </button>
          </div>
        </div>

        {/* ── Mobile Drawer ── */}
        {mobileOpen && (
          <div
            style={{
              backgroundColor: "#ffffff",
              borderTop: "1px solid #e5e7eb",
              boxShadow: "0 4px 12px rgba(0,0,0,0.08)",
            }}
            className="mobile-drawer"
          >
            <ul style={{ listStyle: "none", margin: 0, padding: 0 }}>
              {NAV_LINKS.map(({ label, href }) => (
                <li key={label}>
                  <a
                    href={href}
                    style={{
                      display: "flex",
                      alignItems: "center",
                      justifyContent: "space-between",
                      padding: "12px 24px",
                      fontSize: "14px",
                      fontWeight: 500,
                      color: "#333333",
                      textDecoration: "none",
                      transition: "background 0.15s, color 0.15s",
                      fontFamily: "'Segoe UI', Arial, sans-serif",
                    }}
                    onMouseEnter={(e) => {
                      e.currentTarget.style.background = "#eff6ff";
                      e.currentTarget.style.color = "#2783e3";
                    }}
                    onMouseLeave={(e) => {
                      e.currentTarget.style.background = "transparent";
                      e.currentTarget.style.color = "#333333";
                    }}
                    onClick={() => setMobileOpen(false)}
                  >
                    {label}
                  </a>
                </li>
              ))}
              {/* Mobile search row */}
              <li style={{ padding: "10px 24px" }}>
                <button
                  onClick={() => { setMobileOpen(false); openSearch(); }}
                  style={{
                    display: "flex", alignItems: "center", gap: 8,
                    background: "#f3f4f6", border: "none", borderRadius: 24,
                    padding: "10px 20px", fontSize: 13.5, color: "#555", cursor: "pointer",
                    width: "100%", fontFamily: "'Segoe UI', Arial, sans-serif",
                  }}
                >
                  <FaSearch /> Search anything…
                </button>
              </li>
              <li style={{ padding: "12px 24px 16px" }}>
                <a
                  href="/contact"
                  style={{
                    display: "block",
                    textAlign: "center",
                    backgroundColor: "#2783e3",
                    color: "#ffffff",
                    fontWeight: 700,
                    fontSize: "14px",
                    padding: "10px 0",
                    borderRadius: "999px",
                    textDecoration: "none",
                    fontFamily: "'Segoe UI', Arial, sans-serif",
                  }}
                >
                  Contact Now »
                </a>
              </li>
            </ul>
          </div>
        )}

        <style>{`
          @media (min-width: 1024px) {
            .desktop-nav { display: flex !important; }
            .mobile-toggle { display: none !important; }
            .mobile-drawer { display: none !important; }
            .desktop-search { display: flex !important; }
            .desktop-contact { display: inline-flex !important; }
          }
          @media (max-width: 1023px) {
            .desktop-nav { display: none !important; }
            .mobile-toggle { display: block !important; }
            .desktop-search { display: none !important; }
            .desktop-contact { display: none !important; }
          }
        `}</style>
      </nav>

      {/* ── SEARCH OVERLAY ── */}
      {searchOpen && (
        <div
          style={{
            position: "fixed",
            inset: 0,
            backgroundColor: "rgba(13,27,75,0.75)",
            zIndex: 9999,
            display: "flex",
            alignItems: "flex-start",
            justifyContent: "center",
            paddingTop: "100px",
            backdropFilter: "blur(4px)",
          }}
          onClick={closeSearch}
        >
          <div
            ref={searchRef}
            onClick={(e) => e.stopPropagation()}
            style={{
              width: "100%",
              maxWidth: 620,
              margin: "0 24px",
              backgroundColor: "#ffffff",
              borderRadius: 12,
              boxShadow: "0 20px 60px rgba(0,0,0,0.3)",
              overflow: "hidden",
            }}
          >
            {/* Search Input */}
            <form onSubmit={handleSearchSubmit} style={{ display: "flex", alignItems: "center", padding: "0 20px", borderBottom: "1.5px solid #e2e8f0" }}>
              <FaSearch style={{ color: "#2783e3", fontSize: 16, flexShrink: 0 }} />
              <input
                ref={inputRef}
                type="text"
                value={query}
                onChange={(e) => handleSearch(e.target.value)}
                placeholder="Search doctors, services, pages…"
                style={{
                  flex: 1,
                  border: "none",
                  outline: "none",
                  padding: "18px 14px",
                  fontSize: 15,
                  color: "#0d1b4b",
                  fontFamily: "'Segoe UI', sans-serif",
                  backgroundColor: "transparent",
                }}
              />
              {query && (
                <button type="button" onClick={() => handleSearch("")} style={{ background: "none", border: "none", cursor: "pointer", color: "#9ca3af", fontSize: 16, padding: "4px" }}>
                  <FaTimes />
                </button>
              )}
            </form>

            {/* Results */}
            {results.length > 0 ? (
              <ul style={{ listStyle: "none", margin: 0, padding: "8px 0", maxHeight: 360, overflowY: "auto" }}>
                {results.map((item) => (
                  <li key={item.href}>
                    <Link
                      href={item.href}
                      onClick={closeSearch}
                      style={{
                        display: "flex",
                        alignItems: "center",
                        gap: 14,
                        padding: "12px 22px",
                        textDecoration: "none",
                        transition: "background 0.15s",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#f0f7ff"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "transparent"}
                    >
                      <div style={{
                        width: 8, height: 8, borderRadius: "50%",
                        backgroundColor: CATEGORY_COLORS[item.category] || "#2783e3",
                        flexShrink: 0,
                      }} />
                      <div style={{ flex: 1 }}>
                        <p style={{ color: "#0d1b4b", fontWeight: 700, fontSize: 14, margin: 0 }}>{item.title}</p>
                      </div>
                      <span style={{
                        backgroundColor: `${CATEGORY_COLORS[item.category]}18`,
                        color: CATEGORY_COLORS[item.category] || "#2783e3",
                        fontSize: 10.5,
                        fontWeight: 700,
                        padding: "3px 10px",
                        borderRadius: 12,
                        textTransform: "uppercase",
                        letterSpacing: "0.06em",
                      }}>
                        {item.category}
                      </span>
                    </Link>
                  </li>
                ))}
              </ul>
            ) : query ? (
              <div style={{ padding: "28px 22px", textAlign: "center", color: "#9ca3af", fontSize: 14 }}>
                No results found for "<strong style={{ color: "#0d1b4b" }}>{query}</strong>"
              </div>
            ) : (
              <div style={{ padding: "20px 22px" }}>
                <p style={{ color: "#9ca3af", fontSize: 12, fontWeight: 700, textTransform: "uppercase", letterSpacing: "0.08em", margin: "0 0 12px" }}>Quick Links</p>
                <div style={{ display: "flex", flexWrap: "wrap", gap: 8 }}>
                  {["About", "Doctors", "Timetable", "Contact", "Dental Care", "Neurology"].map((q) => (
                    <button
                      key={q}
                      onClick={() => handleSearch(q)}
                      style={{
                        backgroundColor: "#f0f7ff",
                        color: "#2783e3",
                        border: "none",
                        padding: "6px 14px",
                        borderRadius: 20,
                        fontSize: 13,
                        fontWeight: 600,
                        cursor: "pointer",
                        transition: "background 0.15s",
                        fontFamily: "'Segoe UI', sans-serif",
                      }}
                      onMouseEnter={(e) => e.currentTarget.style.backgroundColor = "#dbeafe"}
                      onMouseLeave={(e) => e.currentTarget.style.backgroundColor = "#f0f7ff"}
                    >
                      {q}
                    </button>
                  ))}
                </div>
              </div>
            )}

            <div style={{ padding: "12px 22px", backgroundColor: "#f8fafc", borderTop: "1px solid #e2e8f0", display: "flex", justifyContent: "space-between", alignItems: "center" }}>
              <p style={{ color: "#9ca3af", fontSize: 11.5, margin: 0 }}>
                Press <kbd style={{ backgroundColor: "#e2e8f0", padding: "1px 6px", borderRadius: 4, fontFamily: "monospace" }}>Esc</kbd> to close
              </p>
              <p style={{ color: "#9ca3af", fontSize: 11.5, margin: 0 }}>
                <kbd style={{ backgroundColor: "#e2e8f0", padding: "1px 6px", borderRadius: 4, fontFamily: "monospace" }}>Enter</kbd> to go to first result
              </p>
            </div>
          </div>
        </div>
      )}
    </>
  );
}