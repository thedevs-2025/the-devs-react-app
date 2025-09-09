import { Button } from "@/components/ui/button";

export default function Contact() {
  return (
    <div>
      <section className="container py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Contact</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">Dites-nous tout sur votre projet. Nous revenons vers vous sous 24–48h.</p>
      </section>

      <section className="container pb-20 grid gap-10 md:grid-cols-2 items-start">
        <div>
          <div className="rounded-xl border bg-card p-6">
            <h2 className="font-semibold">Nous joindre</h2>
            <div className="mt-4 grid grid-cols-2 gap-4 text-sm">
              <div>
                <p className="text-muted-foreground">Email</p>
                <p>contact@thedevs.agency</p>
              </div>
              <div>
                <p className="text-muted-foreground">Téléphone</p>
                <p>+221 00 000 00 00</p>
              </div>
              <div className="col-span-2">
                <p className="text-muted-foreground">Adresse</p>
                <p>Dakar, Sénégal</p>
              </div>
            </div>
          </div>
          <div className="mt-6 rounded-xl border bg-card p-6">
            <h2 className="font-semibold">Pourquoi nous?</h2>
            <ul className="mt-3 text-sm text-muted-foreground space-y-2">
              <li>Qualité pro, délais maîtrisés</li>
              <li>Stack moderne, performances élevées</li>
              <li>Accompagnement de bout en bout</li>
            </ul>
          </div>
        </div>
        <form
          className="rounded-2xl border bg-card p-6 shadow-xl space-y-4"
          onSubmit={(e) => {
            e.preventDefault();
            const data = new FormData(e.currentTarget as HTMLFormElement);
            const payload = Object.fromEntries(data.entries());
            console.log("Contact form:", payload);
            alert("Merci! Nous vous répondrons très vite.");
            (e.currentTarget as HTMLFormElement).reset();
          }}
        >
          <div className="grid gap-4 sm:grid-cols-2">
            <div>
              <label className="text-sm">Nom complet</label>
              <input name="name" required className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm">Entreprise</label>
              <input name="company" className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm">Email</label>
              <input name="email" type="email" required className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm">Téléphone</label>
              <input name="phone" type="tel" className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
            </div>
            <div>
              <label className="text-sm">Type de projet</label>
              <select name="type" className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:ring-2 focus:ring-ring">
                <option>Site vitrine</option>
                <option>Application web</option>
                <option>Application mobile</option>
                <option>Refonte</option>
              </select>
            </div>
            <div>
              <label className="text-sm">Budget estimé</label>
              <select name="budget" className="mt-1 w-full rounded-md border bg-background px-3 py-2 focus:ring-2 focus:ring-ring">
                <option>Moins de 200.000 FCFA</option>
                <option>200.000 — 500.000 FCFA</option>
                <option>500.000 — 1.000.000 FCFA</option>
                <option>1.000.000+ FCFA</option>
              </select>
            </div>
          </div>
          <div>
            <label className="text-sm">Fonctionnalités souhaitées</label>
            <div className="mt-2 grid grid-cols-2 gap-2 text-sm text-muted-foreground">
              {['E-commerce','Espace membre','Intégrations API','Dashboard','Multilingue','Paiement en ligne'].map((f) => (
                <label key={f} className="flex items-center gap-2">
                  <input type="checkbox" name="features" value={f} /> {f}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm">Délai souhaité</label>
            <div className="mt-2 grid grid-cols-3 gap-2 text-sm text-muted-foreground">
              {['ASAP','1-2 mois','3-6 mois'].map((t) => (
                <label key={t} className="flex items-center gap-2">
                  <input type="radio" name="timeline" value={t} /> {t}
                </label>
              ))}
            </div>
          </div>
          <div>
            <label className="text-sm">Description du projet</label>
            <textarea name="message" rows={6} required className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <div>
            <label className="text-sm">Lien(s) utile(s) (Figma, docs, site actuel)</label>
            <input name="links" placeholder="https://…" className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
          </div>
          <Button type="submit" className="w-full">Envoyer</Button>
        </form>
      </section>
    </div>
  );
}
