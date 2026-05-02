import { motion, useReducedMotion } from "framer-motion";
import type { Transition } from "framer-motion";
import {
  ArrowUpRight,
  CheckCircle2,
  Globe,
  Palette,
  ShieldCheck,
  Smartphone,
  Store,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { useEffect, useState } from "react";

/* ─── Typing Dots ────────────────────────────────────────────────────────── */
function TypingDotsWL() {
  return (
    <div className="flex items-center gap-1 px-2.5 py-1.5">
      {[0, 1, 2].map((i) => (
        <motion.span
          key={i}
          className="w-1 h-1 rounded-full bg-muted-foreground/60"
          animate={{ y: [0, -3, 0], opacity: [0.4, 1, 0.4] }}
          transition={{ duration: 0.75, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }}
        />
      ))}
    </div>
  );
}

/* ─── Chat script ────────────────────────────────────────────────────────── */
const WL_CHAT_STEPS = [
  { from: "bot",  text: "Hola, soy el asesor de TuMarca. ¿En qué te ayudo? 👋",      typingMs: 1200, showAt: 0     },
  { from: "user", text: "Quiero una propuesta para esta semana.",                      typingMs: 900,  showAt: 2600  },
  { from: "bot",  text: "¡Perfecto! ¿Prefieres reunión por videollamada o presencial?", typingMs: 1300, showAt: 4700  },
  { from: "user", text: "Videollamada, any day ✅",                                     typingMs: 800,  showAt: 7400  },
  { from: "bot",  text: "Agendado para mañana 10:30. Te mando confirmación 📅",         typingMs: 1400, showAt: 9800  },
  { from: "user", text: "Genial, muchas gracias 🙌",                                   typingMs: 700,  showAt: 13000 },
  { from: "bot",  text: "¡Hasta mañana! Cualquier duda, aquí estoy 🚀",               typingMs: 1200, showAt: 15000 },
] as const;

const WL_CYCLE_MS = 20000;

function LiveChatWL() {
  const [visibleCount, setVisibleCount] = useState(0);
  const [typingFor, setTypingFor] = useState<"bot" | "user" | null>(null);

  useEffect(() => {
    const timers: ReturnType<typeof setTimeout>[] = [];
    function runCycle() {
      setVisibleCount(0);
      setTypingFor(null);
      WL_CHAT_STEPS.forEach((step, idx) => {
        timers.push(setTimeout(() => setTypingFor(step.from as "bot" | "user"), step.showAt));
        timers.push(setTimeout(() => { setVisibleCount(idx + 1); setTypingFor(null); }, step.showAt + step.typingMs));
      });
      timers.push(setTimeout(() => { timers.forEach(clearTimeout); runCycle(); }, WL_CYCLE_MS));
    }
    const start = setTimeout(runCycle, 600);
    timers.push(start);
    return () => timers.forEach(clearTimeout);
  }, []);

  return (
    <div className="flex flex-col gap-1.5 overflow-hidden">
      {WL_CHAT_STEPS.slice(0, visibleCount).map((step, idx) => (
        <motion.div
          key={idx}
          initial={{ opacity: 0, y: 5, scale: 0.97 }}
          animate={{ opacity: 1, y: 0, scale: 1 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
          className={`flex ${step.from === "user" ? "justify-end" : "justify-start"}`}
        >
          <span
            className={[
              "text-[9px] rounded-lg px-2 py-1 max-w-[82%] leading-tight",
              step.from === "bot"
                ? "text-foreground/85 rounded-tl-sm"
                : "text-white font-medium rounded-tr-sm",
            ].join(" ")}
            style={
              step.from === "bot"
                ? { background: "var(--color-background)", border: "1px solid var(--color-border)" }
                : { background: "var(--color-accent)" }
            }
          >
            {step.text}
          </span>
        </motion.div>
      ))}
      {typingFor && (
        <motion.div
          initial={{ opacity: 0, y: 4 }}
          animate={{ opacity: 1, y: 0 }}
          className={`flex ${typingFor === "user" ? "justify-end" : "justify-start"}`}
        >
          <div
            className="rounded-lg rounded-tl-sm"
            style={{ background: "var(--color-background)", border: "1px solid var(--color-border)" }}
          >
            <TypingDotsWL />
          </div>
        </motion.div>
      )}
    </div>
  );
}

const bullets = [
  "Identidad corporativa integral: marca, tonalidad visual y naming alineados a tu negocio.",
  "Distribucion profesional en App Store y Google Play, o canal privado corporativo cuando lo necesites.",
  "Misma capa cognitiva MetaTok dentro de tu app: agentes que venden, cualifican y agendan 24/7.",
  "Paneles analiticos y reporting bajo tu white label para medir funnel y equipo comercial.",
  "Roadmaps y actualizaciones coordinadas sin que tu marca pierda el control narrativo ante el cliente.",
  "Opciones Enterprise: SLAs, privacidad (RGPD) y gobernanza de datos coherentes con tu compliance.",
];

const highlights = [
  {
    icon: Palette,
    title: "Branding completo",
    text: "UI, tono, iconografia y experiencia coherente con tu marca.",
  },
  {
    icon: Store,
    title: "Publicacion oficial",
    text: "Despliegue en App Store y Google Play o distribucion privada enterprise.",
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento enterprise",
    text: "RGPD, controles de acceso y trazabilidad para operacion segura.",
  },
  {
    icon: Globe,
    title: "Escala multinicho",
    text: "Una base tecnica para multiples verticales sin rehacer producto.",
  },
];

const bulletEase = [0.22, 1, 0.36, 1] as const;
const bulletTransition = (index: number): Transition => ({
  delay: index * 0.06,
  duration: 0.45,
  ease: bulletEase,
});

export function EliteSolutions() {
  const prefersReducedMotion = useReducedMotion();

  return (
    <section
      id="producto-white-label"
      className="relative overflow-hidden bg-background py-16 md:py-24"
      aria-labelledby="producto-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-accent/[0.05] to-transparent dark:from-primary/[0.14] dark:via-accent/[0.08] dark:to-black/25"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-70">
        <motion.div
          className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-primary/[0.08] blur-3xl dark:bg-primary/12"
          animate={
            prefersReducedMotion ? false : { scale: [1, 1.06, 1], opacity: [0.5, 0.75, 0.5] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-accent/[0.08] blur-3xl dark:bg-accent/12"
          animate={
            prefersReducedMotion ? false : { scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-35"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 6%, transparent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-mt relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mx-auto mb-12 max-w-3xl text-center md:mb-14"
        >
          <motion.span
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary"
          >
            <Smartphone className="h-3.5 w-3.5" aria-hidden />
            Producto
          </motion.span>
          <motion.h2
            id="producto-heading"
            variants={fadeUp}
            className="mt-4 text-3xl font-black tracking-tight text-foreground md:text-5xl"
          >
            Tu app, tu marca, nuestra tecnologia
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            Convertimos MetaTok en un producto white label listo para venta: experiencia nativa,
            arquitectura de conversion y operacion comercial bajo tu identidad.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid gap-6 md:grid-cols-2 xl:grid-cols-4"
        >
          {highlights.map((item) => (
            <motion.article
              key={item.title}
              variants={fadeUp}
              className="group rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/45"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <item.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{item.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{item.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-10 grid items-stretch gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10"
        >
          <motion.div
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/65 p-6 md:p-8 backdrop-blur-sm"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <div className="relative z-10">
              <div className="mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--luxury-gold)]/35 bg-primary/10 text-[var(--luxury-gold)]">
                <Smartphone className="h-6 w-6" aria-hidden />
              </div>
              <p className="text-xs font-semibold uppercase tracking-[0.15em] text-[var(--luxury-gold)]">
                Tu marca, nuestra potencia
              </p>
              <p className="mt-4 text-base leading-relaxed text-muted-foreground">
                Creamos tu aplicacion nativa con el motor de MetaTok integrado. Tu controlas marca,
                narrativa comercial y pricing; nosotros aceleramos la capa tecnica y la conversion.
              </p>

              <ul className="mt-7 space-y-3.5" aria-label="Incluye en white label y apps">
                {bullets.map((text, i) => (
                  <motion.li
                    key={text}
                    className="flex gap-3 text-sm leading-relaxed text-foreground/90"
                    initial={prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }}
                    whileInView={{ opacity: 1, x: 0 }}
                    viewport={{ once: true, amount: 0.35 }}
                    transition={prefersReducedMotion ? { duration: 0 } : bulletTransition(i)}
                  >
                    <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                    <span>{text}</span>
                  </motion.li>
                ))}
              </ul>
            </div>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="relative flex items-center justify-center rounded-3xl border border-border/80 bg-card/60 p-6 md:p-8 backdrop-blur-sm"
            aria-hidden
          >
            <div className="absolute -right-10 top-8 h-36 w-36 rounded-full bg-accent/20 blur-3xl" />
            <div className="absolute -left-8 bottom-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" />
            <motion.div
              className="relative isolate rounded-[2.2rem] border border-border bg-background/85 p-3 shadow-[0_32px_90px_-40px_var(--color-primary)]"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 28, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.62, ease: bulletEase }}
            >
              <motion.div>
                <div className="w-[240px] sm:w-[285px] rounded-[2.5rem] border-[7px] border-border bg-muted/50 p-2.5 shadow-xl ring-1 ring-border">
                  <div className="relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-card">
                    <div className="flex h-7 items-center justify-center pt-2">
                      <span className="h-1 w-10 rounded-full bg-muted-foreground/35" />
                    </div>

                    <div className="px-4 pt-2">
                      <div className="rounded-2xl border border-primary/25 bg-primary/10 p-3">
                        <p className="text-[10px] uppercase tracking-[0.18em] text-primary">White Label</p>
                        <p className="mt-1 text-sm font-bold text-foreground">TuMarca Assistant</p>
                        <p className="mt-1 text-[11px] text-muted-foreground">Lead cualificado en 43s</p>
                      </div>
                    </div>

                    {/* Live chat area */}
                    <div className="space-y-2 px-3 pb-4 pt-3" style={{ minHeight: "160px" }}>
                      <LiveChatWL />
                    </div>
                  </div>
                </div>
              </motion.div>

              <div className="pointer-events-none absolute -right-5 top-10 rounded-xl border border-border bg-card/90 px-3 py-2 text-xs text-foreground shadow-lg backdrop-blur">
                <p className="font-semibold">+31% demo bookings</p>
              </div>
              <div className="pointer-events-none absolute -left-4 bottom-10 rounded-xl border border-border bg-card/90 px-3 py-2 text-xs text-foreground shadow-lg backdrop-blur">
                <p className="font-semibold">Marca 100% personalizada</p>
              </div>
            </motion.div>
          </motion.div>
        </motion.div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contacto"
            className="cta-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            Quiero mi app white label
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#planes"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/45 hover:text-primary"
          >
            Ver opciones enterprise
            <ShieldCheck className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
