import { proceso } from "./content";
import { useSlideInLeft, useScaleFade, useTypingEffect, useStaggerChildren, asRef } from "@/hooks/useAnimeJs";

export function Proceso() {
  const headerRef = useSlideInLeft(0);
  const titleRef = useTypingEffect(300);
  const stepsRef = useStaggerChildren(":scope > li", 100, 120);

  return (
    <section
      id="proceso"
      className="py-20 md:py-28 bg-[var(--color-surface)] border-y border-border"
      aria-labelledby="proceso-heading"
    >
      <div className="container-mt">
        {/* Encabezado */}
        <div ref={asRef<HTMLDivElement>(headerRef)} className="max-w-2xl">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Proceso
          </span>
          <h2
            id="proceso-heading"
            ref={asRef<HTMLHeadingElement>(titleRef)}
            className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            De la auditoría al despliegue, en 4 pasos
          </h2>
          <p className="mt-4 text-muted-foreground">
            Un flujo de alta precisión técnica diseñado para que solo te preocupes
            de recibir los resultados.
          </p>
        </div>

        {/* Steps — stagger con Anime.js */}
        <ol
          ref={asRef<HTMLOListElement>(stepsRef)}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {proceso.map((p) => (
            <li
              key={p.numero}
              className="card-hover relative rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-4xl font-bold text-primary tracking-tight">
                {p.numero}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{p.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.descripcion}</p>
            </li>
          ))}
        </ol>
      </div>
    </section>
  );
}
