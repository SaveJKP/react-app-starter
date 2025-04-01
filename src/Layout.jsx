import { Outlet } from "react-router-dom";
import Navbar from "./components/rendering/Navbar";
import Footer from "./components/rendering/Footer";

export default function Layout() {
  return (
    <div className="flex h-screen flex-col">
      <Navbar />
      <div className="flex-1">
        <Outlet />
      </div>
      <Footer />
    </div>
  );
}
