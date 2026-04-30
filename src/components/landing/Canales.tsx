import { canales } from "./content";
import { useFadeUp, useStaggerChildren, useSlideInLeft, useTypingEffect, asRef } from "@/hooks/useAnimeJs";

export function Canales() {
  const headerRef = useSlideInLeft(0);
  const titleRef = useTypingEffect(200);
  const gridRef = useStaggerChildren(":scope > li", 200, 80);

  return (
    <section
      id="canales"
      className="py-12 md:py-20 border-y border-border"
      aria-labelledby="canales-heading"
    >
      <div className="container-mt">
        {/* Encabezado */}
        <div ref={asRef<HTMLDivElement>(headerRef)} className="max-w-2xl text-center mx-auto mb-10">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Integración omnicanal
          </span>
          <h2
            id="canales-heading"
            ref={asRef<HTMLHeadingElement>(titleRef)}
            className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            Tu IA donde ya están{" "}
            <span className="text-primary">tus clientes</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-lg leading-relaxed">
            Desplegamos en los canales que tus prospectos ya usan. Sin
            fricciones, sin cambios de plataforma para ellos.
          </p>
        </div>

        {/* Cards de canales */}
        <ul
          ref={asRef<HTMLUListElement>(gridRef)}
          className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-5 gap-4"
        >
          {canales.map((c) => (
            <li
              key={c.label}
              className="card-hover flex flex-col items-center gap-3 rounded-2xl border border-border bg-card p-6 text-center"
            >
              <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-border bg-[var(--color-surface)]">
                <c.icon className="h-6 w-6 text-accent" aria-hidden />
              </div>
              <span className="text-sm font-semibold text-foreground">{c.label}</span>
              <span className="text-xs text-muted-foreground">{c.descripcion}</span>
            </li>
          ))}
        </ul>

        {/* Nota de integración */}
        <p className="mt-8 text-center text-xs text-muted-foreground">
          ¿Usas otro canal o sistema interno?{" "}
          <a href="#contacto" className="text-primary hover:underline font-medium">
            Consúltanos →
          </a>
        </p>
      </div>
    </section>
  );
}
