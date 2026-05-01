import { motion } from "framer-motion";
import { servicios } from "./content";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { useSlideInLeft, useStaggerChildren, useTypingEffect, asRef } from "@/hooks/useAnimeJs";
import { ArrowUpRight, Sparkles, Zap } from "lucide-react";

export function Servicios() {
  const titleRef = useTypingEffect(200);
  const headerRef = useSlideInLeft(0);
  const gridRef = useStaggerChildren(":scope > article", 100, 90);

  return (
    <section
      id="servicios"
      className="relative overflow-hidden py-16 md:py-24"
      aria-labelledby="servicios-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,color-mix(in_oklab,var(--color-primary)_16%,transparent)_0%,transparent_45%),radial-gradient(circle_at_85%_85%,color-mix(in_oklab,var(--color-accent)_18%,transparent)_0%,transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-20"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 7%, transparent) 1px, transparent 1px)",
          backgroundSize: "50px 50px",
        }}
      />

      <div className="container-mt relative">
        <div ref={asRef<HTMLDivElement>(headerRef)} className="mx-auto mb-10 max-w-3xl text-center md:mb-14">
          <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
            <Sparkles className="h-3.5 w-3.5" aria-hidden />
            Servicios
          </span>
          <h2
            id="servicios-heading"
            ref={asRef<HTMLHeadingElement>(titleRef)}
            className="mt-4 text-3xl md:text-5xl font-black text-foreground tracking-tight"
          >
            Todo lo que necesitas para convertir{" "}
            <span className="bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent">
              mas sin trabajar mas
            </span>
          </h2>
          <p className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Cada modulo esta pensado para integrarse en tu negocio y operar de forma autonoma desde
            el dia uno, con foco real en pipeline y ventas.
          </p>
          <div className="mt-6 flex flex-wrap items-center justify-center gap-3">
            <span className="rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-foreground">
              +400% tasa de respuesta
            </span>
            <span className="rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-foreground">
              24/7 operativo
            </span>
            <span className="rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-foreground">
              Integracion omnicanal
            </span>
          </div>
        </div>

        <div
          ref={asRef<HTMLDivElement>(gridRef)}
          className="grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3"
        >
          {servicios.map((s, index) => (
            <article
              key={s.titulo}
              className={[
                "group relative flex flex-col overflow-hidden rounded-3xl border bg-card/65 p-5 backdrop-blur-sm transition-all duration-300 md:p-6",
                "hover:-translate-y-1 hover:shadow-[0_28px_60px_-38px_var(--color-primary)]",
                s.destacado ? "border-primary/40 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]" : "border-border/80",
              ].join(" ")}
            >
              <div
                aria-hidden
                className="pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
              />

              {s.image && (
                <div className="relative mb-5 -mt-2 -mx-2 overflow-hidden rounded-2xl border border-border/60 bg-background/40">
                  <div className="pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/20 to-transparent" />
                  <img
                    src={s.image}
                    alt={s.titulo}
                    className="h-44 w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                  />
                </div>
              )}

              <div className="relative z-10 flex items-start justify-between gap-3">
                <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                  <s.icon className="h-5 w-5" aria-hidden />
                </span>
                <span className="rounded-full border border-border/70 bg-background/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground">
                  Servicio {String(index + 1).padStart(2, "0")}
                </span>
              </div>

              <h3 className="relative z-10 mt-5 text-lg font-bold text-foreground">{s.titulo}</h3>
              <p className="relative z-10 mt-2 flex-1 text-sm leading-relaxed text-muted-foreground">
                {s.descripcion}
              </p>

              {s.beneficio && (
                <div className="relative z-10 mt-5 flex items-start gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2.5">
                  <Zap className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden />
                  <span className="text-xs font-medium text-primary leading-snug">{s.beneficio}</span>
                </div>
              )}

              <div className="relative z-10 mt-5 flex items-center justify-between border-t border-border/70 pt-4">
                <span className="text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground">
                  Activacion inmediata
                </span>
                <span className="inline-flex items-center gap-1 text-xs font-semibold text-primary">
                  Ver mas
                  <ArrowUpRight className="h-3.5 w-3.5" aria-hidden />
                </span>
              </div>
            </article>
          ))}
        </div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mx-auto mt-10 max-w-4xl rounded-3xl border border-border/80 bg-card/60 p-5 md:p-6 backdrop-blur-sm"
        >
          <motion.div variants={fadeUp} className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <div>
              <p className="text-xs font-semibold uppercase tracking-[0.14em] text-[var(--luxury-gold)]">
                Stack completo
              </p>
              <h3 className="mt-2 text-xl font-black text-foreground md:text-2xl">
                Disena tu arquitectura comercial en una sola llamada
              </h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                Te mostramos que modulos necesitas primero, cuanto impacto esperar y como desplegarlo
                sin friccion.
              </p>
            </div>
            <a
              href="#contacto"
              className="cta-glow inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
            >
              Solicitar demo estrategica
              <ArrowUpRight className="h-4 w-4" aria-hidden />
            </a>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
