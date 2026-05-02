import { j as jsxRuntimeExports, r as reactExports } from "../_libs/react.mjs";
import { H as Header, F as Footer, l as logoMiniExtended, B as Button, c as cn } from "./Footer-CdQ4dnex.mjs";
import { b as beneficios, s as servicios, p as proceso, c as canales, t as testimonios, f as faqs } from "./router-B-NeAFb2.mjs";
import { R as Root2, I as Item, H as Header$1, T as Trigger2, C as Content2 } from "../_libs/radix-ui__react-accordion.mjs";
import { u as useForm } from "../_libs/react-hook-form.mjs";
import { a } from "../_libs/hookform__resolvers.mjs";
import { T as Toaster$1, t as toast } from "../_libs/sonner.mjs";
import { R as Root } from "../_libs/radix-ui__react-label.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { A as AnimatePresence, m as motion, u as useScroll, a as useTransform, b as useReducedMotion, c as useMotionValue, d as useSpring } from "../_libs/framer-motion.mjs";
import { A as ArrowRight, c as Clock, d as Cpu, b as ShieldCheck, Z as Zap, e as Star, T as Timer, U as Users, f as Target, g as TrendingUp, N as Network, M as MessageSquare, h as Smartphone, a as Globe, i as Palette, j as Store, k as CircleCheck, l as ArrowUpRight, m as Building2, H as HeartPulse, n as ShoppingBag, o as UsersRound, p as BriefcaseBusiness, q as Hotel, r as CircleX, s as Sparkles, X, t as Check, u as GraduationCap, v as BadgeCheck, w as BookOpenCheck, x as Megaphone, R as Rocket, y as Headphones, z as Shield, E as Flame, I as Mail, J as MapPin, L as LoaderCircle, K as Send, O as MessageSquarePlus, B as Bot, Q as User, V as Plus, Y as ChevronDown, _ as ClipboardCheck } from "../_libs/lucide-react.mjs";
import { o as objectType, s as stringType, l as literalType } from "../_libs/zod.mjs";
import "../_libs/radix-ui__react-slot.mjs";
import "../_libs/radix-ui__react-compose-refs.mjs";
import "../_libs/clsx.mjs";
import "../_libs/tailwind-merge.mjs";
import "../_libs/radix-ui__react-dropdown-menu.mjs";
import "../_libs/radix-ui__primitive.mjs";
import "../_libs/radix-ui__react-context.mjs";
import "../_libs/@radix-ui/react-use-controllable-state+[...].mjs";
import "../_libs/@radix-ui/react-use-layout-effect+[...].mjs";
import "../_libs/radix-ui__react-primitive.mjs";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/radix-ui__react-menu.mjs";
import "../_libs/radix-ui__react-collection.mjs";
import "../_libs/radix-ui__react-direction.mjs";
import "../_libs/@radix-ui/react-dismissable-layer+[...].mjs";
import "../_libs/@radix-ui/react-use-callback-ref+[...].mjs";
import "../_libs/@radix-ui/react-use-escape-keydown+[...].mjs";
import "../_libs/radix-ui__react-focus-guards.mjs";
import "../_libs/radix-ui__react-focus-scope.mjs";
import "../_libs/radix-ui__react-popper.mjs";
import "../_libs/floating-ui__react-dom.mjs";
import "../_libs/floating-ui__dom.mjs";
import "../_libs/floating-ui__core.mjs";
import "../_libs/floating-ui__utils.mjs";
import "../_libs/radix-ui__react-arrow.mjs";
import "../_libs/radix-ui__react-use-size.mjs";
import "../_libs/radix-ui__react-portal.mjs";
import "../_libs/radix-ui__react-presence.mjs";
import "../_libs/radix-ui__react-roving-focus.mjs";
import "../_libs/radix-ui__react-id.mjs";
import "../_libs/aria-hidden.mjs";
import "../_libs/react-remove-scroll.mjs";
import "tslib";
import "../_libs/react-remove-scroll-bar.mjs";
import "../_libs/react-style-singleton.mjs";
import "../_libs/get-nonce.mjs";
import "../_libs/use-sidecar.mjs";
import "../_libs/use-callback-ref.mjs";
import "../_libs/tanstack__react-router.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/isbot.mjs";
import "../_libs/radix-ui__react-collapsible.mjs";
import "../_libs/motion-dom.mjs";
import "../_libs/motion-utils.mjs";
const fadeUp = {
  hidden: { opacity: 0, y: 16 },
  show: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: [0.22, 1, 0.36, 1] }
  }
};
const stagger = {
  hidden: {},
  show: {
    transition: { staggerChildren: 0.08, delayChildren: 0.05 }
  }
};
const viewportOnce = { once: true, amount: 0.2 };
function lerp(a2, b, alpha) {
  return a2 + (b - a2) * alpha;
}
function AIBrainScene({ className }) {
  const canvasRef = reactExports.useRef(null);
  const mouseRef = reactExports.useRef({ x: 0.5, y: 0.5 });
  const frameRef = reactExports.useRef(0);
  reactExports.useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;
    let W = canvas.clientWidth;
    let H = canvas.clientHeight;
    canvas.width = W * window.devicePixelRatio;
    canvas.height = H * window.devicePixelRatio;
    ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
    const PRIMARY = "82, 112, 255";
    const ACCENT = "148, 88, 255";
    const GOLD = "212, 175, 55";
    const COUNT = 60;
    const particles = Array.from({ length: COUNT }, () => ({
      x: Math.random() * W,
      y: Math.random() * H,
      z: Math.random() * 400 + 100,
      vx: (Math.random() - 0.5) * 0.3,
      vy: (Math.random() - 0.5) * 0.3,
      vz: (Math.random() - 0.5) * 0.5,
      size: Math.random() * 3 + 1,
      opacity: Math.random() * 0.6 + 0.3
    }));
    const core = {
      x: W / 2,
      y: H / 2,
      radius: 28,
      pulsePhase: 0
    };
    const orbitCount = 5;
    const satellites = Array.from({ length: orbitCount }, (_, i) => ({
      angle: i / orbitCount * Math.PI * 2,
      radius: Math.min(W, H) * 0.3,
      speed: 4e-3 + i * 15e-4,
      size: 8 + i * 2,
      color: i % 2 === 0 ? PRIMARY : ACCENT
    }));
    let camX = 0, camY = 0;
    function project(px, py, pz) {
      const fov = 500;
      const scale = fov / (fov + pz);
      return {
        x: W / 2 + (px - W / 2) * scale + camX * 30,
        y: H / 2 + (py - H / 2) * scale + camY * 30,
        scale
      };
    }
    let time = 0;
    function draw() {
      ctx.clearRect(0, 0, W, H);
      camX = lerp(camX, mouseRef.current.x - 0.5, 0.04);
      camY = lerp(camY, mouseRef.current.y - 0.5, 0.04);
      time += 8e-3;
      core.pulsePhase += 0.05;
      particles.forEach((p) => {
        p.x += p.vx;
        p.y += p.vy;
        p.z += p.vz;
        if (p.x < 0) p.x = W;
        if (p.x > W) p.x = 0;
        if (p.y < 0) p.y = H;
        if (p.y > H) p.y = 0;
        if (p.z < 50) p.z = 500;
        if (p.z > 550) p.z = 50;
      });
      const MAX_DIST = 140;
      for (let i = 0; i < particles.length; i++) {
        const a2 = particles[i];
        const pa = project(a2.x, a2.y, a2.z);
        for (let j = i + 1; j < particles.length; j++) {
          const b = particles[j];
          const dx = a2.x - b.x;
          const dy = a2.y - b.y;
          const dist = Math.sqrt(dx * dx + dy * dy);
          if (dist < MAX_DIST) {
            const pb = project(b.x, b.y, b.z);
            const alpha = (1 - dist / MAX_DIST) * 0.25;
            const useAccent = (i + j) % 3 === 0;
            ctx.beginPath();
            ctx.strokeStyle = `rgba(${useAccent ? ACCENT : PRIMARY}, ${alpha})`;
            ctx.lineWidth = pa.scale * 0.6;
            ctx.moveTo(pa.x, pa.y);
            ctx.lineTo(pb.x, pb.y);
            ctx.stroke();
          }
        }
      }
      particles.forEach((p, i) => {
        const pp = project(p.x, p.y, p.z);
        const s = p.size * pp.scale;
        const useAccent = i % 4 === 0;
        const col = i % 7 === 0 ? GOLD : useAccent ? ACCENT : PRIMARY;
        const grad = ctx.createRadialGradient(pp.x, pp.y, 0, pp.x, pp.y, s * 2);
        grad.addColorStop(0, `rgba(${col}, ${p.opacity * pp.scale})`);
        grad.addColorStop(1, `rgba(${col}, 0)`);
        ctx.beginPath();
        ctx.arc(pp.x, pp.y, s * 2, 0, Math.PI * 2);
        ctx.fillStyle = grad;
        ctx.fill();
      });
      satellites.forEach((sat) => {
        sat.angle += sat.speed;
        const sx = core.x + Math.cos(sat.angle + time * 0.2) * sat.radius;
        const sy = core.y + Math.sin(sat.angle + time * 0.2) * sat.radius * 0.55;
        const corePX = core.x + camX * 20;
        const corePY = core.y + camY * 20;
        const lineGrad = ctx.createLinearGradient(corePX, corePY, sx, sy);
        lineGrad.addColorStop(0, `rgba(${sat.color}, 0.5)`);
        lineGrad.addColorStop(1, `rgba(${sat.color}, 0)`);
        ctx.beginPath();
        ctx.strokeStyle = lineGrad;
        ctx.lineWidth = 1;
        ctx.setLineDash([4, 8]);
        ctx.moveTo(corePX, corePY);
        ctx.lineTo(sx, sy);
        ctx.stroke();
        ctx.setLineDash([]);
        const satGrad = ctx.createRadialGradient(sx, sy, 0, sx, sy, sat.size * 2);
        satGrad.addColorStop(0, `rgba(${sat.color}, 0.9)`);
        satGrad.addColorStop(0.5, `rgba(${sat.color}, 0.4)`);
        satGrad.addColorStop(1, `rgba(${sat.color}, 0)`);
        ctx.beginPath();
        ctx.arc(sx, sy, sat.size * 2, 0, Math.PI * 2);
        ctx.fillStyle = satGrad;
        ctx.fill();
        ctx.beginPath();
        ctx.arc(sx, sy, sat.size * 0.7, 0, Math.PI * 2);
        ctx.fillStyle = `rgba(${sat.color}, 0.95)`;
        ctx.fill();
      });
      const pulse = Math.sin(core.pulsePhase) * 0.3 + 0.7;
      const cx = core.x + camX * 20;
      const cy = core.y + camY * 20;
      for (let ring = 3; ring >= 1; ring--) {
        const rr = core.radius * (1 + ring * 0.5 + (1 - pulse) * ring * 0.4);
        const ra = (0.06 - ring * 0.015) * pulse;
        ctx.beginPath();
        ctx.arc(cx, cy, rr, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(${PRIMARY}, ${ra})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
      }
      const coreGrad = ctx.createRadialGradient(cx, cy, 0, cx, cy, core.radius * 2.5);
      coreGrad.addColorStop(0, `rgba(${PRIMARY}, ${0.4 * pulse})`);
      coreGrad.addColorStop(0.5, `rgba(${ACCENT}, ${0.15 * pulse})`);
      coreGrad.addColorStop(1, `rgba(${PRIMARY}, 0)`);
      ctx.beginPath();
      ctx.arc(cx, cy, core.radius * 2.5, 0, Math.PI * 2);
      ctx.fillStyle = coreGrad;
      ctx.fill();
      const coreFill = ctx.createRadialGradient(cx - 6, cy - 6, 2, cx, cy, core.radius);
      coreFill.addColorStop(0, `rgba(${PRIMARY}, 0.95)`);
      coreFill.addColorStop(0.6, `rgba(${ACCENT}, 0.7)`);
      coreFill.addColorStop(1, `rgba(${PRIMARY}, 0.5)`);
      ctx.beginPath();
      ctx.arc(cx, cy, core.radius, 0, Math.PI * 2);
      ctx.fillStyle = coreFill;
      ctx.fill();
      ctx.beginPath();
      ctx.arc(cx, cy, core.radius, 0, Math.PI * 2);
      ctx.strokeStyle = `rgba(${PRIMARY}, 0.8)`;
      ctx.lineWidth = 1.5;
      ctx.stroke();
      ctx.font = "bold 9px Inter, sans-serif";
      ctx.fillStyle = "rgba(255,255,255,0.9)";
      ctx.textAlign = "center";
      ctx.textBaseline = "middle";
      ctx.fillText("AI", cx, cy - 5);
      ctx.font = "7px Inter, sans-serif";
      ctx.fillText("CORE", cx, cy + 6);
      frameRef.current = requestAnimationFrame(draw);
    }
    frameRef.current = requestAnimationFrame(draw);
    function onMouseMove(e) {
      const rect = canvas.getBoundingClientRect();
      mouseRef.current = {
        x: (e.clientX - rect.left) / rect.width,
        y: (e.clientY - rect.top) / rect.height
      };
    }
    canvas.addEventListener("mousemove", onMouseMove);
    function onResize() {
      W = canvas.clientWidth;
      H = canvas.clientHeight;
      canvas.width = W * window.devicePixelRatio;
      canvas.height = H * window.devicePixelRatio;
      ctx.scale(window.devicePixelRatio, window.devicePixelRatio);
      core.x = W / 2;
      core.y = H / 2;
    }
    const ro = new ResizeObserver(onResize);
    ro.observe(canvas);
    return () => {
      cancelAnimationFrame(frameRef.current);
      canvas.removeEventListener("mousemove", onMouseMove);
      ro.disconnect();
    };
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "canvas",
    {
      ref: canvasRef,
      className,
      "aria-hidden": true,
      style: { display: "block", width: "100%", height: "100%" }
    }
  );
}
const metricas = [
  { value: "+400%", label: "Tasa de respuesta" },
  { value: "24/7", label: "Cierre automático" },
  { value: "5 min", label: "Primer agente activo" }
];
const trust = [
  { icon: Clock, label: "Velocidad de respuesta" },
  { icon: Cpu, label: "Agentes autónomos" },
  { icon: ShieldCheck, label: "RGPD blindado" },
  { icon: Zap, label: "API abierta" }
];
const testimonial = {
  quote: "Pasamos de 'contestar cuando podemos' a un departamento de ventas que no duerme. El cambio en citas fue inmediato.",
  name: "Director Comercial",
  company: "Grupo inmobiliario — Madrid"
};
const liveEvents = [
  { label: "Lead cualificado", value: "María R. · Score 94", dot: "bg-primary" },
  { label: "Cita agendada", value: "Hoy · 16:30 ✓", dot: "bg-accent" },
  { label: "CRM actualizado", value: "Salesforce · +1", dot: "bg-muted-foreground/50" },
  { label: "Seguimiento IA", value: "WhatsApp · leído", dot: "bg-primary" }
];
function PhoneMockup3D() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      initial: { opacity: 0, rotateY: -20, rotateX: 8 },
      animate: { opacity: 1, rotateY: -8, rotateX: 6 },
      transition: { duration: 1.2, ease: [0.25, 0.46, 0.45, 0.94] },
      className: "relative hidden lg:block",
      style: { perspective: "1200px", transformStyle: "preserve-3d" },
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            animate: { y: [0, -12, 0] },
            transition: { duration: 6, repeat: Infinity, ease: "easeInOut" },
            style: {
              transformStyle: "preserve-3d",
              transform: "rotateY(-12deg) rotateX(6deg)"
            },
            className: "relative",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "div",
                {
                  className: "relative w-[220px] rounded-[2rem] overflow-hidden",
                  style: {
                    background: "linear-gradient(160deg, var(--color-card), color-mix(in oklab, var(--color-card) 80%, var(--color-background)))",
                    border: "1.5px solid var(--color-border)",
                    boxShadow: "0 0 0 1px var(--color-border), 0 40px 80px -20px color-mix(in oklab, var(--color-primary) 30%, transparent), 0 20px 40px -10px color-mix(in oklab, var(--color-foreground) 15%, transparent), inset 0 1px 0 color-mix(in oklab, white 8%, transparent)"
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex justify-center pt-3 pb-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: "w-20 h-5 rounded-full",
                        style: { background: "var(--color-background)", border: "1px solid var(--color-border)" }
                      }
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "px-3 pb-4 space-y-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-1 mb-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] font-bold text-primary", children: "MetaTok" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "flex items-center gap-1", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[8px] text-muted-foreground", children: "En vivo" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-xl p-3",
                          style: { background: "var(--color-muted)", border: "1px solid var(--color-border)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-2", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "w-6 h-6 rounded-full flex items-center justify-center text-[8px] font-bold text-white",
                                  style: { background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))" },
                                  children: "AI"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[9px] font-bold text-foreground", children: "Agente MetaTok" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[7px] text-muted-foreground", children: "Procesando lead…" })
                              ] })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "text-[8px] text-foreground rounded-lg rounded-tl-sm px-2.5 py-1.5 max-w-[80%]",
                                  style: { background: "var(--color-background)", border: "1px solid var(--color-border)" },
                                  children: "¡Hola! ¿Estás interesado en nuestra solución de CRM?"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "text-[8px] text-white font-medium rounded-lg rounded-tr-sm px-2.5 py-1.5 max-w-[75%] ml-auto",
                                  style: { background: "var(--color-primary)" },
                                  children: "Sí, dime más 👋"
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "text-[8px] text-foreground rounded-lg rounded-tl-sm px-2.5 py-1.5 max-w-[80%]",
                                  style: { background: "var(--color-background)", border: "1px solid var(--color-border)" },
                                  children: "Perfecto. ¿Cuándo podemos agendar tu demo?"
                                }
                              )
                            ] })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-3 gap-1.5", children: [
                        { l: "Leads", v: "23" },
                        { l: "Calific.", v: "17" },
                        { l: "Citas", v: "8" }
                      ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-lg p-2 text-center",
                          style: { background: "var(--color-muted)", border: "1px solid var(--color-border)" },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[8px] text-muted-foreground", children: s.l }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-black text-foreground", children: s.v })
                          ]
                        },
                        s.l
                      )) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "rounded-xl p-2.5 flex items-center justify-between",
                          style: {
                            background: "color-mix(in oklab, var(--color-primary) 10%, var(--color-card))",
                            border: "1px solid color-mix(in oklab, var(--color-primary) 30%, transparent)"
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[9px] font-semibold text-foreground/80", children: "Score del lead" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-black text-primary", children: "94%" })
                          ]
                        }
                      )
                    ] })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                "div",
                {
                  "aria-hidden": true,
                  className: "absolute -bottom-8 left-1/2 -translate-x-1/2 w-32 h-8 rounded-full blur-xl opacity-40 pointer-events-none",
                  style: { background: "var(--color-primary)" }
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { y: [0, -8, 0], rotate: [-2, 2, -2] },
            transition: { duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 },
            className: "absolute -right-12 top-12 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg z-20",
            style: {
              background: "var(--color-card)",
              border: "1px solid color-mix(in oklab, var(--color-primary) 40%, transparent)",
              boxShadow: "0 0 20px -5px color-mix(in oklab, var(--color-primary) 30%, transparent)",
              color: "var(--color-foreground)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Lead · Score 94" })
            ] })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            animate: { y: [0, 8, 0], rotate: [2, -2, 2] },
            transition: { duration: 5, repeat: Infinity, ease: "easeInOut", delay: 0.5 },
            className: "absolute -left-10 bottom-20 rounded-xl px-3 py-2 text-xs font-semibold shadow-lg z-20",
            style: {
              background: "var(--color-card)",
              border: "1px solid color-mix(in oklab, var(--color-accent) 40%, transparent)",
              boxShadow: "0 0 20px -5px color-mix(in oklab, var(--color-accent) 30%, transparent)",
              color: "var(--color-foreground)"
            },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-accent animate-pulse" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Cita agendada ✓" })
            ] })
          }
        )
      ]
    }
  );
}
function Hero() {
  const sectionRef = reactExports.useRef(null);
  const { scrollYProgress } = useScroll({
    target: sectionRef,
    offset: ["start start", "end start"]
  });
  const opacity = useTransform(scrollYProgress, [0, 0.7], [1, 0]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "inicio",
      ref: sectionRef,
      className: "relative min-h-screen pt-[4.75rem] md:pt-20 pb-16 overflow-hidden flex items-center bg-background",
      "aria-labelledby": "hero-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "absolute inset-0 pointer-events-none", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-40 -left-40 w-[700px] h-[700px] rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 12%, transparent) 0%, transparent 65%)"
              }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              className: "absolute -top-20 right-0 w-[500px] h-[500px] rounded-full pointer-events-none",
              style: {
                background: "radial-gradient(circle, color-mix(in oklab, var(--color-accent) 8%, transparent) 0%, transparent 65%)"
              }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 hero-grid-3d opacity-40 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 pointer-events-none opacity-25", children: /* @__PURE__ */ jsxRuntimeExports.jsx(AIBrainScene, { className: "w-full h-full" }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt grid lg:grid-cols-12 gap-8 lg:gap-6 items-center w-full relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "lg:col-span-6 xl:col-span-5 flex flex-col",
              variants: stagger,
              initial: "hidden",
              animate: "show",
              style: { opacity },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fadeUp,
                    className: "inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 backdrop-blur-md px-4 py-1.5 text-xs font-semibold text-primary",
                    style: { boxShadow: "0 0 20px -5px color-mix(in oklab, var(--color-primary) 30%, transparent)" },
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative flex h-2 w-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "animate-ping absolute inline-flex h-full w-full rounded-full bg-primary opacity-75" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative inline-flex rounded-full h-2 w-2 bg-primary" })
                      ] }),
                      "Ecosistema de Agentes · MetaTok AI"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h1,
                  {
                    id: "hero-heading",
                    variants: fadeUp,
                    className: "mt-4 text-4xl md:text-5xl lg:text-[3.2rem] font-black tracking-tight text-foreground leading-[1.05]",
                    children: [
                      "Tu Departamento de Ventas,",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative inline-block", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary via-[oklch(0.62_0.24_280)] to-accent bg-clip-text text-transparent", children: "en Piloto Automático" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "span",
                          {
                            "aria-hidden": true,
                            className: "absolute -bottom-1 left-0 h-[3px] w-full rounded-full bg-gradient-to-r from-primary to-accent opacity-60"
                          }
                        )
                      ] }),
                      " ",
                      "con IA"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.p,
                  {
                    variants: fadeUp,
                    className: "mt-4 text-base md:text-lg text-muted-foreground max-w-xl leading-relaxed",
                    children: [
                      "No es un chatbot. Es un ecosistema de",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "Agentes Autónomos" }),
                      " que prospectan, califican y cierran ventas por ti",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary font-semibold", children: "24/7" }),
                      " en WhatsApp, Instagram y Web."
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    variants: fadeUp,
                    className: "mt-3 text-sm text-muted-foreground/70 max-w-lg leading-relaxed pl-4 italic",
                    style: { borderLeft: "2px solid color-mix(in oklab, var(--color-primary) 60%, transparent)" },
                    children: "MetaTok: la única IA que no solo genera leads, sino que empuja el cierre."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mt-7 flex flex-col gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row gap-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        asChild: true,
                        size: "lg",
                        className: "h-auto py-3.5 px-6 text-sm font-bold transition-all duration-300 group hover:-translate-y-1 rounded-xl relative overflow-hidden",
                        style: {
                          background: "linear-gradient(135deg, var(--color-primary), var(--color-accent))",
                          boxShadow: "0 0 30px -8px color-mix(in oklab, var(--color-primary) 50%, transparent)"
                        },
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contacto", className: "flex items-center justify-center gap-2 text-white", children: [
                          "Desplegar mi Agente Ahora",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
                        ] })
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Button,
                      {
                        asChild: true,
                        size: "lg",
                        variant: "outline",
                        className: "h-auto py-3.5 px-6 text-sm rounded-xl transition-all hover:-translate-y-0.5",
                        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#auditoria", className: "flex items-center gap-2", children: [
                          "Auditoría gratuita",
                          /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                        ] })
                      }
                    )
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground/60", children: "Sin permanencia · Despliegue en 15-30 días · Sin código para tu equipo" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "mt-7 grid grid-cols-3 gap-3", children: metricas.map((m) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "relative rounded-xl p-3 text-center overflow-hidden group hover:scale-105 transition-transform duration-300 bg-card border border-border hover:border-primary/30",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          "aria-hidden": true,
                          className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-xl",
                          style: { background: "radial-gradient(circle, color-mix(in oklab, var(--color-primary) 8%, transparent) 0%, transparent 70%)" }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-lg md:text-2xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", children: m.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-[10px] text-muted-foreground leading-tight", children: m.label })
                    ]
                  },
                  m.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.ul, { variants: fadeUp, className: "mt-5 flex flex-wrap gap-x-5 gap-y-2", children: trust.map((t) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-1.5 text-xs text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(t.icon, { className: "h-3.5 w-3.5 text-accent shrink-0", "aria-hidden": true }),
                  t.label
                ] }, t.label)) })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              className: "lg:col-span-6 xl:col-span-7 flex items-center justify-center gap-6 lg:gap-8",
              initial: { opacity: 0, x: 60 },
              animate: { opacity: 1, x: 0 },
              transition: { duration: 0.9, delay: 0.3, ease: [0.25, 0.46, 0.45, 0.94] },
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(PhoneMockup3D, {}),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-4 flex-1 max-w-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "div",
                    {
                      className: "rounded-2xl p-4 bg-card border border-border",
                      style: {
                        boxShadow: "0 0 40px -15px color-mix(in oklab, var(--color-primary) 20%, transparent)"
                      },
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between mb-3", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary animate-pulse" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-foreground/80", children: "Panel · En vivo" })
                          ] }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex gap-1.5", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-border" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-border" }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-2 w-2 rounded-full bg-primary/60" })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2", children: liveEvents.map((ev) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "flex items-center justify-between rounded-lg px-3 py-2 bg-background border border-border hover:border-primary/30 transition-colors",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2.5", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: `h-2 w-2 rounded-full shrink-0 ${ev.dot}` }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-foreground/80", children: ev.label })
                              ] }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs text-muted-foreground", children: ev.value })
                            ]
                          },
                          ev.label
                        )) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 grid grid-cols-3 gap-2", children: [
                          { l: "Leads hoy", v: "23" },
                          { l: "Cualificados", v: "17" },
                          { l: "Citas", v: "8" }
                        ].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "rounded-lg p-2 text-center bg-background border border-border",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: s.l }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-0.5 text-lg font-black text-foreground", children: s.v })
                            ]
                          },
                          s.l
                        )) })
                      ]
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl p-4 bg-card border border-border", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-0.5 mb-2", children: [...Array(5)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                      Star,
                      {
                        className: "h-3.5 w-3.5 fill-[var(--luxury-gold)] text-[var(--luxury-gold)]",
                        "aria-hidden": true
                      },
                      i
                    )) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-sm text-muted-foreground leading-relaxed italic", children: [
                      '"',
                      testimonial.quote,
                      '"'
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-3 flex items-center gap-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "h-8 w-8 rounded-full flex items-center justify-center text-xs font-bold text-white",
                          style: { background: "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 60%, transparent), color-mix(in oklab, var(--color-accent) 50%, transparent))", border: "1px solid color-mix(in oklab, var(--color-primary) 40%, transparent)" },
                          children: "D"
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold text-foreground/80", children: testimonial.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground", children: testimonial.company })
                      ] })
                    ] })
                  ] })
                ] })
              ]
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0 },
            animate: { opacity: 1 },
            transition: { delay: 2.5 },
            className: "absolute bottom-8 left-1/2 -translate-x-1/2 flex flex-col items-center gap-2",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-[10px] text-muted-foreground/40 uppercase tracking-widest", children: "Descubre más" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-8 w-px bg-gradient-to-b from-muted-foreground/30 to-transparent animate-bounce" })
            ]
          }
        )
      ]
    }
  );
}
const MENSAJES_MENSUALES_M = "12";
function SocialProofStrip() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      className: "border-b border-border bg-muted py-2.5 dark:bg-neutral-950",
      "aria-label": "Escala de la plataforma",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-mt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.p,
        {
          initial: "hidden",
          whileInView: "show",
          viewport: viewportOnce,
          variants: fadeUp,
          className: "text-center text-sm md:text-base text-foreground/90",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "font-semibold text-primary", children: "MetaTok" }),
            " ya está procesando",
            " ",
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "font-extrabold tabular-nums text-luxury-gold", children: [
              "+",
              MENSAJES_MENSUALES_M,
              " millones"
            ] }),
            " ",
            "de mensajes al mes en conversaciones de venta."
          ]
        }
      ) })
    }
  );
}
const imgHeineken = "/assets/Heineken-DVFqOkEF.png";
const imgLatam = "/assets/LATAM%20Airlines-BEbWMzGt.png";
const imgZoom = "/assets/zoom-BPxXGDEs.png";
const imgCemex = "/assets/CEMEX-b4rstEVh.png";
const imgMadrid = "/assets/Comunidad%20de%20Madrid-CKB6Xv2n.png";
const imgDupont = "/assets/DuPont-Bm3rRztS.png";
const brands = [
  { name: "Heineken", logo: imgHeineken },
  { name: "LATAM Airlines", logo: imgLatam },
  { name: "Zoom", logo: imgZoom },
  { name: "Cemex", logo: imgCemex },
  { name: "Comunidad de Madrid", logo: imgMadrid },
  { name: "DuPont", logo: imgDupont }
];
const marqueeBrands = [...brands, ...brands, ...brands];
function Brands() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "py-7 md:py-8 border-b border-border bg-[var(--color-surface)] overflow-hidden", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-mt mb-5 text-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.p,
      {
        initial: "hidden",
        whileInView: "show",
        viewport: viewportOnce,
        variants: fadeUp,
        className: "text-xs font-semibold tracking-widest uppercase text-muted-foreground/70",
        children: "Sistemas robustos preparados para facturación masiva. Seguridad de grado bancario para tus datos."
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex w-full overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute left-0 top-0 z-10 h-full w-16 md:w-36 bg-gradient-to-r from-[var(--color-surface)] to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute right-0 top-0 z-10 h-full w-16 md:w-36 bg-gradient-to-l from-[var(--color-surface)] to-transparent pointer-events-none" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex w-max animate-marquee items-center gap-8 md:gap-12 px-6", children: marqueeBrands.map((brand, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
        "div",
        {
          className: "flex items-center gap-2.5 shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "img",
              {
                src: brand.logo,
                alt: brand.name,
                className: "h-7 md:h-8 w-auto max-w-[40px] object-contain",
                loading: "lazy",
                draggable: false,
                suppressHydrationWarning: true
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm md:text-base font-semibold text-foreground whitespace-nowrap", children: brand.name })
          ]
        },
        `${brand.name}-${i}`
      )) })
    ] })
  ] });
}
const items = [
  {
    icon: Timer,
    stat: "70%",
    title: "Lead frío",
    text: "El 70% de los leads se pierden por responder después de 5 minutos. La velocidad lo es todo.",
    tone: "from-orange-500 to-amber-400",
    glowColor: "rgba(251, 146, 60, 0.15)",
    borderColor: "border-orange-500/20"
  },
  {
    icon: Users,
    stat: "1.000",
    title: "Saturación humana",
    text: "Tu equipo humano no puede atender 1.000 chats a la vez. Los agentes MetaTok sí lo hacen.",
    tone: "from-amber-400 to-yellow-400",
    glowColor: "rgba(251, 191, 36, 0.12)",
    borderColor: "border-amber-400/20"
  },
  {
    icon: Target,
    stat: "Cero cierre",
    title: "Sin cierre autónomo",
    text: "Los bots comunes solo dan información. Los agentes MetaTok están programados para cerrar.",
    tone: "from-red-500 to-rose-400",
    glowColor: "rgba(239, 68, 68, 0.12)",
    borderColor: "border-red-500/20"
  }
];
function PainPoints() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "problema",
      className: "relative py-20 md:py-28 bg-background overflow-hidden border-t border-border/50",
      "aria-labelledby": "pain-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 opacity-[0.02] dark:opacity-[0.04] pointer-events-none",
            style: { backgroundImage: "linear-gradient(to right, #ef4444 1px, transparent 1px), linear-gradient(to bottom, #ef4444 1px, transparent 1px)", backgroundSize: "60px 60px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -top-40 -left-40 w-[600px] h-[600px] pointer-events-none rounded-full blur-[120px]",
            style: { background: "radial-gradient(circle, rgba(239,68,68,0.06) 0%, transparent 70%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute -bottom-40 -right-40 w-[600px] h-[600px] pointer-events-none rounded-full blur-[100px]",
            style: { background: "radial-gradient(circle, rgba(249,115,22,0.05) 0%, transparent 70%)" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "max-w-2xl mb-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    variants: fadeUp,
                    className: "text-xs uppercase tracking-widest text-[var(--luxury-gold)] font-semibold",
                    children: "La fuga de dinero"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h2,
                  {
                    id: "pain-heading",
                    variants: fadeUp,
                    className: "mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight",
                    children: [
                      "Tres costes silenciosos",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-red-400", children: "que ya estás pagando" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-4 text-muted-foreground text-base leading-relaxed", children: "Cada minuto sin automatización es dinero que se va. Identifica exactamente cuánto te está costando el statu quo." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "grid md:grid-cols-3 gap-5",
              children: items.map((it, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: fadeUp,
                  className: `group relative rounded-2xl border ${it.borderColor} bg-card/70 backdrop-blur-sm p-6 overflow-hidden
                          hover:-translate-y-1 hover:shadow-xl transition-all duration-300`,
                  style: {
                    boxShadow: `0 0 0 0 ${it.glowColor}`
                  },
                  whileHover: {
                    boxShadow: `0 20px 50px -15px ${it.glowColor.replace("0.15", "0.5").replace("0.12", "0.4")}`
                  },
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        "aria-hidden": true,
                        className: "absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-500 pointer-events-none rounded-2xl",
                        style: {
                          background: `radial-gradient(ellipse at 50% 0%, ${it.glowColor} 0%, transparent 70%)`
                        }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -bottom-4 -right-4 text-9xl font-black opacity-[0.04] leading-none select-none pointer-events-none text-foreground", children: String(i + 1) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-4 mb-5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          className: "flex h-13 w-13 items-center justify-center rounded-xl",
                          style: { background: `radial-gradient(circle, ${it.glowColor.replace("0.15", "0.25").replace("0.12", "0.2")} 0%, transparent 80%)`, border: `1px solid ${it.glowColor.replace("0.15", "0.35").replace("0.12", "0.3")}` },
                          children: /* @__PURE__ */ jsxRuntimeExports.jsx(it.icon, { className: "h-6 w-6 text-foreground/60", "aria-hidden": true })
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx(
                          "p",
                          {
                            className: `text-3xl font-black tracking-tight bg-gradient-to-r ${it.tone} bg-clip-text text-transparent`,
                            children: it.stat
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-bold uppercase tracking-widest text-muted-foreground mt-0.5", children: it.title })
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative h-px bg-gradient-to-r from-transparent via-border to-transparent mb-4" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative text-sm text-muted-foreground leading-relaxed", children: it.text }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `mt-5 h-0.5 w-0 bg-gradient-to-r ${it.tone} rounded-full group-hover:w-full transition-all duration-500`
                      }
                    )
                  ]
                },
                it.title
              ))
            }
          )
        ] })
      ]
    }
  );
}
const iconMap = [Zap, TrendingUp, Clock, Network];
function Tilt3DCard({ children, className }) {
  const ref = reactExports.useRef(null);
  const x = useMotionValue(0);
  const y = useMotionValue(0);
  const springX = useSpring(x, { stiffness: 300, damping: 30 });
  const springY = useSpring(y, { stiffness: 300, damping: 30 });
  const rotateX = useTransform(springY, [-0.5, 0.5], ["8deg", "-8deg"]);
  const rotateY = useTransform(springX, [-0.5, 0.5], ["-8deg", "8deg"]);
  const glowX = useTransform(springX, [-0.5, 0.5], [0, 100]);
  const glowY = useTransform(springY, [-0.5, 0.5], [0, 100]);
  const glowBg = useTransform(
    [glowX, glowY],
    ([gx, gy]) => `radial-gradient(circle at ${gx}% ${gy}%, color-mix(in oklab, var(--color-primary) 28%, transparent) 0%, transparent 60%)`
  );
  function handleMouseMove(e) {
    const rect = ref.current?.getBoundingClientRect();
    if (!rect) return;
    x.set((e.clientX - rect.left) / rect.width - 0.5);
    y.set((e.clientY - rect.top) / rect.height - 0.5);
  }
  function handleMouseLeave() {
    x.set(0);
    y.set(0);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    motion.div,
    {
      ref,
      style: { rotateX, rotateY, transformStyle: "preserve-3d", perspective: "800px" },
      onMouseMove: handleMouseMove,
      onMouseLeave: handleMouseLeave,
      className,
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            "aria-hidden": true,
            className: "absolute inset-0 rounded-2xl pointer-events-none z-20 opacity-0 group-hover:opacity-100 transition-opacity duration-300",
            style: { background: glowBg }
          }
        ),
        children
      ]
    }
  );
}
function Beneficios() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "beneficios",
      className: "relative py-16 md:py-24 border-y border-border bg-[var(--color-surface)] overflow-hidden",
      "aria-labelledby": "beneficios-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            style: {
              backgroundImage: "radial-gradient(ellipse 80% 50% at 20% 60%, color-mix(in oklab, var(--color-accent) 6%, transparent) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "max-w-2xl mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: fadeUp, className: "text-xs uppercase tracking-widest text-primary font-semibold", children: "Resultados tangibles" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h2,
                  {
                    id: "beneficios-heading",
                    variants: fadeUp,
                    className: "mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight",
                    children: [
                      "De software a",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", children: "ecosistema que factura" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-4 text-muted-foreground text-base leading-relaxed", children: "No compras un chat: instalas un departamento de ventas que no duerme. Horas recuperadas, leads que avanzan y cierres que antes se quedaban a medias." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "grid sm:grid-cols-2 lg:grid-cols-4 gap-5",
              style: { perspective: "1200px" },
              children: beneficios.map((b, i) => {
                const Icon = iconMap[i] ?? TrendingUp;
                return /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.div,
                  {
                    variants: fadeUp,
                    className: "relative group",
                    style: { transformStyle: "preserve-3d" },
                    children: /* @__PURE__ */ jsxRuntimeExports.jsxs(Tilt3DCard, { className: "relative h-full rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-5 flex flex-col overflow-hidden cursor-default transition-all duration-300 hover:border-primary/40 hover:shadow-[0_20px_60px_-20px_var(--color-primary)]", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-2 -right-2 text-8xl font-black text-primary/[0.04] tracking-tighter leading-none select-none pointer-events-none", children: String(i + 1).padStart(2, "0") }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-end gap-2 mb-2", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-4xl font-black bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent tracking-tight", children: b.metrica }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, { className: "h-5 w-5 text-accent mb-1 shrink-0", "aria-hidden": true })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-muted-foreground mb-4", children: b.metricaLabel }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-px bg-gradient-to-r from-border via-primary/20 to-border mb-4" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: b.titulo }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed flex-1", children: b.descripcion }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-5 h-0.5 w-0 bg-gradient-to-r from-primary to-accent rounded-full group-hover:w-full transition-all duration-500" })
                    ] })
                  },
                  b.titulo
                );
              })
            }
          )
        ] })
      ]
    }
  );
}
function MetaTokEngine() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "motor-metatok",
      className: "relative overflow-hidden border-y border-border bg-[var(--color-surface)] py-24 md:py-32",
      "aria-labelledby": "engine-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(circle at 50% 0%, color-mix(in oklab, var(--color-primary) 16%, transparent) 0%, transparent 72%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none opacity-[0.2]",
            style: {
              backgroundImage: "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 8%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 8%, transparent) 1px, transparent 1px)",
              backgroundSize: "40px 40px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "text-center max-w-3xl mx-auto mb-16 md:mb-24",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-3.5 w-3.5" }),
                  "MetaTok Engine V5"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h2,
                  {
                    id: "engine-heading",
                    variants: fadeUp,
                    className: "text-4xl md:text-5xl lg:text-6xl font-black text-foreground tracking-tight leading-tight",
                    children: [
                      "La Arquitectura detrás de la",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary via-[#9b82ff] to-accent bg-clip-text text-transparent", children: "Conversión Autónoma" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: "Descubre el motor cognitivo que no solo responde preguntas, sino que califica leads, supera objeciones y cierra ventas sin intervención humana." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "grid grid-cols-1 md:grid-cols-3 gap-4 md:gap-6 max-w-6xl mx-auto md:auto-rows-[300px]",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "md:col-span-2 row-span-1 rounded-3xl bg-card/75 border border-border p-8 relative flex flex-col md:flex-row items-center gap-6 group backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-primary/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative shrink-0 flex items-center justify-center w-36 h-36 md:w-48 md:h-48", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/20 blur-[50px] rounded-full group-hover:bg-primary/40 transition-colors duration-700" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative w-36 h-36 bg-background/85 rounded-2xl border border-border shadow-2xl flex flex-col items-center justify-center transform transition-transform duration-700 group-hover:scale-105 group-hover:rotate-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 opacity-20", style: { backgroundImage: "radial-gradient(var(--color-primary) 1px, transparent 1px)", backgroundSize: "8px 8px" } }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 left-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-2 right-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 left-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-2 right-2 w-1.5 h-1.5 rounded-full bg-muted-foreground/60" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative w-16 h-16 bg-gradient-to-br from-primary/20 to-accent/20 border border-primary/45 rounded-xl flex items-center justify-center shadow-[0_0_30px_var(--color-primary)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Cpu, { className: "h-8 w-8 text-primary animate-pulse", strokeWidth: 1.5 }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-3 text-[9px] font-black text-foreground/80 tracking-[0.3em] uppercase relative z-10", children: "AI CORE" })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex-1 text-center md:text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black text-foreground mb-3", children: "Procesamiento Cognitivo en Tiempo Real" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "El núcleo V5 analiza intención, sentimiento y contexto en milisegundos. Adapta el guion de ventas dinámicamente basándose en más de 10,000 interacciones previas." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "rounded-3xl bg-card/75 border border-border p-8 relative overflow-hidden group flex flex-col justify-between backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute top-0 right-0 w-32 h-32 bg-accent/10 blur-[40px] rounded-full group-hover:bg-accent/20 transition-colors duration-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24 flex items-center justify-center gap-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-background/55 border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-background/55 border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-1 delay-75", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-5 w-5" }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-12 h-12 rounded-xl bg-background/55 border border-border flex items-center justify-center text-muted-foreground group-hover:text-foreground group-hover:border-primary/40 transition-all duration-300 group-hover:-translate-y-3 delay-150", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Globe, { className: "h-5 w-5" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "Omnicanalidad Total" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "WhatsApp, Instagram y Web conectados a un único cerebro central." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "rounded-3xl bg-card/75 border border-border p-8 relative overflow-hidden group flex flex-col justify-between backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute bottom-0 left-0 w-32 h-32 bg-primary/10 blur-[40px] rounded-full group-hover:bg-primary/20 transition-colors duration-500" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative h-24 flex flex-col justify-end gap-2 font-mono text-xs text-muted-foreground/80", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "POST" }),
                      " /crm/sync-lead"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-accent", children: "200 OK" }),
                      " ",
                      "{ id: 8942, status: 'qualified' }"
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-full h-1 bg-border/60 rounded-full overflow-hidden mt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-full bg-gradient-to-r from-primary to-accent w-2/3 group-hover:w-full transition-all duration-1000 ease-out" }) })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground mb-2", children: "Sincronización CRM" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "Integración nativa bidireccional. Todo queda registrado." })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "md:col-span-2 row-span-1 rounded-3xl bg-card/75 border border-border p-8 relative overflow-hidden flex flex-col md:flex-row-reverse items-center gap-8 group backdrop-blur-sm", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tr from-accent/10 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative shrink-0 w-[85%] md:w-1/2 h-32 md:h-full flex items-center justify-center mt-4 md:mt-0", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { className: "w-full h-full overflow-visible", viewBox: "-5 -25 210 125", preserveAspectRatio: "none", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("defs", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs("linearGradient", { id: "chart-gradient", x1: "0", y1: "0", x2: "0", y2: "1", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "0%", stopColor: "var(--color-accent)", stopOpacity: "0.45" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("stop", { offset: "100%", stopColor: "var(--color-accent)", stopOpacity: "0" })
                    ] }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.path,
                      {
                        d: "M0,80 Q20,60 40,70 T80,40 T120,50 T160,20 T200,10 L200,100 L0,100 Z",
                        fill: "url(#chart-gradient)",
                        initial: { opacity: 0, y: 20 },
                        whileInView: { opacity: 1, y: 0 },
                        transition: { duration: 1 }
                      }
                    ),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.path,
                      {
                        d: "M0,80 Q20,60 40,70 T80,40 T120,50 T160,20 T200,10",
                        fill: "none",
                        stroke: "var(--color-accent)",
                        strokeWidth: "3",
                        strokeLinecap: "round",
                        initial: { pathLength: 0 },
                        whileInView: { pathLength: 1 },
                        transition: { duration: 1.5, ease: "easeOut" }
                      }
                    )
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex-1 text-center md:text-left", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-2xl font-black text-foreground mb-3", children: "Auto-optimización Constante" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-muted-foreground text-sm leading-relaxed", children: "El sistema nunca deja de aprender. Realiza pruebas A/B automatizadas en sus propios mensajes para encontrar las combinaciones que generan mayor tasa de respuesta." })
                  ] })
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: fadeUp,
              className: "mt-8 flex justify-center gap-4 md:gap-8 flex-wrap",
              children: [{ v: "< 0.5s", l: "Latencia media" }, { v: "99.9%", l: "Uptime garantizado" }, { v: "AES-256", l: "Cifrado de datos" }].map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 bg-card/75 border border-border rounded-full px-5 py-2.5 backdrop-blur-sm", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-primary" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-foreground", children: s.v }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-[10px] text-muted-foreground uppercase tracking-wider", children: s.l })
                ] })
              ] }, s.l))
            }
          )
        ] })
      ]
    }
  );
}
function TypingDotsWL() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex items-center gap-1 px-2.5 py-1.5", children: [0, 1, 2].map((i) => /* @__PURE__ */ jsxRuntimeExports.jsx(
    motion.span,
    {
      className: "w-1 h-1 rounded-full bg-muted-foreground/60",
      animate: { y: [0, -3, 0], opacity: [0.4, 1, 0.4] },
      transition: { duration: 0.75, repeat: Infinity, delay: i * 0.18, ease: "easeInOut" }
    },
    i
  )) });
}
const WL_CHAT_STEPS = [
  { from: "bot", text: "Hola, soy el asesor de TuMarca. ¿En qué te ayudo? 👋", typingMs: 1200, showAt: 0 },
  { from: "user", text: "Quiero una propuesta para esta semana.", typingMs: 900, showAt: 2600 },
  { from: "bot", text: "¡Perfecto! ¿Prefieres reunión por videollamada o presencial?", typingMs: 1300, showAt: 4700 },
  { from: "user", text: "Videollamada, any day ✅", typingMs: 800, showAt: 7400 },
  { from: "bot", text: "Agendado para mañana 10:30. Te mando confirmación 📅", typingMs: 1400, showAt: 9800 },
  { from: "user", text: "Genial, muchas gracias 🙌", typingMs: 700, showAt: 13e3 },
  { from: "bot", text: "¡Hasta mañana! Cualquier duda, aquí estoy 🚀", typingMs: 1200, showAt: 15e3 }
];
const WL_CYCLE_MS = 2e4;
function LiveChatWL() {
  const [visibleCount, setVisibleCount] = reactExports.useState(0);
  const [typingFor, setTypingFor] = reactExports.useState(null);
  reactExports.useEffect(() => {
    const timers = [];
    function runCycle() {
      setVisibleCount(0);
      setTypingFor(null);
      WL_CHAT_STEPS.forEach((step, idx) => {
        timers.push(setTimeout(() => setTypingFor(step.from), step.showAt));
        timers.push(setTimeout(() => {
          setVisibleCount(idx + 1);
          setTypingFor(null);
        }, step.showAt + step.typingMs));
      });
      timers.push(setTimeout(() => {
        timers.forEach(clearTimeout);
        runCycle();
      }, WL_CYCLE_MS));
    }
    const start = setTimeout(runCycle, 600);
    timers.push(start);
    return () => timers.forEach(clearTimeout);
  }, []);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-1.5 overflow-hidden", children: [
    WL_CHAT_STEPS.slice(0, visibleCount).map((step, idx) => /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 5, scale: 0.97 },
        animate: { opacity: 1, y: 0, scale: 1 },
        transition: { duration: 0.22, ease: "easeOut" },
        className: `flex ${step.from === "user" ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "span",
          {
            className: [
              "text-[9px] rounded-lg px-2 py-1 max-w-[82%] leading-tight",
              step.from === "bot" ? "text-foreground/85 rounded-tl-sm" : "text-white font-medium rounded-tr-sm"
            ].join(" "),
            style: step.from === "bot" ? { background: "var(--color-background)", border: "1px solid var(--color-border)" } : { background: "var(--color-accent)" },
            children: step.text
          }
        )
      },
      idx
    )),
    typingFor && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        initial: { opacity: 0, y: 4 },
        animate: { opacity: 1, y: 0 },
        className: `flex ${typingFor === "user" ? "justify-end" : "justify-start"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            className: "rounded-lg rounded-tl-sm",
            style: { background: "var(--color-background)", border: "1px solid var(--color-border)" },
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(TypingDotsWL, {})
          }
        )
      }
    )
  ] });
}
const bullets = [
  "Identidad corporativa integral: marca, tonalidad visual y naming alineados a tu negocio.",
  "Distribucion profesional en App Store y Google Play, o canal privado corporativo cuando lo necesites.",
  "Misma capa cognitiva MetaTok dentro de tu app: agentes que venden, cualifican y agendan 24/7.",
  "Paneles analiticos y reporting bajo tu white label para medir funnel y equipo comercial.",
  "Roadmaps y actualizaciones coordinadas sin que tu marca pierda el control narrativo ante el cliente.",
  "Opciones Enterprise: SLAs, privacidad (RGPD) y gobernanza de datos coherentes con tu compliance."
];
const highlights = [
  {
    icon: Palette,
    title: "Branding completo",
    text: "UI, tono, iconografia y experiencia coherente con tu marca."
  },
  {
    icon: Store,
    title: "Publicacion oficial",
    text: "Despliegue en App Store y Google Play o distribucion privada enterprise."
  },
  {
    icon: ShieldCheck,
    title: "Cumplimiento enterprise",
    text: "RGPD, controles de acceso y trazabilidad para operacion segura."
  },
  {
    icon: Globe,
    title: "Escala multinicho",
    text: "Una base tecnica para multiples verticales sin rehacer producto."
  }
];
const bulletEase = [0.22, 1, 0.36, 1];
const bulletTransition = (index) => ({
  delay: index * 0.06,
  duration: 0.45,
  ease: bulletEase
});
function EliteSolutions() {
  const prefersReducedMotion = useReducedMotion();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "producto-white-label",
      className: "relative overflow-hidden bg-background py-16 md:py-24",
      "aria-labelledby": "producto-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/[0.08] via-accent/[0.05] to-transparent dark:from-primary/[0.14] dark:via-accent/[0.08] dark:to-black/25"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 opacity-70", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute -left-24 top-1/4 h-64 w-64 rounded-full bg-primary/[0.08] blur-3xl dark:bg-primary/12",
              animate: prefersReducedMotion ? false : { scale: [1, 1.06, 1], opacity: [0.5, 0.75, 0.5] },
              transition: { duration: 12, repeat: Infinity, ease: "easeInOut" }
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "absolute -right-20 bottom-0 h-56 w-56 rounded-full bg-accent/[0.08] blur-3xl dark:bg-accent/12",
              animate: prefersReducedMotion ? false : { scale: [1, 1.08, 1], opacity: [0.45, 0.7, 0.45] },
              transition: { duration: 14, repeat: Infinity, ease: "easeInOut" }
            }
          )
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 opacity-35",
            style: {
              backgroundImage: "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 6%, transparent) 1px, transparent 1px)",
              backgroundSize: "48px 48px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "mx-auto mb-12 max-w-3xl text-center md:mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.span,
                  {
                    variants: fadeUp,
                    className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-3.5 w-3.5", "aria-hidden": true }),
                      "Producto"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.h2,
                  {
                    id: "producto-heading",
                    variants: fadeUp,
                    className: "mt-4 text-3xl font-black tracking-tight text-foreground md:text-5xl",
                    children: "Tu app, tu marca, nuestra tecnologia"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground", children: "Convertimos MetaTok en un producto white label listo para venta: experiencia nativa, arquitectura de conversion y operacion comercial bajo tu identidad." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "grid gap-6 md:grid-cols-2 xl:grid-cols-4",
              children: highlights.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.article,
                {
                  variants: fadeUp,
                  className: "group rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/45",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(item.icon, { className: "h-5 w-5", "aria-hidden": true }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-bold text-foreground", children: item.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: item.text })
                  ]
                },
                item.title
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "mt-10 grid items-stretch gap-7 lg:grid-cols-[1.05fr_0.95fr] lg:gap-10",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fadeUp,
                    className: "relative overflow-hidden rounded-3xl border border-border/80 bg-card/65 p-6 md:p-8 backdrop-blur-sm",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-5 inline-flex h-12 w-12 items-center justify-center rounded-xl border border-[var(--luxury-gold)]/35 bg-primary/10 text-[var(--luxury-gold)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Smartphone, { className: "h-6 w-6", "aria-hidden": true }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.15em] text-[var(--luxury-gold)]", children: "Tu marca, nuestra potencia" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-base leading-relaxed text-muted-foreground", children: "Creamos tu aplicacion nativa con el motor de MetaTok integrado. Tu controlas marca, narrativa comercial y pricing; nosotros aceleramos la capa tecnica y la conversion." }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-7 space-y-3.5", "aria-label": "Incluye en white label y apps", children: bullets.map((text, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          motion.li,
                          {
                            className: "flex gap-3 text-sm leading-relaxed text-foreground/90",
                            initial: prefersReducedMotion ? { opacity: 1, x: 0 } : { opacity: 0, x: -12 },
                            whileInView: { opacity: 1, x: 0 },
                            viewport: { once: true, amount: 0.35 },
                            transition: prefersReducedMotion ? { duration: 0 } : bulletTransition(i),
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary", "aria-hidden": true }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: text })
                            ]
                          },
                          text
                        )) })
                      ] })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fadeUp,
                    className: "relative flex items-center justify-center rounded-3xl border border-border/80 bg-card/60 p-6 md:p-8 backdrop-blur-sm",
                    "aria-hidden": true,
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-10 top-8 h-36 w-36 rounded-full bg-accent/20 blur-3xl" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-8 bottom-10 h-36 w-36 rounded-full bg-primary/20 blur-3xl" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.div,
                        {
                          className: "relative isolate rounded-[2.2rem] border border-border bg-background/85 p-3 shadow-[0_32px_90px_-40px_var(--color-primary)]",
                          initial: prefersReducedMotion ? { opacity: 1 } : { opacity: 0, y: 28, rotate: -3 },
                          whileInView: { opacity: 1, y: 0, rotate: 0 },
                          viewport: viewportOnce,
                          transition: { duration: 0.62, ease: bulletEase },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-[240px] sm:w-[285px] rounded-[2.5rem] border-[7px] border-border bg-muted/50 p-2.5 shadow-xl ring-1 ring-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative aspect-[9/19] overflow-hidden rounded-[2rem] bg-card", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-7 items-center justify-center pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1 w-10 rounded-full bg-muted-foreground/35" }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 pt-2", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/25 bg-primary/10 p-3", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] uppercase tracking-[0.18em] text-primary", children: "White Label" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-bold text-foreground", children: "TuMarca Assistant" }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-[11px] text-muted-foreground", children: "Lead cualificado en 43s" })
                              ] }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-2 px-3 pb-4 pt-3", style: { minHeight: "160px" }, children: /* @__PURE__ */ jsxRuntimeExports.jsx(LiveChatWL, {}) })
                            ] }) }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -right-5 top-10 rounded-xl border border-border bg-card/90 px-3 py-2 text-xs text-foreground shadow-lg backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "+31% demo bookings" }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute -left-4 bottom-10 rounded-xl border border-border bg-card/90 px-3 py-2 text-xs text-foreground shadow-lg backdrop-blur", children: /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "font-semibold", children: "Marca 100% personalizada" }) })
                          ]
                        }
                      )
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: viewportOnce,
              transition: { duration: 0.5 },
              className: "mt-8 flex flex-wrap items-center justify-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#contacto",
                    className: "cta-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground",
                    children: [
                      "Quiero mi app white label",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4", "aria-hidden": true })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#planes",
                    className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/45 hover:text-primary",
                    children: [
                      "Ver opciones enterprise",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4", "aria-hidden": true })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
const SECTORES = [
  {
    id: "inmobiliaria",
    icono: Building2,
    sector: "Inmobiliarias y Agencias",
    tagline: "Pierde cero compradores por respuesta tardía.",
    descripcion: "El 78% de los compradores elige al agente que responde primero. Con Metatok, tu agencia responde en segundos, cualifica la intención y agenda visitas mientras tu equipo trabaja en otras captaciones.",
    actual: [
      "Leads sin respuesta durante horas (o días)",
      "Visitas canceladas por falta de confirmación",
      "Agentes perdiendo tiempo con prospectos fríos",
      "CRM con datos desactualizados o incompletos"
    ],
    mejoras: [
      "Respuesta automática en <60 segundos por WhatsApp o web",
      "Cualificación: zona, presupuesto y urgencia antes de la visita",
      "Agenda de visitas gestionada por IA sin intervención humana",
      "CRM actualizado al instante con cada conversación"
    ],
    resultados: [
      { kpi: "+47%", desc: "visitas agendadas" },
      { kpi: "−65%", desc: "tiempo de respuesta" },
      { kpi: "3×", desc: "más leads cualificados" }
    ],
    avanzado: [
      "Voicebot para llamadas entrantes fuera de horario",
      "Secuencias de nutrición por WhatsApp hasta el cierre",
      "Dashboard de rendimiento por agente y zona"
    ]
  },
  {
    id: "clinicas",
    icono: HeartPulse,
    sector: "Clínicas y Salud",
    tagline: "Llena tu agenda sin llamadas manuales.",
    descripcion: "Las clínicas pierden hasta un 40% de sus citas por cancelaciones sin seguimiento o pacientes que no llegan. Metatok automatiza la captación, confirma citas y reduce las ausencias.",
    actual: [
      "Pacientes que llaman y no encuentran respuesta",
      "Cancelaciones sin aviso y huecos en la agenda",
      "Recepcionistas dedicando tiempo a recordatorios",
      "Sin seguimiento post-consulta para fidelizar"
    ],
    mejoras: [
      "Chat web + WhatsApp que agenda 24/7 sin esperas",
      "Confirmación automática + recordatorio 24h antes",
      "Secuencia de seguimiento post-consulta personalizada",
      "Reducción de ausencias con recordatorios inteligentes"
    ],
    resultados: [
      { kpi: "−40%", desc: "pacientes ausentes" },
      { kpi: "+35%", desc: "nuevas citas/mes" },
      { kpi: "20h", desc: "ahorradas en recepción/sem." }
    ],
    avanzado: [
      "Encuestas de satisfacción automatizadas post-visita",
      "Reactivación de pacientes inactivos por IA",
      "Integración con software de gestión clínica (HIS)"
    ]
  },
  {
    id: "ecommerce",
    icono: ShoppingBag,
    sector: "E-commerce y Retail",
    tagline: "Recupera carritos y convierte visitantes en compradores.",
    descripcion: "El 70% de los carritos se abandonan. Metatok activa secuencias automáticas de recuperación, resuelve dudas de compra en tiempo real y convierte dudas en pedidos sin necesidad de un equipo de soporte grande.",
    actual: [
      "Alto porcentaje de abandono de carrito sin recuperación",
      "Consultas de producto sin respuesta inmediata",
      "Soporte saturado con dudas repetitivas",
      "Sin segmentación automática de clientes"
    ],
    mejoras: [
      "Agente IA resuelve dudas de producto en tiempo real",
      "Secuencia automática de recuperación de carrito",
      "Upsell y cross-sell inteligente según historial",
      "Cualificación y segmentación de leads para campañas"
    ],
    resultados: [
      { kpi: "+28%", desc: "recuperación de carrito" },
      { kpi: "+22%", desc: "ticket medio por upsell" },
      { kpi: "−50%", desc: "carga de soporte" }
    ],
    avanzado: [
      "Agente de posventa para fidelización y recompra",
      "Integración con Shopify, WooCommerce, Magento",
      "Reportes de conversación para optimizar catálogo"
    ]
  },
  {
    id: "agencias",
    icono: UsersRound,
    sector: "Agencias y Consultoras",
    tagline: "Escala tu captación sin escalar tu equipo.",
    descripcion: "Las agencias pierden contratos porque los leads no reciben atención rápida o el proceso de onboarding es lento. Metatok automatiza la primera fase del funnel para que tu equipo cierre, no persiga.",
    actual: [
      "Leads de campañas sin seguimiento inmediato",
      "Proceso de onboarding manual y lento",
      "Comerciales dedicando tiempo a prospectos no cualificados",
      "Sin métricas claras de conversión por canal"
    ],
    mejoras: [
      "Lead seguido en <2 minutos tras completar el formulario",
      "Cualificación de presupuesto, urgencia y fit antes de la llamada",
      "Onboarding inicial automatizado con documentación",
      "Dashboard de conversión por canal y campaña"
    ],
    resultados: [
      { kpi: "+60%", desc: "conversión de leads a reunión" },
      { kpi: "−70%", desc: "tiempo de cualificación manual" },
      { kpi: "4×", desc: "más propuestas enviadas/mes" }
    ],
    avanzado: [
      "Agente de nutrición para leads fríos a largo plazo",
      "Integración con CRM propio o HubSpot/Salesforce",
      "Reporte semanal automático al equipo comercial"
    ]
  },
  {
    id: "despachos",
    icono: BriefcaseBusiness,
    sector: "Despachos Profesionales",
    tagline: "Convierte consultas en clientes sin perder tiempo en pre-filtros.",
    descripcion: "Despachos legales, fiscales y laborales pierden oportunidades por respuestas tardias o por dedicar horas a consultas no cualificadas. MetaTok filtra, prioriza y agenda solo los casos con alto encaje.",
    actual: [
      "Consultas iniciales por email o WhatsApp sin seguimiento rapido",
      "Tiempo del equipo senior invertido en leads sin potencial",
      "Informacion inicial incompleta antes de la primera reunion",
      "Falta de trazabilidad comercial por area o tipo de caso"
    ],
    mejoras: [
      "Respuesta automatica en minutos con captacion estructurada",
      "Pre-cualificacion por urgencia, especialidad y presupuesto",
      "Agenda automatica con envio de documentacion previa",
      "CRM y pipeline actualizados por tipo de servicio"
    ],
    resultados: [
      { kpi: "+52%", desc: "consultas cualificadas" },
      { kpi: "−58%", desc: "tiempo en pre-filtro" },
      { kpi: "2.6×", desc: "reuniones con alto fit" }
    ],
    avanzado: [
      "Rutas de atencion por area: mercantil, laboral, fiscal, civil",
      "Recordatorios automaticos de hitos y documentacion",
      "Panel de conversion por fuente y especialidad"
    ]
  },
  {
    id: "hoteles",
    icono: Hotel,
    sector: "Hoteles y Hospedaje",
    tagline: "Más reservas directas, menos fricción y mejor experiencia 24/7.",
    descripcion: "Hoteles y apartahoteles compiten por velocidad de respuesta y personalizacion. MetaTok atiende consultas de disponibilidad, tarifas y servicios en tiempo real para aumentar reservas directas y reducir carga operativa.",
    actual: [
      "Consultas de disponibilidad sin respuesta inmediata",
      "Dependencia excesiva de OTAs para cerrar reservas",
      "Recepcion saturada con preguntas repetitivas",
      "Poca automatizacion en upsell y pre-estadia"
    ],
    mejoras: [
      "Asistente IA multicanal para web, WhatsApp e Instagram",
      "Cotizacion automatica por fechas, tipo de habitacion y ocupacion",
      "Secuencias de pre-check-in y upsell de servicios",
      "Integracion con PMS/CRM para seguimiento unificado"
    ],
    resultados: [
      { kpi: "+34%", desc: "reservas directas" },
      { kpi: "−46%", desc: "carga en recepcion" },
      { kpi: "+21%", desc: "ticket medio por upsell" }
    ],
    avanzado: [
      "Bot de concierge para dudas durante la estancia",
      "Campanas automaticas para repeticion y temporada baja",
      "Panel de rendimiento por canal y tipo de reserva"
    ]
  }
];
function Sectores() {
  const [activo, setActivo] = reactExports.useState(0);
  const sectorActivo = SECTORES[activo];
  const TabIconActivo = sectorActivo.icono;
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "sectores",
      className: "py-8 md:py-12 border-y border-border bg-[var(--color-surface)]",
      "aria-labelledby": "sectores-heading",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: viewportOnce,
            variants: stagger,
            className: "max-w-3xl mb-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: fadeUp, className: "text-xs uppercase tracking-widest text-primary font-semibold", children: "Por sector" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h2,
                {
                  id: "sectores-heading",
                  variants: fadeUp,
                  className: "mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight",
                  children: [
                    "Tu sector, tus resultados,",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "tu solución a medida" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-2 text-base text-muted-foreground leading-snug", children: "No vendemos tecnología genérica. Diseñamos la automatización exacta que tu tipo de negocio necesita para convertir más." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-wrap gap-2.5 mb-8", children: SECTORES.map((s, i) => {
          const TabIc = s.icono;
          const isActive = i === activo;
          return /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "button",
            {
              id: `tab-${s.id}`,
              type: "button",
              onClick: () => setActivo(i),
              className: [
                "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                isActive ? "border-primary bg-primary/10 text-primary" : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground"
              ].join(" "),
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(TabIc, { className: "h-4 w-4 shrink-0", "aria-hidden": true }),
                s.sector
              ]
            },
            s.id
          );
        }) }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: { opacity: 0, y: 12 },
            animate: { opacity: 1, y: 0 },
            transition: { duration: 0.22, ease: "easeOut" },
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-5 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/15", children: /* @__PURE__ */ jsxRuntimeExports.jsx(TabIconActivo, { className: "h-6 w-6 text-primary", "aria-hidden": true }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-xs font-semibold uppercase tracking-widest text-primary mb-1", children: sectorActivo.sector }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-xl font-bold text-foreground", children: sectorActivo.tagline }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl", children: sectorActivo.descripcion })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-3 gap-5 mb-5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-destructive/20 bg-card p-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5 text-destructive/70", "aria-hidden": true }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Estado actual" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: sectorActivo.actual.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm text-muted-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 text-destructive/50 mt-0.5 shrink-0", "aria-hidden": true }),
                    item
                  ] }, item)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-2xl border border-primary/30 bg-card p-6 relative overflow-hidden", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "div",
                    {
                      "aria-hidden": true,
                      className: "absolute inset-0 -z-10 opacity-[0.05]",
                      style: { backgroundImage: "radial-gradient(circle at 80% 20%, var(--color-primary) 0, transparent 70%)" }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary", "aria-hidden": true }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Con Metatok" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-3", children: sectorActivo.mejoras.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2.5 text-sm text-foreground", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary mt-0.5 shrink-0", "aria-hidden": true }),
                    item
                  ] }, item)) })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4 flex flex-col", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(TrendingUp, { className: "h-5 w-5 text-accent", "aria-hidden": true }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Resultados medios" })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex flex-col gap-4 flex-1", children: sectorActivo.resultados.map((r) => /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-4 rounded-xl border border-border bg-background/50 px-4 py-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-2xl font-extrabold text-primary shrink-0", children: r.kpi }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm text-muted-foreground", children: r.desc })
                  ] }, r.kpi)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-[10px] text-muted-foreground/70", children: "*Promedios en clientes tras 60 días de despliegue." })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2 mb-4", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-accent shrink-0", "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-semibold text-foreground", children: "Opciones adicionales para escalar" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-wrap gap-3", children: sectorActivo.avanzado.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "li",
                  {
                    className: "inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-3 w-3 shrink-0", "aria-hidden": true }),
                      item
                    ]
                  },
                  item
                )) })
              ] })
            ]
          },
          `panel-${activo}`
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: viewportOnce,
            variants: fadeUp,
            className: "mt-6 text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#auditoria",
                  className: "inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90 cta-glow transition-all duration-300 group",
                  children: [
                    "Quiero una solución para mi sector",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-3 text-xs text-muted-foreground", children: "Auditoría gratuita · Sin compromiso · Respuesta en menos de 24 h" })
            ]
          }
        )
      ] })
    }
  );
}
function onVisible(el, cb, threshold = 0.15) {
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
function useFadeUp(delay = 0) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateY(32px)";
    let io;
    import("../_libs/animejs.mjs").then(({ animate }) => {
      io = onVisible(el, () => {
        animate(el, {
          opacity: [0, 1],
          translateY: [32, 0],
          duration: 700,
          delay,
          ease: "outExpo"
        });
      });
    });
    return () => io?.disconnect();
  }, [delay]);
  return ref;
}
function useSlideInLeft(delay = 0) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateX(-48px)";
    let io;
    import("../_libs/animejs.mjs").then(({ animate }) => {
      io = onVisible(el, () => {
        animate(el, {
          opacity: [0, 1],
          translateX: [-48, 0],
          duration: 800,
          delay,
          ease: "outExpo"
        });
      });
    });
    return () => io?.disconnect();
  }, [delay]);
  return ref;
}
function useSlideInRight(delay = 0) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    el.style.opacity = "0";
    el.style.transform = "translateX(48px)";
    let io;
    import("../_libs/animejs.mjs").then(({ animate }) => {
      io = onVisible(el, () => {
        animate(el, {
          opacity: [0, 1],
          translateX: [48, 0],
          duration: 800,
          delay,
          ease: "outExpo"
        });
      });
    });
    return () => io?.disconnect();
  }, [delay]);
  return ref;
}
function useStaggerChildren(selector = ":scope > *", baseDelay = 0, staggerMs = 80) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const children = Array.from(el.querySelectorAll(selector));
    if (!children.length) return;
    children.forEach((c) => {
      c.style.opacity = "0";
      c.style.transform = "translateY(28px)";
    });
    let io;
    import("../_libs/animejs.mjs").then(({ animate, stagger: stagger2 }) => {
      io = onVisible(el, () => {
        animate(children, {
          opacity: [0, 1],
          translateY: [28, 0],
          duration: 600,
          delay: stagger2(staggerMs, { start: baseDelay }),
          ease: "outExpo"
        });
      });
    });
    return () => io?.disconnect();
  }, [selector, baseDelay, staggerMs]);
  return ref;
}
function useTypingEffect(delay = 400) {
  const ref = reactExports.useRef(null);
  reactExports.useEffect(() => {
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
function asRef(ref) {
  return ref;
}
function Servicios() {
  const titleRef = useTypingEffect(200);
  const headerRef = useSlideInLeft(0);
  const gridRef = useStaggerChildren(":scope > article", 100, 90);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "servicios",
      className: "relative overflow-hidden py-16 md:py-24",
      "aria-labelledby": "servicios-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_15%_15%,color-mix(in_oklab,var(--color-primary)_16%,transparent)_0%,transparent_45%),radial-gradient(circle_at_85%_85%,color-mix(in_oklab,var(--color-accent)_18%,transparent)_0%,transparent_45%)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 opacity-20",
            style: {
              backgroundImage: "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 7%, transparent) 1px, transparent 1px)",
              backgroundSize: "50px 50px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: asRef(headerRef), className: "mx-auto mb-10 max-w-3xl text-center md:mb-14", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5", "aria-hidden": true }),
              "Servicios"
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "h2",
              {
                id: "servicios-heading",
                ref: asRef(titleRef),
                className: "mt-4 text-3xl md:text-5xl font-black text-foreground tracking-tight",
                children: [
                  "Todo lo que necesitas para convertir",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary via-accent to-primary bg-clip-text text-transparent", children: "mas sin trabajar mas" })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground", children: "Cada modulo esta pensado para integrarse en tu negocio y operar de forma autonoma desde el dia uno, con foco real en pipeline y ventas." }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center justify-center gap-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-foreground", children: "+400% tasa de respuesta" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-foreground", children: "24/7 operativo" }),
              /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-border bg-card/70 px-4 py-1.5 text-xs font-semibold text-foreground", children: "Integracion omnicanal" })
            ] })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "div",
            {
              ref: asRef(gridRef),
              className: "grid grid-cols-1 gap-6 md:grid-cols-2 xl:grid-cols-3",
              children: servicios.map((s, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "article",
                {
                  className: [
                    "group relative flex flex-col overflow-hidden rounded-3xl border bg-card/65 p-5 backdrop-blur-sm transition-all duration-300 md:p-6",
                    "hover:-translate-y-1 hover:shadow-[0_28px_60px_-38px_var(--color-primary)]",
                    s.destacado ? "border-primary/40 shadow-[0_0_0_1px_color-mix(in_oklab,var(--color-primary)_30%,transparent)]" : "border-border/80"
                  ].join(" "),
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        "aria-hidden": true,
                        className: "pointer-events-none absolute inset-0 opacity-0 transition-opacity duration-300 group-hover:opacity-100 bg-gradient-to-br from-primary/10 via-transparent to-accent/10"
                      }
                    ),
                    s.image && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mb-5 -mt-2 -mx-2 overflow-hidden rounded-2xl border border-border/60 bg-background/40", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pointer-events-none absolute inset-0 z-10 bg-gradient-to-t from-background/20 to-transparent" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "img",
                        {
                          src: s.image,
                          alt: s.titulo,
                          className: "h-44 w-full object-cover opacity-90 transition-transform duration-500 group-hover:scale-[1.04] group-hover:opacity-100"
                        }
                      )
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 flex items-start justify-between gap-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(s.icon, { className: "h-5 w-5", "aria-hidden": true }) }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full border border-border/70 bg-background/55 px-2.5 py-1 text-[10px] font-semibold uppercase tracking-[0.14em] text-muted-foreground", children: [
                        "Servicio ",
                        String(index + 1).padStart(2, "0")
                      ] })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative z-10 mt-5 text-lg font-bold text-foreground", children: s.titulo }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative z-10 mt-2 flex-1 text-sm leading-relaxed text-muted-foreground", children: s.descripcion }),
                    s.beneficio && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-5 flex items-start gap-2 rounded-xl border border-primary/25 bg-primary/10 px-3 py-2.5", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 text-primary mt-0.5 shrink-0", "aria-hidden": true }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-medium text-primary leading-snug", children: s.beneficio })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative z-10 mt-5 flex items-center justify-between border-t border-border/70 pt-4", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold uppercase tracking-[0.12em] text-muted-foreground", children: "Activacion inmediata" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1 text-xs font-semibold text-primary", children: [
                        "Ver mas",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-3.5 w-3.5", "aria-hidden": true })
                      ] })
                    ] })
                  ]
                },
                s.titulo
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "mx-auto mt-10 max-w-4xl rounded-3xl border border-border/80 bg-card/60 p-5 md:p-6 backdrop-blur-sm",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-col gap-4 md:flex-row md:items-center md:justify-between", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-[0.14em] text-[var(--luxury-gold)]", children: "Stack completo" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-2 text-xl font-black text-foreground md:text-2xl", children: "Disena tu arquitectura comercial en una sola llamada" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: "Te mostramos que modulos necesitas primero, cuanto impacto esperar y como desplegarlo sin friccion." })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#contacto",
                    className: "cta-glow inline-flex items-center gap-2 self-start rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground",
                    children: [
                      "Solicitar demo estrategica",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4", "aria-hidden": true })
                    ]
                  }
                )
              ] })
            }
          )
        ] })
      ]
    }
  );
}
const features = [
  {
    name: "Calidad de Respuesta",
    old: "Estática y basada en botones (Árbol de decisiones)",
    new: "Fluida, humana y persuasiva (IA Generativa)"
  },
  {
    name: "Integración",
    old: "Limitada o requiere Zapier complejo",
    new: "Nativa con CRMs, Apps y Sector Público"
  },
  {
    name: "Objetivo Principal",
    old: "Dar información y derivar a un humano",
    new: "Superar objeciones y cerrar la venta o cita"
  },
  {
    name: "Configuración",
    old: "Meses mapeando flujos interminables",
    new: "En minutos, entrenado con tus propios documentos"
  },
  {
    name: "Soporte",
    old: "Sistema de tickets básico",
    new: "Equipo de éxito dedicado y optimización continua"
  }
];
function ComparativaMetaTok() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "comparativa",
      className: "relative py-20 md:py-32 bg-background overflow-hidden border-t border-border",
      "aria-labelledby": "comparativa-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(circle at 50% 100%, color-mix(in oklab, var(--color-primary) 8%, transparent) 0%, transparent 60%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 opacity-[0.06] dark:opacity-[0.03] pointer-events-none",
            style: { backgroundImage: "linear-gradient(to right, var(--color-foreground) 1px, transparent 1px), linear-gradient(to bottom, var(--color-foreground) 1px, transparent 1px)", backgroundSize: "40px 40px" }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt relative z-10", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "text-center max-w-3xl mx-auto mb-16 md:mb-20",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "inline-flex items-center gap-2 rounded-full border border-primary/20 bg-primary/10 px-4 py-1.5 text-xs font-semibold text-primary uppercase tracking-widest mb-6 shadow-[0_0_20px_-5px_var(--color-primary)]", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-3.5 w-3.5" }),
                  "La Decisión"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h2,
                  {
                    id: "comparativa-heading",
                    variants: fadeUp,
                    className: "text-4xl md:text-5xl font-black text-foreground tracking-tight leading-tight",
                    children: [
                      "MetaTok vs.",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/60", children: "chatbots tradicionales" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-6 text-lg text-muted-foreground leading-relaxed max-w-2xl mx-auto", children: "Un árbol de decisiones aburrido frente a una IA generativa orientada a conversión. La diferencia entre perder un lead y cerrar una venta." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "max-w-5xl mx-auto relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-4 mb-4 items-end hidden md:grid px-6", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-muted-foreground uppercase tracking-wider pb-4", children: "Característica" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-sm font-bold text-muted-foreground uppercase tracking-wider pb-4 text-center", children: "Bot Tradicional" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-t from-primary/10 to-primary/5 border-t border-x border-primary/20 rounded-t-2xl" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative flex justify-center py-4", children: /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex items-center justify-center rounded-full border border-primary/40 bg-primary/20 px-4 py-1.5 text-sm font-black uppercase tracking-widest text-primary shadow-[0_0_15px_var(--color-primary)]", children: "MetaTok AI" }) })
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col gap-3 md:gap-2 relative", children: [
                  features.map((row, index) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.div,
                    {
                      variants: fadeUp,
                      className: "grid grid-cols-1 md:grid-cols-[1.5fr_1fr_1.5fr] gap-0 md:gap-4 items-center group relative",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden text-lg font-black text-foreground mt-6 mb-2 px-4", children: row.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:flex bg-card border border-border/50 rounded-2xl p-5 md:p-6 h-full items-center text-foreground font-semibold transition-colors group-hover:border-border group-hover:bg-muted/30 z-10", children: row.name }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "bg-card border border-border/50 md:rounded-2xl p-5 md:p-6 h-full flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 text-muted-foreground text-sm transition-colors group-hover:border-border group-hover:bg-muted/30 z-10 mx-4 md:mx-0 rounded-t-2xl md:rounded-t-none", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden text-xs font-bold uppercase tracking-wider text-muted-foreground", children: "Bot Tradicional" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 w-full", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-destructive/10 text-destructive", children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "w-4 h-4", strokeWidth: 3 }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: row.old })
                          ] })
                        ] }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative p-5 md:p-6 h-full flex flex-col md:flex-row items-start md:items-center gap-3 md:gap-4 text-foreground text-sm font-medium z-10 mx-4 md:mx-0 rounded-b-2xl md:rounded-b-none md:rounded-2xl overflow-hidden group/mt", children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-primary/10 border border-primary/30 md:border-transparent md:border-y md:border-primary/20 md:group-hover:bg-primary/20 transition-colors" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute inset-y-0 left-0 w-px bg-primary/20" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute inset-y-0 right-0 w-px bg-primary/20" }),
                          index === features.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute inset-x-0 bottom-0 h-px bg-primary/20" }),
                          index === features.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute bottom-0 left-0 right-0 h-4 border-b border-x border-primary/20 rounded-b-2xl pointer-events-none" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "md:hidden text-xs font-black text-primary uppercase tracking-wider relative", children: "MetaTok AI" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-3 relative w-full", children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative shrink-0 flex items-center justify-center w-6 h-6 rounded-full bg-accent text-accent-foreground shadow-[0_0_10px_var(--color-accent)] group-hover/mt:scale-110 transition-transform", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "w-4 h-4", strokeWidth: 3 }) }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative font-bold text-foreground", children: row.new })
                          ] })
                        ] })
                      ]
                    },
                    row.name
                  )),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "hidden md:block absolute bottom-0 right-0 w-[calc(37.5%-8px)] h-4 border-b border-x border-primary/20 rounded-b-2xl pointer-events-none z-0" })
                ] })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const situacionActual = [
  "Leads que no reciben respuesta en menos de 5 minutos",
  "Tu equipo pierde horas en prospectos que nunca comprarán",
  "Citas que se pierden por falta de seguimiento",
  "CRM desactualizado con datos duplicados o incompletos",
  "Sin presencia activa fuera del horario comercial"
];
const conMetatok = [
  "Respuesta inmediata a cada lead, 24/7, en todos tus canales",
  "Solo hablas con prospectos listos para comprar",
  "Agendamiento automático con confirmación y recordatorios",
  "CRM actualizado en tiempo real, sin intervención humana",
  "Tu negocio capta y cualifica incluso mientras duermes"
];
function DiagnosticoCTA() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "diagnostico",
      className: "relative py-16 md:py-24 border-y border-border overflow-hidden",
      "aria-labelledby": "diagnostico-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 70% 50% at 50% 50%, color-mix(in oklab, var(--color-primary) 5%, transparent) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 hero-grid-3d opacity-20 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "max-w-3xl mx-auto text-center mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: fadeUp, className: "text-xs uppercase tracking-widest text-primary font-semibold", children: "Antes y después" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h2,
                  {
                    id: "diagnostico-heading",
                    variants: fadeUp,
                    className: "mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight",
                    children: [
                      "¿Reconoces la situación",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", children: "de tu negocio hoy?" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.p, { variants: fadeUp, className: "mt-4 text-muted-foreground text-base leading-relaxed", children: [
                  "La mayoría de negocios pierde entre un",
                  " ",
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-foreground font-semibold", children: "40% y un 60%" }),
                  " de sus leads por falta de respuesta rápida y seguimiento sistemático."
                ] })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "grid md:grid-cols-2 gap-5 max-w-5xl mx-auto",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fadeUp,
                    className: "relative rounded-2xl border border-destructive/25 bg-card/60 backdrop-blur-sm p-6 overflow-hidden",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          "aria-hidden": true,
                          className: "absolute inset-0 rounded-2xl pointer-events-none",
                          style: {
                            background: "radial-gradient(ellipse at 50% 0%, rgba(239,68,68,0.06) 0%, transparent 65%)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3 mb-5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-destructive/10 border border-destructive/30", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-5 w-5 text-destructive", "aria-hidden": true }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-destructive/60", children: "Situación actual" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Sin automatización" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "relative space-y-3", children: situacionActual.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.li,
                        {
                          initial: { opacity: 0, x: -10 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: viewportOnce,
                          transition: { delay: i * 0.08 },
                          className: "flex items-start gap-3 text-sm text-muted-foreground",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleX, { className: "h-4 w-4 text-destructive/50 mt-0.5 shrink-0", "aria-hidden": true }),
                            item
                          ]
                        },
                        item
                      )) })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.div,
                  {
                    variants: fadeUp,
                    className: "relative rounded-2xl border border-primary/30 bg-card/60 backdrop-blur-sm p-6 overflow-hidden\n                       shadow-[0_0_40px_-15px_var(--color-primary)]",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(
                        "div",
                        {
                          "aria-hidden": true,
                          className: "absolute inset-0 rounded-2xl pointer-events-none",
                          style: {
                            background: "radial-gradient(ellipse at 50% 0%, color-mix(in oklab, var(--color-primary) 10%, transparent) 0%, transparent 65%)"
                          }
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative flex items-center gap-3 mb-5", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex h-10 w-10 items-center justify-center rounded-full bg-primary/15 border border-primary/40 shadow-[0_0_12px_-3px_var(--color-primary)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-5 w-5 text-primary", "aria-hidden": true }) }),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[10px] font-bold uppercase tracking-widest text-primary/70", children: "Con Metatok" }),
                          /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "text-base font-bold text-foreground", children: "Automatización activa" })
                        ] })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "relative space-y-3", children: conMetatok.map((item, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        motion.li,
                        {
                          initial: { opacity: 0, x: 10 },
                          whileInView: { opacity: 1, x: 0 },
                          viewport: viewportOnce,
                          transition: { delay: i * 0.08 },
                          className: "flex items-start gap-3 text-sm text-foreground/90",
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary mt-0.5 shrink-0", "aria-hidden": true }),
                            item
                          ]
                        },
                        item
                      )) })
                    ]
                  }
                )
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: viewportOnce,
              transition: { delay: 0.5 },
              className: "mt-12 text-center",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#auditoria",
                    className: "group inline-flex items-center gap-3 rounded-xl bg-primary px-7 py-4 text-sm font-bold text-primary-foreground cta-glow transition-all duration-300 relative overflow-hidden",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute inset-0 bg-gradient-to-r from-primary via-[oklch(0.55_0.23_280)] to-accent opacity-0 group-hover:opacity-100 transition-opacity duration-300" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "relative h-5 w-5", "aria-hidden": true }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "relative", children: "Deja de perder leads: auditoría gratuita en 24 h" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "relative h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-xs text-muted-foreground", children: "Sin compromiso · Sin permanencia · Respuesta en menos de 24 h" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const tracks = [
  {
    icon: BookOpenCheck,
    title: "Playbooks comerciales",
    text: "Guiones, objeciones y secuencias listas para aplicar en campo."
  },
  {
    icon: Megaphone,
    title: "Marketing de guerrilla",
    text: "Campanas, contenido y posicionamiento para acelerar captacion."
  },
  {
    icon: Rocket,
    title: "Escalado operativo",
    text: "Rituales y metricas para crecer sin perder conversion ni calidad."
  }
];
function MetaTokAcademy() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "academy",
      className: "relative overflow-hidden border-y border-border bg-[var(--color-surface)] py-16 md:py-24",
      "aria-labelledby": "academy-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_12%,color-mix(in_oklab,var(--color-primary)_16%,transparent)_0%,transparent_45%),radial-gradient(circle_at_88%_82%,color-mix(in_oklab,var(--color-accent)_18%,transparent)_0%,transparent_45%)]"
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "pointer-events-none absolute inset-0 opacity-25",
            style: {
              backgroundImage: "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 7%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 7%, transparent) 1px, transparent 1px)",
              backgroundSize: "48px 48px"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt relative", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "mx-auto mb-10 max-w-3xl text-center md:mb-12",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "flex flex-wrap items-center justify-center gap-2", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-[var(--luxury-gold)]/35 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-[var(--luxury-gold)]", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-3.5 w-3.5", "aria-hidden": true }),
                    "MetaTok Academy"
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-muted-foreground/50 text-xs", children: "·" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(BadgeCheck, { className: "h-3.5 w-3.5", "aria-hidden": true }),
                    "MetaTok Masters"
                  ] })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.h2,
                  {
                    id: "academy-heading",
                    variants: fadeUp,
                    className: "mt-4 text-3xl font-black tracking-tight text-foreground md:text-5xl",
                    children: "Formacion para vender mejor y liderar tu categoria"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mx-auto mt-5 max-w-2xl text-base leading-relaxed text-muted-foreground", children: "No solo entregamos software. Entregamos metodologia comercial, acompanamiento y entrenamiento continuo para convertir tu marca en referencia de mercado." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "mb-8 grid gap-5 md:grid-cols-3 md:gap-6",
              children: tracks.map((track) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.article,
                {
                  variants: fadeUp,
                  className: "group rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm transition-all duration-300 hover:-translate-y-1 hover:border-primary/45",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-10 w-10 items-center justify-center rounded-xl border border-primary/30 bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(track.icon, { className: "h-5 w-5", "aria-hidden": true }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "mt-4 text-base font-bold text-foreground", children: track.title }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm leading-relaxed text-muted-foreground", children: track.text })
                  ]
                },
                track.title
              ))
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid items-stretch gap-6 lg:grid-cols-[1.1fr_0.9fr] lg:gap-8", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: "hidden",
                whileInView: "show",
                viewport: viewportOnce,
                variants: stagger,
                className: "relative overflow-hidden rounded-3xl border border-border/80 bg-card/60 p-6 md:p-8 backdrop-blur-sm",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "pointer-events-none absolute inset-0 bg-gradient-to-br from-primary/10 via-transparent to-accent/10" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "relative text-sm font-semibold uppercase tracking-[0.15em] text-[var(--luxury-gold)]", children: "Ruta de acompanamiento" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(motion.h3, { variants: fadeUp, className: "relative mt-3 text-2xl font-black text-foreground", children: "Del onboarding al cierre repetible" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "relative mt-3 text-sm leading-relaxed text-muted-foreground", children: "Sesiones en vivo, talleres tacticos y soporte de expertos para que tu equipo comercial implemente rapido, mida mejor y escale su tasa de cierre de forma sostenible." }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.ul, { variants: fadeUp, className: "relative mt-6 space-y-3.5 text-sm text-foreground/90", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 rounded-xl border border-border/70 bg-background/50 p-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary", "aria-hidden": true }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Webinars semanales, certificaciones y guias por vertical para equipos de ventas." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 rounded-xl border border-border/70 bg-background/50 p-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary", "aria-hidden": true }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Framework de conversion con IA: prospeccion, cualificacion, objeciones y cierre." })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex gap-3 rounded-xl border border-border/70 bg-background/50 p-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "mt-0.5 h-5 w-5 shrink-0 text-primary", "aria-hidden": true }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: "Mentoria en posicionamiento de marca para vender metodo, no solo tecnologia." })
                    ] })
                  ] })
                ]
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                initial: "hidden",
                whileInView: "show",
                viewport: viewportOnce,
                variants: fadeUp,
                className: "relative overflow-hidden rounded-3xl border border-border/80 bg-card/55 p-6 md:p-7 backdrop-blur-sm",
                "aria-hidden": true,
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -right-8 top-10 h-28 w-28 rounded-full bg-accent/22 blur-3xl" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -left-8 bottom-12 h-28 w-28 rounded-full bg-primary/22 blur-3xl" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative rounded-2xl border border-border/75 bg-background/80 p-4", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mb-4 flex items-center justify-between", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] font-semibold uppercase tracking-[0.14em] text-primary", children: "Academy Dashboard" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "rounded-full border border-primary/35 bg-primary/10 px-2 py-1 text-[10px] font-semibold text-primary", children: "Cohorte activa" })
                    ] }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-3", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/60 p-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Modulo 01" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-foreground", children: "Arquitectura comercial con IA" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 rounded-full bg-border/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-[82%] rounded-full bg-gradient-to-r from-primary to-accent" }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/60 p-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Modulo 02" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-foreground", children: "Guiones de cierre por nicho" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 rounded-full bg-border/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-[64%] rounded-full bg-gradient-to-r from-primary to-accent" }) })
                      ] }),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card/60 p-3", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Modulo 03" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1 text-sm font-semibold text-foreground", children: "Escalado y liderazgo de equipo" }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-2 h-1.5 rounded-full bg-border/70", children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "h-1.5 w-[47%] rounded-full bg-gradient-to-r from-primary to-accent" }) })
                      ] })
                    ] })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5 flex items-center gap-3 rounded-2xl border border-border/80 bg-background/75 p-3", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-11 w-11 items-center justify-center rounded-xl border border-[var(--luxury-gold)]/35 bg-primary/10 text-[var(--luxury-gold)]", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Headphones, { className: "h-5 w-5", "aria-hidden": true }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs uppercase tracking-[0.12em] text-muted-foreground", children: "Soporte experto" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-semibold text-foreground", children: "Mentoria directa + playbooks accionables" })
                    ] })
                  ] })
                ]
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: { opacity: 0, y: 10 },
              whileInView: { opacity: 1, y: 0 },
              viewport: viewportOnce,
              transition: { duration: 0.5 },
              className: "mt-8 flex flex-wrap items-center justify-center gap-3",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#contacto",
                    className: "cta-glow inline-flex items-center gap-2 rounded-full bg-primary px-6 py-3 text-sm font-semibold text-primary-foreground",
                    children: [
                      "Quiero entrar a MetaTok Academy",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowUpRight, { className: "h-4 w-4", "aria-hidden": true })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "a",
                  {
                    href: "#planes",
                    className: "inline-flex items-center gap-2 rounded-full border border-border bg-card/70 px-6 py-3 text-sm font-semibold text-foreground transition-colors hover:border-primary/45 hover:text-primary",
                    children: [
                      "Ver planes de acompanamiento",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(GraduationCap, { className: "h-4 w-4", "aria-hidden": true })
                    ]
                  }
                )
              ]
            }
          )
        ] })
      ]
    }
  );
}
const stepColors = [
  { from: "var(--color-primary)", to: "oklch(0.58 0.26 302)" },
  { from: "oklch(0.58 0.26 302)", to: "var(--color-accent)" },
  { from: "var(--color-accent)", to: "oklch(0.52 0.21 264)" },
  { from: "oklch(0.52 0.21 264)", to: "var(--color-primary)" }
];
function Proceso() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "proceso",
      className: "relative py-16 md:py-24 bg-[var(--color-surface)] border-y border-border overflow-hidden",
      "aria-labelledby": "proceso-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "linear-gradient(135deg, color-mix(in oklab, var(--color-primary) 4%, transparent) 0%, transparent 50%, color-mix(in oklab, var(--color-accent) 3%, transparent) 100%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "max-w-2xl mb-16",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: fadeUp, className: "text-xs uppercase tracking-widest text-primary font-semibold", children: "Proceso" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h2,
                  {
                    id: "proceso-heading",
                    variants: fadeUp,
                    className: "mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight",
                    children: [
                      "De la auditoría al sistema activo",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", children: "en 4 pasos" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-4 text-muted-foreground text-base leading-relaxed", children: "Un flujo diseñado para que no tengas que preocuparte de nada técnico. Tu trabajo es recibir los resultados." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.ol,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "grid md:grid-cols-2 lg:grid-cols-4 gap-6 relative",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "li",
                  {
                    "aria-hidden": true,
                    className: "hidden lg:block absolute top-[2.5rem] left-[12.5%] right-[12.5%] h-px pointer-events-none",
                    style: {
                      background: "linear-gradient(to right, var(--color-primary), var(--color-accent), var(--color-primary))",
                      opacity: 0.25
                    }
                  }
                ),
                proceso.map((p, i) => {
                  const col = stepColors[i] ?? stepColors[0];
                  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    motion.li,
                    {
                      variants: fadeUp,
                      className: "relative group",
                      children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "relative z-10 mb-5 inline-flex h-12 w-12 items-center justify-center rounded-full font-black text-base text-white shadow-lg",
                            style: {
                              background: `linear-gradient(135deg, ${col.from}, ${col.to})`,
                              boxShadow: `0 0 20px -5px ${col.from}`
                            },
                            children: [
                              p.numero,
                              i < proceso.length - 1 && /* @__PURE__ */ jsxRuntimeExports.jsx(
                                ArrowRight,
                                {
                                  className: "hidden lg:block absolute -right-8 top-1/2 -translate-y-1/2 h-4 w-4 text-border",
                                  "aria-hidden": true
                                }
                              )
                            ]
                          }
                        ),
                        /* @__PURE__ */ jsxRuntimeExports.jsxs(
                          "div",
                          {
                            className: "rounded-2xl border border-border bg-card/70 backdrop-blur-sm p-5 flex flex-col h-[calc(100%-4.5rem)] relative overflow-hidden\n                             group-hover:border-primary/40 group-hover:shadow-[0_8px_30px_-10px_var(--color-primary)] transition-all duration-300",
                            children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "absolute -bottom-4 -right-2 text-9xl font-black tracking-tighter leading-none select-none pointer-events-none opacity-[0.04]",
                                  style: { color: col.from },
                                  children: p.numero
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx(
                                "div",
                                {
                                  className: "absolute inset-0 rounded-2xl opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none",
                                  style: {
                                    background: `radial-gradient(ellipse at 50% 0%, color-mix(in oklab, ${col.from} 12%, transparent) 0%, transparent 70%)`
                                  }
                                }
                              ),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("h3", { className: "relative text-base font-bold text-foreground", children: p.titulo }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "relative mt-2 text-sm text-muted-foreground leading-relaxed flex-1", children: p.descripcion }),
                              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative mt-5 pt-4 border-t border-border flex items-center gap-2", children: [
                                /* @__PURE__ */ jsxRuntimeExports.jsx(CircleCheck, { className: "h-4 w-4 text-primary shrink-0", "aria-hidden": true }),
                                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs font-semibold text-primary", children: p.resultado })
                              ] })
                            ]
                          }
                        )
                      ]
                    },
                    p.numero
                  );
                })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { opacity: 0, y: 20 },
              whileInView: { opacity: 1, y: 0 },
              viewport: viewportOnce,
              transition: { delay: 0.4 },
              className: "mt-12 text-center",
              children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: "#auditoria",
                  className: "inline-flex items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-7 py-3.5 text-sm font-bold text-primary hover:bg-primary/20 hover:shadow-[0_0_20px_-5px_var(--color-primary)] transition-all duration-300 backdrop-blur-sm",
                  children: [
                    "Quiero empezar con la auditoría gratuita",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4" })
                  ]
                }
              )
            }
          )
        ] })
      ]
    }
  );
}
const channelColors = {
  Web: { from: "oklch(0.52 0.21 264)", to: "oklch(0.58 0.26 302)", glow: "var(--color-primary)" },
  WhatsApp: { from: "oklch(0.60 0.20 155)", to: "oklch(0.65 0.17 145)", glow: "#25d366" },
  Instagram: { from: "oklch(0.68 0.20 330)", to: "oklch(0.60 0.22 20)", glow: "#e1306c" },
  Telegram: { from: "oklch(0.58 0.18 225)", to: "oklch(0.62 0.15 210)", glow: "#229ed9" },
  API: { from: "oklch(0.58 0.26 302)", to: "oklch(0.52 0.21 264)", glow: "var(--color-accent)" }
};
function Canales() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(
    "section",
    {
      id: "canales",
      className: "relative py-16 md:py-24 border-y border-border overflow-hidden",
      "aria-labelledby": "canales-heading",
      children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          "div",
          {
            "aria-hidden": true,
            className: "absolute inset-0 pointer-events-none",
            style: {
              background: "radial-gradient(ellipse 60% 50% at 50% 50%, color-mix(in oklab, var(--color-primary) 5%, transparent) 0%, transparent 70%)"
            }
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { "aria-hidden": true, className: "absolute inset-0 hero-grid-3d opacity-30 pointer-events-none" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.div,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "text-center max-w-2xl mx-auto mb-14",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: fadeUp, className: "text-xs uppercase tracking-widest text-primary font-semibold", children: "Integración omnicanal" }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h2,
                  {
                    id: "canales-heading",
                    variants: fadeUp,
                    className: "mt-3 text-3xl md:text-4xl font-black text-foreground tracking-tight",
                    children: [
                      "Tu IA donde ya están",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "bg-gradient-to-r from-primary to-accent bg-clip-text text-transparent", children: "tus clientes" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-4 text-muted-foreground text-base leading-relaxed", children: "Desplegamos en los canales que tus prospectos ya usan. Sin fricciones, sin cambios de plataforma para ellos." })
              ]
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.ul,
            {
              initial: "hidden",
              whileInView: "show",
              viewport: viewportOnce,
              variants: stagger,
              className: "flex flex-wrap justify-center gap-6 md:gap-10",
              children: canales.map((c, i) => {
                const color = channelColors[c.label] ?? channelColors.Web;
                return /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.li,
                  {
                    variants: fadeUp,
                    className: "group flex flex-col items-center gap-4 cursor-default",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsxs(
                        "div",
                        {
                          className: "channel-orb relative",
                          style: {
                            "--orb-delay": `${i * 0.4}s`,
                            "--orb-glow": color.glow,
                            "--orb-from": color.from,
                            "--orb-to": color.to
                          },
                          children: [
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "channel-orb-ring", "aria-hidden": true }),
                            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "channel-orb-sphere", children: [
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "channel-orb-inner", children: /* @__PURE__ */ jsxRuntimeExports.jsx(c.icon, { className: "h-7 w-7 text-white", "aria-hidden": true }) }),
                              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "channel-orb-shine", "aria-hidden": true })
                            ] }),
                            /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "channel-orb-pulse", "aria-hidden": true })
                          ]
                        }
                      ),
                      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "text-center", children: [
                        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-sm font-bold text-foreground group-hover:text-primary transition-colors duration-300", children: c.label }),
                        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground mt-0.5", children: c.descripcion })
                      ] })
                    ]
                  },
                  c.label
                );
              })
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              initial: { scaleX: 0, opacity: 0 },
              whileInView: { scaleX: 1, opacity: 1 },
              viewport: viewportOnce,
              transition: { duration: 1.2, delay: 0.5 },
              className: "relative mt-12 h-px bg-gradient-to-r from-transparent via-primary/30 to-transparent max-w-2xl mx-auto"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsxs(
            motion.p,
            {
              initial: { opacity: 0 },
              whileInView: { opacity: 1 },
              viewport: viewportOnce,
              transition: { delay: 0.8 },
              className: "mt-6 text-center text-xs text-muted-foreground",
              children: [
                "¿Usas otro canal o sistema interno?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contacto", className: "text-primary hover:underline font-semibold", children: "Consúltanos →" })
              ]
            }
          )
        ] })
      ]
    }
  );
}
const billingConfig = {
  mensual: { label: "Mensual", suffix: "/mes", savingLabel: null },
  trimestral: { label: "Trimestral", suffix: "/trimestre", savingLabel: "Ahorra ~16%" },
  anual: { label: "Anual", suffix: "/año", savingLabel: "Ahorra ~29%" }
};
const planes = [
  {
    name: "Starter",
    tagline: "Ideal para equipos pequeños que quieren empezar con IA sin riesgo.",
    price: { mensual: "79", trimestral: "199", anual: "679" },
    features: [
      "1 canal integrado (Web o WhatsApp)",
      "Asistente IA básico con NLP",
      "Hasta 500 conversaciones/mes",
      "Panel de control básico",
      "Cualificación automática de leads",
      "Soporte por email"
    ],
    highlighted: false,
    cta: "Iniciar ahora",
    href: "#contacto"
  },
  {
    name: "Business",
    tagline: "Para empresas que quieren automatización total y no perder un solo lead.",
    price: { mensual: "239", trimestral: "629", anual: "2.149" },
    features: [
      "Hasta 3 canales integrados",
      "Chatbots y voicebots premium",
      "Seguimiento y scoring automático",
      "Integración CRM bidireccional",
      "Agendamiento automático con recordatorios",
      "Flow-works inteligentes",
      "Panel de analítica avanzada",
      "Soporte prioritario 24/5"
    ],
    highlighted: true,
    cta: "Escalar mis ventas",
    href: "#contacto"
  },
  {
    name: "Enterprise",
    tagline: "Solución avanzada con canales ilimitados y acompañamiento personalizado.",
    price: { mensual: "590", trimestral: "1.589", anual: "5.399" },
    features: [
      "Canales ilimitados",
      "Flujos y bots completamente a medida",
      "Integraciones API avanzadas",
      "Gestor de cuenta dedicado 1:1",
      "SLA de disponibilidad garantizado",
      "Onboarding personalizado",
      "Soporte técnico especializado 24/7"
    ],
    highlighted: false,
    cta: "Solicitar propuesta",
    href: "#contacto"
  }
];
function Planes() {
  const [billing, setBilling] = reactExports.useState("mensual");
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "planes",
      className: "py-20 md:py-32 border-t border-border overflow-hidden",
      "aria-labelledby": "planes-heading",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: viewportOnce,
            variants: stagger,
            className: "mx-auto max-w-2xl text-center",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.span, { variants: fadeUp, className: "text-xs uppercase tracking-widest text-primary font-semibold", children: "Planes y Precios" }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h2,
                {
                  id: "planes-heading",
                  variants: fadeUp,
                  className: "mt-2 text-2xl md:text-3xl font-bold text-foreground tracking-tight",
                  children: [
                    "Invierte en resultados,",
                    " ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "no en horas extra" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-2 text-muted-foreground text-base", children: "Sin permanencia. Sin costes ocultos. Solo escala cuando lo necesites." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: viewportOnce,
            variants: fadeUp,
            className: "mt-6 flex justify-center",
            children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative inline-flex items-center rounded-full border border-border bg-card p-1 gap-0.5", children: Object.keys(billingConfig).map((key) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "button",
              {
                onClick: () => setBilling(key),
                className: [
                  "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 z-10",
                  billing === key ? "text-primary-foreground" : "text-muted-foreground hover:text-foreground"
                ].join(" "),
                children: [
                  billing === key && /* @__PURE__ */ jsxRuntimeExports.jsx(
                    motion.span,
                    {
                      layoutId: "billing-pill",
                      className: "absolute inset-0 rounded-full bg-primary",
                      transition: { type: "spring", bounce: 0.2, duration: 0.4 }
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "relative z-10 flex items-center gap-1.5", children: [
                    billingConfig[key].label,
                    billingConfig[key].savingLabel && /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: [
                      "hidden sm:inline text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
                      billing === key ? "bg-primary-foreground/20 text-primary-foreground" : "bg-primary/10 text-primary"
                    ].join(" "), children: billingConfig[key].savingLabel })
                  ] })
                ]
              },
              key
            )) })
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: viewportOnce,
            variants: stagger,
            className: "mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-center",
            children: planes.map((plan) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
              motion.div,
              {
                variants: fadeUp,
                className: [
                  "relative flex flex-col rounded-2xl p-5 transition-all duration-300 group",
                  plan.highlighted ? "bg-primary text-primary-foreground shadow-[0_0_48px_-18px_rgba(99,102,241,0.55)] scale-[1.01] md:scale-[1.03] z-10" : "bg-card border border-border hover:border-primary/40 hover:-translate-y-1"
                ].join(" "),
                children: [
                  plan.highlighted && /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest shadow-lg", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-primary" }),
                    "Más Popular"
                  ] }) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: [
                    "text-sm font-semibold uppercase tracking-widest",
                    plan.highlighted ? "text-primary-foreground/70" : "text-primary"
                  ].join(" "), children: plan.name }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-4 flex items-baseline gap-0.5", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: [
                      "text-xl font-bold",
                      plan.highlighted ? "text-primary-foreground/80" : "text-primary/80"
                    ].join(" "), children: "€" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                      motion.span,
                      {
                        initial: { opacity: 0, y: 10 },
                        animate: { opacity: 1, y: 0 },
                        exit: { opacity: 0, y: -10 },
                        transition: { duration: 0.2 },
                        className: [
                          "text-4xl md:text-5xl font-extrabold tracking-tight",
                          plan.highlighted ? "text-primary-foreground" : "text-primary"
                        ].join(" "),
                        children: plan.price[billing]
                      },
                      billing + plan.name
                    ) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: [
                      "mb-1 ml-1 text-sm font-medium",
                      plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground"
                    ].join(" "), children: billingConfig[billing].suffix })
                  ] }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: [
                    "mt-3 text-sm leading-relaxed min-h-[3rem]",
                    plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground"
                  ].join(" "), children: plan.tagline }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: [
                    "my-4 h-px",
                    plan.highlighted ? "bg-primary-foreground/20" : "bg-border"
                  ].join(" ") }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "flex flex-col gap-2 flex-1", children: plan.features.map((f) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm", children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: [
                      "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                      plan.highlighted ? "bg-primary-foreground/20" : "bg-primary/10"
                    ].join(" "), children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: [
                      "h-3 w-3",
                      plan.highlighted ? "text-primary-foreground" : "text-primary"
                    ].join(" ") }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: plan.highlighted ? "text-primary-foreground/90" : "text-foreground", children: f })
                  ] }, f)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs(
                    "a",
                    {
                      href: plan.href,
                      className: [
                        "mt-5 flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                        plan.highlighted ? "bg-white text-primary hover:bg-white/90 shadow-lg" : "bg-primary text-primary-foreground hover:bg-primary/90 cta-glow"
                      ].join(" "),
                      children: [
                        plan.highlighted && /* @__PURE__ */ jsxRuntimeExports.jsx(Zap, { className: "h-4 w-4 shrink-0" }),
                        plan.cta,
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" })
                      ]
                    }
                  )
                ]
              },
              plan.name
            ))
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: viewportOnce,
            variants: fadeUp,
            className: "mt-6 text-center space-y-1.5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Todos los planes incluyen acceso a la plataforma Metatok. Sin permanencia ni costes ocultos." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("p", { className: "text-xs text-muted-foreground flex items-center justify-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Shield, { className: "h-3.5 w-3.5 text-accent", "aria-hidden": true }),
                "¿Necesitas algo específico?",
                " ",
                /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "#contacto", className: "text-primary hover:underline font-medium", children: "Hablamos de un plan a medida →" })
              ] })
            ]
          }
        )
      ] })
    }
  );
}
function Testimonios() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "testimonios",
      className: "py-8 md:py-12 bg-[var(--color-surface)] border-t border-border",
      "aria-labelledby": "testimonios-heading",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: viewportOnce,
            variants: stagger,
            className: "max-w-3xl mb-8",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  variants: fadeUp,
                  className: "text-xs uppercase tracking-widest text-primary font-semibold",
                  children: "Historias de Éxito"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.h2,
                {
                  id: "testimonios-heading",
                  variants: fadeUp,
                  className: "mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight",
                  children: [
                    "Casos reales de negocios que ya ",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "escalaron su captación" })
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-2 text-base text-muted-foreground leading-snug", children: "Resultados comprobados por líderes en sus respectivos sectores tras integrar los agentes IA de Metatok en su operación." })
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: viewportOnce,
            variants: stagger,
            className: "grid md:grid-cols-2 lg:grid-cols-3 gap-4",
            children: testimonios.map((t, index) => /* @__PURE__ */ jsxRuntimeExports.jsx(
              motion.div,
              {
                variants: fadeUp,
                className: "rounded-xl border border-border bg-card p-5 shadow-sm flex flex-col justify-between card-hover cursor-default",
                children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-base font-bold text-primary", children: t.nombre }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-medium text-muted-foreground mb-2.5", children: t.cargo }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex gap-1 mb-3", children: [...Array(t.rating)].map((_, i) => /* @__PURE__ */ jsxRuntimeExports.jsx(Star, { className: "h-3 w-3 fill-amber-400 text-amber-400" }, i)) }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-foreground/90 leading-relaxed font-medium", children: t.texto })
                ] })
              },
              index
            ))
          }
        )
      ] })
    }
  );
}
const incluye = [
  "Análisis de tus canales y volumen de tráfico actuales",
  "Detección de fugas de conversión en tu funnel",
  "Mapa estratégico personalizado con IA",
  "Estimación de impacto real en facturación"
];
const stats = [
  { value: "+38%", label: "leads recuperados" },
  { value: "22h", label: "ahorradas / semana" },
  { value: "+54%", label: "citas agendadas" },
  { value: "+27%", label: "tasa de conversión" }
];
function Auditoria() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "auditoria",
      className: "py-8 md:py-12",
      "aria-labelledby": "auditoria-heading",
      children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "container-mt", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.div,
        {
          initial: "hidden",
          whileInView: "show",
          viewport: viewportOnce,
          variants: stagger,
          className: "relative overflow-hidden rounded-2xl border border-primary/40 bg-[var(--color-surface)] p-5 md:p-8",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "div",
              {
                "aria-hidden": true,
                className: "absolute inset-0 -z-10 opacity-[0.08]",
                style: {
                  backgroundImage: "radial-gradient(circle at 85% 15%, var(--color-primary) 0, transparent 50%)"
                }
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid lg:grid-cols-12 gap-6 md:gap-8 items-start", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "lg:col-span-7 flex flex-col", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.span,
                  {
                    variants: fadeUp,
                    className: "inline-flex w-fit items-center gap-2 rounded-full border border-primary/40 bg-primary/10 px-3.5 py-1.5 text-xs font-semibold text-primary",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Flame, { className: "h-3.5 w-3.5", "aria-hidden": true }),
                      "Auditoría 100% gratuita · Sin compromiso"
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  motion.h2,
                  {
                    id: "auditoria-heading",
                    variants: fadeUp,
                    className: "mt-3 text-2xl md:text-3xl font-extrabold text-foreground tracking-tight leading-[1.08]",
                    children: [
                      "Descubre exactamente cuánto",
                      " ",
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-primary", children: "estás dejando de ganar" })
                    ]
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.p,
                  {
                    variants: fadeUp,
                    className: "mt-3 text-base text-muted-foreground leading-relaxed max-w-xl",
                    children: "No es una llamada comercial. Es una sesión técnica gratuita donde un experto en automatización analiza tu operación real y te muestra — con números — cuánto puedes mejorar."
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(motion.ul, { variants: fadeUp, className: "mt-5 space-y-2", children: incluye.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-3 text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full bg-primary/15 border border-primary/40", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-3 w-3 text-primary", "aria-hidden": true }) }),
                  item
                ] }, item)) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.div, { variants: fadeUp, className: "mt-6 flex flex-col sm:flex-row items-start sm:items-center gap-3", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    Button,
                    {
                      asChild: true,
                      size: "lg",
                      className: "h-auto py-3 px-5 text-sm bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-bold rounded-xl group",
                      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("a", { href: "#contacto", className: "flex items-center gap-2", children: [
                        "Solicitar mi auditoría gratuita",
                        /* @__PURE__ */ jsxRuntimeExports.jsx(ArrowRight, { className: "h-4 w-4 transition-transform duration-300 group-hover:translate-x-1" })
                      ] })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "text-xs text-muted-foreground leading-tight", children: [
                    "Plazas limitadas cada semana.",
                    /* @__PURE__ */ jsxRuntimeExports.jsx("br", {}),
                    "Respuesta garantizada en < 24 h."
                  ] })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.div, { variants: fadeUp, className: "lg:col-span-5", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "rounded-xl border border-border bg-card p-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-primary mb-5", children: "Resultados medios tras 60 días" }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "grid grid-cols-2 gap-4", children: stats.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                  "div",
                  {
                    className: "rounded-xl border border-border bg-background/60 p-4 text-center",
                    children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "text-2xl font-extrabold text-primary", children: s.value }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-1 text-xs text-muted-foreground", children: s.label })
                    ]
                  },
                  s.label
                )) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-5 text-[10px] text-muted-foreground/70", children: "*Promedios observados en clientes reales. Los resultados pueden variar según sector y volumen." })
              ] }) })
            ] })
          ]
        }
      ) })
    }
  );
}
const Accordion = Root2;
const AccordionItem = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Item, { ref, className: cn("border-b", className), ...props }));
AccordionItem.displayName = "AccordionItem";
const AccordionTrigger = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Header$1, { className: "flex", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
  Trigger2,
  {
    ref,
    className: cn(
      "flex flex-1 items-center justify-between py-4 text-sm font-medium transition-all hover:underline text-left [&[data-state=open]>svg]:rotate-180",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-200" })
    ]
  }
) }));
AccordionTrigger.displayName = Trigger2.displayName;
const AccordionContent = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    className: "overflow-hidden text-sm data-[state=closed]:animate-accordion-up data-[state=open]:animate-accordion-down",
    ...props,
    children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: cn("pb-4 pt-0", className), children })
  }
));
AccordionContent.displayName = Content2.displayName;
function Faq() {
  const headerRef = useFadeUp(0);
  const titleRef = useTypingEffect(300);
  const col1Ref = useSlideInLeft(200);
  const col2Ref = useSlideInRight(200);
  return /* @__PURE__ */ jsxRuntimeExports.jsx("section", { id: "faq", className: "py-8 md:py-12", "aria-labelledby": "faq-heading", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "div",
      {
        ref: asRef(headerRef),
        className: "max-w-3xl mx-auto text-center mb-6",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "text-xs uppercase tracking-widest text-primary font-semibold", children: "FAQ" }),
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "h2",
            {
              id: "faq-heading",
              ref: asRef(titleRef),
              className: "mt-3 text-3xl md:text-4xl lg:text-4xl font-bold text-foreground tracking-tight",
              children: "Preguntas frecuentes"
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-muted-foreground text-lg", children: "Resolvemos las dudas más habituales sobre el servicio, la implementación y la inversión." })
        ]
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid md:grid-cols-2 gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: asRef(col1Ref), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Accordion,
        {
          type: "single",
          collapsible: true,
          className: "rounded-2xl border border-border bg-card divide-y divide-border",
          children: faqs.slice(0, Math.ceil(faqs.length / 2)).map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border-0 px-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left text-base font-medium text-foreground hover:no-underline hover:text-primary transition-colors py-5", children: f.pregunta }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm text-muted-foreground leading-relaxed pb-5", children: f.respuesta })
          ] }, i))
        }
      ) }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { ref: asRef(col2Ref), children: /* @__PURE__ */ jsxRuntimeExports.jsx(
        Accordion,
        {
          type: "single",
          collapsible: true,
          className: "rounded-2xl border border-border bg-card divide-y divide-border",
          children: faqs.slice(Math.ceil(faqs.length / 2)).map((f, i) => /* @__PURE__ */ jsxRuntimeExports.jsxs(AccordionItem, { value: `item-${i}`, className: "border-0 px-5", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionTrigger, { className: "text-left text-base font-medium text-foreground hover:no-underline hover:text-primary transition-colors py-5", children: f.pregunta }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(AccordionContent, { className: "text-sm text-muted-foreground leading-relaxed pb-5", children: f.respuesta })
          ] }, i))
        }
      ) })
    ] })
  ] }) });
}
const Input = reactExports.forwardRef(
  ({ className, type, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "input",
      {
        type,
        className: cn(
          "flex h-9 w-full rounded-md border border-input bg-transparent px-3 py-1 text-base shadow-sm transition-colors file:border-0 file:bg-transparent file:text-sm file:font-medium file:text-foreground placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Input.displayName = "Input";
const labelVariants = cva(
  "text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70"
);
const Label = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Root, { ref, className: cn(labelVariants(), className), ...props }));
Label.displayName = Root.displayName;
const Textarea = reactExports.forwardRef(
  ({ className, ...props }, ref) => {
    return /* @__PURE__ */ jsxRuntimeExports.jsx(
      "textarea",
      {
        className: cn(
          "flex min-h-[60px] w-full rounded-md border border-input bg-transparent px-3 py-2 text-base shadow-sm placeholder:text-muted-foreground focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:cursor-not-allowed disabled:opacity-50 md:text-sm",
          className
        ),
        ref,
        ...props
      }
    );
  }
);
Textarea.displayName = "Textarea";
const auditSchema = objectType({
  nombre: stringType().trim().min(2, "Minimo 2 caracteres").max(80),
  email: stringType().trim().email("Email no valido").max(160),
  empresa: stringType().trim().min(1, "Indica tu empresa").max(120),
  telefono: stringType().trim().min(6, "Telefono no valido").max(30),
  web: stringType().trim().max(160).optional().or(literalType("")),
  mensaje: stringType().trim().max(1200).optional().or(literalType(""))
});
const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/info@metatok.ai";
function Contacto() {
  const [enviando, setEnviando] = reactExports.useState(false);
  const {
    register,
    handleSubmit,
    reset,
    formState: { errors }
  } = useForm({
    resolver: a(auditSchema),
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      telefono: "",
      web: "",
      mensaje: ""
    }
  });
  const onSubmit = async (values) => {
    try {
      setEnviando(true);
      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json"
        },
        body: JSON.stringify({
          name: values.nombre,
          email: values.email,
          empresa: values.empresa,
          telefono: values.telefono,
          web: values.web || "—",
          message: values.mensaje || "—",
          _subject: `Nueva solicitud de auditoría — ${values.empresa}`,
          _template: "table",
          _captcha: "false"
        })
      });
      const data = await response.json();
      if (!response.ok || data.success === "false") {
        throw new Error("Error en FormSubmit");
      }
      toast.success("Solicitud enviada ✓", {
        description: "Te contactaremos en menos de 24 horas."
      });
      reset();
    } catch (err) {
      console.error(err);
      toast.error("No se pudo enviar tu solicitud", {
        description: "Inténtalo de nuevo en unos instantes."
      });
    } finally {
      setEnviando(false);
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "section",
    {
      id: "contacto",
      className: "py-8 md:py-12 bg-[var(--color-surface)] border-t border-border",
      "aria-labelledby": "contacto-heading",
      children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt grid lg:grid-cols-12 gap-6 md:gap-8", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.div,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: viewportOnce,
            variants: stagger,
            className: "lg:col-span-5",
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.span,
                {
                  variants: fadeUp,
                  className: "text-xs uppercase tracking-widest text-primary font-semibold",
                  children: "Contacto"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.h2,
                {
                  id: "contacto-heading",
                  variants: fadeUp,
                  className: "mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight",
                  children: "Hablemos de tu próxima ventaja competitiva"
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(motion.p, { variants: fadeUp, className: "mt-4 text-muted-foreground", children: "Escríbenos y un técnico senior te contactará en menos de 24 horas para agendar tu auditoría gratuita." }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(motion.ul, { variants: fadeUp, className: "mt-8 space-y-4", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(Mail, { className: "h-4 w-4 text-accent", "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:info@metatok.ai", className: "hover:text-primary transition-colors", children: "info@metatok.ai" })
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm text-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(MapPin, { className: "h-4 w-4 text-accent", "aria-hidden": true }),
                  "Servicio remoto · Cobertura internacional"
                ] }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-center gap-3 text-sm text-muted-foreground", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-4 w-4 text-accent", "aria-hidden": true }),
                  "Tratamos tus datos según RGPD"
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  variants: fadeUp,
                  className: "mt-8 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-foreground font-semibold", children: "Sin compromiso" }),
                    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1", children: "No vendemos llamadas comerciales. Recibirás un análisis técnico real de cómo la IA puede maximizar tu facturación actual." })
                  ]
                }
              )
            ]
          }
        ),
        /* @__PURE__ */ jsxRuntimeExports.jsxs(
          motion.form,
          {
            initial: "hidden",
            whileInView: "show",
            viewport: viewportOnce,
            variants: fadeUp,
            onSubmit: handleSubmit(onSubmit),
            className: "lg:col-span-7 rounded-xl border border-border bg-card p-4 md:p-5 space-y-4",
            noValidate: true,
            children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "grid sm:grid-cols-2 gap-3", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Nombre", id: "nombre", error: errors.nombre?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "nombre",
                    autoComplete: "name",
                    placeholder: "Tu nombre completo",
                    ...register("nombre")
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Email", id: "email", error: errors.email?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "email",
                    type: "email",
                    autoComplete: "email",
                    placeholder: "tucorreo@empresa.com",
                    ...register("email")
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Empresa", id: "empresa", error: errors.empresa?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "empresa",
                    autoComplete: "organization",
                    placeholder: "Nombre de tu empresa",
                    ...register("empresa")
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Teléfono", id: "telefono", error: errors.telefono?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "telefono",
                    type: "tel",
                    autoComplete: "tel",
                    placeholder: "+34 600 000 000",
                    ...register("telefono")
                  }
                ) }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "Sitio web (opcional)", id: "web", error: errors.web?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Input,
                  {
                    id: "web",
                    autoComplete: "url",
                    placeholder: "https://tuempresa.com",
                    ...register("web")
                  }
                ) })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsx(Field, { label: "¿Qué quieres automatizar? (opcional)", id: "mensaje", error: errors.mensaje?.message, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
                Textarea,
                {
                  id: "mensaje",
                  rows: 4,
                  placeholder: "Cuéntanos brevemente tu reto principal.",
                  ...register("mensaje")
                }
              ) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-muted-foreground", children: "Al enviar aceptas que te contactemos sobre tu solicitud de auditoría." }),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  Button,
                  {
                    type: "submit",
                    size: "lg",
                    disabled: enviando,
                    className: "w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold",
                    children: enviando ? /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx(LoaderCircle, { className: "mr-2 h-4 w-4 animate-spin" }),
                      "Enviando…"
                    ] }) : /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
                      "Solicitar auditoría",
                      /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: "ml-2 h-4 w-4 shrink-0" })
                    ] })
                  }
                )
              ] })
            ]
          }
        )
      ] })
    }
  );
}
function Field({
  label,
  id,
  error,
  children
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "space-y-1.5", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Label, { htmlFor: id, className: "text-sm text-muted-foreground", children: label }),
    children,
    error && /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs text-destructive", role: "alert", children: error })
  ] });
}
function getWhatsappAgentHref() {
  const text = encodeURIComponent(
    "Hola, quiero hablar con un agente MetaTok para ver cómo podéis aplicar esto a mi empresa."
  );
  const digits = "";
  if (digits.length >= 8) {
    return `https://wa.me/${digits}?text=${text}`;
  }
  return "/#contacto";
}
function IconWhatsApp({ className }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", className, xmlns: "http://www.w3.org/2000/svg", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(
    "path",
    {
      fill: "currentColor",
      d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
    }
  ) });
}
function buildActions() {
  const wa = getWhatsappAgentHref();
  const waExternal = !wa.startsWith("/") && !wa.startsWith("#");
  return [
    {
      id: "live-demo",
      label: "Live Demo",
      href: "#",
      onSelect: () => {
        window.dispatchEvent(new CustomEvent("metatok:open-live-demo"));
      },
      icon: MessageSquare,
      iconClass: "text-primary-foreground",
      bgClass: "bg-primary hover:bg-primary/90"
    },
    {
      id: "auditoria",
      label: "Auditoría gratis",
      href: "/#auditoria",
      icon: ClipboardCheck,
      iconClass: "text-foreground",
      bgClass: "bg-card border border-border hover:bg-muted"
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: wa,
      external: waExternal,
      icon: IconWhatsApp,
      iconClass: "text-white",
      bgClass: "bg-[#25D366] hover:bg-[#20bd5a]"
    },
    {
      id: "contacto",
      label: "Contacto",
      href: "/#contacto",
      icon: Mail,
      iconClass: "text-primary-foreground",
      bgClass: "bg-primary hover:bg-primary/90"
    }
  ];
}
function FloatingActionsMenu() {
  const [open, setOpen] = reactExports.useState(false);
  const rootRef = reactExports.useRef(null);
  const actions = buildActions();
  const close = reactExports.useCallback(() => setOpen(false), []);
  reactExports.useEffect(() => {
    if (!open) return;
    const onKey = (e) => {
      if (e.key === "Escape") close();
    };
    const onPointer = (e) => {
      const el = rootRef.current;
      if (!el) return;
      if (!el.contains(e.target)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [open, close]);
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { ref: rootRef, className: "fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-2.5 md:bottom-8 md:right-8", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: open && /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.ul,
      {
        className: "m-0 flex list-none flex-col items-end gap-2.5 p-0",
        role: "menu",
        "aria-label": "Acciones de contacto",
        initial: { opacity: 0, y: 14, scale: 0.96 },
        animate: {
          opacity: 1,
          y: 0,
          scale: 1,
          transition: {
            duration: 0.18,
            ease: "easeOut",
            when: "beforeChildren",
            staggerChildren: 0.06
          }
        },
        exit: {
          opacity: 0,
          y: 10,
          scale: 0.98,
          transition: {
            duration: 0.14,
            ease: "easeIn",
            when: "afterChildren",
            staggerChildren: 0.04,
            staggerDirection: -1
          }
        },
        children: actions.map((a2) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          motion.li,
          {
            role: "none",
            initial: { opacity: 0, x: 18, y: 4 },
            animate: { opacity: 1, x: 0, y: 0, transition: { duration: 0.18, ease: "easeOut" } },
            exit: { opacity: 0, x: 12, y: 3, transition: { duration: 0.12, ease: "easeIn" } },
            children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                role: "menuitem",
                href: a2.href,
                ...a2.external ? { target: "_blank", rel: "noopener noreferrer" } : {},
                onClick: (e) => {
                  if (a2.onSelect) {
                    e.preventDefault();
                    a2.onSelect();
                  }
                  close();
                },
                className: "flex flex-row-reverse items-center gap-2.5 rounded-full py-0.5 pl-0.5",
                children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "span",
                    {
                      className: `flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-md transition-transform hover:scale-105 active:scale-95 ${a2.bgClass}`,
                      children: /* @__PURE__ */ jsxRuntimeExports.jsx(a2.icon, { className: `h-5 w-5 ${a2.iconClass}`, "aria-hidden": true })
                    }
                  ),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "max-w-[10.5rem] rounded-lg border border-border bg-card/95 px-2.5 py-1.5 text-right text-xs font-semibold text-foreground shadow-md backdrop-blur-sm sm:max-w-none", children: a2.label })
                ]
              }
            )
          },
          a2.id
        ))
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "button",
      {
        type: "button",
        onClick: () => setOpen((o) => !o),
        className: "flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)] dark:shadow-black/50 cta-glow",
        "aria-expanded": open,
        "aria-haspopup": "menu",
        "aria-label": open ? "Cerrar menú de contacto" : "Abrir menú de contacto",
        children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-7 w-7", "aria-hidden": true }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Plus, { className: "h-7 w-7", "aria-hidden": true })
      }
    )
  ] });
}
const initialMessages = [
  {
    id: "m1",
    role: "bot",
    text: "Hola, soy el agente de demo de MetaTok. Te muestro como podrias convertir mas leads en tu negocio."
  },
  {
    id: "m2",
    role: "bot",
    text: "Cuentame tu sector y tu reto principal (ej: respuestas tardias, agenda vacia, leads frios)."
  }
];
const quickActions = [
  "Soy de inmobiliaria",
  "Tengo una clinica",
  "Quiero mas reservas en hotel",
  "Necesito integrar con CRM"
];
function getBotReply(input) {
  const text = input.toLowerCase();
  if (text.includes("inmobili")) {
    return "Perfecto. En inmobiliaria solemos reducir el tiempo de respuesta y subir visitas agendadas con cualificacion automatica por zona y presupuesto.";
  }
  if (text.includes("clin") || text.includes("salud")) {
    return "En clinicas activamos agenda 24/7 con recordatorios inteligentes. El objetivo es bajar ausencias y aumentar citas efectivas.";
  }
  if (text.includes("hotel") || text.includes("reserva")) {
    return "Para hoteles, MetaTok atiende disponibilidad en tiempo real, impulsa reserva directa y automatiza upsell pre-estadia.";
  }
  if (text.includes("crm") || text.includes("hubspot") || text.includes("salesforce")) {
    return "Nos integramos por API con CRM para sincronizar conversaciones, estados y proximas acciones del equipo comercial.";
  }
  if (text.includes("precio") || text.includes("coste")) {
    return "El coste depende de canales, integraciones y volumen. Si quieres, te preparo una estimacion rapida en una auditoria sin compromiso.";
  }
  return "Entendido. Con MetaTok podemos automatizar respuesta, cualificacion y seguimiento para llevar al lead hasta cita o venta en menos tiempo.";
}
function LiveDemoWidget() {
  const [open, setOpen] = reactExports.useState(false);
  const [messages, setMessages] = reactExports.useState(initialMessages);
  const [input, setInput] = reactExports.useState("");
  const [isTyping, setIsTyping] = reactExports.useState(false);
  const whatsappHref = reactExports.useMemo(() => getWhatsappAgentHref(), []);
  function resetChat() {
    setMessages(initialMessages);
    setInput("");
    setIsTyping(false);
  }
  reactExports.useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("metatok:open-live-demo", handler);
    return () => {
      window.removeEventListener("metatok:open-live-demo", handler);
    };
  }, []);
  function sendMessage(text) {
    const value = text.trim();
    if (!value || isTyping) return;
    const userMsg = {
      id: `u-${Date.now()}`,
      role: "user",
      text: value
    };
    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setInput("");
    window.setTimeout(() => {
      const botMsg = {
        id: `b-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        role: "bot",
        text: getBotReply(value)
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  }
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    "div",
    {
      className: `fixed right-5 z-[85] md:right-8 ${open ? "bottom-24 md:bottom-24" : "bottom-1 md:bottom-2"}`,
      children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", children: open ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
        motion.aside,
        {
          initial: { opacity: 0, y: 12, scale: 0.98 },
          animate: { opacity: 1, y: 0, scale: 1 },
          exit: { opacity: 0, y: 8, scale: 0.98 },
          transition: { duration: 0.2 },
          className: "w-[min(92vw,370px)] flex flex-col max-h-[calc(100vh-140px)] overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-[0_24px_70px_-30px_var(--color-primary)] backdrop-blur-md",
          "aria-label": "Live demo de MetaTok",
          children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 flex items-center justify-between border-b border-border/70 bg-background/70 px-4 py-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "inline-flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Sparkles, { className: "h-4 w-4", "aria-hidden": true }) }),
                /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm font-bold text-foreground", children: "Live Demo MetaTok" }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-[11px] text-muted-foreground", children: "Agente de ventas en tiempo real" })
                ] })
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-1.5", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: resetChat,
                    className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:border-primary/40 hover:text-primary",
                    "aria-label": "Nuevo chat",
                    title: "Nuevo chat",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquarePlus, { className: "h-4 w-4", "aria-hidden": true })
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => setOpen(false),
                    className: "inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:text-foreground",
                    "aria-label": "Cerrar demo",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4", "aria-hidden": true })
                  }
                )
              ] })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex-1 overflow-y-auto bg-background/55 px-3 py-3 space-y-2", children: [
              messages.map((message) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 6, scale: 0.98 },
                  animate: { opacity: 1, y: 0, scale: 1 },
                  transition: { duration: 0.2 },
                  className: `flex items-start gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`,
                  children: [
                    message.role === "bot" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3.5 w-3.5", "aria-hidden": true }) }) : null,
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      "div",
                      {
                        className: `max-w-[85%] rounded-xl border px-3 py-2 text-xs leading-relaxed ${message.role === "user" ? "border-accent/30 bg-accent/10 text-foreground" : "border-border/80 bg-card text-foreground/90"}`,
                        children: message.text
                      }
                    ),
                    message.role === "user" ? /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent", children: /* @__PURE__ */ jsxRuntimeExports.jsx(User, { className: "h-3.5 w-3.5", "aria-hidden": true }) }) : null
                  ]
                },
                message.id
              )),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: isTyping ? /* @__PURE__ */ jsxRuntimeExports.jsxs(
                motion.div,
                {
                  initial: { opacity: 0, y: 4 },
                  animate: { opacity: 1, y: 0 },
                  exit: { opacity: 0, y: 4 },
                  className: "flex items-start gap-2",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Bot, { className: "h-3.5 w-3.5", "aria-hidden": true }) }),
                    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-1 rounded-xl border border-border/80 bg-card px-3 py-2", children: [
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/80 animate-bounce [animation-delay:-0.2s]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/80 animate-bounce [animation-delay:-0.1s]" }),
                      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "h-1.5 w-1.5 rounded-full bg-primary/80 animate-bounce" })
                    ] })
                  ]
                },
                "typing"
              ) : null })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "shrink-0 border-t border-border/70 bg-card/80 p-3", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mb-2 flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]", children: quickActions.map((action) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                "button",
                {
                  type: "button",
                  onClick: () => sendMessage(action),
                  className: "shrink-0 whitespace-nowrap rounded-full border border-border bg-background/70 px-3 py-1.5 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground",
                  children: action
                },
                action
              )) }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center gap-2", children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "input",
                  {
                    value: input,
                    onChange: (e) => setInput(e.target.value),
                    onKeyDown: (e) => {
                      if (e.key === "Enter") sendMessage(input);
                    },
                    placeholder: "Escribe tu consulta...",
                    className: "h-10 flex-1 rounded-lg border border-border bg-background/75 px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/45"
                  }
                ),
                /* @__PURE__ */ jsxRuntimeExports.jsx(
                  "button",
                  {
                    type: "button",
                    onClick: () => sendMessage(input),
                    className: "inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60",
                    "aria-label": "Enviar mensaje",
                    disabled: isTyping,
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Send, { className: `h-4 w-4 ${isTyping ? "animate-pulse" : ""}`, "aria-hidden": true })
                  }
                )
              ] }),
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "a",
                {
                  href: whatsappHref,
                  className: "mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary transition-colors hover:text-accent",
                  children: [
                    /* @__PURE__ */ jsxRuntimeExports.jsx(MessageSquare, { className: "h-3.5 w-3.5", "aria-hidden": true }),
                    "Hablar con agente real por WhatsApp"
                  ]
                }
              )
            ] })
          ]
        },
        "open"
      ) : null })
    }
  );
}
function PageReveal() {
  const [visible, setVisible] = reactExports.useState(true);
  reactExports.useEffect(() => {
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
  const panelVariants = {
    initial: { scaleY: 1 },
    exit: (custom) => ({
      scaleY: 0,
      transition: {
        duration: 0.72,
        ease: [0.76, 0, 0.24, 1],
        delay: custom === "top" ? 0.35 : 0.42
      }
    })
  };
  const logoVariants = {
    initial: { opacity: 0, scale: 0.88 },
    animate: {
      opacity: 1,
      scale: 1,
      transition: { duration: 0.38, ease: "easeOut", delay: 0.08 }
    },
    exit: {
      opacity: 0,
      scale: 0.94,
      transition: { duration: 0.22, ease: "easeIn" }
    }
  };
  return /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { children: visible && /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "fixed inset-0 z-[9999] pointer-events-none", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        custom: "top",
        variants: panelVariants,
        initial: "initial",
        exit: "exit",
        style: { transformOrigin: "top center" },
        className: "absolute inset-x-0 top-0 h-1/2 bg-background"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      motion.div,
      {
        custom: "bottom",
        variants: panelVariants,
        initial: "initial",
        exit: "exit",
        style: { transformOrigin: "bottom center" },
        className: "absolute inset-x-0 bottom-0 h-1/2 bg-background"
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 flex items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
      motion.div,
      {
        variants: logoVariants,
        initial: "initial",
        animate: "animate",
        exit: "exit",
        className: "flex flex-col items-center gap-3",
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logoMiniExtended,
              alt: "MetaTok",
              className: "h-9 w-auto",
              draggable: false
            }
          ),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "w-32 h-[2px] rounded-full overflow-hidden bg-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            motion.div,
            {
              className: "h-full bg-primary rounded-full",
              initial: { scaleX: 0 },
              animate: { scaleX: 1 },
              transition: { duration: 1.1, ease: "easeInOut", delay: 0.1 },
              style: { transformOrigin: "left center" }
            }
          ) })
        ]
      }
    ) })
  ] }, "page-reveal") });
}
const Toaster = ({ ...props }) => {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(
    Toaster$1,
    {
      className: "toaster group",
      toastOptions: {
        classNames: {
          toast: "group toast group-[.toaster]:bg-background group-[.toaster]:text-foreground group-[.toaster]:border-border group-[.toaster]:shadow-lg",
          description: "group-[.toast]:text-muted-foreground",
          actionButton: "group-[.toast]:bg-primary group-[.toast]:text-primary-foreground",
          cancelButton: "group-[.toast]:bg-muted group-[.toast]:text-muted-foreground"
        }
      },
      ...props
    }
  );
};
function Index() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "relative isolate min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(PageReveal, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { "aria-hidden": true, className: "pointer-events-none fixed inset-0 z-0 overflow-hidden", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-background dark:from-primary/[0.07] dark:via-background dark:to-background" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 bg-gradient-to-tl from-accent/[0.035] via-transparent to-primary/[0.04]" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 mt-page-particles mt-page-particles--full" }),
      /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "absolute inset-0 backdrop-blur-[10px]", style: {
        backgroundColor: "color-mix(in oklab, var(--color-background) 48%, transparent)"
      } })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative z-10", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(Hero, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(SocialProofStrip, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Brands, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(PainPoints, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Beneficios, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTokEngine, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(EliteSolutions, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Sectores, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Servicios, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(ComparativaMetaTok, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(DiagnosticoCTA, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(MetaTokAcademy, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Proceso, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Canales, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Planes, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Testimonios, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Auditoria, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Faq, {}),
      /* @__PURE__ */ jsxRuntimeExports.jsx(Contacto, {})
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "relative z-10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(LiveDemoWidget, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(FloatingActionsMenu, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Toaster, {})
  ] });
}
export {
  Index as component
};
