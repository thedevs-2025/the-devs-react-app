import { Button } from "@/components/ui/button";
import { Card, CardContent, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";
import { Check } from "lucide-react";

export default function Pricing() {
  const plans = [
    { name: "Starter", price: "200.000 FCFA", features: ["Site vitrine", "1 révision", "Hébergement 1 mois"], highlighted: false },
    { name: "Pro", price: "450.000 FCFA", features: ["App web", "3 révisions", "CI/CD", "SEO"], highlighted: true },
    { name: "Entreprise", price: "900.000 FCFA", features: ["Mobile/Web", "Design system", "Monitoring", "Support prioritaire"], highlighted: false },
  ];

  return (
    <div>
      <section className="container py-16 text-center">
        <h1 className="text-3xl md:text-5xl font-extrabold tracking-tight">Tarifs</h1>
        <p className="mt-3 text-muted-foreground max-w-2xl mx-auto">Des formules transparentes adaptées à toutes les ambitions.</p>
      </section>
      <section className="container grid gap-6 md:grid-cols-3 pb-16">
        {plans.map((p) => (
          <Card key={p.name} className={p.highlighted ? "border-primary shadow-xl" : ""}>
            <CardHeader>
              <CardTitle>{p.name}</CardTitle>
              <CardDescription>Pack complet</CardDescription>
            </CardHeader>
            <CardContent className="space-y-4">
              <p className="text-3xl font-extrabold">{p.price}</p>
              <ul className="space-y-2 text-sm text-muted-foreground">
                {p.features.map((f) => (
                  <li key={f} className="flex items-center gap-2"><Check className="h-4 w-4 text-primary" /> {f}</li>
                ))}
              </ul>
              <Button className="w-full">Choisir</Button>
            </CardContent>
          </Card>
        ))}
      </section>
      <section className="border-t bg-secondary/40">
        <div className="container py-16">
          <h2 className="text-2xl md:text-3xl font-bold">FAQ</h2>
          <div className="mt-6 grid gap-4 md:grid-cols-2">
            {[
              { q: "Quels délais de livraison?", a: "Généralement 2–6 semaines selon la complexité." },
              { q: "Offrez-vous la maintenance?", a: "Oui, via des contrats mensuels flexibles." },
              { q: "Les contenus sont-ils inclus?", a: "Nous pouvons vous accompagner ou intégrer vos contenus." },
              { q: "Puis-je évoluer de plan?", a: "Oui, à tout moment selon vos besoins." },
            ].map((f) => (
              <Card key={f.q}>
                <CardHeader>
                  <CardTitle className="text-base">{f.q}</CardTitle>
                  <CardDescription>{f.a}</CardDescription>
                </CardHeader>
              </Card>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
