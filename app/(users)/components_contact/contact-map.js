"use client";

export default function ContactMap() {
  return (
    <section aria-label="Hospital Map Location" style={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3022.617540209591!2d-73.98685368459392!3d40.74844047932824!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x89c259a9b3117469%3A0xd134e199a405a163!2sEmpire%20State%20Building!5e0!3m2!1sen!2sus!4v1655928834928!5m2!1sen!2sus"
        width="100%"
        height="480"
        style={{ border: 0, display: "block" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="Medilo Medical Center Location Map"
      />
    </section>
  );
}
