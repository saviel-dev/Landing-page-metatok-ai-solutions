import { motion } from "framer-motion";
import { ArrowRight, Check, Flame } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger, viewportOnce } from "./motion";

const incluye = [
  "Análisis de tus canales y volumen de tráfico actuales",
  "Detección de fugas de conversión en tu funnel",
  "Mapa estratégico personalizado con IA",
  "Estimación de impacto real en facturación",
];

const stats = [
  { value: "+38%", label: "leads recuperados" },
  { value: "22h",  label: "ahorradas / semana" },
  { value: "+54%", label: "citas agendadas" },
  { value: "+27%", label: "tasa de conversión" },
];

export function Auditoria() {
  return (
    <section
      id="auditoria"
      className="py-8 md:py-12"
      aria-labelledby="auditoria-heading"
    >
      <div className="container-mt">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="relative overflow-hidden rounded-2xl border border-primary/40 bg-[var(--color-surface)] p-5 md:p-8"
        >
          {/* Acento de fondo */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 85% 15%, var(--color-primary) 0, transparent 50%)",
            }}
          />

          <div className="grid lg:grid-cols-12 gap-6 md:gap-8 items-start">
            {/* ── Columna izquierda: Copy ── */}
            <div className="lg:col-span-7 flex flex-col">
              <motion.span
                variants={fadeUp}
                className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary"
              >
                <Flame className="h-3.5 w-3.5" aria-hidden />
                Auditoría 100% gratuita · Sin compromiso
              </motion.span>

              <motion.h2
                id="auditoria-heading"
                variants={fadeUp}
                className="mt-3 text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-[1.08]"
              >
                Descubre exactamente cuánto{" "}
                <span className="text-primary">estás dejando de ganar</span>
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-3 text-base text-muted-foreground leading-relaxed max-w-xl"
              >
                No es una llamada comercial. Es una sesión técnica gratuita donde un
                experto en automatización analiza tu operación real y te muestra —
                con números — cuánto puedes mejorar.
              </motion.p>

              <motion.ul variants={fadeUp} className="mt-5 space-y-2">
                {incluye.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/40">
                      <Check className="h-3 w-3 text-primary" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} className="mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3">
                <Button
                  asChild
                  size="lg"
                  className="h-auto py-3 px-5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-bold rounded-xl group"
                >
                  <a href="#contacto" className="flex items-center gap-2">
                    Solicitar mi auditoría gratuita
                    <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                  </a>
                </Button>
                <span className="text-xs text-muted-foreground leading-tight">
                  Plazas limitadas cada semana.<br />Respuesta garantizada en &lt; 24 h.
                </span>
              </motion.div>
            </div>

            {/* ── Columna derecha: Stats ── */}
            <motion.div variants={fadeUp} className="lg:col-span-5" aria-hidden>
              <div className="rounded-xl border border-border bg-card p-4">
                <p className="text-xs font-semibold uppercase tracking-widest text-primary mb-5">
                  Resultados medios tras 60 días
                </p>
                <div className="grid grid-cols-2 gap-4">
                  {stats.map((s) => (
                    <div
                      key={s.label}
                      className="rounded-xl border border-border bg-background/60 p-4 text-center"
                    >
                      <div className="text-2xl font-extrabold text-primary">{s.value}</div>
                      <div className="mt-1 text-xs text-muted-foreground">{s.label}</div>
                    </div>
                  ))}
                </div>
                <p className="mt-5 text-[10px] text-muted-foreground/70">
                  *Promedios observados en clientes reales. Los resultados pueden variar según sector y volumen.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
