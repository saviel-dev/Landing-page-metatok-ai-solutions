import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./motion";
import { useLang } from "@/i18n/LangContext";

export function SocialProofStrip() {
  const { t } = useLang();
  return (
    <section
      className="border-b border-border bg-muted py-2.5 dark:bg-neutral-950"
      aria-label={t.socialProof.aria}
    >
      <div className="container-mt">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-center text-sm md:text-base text-foreground/90"
        >
          <span className="font-semibold text-primary">MetaTok</span> {t.socialProof.prefix}{" "}
          <span className="font-extrabold tabular-nums text-luxury-gold">{t.socialProof.millions}</span>{" "}
          {t.socialProof.suffix}
        </motion.p>
      </div>
    </section>
  );
}
