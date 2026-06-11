"use client";

export default function ContactMap() {
  return (
    <section aria-label="Hospital Map Location" style={{ width: "100%", overflow: "hidden", lineHeight: 0 }}>
      <iframe
        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d14016.92348574187!2d77.20387531737754!3d28.5628543781297!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390ce26ff784fb41%3A0x868b3687353f46f3!2sAll%20India%20Institute%20Of%20Medical%20Sciences%20(AIIMS)!5e0!3m2!1sen!2sin!4v1655928834928!5m2!1sen!2sin"
        width="100%"
        height="480"
        style={{ border: 0, display: "block" }}
        allowFullScreen=""
        loading="lazy"
        referrerPolicy="no-referrer-when-downgrade"
        title="मेडिलो मेडिकल सेंटर - एम्स, नई दिल्ली | Medilo Medical Center Location Map - AIIMS, New Delhi"
      />
    </section>
  );
}
