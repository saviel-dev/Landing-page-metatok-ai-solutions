import { motion } from "framer-motion";
import { proceso } from "./content";
import { fadeUp, stagger, viewportOnce } from "./motion";

export function Proceso() {
  return (
    <section
      id="proceso"
      className="py-20 md:py-28 bg-[var(--color-surface)] border-y border-border"
      aria-labelledby="proceso-heading"
    >
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
            Proceso
          </motion.span>
          <motion.h2
            id="proceso-heading"
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            De la auditoría al despliegue, en 4 pasos
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
            Un flujo de alta precisión técnica diseñado para que solo te preocupes
            de recibir los resultados.
          </motion.p>
        </motion.div>

        <motion.ol
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-12 grid md:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {proceso.map((p) => (
            <motion.li
              key={p.numero}
              variants={fadeUp}
              className="card-hover relative rounded-2xl border border-border bg-card p-6"
            >
              <div className="text-4xl font-bold text-primary tracking-tight">
                {p.numero}
              </div>
              <h3 className="mt-4 text-lg font-semibold text-foreground">{p.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{p.descripcion}</p>
            </motion.li>
          ))}
        </motion.ol>
      </div>
    </section>
  );
}
