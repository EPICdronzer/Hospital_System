import Topbar from "./components/topbar";
import Navbar from "./components/navbar";
import Footer from "./components/footer";
import FloatingContact from "./components/floating-contact";

export default function UsersLayout({ children }) {
  return (
    <div id="top" className="min-h-screen flex flex-col">
      <Topbar />
      <Navbar />
      <main className="flex-1">{children}</main>
      <Footer />
      <FloatingContact />
    </div>
  );
}
