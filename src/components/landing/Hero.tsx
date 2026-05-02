import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Cpu, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "./motion";
import { useRef, useState, useEffect } from "react";
import { AIBrainScene } from "./AIBrainScene";

const metricas = [
  { value: "100%", label: "Automatización total" },
  { value: "3.000€", label: "Ahorro por trabajador" },
  { value: "24/7", label: "Operación continua" },
];

const trust = [
  { icon: Clock, label: "Velocidad de respuesta" },
  { icon: Cpu, label: "Agentes autónomos" },
  { icon: ShieldCheck, label: "RGPD blindado" },
  { icon: Zap, label: "API abierta" },
];

const testimonial = {
  quote:
    "Automatizamos el soporte, ventas y cobros en menos de 30 días. El ahorro estructural fue inmediato.",
  name: "Director de Operaciones",
  company: "Grupo Empresarial — Madrid",
};

const liveEvents = [
  { label: "Ticket resuelto", value: "Soporte · T-892", dot: "bg-accent" },
  { label: "Factura procesada", value: "Contabilidad · #A-402", dot: "bg-emerald-500" },
  { label: "Post publicado", value: "Instagram · Contenido", dot: "bg-pink-500" },
  { label: "Lead cualificado", value: "Ventas · Score 94", dot: "bg-primary" },
];

