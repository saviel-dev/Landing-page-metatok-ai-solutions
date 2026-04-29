import { motion } from "framer-motion";
import { ArrowRight, Check } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger, viewportOnce } from "./motion";

const incluye = [
  "Análisis de tu volumen de tráfico actual",
  "Detección de fugas de conversión",
  "Mapa estratégico personalizado con IA",
  "Estimación de impacto en facturación",
];

export function Auditoria() {
  return (
    <section
      id="auditoria"
      className="py-20 md:py-28"
      aria-labelledby="auditoria-heading"
    >
      <div className="container-mt">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="relative overflow-hidden rounded-3xl border border-primary/40 bg-[var(--color-surface)] p-6 md:p-14"
        >
          {/* Acento sutil */}
          <div
            aria-hidden
            className="absolute inset-0 -z-10 opacity-[0.08]"
            style={{
              backgroundImage:
                "radial-gradient(circle at 80% 20%, var(--color-primary) 0, transparent 45%)",
            }}
          />

          <div className="grid lg:grid-cols-12 gap-10 items-center">
            <div className="lg:col-span-7">
              <motion.span
                variants={fadeUp}
                className="inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3 py-1 text-xs text-primary font-semibold"
              >
                Auditoría 100% gratuita · Sin compromiso
              </motion.span>

              <motion.h2
                id="auditoria-heading"
                variants={fadeUp}
                className="mt-5 text-3xl md:text-5xl font-bold text-foreground tracking-tight leading-[1.1]"
              >
                Descubre cuánto está perdiendo tu negocio{" "}
                <span className="text-primary">sin IA</span>.
              </motion.h2>

              <motion.p
                variants={fadeUp}
                className="mt-5 text-lg text-muted-foreground max-w-xl"
              >
                Una sesión técnica con un experto en automatización que evalúa tu
                operación y diseña un plan claro para escalar tu conversión.
              </motion.p>

              <motion.ul variants={fadeUp} className="mt-7 space-y-3">
                {incluye.map((item) => (
                  <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                    <span className="mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/40">
                      <Check className="h-3 w-3 text-primary" aria-hidden />
                    </span>
                    {item}
                  </li>
                ))}
              </motion.ul>

              <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
                <Button
                  asChild
                  size="lg"
                  className="w-full sm:w-auto h-auto py-3.5 px-4 sm:px-6 text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold whitespace-normal text-center"
                >
                  <a href="#contacto" className="flex items-center justify-center">
                    Solicitar mi auditoría gratuita
                    <ArrowRight className="ml-2 h-4 w-4 shrink-0" />
                  </a>
                </Button>
                <span className="self-center text-xs text-muted-foreground">
                  Plazas limitadas cada semana
                </span>
              </motion.div>
            </div>

            <motion.div
              variants={fadeUp}
              className="lg:col-span-5"
              aria-hidden
            >
              <div className="rounded-2xl border border-border bg-card p-4 sm:p-6">
                <div className="text-xs text-muted-foreground">
                  Estimación post-auditoría
                </div>
                <div className="mt-3 grid grid-cols-2 gap-3">
                  <Stat label="Leads recuperados" value="+38%" />
                  <Stat label="Tiempo ahorrado" value="22h/sem" />
                  <Stat label="Citas agendadas" value="+54%" />
                  <Stat label="Tasa conversión" value="+27%" />
                </div>
                <p className="mt-5 text-xs text-muted-foreground">
                  *Promedios observados en clientes tras 60 días de despliegue.
                </p>
              </div>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function Stat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/60 p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-2xl font-bold text-primary">{value}</div>
    </div>
  );
}
