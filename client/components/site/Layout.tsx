import { Outlet } from "react-router-dom";
import Header from "./Header";
import Footer from "./Footer";
import BackToTopGlobe from "./BackToTopGlobe";

export default function Layout() {
  return (
    <div className="min-h-svh flex flex-col">
      <Header />
      <main className="flex-1 bg-[length:40px_40px] bg-grid-pattern">
        <div className="pointer-events-none fixed inset-0 -z-10 bg-radial-fade" />
        <Outlet />
      </main>
      <Footer />
      <BackToTopGlobe />
    </div>
  );
}
