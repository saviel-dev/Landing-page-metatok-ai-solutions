import { motion } from "framer-motion";
import { canales } from "./content";
import { fadeUp, stagger, viewportOnce } from "./motion";

export function Canales() {
  return (
    <section className="py-14 md:py-16" aria-label="Canales de integración">
      <div className="container-mt">
        <p className="text-center text-sm text-muted-foreground">
          Despliegue omnicanal · Web, mensajería e integraciones API
        </p>
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
        >
          {canales.map((c) => (
            <motion.li
              key={c.label}
              variants={fadeUp}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <c.icon className="h-5 w-5 text-accent" aria-hidden />
              <span className="text-sm font-medium">{c.label}</span>
            </motion.li>
          ))}
        </motion.ul>
      </div>
    </section>
  );
}
