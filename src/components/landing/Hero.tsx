import { motion } from "framer-motion";
import { ArrowRight, Sparkles, ShieldCheck, Clock, Cpu } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { useSlideInLeft, useSlideInRight, useTypingEffect, useStaggerChildren, asRef } from "@/hooks/useAnimeJs";
import wallpaperHero from "@/assets/wallpaper-hero.png";

const trust = [
  { icon: Clock, label: "Operativo 24/7" },
  { icon: Cpu, label: "Agentes con NLP" },
  { icon: ShieldCheck, label: "Cumplimiento RGPD" },
  { icon: Sparkles, label: "Llave en mano" },
];

export function Hero() {
  const typingRef1 = useTypingEffect(200);
  const typingRef2 = useTypingEffect(1300); // 40 chars * 28ms = ~1100ms
  const typingRef3 = useTypingEffect(1950); // 23 chars * 28ms = ~650ms

  // Slide izquierda en el bloque de texto
  const textColRef = useSlideInLeft(100);
  // Slide derecha en el mockup
  const mockupRef = useSlideInRight(200);
  // Stagger en los iconos de confianza
  const trustRef = useStaggerChildren(":scope > li", 400, 100);

  return (
    <section
      id="inicio"
      className="relative pt-32 md:pt-40 pb-16 md:pb-24 overflow-hidden"
      aria-labelledby="hero-heading"
    >
      {/* Fondo Wallpaper con baja opacidad */}
      <div 
        aria-hidden 
        className="absolute inset-0 -z-20 opacity-[0.08] bg-cover bg-center bg-no-repeat pointer-events-none"
        style={{ backgroundImage: `url(${wallpaperHero})` }}
      />

      {/* Acentos decorativos: Animated Floating Blobs */}
      <div aria-hidden className="absolute inset-0 -z-10 overflow-hidden pointer-events-none">
        <div className="blob blob-1 w-96 h-96 bg-primary/10 top-[-10%] left-[-10%]" />
        <div className="blob blob-2 w-[30rem] h-[30rem] bg-accent/10 top-[10%] right-[-10%]" />
        <div className="blob blob-3 w-[40rem] h-[40rem] bg-primary/5 bottom-[-20%] left-[20%]" />
        <div className="blob blob-4 w-[25rem] h-[25rem] bg-accent/10 bottom-[10%] left-[60%]" />
      </div>

      <div className="container-mt grid lg:grid-cols-12 gap-10 lg:gap-16 items-center">
        {/* Columna texto — slide desde la izquierda */}
        <motion.div
          ref={asRef(textColRef)}
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
            <span ref={asRef<HTMLSpanElement>(typingRef1)}>Automatiza la captación, calificación y </span>
            <span ref={asRef<HTMLSpanElement>(typingRef2)} className="text-primary">conversión de tus leads</span>
            <span ref={asRef<HTMLSpanElement>(typingRef3)}> con IA.</span>
          </motion.h1>

          <motion.p
            variants={fadeUp}
            className="mt-6 text-lg text-muted-foreground max-w-2xl"
          >
            Diseñamos agentes de IA, integraciones con CRM y agendamiento automático
            para que tu negocio capte y cierre clientes 24/7, sin tareas repetitivas
            ni leads perdidos.
          </motion.p>

          <motion.div variants={fadeUp} className="mt-8 flex flex-col sm:flex-row flex-wrap gap-4">
            <Button
              asChild
              size="lg"
              className="w-full sm:w-auto h-auto py-3.5 px-4 sm:px-6 text-sm sm:text-base bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold transition-all duration-300 group hover:-translate-y-0.5 whitespace-normal text-center"
            >
              <a href="#auditoria" className="flex items-center justify-center">
                Solicitar Auditoría Gratuita
                <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
            <Button
              asChild
              size="lg"
              variant="outline"
              className="w-full sm:w-auto h-auto py-3.5 px-4 sm:px-6 text-sm sm:text-base border-border bg-transparent text-foreground hover:bg-accent/10 hover:text-accent hover:border-accent/40 transition-all duration-300 group shadow-sm hover:shadow-[0_0_25px_-12px_var(--color-accent)] hover:-translate-y-0.5 whitespace-normal text-center"
            >
              <a href="#servicios" className="flex items-center justify-center">
                Ver servicios
                <ArrowRight className="ml-2 h-4 w-4 shrink-0 transition-transform duration-300 group-hover:translate-x-1" />
              </a>
            </Button>
          </motion.div>

          {/* Trust badges — stagger Anime.js */}
          <ul
            ref={asRef<HTMLUListElement>(trustRef)}
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
          </ul>
        </motion.div>

        {/* Mockup — slide desde la derecha con Anime.js */}
        <div
          ref={asRef<HTMLDivElement>(mockupRef)}
          className="lg:col-span-5"
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
        </div>
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
