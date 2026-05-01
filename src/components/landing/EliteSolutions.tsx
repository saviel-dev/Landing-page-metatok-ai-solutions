import { motion, useReducedMotion } from "framer-motion";
import { CheckCircle2, Smartphone } from "lucide-react";
import type { Transition } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion";

const bullets = [
  "Identidad corporativa integral: marca, tonalidad visual y naming alineados a tu negocio.",
  "Distribución profesional en App Store y Google Play, o canal privado corporativo cuando lo necesites.",
  "Misma capa cognitiva MetaTok dentro de tu app — agentes que venden, cualifican y agendan 24/7.",
  "Paneles analíticos y reporting bajo tu white label para medir funnel y equipo comercial.",
  "Roadmaps y actualizaciones coordinadas sin que tu marca pierda el control narrativo ante el cliente.",
  "Opciones Enterprise: SLAs, privacidad (RGPD) y gobernanza de datos coherentes con tu compliance.",
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
      className="relative py-8 md:py-12 bg-background overflow-hidden"
      aria-labelledby="producto-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-100 bg-gradient-to-br from-primary/[0.08] via-accent/[0.04] to-transparent dark:from-primary/[0.12] dark:via-accent/[0.08] dark:to-black/25"
      />
      <div aria-hidden className="pointer-events-none absolute inset-0 opacity-60">
        <motion.div
          className="absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-primary/[0.06] blur-3xl dark:bg-primary/10"
          animate={
            prefersReducedMotion
              ? false
              : { scale: [1, 1.06, 1], opacity: [0.5, 0.75, 0.5] }
          }
          transition={{ duration: 12, repeat: Infinity, ease: "easeInOut" }}
        />
        <motion.div
          className="absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-accent/[0.05] blur-3xl dark:bg-accent/10"
          animate={
            prefersReducedMotion ? false : { scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] }
          }
          transition={{ duration: 14, repeat: Infinity, ease: "easeInOut" }}
        />
      </div>

      <div className="container-mt relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-2xl mb-6 md:mb-8"
        >
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-primary font-semibold">
            Producto
          </motion.span>
          <motion.h2
            id="producto-heading"
            variants={fadeUp}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            Creación de apps &amp; white label
          </motion.h2>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid lg:grid-cols-2 gap-8 lg:gap-10 xl:gap-12 items-center"
        >
          <motion.div variants={fadeUp} className="order-2 lg:order-1">
            <div className="inline-flex h-12 w-12 items-center justify-center rounded-xl border border-luxury-gold/35 bg-primary/10 text-luxury-gold mb-5 dark:bg-black/50">
              <Smartphone className="h-6 w-6" aria-hidden />
            </div>
            <p className="text-xs font-semibold uppercase tracking-wider text-luxury-gold">
              Tu marca, nuestra potencia
            </p>
            <p className="mt-4 text-muted-foreground text-base leading-snug">
              Llevamos tu tecnología al siguiente nivel: creamos tu propia app nativa con el motor de
              MetaTok. Soluciones marca blanca para que lideres tu mercado con tu nombre.
            </p>

            <ul className="mt-6 md:mt-7 space-y-3.5 md:space-y-3" aria-label="Incluye en white label y apps">
              {bullets.map((text, i) => (
                <motion.li
                  key={text}
                  className="flex gap-3 text-sm text-foreground/90 leading-snug"
                  initial={
                    prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 }
                  }
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={{ once: true, amount: 0.35 }}
                  transition={prefersReducedMotion ? { duration: 0 } : bulletTransition(i)}
                >
                  <CheckCircle2
                    className="h-5 w-5 shrink-0 text-primary mt-0.5"
                    aria-hidden
                  />
                  <span>{text}</span>
                </motion.li>
              ))}
            </ul>
          </motion.div>

          <motion.div
            variants={fadeUp}
            className="order-1 lg:order-2 flex justify-center lg:justify-end"
            aria-hidden
          >
            <motion.div
              className="relative isolate rounded-[2rem] p-4 sm:p-5 border border-border/70 bg-card/55 backdrop-blur-[2px] shadow-lg shadow-foreground/[0.08] dark:bg-black/25"
              initial={prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 28, rotate: -3 }}
              whileInView={{ opacity: 1, y: 0, rotate: 0 }}
              viewport={viewportOnce}
              transition={{ duration: 0.62, ease: bulletEase }}
            >
              <motion.div
                animate={prefersReducedMotion ? false : { y: [0, -10, 0] }}
                transition={
                  prefersReducedMotion
                    ? undefined
                    : { duration: 5.3, repeat: Infinity, ease: [0.45, 0, 0.55, 1] }
                }
              >
                <div className="w-[220px] sm:w-[260px] rounded-[2.75rem] border-[6px] border-border bg-muted p-2 shadow-lg shadow-foreground/10 ring-1 ring-border dark:border-zinc-700 dark:bg-zinc-900 dark:shadow-[0_40px_100px_-30px_rgba(0,0,0,0.85)] dark:ring-[rgba(212,175,55,0.25)]">
                  <div className="rounded-[2.25rem] overflow-hidden bg-card aspect-[9/19] flex flex-col dark:bg-black relative">
                    <div className="h-7 shrink-0 flex items-center justify-center gap-1.5 pt-2">
                      <span className="h-1 w-8 rounded-full bg-muted-foreground/35 dark:bg-zinc-700" />
                    </div>
                    <div className="flex-1 flex flex-col items-center justify-center px-4 pb-8 gap-3">
                      <motion.div
                        className="h-14 w-14 rounded-2xl border border-luxury-gold/40 bg-muted dark:bg-zinc-950 flex items-center justify-center text-[10px] font-bold text-luxury-gold tracking-tight"
                        initial={
                          prefersReducedMotion
                            ? { scale: 1, opacity: 1 }
                            : { scale: 0.88, opacity: 0.65 }
                        }
                        whileInView={
                          prefersReducedMotion ? { scale: 1, opacity: 1 } : { scale: [0.88, 1.04, 1], opacity: 1 }
                        }
                        viewport={{ once: true, amount: 0.55 }}
                        transition={
                          prefersReducedMotion
                            ? { duration: 0 }
                            : { duration: 0.55, times: [0, 0.65, 1], ease: bulletEase }
                        }
                      >
                        LOGO
                      </motion.div>
                      <motion.p
                        className="text-center text-[11px] text-muted-foreground leading-snug"
                        initial={{ opacity: 0 }}
                        whileInView={{ opacity: 1 }}
                        viewport={{ once: true }}
                        transition={{ duration: 0.4 }}
                      >
                        App de ventas con tu marca — motor MetaTok
                      </motion.p>
                    </div>
                  </div>
                </div>
              </motion.div>
            </motion.div>
          </motion.div>
        </motion.div>
      </div>
    </section>
  );
}
