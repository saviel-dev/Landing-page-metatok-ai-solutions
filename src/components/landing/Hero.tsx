import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Clock, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger, viewportOnce } from "./motion";

const trust = [
  { icon: Clock, label: "Operativo 24/7" },
  { icon: Cpu, label: "Agentes con NLP" },
  { icon: ShieldCheck, label: "Cumplimiento RGPD" },
  { icon: Sparkles, label: "Llave en mano" },
];

export function Hero() {
  return (
    <section
      id="inicio"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Acentos decorativos sutiles, sin degradados sobre los CTAs */}
      <div
        aria-hidden
        className="absolute inset-0 -z-10 opacity-[0.07]"
        style={{
          backgroundImage:
            "radial-gradient(circle at 20% 0%, var(--color-primary) 0, transparent 40%), radial-gradient(circle at 90% 10%, var(--color-accent) 0, transparent 35%)",
        }}
      />

      <div className="container-mt grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        <motion.div
          className="lg:col-span-7"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          <motion.div
            variants={fadeUp}
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/60 px-3 py-1.5 text-xs text-muted-foreground"
          >
            <span className="h-1.5 w-1.5 rounded-full bg-primary" />
            Automatización con IA · Especialistas en conversión
          </motion.div>

          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="mt-5 text-4xl md:text-5xl lg:text-6xl font-bold tracking-tight text-foreground leading-[1.05]"
          >
            Automatiza la captación, calificación y{" "}
            <span className="text-primary">conversión de tus leads</span> con IA.
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-muted-foreground max-w-2xl"
          >
            Diseñamos agentes de IA, integraciones con CRM y agendamiento automático
            para que tu negocio capte y cierre clientes 24/7, sin tareas repetitivas
            ni leads perdidos.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="h-12 px-6 text-base bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold"
            >
              <a href="#auditoria">
                Solicitar Auditoría Gratuita <ArrowRight className="ml-2 h-4 w-4" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="h-12 px-6 text-base border-border text-foreground hover:bg-card"
            >
              <a href="#servicios">Ver servicios</a>
            </Button>
          </motion.div>

          <motion.ul
            variants={fadeUp}
            className="mt-10 grid grid-cols-2 sm:grid-cols-4 gap-4"
          >
            {trust.map((t) => (
              <li
                key={t.label}
                className="flex items-center gap-2 text-sm text-muted-foreground"
              >
                <t.icon className="h-4 w-4 text-accent" aria-hidden />
                {t.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* Mockup decorativo flat — cards apiladas */}
        <motion.div
          className="lg:col-span-5"
          initial={{ opacity: 0, y: 24 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.7, delay: 0.2, ease: [0.22, 1, 0.36, 1] }}
          {...viewportOnce}
        >
          <div className="relative mx-auto max-w-md">
            <div className="rounded-2xl border border-border bg-card p-5 shadow-[0_20px_60px_-30px_rgba(0,0,0,0.6)]">
              <div className="flex items-center justify-between">
                <div className="text-xs text-muted-foreground">Panel Metatok</div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-primary" />
                </div>
              </div>
              <div className="mt-4 space-y-3">
                <MockRow label="Lead cualificado" value="Carlos M. · Score 92" tone="primary" />
                <MockRow label="Cita agendada" value="Mañana · 10:30" tone="accent" />
                <MockRow label="CRM actualizado" value="HubSpot · +3 contactos" tone="muted" />
                <MockRow label="Mensaje IA enviado" value="WhatsApp · entregado" tone="primary" />
              </div>

              <div className="mt-5 grid grid-cols-3 gap-3">
                <MockStat label="Leads" value="148" />
                <MockStat label="Cualificados" value="92" />
                <MockStat label="Citas" value="37" />
              </div>
            </div>

            <div
              aria-hidden
              className="absolute -inset-1 -z-10 rounded-3xl border border-border/60"
            />
          </div>
        </motion.div>
      </div>
    </section>
  );
}

function MockRow({
  label,
  value,
  tone,
}: {
  label: string;
  value: string;
  tone: "primary" | "accent" | "muted";
}) {
  const dot =
    tone === "primary" ? "bg-primary" : tone === "accent" ? "bg-accent" : "bg-muted-foreground";
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-background/60 px-3 py-2.5">
      <div className="flex items-center gap-2.5">
        <span className={`h-2 w-2 rounded-full ${dot}`} />
        <span className="text-sm text-foreground">{label}</span>
      </div>
      <span className="text-xs text-muted-foreground">{value}</span>
    </div>
  );
}

function MockStat({ label, value }: { label: string; value: string }) {
  return (
    <div className="rounded-lg border border-border bg-background/60 p-3">
      <div className="text-xs text-muted-foreground">{label}</div>
      <div className="text-lg font-semibold text-foreground">{value}</div>
    </div>
  );
}