/* ─── 3D Floating Dashboard Mockup ──────────────────────────────────────────── */
function SystemDashboard3D() {
  return (
    <motion.div
      initial={{ opacity: 0, rotateY: -15, rotateX: 10 }}
      animate={{ opacity: 1, rotateY: -5, rotateX: 5 }}
      transition={{ duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] }}
      className="relative hidden lg:block"
      style={{ perspective: "1200px", transformStyle: "preserve-3d" }}
    >
      <motion.div
        animate={{ y: [0, -10, 0] }}
        transition={{ duration: 6, repeat: Infinity, ease: "easeInOut" }}
        style={{
          transformStyle: "preserve-3d",
          transform: "rotateY(-8deg) rotateX(4deg)",
        }}
        className="relative"
      >
        {/* Dashboard frame */}
        <div
          className="relative w-[340px] rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(160deg, var(--color-card), color-mix(in oklab, var(--color-card) 80%, var(--color-background)))",
            border: "1.5px solid var(--color-border)",
            boxShadow:
              "0 0 0 1px var(--color-border), 0 40px 80px -20px color-mix(in oklab, var(--color-primary) 25%, transparent), 0 20px 40px -10px color-mix(in oklab, var(--color-foreground) 10%, transparent)",
          }}
        >
          {/* Top Bar */}
          <div className="flex items-center gap-2 px-4 py-3 border-b border-border bg-muted/30">
            <div className="flex gap-1.5">
              <div className="w-2.5 h-2.5 rounded-full bg-red-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-amber-500/80" />
              <div className="w-2.5 h-2.5 rounded-full bg-emerald-500/80" />
            </div>
            <div className="ml-4 text-[10px] font-mono text-muted-foreground font-semibold tracking-wider">
              METATOK // CORE_ENGINE
            </div>
          </div>

          {/* Screen content */}
          <div className="p-4 space-y-4">
            {/* Status row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center text-[10px] font-bold text-white shadow-lg shadow-primary/20"
                  style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))" }}
                >
                  <Cpu className="w-4 h-4" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-foreground">Red Neuronal Activa</p>
                  <p className="text-[9px] text-muted-foreground">Procesando +10.000 operaciones/s</p>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-[9px] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                ONLINE
              </div>
            </div>

            {/* Metrics Grid */}
            <div className="grid grid-cols-2 gap-2">
              <div
                className="rounded-xl p-3"
                style={{ background: "var(--color-muted)", border: "1px solid var(--color-border)" }}
              >
                <div className="text-[9px] text-muted-foreground font-medium mb-1">Ahorro Generado</div>
                <div className="text-lg font-black text-foreground">€14.500</div>
                <div className="text-[8px] text-emerald-500 mt-0.5">+3.000€ este mes</div>
              </div>
              <div
                className="rounded-xl p-3"
                style={{ background: "var(--color-muted)", border: "1px solid var(--color-border)" }}
              >
                <div className="text-[9px] text-muted-foreground font-medium mb-1">Automatización</div>
                <div className="text-lg font-black text-foreground">100%</div>
                <div className="text-[8px] text-primary mt-0.5">Sin intervención humana</div>
              </div>
            </div>

            {/* Server Logs / Activity */}
            <div
              className="rounded-xl p-3 space-y-2 font-mono text-[9px]"
              style={{ background: "var(--color-background)", border: "1px solid var(--color-border)" }}
            >
              <div className="text-muted-foreground/80 flex justify-between">
                <span>[SYS] Sincronizando CRM...</span>
                <span className="text-emerald-500">OK</span>
              </div>
              <div className="text-muted-foreground/80 flex justify-between">
                <span>[VOZ] Llamada saliente #4092</span>
                <span className="text-emerald-500">CONECTADO</span>
              </div>
              <div className="text-foreground flex justify-between">
                <span>[SALES] Lead cualificado Score 98</span>
                <span className="text-primary font-bold">CERRADO</span>
              </div>
            </div>
          </div>
        </div>

        {/* Dashboard shadow */}
        <div
          aria-hidden
          className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full blur-xl opacity-30 pointer-events-none"
          style={{ background: "var(--color-primary)" }}
        />
      </motion.div>

      {/* Floating badge — notifications */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-6 top-8 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg z-20"
        style={{
          background: "var(--color-card)",
          border: "1px solid color-mix(in oklab, var(--color-primary) 40%, transparent)",
          boxShadow: "0 0 20px -5px color-mix(in oklab, var(--color-primary) 30%, transparent)",
          color: "var(--color-foreground)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <Zap className="h-3 w-3 text-primary" />
          <span>Máximo Rendimiento</span>
        </div>
      </motion.div>

      {/* Floating badge — cita */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [1, -1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-8 bottom-12 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg z-20"
        style={{
          background: "var(--color-card)",
          border: "1px solid color-mix(in oklab, var(--color-emerald) 40%, transparent)",
          boxShadow: "0 0 20px -5px color-mix(in oklab, var(--color-emerald) 30%, transparent)",
          color: "var(--color-foreground)",
        }}
      >
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-3 w-3 text-emerald-500" />
          <span>Infraestructura Segura</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

function RotatingDepartments() {
  const deps = ["Ventas", "Soporte", "Contabilidad", "Contenido", "PR"];
  const [index, setIndex] = useState(0);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % deps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, []);

  return (
    <span className="relative inline-flex flex-col justify-end h-[1.1em] min-w-[150px] sm:min-w-[190px] md:min-w-[240px] lg:min-w-[280px] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={index}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
          className="absolute left-0 bottom-0 bg-gradient-to-r from-primary via-[oklch(0.62_0.24_280)] to-accent bg-clip-text text-transparent pb-1"
        >
          {deps[index]}
        </motion.span>
      </AnimatePresence>
      {/* Invisible spacer to maintain layout */}
      <span className="invisible pb-1">Contabilidad</span>
    </span>
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
      className="relative min-h-screen pt-[4.75rem] md:pt-20 pb-16 overflow-hidden flex items-center bg-background"
      aria-labelledby="hero-heading"
    >
      {/* ── Fondo: glow de marca adaptado al tema ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        {/* Glow cobalto arriba izquierda */}
        <div
          className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 12%, transparent) 0%, transparent 65%)",
          }}
        />
        {/* Glow violeta arriba derecha */}
        <div
          className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none"
          style={{
            background: "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 8%, transparent) 0%, transparent 65%)",
          }}
        />
      </div>

      {/* ── Animated grid lines ── */}
      <div aria-hidden className="absolute inset-0 hero-grid-3d opacity-40 pointer-events-none" />

      {/* ── Canvas neural network (fondo, opacidad baja) ── */}
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-25">
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
            style={{ boxShadow: "0 0 20px -5px color-mix(in oklab, var(--color-primary) 30%, transparent)" }}
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
            className="mt-4 text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-foreground leading-[1.05]"
          >
            Tu equipo de{" "}
            <RotatingDepartments />
            <br className="hidden sm:block" />
            <span className="relative inline-block mt-2 sm:mt-0">
              <span className="bg-gradient-to-r from-primary via-[oklch(0.62_0.24_280)] to-accent bg-clip-text text-transparent">
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
            className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            No es un chatbot. Es un ecosistema de{" "}
            <span className="text-foreground font-semibold">Agentes Autónomos</span> que gestionan{" "}
            <span className="font-medium text-foreground">ventas, soporte, contabilidad, contenido y PR</span>{" "}
            por ti <span className="text-primary font-semibold">24/7</span> en{" "}
            <span className="font-semibold text-emerald-500">WhatsApp</span>,{" "}
            <span className="font-semibold text-blue-500">Llamadas de Voz</span>,{" "}
            <span className="font-semibold text-pink-500">Instagram</span> y{" "}
            <span className="font-semibold text-amber-500">Web</span>.
          </motion.p>

          {/* Quote lateral */}
          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm text-muted-foreground/70 max-w-lg leading-relaxed pl-4 italic"
            style={{ borderLeft: "2px solid color-mix(in oklab, var(--color-primary) 60%, transparent)" }}
          >
            MetaTok: Automatiza tu negocio de extremo a extremo y ahorra más de 3.000€ por cada trabajador.
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="h-auto py-3.5 px-6 text-sm font-bold transition-all duration-300 group hover:-translate-y-1 rounded-xl relative overflow-hidden"
                style={{
                  background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                  boxShadow: "0 0 30px -8px color-mix(in oklab, var(--color-primary) 50%, transparent)",
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
                variant="outline"
                className="h-auto py-3.5 px-6 text-sm rounded-xl transition-all hover:-translate-y-0.5"
              >
                <a href="#auditoria" className="flex items-center gap-2">
                  Auditoría gratuita
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground/60">
              Sin permanencia · Despliegue en 15-30 días · Sin código para tu equipo
            </p>
          </motion.div>

          {/* Métricas */}
          <motion.div variants={fadeUp} className="mt-7 grid grid-cols-3 gap-3">
            {metricas.map((m) => (
              <div
                key={m.label}
                className="relative rounded-xl p-3 text-center overflow-hidden group hover:scale-105 transition-transform duration-300 bg-card border border-border hover:border-primary/30"
              >
                <div
                  aria-hidden
                  className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl"
                  style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 8%, transparent) 0%, transparent 70%)" }}
                />
                <div className="text-lg md:text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{m.value}</div>
                <div className="mt-0.5 text-[10px] text-muted-foreground leading-tight">{m.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Trust */}
          <motion.ul variants={fadeUp} className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {trust.map((t) => (
              <li key={t.label} className="flex items-center gap-1.5 text-xs text-muted-foreground">
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
          {/* Dashboard 3D */}
          <SystemDashboard3D />

          {/* Panel actividad — desktop secundario, mobile principal */}
          <div className="flex flex-col gap-4 flex-1 max-w-sm">
            {/* Panel live */}
            <div
              className="rounded-2xl p-4 bg-card border border-border"
              style={{
                boxShadow: "0 0 40px -15px color-mix(in oklab, var(--color-primary) 20%, transparent)",
              }}
            >
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-semibold text-foreground/80">Panel · En vivo</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-primary/60" />
                </div>
              </div>

              <div className="space-y-2">
                {liveEvents.map((ev) => (
                  <div
                    key={ev.label}
                    className="flex items-center justify-between rounded-lg px-3 py-2 bg-background border border-border hover:border-primary/30 transition-colors"
                  >
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2 w-2 rounded-full shrink-0 ${ev.dot}`} />
                      <span className="text-sm text-foreground/80">{ev.label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{ev.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {[
                  { l: "Tareas/hora", v: "142" },
                  { l: "Dptos. Activos", v: "5" },
                  { l: "Ahorro/mes", v: "€3k+" },
                ].map((s) => (
                  <div
                    key={s.l}
                    className="rounded-lg p-2 text-center bg-background border border-border"
                  >
                    <div className="text-[10px] text-muted-foreground">{s.l}</div>
                    <div className="mt-0.5 text-lg font-black text-foreground">{s.v}</div>
                  </div>
                ))}
              </div>
            </div>

            {/* Testimonial */}
            <div className="rounded-2xl p-4 bg-card border border-border">
              <div className="flex gap-0.5 mb-2">
                {[...Array(5)].map((_, i) => (
                  <Star
                    key={i}
                    className="h-3.5 w-3.5 fill-[var(--luxury-gold)] text-[var(--luxury-gold)]"
                    aria-hidden
                  />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{testimonial.quote}"</p>
              <div className="mt-3 flex items-center gap-2.5">
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 60%, transparent), color-mix(in oklab, var(--color-accent) 50%, transparent))", border: "1px solid color-mix(in oklab, var(--color-primary) 40%, transparent)" }}
                >
                  D
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground/80">{testimonial.name}</div>
                  <div className="text-[10px] text-muted-foreground">{testimonial.company}</div>
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
        <span className="text-[10px] text-muted-foreground/40 uppercase tracking-widest">Descubre más</span>
        <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
