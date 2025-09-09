import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Check, Code2, Paintbrush, Rocket, ShieldCheck, Smartphone, Sparkles, Users } from "lucide-react";
import { useInView } from "@/hooks/use-in-view";
import Globe3D from "@/components/site/Globe3D";
import Tilt3D from "@/components/site/Tilt3D";

function FadeIn({ children, delay = 0 }: { children: React.ReactNode; delay?: number }) {
  const { ref, inView } = useInView<HTMLDivElement>();
  return (
    <div
      ref={ref}
      className={`transition-all duration-700 ${inView ? "opacity-100 translate-y-0" : "opacity-0 translate-y-3"}`}
      style={{ transitionDelay: `${delay}ms` }}
    >
      {children}
    </div>
  );
}

export default function Index() {
  return (
    <div className="">
      {/* Hero */}
      <section className="relative overflow-hidden">
        <div className="absolute inset-0 -z-10 bg-gradient-to-b from-primary/10 via-transparent to-transparent" />
        <div className="container py-24 md:py-32">
          <div className="grid gap-10 md:grid-cols-2 items-center">
            <FadeIn>
              <h1 className="text-4xl md:text-6xl font-extrabold tracking-tight leading-tight">
                Transformez vos idées en <span className="text-transparent bg-clip-text bg-gradient-to-r from-primary to-accent">réalité</span>
              </h1>
              <p className="mt-5 text-lg text-muted-foreground max-w-xl">
                Agence digitale moderne. Nous concevons des sites et applications futuristes, performants et sur-mesure.
              </p>
              <div className="mt-8 flex flex-wrap gap-3">
                <Button className="shadow-md">
                  <a href="#contact">Demander un devis</a>
                </Button>
                <Button variant="outline" asChild>
                  <a href="#services">Voir nos services</a>
                </Button>
              </div>
            </FadeIn>
            <FadeIn delay={150}>
              <div className="relative">
                <div className="absolute -top-10 -left-10 h-40 w-40 rounded-full bg-primary/20 blur-3xl animate-float" />
                <div className="absolute -bottom-10 -right-10 h-40 w-40 rounded-full bg-accent/20 blur-3xl animate-float" />
                <Tilt3D className="relative rounded-2xl border bg-card p-6 shadow-xl backdrop-blur" maxRotate={12}>
                  <div className="h-96 grid place-items-center rounded-xl border bg-gradient-to-br from-primary/10 to-accent/10">
                    <Globe3D size={360} />
                  </div>
                  <p className="mt-4 text-center text-sm text-muted-foreground">
                    Vos idées connectées au monde entier. Construisons un impact global.
                  </p>
                  <div className="mt-6 grid grid-cols-3 gap-4 text-center">
                    {["Design", "Dév.", "Sécurité"].map((k) => (
                      <div key={k} className="rounded-lg border p-3 text-sm">
                        <p className="font-semibold">{k}</p>
                        <p className="text-muted-foreground">premium</p>
                      </div>
                    ))}
                  </div>
                </Tilt3D>
              </div>
            </FadeIn>
          </div>
        </div>
      </section>

      {/* Créative Banner */}
      <section className="relative">
        <div className="container">
          <div className="overflow-hidden rounded-2xl border bg-gradient-to-r from-primary/15 via-accent/10 to-transparent p-8 md:p-10">
            <div className="flex flex-col gap-6 md:flex-row md:items-center md:justify-between">
              <div>
                <h3 className="text-2xl md:text-3xl font-bold">Accélérez vos projets avec une équipe experte</h3>
                <p className="mt-2 text-muted-foreground max-w-2xl">
                  Stratégie, design et développement réunis. Des livrables haut de gamme, dans les délais.
                </p>
              </div>
              <div className="flex gap-3">
                <Button asChild><a href="#projects">Voir nos réalisations</a></Button>
                <Button variant="outline" asChild><a href="#contact">Parler à un expert</a></Button>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Services */}
      <section id="services" className="container py-20">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nos services</h2>
            <p className="mt-3 text-muted-foreground">Des solutions taillées pour la performance et l'élégance.</p>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[
            { icon: Paintbrush, title: "UI/UX Design", desc: "Identités visuelles modernes et interfaces pixel-perfect.", theme: "from-indigo-500 to-sky-400" },
            { icon: Code2, title: "Développement Web", desc: "Apps réactives avec performances de haut niveau.", theme: "from-blue-500 to-cyan-400" },
            { icon: Smartphone, title: "Mobile", desc: "Applications iOS & Android avec technologies hybrides.", theme: "from-sky-500 to-teal-400" },
            { icon: ShieldCheck, title: "Sécurité", desc: "Bonnes pratiques, audits, conformité RGPD.", theme: "from-blue-600 to-indigo-500" },
            { icon: Rocket, title: "Déploiement", desc: "CI/CD, hébergement et monitoring.", theme: "from-indigo-600 to-purple-500" },
            { icon: Sparkles, title: "Animations 3D/FX", desc: "Interactions raffinées pour un effet ‘wow’.", theme: "from-cyan-500 to-indigo-500" },
          ].map(({ icon: Icon, title, desc, theme }, i) => (
            <FadeIn key={title} delay={i * 70}>
              <Card className="group relative overflow-hidden transition hover:shadow-lg">
                <div className="absolute inset-0 bg-gradient-to-r from-primary/5 to-accent/5 opacity-0 group-hover:opacity-100 transition-opacity" />
                <div className={`h-32 w-full rounded-b-none rounded-t-xl bg-gradient-to-br ${theme} p-4 border-b grid place-items-center`}>
                  <Icon className="h-10 w-10 text-white drop-shadow" />
                </div>
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-lg bg-primary/10 text-primary grid place-items-center">
                      <Icon className="h-5 w-5" />
                    </div>
                    <CardTitle>{title}</CardTitle>
                  </div>
                  <CardDescription>{desc}</CardDescription>
                </CardHeader>
                <CardContent>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Qualité professionnelle</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Livraison rapide</li>
                    <li className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> Support dédié</li>
                  </ul>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Stats */}
      <section className="bg-secondary/50 border-y">
        <div className="container py-10 grid grid-cols-2 md:grid-cols-4 gap-6 text-center">
          {[
            { k: "1 an", v: "d'expérience" },
            { k: "1+", v: "collaborateurs" },
            { k: "100%", v: "satisfaction" },
            { k: "50+", v: "expertises" },
          ].map(({ k, v }) => (
            <div key={k} className="space-y-1">
              <p className="text-3xl font-extrabold tracking-tight">{k}</p>
              <p className="text-sm text-muted-foreground">{v}</p>
            </div>
          ))}
        </div>
      </section>

      {/* Projets réalisés */}
      <section id="projects" className="container py-20">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Projets réalisés</h2>
            <p className="mt-3 text-muted-foreground">Quelques exemples de livrables qui parlent d'eux-mêmes.</p>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
          {[1,2,3,4,5,6].map((i) => (
            <FadeIn key={i} delay={i*60}>
              <Card className="overflow-hidden group">
                <div className="h-40 bg-gradient-to-br from-primary/20 to-accent/20 grid place-items-center">
                  <span className="text-sm text-muted-foreground">Aperçu #{i}</span>
                </div>
                <CardHeader>
                  <CardTitle className="text-lg">Projet {i}</CardTitle>
                  <CardDescription>Site/App — performance, accessibilité, SEO</CardDescription>
                </CardHeader>
                <CardContent className="pt-0">
                  <Button variant="outline">Voir le cas d'étude</Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Équipe */}
      <section className="container py-12">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Notre équipe</h2>
            <p className="mt-3 text-muted-foreground">Des spécialistes passionnés par l'innovation.</p>
          </div>
        </FadeIn>
        <div className="grid gap-6 sm:grid-cols-2 lg:grid-cols-4">
          {[
            { name: "Awa S.", role: "Directrice Design" },
            { name: "Moussa K.", role: "Lead Développeur" },
            { name: "Fatou D.", role: "Chef de projet" },
            { name: "Ibrahima N.", role: "DevOps & Sécurité" },
          ].map((m, i) => (
            <FadeIn key={m.name} delay={i*80}>
              <Card className="text-center">
                <div className="mx-auto mt-6 h-20 w-20 rounded-full bg-gradient-to-br from-primary to-accent" />
                <CardHeader>
                  <CardTitle className="text-lg">{m.name}</CardTitle>
                  <CardDescription>{m.role}</CardDescription>
                </CardHeader>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Témoignages */}
      <section className="container py-20">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Témoignages</h2>
            <p className="mt-3 text-muted-foreground">La confiance de nos clients nous pousse à viser l'excellence.</p>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {[1, 2, 3].map((i) => (
            <FadeIn key={i} delay={i * 80}>
              <Card className="relative">
                <CardHeader>
                  <div className="flex items-center gap-3">
                    <div className="h-10 w-10 rounded-full bg-gradient-to-br from-primary to-accent" />
                    <div>
                      <CardTitle className="text-base">Client satisfait #{i}</CardTitle>
                      <CardDescription>Entreprise</CardDescription>
                    </div>
                  </div>
                </CardHeader>
                <CardContent className="pt-0">
                  <p className="text-sm text-muted-foreground">
                    Super équipe! Design impeccable, code propre et livraisons rapides. Je recommande vivement.
                  </p>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Tarifs */}
      <section className="container py-20">
        <FadeIn>
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Nos packages</h2>
            <p className="mt-3 text-muted-foreground">Choisissez le plan adapté à votre vision.</p>
          </div>
        </FadeIn>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            { name: "Starter", price: "200.000 FCFA", features: ["Site vitrine", "Optimisation SEO", "Support 15j"] },
            { name: "Pro", price: "450.000 FCFA", features: ["Application web", "CI/CD", "Support 30j"] },
            { name: "Entreprise", price: "900.000 FCFA", features: ["App mobile", "Monitoring & Sentry", "Support 60j"] },
          ].map((p, i) => (
            <FadeIn key={p.name} delay={i * 100}>
              <Card className={i === 1 ? "border-primary shadow-xl" : ""}>
                <CardHeader>
                  <div className="flex items-center gap-2">
                    <Users className="h-5 w-5 text-primary" />
                    <CardTitle>{p.name}</CardTitle>
                  </div>
                  <CardDescription>Solution complète et évolutive</CardDescription>
                </CardHeader>
                <CardContent className="space-y-4">
                  <p className="text-3xl font-extrabold">{p.price}</p>
                  <ul className="space-y-2 text-sm text-muted-foreground">
                    {p.features.map((f) => (
                      <li key={f} className="flex items-center gap-2">
                        <Check className="h-4 w-4 text-primary" /> {f}
                      </li>
                    ))}
                  </ul>
                  <Button className="w-full">Choisir</Button>
                </CardContent>
              </Card>
            </FadeIn>
          ))}
        </div>
      </section>

      {/* Contact */}
      <section id="contact" className="relative border-t bg-secondary/40">
        <div className="container py-20">
          <div className="grid gap-10 md:grid-cols-2 items-start">
            <FadeIn>
              <div>
                <h2 className="text-3xl md:text-4xl font-bold tracking-tight">Contactez-nous</h2>
                <p className="mt-3 text-muted-foreground max-w-md">
                  Dites-nous ce dont vous avez besoin et nous vous répondrons rapidement avec une proposition.
                </p>
                <div className="mt-6 grid grid-cols-2 gap-4 text-sm">
                  <div className="rounded-lg border bg-card p-4">
                    <p className="font-semibold">Email</p>
                    <p className="text-muted-foreground">contact@thedevs.agency</p>
                  </div>
                  <div className="rounded-lg border bg-card p-4">
                    <p className="font-semibold">Téléphone</p>
                    <p className="text-muted-foreground">+221 00 000 00 00</p>
                  </div>
                </div>
              </div>
            </FadeIn>
            <FadeIn delay={120}>
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
                    {['Design sur-mesure','E-commerce','Espace membre','Intégrations API','Dashboard','Multilingue'].map((f) => (
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
                  <label className="text-sm">Message</label>
                  <textarea name="message" rows={5} required className="mt-1 w-full rounded-md border bg-background px-3 py-2 outline-none focus:ring-2 focus:ring-ring" />
                </div>
                <Button type="submit" className="w-full">Envoyer</Button>
              </form>
            </FadeIn>
          </div>
        </div>
      </section>
    </div>
  );
}
