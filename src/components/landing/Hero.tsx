import { motion, useScroll, useTransform } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Cpu, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "./motion";
import { useRef } from "react";
import { AIBrainScene } from "./AIBrainScene";

const metricas = [
  { value: "+400%", label: "Tasa de respuesta" },
  { value: "24/7", label: "Cierre automático" },
  { value: "5 min", label: "Primer agente activo" },
];

const trust = [
  { icon: Clock, label: "Velocidad de respuesta" },
  { icon: Cpu, label: "Agentes autónomos" },
  { icon: ShieldCheck, label: "RGPD blindado" },
  { icon: Zap, label: "API abierta" },
];

const testimonial = {
  quote:
    "Pasamos de 'contestar cuando podemos' a un departamento de ventas que no duerme. El cambio en citas fue inmediato.",
  name: "Director Comercial",
  company: "Grupo inmobiliario — Madrid",
};

const liveEvents = [
  { label: "Lead cualificado", value: "María R. · Score 94", dot: "bg-primary" },
  { label: "Cita agendada", value: "Hoy · 16:30 ✓", dot: "bg-accent" },
  { label: "CRM actualizado", value: "Salesforce · +1", dot: "bg-muted-foreground/50" },
  { label: "Seguimiento IA", value: "WhatsApp · leído", dot: "bg-primary" },
];

