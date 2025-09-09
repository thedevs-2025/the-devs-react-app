type PlaceholderProps = { title: string; description?: string };

export default function Placeholder({ title, description }: PlaceholderProps) {
  return (
    <section className="container py-24">
      <div className="mx-auto max-w-2xl text-center">
        <h1 className="text-3xl md:text-4xl font-extrabold tracking-tight">
          {title}
        </h1>
        <p className="mt-4 text-muted-foreground">
          {description || "Cette page sera façonnée selon vos besoins. Dites-moi quoi y mettre et je m'en charge."}
        </p>
      </div>
    </section>
  );
}
