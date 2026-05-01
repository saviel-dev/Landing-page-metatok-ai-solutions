import { TrendingUp } from "lucide-react";
import { beneficios } from "./content";
import { useStaggerChildren, useSlideInLeft, useTypingEffect, asRef } from "@/hooks/useAnimeJs";

export function Beneficios() {
  const headerRef = useSlideInLeft(0);
  const titleRef = useTypingEffect(200);
  const gridRef = useStaggerChildren(":scope > div", 100, 100);

  return (
    <section
      id="beneficios"
      className="py-8 md:py-12 border-y border-border bg-[var(--color-surface)]"
      aria-labelledby="beneficios-heading"
    >
      <div className="container-mt">
        {/* Encabezado */}
        <div ref={asRef<HTMLDivElement>(headerRef)} className="max-w-2xl mb-6">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Resultados tangibles
          </span>
          <h2
            id="beneficios-heading"
            ref={asRef<HTMLHeadingElement>(titleRef)}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            De software a{" "}
            <span className="text-primary">ecosistema que factura</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-snug">
            No compras un chat: instalas un departamento de ventas que no duerme. Horas
            recuperadas, leads que avanzan en el embudo y cierres que antes se quedaban a medias.
          </p>
        </div>

        {/* Grid de beneficios con métricas */}
        <div
          ref={asRef<HTMLDivElement>(gridRef)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {beneficios.map((b) => (
            <div
              key={b.titulo}
              className="card-hover relative rounded-xl border border-border bg-card p-4 flex flex-col"
            >
              {/* Métrica destacada */}
              <div className="flex items-center gap-2 mb-4">
                <span className="text-3xl font-extrabold text-primary tracking-tight">
                  {b.metrica}
                </span>
                <TrendingUp className="h-5 w-5 text-accent" aria-hidden />
              </div>
              <p className="text-[10px] font-semibold uppercase tracking-widest text-muted-foreground mb-4">
                {b.metricaLabel}
              </p>

              {/* Separador */}
              <div className="h-px bg-border mb-4" />

              <h3 className="text-base font-semibold text-foreground">{b.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">
                {b.descripcion}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
