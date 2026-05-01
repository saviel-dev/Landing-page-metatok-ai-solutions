import { motion } from "framer-motion";
import { Timer, Users, Target } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";

const items = [
  {
    icon: Timer,
    stat: "70%",
    title: "Lead frío",
    text: "El 70% de los leads se pierden por responder después de 5 minutos.",
    tone: "text-orange-400/95",
  },
  {
    icon: Users,
    stat: "1.000",
    title: "Saturación",
    text: "Tu equipo humano no puede atender 1.000 chats a la vez. MetaTok sí.",
    tone: "text-amber-400/95",
  },
  {
    icon: Target,
    stat: "Cierre",
    title: "Falta de cierre",
    text: "Los bots comunes solo dan información. Los agentes MetaTok están programados para cerrar.",
    tone: "text-red-400/90",
  },
];

export function PainPoints() {
  return (
    <section
      id="problema"
      className="py-8 md:py-12 bg-background"
      aria-labelledby="pain-heading"
    >
      <div className="container-mt">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-2xl mb-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-luxury-gold font-semibold"
          >
            La fuga de dinero
          </motion.span>
          <motion.h2
            id="pain-heading"
            variants={fadeUp}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            Tres costes silenciosos{" "}
            <span className="text-primary">que ya estás pagando</span>
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-3 gap-5"
        >
          {items.map((it) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              className="rounded-xl border border-border bg-card p-4 card-hover"
            >
              <div className="flex items-center gap-3 mb-4">
                <div className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-border bg-background/80">
                  <it.icon className="h-5 w-5 text-muted-foreground" aria-hidden />
                </div>
                <div>
                  <p className={`text-2xl font-extrabold tracking-tight ${it.tone}`}>{it.stat}</p>
                  <p className="text-xs font-semibold uppercase tracking-wider text-muted-foreground">
                    {it.title}
                  </p>
                </div>
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed">{it.text}</p>
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
