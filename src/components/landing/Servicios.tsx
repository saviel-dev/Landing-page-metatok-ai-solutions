import { motion } from "framer-motion";
import { servicios } from "./content";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { useSlideInLeft, useStaggerChildren, useTypingEffect, asRef } from "@/hooks/useAnimeJs";
import { Zap } from "lucide-react";

export function Servicios() {
  const titleRef = useTypingEffect(200);
  const headerRef = useSlideInLeft(0);
  const gridRef = useStaggerChildren(":scope > article", 100, 90);

  return (
    <section id="servicios" className="py-8 md:py-12" aria-labelledby="servicios-heading">
      <div className="container-mt">
        {/* Encabezado */}
        <div ref={asRef<HTMLDivElement>(headerRef)} className="max-w-2xl mb-6">
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            Servicios
          </span>
          <h2
            id="servicios-heading"
            ref={asRef<HTMLHeadingElement>(titleRef)}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            Todo lo que necesitas para convertir{" "}
            <span className="text-primary">más sin trabajar más</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-snug">
            Cada pieza está diseñada para integrarse en tu negocio y operar de
            forma autónoma desde el primer día.
          </p>
        </div>

        {/* Grid de cards */}
        <div
          ref={asRef<HTMLDivElement>(gridRef)}
          className="mt-2 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {servicios.map((s) => (
            <article
              key={s.titulo}
              className={[
                "card-hover rounded-xl border border-border bg-card p-4 md:p-7 flex flex-col",
                s.destacado ? "border-primary/30" : "",
              ].join(" ")}
            >
              {s.image && (
                <div className="mb-6 -mt-2 -mx-2 overflow-hidden rounded-xl border border-border/40 bg-background/40">
                  <img
                    src={s.image}
                    alt={s.titulo}
                    className="w-full h-40 object-cover opacity-90 transition-opacity duration-300 hover:opacity-100"
                  />
                </div>
              )}

              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-[var(--color-surface)]">
                <s.icon className="h-5 w-5 text-primary" aria-hidden />
              </div>

              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground flex-1">
                {s.descripcion}
              </p>

              {/* Beneficio concreto */}
              {s.beneficio && (
                <div className="mt-5 flex items-start gap-2 rounded-lg bg-primary/8 border border-primary/20 px-3 py-2.5">
                  <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden />
                  <span className="text-xs font-medium text-primary leading-snug">
                    {s.beneficio}
                  </span>
                </div>
              )}
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
