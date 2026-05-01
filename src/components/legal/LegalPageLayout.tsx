import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";
import { Scale, ShieldCheck } from "lucide-react";

type LegalSection = {
  id: string;
  title: string;
  paragraphs: string[];
  bullets?: string[];
};

type LegalPageLayoutProps = {
  badge: string;
  title: string;
  subtitle: string;
  lastUpdated: string;
  sections: LegalSection[];
};

export function LegalPageLayout({
  badge,
  title,
  subtitle,
  lastUpdated,
  sections,
}: LegalPageLayoutProps) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />

      <main className="relative overflow-hidden border-y border-border bg-[var(--color-surface)]">
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,color-mix(in_oklab,var(--color-primary)_16%,transparent)_0%,transparent_42%),radial-gradient(circle_at_88%_84%,color-mix(in_oklab,var(--color-accent)_18%,transparent)_0%,transparent_44%)]"
        />
        <div
          aria-hidden
          className="pointer-events-none absolute inset-0 opacity-20"
          style={{
            backgroundImage:
              "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 6%, transparent) 1px, transparent 1px)",
            backgroundSize: "48px 48px",
          }}
        />

        <div className="container-mt relative z-10 py-20 md:py-24">
          <section className="mx-auto max-w-5xl rounded-3xl border border-border/80 bg-card/65 p-6 backdrop-blur-sm md:p-8">
            <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <Scale className="h-3.5 w-3.5" aria-hidden />
              {badge}
            </div>
            <h1 className="mt-4 text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl">
              {title}
            </h1>
            <p className="mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground">{subtitle}</p>

            <div className="mt-6 flex flex-wrap items-center gap-3 text-xs">
              <span className="rounded-full border border-border bg-background/60 px-3 py-1.5 text-muted-foreground">
                Ultima actualizacion: {lastUpdated}
              </span>
              <span className="inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-semibold text-primary">
                <ShieldCheck className="h-3.5 w-3.5" aria-hidden />
                Diseno compatible claro / oscuro
              </span>
            </div>
          </section>

          <section className="mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-[260px_1fr]">
            <aside className="rounded-2xl border border-border/80 bg-card/60 p-4 backdrop-blur-sm lg:sticky lg:top-24 lg:h-fit">
              <p className="mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--luxury-gold)]">
                Indice legal
              </p>
              <nav aria-label="Indice del documento">
                <ul className="space-y-1.5">
                  {sections.map((section, index) => (
                    <li key={section.id}>
                      <a
                        href={`#${section.id}`}
                        className="block rounded-lg border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/25 hover:bg-primary/10 hover:text-foreground"
                      >
                        {index + 1}. {section.title}
                      </a>
                    </li>
                  ))}
                </ul>
              </nav>
            </aside>

            <div className="space-y-4">
              {sections.map((section) => (
                <article
                  id={section.id}
                  key={section.id}
                  className="rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm md:p-6"
                >
                  <h2 className="text-xl font-bold text-foreground">{section.title}</h2>
                  <div className="mt-3 space-y-3">
                    {section.paragraphs.map((paragraph) => (
                      <p key={paragraph} className="text-sm leading-relaxed text-muted-foreground md:text-[15px]">
                        {paragraph}
                      </p>
                    ))}
                  </div>
                  {section.bullets && section.bullets.length > 0 ? (
                    <ul className="mt-4 space-y-2">
                      {section.bullets.map((bullet) => (
                        <li key={bullet} className="flex items-start gap-2 text-sm text-foreground/90">
                          <span className="mt-1.5 h-1.5 w-1.5 rounded-full bg-primary" aria-hidden />
                          <span>{bullet}</span>
                        </li>
                      ))}
                    </ul>
                  ) : null}
                </article>
              ))}
            </div>
          </section>
        </div>
      </main>

      <Footer />
    </div>
  );
}
