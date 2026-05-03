import { motion } from "framer-motion";
import {
  ArrowUpRight,
  BadgeCheck,
  BookOpenCheck,
  CheckCircle2,
  GraduationCap,
  Headphones,
  Megaphone,
  Rocket,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";
import { useLang } from "@/i18n/LangContext";

const trackIcons = [BookOpenCheck, Megaphone, Rocket] as const;

export function MetaTokAcademy() {
  const { t } = useLang();
  const m = t.metaTokAcademy;
  const tracks = m.tracks.map((tr, i) => ({
    ...tr,
    icon: trackIcons[i]!,
  }));
  return (
    <section
      id="academy"
      className="relative overflow-hidden border-y border-border bg-[var(--color-surface)] py-16 md:py-24"
      aria-labelledby="academy-heading"
    >
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,color-mix(in_oklab,var(--color-primary)_16%,transparent)_0%,transparent_45%),radial-gradient(circle_at_88%_82%,color-mix(in_oklab,var(--color-accent)_18%,transparent)_0%,transparent_45%)]"
      />
      <div
        aria-hidden
        className="pointer-events-none absolute inset-0 opacity-25"
        style={{
          backgroundImage:
            "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 7%, transparent) 1px, transparent 1px)",
          backgroundSize: "48px 48px",
        }}
      />

      <div className="container-mt relative">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mx-auto mb-10 max-w-3xl text-center md:mb-12"
        >
          <motion.div variants={fadeUp} className="flex flex-wrap items-center justify-center gap-2">
            <span className="inline-flex items-center gap-2 rounded-full border border-[var(--luxury-gold)]/35 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--luxury-gold)]">
              <GraduationCap className="h-3.5 w-3.5" aria-hidden />
              MetaTok Academy
            </span>
            <span className="text-muted-foreground/50 text-xs">·</span>
            <span className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary">
              <BadgeCheck className="h-3.5 w-3.5" aria-hidden />
              MetaTok Masters
            </span>
          </motion.div>
          <motion.h2
            id="academy-heading"
            variants={fadeUp}
            className="mt-4 text-3xl font-black tracking-tight text-foreground md:text-5xl"
          >
            {m.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground">
            {m.sub}
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mb-8 grid gap-5 md:grid-cols-3 md:gap-6"
        >
          {tracks.map((track, ti) => (
            <motion.article
              key={`academy-track-${ti}`}
              variants={fadeUp}
              className="group rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/45"
            >
              <span className="inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary">
                <track.icon className="h-5 w-5" aria-hidden />
              </span>
              <h3 className="mt-4 text-base font-bold text-foreground">{track.title}</h3>
              <p className="mt-2 text-sm leading-relaxed text-muted-foreground">{track.text}</p>
            </motion.article>
          ))}
        </motion.div>

        <div className="grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8">
          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={stagger}
            className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-6 md:p-8 backdrop-blur-sm"
          >
            <div aria-hidden className="pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" />
            <motion.p variants={fadeUp} className="relative text-sm font-semibold uppercase tracking-[0.15em] text-[var(--luxury-gold)]">
              {m.card1Label}
            </motion.p>
            <motion.h3 variants={fadeUp} className="relative mt-3 text-2xl font-black text-foreground">
              {m.card1Title}
            </motion.h3>
            <motion.p variants={fadeUp} className="relative mt-3 text-sm leading-relaxed text-muted-foreground">
              {m.card1Text}
            </motion.p>

            <motion.ul variants={fadeUp} className="relative mt-6 space-y-3.5 text-sm text-foreground/90">
              {m.card1Bullets.map((line, li) => (
                <li key={`academy-b1-${li}`} className="flex gap-3 rounded-xl border border-border/70 bg-background/50 p-3">
                  <CheckCircle2 className="mt-0.5 h-5 w-5 shrink-0 text-primary" aria-hidden />
                  <span>{line}</span>
                </li>
              ))}
            </motion.ul>
          </motion.div>

          <motion.div
            initial="hidden"
            whileInView="show"
            viewport={viewportOnce}
            variants={fadeUp}
            className="relative overflow-hidden rounded-3xl border border-border/80 bg-card/55 p-6 md:p-7 backdrop-blur-sm"
            aria-hidden
          >
            <div className="absolute -right-8 top-10 h-28 w-28 rounded-full bg-accent/22 blur-3xl" />
            <div className="absolute -left-8 bottom-12 h-28 w-28 rounded-full bg-primary/22 blur-3xl" />

            <div className="relative rounded-2xl border border-border/75 bg-background/80 p-4">
              <div className="mb-4 flex items-center justify-between">
                <p className="text-[11px] font-semibold uppercase tracking-[0.14em] text-primary">
                  {m.dashTitle}
                </p>
                <span className="rounded-full border border-primary/35 bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary">
                  {m.cohort}
                </span>
              </div>

              <div className="space-y-3">
                {m.modules.map((mod, mi) => (
                  <div key={`academy-mod-${mi}`} className="rounded-xl border border-border bg-card/60 p-3">
                    <p className="text-xs text-muted-foreground">{mod.n}</p>
                    <p className="mt-1 text-sm font-semibold text-foreground">{mod.t}</p>
                    <div className="mt-2 h-1.5 rounded-full bg-border/70">
                      <div
                        className="h-1.5 rounded-full bg-gradient-to-r from-primary to-accent"
                        style={{ width: `${mod.p}%` }}
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>

            <div className="relative mt-5 flex items-center gap-3 rounded-2xl border border-border/80 bg-background/75 p-3">
              <span className="inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--luxury-gold)]/35 bg-primary/10 text-[var(--luxury-gold)]">
                <Headphones className="h-5 w-5" aria-hidden />
              </span>
              <div>
                <p className="text-xs uppercase tracking-[0.12em] text-muted-foreground">{m.supportKicker}</p>
                <p className="text-sm font-semibold text-foreground">{m.supportTitle}</p>
              </div>
            </div>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 10 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={viewportOnce}
          transition={{ duration: 0.5 }}
          className="mt-8 flex flex-wrap items-center justify-center gap-3"
        >
          <a
            href="#contacto"
            className="cta-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground"
          >
            {m.ctaPrimary}
            <ArrowUpRight className="h-4 w-4" aria-hidden />
          </a>
          <a
            href="#planes"
            className="inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/45 hover:text-primary"
          >
            {m.ctaSecondary}
            <GraduationCap className="h-4 w-4" aria-hidden />
          </a>
        </motion.div>
      </div>
    </section>
  );
}
