import Link from "next/link";
import {
  FaFacebookF,
  FaPinterestP,
  FaTwitter,
  FaInstagram,
  FaClock,
  FaMapMarkerAlt,
  FaPhone,
  FaStethoscope,
} from "react-icons/fa";

const RECENT_POSTS = [
  {
    id: 1,
    date: "23 जून 2024",
    title: "स्वास्थ्य और चिकित्सा | Medical Care Blog",
    img: "https://images.unsplash.com/photo-1504813184591-01572f98c85f?auto=format&fit=crop&w=80&q=80",
  },
  {
    id: 2,
    date: "20 जून 2024",
    title: "भारतीय चिकित्सा प्रणाली | Working Health",
    img: "https://images.unsplash.com/photo-1576091160550-2173dba999ef?auto=format&fit=crop&w=80&q=80",
  },
];

export default function Footer() {
  return (
    <footer aria-label="Site footer">

      {/* ══════════════════════════════════════
          MAIN FOOTER
      ══════════════════════════════════════ */}
      <div
        className="relative"
        style={{
          background: "#0f1a4e",
        }}
      >
        {/* Background medical image overlay for right 3 columns */}
        <div
          aria-hidden="true"
          className="absolute inset-0 pointer-events-none"
          style={{
            backgroundImage:
              "url('https://images.unsplash.com/photo-1519494026892-80bbd2d6fd0d?auto=format&fit=crop&w=1600&q=60')",
            backgroundSize: "cover",
            backgroundPosition: "center right",
            opacity: 0.18,
            left: "25%",
          }}
        />

        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative">
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4">

            {/* ── Column 1: Brand (bright blue, overflows top) ── */}
            <div
              className="relative z-10 flex flex-col px-10 pb-16 pt-16"
              style={{
                background: "#2b9fd8",
                marginTop: "-80px",
              }}
            >
              {/* Logo */}
              <Link href="/" className="flex items-center gap-3 mb-5">
                <span
                  className="w-12 h-12 rounded-full flex items-center justify-center shrink-0"
                  style={{ background: "rgba(255,255,255,0.2)" }}
                >
                  <FaStethoscope className="text-white text-xl" />
                </span>
                <span className="text-white font-extrabold text-3xl tracking-wide">
                  मेडिलो | Medilo
                </span>
              </Link>

              {/* Divider */}
              <hr className="border-white/40 mb-5" />

              {/* Contact info */}
              <ul className="space-y-4 text-sm text-white/90 mb-7 flex-1">
                <li className="flex items-start gap-3">
                  <FaClock className="mt-0.5 shrink-0 text-white text-xs" />
                  <span>
                    <strong className="font-semibold">समय | Open Hours:</strong>
                    <br />
                    सोम–शुक्र | Mon – Fri: 8.00 am. – 6.00 pm.
                  </span>
                </li>
                <li className="flex items-start gap-3">
                  <FaMapMarkerAlt className="mt-0.5 shrink-0 text-white text-xs" />
                  <span>कनॉट प्लेस, नई दिल्ली – 110001</span>
                </li>
                <li className="flex items-start gap-3">
                  <FaPhone className="mt-0.5 shrink-0 text-white text-xs" />
                  <span>+91 99695 69535</span>
                </li>
              </ul>

              {/* Social icons */}
              <div className="flex items-center gap-2">
                {[
                  { Icon: FaFacebookF, label: "Facebook" },
                  { Icon: FaPinterestP, label: "Pinterest" },
                  { Icon: FaTwitter, label: "Twitter" },
                  { Icon: FaInstagram, label: "Instagram" },
                ].map(({ Icon, label }) => (
                  <Link
                    key={label}
                    href="#"
                    aria-label={label}
                    className="w-9 h-9 rounded-full flex items-center justify-center transition-all duration-150 hover:opacity-80"
                    style={{ background: "rgba(255,255,255,0.25)" }}
                  >
                    <Icon className="text-white text-xs" />
                  </Link>
                ))}
              </div>
            </div>

            {/* ── Column 2: Service ── */}
            <div className="px-8 py-14">
              <h3 className="text-white font-bold text-lg mb-6">हमारी सेवाएं | Service</h3>
              <ul className="space-y-3">
                {[
                  "हमें क्यों चुनें | Why choose us",
                  "हमारे समाधान | Our solutions",
                  "सहयोगी | Partners",
                  "मूल मूल्य | Core values",
                  "हमारे प्रोजेक्ट | Our projects",
                ].map(
                  (item) => (
                    <li key={item}>
                      <Link
                        href="#"
                        className="text-blue-200 text-sm hover:text-white transition-colors duration-150"
                      >
                        {item}
                      </Link>
                    </li>
                  )
                )}
              </ul>
            </div>

            {/* ── Column 3: Quick Link ── */}
            <div className="px-8 py-14">
              <h3 className="text-white font-bold text-lg mb-6">त्वरित लिंक | Quick Link</h3>
              <ul className="space-y-3">
                {[
                  { label: "परिचय | About Us",        href: "/about" },
                  { label: "सेवाएं | Services",       href: "/service" },
                  { label: "समय सारणी | Timetable",   href: "/timetable" },
                  { label: "ब्लॉग | Blog",            href: "/blog" },
                  { label: "संपर्क | Contact",        href: "/contact" },
                ].map((item) => (
                  <li key={item.label}>
                    <Link
                      href={item.href}
                      className="text-blue-200 text-sm hover:text-white transition-colors duration-150"
                    >
                      {item.label}
                    </Link>
                  </li>
                ))}
              </ul>
            </div>

            {/* ── Column 4: Recent Posts ── */}
            <div className="px-8 py-14">
              <h3 className="text-white font-bold text-lg mb-6">ताज़ा पोस्ट | Recent Posts</h3>
              <ul className="space-y-5">
                {RECENT_POSTS.map((post) => (
                  <li key={post.id} className="recent-post-item flex items-start gap-4">
                    <img
                      src={post.img}
                      alt={post.title}
                      className="w-16 h-16 object-cover rounded-full shrink-0"
                    />
                    <div>
                      <p className="text-blue-300 text-xs mb-1">{post.date}</p>
                      <Link
                        href={`/blog/${post.id}`}
                        className="text-white text-sm font-semibold leading-snug hover:text-blue-300 transition-colors duration-150"
                      >
                        {post.title}
                      </Link>
                    </div>
                  </li>
                ))}
              </ul>
            </div>

          </div>
        </div>
      </div>

      {/* ══════════════════════════════════════
          BOTTOM BAR
      ══════════════════════════════════════ */}
      <div style={{ background: "#0a0d1f" }}>
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-5 flex flex-col sm:flex-row items-center justify-between gap-3">

          {/* Copyright */}
          <p className="text-blue-200 text-sm">
            © 2024{" "}
            <span className="text-white font-semibold">मेडिलो | Medilo</span> — सर्वाधिकार सुरक्षित | All Rights Reserved.
          </p>

          {/* Bottom links */}
          <nav aria-label="Footer links" className="flex items-center gap-5">
            {[
              { label: "परिचय | About Us", href: "/about" },
              { label: "कार्यक्रम | Events", href: "/blog" },
              { label: "समाचार | News", href: "/blog" },
              { label: "सेवाएं | Service", href: "/service" }
            ].map((item) => (
              <Link
                key={item.label}
                href={item.href}
                className="text-blue-200 text-sm hover:text-white transition-colors duration-150"
              >
                {item.label}
              </Link>
            ))}
          </nav>

        </div>
      </div>

      <style>{`
        @media (max-width: 767px) {
          footer {
            text-align: center !important;
          }
          footer .grid {
            grid-template-columns: 1fr !important;
          }
          footer .grid > div {
            display: flex !important;
            flex-direction: column !important;
            align-items: center !important;
            justify-content: center !important;
            text-align: center !important;
            padding-left: 20px !important;
            padding-right: 20px !important;
            padding-top: 32px !important;
            padding-bottom: 32px !important;
          }
          footer .grid > div:first-child {
            margin-top: 0px !important;
            padding-top: 48px !important;
            padding-bottom: 48px !important;
          }
          footer ul {
            align-items: center !important;
            display: flex !important;
            flex-direction: column !important;
            width: 100% !important;
          }
          footer li {
            justify-content: center !important;
            text-align: center !important;
            flex-direction: column !important;
            align-items: center !important;
            width: 100% !important;
          }
          footer li a, footer li span {
            text-align: center !important;
            justify-content: center !important;
            align-items: center !important;
          }
          footer .recent-post-item {
            flex-direction: column !important;
            align-items: center !important;
            text-align: center !important;
            gap: 8px !important;
          }
          footer .recent-post-item img {
            margin: 0 auto 4px !important;
          }
          footer .flex-row {
            justify-content: center !important;
          }
          footer .flex.items-center.gap-2 {
            justify-content: center !important;
          }
          footer .max-w-7xl > div {
            justify-content: center !important;
            text-align: center !important;
          }
          footer a.flex {
            justify-content: center !important;
          }
        }
      `}</style>

    </footer>
  );
}