import { motion } from "framer-motion";
import { servicios } from "./content";
import { fadeUp, stagger, viewportOnce } from "./motion";

export function Servicios() {
  return (
    <section id="servicios" className="py-20 md:py-28" aria-labelledby="servicios-heading">
      <div className="container-mt">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-2xl"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-primary font-semibold"
          >
            Servicios
          </motion.span>
          <motion.h2
            id="servicios-heading"
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            Una arquitectura completa de IA y automatización
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
            Diseñamos cada pieza para que se integre en el núcleo de tu negocio y
            opere de forma autónoma desde el primer día.
          </motion.p>
        </motion.div>

        {/* Bento grid: 2 destacados grandes + 4 estándar */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-12 grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5"
        >
          {servicios.map((s) => (
            <motion.article
              key={s.titulo}
              variants={fadeUp}
              className={[
                "card-hover rounded-2xl border border-border bg-card p-6 md:p-7",
                s.destacado ? "lg:row-span-1" : "",
              ].join(" ")}
            >
              <div className="inline-flex h-11 w-11 items-center justify-center rounded-lg border border-border bg-[var(--color-surface)]">
                <s.icon className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <h3 className="mt-5 text-lg font-semibold text-foreground">{s.titulo}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">
                {s.descripcion}
              </p>
            </motion.article>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
