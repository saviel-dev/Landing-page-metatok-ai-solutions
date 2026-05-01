import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Cpu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "./motion";
import { useSlideInLeft, useSlideInRight, useStaggerChildren, asRef } from "@/hooks/useAnimeJs";
import wallpaperHero from "@/assets/wallpaper-hero.png";

const metricas = [
  { value: "+400%", label: "tasa de respuesta vs. manual" },
  { value: "24/7", label: "cierre y cualificación" },
  { value: "5 min", label: "para desplegar tu primer agente" },
];

const trust = [
  { icon: Clock,       label: "Velocidad de respuesta" },
  { icon: Cpu,         label: "Agentes autónomos de venta" },
  { icon: ShieldCheck, label: "RGPD y datos blindados" },
];

const testimonial = {
  quote:
    "Pasamos de ‘contestar cuando podemos’ a un departamento de ventas que no duerme. El cambio en citas fue inmediato.",
  name: "Director Comercial",
  company: "Grupo inmobiliario — Madrid",
};

export function Hero() {
  const textColRef = useSlideInLeft(80);
  const mockupRef  = useSlideInRight(160);
  const trustRef   = useStaggerChildren(":scope > li", 350, 90);

  return (
    <section
      id="inicio"
      className="relative pt-[4.75rem] md:pt-24 pb-8 md:pb-11 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Debajo del wallpaper: degradado + puntos + vidrio (blur fijo); apenas visible ── */}
      <div aria-hidden className="absolute inset-0 -z-[35] pointer-events-none">
        <div className="absolute inset-0 bg-gradient-to-b from-muted/45 via-transparent to-muted/25 dark:from-primary/[0.07] dark:via-transparent dark:to-accent/[0.04]" />
        <div className="absolute inset-0 bg-gradient-to-tr from-primary/[0.045] via-transparent to-accent/[0.035]" />
        <div className="absolute inset-0 mt-page-particles opacity-[0.12] dark:opacity-[0.09]" />
      </div>
      <div
        aria-hidden
        className="absolute inset-0 -z-[34] pointer-events-none backdrop-blur-[10px]"
        style={{
          backgroundColor: "color-mix(in oklab, var(--color-background) 50%, transparent)",
        }}
      />

      {/* ── Fondo wallpaper (muy ligero sobre el vidrio) ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-[33] opacity-[0.055] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${wallpaperHero})` }}
      />

      <div aria-hidden className="hero-neural hero-neural-layer" />

      {/* ── Blobs animados (CTA cobalto / violeta) ── */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blob blob-1 w-[30rem] h-[30rem] md:w-[46rem] md:h-[46rem] bg-primary opacity-22 md:opacity-26 top-[-18%] left-[-12%]" />
        <div className="blob blob-2 w-[36rem] h-[36rem] md:w-[56rem] md:h-[56rem] bg-accent opacity-18 md:opacity-21 top-[-8%] right-[-18%]" />
        <div className="blob blob-3 w-[28rem] h-[28rem] md:w-[42rem] md:h-[42rem] bg-primary opacity-12 md:opacity-14 bottom-[-22%] left-[8%]" />
        <div className="blob blob-4 w-[22rem] h-[22rem] md:w-[38rem] md:h-[38rem] bg-accent opacity-11 md:opacity-13 bottom-[0%] right-[3%]" />
      </div>

      <div className="container-mt grid lg:grid-cols-12 gap-8 lg:gap-10 items-center">

        {/* ════════════════════════════════════════════
            COLUMNA TEXTO  — 5-second rule
        ════════════════════════════════════════════ */}
        <motion.div
          ref={asRef(textColRef)}
          className="lg:col-span-7 flex flex-col"
          variants={stagger}
          initial="hidden"
          animate="show"
        >
          {/* Etiqueta de categoría */}
          <motion.div
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary"
          >
            <span className="h-1.5 w-1.5 animate-pulse rounded-full bg-primary" />
            Ecosistema de agentes · MetaTok
          </motion.div>

          {/* ── TITULAR PRINCIPAL ── */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl lg:text-[2.65rem] font-extrabold tracking-tight text-foreground leading-[1.1]"
          >
            Tu Departamento de Ventas,{" "}
            <span className="relative">
              <span className="relative z-10 text-primary">en Piloto Automático y con IA</span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-primary/25"
              />
            </span>
          </motion.h1>

          {/* ── SUBTÍTULO ── */}
          <motion.p
            variants={fadeUp}
            className="mt-3 text-base md:text-lg text-muted-foreground max-w-xl leading-snug"
          >
            No es un chatbot. Es un ecosistema de Agentes Autónomos que prospectan, califican y
            cierran ventas por ti 24/7 en WhatsApp, Instagram y Web.
          </motion.p>

          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm text-muted-foreground/90 max-w-xl leading-relaxed border-l-2 border-luxury-gold/50 pl-4"
          >
            MetaTok: la única IA que no solo genera leads, sino que empuja el cierre. Convierte tu
            tráfico en ingresos en 60 segundos con agentes autónomos de venta.
          </motion.p>

          {/* ── CTA PRINCIPAL + SECUNDARIO ── */}
          <motion.div variants={fadeUp} className="mt-6 flex flex-col gap-2">
            <div className="flex flex-col sm:flex-row gap-2">
              <Button
                asChild
                size="lg"
                className="h-auto py-3 px-5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-bold transition-all duration-300 group hover:-translate-y-0.5 rounded-xl"
              >
                <a href="#contacto" className="flex items-center justify-center gap-2">
                  Desplegar mi Agente Ahora
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-auto py-3 px-5 text-sm text-muted-foreground hover:text-foreground hover:bg-card/60 rounded-xl border border-border/60"
              >
                <a href="#auditoria" className="flex items-center gap-2">
                  Auditoría gratuita
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-sm text-muted-foreground max-w-2xl leading-relaxed">
              Deja de perder leads por falta de velocidad. Despliega tu primer Agente MetaTok en 5
              minutos y domina tu mercado.
            </p>
          </motion.div>

          {/* ── MICRO-MÉTRICAS (prueba social inmediata) ── */}
          <motion.div
            variants={fadeUp}
            className="mt-5 flex flex-wrap gap-4 border-t border-border pt-5"
          >
            {metricas.map((m) => (
              <div key={m.label}>
                <div className="text-xl font-extrabold text-primary">{m.value}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
            <div className="hidden sm:block w-px bg-border self-stretch" />
            <p className="self-center text-xs text-muted-foreground max-w-[200px] leading-snug italic">
              Referencias orientativas según despliegue y sector.
            </p>
          </motion.div>

          {/* ── TRUST BADGES ── */}
          <ul ref={asRef<HTMLUListElement>(trustRef)} className="mt-4 flex flex-wrap gap-x-4 gap-y-1.5">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                <t.icon className="h-3.5 w-3.5 text-accent" aria-hidden />
                {t.label}
              </li>
            ))}
          </ul>
        </motion.div>

        {/* ════════════════════════════════════════════
            COLUMNA DERECHA — Panel + Testimonial
        ════════════════════════════════════════════ */}
        <div ref={asRef<HTMLDivElement>(mockupRef)} className="lg:col-span-5 flex flex-col gap-3">

          {/* Panel live */}
          <div className="rounded-xl border border-border bg-card p-4 shadow-lg shadow-foreground/[0.06] dark:shadow-[0_20px_50px_-28px_rgba(0,0,0,0.55)]">
            <div className="flex items-center justify-between mb-3">
              <div className="flex items-center gap-2 text-xs text-muted-foreground">
                <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                Panel Metatok · En vivo
              </div>
              <div className="flex gap-1.5">
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-border" />
                <span className="h-2 w-2 rounded-full bg-primary/60" />
              </div>
            </div>

            <div className="space-y-2.5">
              <PanelRow color="primary" label="Lead cualificado"   value="María R. · Score 94"     />
              <PanelRow color="accent"  label="Cita agendada"      value="Hoy · 16:30 ✓"           />
              <PanelRow color="muted"   label="CRM actualizado"    value="Salesforce · +1 contacto" />
              <PanelRow color="primary" label="Seguimiento IA"     value="WhatsApp · leído"         />
            </div>

            <div className="mt-3 grid grid-cols-3 gap-2">
              {[
                { l: "Leads hoy",     v: "23"  },
                { l: "Cualificados",  v: "17"  },
                { l: "Citas",         v: "8"   },
              ].map((s) => (
                <div key={s.l} className="rounded-lg border border-border bg-background/50 p-2 text-center">
                  <div className="text-[10px] text-muted-foreground">{s.l}</div>
                  <div className="mt-0.5 text-lg font-bold text-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial card */}
          <div className="rounded-xl border border-border bg-card/60 p-4">
            <div className="flex items-start gap-0.5 text-primary mb-2">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-3.5 w-3.5 fill-primary" aria-hidden />
              ))}
            </div>
            <p className="text-sm text-foreground leading-relaxed italic">"{testimonial.quote}"</p>
            <div className="mt-3 flex items-center gap-2">
              <div className="h-8 w-8 rounded-full bg-primary/20 border border-primary/30 flex items-center justify-center text-xs font-bold text-primary">
                D
              </div>
              <div>
                <div className="text-xs font-semibold text-foreground">{testimonial.name}</div>
                <div className="text-[10px] text-muted-foreground">{testimonial.company}</div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}

function PanelRow({
  color, label, value,
}: { color: "primary" | "accent" | "muted"; label: string; value: string }) {
  const dot = color === "primary" ? "bg-primary" : color === "accent" ? "bg-accent" : "bg-muted-foreground/50";
  return (
    <div className="flex items-center justify-between rounded-lg border border-border bg-background/50 px-3 py-2.5">
      <div className="flex items-center gap-2.5">
        <span className={`h-2 w-2 rounded-full shrink-0 ${dot}`} />
        <span className="text-sm text-foreground">{label}</span>
      </div>
      <span className="text-xs text-muted-foreground">{value}</span>
    </div>
  );
}
