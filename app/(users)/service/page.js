import SubHeader from "../components/sub-header";
import ServiceList from "../components_service/service-list";

export const metadata = {
  title: "Our Services – Medilo Healthcare",
  description: "Browse our medical specialties including Pharmacology, Orthopedics, Hematology, Neurology, Ophthalmology, and Dental Care.",
};

export default function ServicePage() {
  return (
    <main>
      <SubHeader title="Our Services" currentPage="Services" />
      <ServiceList />
    </main>
  );
}
