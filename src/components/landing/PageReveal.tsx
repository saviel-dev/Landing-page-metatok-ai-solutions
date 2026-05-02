import { useEffect, useState } from "react";
import { motion, AnimatePresence, Variants } from "framer-motion";
import logoMiniExtended from "@/assets/logo mini extended.png";

/**
 * PageReveal — Animación de entrada tipo "split curtain".
 * Dos paneles (arriba/abajo) se separan revelando la página.
 * El logo aparece al centro y se desvanece junto con los paneles.
 * Duración total: ~1.4s. Solo se ejecuta una vez por sesión.
 */
export function PageReveal() {
  const [visible, setVisible] = useState(true);

  useEffect(() => {
    // Bloquear scroll durante la animación
    document.documentElement.style.overflow = "hidden";
    const timer = setTimeout(() => {
      document.documentElement.style.overflow = "";
      setVisible(false);
    }, 1350);
    return () => {
      clearTimeout(timer);
      document.documentElement.style.overflow = "";
    };
  }, []);

  const panelVariants: Variants = {
    initial: { scaleY: 1 },
    exit: (custom: "top" | "bottom") => ({
      scaleY: 0,
      transition: {
        duration: 0.72,
        ease: [0.76, 0, 0.24, 1],
        delay: custom === "top" ? 0.35 : 0.42,
      },
    }),
  };

  const logoVariants: Variants = {
    initial: { opacity: 0, scale: 0.88 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.38, ease: "easeOut", delay: 0.08 },
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      transition: { duration: 0.22, ease: "easeIn" },
    },
  };

  return (
    <AnimatePresence>
      {visible && (
        <div key="page-reveal" className="fixed inset-0 z-[9999] pointer-events-none">
          {/* Panel superior */}
          <motion.div
            custom="top"
            variants={panelVariants}
            initial="initial"
            exit="exit"
            style={{ transformOrigin: "top center" }}
            className="absolute inset-x-0 top-0 h-1/2 bg-background"
          />

          {/* Panel inferior */}
          <motion.div
            custom="bottom"
            variants={panelVariants}
            initial="initial"
            exit="exit"
            style={{ transformOrigin: "bottom center" }}
            className="absolute inset-x-0 bottom-0 h-1/2 bg-background"
          />

          {/* Logo centrado */}
          <div className="absolute inset-0 flex items-center justify-center">
            <motion.div
              variants={logoVariants}
              initial="initial"
              animate="animate"
              exit="exit"
              className="flex flex-col items-center gap-3"
            >
              <img
                src={logoMiniExtended}
                alt="MetaTok"
                className="h-9 w-auto"
                draggable={false}
              />
              {/* Barra de progreso elegante */}
              <div className="w-32 h-[2px] rounded-full overflow-hidden bg-border">
                <motion.div
                  className="h-full bg-primary rounded-full"
                  initial={{ scaleX: 0 }}
                  animate={{ scaleX: 1 }}
                  transition={{ duration: 1.1, ease: "easeInOut", delay: 0.1 }}
                  style={{ transformOrigin: "left center" }}
                />
              </div>
            </motion.div>
          </div>
        </div>
      )}
    </AnimatePresence>
  );
}
