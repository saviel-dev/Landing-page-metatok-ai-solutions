import { motion } from "framer-motion";
import { Timer, Users, Target } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";

const items = [
  {
    icon: Timer,
    stat: "70%",
    title: "Lead frío",
    text: "El 70% de los leads se pierden por responder después de 5 minutos. La velocidad lo es todo.",
    tone: "from-orange-500 to-amber-400",
    glowColor: "rgba(251, 146, 60, 0.15)",
    borderColor: "border-orange-500/20",
  },
  {
    icon: Users,
    stat: "1.000",
    title: "Saturación humana",
    text: "Tu equipo humano no puede atender 1.000 chats a la vez. Los agentes MetaTok sí lo hacen.",
    tone: "from-amber-400 to-yellow-400",
    glowColor: "rgba(251, 191, 36, 0.12)",
    borderColor: "border-amber-400/20",
  },
  {
    icon: Target,
    stat: "Cero cierre",
    title: "Sin cierre autónomo",
    text: "Los bots comunes solo dan información. Los agentes MetaTok están programados para cerrar.",
    tone: "from-red-500 to-rose-400",
    glowColor: "rgba(239, 68, 68, 0.12)",
    borderColor: "border-red-500/20",
  },
];

export function PainPoints() {
  return (
    <section
      id="problema"
      className="relative py-20 md:py-28 bg-background overflow-hidden border-t border-border/50"
      aria-labelledby="pain-heading"
    >
      {/* ── BACKGROUND ENHANCEMENTS ── */}
      
      {/* 1. Grid Pattern (Theme Aware) */}
      <div 
        aria-hidden 
        className="absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, #ef4444 1px, transparent 1px), linear-gradient(to bottom, #ef4444 1px, transparent 1px)', backgroundSize: '60px 60px' }}
      />

      {/* 2. Top-left red glow */}
      <div
        aria-hidden
        className="absolute -top-40 -left-40 w-[600px] h-[600px] pointer-events-none rounded-full blur-[120px]"
        style={{ background: 'radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)' }}
      />
      
      {/* 3. Bottom-right orange/amber glow */}
      <div
        aria-hidden
        className="absolute -bottom-40 -right-40 w-[600px] h-[600px] pointer-events-none rounded-full blur-[100px]"
        style={{ background: 'radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)' }}
      />

      <div className="container-mt relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-2xl mb-10"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-[var(--luxury-gold)] font-semibold"
          >
            La fuga de dinero
          </motion.span>
          <motion.h2
            id="pain-heading"
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight"
          >
            Tres costes silenciosos{" "}
            <span className="text-red-400">que ya estás pagando</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground text-base leading-relaxed">
            Cada minuto sin automatización es dinero que se va. Identifica exactamente cuánto te está costando el statu quo.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-3 gap-5"
        >
          {items.map((it, i) => (
            <motion.div
              key={it.title}
              variants={fadeUp}
              className={`group relative rounded-2xl border ${it.borderColor} bg-card/70 backdrop-blur-sm p-6 overflow-hidden
                          hover:-translate-y-1 hover:shadow-xl transition-all duration-300`}
              style={{
                boxShadow: `0 0 0 0 ${it.glowColor}`,
              }}
              whileHover={{
                boxShadow: `0 20px 50px -15px ${it.glowColor.replace("0.15", "0.5").replace("0.12", "0.4")}`,
              }}
            >
              {/* Glow bg */}
              <div
                aria-hidden
                className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl"
                style={{
                  background: `radial-gradient(ellipse at 50% 0%, ${it.glowColor} 0%, transparent 70%)`,
                }}
              />

              {/* Watermark number */}
              <div className="absolute -bottom-4 -right-4 text-9xl font-black opacity-[0.04] leading-none select-none pointer-events-none text-foreground">
                {String(i + 1)}
              </div>

              {/* Icon + stat */}
              <div className="relative flex items-center gap-4 mb-5">
                <div
                  className="flex h-13 w-13 items-center justify-center rounded-xl"
                  style={{ background: `radial-gradient(circle, ${it.glowColor.replace("0.15","0.25").replace("0.12","0.2")} 0%, transparent 80%)`, border: `1px solid ${it.glowColor.replace("0.15","0.35").replace("0.12","0.3")}` }}
                >
                  <it.icon className="h-6 w-6 text-foreground/60" aria-hidden />
                </div>
                <div>
                  <p
                    className={`text-3xl font-black tracking-tight bg-gradient-to-r ${it.tone} bg-clip-text text-transparent`}
                  >
                    {it.stat}
                  </p>
                  <p className="text-xs font-bold uppercase tracking-widest text-muted-foreground mt-0.5">
                    {it.title}
                  </p>
                </div>
              </div>

              <div className="relative h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" />

              <p className="relative text-sm text-muted-foreground leading-relaxed">{it.text}</p>

              {/* Bottom gradient bar */}
              <div
                className={`mt-5 h-0.5 w-0 bg-gradient-to-r ${it.tone} rounded-full group-hover:w-full transition-all duration-500`}
              />
            </motion.div>
          ))}
        </motion.div>
      </div>
    </section>
  );
}
