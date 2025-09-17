import { NavLink } from "react-router-dom";
import ThemeToggle from "./ThemeToggle";
import { Button } from "@/components/ui/button";
import { useEffect, useRef, useState } from "react";

// Composant Enhanced Logo adapté pour le header
const EnhancedLogo = () => {
  return (
    <div className="relative">

      {/* Texte principal avec dégradé complexe - groote */}
      <div className="relative z-10">
        <span className="font-raligo text-3xl font-black bg-gradient-to-br from-blue-800 via-blue-500 via-indigo-500 to-blue-700 bg-clip-text text-transparent drop-shadow-[0_2px_4px_rgba(59,130,246,0.2)]">
          thedev's
        </span>
      </div>

      {/* Effet de lueur subtil pour le header */}
      <div className="absolute inset-0 bg-gradient-to-br from-blue-500/10 via-indigo-500/10 to-blue-600/10 blur-xl rounded-2xl transform scale-110 -z-10"></div>
    </div>
  );
};

const navLinkClass = ({ isActive }: { isActive: boolean }) =>
  `relative z-10 px-3 py-2 text-sm font-medium transition-colors ${isActive ? "text-primary" : "text-muted-foreground hover:text-foreground"
  }`;

export default function Header() {
  const navRef = useRef<HTMLDivElement | null>(null);
  const [indicator, setIndicator] = useState<{ left: number; width: number; opacity: number }>({ left: 0, width: 0, opacity: 0 });

  useEffect(() => {
    const handleLeave = () => setIndicator((s) => ({ ...s, opacity: 0 }));
    const nav = navRef.current;
    if (!nav) return;
    nav.addEventListener("mouseleave", handleLeave);
    return () => nav.removeEventListener("mouseleave", handleLeave);
  }, []);

  const moveIndicator = (el: HTMLElement) => {
    const nav = navRef.current;
    if (!nav) return;
    const navRect = nav.getBoundingClientRect();
    const rect = el.getBoundingClientRect();
    setIndicator({ left: rect.left - navRect.left - 8, width: rect.width + 16, opacity: 1 });
  };

  return (
    <header className="sticky top-0 z-50 w-full border-b bg-background/80 backdrop-blur supports-[backdrop-filter]:bg-background/60">
      <div className="container flex h-16 items-center justify-between">
        <NavLink to="/" className="flex items-center gap-2">
          <EnhancedLogo />
        </NavLink>
        <nav ref={navRef} className="relative hidden md:flex items-center gap-1 px-2">
          <div
            className="pointer-events-none absolute inset-y-1 rounded-full bg-primary/10 ring-1 ring-primary/30 transition-all duration-300"
            style={{ left: indicator.left, width: indicator.width, opacity: indicator.opacity }}
          />
          <NavLink to="/" className={navLinkClass} end onMouseEnter={(e) => moveIndicator(e.currentTarget)}>
            Accueil
          </NavLink>
          <NavLink to="/services" className={navLinkClass} onMouseEnter={(e) => moveIndicator(e.currentTarget)}>
            Services
          </NavLink>
          <NavLink to="/pricing" className={navLinkClass} onMouseEnter={(e) => moveIndicator(e.currentTarget)}>
            Tarifs
          </NavLink>
          <NavLink to="/contact" className={navLinkClass} onMouseEnter={(e) => moveIndicator(e.currentTarget)}>
            Contacts
          </NavLink>
        </nav>
        <div className="flex items-center gap-2">
          <ThemeToggle />
          <Button asChild className="hidden sm:inline-flex">
            <a href="#contact">Commencer</a>
          </Button>
        </div>
      </div>
    </header>
  );
}