import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Code2, Paintbrush, Rocket, ShieldCheck, Smartphone, Sparkles } from "lucide-react";

export default function Services() {
  const services = [
    { icon: Paintbrush, title: "UI/UX Design", desc: "Identités fortes, maquettes Figma, design system.", theme: "from-indigo-500 to-sky-400" },
    { icon: Code2, title: "Développement Web", desc: "Apps réactives, SSR/SPA, optimisation Core Web Vitals.", theme: "from-blue-500 to-cyan-400" },
    { icon: Smartphone, title: "Mobile", desc: "iOS/Android hybrides, publication stores, analytics.", theme: "from-sky-500 to-teal-400" },
    { icon: ShieldCheck, title: "Sécurité", desc: "Audits, OWASP, conformité RGPD et durcissement.", theme: "from-blue-600 to-indigo-500" },
    { icon: Rocket, title: "Déploiement", desc: "CI/CD, hébergement cloud, observabilité et alerting.", theme: "from-indigo-600 to-purple-500" },
    { icon: Sparkles, title: "Animations/FX", desc: "Micro-interactions, transitions fluides et 3D.", theme: "from-cyan-500 to-indigo-500" },
  ];

  return (
    <div>
      <section className="container py-16">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Services</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl">Nous couvrons tout le cycle produit: stratégie, design, développement, sécurité et déploiement.</p>
      </section>

      <section className="container pb-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {services.map(({ icon: Icon, title, desc, theme }) => (
          <Card key={title} className="overflow-hidden">
            <div className={`h-40 w-full bg-gradient-to-br ${theme} grid place-items-center border-b`}>
              <Icon className="h-12 w-12 text-white drop-shadow" />
            </div>
            <CardHeader>
              <CardTitle>{title}</CardTitle>
              <CardDescription>{desc}</CardDescription>
            </CardHeader>
            <CardContent className="flex gap-2">
              <Button>Demander un devis</Button>
              <Button variant="outline">Voir des exemples</Button>
            </CardContent>
          </Card>
        ))}
      </section>

      <section className="border-t bg-secondary/40">
        <div className="container py-16">
          <h2 className="text-2xl md:text-3xl font-bold">Notre méthode</h2>
          <div className="mt-8 grid gap-6 md:grid-cols-3">
            {["Découverte","Conception","Livraison"].map((s, i) => (
              <Card key={s}>
                <CardHeader>
                  <CardTitle>{i+1}. {s}</CardTitle>
                  <CardDescription>Ateliers, prototypes, sprints, QA, puis déploiement encadré.</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
