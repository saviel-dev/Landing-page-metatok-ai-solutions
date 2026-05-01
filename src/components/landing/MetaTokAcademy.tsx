import { motion } from "framer-motion";
import { GraduationCap, Headphones } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";

export function MetaTokAcademy() {
  return (
    <section
      id="academy"
      className="py-8 md:py-12 border-y border-border bg-[var(--color-surface)]"
      aria-labelledby="academy-heading"
    >
      <div className="container-mt grid lg:grid-cols-2 gap-6 lg:gap-8 items-center">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center gap-2">
            <span className="inline-flex items-center gap-2 text-xs uppercase tracking-widest text-luxury-gold font-semibold">
              <GraduationCap className="h-4 w-4" aria-hidden />
              MetaTok Academy
            </span>
            <span className="text-muted-foreground/50 text-xs">·</span>
            <span className="text-xs uppercase tracking-widest text-primary font-semibold">
              MetaTok Masters
            </span>
          </motion.div>
          <motion.h2
            id="academy-heading"
            variants={fadeUp}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            Formación y liderazgo de marca
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-3 text-base text-muted-foreground leading-relaxed">
            No solo te damos el software. Te entregamos el manual de éxito. Formación constante en
            liderazgo de marca, marketing de guerrilla y estrategias de cierre con IA.
          </motion.p>
          <motion.ul variants={fadeUp} className="mt-6 space-y-2 text-sm text-foreground/90">
            <li className="flex gap-2">
              <span className="text-primary font-bold">·</span>
              Webinars, certificaciones y apoyo de marketing para clientes.
            </li>
            <li className="flex gap-2">
              <span className="text-primary font-bold">·</span>
              Vendemos la metodología de ventas del futuro, no solo la herramienta.
            </li>
          </motion.ul>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative aspect-[4/3] rounded-xl border border-border bg-gradient-to-br from-card via-background to-primary/10 overflow-hidden flex items-center justify-center p-5"
        >
          <div
            aria-hidden
            className="absolute inset-0 opacity-30"
            style={{
              backgroundImage:
                "radial-gradient(circle at 30% 20%, var(--color-primary) 0, transparent 45%), radial-gradient(circle at 80% 80%, var(--color-accent) 0, transparent 40%)",
            }}
          />
          <div className="relative z-10 text-center max-w-sm">
            <div className="mx-auto mb-4 inline-flex h-16 w-16 items-center justify-center rounded-2xl border border-luxury-gold/40 bg-primary/10 text-luxury-gold dark:bg-black/50">
              <Headphones className="h-8 w-8" aria-hidden />
            </div>
            <p className="text-sm text-muted-foreground leading-relaxed">
              Visual recomendado: persona real con auriculares y panel MetaTok al fondo. Sustituye
              este bloque por foto profesional cuando la tengas.
            </p>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