/* ─── 3D Floating Phone Mockup ──────────────────────────────────────────── */
function PhoneMockup3D() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -20, rotateX: 8 }}
      animate={{ opacity: 1, rotateY: -8, rotateX: 6 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative hidden lg:block"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={{ y: [0, -12, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-12deg) rotateX(6deg)",
        }}
        className="relative"
      >
        {/* Phone frame */}
        <div
          className="relative w-[220px] rounded-[2rem] overflow-hidden"
          style={{
            background: "linear-gradient(160deg, oklch(0.18 0.03 268), oklch(0.09 0.02 268))",
            border: "1.5px solid oklch(0.32 0.04 268)",
            boxShadow:
              "0 0 0 1px oklch(0.12 0.02 268), 0 40px 80px -20px rgba(82,112,255,0.4), 0 20px 40px -10px rgba(0,0,0,0.8), inset 0 1px 0 rgba(255,255,255,0.08)",
          }}
        >
          {/* Notch */}
          <div className="flex justify-center pt-3 pb-2">
            <div
              className="w-20 h-5 rounded-full"
              style={{ background: "oklch(0.08 0.01 268)", border: "1px solid oklch(0.18 0.02 268)" }}
            />
          </div>

          {/* Screen content */}
          <div className="px-3 pb-4 space-y-2">
            {/* Status bar */}
            <div className="flex items-center justify-between px-1 mb-3">
              <span className="text-[8px] font-bold text-primary">MetaTok</span>
              <span className="flex items-center gap-1">
                <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
                <span className="text-[8px] text-white/60">En vivo</span>
              </span>
            </div>

            {/* AI Agent card */}
            <div
              className="rounded-xl p-3"
              style={{ background: "oklch(0.14 0.025 268)", border: "1px solid oklch(0.22 0.03 268)" }}
            >
              <div className="flex items-center gap-2 mb-2">
                <div
                  className="w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white"
                  style={{ background: "linear-gradient(135deg, oklch(0.52 0.21 264), oklch(0.58 0.26 302))" }}
                >
                  AI
                </div>
                <div>
                  <p className="text-[9px] font-bold text-white">Agente MetaTok</p>
                  <p className="text-[7px] text-white/60">Procesando lead…</p>
                </div>
              </div>

              {/* Chat bubbles */}
              <div className="space-y-1.5">
                <div
                  className="text-[8px] text-white/90 rounded-lg rounded-tl-sm px-2.5 py-1.5 max-w-[80%]"
                  style={{ background: "oklch(0.20 0.03 268)" }}
                >
                  ¡Hola! ¿Estás interesado en nuestra solución de CRM?
                </div>
                <div
                  className="text-[8px] text-white font-medium rounded-lg rounded-tr-sm px-2.5 py-1.5 max-w-[75%] ml-auto"
                  style={{ background: "oklch(0.52 0.21 264)" }}
                >
                  Sí, dime más 👋
                </div>
                <div
                  className="text-[8px] text-white/90 rounded-lg rounded-tl-sm px-2.5 py-1.5 max-w-[80%]"
                  style={{ background: "oklch(0.20 0.03 268)" }}
                >
                  Perfecto. ¿Cuándo podemos agendar tu demo?
                </div>
              </div>
            </div>

            {/* Stats row */}
            <div className="grid grid-cols-3 gap-1.5">
              {[
                { l: "Leads", v: "23" },
                { l: "Calific.", v: "17" },
                { l: "Citas", v: "8" },
              ].map((s) => (
                <div
                  key={s.l}
                  className="rounded-lg p-2 text-center"
                  style={{ background: "oklch(0.13 0.02 268)", border: "1px solid oklch(0.20 0.03 268)" }}
                >
                  <div className="text-[8px] text-white/50">{s.l}</div>
                  <div className="text-sm font-black text-white">{s.v}</div>
                </div>
              ))}
            </div>

            {/* Score badge */}
            <div
              className="rounded-xl p-2.5 flex items-center justify-between"
              style={{
                background: "linear-gradient(135deg, oklch(0.52 0.21 264 / 0.15), oklch(0.58 0.26 302 / 0.10))",
                border: "1px solid oklch(0.52 0.21 264 / 0.30)",
              }}
            >
              <span className="text-[9px] font-semibold text-white/90">Score del lead</span>
              <span className="text-sm font-black text-primary">94%</span>
            </div>
          </div>
        </div>

        {/* Phone shadow */}
        <div
          aria-hidden
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 rounded-full blur-xl opacity-50 pointer-events-none"
          style={{ background: "oklch(0.52 0.21 264)" }}
        />
      </motion.div>

      {/* Floating badge — notifications */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-2, 2, -2] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-12 top-12 rounded-xl px-3 py-2 text-xs font-semibold text-white/90 shadow-lg z-20"
        style={{
          background: "oklch(0.14 0.025 268)",
          border: "1px solid oklch(0.52 0.21 264 / 0.4)",
          boxShadow: "0 0 20px -5px oklch(0.52 0.21 264 / 0.4)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-primary animate-pulse" />
          <span>Lead · Score 94</span>
        </div>
      </motion.div>

      {/* Floating badge — cita */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [2, -2, 2] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-10 bottom-20 rounded-xl px-3 py-2 text-xs font-semibold text-white/90 shadow-lg z-20"
        style={{
          background: "oklch(0.14 0.025 268)",
          border: "1px solid oklch(0.58 0.26 302 / 0.4)",
          boxShadow: "0 0 20px -5px oklch(0.58 0.26 302 / 0.35)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <span className="h-1.5 w-1.5 rounded-full bg-accent animate-pulse" />
          <span>Cita agendada ✓</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Hero principal ─────────────────────────────────────────────────────── */
export function Hero() {
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"],
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen pt-[4.75rem] md:pt-20 pb-16 overflow-hidden flex items-center"
      aria-labelledby="hero-heading"
      style={{ backgroundColor: "#000000" }}
    >
      {/* ── Fondo unicolor negro + sutil glow de marca ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Glow cobalto arriba izquierda */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, oklch(0.52 0.21 264 / 0.18) 0%, transparent 65%)",
          }}
        />
        {/* Glow violeta arriba derecha */}
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, oklch(0.58 0.26 302 / 0.12) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Animated grid lines ── */}
      <div aria-hidden className="absolute inset-0 hero-grid-3d opacity-40 pointer-events-none" />

      {/* ── Canvas neural network (fondo, opacidad baja) ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-35">
        <AIBrainScene className="w-full h-full" />
      </div>

      <div className="container-mt grid lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full relative z-10">

        {/* ══════════════════════════════════
            COLUMNA TEXTO
        ══════════════════════════════════ */}
        <motion.div
          className="lg:col-span-6 xl:col-span-5 flex flex-col"
          variants={stagger}
          initial="hidden"
          animate="show"
          style={{ opacity }}
        >
          {/* Pill */}
          <motion.div
            variants={fadeUp}
            className="inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-primary"
            style={{ boxShadow: "0 0 20px -5px oklch(0.52 0.21 264 / 0.5)" }}
          >
            <span className="relative flex h-2 w-2">
              <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" />
              <span className="relative inline-flex rounded-full h-2 w-2 bg-primary" />
            </span>
            Ecosistema de Agentes · MetaTok AI
          </motion.div>

          {/* Título */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-white leading-[1.05]"
          >
            Tu Departamento de Ventas,{" "}
            <span className="relative inline-block">
              <span className="bg-gradient-to-r from-[oklch(0.60_0.21_264)] via-[oklch(0.62_0.24_280)] to-[oklch(0.65_0.26_302)] bg-clip-text text-transparent">
                en Piloto Automático
              </span>
              <span
                aria-hidden
                className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-primary to-accent opacity-60"
              />
            </span>
            {" "}con IA
          </motion.h1>

          {/* Subtítulo */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base md:text-lg text-white/60 max-w-xl leading-relaxed"
          >
            No es un chatbot. Es un ecosistema de{" "}
            <span className="text-white font-semibold">Agentes Autónomos</span> que prospectan,
            califican y cierran ventas por ti{" "}
            <span className="text-primary font-semibold">24/7</span> en WhatsApp, Instagram y Web.
          </motion.p>

          {/* Quote lateral */}
          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm text-white/50 max-w-lg leading-relaxed pl-4 italic"
            style={{ borderLeft: "2px solid oklch(0.52 0.21 264 / 0.6)" }}
          >
            MetaTok: la única IA que no solo genera leads, sino que empuja el cierre.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="h-auto py-3.5 px-6 text-sm font-bold transition-all duration-300 group hover:-translate-y-1 rounded-xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, oklch(0.52 0.21 264), oklch(0.58 0.26 302))",
                  boxShadow: "0 0 30px -8px oklch(0.52 0.21 264 / 0.7)",
                }}
              >
                <a href="#contacto" className="flex items-center justify-center gap-2 text-white">
                  Desplegar mi Agente Ahora
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button
                asChild
                size="lg"
                variant="ghost"
                className="h-auto py-3.5 px-6 text-sm text-white/60 hover:text-white hover:bg-white/5 rounded-xl border border-white/10 backdrop-blur-sm transition-all"
              >
                <a href="#auditoria" className="flex items-center gap-2">
                  Auditoría gratuita
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-white/40">
              Sin permanencia · Despliegue en 15-30 días · Sin código para tu equipo
            </p>
          </motion.div>

          {/* Métricas */}
          <motion.div variants={fadeUp} className="mt-7 grid grid-cols-3 gap-3">
            {metricas.map((m) => (
              <div
                key={m.label}
                className="relative rounded-xl p-3 text-center overflow-hidden group hover:scale-105 transition-transform duration-300"
                style={{
                  background: "oklch(0.10 0.02 268)",
                  border: "1px solid oklch(0.52 0.21 264 / 0.20)",
                }}
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: "radial-gradient(circle, oklch(0.52 0.21 264 / 0.08) 0%, transparent 70%)" }}
                />
                <div className="text-lg md:text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{m.value}</div>
                <div className="mt-0.5 text-[10px] text-white/40 leading-tight">{m.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Trust */}
          <motion.ul variants={fadeUp} className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-1.5 text-xs text-white/40">
                <t.icon className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden />
                {t.label}
              </li>
            ))}
          </motion.ul>
        </motion.div>

        {/* ══════════════════════════════════
            COLUMNA DERECHA: Phone 3D + Panel
        ══════════════════════════════════ */}
        <motion.div
          className="lg:col-span-6 xl:col-span-7 flex items-center justify-center gap-6 lg:gap-8"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          {/* Phone 3D */}
          <PhoneMockup3D />

          {/* Panel actividad — desktop secundario, mobile principal */}
          <div className="flex flex-col gap-4 flex-1 max-w-sm">
            {/* Panel live */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: "oklch(0.10 0.02 268)",
                border: "1px solid oklch(0.28 0.03 268)",
                boxShadow: "0 0 40px -15px oklch(0.52 0.21 264 / 0.3)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-semibold text-white/80">Panel · En vivo</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-white/10" />
                  <span className="h-2 w-2 rounded-full bg-primary/60" />
                </div>
              </div>

              <div className="space-y-2">
                {liveEvents.map((ev) => (
                  <div
                    key={ev.label}
                    className="flex items-center justify-between rounded-lg px-3 py-2 hover:border-primary/30 transition-colors"
                    style={{ background: "oklch(0.13 0.02 268)", border: "1px solid oklch(0.22 0.03 268)" }}
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2 w-2 rounded-full shrink-0 ${ev.dot}`} />
                      <span className="text-sm text-white/80">{ev.label}</span>
                    </div>
                    <span className="text-xs text-white/40">{ev.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { l: "Leads hoy", v: "23" },
                  { l: "Cualificados", v: "17" },
                  { l: "Citas", v: "8" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-lg p-2 text-center"
                    style={{ background: "oklch(0.13 0.02 268)", border: "1px solid oklch(0.22 0.03 268)" }}
                  >
                    <div className="text-[10px] text-white/40">{s.l}</div>
                    <div className="mt-0.5 text-lg font-black text-white">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div
              className="rounded-2xl p-4"
              style={{
                background: "oklch(0.10 0.02 268)",
                border: "1px solid oklch(0.28 0.03 268)",
              }}
            >
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[var(--luxury-gold)] text-[var(--luxury-gold)]"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-sm text-white/70 leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="mt-3 flex items-center gap-2.5">
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, oklch(0.52 0.21 264 / 0.4), oklch(0.58 0.26 302 / 0.3))", border: "1px solid oklch(0.52 0.21 264 / 0.4)" }}
                >
                  D
                </div>
                <div>
                  <div className="text-xs font-semibold text-white/80">{testimonial.name}</div>
                  <div className="text-[10px] text-white/40">{testimonial.company}</div>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>

      {/* Scroll indicator */}
      <motion.div
        initial={{ opacity: 0 }}
        animate={{ opacity: 1 }}
        transition={{ delay: 2.5 }}
        className="absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2"
      >
        <span className="text-[10px] text-white/30 uppercase tracking-widest">Descubre más</span>
        <div className="h-8 w-px bg-gradient-to-b from-white/20 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
