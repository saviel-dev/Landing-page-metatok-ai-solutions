import { ArrowRight } from "lucide-react";
import { proceso } from "./content";
import { useSlideInLeft, useStaggerChildren, useTypingEffect, asRef } from "@/hooks/useAnimeJs";

export function Proceso() {
  const headerRef = useSlideInLeft(0);
  const titleRef = useTypingEffect(300);
  const stepsRef = useStaggerChildren(":scope > li", 100, 120);

  return (
    <section
      id="proceso"
      className="py-8 md:py-12 bg-[var(--color-surface)] border-y border-border"
      aria-labelledby="proceso-heading"
    >
      <div className="container-mt">
        {/* Encabezado */}
        <div ref={asRef<HTMLDivElement>(headerRef)} className="max-w-2xl mb-6">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Proceso
          </span>
          <h2
            id="proceso-heading"
            ref={asRef<HTMLHeadingElement>(titleRef)}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            De la auditoría al sistema activo{" "}
            <span className="text-primary">en 4 pasos</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-snug">
            Un flujo diseñado para que no tengas que preocuparte de nada técnico.
            Tu trabajo es recibir los resultados.
          </p>
        </div>

        {/* Steps — stagger con Anime.js */}
        <ol
          ref={asRef<HTMLOListElement>(stepsRef)}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {proceso.map((p, i) => (
            <li
              key={p.numero}
              className="card-hover relative rounded-xl border border-border bg-card p-4 flex flex-col"
            >
              {/* Número grande (marca de agua en el fondo) */}
              <div className="absolute top-2 right-4 text-7xl font-black text-primary/5 tracking-tighter leading-none select-none pointer-events-none">
                {p.numero}
              </div>

              {/* Número visible + flecha conectora */}
              <div className="relative z-10 flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-full bg-primary/10 text-primary text-sm font-bold border border-primary/20">
                  {p.numero}
                </span>
                {i < proceso.length - 1 && (
                  <ArrowRight
                    className="hidden lg:block h-5 w-5 text-border absolute -right-5 top-1/2 -translate-y-1/2 z-10"
                    aria-hidden
                  />
                )}
              </div>

              <h3 className="mt-4 text-lg font-semibold text-foreground">{p.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.descripcion}</p>

              {/* Resultado */}
              <div className="mt-5 pt-4 border-t border-border">
                <span className="text-xs font-semibold text-primary">{p.resultado}</span>
              </div>
            </li>
          ))}
        </ol>

        {/* CTA inline */}
        <div className="mt-12 text-center">
          <a
            href="#auditoria"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-6 py-3 text-sm font-semibold text-primary hover:bg-primary/20 transition-colors"
          >
            Quiero empezar con la auditoría gratuita
            <ArrowRight className="h-4 w-4" />
          </a>
        </div>
      </div>
    </section>
  );
}
