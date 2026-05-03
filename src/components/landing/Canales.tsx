import { motion } from "framer-motion";
import { canales } from "./content";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { useLang } from "@/i18n/LangContext";

const channelColors: Record<string, { from: string; to: string; glow: string }> = {
  phone: { from: "oklch(0.55 0.15 250)", to: "oklch(0.52 0.18 240)", glow: "var(--color-primary)" },
  web: { from: "oklch(0.52 0.21 264)", to: "oklch(0.58 0.26 302)", glow: "var(--color-primary)" },
  whatsapp: { from: "oklch(0.60 0.20 155)", to: "oklch(0.65 0.17 145)", glow: "#25d366" },
  instagram: { from: "oklch(0.68 0.20 330)", to: "oklch(0.60 0.22 20)", glow: "#e1306c" },
  telegram: { from: "oklch(0.58 0.18 225)", to: "oklch(0.62 0.15 210)", glow: "#229ed9" },
  api: { from: "oklch(0.58 0.26 302)", to: "oklch(0.52 0.21 264)", glow: "var(--color-accent)" },
};

export function Canales() {
  const { t } = useLang();
  const cs = t.canalesSection;
  return (
    <section
      id="canales"
      className="relative py-16 md:py-24 border-y border-border overflow-hidden"
      aria-labelledby="canales-heading"
    >
      {/* Background */}
      <div
        aria-hidden
        className="absolute inset-0 pointer-events-none"
        style={{
          background:
            "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--color-primary) 5%, transparent) 0%, transparent 70%)",
        }}
      />

      {/* Grid lines */}
      <div aria-hidden className="absolute inset-0 hero-grid-3d opacity-30 pointer-events-none" />

      <div className="container-mt">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="text-center max-w-2xl mx-auto mb-14"
        >
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-primary font-semibold">
            {cs.kicker}
          </motion.span>
          <motion.h2
            id="canales-heading"
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight"
          >
            {cs.title}
            <span className="bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent">
              {cs.titleAccent}
            </span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground text-base leading-relaxed">
            {cs.subtitle}
          </motion.p>
        </motion.div>

        {/* 3D Channel Orbs */}
        <motion.ul
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="flex flex-wrap justify-center gap-6 md:gap-10"
        >
          {canales.map((c, i) => {
            const tr = cs.channels[i];
            const key = tr?.key ?? "web";
            const color = channelColors[key] ?? channelColors.web;
            return (
              <motion.li
                key={`canal-${i}`}
                variants={fadeUp}
                className="group flex flex-col items-center gap-4 cursor-default"
              >
                {/* 3D Orb */}
                <div
                  className="channel-orb relative"
                  style={{
                    "--orb-delay": `${i * 0.4}s`,
                    "--orb-glow": color.glow,
                    "--orb-from": color.from,
                    "--orb-to": color.to,
                  } as React.CSSProperties}
                >
                  {/* Outer ring */}
                  <div className="channel-orb-ring" aria-hidden />
                  {/* Inner orb */}
                  <div className="channel-orb-sphere">
                    <div className="channel-orb-inner">
                      <c.icon className="h-7 w-7 text-white" aria-hidden />
                    </div>
                    {/* Shine */}
                    <div className="channel-orb-shine" aria-hidden />
                  </div>
                  {/* Pulse */}
                  <div className="channel-orb-pulse" aria-hidden />
                </div>

                {/* Label */}
                <div className="text-center">
                  <span className="text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300">
                    {tr?.label ?? c.label}
                  </span>
                  <p className="text-xs text-muted-foreground mt-0.5">{tr?.desc ?? c.descripcion}</p>
                </div>
              </motion.li>
            );
          })}
        </motion.ul>

        {/* Connector line */}
        <motion.div
          initial={{ scaleX: 0, opacity: 0 }}
          whileInView={{ scaleX: 1, opacity: 1 }}
          viewport={viewportOnce}
          transition={{ duration: 1.2, delay: 0.5 }}
          className="relative mt-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent max-w-2xl mx-auto"
        />

        <motion.p
          initial={{ opacity: 0 }}
          whileInView={{ opacity: 1 }}
          viewport={viewportOnce}
          transition={{ delay: 0.8 }}
          className="mt-6 text-center text-xs text-muted-foreground"
        >
          {cs.otherChannel}{" "}
          <a href="#contacto" className="text-primary hover:underline font-semibold">
            {cs.contactUs}
          </a>
        </motion.p>
      </div>
    </section>
  );
}
