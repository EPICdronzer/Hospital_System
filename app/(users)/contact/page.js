import SubHeader from "../components/sub-header";
import ContactForm from "../components_contact/contact-form";
import ContactMap from "../components_contact/contact-map";

export const metadata = {
  title: "Contact Us – Medilo Healthcare",
  description: "Get in touch with Medilo. Schedule an appointment, contact our emergency line, or visit our hospital facility.",
};

export default function ContactPage() {
  return (
    <main>
      <SubHeader title="Contact Us" currentPage="Contact" />
      <ContactForm />
      <ContactMap />
    </main>
  );
}
