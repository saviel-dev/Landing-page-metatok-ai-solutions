import { motion } from "framer-motion";
import { ArrowRight, XCircle, CheckCircle2, Zap } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { useLang } from "@/i18n/LangContext";

export function DiagnosticoCTA() {
  const { t } = useLang();
  const d = t.diagnosticoCTA;
  const situacionActual = d.situacionActual;
  const conMetatok = d.conMetatok;
  return (
    <section
      id="diagnostico"
      className="relative py-16 md:py-24 border-y border-border overflow-hidden"
      aria-labelledby="diagnostico-heading"
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in oklab, var(--color-primary) 5%, transparent) 0%, transparent 70%)",
        }}
      />
      <div aria-hidden className="absolute inset-0 hero-grid-3d opacity-20 pointer-events-none" />

      <div className="container-mt">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-3xl mx-auto text-center mb-12"
        >
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-primary font-semibold">
            {d.kicker}
          </motion.span>
          <motion.h2
            id="diagnostico-heading"
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight"
          >
            {d.title}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {d.titleAccent}
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground text-base leading-relaxed">
            {d.subtitleLead}
            <span className="text-foreground font-semibold">{d.subtitleBold}</span>
            {d.subtitleEnd}
          </motion.p>
        </motion.div>

        {/* Comparativa */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid md:grid-cols-2 gap-5 max-w-5xl mx-auto"
        >
          {/* Sin Metatok */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl border border-destructive/25 bg-card/60 backdrop-blur-sm p-6 overflow-hidden"
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 65%)",
              }}
            />
            <div className="relative flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 border border-destructive/30">
                <XCircle className="h-5 w-5 text-destructive" aria-hidden />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-destructive/60">
                  {d.colLeftBadge}
                </p>
                <h3 className="text-base font-bold text-foreground">{d.colLeftTitle}</h3>
              </div>
            </div>
            <ul className="relative space-y-3">
              {situacionActual.map((item, i) => (
                <motion.li
                  key={`diag-actual-${i}`}
                  initial={{ opacity: 0, x: -10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-muted-foreground"
                >
                  <XCircle className="h-4 w-4 text-destructive/50 mt-0.5 shrink-0" aria-hidden />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>

          {/* Con Metatok */}
          <motion.div
            variants={fadeUp}
            className="relative rounded-2xl border border-primary/30 bg-card/60 backdrop-blur-sm p-6 overflow-hidden
                       shadow-[0_0_40px_-15px_var(--color-primary)]"
          >
            <div
              aria-hidden
              className="absolute inset-0 rounded-2xl pointer-events-none"
              style={{
                background:
                  "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--color-primary) 10%, transparent) 0%, transparent 65%)",
              }}
            />
            <div className="relative flex items-center gap-3 mb-5">
              <div className="flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 border border-primary/40 shadow-[0_0_12px_-3px_var(--color-primary)]">
                <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden />
              </div>
              <div>
                <p className="text-[10px] font-bold uppercase tracking-widest text-primary/70">
                  {d.colRightBadge}
                </p>
                <h3 className="text-base font-bold text-foreground">{d.colRightTitle}</h3>
              </div>
            </div>
            <ul className="relative space-y-3">
              {conMetatok.map((item, i) => (
                <motion.li
                  key={`diag-con-${i}`}
                  initial={{ opacity: 0, x: 10 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  viewport={viewportOnce}
                  transition={{ delay: i * 0.08 }}
                  className="flex items-start gap-3 text-sm text-foreground/90"
                >
                  <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden />
                  {item}
                </motion.li>
              ))}
            </ul>
          </motion.div>
        </motion.div>

        {/* CTA central */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ delay: 0.5 }}
          className="mt-12 text-center"
        >
          <a
            href="#auditoria"
            className="group inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-primary-foreground cta-glow transition-all duration-300 relative overflow-hidden"
          >
            <span className="absolute inset-0 bg-gradient-to-r from-primary via-[oklch(0.55_0.23_280)] to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" />
            <Zap className="relative h-5 w-5" aria-hidden />
            <span className="relative">{d.cta}</span>
            <ArrowRight className="relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="mt-4 text-xs text-muted-foreground">{d.footnote}</p>
        </motion.div>
      </div>
    </section>
  );
}
