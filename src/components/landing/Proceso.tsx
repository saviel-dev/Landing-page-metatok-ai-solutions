import { motion } from "framer-motion";
import { ArrowRight, CheckCircle2 } from "lucide-react";
import { proceso } from "./content";
import { fadeUp, stagger, viewportOnce } from "./motion";

const stepColors = [
  { from: "var(--color-primary)", to: "oklch(0.58 0.26 302)" },
  { from: "oklch(0.58 0.26 302)", to: "var(--color-accent)" },
  { from: "var(--color-accent)", to: "oklch(0.52 0.21 264)" },
  { from: "oklch(0.52 0.21 264)", to: "var(--color-primary)" },
];

export function Proceso() {
  return (
    <section
      id="proceso"
      className="relative py-16 md:py-24 bg-[var(--color-surface)] border-y border-border overflow-hidden"
      aria-labelledby="proceso-heading"
    >
      {/* Diagonal accent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 4%, transparent) 0%, transparent 50%, color-mix(in oklab, var(--color-accent) 3%, transparent) 100%)",
        }}
      />

      <div className="container-mt">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-2xl mb-16"
        >
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-primary font-semibold">
            Proceso
          </motion.span>
          <motion.h2
            id="proceso-heading"
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight"
          >
            De la auditoría al sistema activo{" "}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              en 4 pasos
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground text-base leading-relaxed">
            Un flujo diseñado para que no tengas que preocuparte de nada técnico.
            Tu trabajo es recibir los resultados.
          </motion.p>
        </motion.div>

        {/* Steps grid */}
        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative"
        >
          {/* Connecting line — desktop */}
          <li
            aria-hidden
            className="hidden lg:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-px pointer-events-none"
            style={{
              background: "linear-gradient(to right, var(--color-primary), var(--color-accent), var(--color-primary))",
              opacity: 0.25,
            }}
          />

          {proceso.map((p, i) => {
            const col = stepColors[i] ?? stepColors[0];
            return (
              <motion.li
                key={p.numero}
                variants={fadeUp}
                className="relative group"
              >
                {/* Number badge */}
                <div
                  className="relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full font-black text-base text-white shadow-lg"
                  style={{
                    background: `linear-gradient(135deg, ${col.from}, ${col.to})`,
                    boxShadow: `0 0 20px -5px ${col.from}`,
                  }}
                >
                  {p.numero}
                  {/* Arrow between steps — desktop */}
                  {i < proceso.length - 1 && (
                    <ArrowRight
                      className="hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 h-4 w-4 text-border"
                      aria-hidden
                    />
                  )}
                </div>

                {/* Card */}
                <div
                  className="rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-5 flex flex-col h-[calc(100%-4.5rem)] relative overflow-hidden
                             group-hover:border-primary/40 group-hover:shadow-[0_8px_30px_-10px_var(--color-primary)] transition-all duration-300"
                >
                  {/* Watermark */}
                  <div
                    className="absolute -bottom-4 -right-2 text-9xl font-black tracking-tighter leading-none select-none pointer-events-none opacity-[0.04]"
                    style={{ color: col.from }}
                  >
                    {p.numero}
                  </div>

                  {/* Glow on hover */}
                  <div
                    className="absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"
                    style={{
                      background: `radial-gradient(ellipse at 50% 0%, color-mix(in oklab, ${col.from} 12%, transparent) 0%, transparent 70%)`,
                    }}
                  />

                  <h3 className="relative text-base font-bold text-foreground">{p.titulo}</h3>
                  <p className="relative mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{p.descripcion}</p>

                  <div className="relative mt-5 pt-4 border-t border-border flex items-center gap-2">
                    <CheckCircle2 className="h-4 w-4 text-primary shrink-0" aria-hidden />
                    <span className="text-xs font-semibold text-primary">{p.resultado}</span>
                  </div>
                </div>
              </motion.li>
            );
          })}
        </motion.ol>

        {/* CTA */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.4 }}
          className="mt-12 text-center"
        >
          <a
            href="#auditoria"
            className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-7 py-3.5 text-sm font-bold text-primary hover:bg-primary/20 hover:shadow-[0_0_20px_-5px_var(--color-primary)] transition-all duration-300 backdrop-blur-sm"
          >
            Quiero empezar con la auditoría gratuita
            <ArrowRight className="h-4 w-4" />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
