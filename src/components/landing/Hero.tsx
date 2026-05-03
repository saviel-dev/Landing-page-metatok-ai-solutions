import { motion, useScroll, useTransform, AnimatePresence } from "framer-motion";
import { ArrowRight, ShieldCheck, Clock, Cpu, Zap, Star } from "lucide-react";
import { Button } from "@/components/ui/button";
import { fadeUp, stagger } from "./motion";
import { useRef, useState, useEffect } from "react";
import { AIBrainScene } from "./AIBrainScene";
import { useLang } from "@/i18n/LangContext";

const trustIcons = [Clock, Cpu, ShieldCheck, Zap];
const dotColors = ["bg-accent", "bg-emerald-500", "bg-pink-500", "bg-primary"];

/* ─── 3D Floating Dashboard ─────────────────────────────────────────────── */
type DashT = ReturnType<typeof useLang>["t"]["hero"]["dashboard"];

function SystemDashboard3D({ d }: { d: DashT }) {
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
        style={{ transformStyle: "preserve-3d", transform: "rotateY(-8deg) rotateX(4deg)" }}
        className="relative"
      >
        {/* Dashboard frame */}
        <div
          className="relative w-[340px] rounded-2xl overflow-hidden"
          style={{
            background: "linear-gradient(160deg, var(--color-card), color-mix(in oklab, var(--color-card) 80%, var(--color-background)))",
            border: "1.5px solid var(--color-border)",
            boxShadow: "0 0 0 1px var(--color-border), 0 40px 80px -20px color-mix(in oklab, var(--color-primary) 25%, transparent), 0 20px 40px -10px color-mix(in oklab, var(--color-foreground) 10%, transparent)",
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

          <div className="p-4 space-y-4">
            {/* Status row */}
            <div className="flex items-center justify-between">
              <div className="flex items-center gap-2.5">
                <div
                  className="w-8 h-8 rounded-lg flex items-center justify-center shadow-lg shadow-primary/20"
                  style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))" }}
                >
                  <Cpu className="w-4 h-4 text-white" />
                </div>
                <div>
                  <p className="text-[11px] font-bold text-foreground">{d.status}</p>
                  <p className="text-[9px] text-muted-foreground">{d.statusSub}</p>
                </div>
              </div>
              <div className="px-2.5 py-1 rounded-full border border-emerald-500/30 bg-emerald-500/10 text-emerald-500 text-[9px] font-bold flex items-center gap-1.5">
                <span className="w-1.5 h-1.5 rounded-full bg-emerald-500 animate-pulse" />
                {d.online}
              </div>
            </div>

            {/* Metrics */}
            <div className="grid grid-cols-2 gap-2">
              <div className="rounded-xl p-3" style={{ background: "var(--color-muted)", border: "1px solid var(--color-border)" }}>
                <div className="text-[9px] text-muted-foreground font-medium mb-1">{d.ahorroLabel}</div>
                <div className="text-lg font-black text-foreground">€14.500</div>
                <div className="text-[8px] text-emerald-500 mt-0.5">{d.ahorroSub}</div>
              </div>
              <div className="rounded-xl p-3" style={{ background: "var(--color-muted)", border: "1px solid var(--color-border)" }}>
                <div className="text-[9px] text-muted-foreground font-medium mb-1">{d.autoLabel}</div>
                <div className="text-lg font-black text-foreground">100%</div>
                <div className="text-[8px] text-primary mt-0.5">{d.autoSub}</div>
              </div>
            </div>

            {/* Logs */}
            <div className="rounded-xl p-3 space-y-2 font-mono text-[9px]" style={{ background: "var(--color-background)", border: "1px solid var(--color-border)" }}>
              <div className="text-muted-foreground/80 flex justify-between">
                <span>{d.log1}</span><span className="text-emerald-500">{d.logOk}</span>
              </div>
              <div className="text-muted-foreground/80 flex justify-between">
                <span>{d.log2}</span><span className="text-emerald-500">{d.logConn}</span>
              </div>
              <div className="text-foreground flex justify-between">
                <span>{d.log3}</span><span className="text-primary font-bold">{d.logClosed}</span>
              </div>
            </div>
          </div>
        </div>

        {/* Shadow */}
        <div aria-hidden className="absolute -bottom-8 left-1/2 -translate-x-1/2 w-48 h-8 rounded-full blur-xl opacity-30 pointer-events-none" style={{ background: "var(--color-primary)" }} />
      </motion.div>

      {/* Floating badge 1 */}
      <motion.div
        animate={{ y: [0, -8, 0], rotate: [-1, 1, -1] }}
        transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
        className="absolute -right-6 top-8 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg z-20"
        style={{ background: "var(--color-card)", border: "1px solid color-mix(in oklab, var(--color-primary) 40%, transparent)", boxShadow: "0 0 20px -5px color-mix(in oklab, var(--color-primary) 30%, transparent)", color: "var(--color-foreground)" }}
      >
        <div className="flex items-center gap-1.5">
          <Zap className="h-3 w-3 text-primary" />
          <span>{d.badge1}</span>
        </div>
      </motion.div>

      {/* Floating badge 2 */}
      <motion.div
        animate={{ y: [0, 8, 0], rotate: [1, -1, 1] }}
        transition={{ duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 }}
        className="absolute -left-8 bottom-12 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg z-20"
        style={{ background: "var(--color-card)", border: "1px solid color-mix(in oklab, var(--color-emerald) 40%, transparent)", boxShadow: "0 0 20px -5px color-mix(in oklab, var(--color-emerald) 30%, transparent)", color: "var(--color-foreground)" }}
      >
        <div className="flex items-center gap-1.5">
          <ShieldCheck className="h-3 w-3 text-emerald-500" />
          <span>{d.badge2}</span>
        </div>
      </motion.div>
    </motion.div>
  );
}

