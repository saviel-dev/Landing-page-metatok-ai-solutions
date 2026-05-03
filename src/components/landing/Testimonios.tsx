import { motion } from "framer-motion";
import { Star } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { useLang } from "@/i18n/LangContext";

export function Testimonios() {
  const { t } = useLang();
  const ts = t.testimoniosSection;
  const testimonios = ts.items;
  return (
    <section
      id="testimonios"
      className="py-8 md:py-12 bg-[var(--color-surface)] border-t border-border"
      aria-labelledby="testimonios-heading"
    >
      <div className="container-mt">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-3xl mb-8"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-primary font-semibold"
          >
            {ts.kicker}
          </motion.span>
          <motion.h2
            id="testimonios-heading"
            variants={fadeUp}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            {ts.title}
            <span className="text-primary">{ts.titleAccent}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-base text-muted-foreground leading-snug">
            {ts.subtitle}
          </motion.p>
        </motion.div>

        {/* Grid de testimonios */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-2 lg:grid-cols-3 gap-4"
        >
          {testimonios.map((item, index) => (
            <motion.div
              key={index}
              variants={fadeUp}
              className="rounded-xl border border-border bg-card p-5 shadow-sm flex flex-col justify-between card-hover cursor-default"
            >
              <div>
                <h4 className="text-base font-bold text-primary">{item.nombre}</h4>
                <p className="text-xs font-medium text-muted-foreground mb-2.5">{item.cargo}</p>
                <div className="flex gap-1 mb-3">
                  {[...Array(5)].map((_, i) => (
                    <Star key={i} className="h-3 w-3 fill-amber-400 text-amber-400" />
                  ))}
                </div>
                <p className="text-xs text-foreground/90 leading-relaxed font-medium">
                  {item.texto}
                </p>
              </div>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
