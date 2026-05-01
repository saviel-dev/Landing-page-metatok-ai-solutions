import { motion } from "framer-motion";
import { Share2, Database, Landmark, Plug, Languages, TrendingUp } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";

/** Storyboard: tres esferas del diferencial (omnicanalidad, CRM/sistemas, sector público). */
const pillars = [
  {
    icon: Share2,
    title: "Omnicanalidad total",
    body:
      "WhatsApp, Telegram, Instagram y Web bajo una sola estrategia y una sola colmena operativa.",
  },
  {
    icon: Database,
    title: "Sistemas avanzados",
    body:
      "Integración nativa con CRMs como Salesforce y HubSpot, además de bases de datos y sistemas propios.",
  },
  {
    icon: Landmark,
    title: "Ventas al sector público",
    body:
      "Protocolos de seguridad y cumplimiento para Administración Pública y licitaciones.",
  },
];

const roadmap = [
  {
    icon: Plug,
    title: "API abierta",
    text: "Conecta con cualquier CRM: Salesforce, Pipedrive, HubSpot y más.",
  },
  {
    icon: Languages,
    title: "Multilingüe real",
    text: "Expansión global inmediata: mismo agente, varios idiomas, sin fricción.",
  },
  {
    icon: TrendingUp,
    title: "Compromiso de respuesta",
    text: "Aumenta tu tasa de respuesta hasta un 400% frente a seguimiento manual.",
  },
];

export function MetaTokEngine() {
  return (
    <section
      id="motor-metatok"
      className="py-8 md:py-12 border-y border-border bg-[var(--color-surface)]"
      aria-labelledby="engine-heading"
    >
      <div className="container-mt">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-3xl mb-7"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-accent font-semibold"
          >
            The MetaTok Engine
          </motion.span>
          <motion.h2
            id="engine-heading"
            variants={fadeUp}
            className="mt-2 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            El diferencial que{" "}
            <span className="text-primary">instala un departamento de ventas</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-base text-muted-foreground leading-snug">
            Tres pilares técnicos — y además{" "}
            <span className="text-foreground/95 font-medium">cierre autónomo</span>: la IA guía el
            embudo hasta el pago o la cita, no se queda en respuestas sueltas.
          </motion.p>
        </motion.div>

        {/* Diagrama: tres nodos unidos */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="relative mb-5 max-w-5xl mx-auto"
          aria-hidden
        >
          <div className="absolute left-[16%] right-[16%] top-[42%] h-px bg-gradient-to-r from-transparent via-primary/35 to-transparent hidden md:block" />
          <div className="absolute left-1/2 top-[20%] bottom-[28%] w-px bg-gradient-to-b from-transparent via-accent/25 to-transparent hidden md:block -translate-x-1/2" />
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-3 gap-4 mb-6"
        >
          {pillars.map((p, i) => (
            <motion.div
              key={p.title}
              variants={fadeUp}
              className="relative rounded-xl border border-border bg-card p-4 overflow-hidden card-hover text-center md:text-left"
            >
              <div
                aria-hidden
                className="absolute -top-6 left-1/2 md:left-auto md:right-6 -translate-x-1/2 md:translate-x-0 h-20 w-20 rounded-full opacity-[0.14]"
                style={{
                  background:
                    i === 1
                      ? "radial-gradient(circle, var(--color-accent) 0, transparent 70%)"
                      : "radial-gradient(circle, var(--color-primary) 0, transparent 70%)",
                }}
              />
              <div className="mx-auto md:mx-0 flex h-11 w-11 items-center justify-center rounded-full border border-primary/35 bg-primary/10 text-primary mb-3">
                <p.icon className="h-5 w-5" aria-hidden />
              </div>
              <h3 className="text-base font-bold text-foreground">{p.title}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed">{p.body}</p>
            </motion.div>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-xl border border-border bg-muted/90 p-4 md:p-5 dark:border-luxury-gold/25 dark:bg-black/40"
        >
          <p className="text-xs font-semibold uppercase tracking-widest text-luxury-gold mb-3">
            Hoja de ruta inmediata
          </p>
          <ul className="grid sm:grid-cols-3 gap-3 md:gap-4">
            {roadmap.map((r) => (
              <li key={r.title} className="flex gap-2.5">
                <span className="mt-0.5 inline-flex h-8 w-8 shrink-0 items-center justify-center rounded-lg border border-border bg-background/80 text-accent">
                  <r.icon className="h-3.5 w-3.5" aria-hidden />
                </span>
                <div>
                  <p className="font-semibold text-foreground text-sm">{r.title}</p>
                  <p className="mt-1 text-xs text-muted-foreground leading-relaxed">{r.text}</p>
                </div>
              </li>
            ))}
          </ul>
        </motion.div>
      </div>
    </section>
  );
}
