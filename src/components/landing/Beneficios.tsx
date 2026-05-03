import { type ReactNode, useRef, type MouseEvent } from "react";
import { TrendingUp, Zap, Clock, Network } from "lucide-react";
import { motion, useMotionValue, useTransform, useSpring } from "framer-motion";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { useLang } from "@/i18n/LangContext";

const iconMap = [Zap, TrendingUp, Clock, Network];

/* ── Tilt 3D card con seguimiento de cursor ────────────────────────── */
function Tilt3DCard({ children, className }: { children: ReactNode; className?: string }) {
  const ref = useRef<HTMLDivElement>(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });

  const rotateX  = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY  = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);

  // glowX/glowY → posición del reflejo (0%–100%)
  const glowX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(springY, [-0.5, 0.5], [0, 100]);

  // Derivar el background como string interpolado — fuera del JSX
  const glowBg = useTransform(
    [glowX, glowY],
    ([gx, gy]: number[]) =>
      `radial-gradient(circle at ${gx}% ${gy}%, color-mix(in oklab, var(--color-primary) 28%, transparent) 0%, transparent 60%)`
  );

  function handleMouseMove(e: MouseEvent<HTMLDivElement>) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }

  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }

  return (
    <motion.div
      ref={ref}
      style={{ rotateX, rotateY, transformStyle: "preserve-3d", perspective: "800px" }}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      className={className}
    >
      {/* Glow reflex — usa la variable derivada, no llama a un hook aquí */}
      <motion.div
        aria-hidden
        className="absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300"
        style={{ background: glowBg }}
      />
      {children}
    </motion.div>
  );
}

/* ── Sección Beneficios ────────────────────────────────────────────── */
export function Beneficios() {
  const { t } = useLang();
  const items = t.beneficios.items;

  return (
    <section
      id="beneficios"
      className="relative py-16 md:py-24 border-y border-border bg-[var(--color-surface)] overflow-hidden"
      aria-labelledby="beneficios-heading"
    >
      {/* Background accent */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          backgroundImage:
            "radial-gradient(ellipse 80% 50% at 20% 60%, color-mix(in oklab, var(--color-accent) 6%, transparent) 0%, transparent 60%)",
        }}
      />

      <div className="container-mt">
        {/* Header */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-2xl mb-12"
        >
          <motion.h2
            id="beneficios-heading"
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight"
          >
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {t.beneficios.heading}
            </span>
          </motion.h2>
        </motion.div>

        {/* Grid 3D cards */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
          style={{ perspective: "1200px" }}
        >
          {items.map((b, i) => {
            const Icon = iconMap[i] ?? TrendingUp;
            return (
              <motion.div
                key={`beneficio-card-${i}`}
                variants={fadeUp}
                className="relative group"
                style={{ transformStyle: "preserve-3d" }}
              >
                <Tilt3DCard className="relative h-full rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-5 flex flex-col overflow-hidden cursor-default transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_var(--color-primary)]">
                  {/* Watermark number */}
                  <div className="absolute -top-2 -right-2 text-8xl font-black text-primary/[0.04] tracking-tighter leading-none select-none pointer-events-none">
                    {String(i + 1).padStart(2, "0")}
                  </div>

                  {/* Metric */}
                  <div className="relative flex items-end gap-2 mb-2">
                    <span className="text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight">
                      {b.metrica}
                    </span>
                    <Icon className="h-5 w-5 text-accent mb-1 shrink-0" aria-hidden />
                  </div>
                  <p className="text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4">
                    {b.metricaLabel}
                  </p>

                  <div className="h-px bg-gradient-to-r from-border via-primary/20 to-border mb-4" />

                  <h3 className="text-base font-bold text-foreground">{b.titulo}</h3>
                  <p className="mt-2 text-sm text-muted-foreground leading-relaxed flex-1">{b.descripcion}</p>

                  {/* Bottom animated bar */}
                  <div className="mt-5 h-0.5 w-0 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500" />
                </Tilt3DCard>
              </motion.div>
            );
          })}
        </motion.div>
      </div>
    </section>
  );
}
