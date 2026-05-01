import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./motion";

/** Cifra orientativa de escala — sustituye cuando tengas dato real. */
const MENSAJES_MENSUALES_M = "12";

export function SocialProofStrip() {
  return (
    <section
      className="border-b border-border bg-muted py-2.5 dark:bg-neutral-950"
      aria-label="Escala de la plataforma"
    >
      <div className="container-mt">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center text-sm md:text-base text-foreground/90"
        >
          <span className="font-semibold text-primary">MetaTok</span> ya está procesando{" "}
          <span className="font-extrabold tabular-nums text-luxury-gold">+{MENSAJES_MENSUALES_M} millones</span>{" "}
          de mensajes al mes en conversaciones de venta.
        </motion.p>
      </div>
    </section>
  );
}