/* ─── Rotating department words ─────────────────────────────────────────── */
function RotatingDepartments({ deps }: { deps: readonly string[] }) {
  const [index, setIndex] = useState(0);

  useEffect(() => {
    // Reset to 0 when deps change (language switch)
    setIndex(0);
  }, [deps]);

  useEffect(() => {
    const timer = setInterval(() => {
      setIndex((prev) => (prev + 1) % deps.length);
    }, 2800);
    return () => clearInterval(timer);
  }, [deps]);

  // widest word as spacer to avoid layout shift
  const widest = deps.reduce((a, b) => (a.length >= b.length ? a : b), "");

  return (
    <span className="relative inline-flex flex-col justify-end h-[1.1em] min-w-[150px] sm:min-w-[190px] md:min-w-[240px] lg:min-w-[280px] overflow-hidden align-bottom">
      <AnimatePresence mode="popLayout">
        <motion.span
          key={deps[index]}
          initial={{ y: 40, opacity: 0 }}
          animate={{ y: 0, opacity: 1 }}
          exit={{ y: -40, opacity: 0 }}
          transition={{ duration: 0.5, ease: "anticipate" }}
          className="absolute left-0 bottom-0 bg-gradient-to-r from-primary via-[oklch(0.62_0.24_280)] to-accent bg-clip-text text-transparent pb-1 whitespace-nowrap"
        >
          {deps[index]}
        </motion.span>
      </AnimatePresence>
      <span className="invisible pb-1 whitespace-nowrap">{widest}</span>
    </span>
  );
}

