export default function Footer() {
  return (
    <footer className="relative border-t bg-background overflow-hidden">
      <div
        className="pointer-events-none absolute inset-0 z-0 bg-center bg-cover blur-[2px] scale-110"
        style={{ backgroundImage: "url('https://cdn.builder.io/api/v1/image/assets%2F145754011cb94f8789e42cb66d7b8a9d%2F00f7ff9508f54964876a290e6e2555d2?format=webp&width=1600')" }}
      />
      <div className="pointer-events-none absolute inset-0 z-0 bg-[linear-gradient(to_top,rgba(0,10,30,0.65),rgba(0,10,30,0.25))]" />
      <div className="relative z-10 container py-12">
        <div className="rounded-2xl bg-background/70 dark:bg-background/40 backdrop-blur-md ring-1 ring-white/10 shadow-xl p-8 grid gap-8 md:grid-cols-3">
        <div className="space-y-3">
          <div className="flex items-center gap-2">
            <div className="h-7 w-7 rounded-lg bg-gradient-to-br from-primary to-accent shadow ring-1 ring-primary/30" />
            <span className="font-extrabold tracking-tight">The Dev's</span>
          </div>
          <p className="text-sm text-muted-foreground">
            Agence digitale orientée vers l'innovation. Nous transformons vos idées en produits performants.
          </p>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Produits</h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>Sites vitrines</li>
            <li>Apps web</li>
            <li>Apps mobiles</li>
          </ul>
        </div>
        <div>
          <h4 className="mb-4 font-semibold">Contact</h4>
          <ul className="text-sm text-muted-foreground space-y-2">
            <li>contact@thedevs.agency</li>
            <li>+221 00 000 00 00</li>
          </ul>
        </div>
        </div>
      </div>
      <div className="border-t/50">
        <div className="container py-6 text-xs text-muted-foreground flex items-center justify-between">
          <p>© {new Date().getFullYear()} The Dev's. Tous droits réservés.</p>
          <p className="opacity-75">Tech-ready infrastructure</p>
        </div>
      </div>
    </footer>
  );
}
