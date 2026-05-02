import { motion } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { Cpu, ShieldCheck, Zap, Database, Smartphone, Globe, MessageSquare } from "lucide-react";

export function MetaTokEngine() {
  return (
    <section
      id="motor-metatok"
      className="relative overflow-hidden border-y border-border bg-[var(--color-surface)] py-24 md:py-32"
      aria-labelledby="engine-heading"
    >
      {/* Background Ambience */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(circle at 50% 0%, color-mix(in oklab, var(--color-primary) 16%, transparent) 0%, transparent 72%)",
        }}
      />

      {/* Grid Pattern */}
      <div 
        aria-hidden 
        className="absolute inset-0 pointer-events-none opacity-[0.2]"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 8%, transparent) 1px, transparent 1px)",
          backgroundSize: "40px 40px",
        }}
      />

      <div className="container-mt relative z-10">
        {/* ── Header ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="text-center max-w-3xl mx-auto mb-16 md:mb-24"
        >
          <motion.div variants={fadeUp} className="inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-6">
            <Zap className="h-3.5 w-3.5" />
            MetaTok Engine V5
          </motion.div>
          <motion.h2
            id="engine-heading"
            variants={fadeUp}
            className="text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight"
          >
            La Arquitectura detrás de la{" "}
            <span className="bg-gradient-to-r from-primary via-[#9b82ff] to-accent bg-clip-text text-transparent">
              Conversión Autónoma
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto">
            Descubre el motor cognitivo que no solo responde preguntas, sino que califica leads, supera objeciones y cierra ventas sin intervención humana.
          </motion.p>
        </motion.div>

        {/* ── BENTO BOX GRID ── */}
        <motion.div 
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto md:auto-rows-[300px]"
        >

          {/* 1. NÚCLEO CENTRAL (Span 2 cols) */}
          <motion.div variants={fadeUp} className="md:col-span-2 row-span-1 rounded-3xl bg-card/75 border border-border p-8 relative flex flex-col md:flex-row items-center gap-6 group backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            {/* 3D Chip Visual */}
            <div className="relative shrink-0 flex items-center justify-center w-36 h-36 md:w-48 md:h-48">
              <div className="absolute inset-0 bg-primary/20 blur-[50px] rounded-full group-hover:bg-primary/40 transition-colors duration-700" />
              
              <div className="relative w-36 h-36 bg-background/85 rounded-2xl border border-border shadow-2xl flex flex-col items-center justify-center transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-3">
                <div className="absolute inset-0 opacity-20" style={{ backgroundImage: 'radial-gradient(var(--color-primary) 1px, transparent 1px)', backgroundSize: '8px 8px' }} />
                
                {/* Pins */}
                <div className="absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                <div className="absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                <div className="absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />
                <div className="absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" />

                <div className="relative w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/45 rounded-xl flex items-center justify-center shadow-[0_0_30px_var(--color-primary)]">
                    <Cpu className="h-8 w-8 text-primary animate-pulse" strokeWidth={1.5} />
                </div>
                <span className="mt-3 text-[9px] font-black text-foreground/80 tracking-[0.3em] uppercase relative z-10">AI CORE</span>
              </div>
            </div>

            <div className="relative z-10 flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-foreground mb-3">Procesamiento Cognitivo en Tiempo Real</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                El núcleo V5 analiza intención, sentimiento y contexto en milisegundos. Adapta el guion de ventas dinámicamente basándose en más de 10,000 interacciones previas.
              </p>
            </div>
          </motion.div>

          {/* 2. OMNICANALIDAD */}
          <motion.div variants={fadeUp} className="rounded-3xl bg-card/75 border border-border p-8 relative overflow-hidden group flex flex-col justify-between backdrop-blur-sm">
            <div className="absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[40px] rounded-full group-hover:bg-accent/20 transition-colors duration-500" />
            
            <div className="relative h-24 flex items-center justify-center gap-4">
              <div className="w-12 h-12 rounded-xl bg-background/55 border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-2">
                <MessageSquare className="h-5 w-5" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-background/55 border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1 delay-75">
                <Smartphone className="h-5 w-5" />
              </div>
              <div className="w-12 h-12 rounded-xl bg-background/55 border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-3 delay-150">
                <Globe className="h-5 w-5" />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-2">Omnicanalidad Total</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                WhatsApp, Instagram y Web conectados a un único cerebro central.
              </p>
            </div>
          </motion.div>

          {/* 3. SISTEMAS (CRM Sync) */}
          <motion.div variants={fadeUp} className="rounded-3xl bg-card/75 border border-border p-8 relative overflow-hidden group flex flex-col justify-between backdrop-blur-sm">
            <div className="absolute bottom-0 left-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-colors duration-500" />
            
            <div className="relative h-24 flex flex-col justify-end gap-2 font-mono text-xs text-muted-foreground/80">
              <div className="flex items-center gap-2"><span className="text-primary">POST</span> /crm/sync-lead</div>
              <div className="flex items-center gap-2"><span className="text-accent">200 OK</span> {"{ id: 8942, status: 'qualified' }"}</div>
              <div className="w-full h-1 bg-border/60 rounded-full overflow-hidden mt-2">
                <div className="h-full bg-gradient-to-r from-primary to-accent w-2/3 group-hover:w-full transition-all duration-1000 ease-out" />
              </div>
            </div>

            <div className="relative z-10">
              <h3 className="text-xl font-bold text-foreground mb-2">Sincronización CRM</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                Integración nativa bidireccional. Todo queda registrado.
              </p>
            </div>
          </motion.div>

          {/* 4. AUTO-OPTIMIZACIÓN (Span 2 cols) */}
          <motion.div variants={fadeUp} className="md:col-span-2 row-span-1 rounded-3xl bg-card/75 border border-border p-8 relative overflow-hidden flex flex-col md:flex-row-reverse items-center gap-8 group backdrop-blur-sm">
            <div className="absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" />
            
            <div className="relative shrink-0 w-[85%] md:w-1/2 h-32 md:h-full flex items-center justify-center mt-4 md:mt-0">
              {/* Fake Chart */}
              <svg className="w-full h-full overflow-visible" viewBox="-5 -25 210 125" preserveAspectRatio="none">
                <defs>
                  <linearGradient id="chart-gradient" x1="0" y1="0" x2="0" y2="1">
                    <stop offset="0%" stopColor="var(--color-accent)" stopOpacity="0.45" />
                    <stop offset="100%" stopColor="var(--color-accent)" stopOpacity="0" />
                  </linearGradient>
                </defs>
                <motion.path 
                  d="M0,80 Q20,60 40,70 T80,40 T120,50 T160,20 T200,10 L200,100 L0,100 Z" 
                  fill="url(#chart-gradient)" 
                  initial={{ opacity: 0, y: 20 }}
                  whileInView={{ opacity: 1, y: 0 }}
                  transition={{ duration: 1 }}
                />
                <motion.path 
                  d="M0,80 Q20,60 40,70 T80,40 T120,50 T160,20 T200,10" 
                  fill="none" 
                  stroke="var(--color-accent)" 
                  strokeWidth="3"
                  strokeLinecap="round"
                  initial={{ pathLength: 0 }}
                  whileInView={{ pathLength: 1 }}
                  transition={{ duration: 1.5, ease: "easeOut" }}
                />
              </svg>
            </div>

            <div className="relative z-10 flex-1 text-center md:text-left">
              <h3 className="text-2xl font-black text-foreground mb-3">Auto-optimización Constante</h3>
              <p className="text-muted-foreground text-sm leading-relaxed">
                El sistema nunca deja de aprender. Realiza pruebas A/B automatizadas en sus propios mensajes para encontrar las combinaciones que generan mayor tasa de respuesta.
              </p>
            </div>
          </motion.div>

        </motion.div>

        {/* ── Footer Stats ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-8 flex justify-center gap-4 md:gap-8 flex-wrap"
        >
          {[{v: "< 0.5s", l: "Latencia media"}, {v: "99.9%", l: "Uptime garantizado"}, {v: "AES-256", l: "Cifrado de datos"}].map((s) => (
            <div key={s.l} className="flex items-center gap-3 bg-card/75 border border-border rounded-full px-5 py-2.5 backdrop-blur-sm">
              <ShieldCheck className="h-4 w-4 text-primary" />
              <div>
                <div className="text-sm font-bold text-foreground">{s.v}</div>
                <div className="text-[10px] text-muted-foreground uppercase tracking-wider">{s.l}</div>
              </div>
            </div>
          ))}
        </motion.div>

      </div>
    </section>
  );
}
