import { site } from "@/content/site";

// Placeholder until the homepage is built in Stage 5.
export default function Home() {
  return (
    <main className="min-h-dvh bg-navy-950 section-y">
      <div className="container-site">
        <h1 className="type-display text-white">{site.name}</h1>
        <p className="mt-4 type-body-lg text-on-dark">{site.tagline}</p>
      </div>
    </main>
  );
}
