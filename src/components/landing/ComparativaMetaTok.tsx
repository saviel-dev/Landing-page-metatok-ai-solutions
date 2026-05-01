import { motion } from "framer-motion";
import { Check, X, Sparkles } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";

const features = [
  {
    name: "Calidad de Respuesta",
    old: "Estática y basada en botones (Árbol de decisiones)",
    new: "Fluida, humana y persuasiva (IA Generativa)",
  },
  {
    name: "Integración",
    old: "Limitada o requiere Zapier complejo",
    new: "Nativa con CRMs, Apps y Sector Público",
  },
  {
    name: "Objetivo Principal",
    old: "Dar información y derivar a un humano",
    new: "Superar objeciones y cerrar la venta o cita",
  },
  {
    name: "Configuración",
    old: "Meses mapeando flujos interminables",
    new: "En minutos, entrenado con tus propios documentos",
  },
  {
    name: "Soporte",
    old: "Sistema de tickets básico",
    new: "Equipo de éxito dedicado y optimización continua",
  },
];

export function ComparativaMetaTok() {
  return (
    <section
      id="comparativa"
      className="relative py-20 md:py-32 bg-background overflow-hidden border-t border-border"
      aria-labelledby="comparativa-heading"
    >
      {/* Background Ambience */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background: "radial-gradient(circle at 50% 100%, color-mix(in oklab, var(--color-primary) 8%, transparent) 0%, transparent 60%)",
        }}
      />
      
      {/* Grid Pattern (Theme aware) */}
      <div 
        aria-hidden 
        className="absolute inset-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none"
        style={{ backgroundImage: 'linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)', backgroundSize: '40px 40px' }}
      />

      <div className="container-mt relative z-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-20"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-6 shadow-[0_0_20px_-5px_var(--color-primary)]">
            <Sparkles className="h-3.5 w-3.5" />
            La Decisión
          </motion.div>
          <motion.h2
            id="comparativa-heading"
            variants={fadeUp}
            className="text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight"
          >
            MetaTok vs.{" "}
            <span className="text-muted-foreground/60">chatbots tradicionales</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Un árbol de decisiones aburrido frente a una IA generativa orientada a conversión. La diferencia entre perder un lead y cerrar una venta.
          </motion.p>
        </motion.div>

        {/* ── CUSTOM TABLE ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-5xl mx-auto relative"
        >
          {/* Header Row */}
          <div className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-4 mb-4 items-end hidden md:grid px-6">
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider pb-4">
              Característica
            </div>
            <div className="text-sm font-bold text-muted-foreground uppercase tracking-wider pb-4 text-center">
              Bot Tradicional
            </div>
            <div className="relative">
              {/* Highlight Background Header */}
              <div className="absolute inset-0 bg-gradient-to-t from-primary/10 to-primary/5 border-t border-x border-primary/20 rounded-t-2xl" />
              <div className="relative flex justify-center py-4">
                <span className="inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-sm font-black uppercase tracking-widest text-primary shadow-[0_0_15px_var(--color-primary)]">
                  MetaTok AI
                </span>
              </div>
            </div>
          </div>

          {/* Body Rows */}
          <div className="flex flex-col gap-3 md:gap-2 relative">
            {features.map((row, index) => (
              <motion.div
                variants={fadeUp}
                key={row.name}
                className="grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-0 md:gap-4 items-center group relative"
              >
                {/* Mobile Header (Hidden on Desktop) */}
                <div className="md:hidden text-lg font-black text-foreground mt-6 mb-2 px-4">
                  {row.name}
                </div>

                {/* Feature Name */}
                <div className="hidden md:flex bg-card border border-border/50 rounded-2xl p-5 md:p-6 h-full items-center text-foreground font-semibold transition-colors group-hover:border-border group-hover:bg-muted/30 z-10">
                  {row.name}
                </div>

                {/* Tradicional Column */}
                <div className="bg-card border border-border/50 md:rounded-2xl p-5 md:p-6 h-full flex items-center gap-4 text-muted-foreground text-sm transition-colors group-hover:border-border group-hover:bg-muted/30 z-10 mx-4 md:mx-0 rounded-t-2xl md:rounded-t-none">
                  <div className="shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-destructive/10 text-destructive">
                    <X className="w-4 h-4" strokeWidth={3} />
                  </div>
                  {row.old}
                </div>

                {/* MetaTok Column (Highlighted) */}
                <div className="relative p-5 md:p-6 h-full flex items-center gap-4 text-foreground text-sm font-medium z-10 mx-4 md:mx-0 rounded-b-2xl md:rounded-b-none md:rounded-2xl overflow-hidden group/mt">
                  <div className="absolute inset-0 bg-primary/10 border border-primary/30 md:border-transparent md:border-y md:border-primary/20 md:group-hover:bg-primary/20 transition-colors" />
                  {/* Left/Right borders for desktop highlight column */}
                  <div className="hidden md:block absolute inset-y-0 left-0 w-px bg-primary/20" />
                  <div className="hidden md:block absolute inset-y-0 right-0 w-px bg-primary/20" />
                  
                  {/* Last row bottom rounding for highlight column */}
                  {index === features.length - 1 && (
                    <div className="hidden md:block absolute inset-x-0 bottom-0 h-px bg-primary/20" />
                  )}
                  {index === features.length - 1 && (
                    <div className="hidden md:block absolute bottom-0 left-0 right-0 h-4 border-b border-x border-primary/20 rounded-b-2xl pointer-events-none" />
                  )}

                  <div className="relative shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground shadow-[0_0_10px_var(--color-accent)] group-hover/mt:scale-110 transition-transform">
                    <Check className="w-4 h-4" strokeWidth={3} />
                  </div>
                  <div className="relative font-bold">{row.new}</div>
                </div>
              </motion.div>
            ))}
            
            {/* Bottom highlight column closure (Desktop) */}
            <div className="hidden md:block absolute bottom-0 right-0 w-[calc(37.5%-8px)] h-4 border-b border-x border-primary/20 rounded-b-2xl pointer-events-none z-0" />
          </div>

        </motion.div>
      </div>
    </section>
  );
}
