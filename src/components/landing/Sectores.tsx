import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2, HeartPulse, ShoppingBag, Users2, BriefcaseBusiness, Hotel,
  XCircle, CheckCircle2, ArrowRight, Zap, TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { useLang } from "@/i18n/LangContext";

/* ─────────────────────────────────────────────────────────────
   TIPOS
───────────────────────────────────────────────────────────── */
type Sector = {
  id: string;
  icono: LucideIcon;
  sector: string;
  tagline: string;
  descripcion: string;
  actual: string[];
  mejoras: string[];
  resultados: { kpi: string; desc: string }[];
  avanzado: string[];
};

const ICON_MAP: Record<string, LucideIcon> = {
  inmobiliaria: Building2,
  clinicas: HeartPulse,
  ecommerce: ShoppingBag,
  agencias: Users2,
  despachos: BriefcaseBusiness,
  hoteles: Hotel,
};

export function Sectores() {
  const { t } = useLang();
  const su = t.sectoresUi;
  const SECTORES: Sector[] = su.items.map((item) => ({
    ...item,
    icono: ICON_MAP[item.id] ?? Building2,
  }));
  const [activo, setActivo] = useState<number>(0);

  // Derivamos el sector activo DENTRO del render, sin cachear en variable fuera
  const sectorActivo = SECTORES[activo];
  const TabIconActivo = sectorActivo.icono;

  return (
    <section
      id="sectores"
      className="py-8 md:py-12 border-y border-border bg-[var(--color-surface)]"
      aria-labelledby="sectores-heading"
    >
      <div className="container-mt">

        {/* ── Encabezado ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-3xl mb-8"
        >
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-primary font-semibold">
            {su.kicker}
          </motion.span>
          <motion.h2
            id="sectores-heading"
            variants={fadeUp}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            {su.title}
            <span className="text-primary">{su.titleAccent}</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-base text-muted-foreground leading-snug">
            {su.subtitle}
          </motion.p>
        </motion.div>

        {/* ── Selector de sector ── */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {SECTORES.map((s, i) => {
            const TabIc = s.icono;
            const isActive = i === activo;
            return (
              <button
                key={s.id}
                id={`tab-${s.id}`}
                type="button"
                onClick={() => setActivo(i)}
                className={[
                  "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                ].join(" ")}
              >
                <TabIc className="h-4 w-4 shrink-0" aria-hidden />
                {s.sector}
              </button>
            );
          })}
        </div>

        {/* ── Panel del sector (renderiza directamente desde sectorActivo) ── */}
        <motion.div
          key={`panel-${activo}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {/* Header del sector */}
          <div className="mb-5 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/15">
              <TabIconActivo className="h-6 w-6 text-primary" aria-hidden />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                {sectorActivo.sector}
              </div>
              <h3 className="text-xl font-bold text-foreground">{sectorActivo.tagline}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {sectorActivo.descripcion}
              </p>
            </div>
          </div>

          {/* Grid: Estado actual | Con Metatok | Resultados */}
          <div className="grid md:grid-cols-3 gap-5 mb-5">

            {/* Estado actual */}
            <div className="rounded-2xl border border-destructive/20 bg-card p-6">
              <div className="flex items-center gap-2 mb-5">
                <XCircle className="h-5 w-5 text-destructive/70" aria-hidden />
                <span className="text-sm font-semibold text-foreground">{su.estadoActual}</span>
              </div>
              <ul className="space-y-3">
                {sectorActivo.actual.map((item, i) => (
                  <li key={`sector-actual-${i}`} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive/50 mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Con Metatok */}
            <div className="rounded-2xl border border-primary/30 bg-card p-6 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-[0.05]"
                style={{ backgroundImage: "radial-gradient(circle at 80% 20%, var(--color-primary) 0, transparent 70%)" }}
              />
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden />
                <span className="text-sm font-semibold text-foreground">{su.conMetatok}</span>
              </div>
              <ul className="space-y-3">
                {sectorActivo.mejoras.map((item, i) => (
                  <li key={`sector-mejoras-${i}`} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resultados */}
            <div className="rounded-xl border border-border bg-card p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="h-5 w-5 text-accent" aria-hidden />
                <span className="text-sm font-semibold text-foreground">{su.resultados}</span>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                {sectorActivo.resultados.map((r, ri) => (
                  <div key={`sector-kpi-${ri}`} className="flex items-center gap-4 rounded-xl border border-border bg-background/50 px-4 py-3">
                    <span className="text-2xl font-extrabold text-primary shrink-0">{r.kpi}</span>
                    <span className="text-sm text-muted-foreground">{r.desc}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] text-muted-foreground/70">{su.resultadosNote}</p>
            </div>
          </div>

          {/* Mejoras avanzadas */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-4 w-4 text-accent shrink-0" aria-hidden />
              <span className="text-sm font-semibold text-foreground">{su.avanzado}</span>
            </div>
            <ul className="flex flex-wrap gap-3">
              {sectorActivo.avanzado.map((item, i) => (
                <li
                  key={`sector-avanzado-${i}`}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                >
                  <ArrowRight className="h-3 w-3 shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-6 text-center"
        >
          <a
            href="#auditoria"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90 cta-glow transition-all duration-300 group"
          >
            {su.cta}
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">{su.ctaNote}</p>
        </motion.div>
      </div>
    </section>
  );
}
