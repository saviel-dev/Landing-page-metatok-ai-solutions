import { useState } from "react";
import { motion, AnimatePresence } from "framer-motion";
import { Check, Star, ArrowRight, Zap, Shield } from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";

type BillingCycle = "mensual" | "trimestral" | "anual";

const billingConfig = {
  mensual:     { label: "Mensual",     suffix: "/mes",        savingLabel: null },
  trimestral:  { label: "Trimestral",  suffix: "/trimestre",  savingLabel: "Ahorra ~16%" },
  anual:       { label: "Anual",       suffix: "/año",        savingLabel: "Ahorra ~29%" },
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
      "Soporte por email",
    ],
    highlighted: false,
    cta: "Iniciar ahora",
    href: "#contacto",
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
      "Soporte prioritario 24/5",
    ],
    highlighted: true,
    cta: "Escalar mis ventas",
    href: "#contacto",
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
      "Soporte técnico especializado 24/7",
    ],
    highlighted: false,
    cta: "Solicitar propuesta",
    href: "#contacto",
  },
];

export function Planes() {
  const [billing, setBilling] = useState<BillingCycle>("mensual");

  return (
    <section
      id="planes"
      className="py-20 md:py-32 border-t border-border overflow-hidden"
      aria-labelledby="planes-heading"
    >
      <div className="container-mt">
        {/* Encabezado */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mx-auto max-w-2xl text-center"
        >
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-primary font-semibold">
            Planes y Precios
          </motion.span>
          <motion.h2
            id="planes-heading"
            variants={fadeUp}
            className="mt-2 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            Invierte en resultados,{" "}
            <span className="text-primary">no en horas extra</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-muted-foreground text-base">
            Sin permanencia. Sin costes ocultos. Solo escala cuando lo necesites.
          </motion.p>
        </motion.div>

        {/* Selector de facturación */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-6 flex justify-center"
        >
          <div className="relative inline-flex items-center rounded-full border border-border bg-card p-1 gap-0.5">
            {(Object.keys(billingConfig) as BillingCycle[]).map((key) => (
              <button
                key={key}
                onClick={() => setBilling(key)}
                className={[
                  "relative rounded-full px-5 py-2.5 text-sm font-medium transition-colors duration-200 z-10",
                  billing === key
                    ? "text-primary-foreground"
                    : "text-muted-foreground hover:text-foreground",
                ].join(" ")}
              >
                {billing === key && (
                  <motion.span
                    layoutId="billing-pill"
                    className="absolute inset-0 rounded-full bg-primary"
                    transition={{ type: "spring", bounce: 0.2, duration: 0.4 }}
                  />
                )}
                <span className="relative z-10 flex items-center gap-1.5">
                  {billingConfig[key].label}
                  {billingConfig[key].savingLabel && (
                    <span className={[
                      "hidden sm:inline text-[10px] font-semibold px-1.5 py-0.5 rounded-full",
                      billing === key
                        ? "bg-primary-foreground/20 text-primary-foreground"
                        : "bg-primary/10 text-primary",
                    ].join(" ")}>
                      {billingConfig[key].savingLabel}
                    </span>
                  )}
                </span>
              </button>
            ))}
          </div>
        </motion.div>

        {/* Grid de planes */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="mt-8 grid grid-cols-1 md:grid-cols-3 gap-4 lg:gap-5 items-center"
        >
          {planes.map((plan) => (
            <motion.div
              key={plan.name}
              variants={fadeUp}
              className={[
                "relative flex flex-col rounded-2xl p-5 transition-all duration-300 group",
                plan.highlighted
                  ? "bg-primary text-primary-foreground shadow-[0_0_48px_-18px_rgba(99,102,241,0.55)] scale-[1.01] md:scale-[1.03] z-10"
                  : "bg-card border border-border hover:border-primary/40 hover:-translate-y-1",
              ].join(" ")}
            >
              {/* Badge "Más Popular" */}
              {plan.highlighted && (
                <div className="absolute -top-4 left-1/2 -translate-x-1/2 whitespace-nowrap">
                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white px-4 py-1.5 text-xs font-bold text-primary uppercase tracking-widest shadow-lg">
                    <Star className="h-3 w-3 fill-primary" />
                    Más Popular
                  </span>
                </div>
              )}

              {/* Nombre del plan */}
              <p className={[
                "text-sm font-semibold uppercase tracking-widest",
                plan.highlighted ? "text-primary-foreground/70" : "text-primary",
              ].join(" ")}>
                {plan.name}
              </p>

              {/* Precio con animación al cambiar */}
              <div className="mt-4 flex items-end gap-1">
                <AnimatePresence mode="wait">
                  <motion.span
                    key={billing + plan.name}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: -10 }}
                    transition={{ duration: 0.2 }}
                    className={[
                      "text-4xl md:text-5xl font-extrabold tracking-tight",
                      plan.highlighted ? "text-primary-foreground" : "text-primary",
                    ].join(" ")}
                  >
                    {plan.price[billing]}
                  </motion.span>
                </AnimatePresence>
                <span className={[
                  "mb-2 text-sm font-medium",
                  plan.highlighted ? "text-primary-foreground/70" : "text-muted-foreground",
                ].join(" ")}>
                  €{billingConfig[billing].suffix}
                </span>
              </div>

              {/* Tagline */}
              <p className={[
                "mt-3 text-sm leading-relaxed min-h-[3rem]",
                plan.highlighted ? "text-primary-foreground/80" : "text-muted-foreground",
              ].join(" ")}>
                {plan.tagline}
              </p>

              {/* Separador */}
              <div className={[
                "my-4 h-px",
                plan.highlighted ? "bg-primary-foreground/20" : "bg-border",
              ].join(" ")} />

              {/* Features */}
              <ul className="flex flex-col gap-2 flex-1">
                {plan.features.map((f) => (
                  <li key={f} className="flex items-start gap-3 text-sm">
                    <span className={[
                      "mt-0.5 inline-flex h-5 w-5 shrink-0 items-center justify-center rounded-full",
                      plan.highlighted ? "bg-primary-foreground/20" : "bg-primary/10",
                    ].join(" ")}>
                      <Check className={[
                        "h-3 w-3",
                        plan.highlighted ? "text-primary-foreground" : "text-primary",
                      ].join(" ")} />
                    </span>
                    <span className={plan.highlighted ? "text-primary-foreground/90" : "text-foreground"}>
                      {f}
                    </span>
                  </li>
                ))}
              </ul>

              {/* CTA */}
              <a
                href={plan.href}
                className={[
                  "mt-5 flex items-center justify-center gap-2 rounded-xl px-5 py-2.5 text-sm font-semibold transition-all duration-200",
                  plan.highlighted
                    ? "bg-white text-primary hover:bg-white/90 shadow-lg"
                    : "bg-primary text-primary-foreground hover:bg-primary/90 cta-glow",
                ].join(" ")}
              >
                {plan.highlighted && <Zap className="h-4 w-4 shrink-0" />}
                {plan.cta}
                <ArrowRight className="h-4 w-4 shrink-0 transition-transform duration-200 group-hover:translate-x-0.5" />
              </a>
            </motion.div>
          ))}
        </motion.div>

        {/* Notas de pie */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-6 text-center space-y-1.5"
        >
          <p className="text-xs text-muted-foreground">
            Todos los planes incluyen acceso a la plataforma Metatok. Sin permanencia ni costes ocultos.
          </p>
          <p className="text-xs text-muted-foreground flex items-center justify-center gap-1.5">
            <Shield className="h-3.5 w-3.5 text-accent" aria-hidden />
            ¿Necesitas algo específico?{" "}
            <a href="#contacto" className="text-primary hover:underline font-medium">
              Hablamos de un plan a medida →
            </a>
          </p>
        </motion.div>
      </div>
    </section>
  );
}
