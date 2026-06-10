const GALLERY_IMAGES = [
  {
    src: "https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=600&q=80",
    alt: "Medical team consultation",
    span: 2,
  },
  {
    src: "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80",
    alt: "Doctor with digital tablet",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80",
    alt: "Medical professional",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80",
    alt: "Doctor with family patient",
    span: 1,
  },
  {
    src: "https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=600&q=80",
    alt: "Medical staff team",
    span: 2,
  },
];

export default function Gallery() {
  return (
    <section
      aria-label="Our Gallery"
      style={{ backgroundColor: "#ffffff", padding: "80px 0" }}
    >
      <div style={{ maxWidth: 1200, margin: "0 auto", padding: "0 24px" }}>

        {/* Heading */}
        <div style={{ textAlign: "center", marginBottom: 48 }}>
          <p
            style={{
              color: "#2783e3",
              fontWeight: 700,
              fontSize: 13,
              textTransform: "uppercase",
              letterSpacing: "0.1em",
              marginBottom: 8,
            }}
          >
            Visual Highlights
          </p>
          <h2
            style={{
              color: "#0d1b4b",
              fontWeight: 900,
              fontSize: 32,
              margin: 0,
            }}
          >
            Our Galleries
          </h2>
        </div>

        {/* Gallery grid — 3 columns */}
        <div
          style={{
            display: "grid",
            gridTemplateColumns: "repeat(3, 1fr)",
            gridTemplateRows: "220px 220px",
            gap: 12,
          }}
        >
          {/* Row 1: big left (col 1-2) + small right (col 3) */}
          <div style={{ gridColumn: "1 / 3", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1551076805-e1869033e561?auto=format&fit=crop&w=800&q=80"
              alt="Medical team"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ gridColumn: "3 / 4", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&w=400&q=80"
              alt="Doctor"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>

          {/* Row 2: small left (col 1) + small middle (col 2) + big right (col 3, spans 1) */}
          <div style={{ gridColumn: "1 / 2", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1582750433449-648ed127bb54?auto=format&fit=crop&w=400&q=80"
              alt="Doctor with patient"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ gridColumn: "2 / 3", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1559757148-5c350d0d3c56?auto=format&fit=crop&w=400&q=80"
              alt="Medical professional"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
          <div style={{ gridColumn: "3 / 4", overflow: "hidden" }}>
            <img
              src="https://images.unsplash.com/photo-1579684385127-1ef15d508118?auto=format&fit=crop&w=400&q=80"
              alt="Medical staff"
              style={{ width: "100%", height: "100%", objectFit: "cover", display: "block" }}
            />
          </div>
        </div>

      </div>
    </section>
  );
}
