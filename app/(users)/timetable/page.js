import SubHeader from "../components/sub-header";
import TimetableSection from "../components_timetable/timetable-section";

export const metadata = {
  title: "Doctor Timetable – Medilo Healthcare",
  description: "View the weekly schedule of all our specialist doctors at Medilo. Find the best time to book your appointment.",
};

export default function TimetablePage() {
  return (
    <main>
      <SubHeader title="Doctor Timetable" currentPage="Timetable" />
      <TimetableSection />
    </main>
  );
}
