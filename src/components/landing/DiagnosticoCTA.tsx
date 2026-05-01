import { motion } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle2 } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";

const situacionActual = [
  "Leads que no reciben respuesta en menos de 5 minutos",
  "Tu equipo pierde horas en prospectos que nunca comprarán",
  "Citas que se pierden por falta de seguimiento",
  "CRM desactualizado con datos duplicados o incompletos",
  "Sin presencia activa fuera del horario comercial",
];

const conMetatok = [
  "Respuesta inmediata a cada lead, 24/7, en todos tus canales",
  "Solo hablas con prospectos listos para comprar",
  "Agendamiento automático con confirmación y recordatorios",
  "CRM actualizado en tiempo real, sin intervención humana",
  "Tu negocio capta y cualifica incluso mientras duermes",
];

export function DiagnosticoCTA() {
  return (
    <section
      id="diagnostico"
      className="py-8 md:py-12 border-y border-border overflow-hidden"
      aria-labelledby="diagnostico-heading"
    >
      <div className="container-mt">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center mb-6"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-primary font-semibold"
          >
            Antes y después
          </motion.span>
          <motion.h2
            id="diagnostico-heading"
            variants={fadeUp}
            className="mt-2 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            ¿Reconoces la situación{" "}
            <span className="text-primary">de tu negocio hoy?</span>
          </motion.h2>
          <motion.p
            variants={fadeUp}
            className="mt-4 text-muted-foreground text-base leading-snug"
          >
            La mayoría de negocios pierde entre un 40 % y un 60 % de sus leads por
            falta de respuesta rápida y seguimiento sistemático.
          </motion.p>
        </motion.div>

        {/* Comparativa: Antes | Después */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-2 gap-4 max-w-5xl mx-auto"
        >
          {/* Columna SIN Metatok */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-destructive/30 bg-card p-5"
          >
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 border border-destructive/30">
                <XCircle className="h-5 w-5 text-destructive" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-destructive/70">
                  Situación actual
                </p>
                <h3 className="text-base font-bold text-foreground">Sin automatización</h3>
              </div>
            </div>
            <ul className="space-y-2">
              {situacionActual.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-muted-foreground">
                  <XCircle className="h-4 w-4 text-destructive/60 mt-0.5 shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>

          {/* Columna CON Metatok */}
          <motion.div
            variants={fadeUp}
            className="rounded-2xl border border-primary/40 bg-card p-5 relative"
          >
            {/* Acento de fondo */}
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl -z-10 opacity-[0.06]"
              style={{
                backgroundImage:
                  "radial-gradient(circle at 70% 30%, var(--color-primary) 0, transparent 60%)",
              }}
            />
            <div className="flex items-center gap-3 mb-4">
              <div className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 border border-primary/40">
                <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div>
                <p className="text-xs font-semibold uppercase tracking-widest text-primary/70">
                  Con Metatok
                </p>
                <h3 className="text-base font-bold text-foreground">Automatización activa</h3>
              </div>
            </div>
            <ul className="space-y-2">
              {conMetatok.map((item) => (
                <li key={item} className="flex items-start gap-3 text-sm text-foreground">
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA central */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-7 text-center"
        >
          <a
            href="#auditoria"
            className="inline-flex items-center gap-2 rounded-xl bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 cta-glow transition-all duration-300 group"
          >
            Deja de perder leads: auditoría en 24 h
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Auditoría gratuita · Sin compromiso · Respuesta en menos de 24 h
          </p>
        </motion.div>
      </div>
    </section>
  );
}
