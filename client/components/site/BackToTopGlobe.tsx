import { Globe } from "lucide-react";

export default function BackToTopGlobe() {
  return (
    <button
      aria-label="Revenir en haut"
      onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
      className="fixed bottom-6 right-6 z-50 grid h-12 w-12 place-items-center rounded-full border bg-background/80 shadow-lg backdrop-blur transition hover:scale-105 hover:shadow-xl"
    >
      <Globe className="h-6 w-6 text-primary animate-spin-slow" />
    </button>
  );
}