/* ─── Hero principal ─────────────────────────────────────────────────────── */
export function Hero() {
  const { t, lang } = useLang();
  const h = t.hero;
  const sectionRef = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: sectionRef, offset: ["start start", "end start"] });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);

  return (
    <section
      id="inicio"
      ref={sectionRef}
      className="relative min-h-screen pt-[4.75rem] md:pt-20 pb-16 overflow-hidden flex items-center bg-background"
      aria-labelledby="hero-heading"
    >
      {/* Background glows */}
      <div aria-hidden className="absolute inset-0 pointer-events-none">
        <div className="absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 12%, transparent) 0%, transparent 65%)" }} />
        <div className="absolute -top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 8%, transparent) 0%, transparent 65%)" }} />
      </div>

      <div aria-hidden className="absolute inset-0 hero-grid-3d opacity-40 pointer-events-none" />
      <div aria-hidden className="absolute inset-0 pointer-events-none opacity-25">
        <AIBrainScene className="w-full h-full" />
      </div>

      <div className="container-mt grid lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full relative z-10">

        {/* ── TEXT COLUMN ── */}
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
            {h.pill}
          </motion.div>

          {/* Title */}
          <motion.h1
            id="hero-heading"
            variants={fadeUp}
            className="mt-4 text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-foreground leading-[1.05]"
          >
            {h.titlePrefix}{" "}
            <RotatingDepartments deps={h.departments} />
            <br className="hidden sm:block" />
            <span className="relative inline-block mt-2 sm:mt-0">
              <span className="bg-gradient-to-r from-primary via-[oklch(0.62_0.24_280)] to-accent bg-clip-text text-transparent">
                {h.titleSuffix}
              </span>
              <span aria-hidden className="absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-primary to-accent opacity-60" />
            </span>
          </motion.h1>

          {/* Subtitle */}
          <motion.p
            variants={fadeUp}
            className="mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed"
          >
            {lang === "en" ? (
              <>
                These aren't simple chatbots. It's the <span className="text-foreground font-bold">cloning of your best staff</span>. Deploy an ecosystem of <span className="text-primary font-bold">Humanoid Assistants</span> that take over your <span className="font-medium text-foreground">sales, support, accounting, social media management, and content creation</span> for you <span className="text-foreground font-semibold">24/7</span> on{" "}
                <span className="font-semibold text-emerald-500">WhatsApp</span>,{" "}
                <span className="font-semibold text-blue-500">Voice Calls</span>,{" "}
                <span className="font-semibold text-pink-500">Instagram</span> and{" "}
                <span className="font-semibold text-amber-500">Web</span>.
              </>
            ) : (
              <>
                No son simples chatbots. Es la <span className="text-foreground font-bold">clonación de tu mejor personal</span>. Despliega un ecosistema de <span className="text-primary font-bold">Asistentes Humanoides</span> que asumen tus <span className="font-medium text-foreground">ventas, soporte, contabilidad, gestión de redes y creación de contenido</span> por ti <span className="text-foreground font-semibold">24/7</span> en{" "}
                <span className="font-semibold text-emerald-500">WhatsApp</span>,{" "}
                <span className="font-semibold text-blue-500">Llamadas de Voz</span>,{" "}
                <span className="font-semibold text-pink-500">Instagram</span> y{" "}
                <span className="font-semibold text-amber-500">Web</span>.
              </>
            )}
          </motion.p>

          {/* Quote */}
          <motion.p
            variants={fadeUp}
            className="mt-3 text-sm text-muted-foreground/70 max-w-lg leading-relaxed pl-4 italic"
            style={{ borderLeft: "2px solid color-mix(in oklab, var(--color-primary) 60%, transparent)" }}
          >
            {h.quote}
          </motion.p>

          {/* CTAs */}
          <motion.div variants={fadeUp} className="mt-7 flex flex-col gap-3">
            <div className="flex flex-col sm:flex-row gap-3">
              <Button
                asChild
                size="lg"
                className="h-auto py-3.5 px-6 text-sm font-bold transition-all duration-300 group hover:-translate-y-1 rounded-xl relative overflow-hidden"
                style={{ background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))", boxShadow: "0 0 30px -8px color-mix(in oklab, var(--color-primary) 50%, transparent)" }}
              >
                <a href="#contacto" className="flex items-center justify-center gap-2 text-white">
                  {h.ctaPrimary}
                  <ArrowRight className="h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" />
                </a>
              </Button>
              <Button asChild size="lg" variant="outline" className="h-auto py-3.5 px-6 text-sm rounded-xl transition-all hover:-translate-y-0.5">
                <a href="#auditoria" className="flex items-center gap-2">
                  {h.ctaSecondary}
                  <ArrowRight className="h-4 w-4" />
                </a>
              </Button>
            </div>
            <p className="text-xs text-muted-foreground/60">{h.disclaimer}</p>
          </motion.div>

          {/* Metrics */}
          <motion.div variants={fadeUp} className="mt-7 grid grid-cols-3 gap-3">
            {h.metrics.map((m, mi) => (
              <div
                key={`hero-metric-${mi}`}
                className="relative rounded-xl p-3 text-center overflow-hidden group hover:scale-105 transition-transform duration-300 bg-card border border-border hover:border-primary/30"
              >
                <div aria-hidden className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl" style={{ background: "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 8%, transparent) 0%, transparent 70%)" }} />
                <div className="text-lg md:text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">{m.value}</div>
                <div className="mt-0.5 text-[10px] text-muted-foreground leading-tight">{m.label}</div>
              </div>
            ))}
          </motion.div>

          {/* Trust badges */}
          <motion.ul variants={fadeUp} className="mt-5 flex flex-wrap gap-x-5 gap-y-2">
            {h.trust.map((label, i) => {
              const Icon = trustIcons[i];
              return (
                <li key={`hero-trust-${i}`} className="flex items-center gap-1.5 text-xs text-muted-foreground">
                  <Icon className="h-3.5 w-3.5 text-accent shrink-0" aria-hidden />
                  {label}
                </li>
              );
            })}
          </motion.ul>
        </motion.div>

        {/* ── RIGHT COLUMN ── */}
        <motion.div
          className="lg:col-span-6 xl:col-span-7 flex items-center justify-center gap-6 lg:gap-8"
          initial={{ opacity: 0, x: 60 }}
          animate={{ opacity: 1, x: 0 }}
          transition={{ duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] }}
        >
          <SystemDashboard3D d={h.dashboard} />

          <div className="flex flex-col gap-4 flex-1 max-w-sm">
            {/* Live panel */}
            <div className="rounded-2xl p-4 bg-card border border-border" style={{ boxShadow: "0 0 40px -15px color-mix(in oklab, var(--color-primary) 20%, transparent)" }}>
              <div className="flex items-center justify-between mb-3">
                <div className="flex items-center gap-2">
                  <span className="h-2 w-2 rounded-full bg-primary animate-pulse" />
                  <span className="text-xs font-semibold text-foreground/80">{h.dashboard.panel}</span>
                </div>
                <div className="flex gap-1.5">
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-border" />
                  <span className="h-2 w-2 rounded-full bg-primary/60" />
                </div>
              </div>

              <div className="space-y-2">
                {h.dashboard.events.map((ev, i) => (
                  <div key={`hero-event-${i}`} className="flex items-center justify-between rounded-lg px-3 py-2 bg-background border border-border hover:border-primary/30 transition-colors">
                    <div className="flex items-center gap-2.5">
                      <span className={`h-2 w-2 rounded-full shrink-0 ${dotColors[i]}`} />
                      <span className="text-sm text-foreground/80">{ev.label}</span>
                    </div>
                    <span className="text-xs text-muted-foreground">{ev.value}</span>
                  </div>
                ))}
              </div>

              <div className="mt-3 grid grid-cols-3 gap-2">
                {h.dashboard.stats.map((s, si) => (
                  <div key={`hero-stat-${si}`} className="rounded-lg p-2 text-center bg-background border border-border">
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
                  <Star key={i} className="h-3.5 w-3.5 fill-[var(--luxury-gold)] text-[var(--luxury-gold)]" aria-hidden />
                ))}
              </div>
              <p className="text-sm text-muted-foreground leading-relaxed italic">"{h.testimonial.quote}"</p>
              <div className="mt-3 flex items-center gap-2.5">
                <div
                  className="h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white"
                  style={{ background: "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 60%, transparent), color-mix(in oklab, var(--color-accent) 50%, transparent))", border: "1px solid color-mix(in oklab, var(--color-primary) 40%, transparent)" }}
                >
                  D
                </div>
                <div>
                  <div className="text-xs font-semibold text-foreground/80">{h.testimonial.name}</div>
                  <div className="text-[10px] text-muted-foreground">{h.testimonial.company}</div>
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
        <span className="text-[10px] text-muted-foreground/40 uppercase tracking-widest">{h.dashboard.scrollLabel}</span>
        <div className="h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent animate-bounce" />
      </motion.div>
    </section>
  );
}
