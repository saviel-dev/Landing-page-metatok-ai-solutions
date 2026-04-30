import { motion } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Cpu, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "./motion";
import { useSlideInLeft, useSlideInRight, useStaggerChildren, asRef } from "@/hooks/useAnimeJs";
import wallpaperHero from "@/assets/wallpaper-hero.png";

const metricas = [
  { value: "+54%", label: "más citas agendadas" },
  { value: "−22h", label: "de trabajo manual/sem." },
  { value: "3×", label: "más leads cualificados" },
];

const trust = [
  { icon: Clock,       label: "Respuesta en segundos" },
  { icon: Cpu,         label: "IA con NLP avanzado" },
  { icon: ShieldCheck, label: "Cumplimiento RGPD" },
];

const testimonial = {
  quote: "En 3 semanas ya teníamos el doble de citas con la mitad del esfuerzo.",
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
      className="relative pt-24 md:pt-32 pb-12 md:pb-16 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* ── Fondo wallpaper ── */}
      <div
        aria-hidden
        className="absolute inset-0 -z-20 opacity-[0.07] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${wallpaperHero})` }}
      />

      {/* ── Blobs animados ── */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blob blob-1 w-[30rem] h-[30rem] md:w-[46rem] md:h-[46rem] bg-indigo-400 opacity-30 top-[-18%] left-[-12%]" />
        <div className="blob blob-2 w-[36rem] h-[36rem] md:w-[56rem] md:h-[56rem] bg-violet-400 opacity-22 top-[-8%]  right-[-18%]" />
        <div className="blob blob-3 w-[28rem] h-[28rem] md:w-[42rem] md:h-[42rem] bg-blue-500  opacity-18 bottom-[-22%] left-[8%]" />
        <div className="blob blob-4 w-[22rem] h-[22rem] md:w-[38rem] md:h-[38rem] bg-purple-500 opacity-16 bottom-[0%]  right-[3%]" />
      </div>

      <div className="container-mt grid lg:grid-cols-12 gap-12 lg:gap-16 items-center">

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
            Automatización con IA · Para negocios que quieren vender más
          </motion.div>

          {/* ── TITULAR PRINCIPAL ── */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="mt-5 text-4xl md:text-5xl lg:text-[3.6rem] font-extrabold tracking-tight text-foreground leading-[1.08]"
          >
            Convierte más leads{" "}
            <span className="relative">
              <span className="relative z-10 text-primary">sin ampliar tu equipo</span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[6px] w-full rounded-full bg-primary/25"
              />
            </span>
          </motion.h1>

          {/* ── SUBTÍTULO ── */}
          <motion.p
            variants={fadeUp}
            className="mt-5 text-lg md:text-xl text-muted-foreground max-w-xl leading-relaxed"
          >
            Metatok instala agentes de IA que captan, cualifican y agendan por ti —
            24/7, en todos tus canales — para que tu equipo solo hable con quienes
            van a comprar.
          </motion.p>

          {/* ── CTA PRINCIPAL + SECUNDARIO ── */}
          <motion.div variants={fadeUp} className="mt-9 flex flex-col sm:flex-row gap-3">
            <Button
              asChild
              size="lg"
              className="h-auto py-4 px-7 text-base bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-bold transition-all duration-300 group hover:-translate-y-0.5 rounded-xl"
            >
              <a href="#auditoria" className="flex items-center justify-center gap-2">
                Solicitar Auditoría Gratuita
                <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="ghost"
              className="h-auto py-4 px-6 text-base text-muted-foreground hover:text-foreground hover:bg-card/60 rounded-xl"
            >
              <a href="#sectores" className="flex items-center gap-2">
                Ver casos por sector
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </motion.div>

          {/* ── MICRO-MÉTRICAS (prueba social inmediata) ── */}
          <motion.div
            variants={fadeUp}
            className="mt-8 flex flex-wrap gap-6 border-t border-border pt-7"
          >
            {metricas.map((m) => (
              <div key={m.label}>
                <div className="text-2xl font-extrabold text-primary">{m.value}</div>
                <div className="mt-0.5 text-xs text-muted-foreground">{m.label}</div>
              </div>
            ))}
            <div className="hidden sm:block w-px bg-border self-stretch" />
            <p className="self-center text-xs text-muted-foreground max-w-[180px] leading-snug italic">
              Promedios reales en clientes tras 60 días de despliegue.
            </p>
          </motion.div>

          {/* ── TRUST BADGES ── */}
          <ul ref={asRef<HTMLUListElement>(trustRef)} className="mt-6 flex flex-wrap gap-x-6 gap-y-2">
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
        <div ref={asRef<HTMLDivElement>(mockupRef)} className="lg:col-span-5 flex flex-col gap-5">

          {/* Panel live */}
          <div className="rounded-2xl border border-border bg-card p-5 shadow-[0_24px_70px_-30px_rgba(0,0,0,0.55)]">
            <div className="flex items-center justify-between mb-4">
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

            <div className="mt-4 grid grid-cols-3 gap-3">
              {[
                { l: "Leads hoy",     v: "23"  },
                { l: "Cualificados",  v: "17"  },
                { l: "Citas",         v: "8"   },
              ].map((s) => (
                <div key={s.l} className="rounded-xl border border-border bg-background/50 p-3 text-center">
                  <div className="text-xs text-muted-foreground">{s.l}</div>
                  <div className="mt-1 text-xl font-bold text-foreground">{s.v}</div>
                </div>
              ))}
            </div>
          </div>

          {/* Testimonial card */}
          <div className="rounded-2xl border border-border bg-card/60 p-5">
            <div className="flex items-start gap-1 text-primary mb-3">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="h-4 w-4 fill-primary" aria-hidden />
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
