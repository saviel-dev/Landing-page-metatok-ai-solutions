/**
 * useAnimeJs — Animaciones de entrada con Anime.js v4 + IntersectionObserver.
 *
 * Anime.js v4 cambió a named exports:
 *   import { animate, stagger } from 'animejs'
 * No tiene default export. El prop 'easing' se llama 'ease' en v4.
 * Todos los hooks son seguros para SSR (solo corren en el cliente con useEffect).
 */
import { useEffect, useRef } from "react";

// ─── Helper: dispara callback al entrar en viewport ─────────────────────────
function onVisible(el: Element, cb: () => void, threshold = 0.15) {
  const io = new IntersectionObserver(
    (entries) => {
      entries.forEach((e) => {
        if (e.isIntersecting) {
          cb();
          io.unobserve(el);
        }
      });
    },
    { threshold }
  );
  io.observe(el);
  return io;
}

// ─── Tipos ───────────────────────────────────────────────────────────────────
type AnyEl = HTMLElement | null;

// ─── Hooks públicos ──────────────────────────────────────────────────────────

/** Fade + translateY hacia arriba. */
export function useFadeUp(delay = 0) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";

    let io: IntersectionObserver | undefined;
    import("animejs").then(({ animate }) => {
      io = onVisible(el, () => {
        animate(el, {
          opacity: [0, 1],
          translateY: [32, 0],
          duration: 700,
          delay,
          ease: "outExpo",
        });
      });
    });
    return () => io?.disconnect();
  }, [delay]);

  return ref;
}

/** Slide desde la izquierda. */
export function useSlideInLeft(delay = 0) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateX(-48px)";

    let io: IntersectionObserver | undefined;
    import("animejs").then(({ animate }) => {
      io = onVisible(el, () => {
        animate(el, {
          opacity: [0, 1],
          translateX: [-48, 0],
          duration: 800,
          delay,
          ease: "outExpo",
        });
      });
    });
    return () => io?.disconnect();
  }, [delay]);

  return ref;
}

/** Slide desde la derecha. */
export function useSlideInRight(delay = 0) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateX(48px)";

    let io: IntersectionObserver | undefined;
    import("animejs").then(({ animate }) => {
      io = onVisible(el, () => {
        animate(el, {
          opacity: [0, 1],
          translateX: [48, 0],
          duration: 800,
          delay,
          ease: "outExpo",
        });
      });
    });
    return () => io?.disconnect();
  }, [delay]);

  return ref;
}

/** Scale + fade — emerge del fondo. */
export function useScaleFade(delay = 0) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "scale(0.92)";

    let io: IntersectionObserver | undefined;
    import("animejs").then(({ animate }) => {
      io = onVisible(el, () => {
        animate(el, {
          opacity: [0, 1],
          scale: [0.92, 1],
          duration: 650,
          delay,
          ease: "outBack(1.2)",
        });
      });
    });
    return () => io?.disconnect();
  }, [delay]);

  return ref;
}

/** Stagger — anima todos los hijos del contenedor con retardo escalonado. */
export function useStaggerChildren(
  selector = ":scope > *",
  baseDelay = 0,
  staggerMs = 80
) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const children = Array.from(el.querySelectorAll<HTMLElement>(selector));
    if (!children.length) return;

    children.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(28px)";
    });

    let io: IntersectionObserver | undefined;
    import("animejs").then(({ animate, stagger }) => {
      io = onVisible(el, () => {
        animate(children, {
          opacity: [0, 1],
          translateY: [28, 0],
          duration: 600,
          delay: stagger(staggerMs, { start: baseDelay }),
          ease: "outExpo",
        });
      });
    });
    return () => io?.disconnect();
  }, [selector, baseDelay, staggerMs]);

  return ref;
}

/** Typing effect — escribe carácter a carácter. */
export function useTypingEffect(delay = 400) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const fullText = el.textContent ?? "";
    el.textContent = "";
    el.style.opacity = "1";

    const io = onVisible(
      el,
      () => {
        let i = 0;
        const timer = setTimeout(() => {
          const interval = setInterval(() => {
            el.textContent = fullText.slice(0, i + 1);
            i++;
            if (i >= fullText.length) clearInterval(interval);
          }, 28);
        }, delay);
        return () => clearTimeout(timer);
      },
      0.5
    );

    return () => io.disconnect();
  }, [delay]);

  return ref;
}

/** Counter animado — va de 0 al valor numérico del elemento. */
export function useCountUp(delay = 0) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const target = parseInt(el.textContent ?? "0", 10);
    el.textContent = "0";

    let io: IntersectionObserver | undefined;
    import("animejs").then(({ animate }) => {
      io = onVisible(el, () => {
        const obj = { val: 0 };
        animate(obj, {
          val: [0, target],
          duration: 1200,
          delay,
          ease: "outExpo",
          onUpdate: () => {
            el.textContent = Math.round(obj.val).toString();
          },
        });
      });
    });
    return () => io?.disconnect();
  }, [delay]);

  return ref;
}

/** Clip-path reveal — cortina de izquierda a derecha. */
export function useClipReveal(delay = 0) {
  const ref = useRef<HTMLElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.clipPath = "inset(0 100% 0 0)";
    el.style.opacity = "1";

    let io: IntersectionObserver | undefined;
    import("animejs").then(({ animate }) => {
      io = onVisible(el, () => {
        animate(el, {
          clipPath: ["inset(0 100% 0 0)", "inset(0 0% 0 0)"],
          duration: 900,
          delay,
          ease: "inOutExpo",
        });
      });
    });
    return () => io?.disconnect();
  }, [delay]);

  return ref;
}

// ─── Utilidad de tipado ──────────────────────────────────────────────────────
export function asRef<T extends AnyEl>(ref: React.RefObject<HTMLElement | null>) {
  return ref as unknown as React.RefObject<T>;
}
