import { useState } from "react";
import { motion } from "framer-motion";
import {
  Building2, HeartPulse, ShoppingBag, Users2, BriefcaseBusiness, Hotel,
  XCircle, CheckCircle2, ArrowRight, Zap, TrendingUp,
  type LucideIcon,
} from "lucide-react";
import { fadeUp, stagger, viewportOnce } from "./motion";

/* ─────────────────────────────────────────────────────────────
   TIPOS
───────────────────────────────────────────────────────────── */
type Sector = {
  id: string;
  icono: LucideIcon;
  sector: string;
  tagline: string;
  descripcion: string;
  actual: string[];
  mejoras: string[];
  resultados: { kpi: string; desc: string }[];
  avanzado: string[];
};

/* ─────────────────────────────────────────────────────────────
   DATOS
───────────────────────────────────────────────────────────── */
const SECTORES: Sector[] = [
  {
    id: "inmobiliaria",
    icono: Building2,
    sector: "Inmobiliarias y Agencias",
    tagline: "Pierde cero compradores por respuesta tardía.",
    descripcion:
      "El 78% de los compradores elige al agente que responde primero. Con Metatok, tu agencia responde en segundos, cualifica la intención y agenda visitas mientras tu equipo trabaja en otras captaciones.",
    actual: [
      "Leads sin respuesta durante horas (o días)",
      "Visitas canceladas por falta de confirmación",
      "Agentes perdiendo tiempo con prospectos fríos",
      "CRM con datos desactualizados o incompletos",
    ],
    mejoras: [
      "Respuesta automática en <60 segundos por WhatsApp o web",
      "Cualificación: zona, presupuesto y urgencia antes de la visita",
      "Agenda de visitas gestionada por IA sin intervención humana",
      "CRM actualizado al instante con cada conversación",
    ],
    resultados: [
      { kpi: "+47%", desc: "visitas agendadas" },
      { kpi: "−65%", desc: "tiempo de respuesta" },
      { kpi: "3×",   desc: "más leads cualificados" },
    ],
    avanzado: [
      "Voicebot para llamadas entrantes fuera de horario",
      "Secuencias de nutrición por WhatsApp hasta el cierre",
      "Dashboard de rendimiento por agente y zona",
    ],
  },
  {
    id: "clinicas",
    icono: HeartPulse,
    sector: "Clínicas y Salud",
    tagline: "Llena tu agenda sin llamadas manuales.",
    descripcion:
      "Las clínicas pierden hasta un 40% de sus citas por cancelaciones sin seguimiento o pacientes que no llegan. Metatok automatiza la captación, confirma citas y reduce las ausencias.",
    actual: [
      "Pacientes que llaman y no encuentran respuesta",
      "Cancelaciones sin aviso y huecos en la agenda",
      "Recepcionistas dedicando tiempo a recordatorios",
      "Sin seguimiento post-consulta para fidelizar",
    ],
    mejoras: [
      "Chat web + WhatsApp que agenda 24/7 sin esperas",
      "Confirmación automática + recordatorio 24h antes",
      "Secuencia de seguimiento post-consulta personalizada",
      "Reducción de ausencias con recordatorios inteligentes",
    ],
    resultados: [
      { kpi: "−40%", desc: "pacientes ausentes" },
      { kpi: "+35%", desc: "nuevas citas/mes" },
      { kpi: "20h",  desc: "ahorradas en recepción/sem." },
    ],
    avanzado: [
      "Encuestas de satisfacción automatizadas post-visita",
      "Reactivación de pacientes inactivos por IA",
      "Integración con software de gestión clínica (HIS)",
    ],
  },
  {
    id: "ecommerce",
    icono: ShoppingBag,
    sector: "E-commerce y Retail",
    tagline: "Recupera carritos y convierte visitantes en compradores.",
    descripcion:
      "El 70% de los carritos se abandonan. Metatok activa secuencias automáticas de recuperación, resuelve dudas de compra en tiempo real y convierte dudas en pedidos sin necesidad de un equipo de soporte grande.",
    actual: [
      "Alto porcentaje de abandono de carrito sin recuperación",
      "Consultas de producto sin respuesta inmediata",
      "Soporte saturado con dudas repetitivas",
      "Sin segmentación automática de clientes",
    ],
    mejoras: [
      "Agente IA resuelve dudas de producto en tiempo real",
      "Secuencia automática de recuperación de carrito",
      "Upsell y cross-sell inteligente según historial",
      "Cualificación y segmentación de leads para campañas",
    ],
    resultados: [
      { kpi: "+28%", desc: "recuperación de carrito" },
      { kpi: "+22%", desc: "ticket medio por upsell" },
      { kpi: "−50%", desc: "carga de soporte" },
    ],
    avanzado: [
      "Agente de posventa para fidelización y recompra",
      "Integración con Shopify, WooCommerce, Magento",
      "Reportes de conversación para optimizar catálogo",
    ],
  },
  {
    id: "agencias",
    icono: Users2,
    sector: "Agencias y Consultoras",
    tagline: "Escala tu captación sin escalar tu equipo.",
    descripcion:
      "Las agencias pierden contratos porque los leads no reciben atención rápida o el proceso de onboarding es lento. Metatok automatiza la primera fase del funnel para que tu equipo cierre, no persiga.",
    actual: [
      "Leads de campañas sin seguimiento inmediato",
      "Proceso de onboarding manual y lento",
      "Comerciales dedicando tiempo a prospectos no cualificados",
      "Sin métricas claras de conversión por canal",
    ],
    mejoras: [
      "Lead seguido en <2 minutos tras completar el formulario",
      "Cualificación de presupuesto, urgencia y fit antes de la llamada",
      "Onboarding inicial automatizado con documentación",
      "Dashboard de conversión por canal y campaña",
    ],
    resultados: [
      { kpi: "+60%", desc: "conversión de leads a reunión" },
      { kpi: "−70%", desc: "tiempo de cualificación manual" },
      { kpi: "4×",   desc: "más propuestas enviadas/mes" },
    ],
    avanzado: [
      "Agente de nutrición para leads fríos a largo plazo",
      "Integración con CRM propio o HubSpot/Salesforce",
      "Reporte semanal automático al equipo comercial",
    ],
  },
  {
    id: "despachos",
    icono: BriefcaseBusiness,
    sector: "Despachos Profesionales",
    tagline: "Convierte consultas en clientes sin perder tiempo en pre-filtros.",
    descripcion:
      "Despachos legales, fiscales y laborales pierden oportunidades por respuestas tardias o por dedicar horas a consultas no cualificadas. MetaTok filtra, prioriza y agenda solo los casos con alto encaje.",
    actual: [
      "Consultas iniciales por email o WhatsApp sin seguimiento rapido",
      "Tiempo del equipo senior invertido en leads sin potencial",
      "Informacion inicial incompleta antes de la primera reunion",
      "Falta de trazabilidad comercial por area o tipo de caso",
    ],
    mejoras: [
      "Respuesta automatica en minutos con captacion estructurada",
      "Pre-cualificacion por urgencia, especialidad y presupuesto",
      "Agenda automatica con envio de documentacion previa",
      "CRM y pipeline actualizados por tipo de servicio",
    ],
    resultados: [
      { kpi: "+52%", desc: "consultas cualificadas" },
      { kpi: "−58%", desc: "tiempo en pre-filtro" },
      { kpi: "2.6×", desc: "reuniones con alto fit" },
    ],
    avanzado: [
      "Rutas de atencion por area: mercantil, laboral, fiscal, civil",
      "Recordatorios automaticos de hitos y documentacion",
      "Panel de conversion por fuente y especialidad",
    ],
  },
  {
    id: "hoteles",
    icono: Hotel,
    sector: "Hoteles y Hospedaje",
    tagline: "Más reservas directas, menos fricción y mejor experiencia 24/7.",
    descripcion:
      "Hoteles y apartahoteles compiten por velocidad de respuesta y personalizacion. MetaTok atiende consultas de disponibilidad, tarifas y servicios en tiempo real para aumentar reservas directas y reducir carga operativa.",
    actual: [
      "Consultas de disponibilidad sin respuesta inmediata",
      "Dependencia excesiva de OTAs para cerrar reservas",
      "Recepcion saturada con preguntas repetitivas",
      "Poca automatizacion en upsell y pre-estadia",
    ],
    mejoras: [
      "Asistente IA multicanal para web, WhatsApp e Instagram",
      "Cotizacion automatica por fechas, tipo de habitacion y ocupacion",
      "Secuencias de pre-check-in y upsell de servicios",
      "Integracion con PMS/CRM para seguimiento unificado",
    ],
    resultados: [
      { kpi: "+34%", desc: "reservas directas" },
      { kpi: "−46%", desc: "carga en recepcion" },
      { kpi: "+21%", desc: "ticket medio por upsell" },
    ],
    avanzado: [
      "Bot de concierge para dudas durante la estancia",
      "Campanas automaticas para repeticion y temporada baja",
      "Panel de rendimiento por canal y tipo de reserva",
    ],
  },
];

/* ─────────────────────────────────────────────────────────────
   COMPONENTE PRINCIPAL
───────────────────────────────────────────────────────────── */
export function Sectores() {
  const [activo, setActivo] = useState<number>(0);

  // Derivamos el sector activo DENTRO del render, sin cachear en variable fuera
  const sectorActivo   = SECTORES[activo];
  const TabIconActivo  = sectorActivo.icono;

  return (
    <section
      id="sectores"
      className="py-8 md:py-12 border-y border-border bg-[var(--color-surface)]"
      aria-labelledby="sectores-heading"
    >
      <div className="container-mt">

        {/* ── Encabezado ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="max-w-3xl mb-8"
        >
          <motion.span variants={fadeUp} className="text-xs uppercase tracking-widest text-primary font-semibold">
            Por sector
          </motion.span>
          <motion.h2
            id="sectores-heading"
            variants={fadeUp}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            Tu sector, tus resultados,{" "}
            <span className="text-primary">tu solución a medida</span>
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-2 text-base text-muted-foreground leading-snug">
            No vendemos tecnología genérica. Diseñamos la automatización exacta
            que tu tipo de negocio necesita para convertir más.
          </motion.p>
        </motion.div>

        {/* ── Selector de sector ── */}
        <div className="flex flex-wrap gap-2.5 mb-8">
          {SECTORES.map((s, i) => {
            const TabIc = s.icono;
            const isActive = i === activo;
            return (
              <button
                key={s.id}
                id={`tab-${s.id}`}
                type="button"
                onClick={() => setActivo(i)}
                className={[
                  "flex items-center gap-2 rounded-xl border px-4 py-2.5 text-sm font-semibold transition-all duration-200",
                  isActive
                    ? "border-primary bg-primary/10 text-primary"
                    : "border-border bg-card text-muted-foreground hover:border-primary/40 hover:text-foreground",
                ].join(" ")}
              >
                <TabIc className="h-4 w-4 shrink-0" aria-hidden />
                {s.sector}
              </button>
            );
          })}
        </div>

        {/* ── Panel del sector (renderiza directamente desde sectorActivo) ── */}
        <motion.div
          key={`panel-${activo}`}
          initial={{ opacity: 0, y: 12 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.22, ease: "easeOut" }}
        >
          {/* Header del sector */}
          <div className="mb-5 flex items-start gap-3 rounded-xl border border-primary/30 bg-primary/5 p-4">
            <div className="inline-flex h-12 w-12 shrink-0 items-center justify-center rounded-xl border border-primary/30 bg-primary/15">
              <TabIconActivo className="h-6 w-6 text-primary" aria-hidden />
            </div>
            <div>
              <div className="text-xs font-semibold uppercase tracking-widest text-primary mb-1">
                {sectorActivo.sector}
              </div>
              <h3 className="text-xl font-bold text-foreground">{sectorActivo.tagline}</h3>
              <p className="mt-2 text-sm text-muted-foreground leading-relaxed max-w-2xl">
                {sectorActivo.descripcion}
              </p>
            </div>
          </div>

          {/* Grid: Estado actual | Con Metatok | Resultados */}
          <div className="grid md:grid-cols-3 gap-5 mb-5">

            {/* Estado actual */}
            <div className="rounded-2xl border border-destructive/20 bg-card p-6">
              <div className="flex items-center gap-2 mb-5">
                <XCircle className="h-5 w-5 text-destructive/70" aria-hidden />
                <span className="text-sm font-semibold text-foreground">Estado actual</span>
              </div>
              <ul className="space-y-3">
                {sectorActivo.actual.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-muted-foreground">
                    <XCircle className="h-4 w-4 text-destructive/50 mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Con Metatok */}
            <div className="rounded-2xl border border-primary/30 bg-card p-6 relative overflow-hidden">
              <div
                aria-hidden
                className="absolute inset-0 -z-10 opacity-[0.05]"
                style={{ backgroundImage: "radial-gradient(circle at 80% 20%, var(--color-primary) 0, transparent 70%)" }}
              />
              <div className="flex items-center gap-2 mb-5">
                <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden />
                <span className="text-sm font-semibold text-foreground">Con Metatok</span>
              </div>
              <ul className="space-y-3">
                {sectorActivo.mejoras.map((item) => (
                  <li key={item} className="flex items-start gap-2.5 text-sm text-foreground">
                    <CheckCircle2 className="h-4 w-4 text-primary mt-0.5 shrink-0" aria-hidden />
                    {item}
                  </li>
                ))}
              </ul>
            </div>

            {/* Resultados */}
            <div className="rounded-xl border border-border bg-card p-4 flex flex-col">
              <div className="flex items-center gap-2 mb-5">
                <TrendingUp className="h-5 w-5 text-accent" aria-hidden />
                <span className="text-sm font-semibold text-foreground">Resultados medios</span>
              </div>
              <div className="flex flex-col gap-4 flex-1">
                {sectorActivo.resultados.map((r) => (
                  <div key={r.kpi} className="flex items-center gap-4 rounded-xl border border-border bg-background/50 px-4 py-3">
                    <span className="text-2xl font-extrabold text-primary shrink-0">{r.kpi}</span>
                    <span className="text-sm text-muted-foreground">{r.desc}</span>
                  </div>
                ))}
              </div>
              <p className="mt-4 text-[10px] text-muted-foreground/70">
                *Promedios en clientes tras 60 días de despliegue.
              </p>
            </div>
          </div>

          {/* Mejoras avanzadas */}
          <div className="rounded-xl border border-border bg-card p-4">
            <div className="flex items-center gap-2 mb-4">
              <Zap className="h-4 w-4 text-accent shrink-0" aria-hidden />
              <span className="text-sm font-semibold text-foreground">
                Opciones adicionales para escalar
              </span>
            </div>
            <ul className="flex flex-wrap gap-3">
              {sectorActivo.avanzado.map((item) => (
                <li
                  key={item}
                  className="inline-flex items-center gap-2 rounded-lg border border-primary/20 bg-primary/5 px-3 py-1.5 text-xs font-medium text-primary"
                >
                  <ArrowRight className="h-3 w-3 shrink-0" aria-hidden />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        </motion.div>

        {/* ── CTA ── */}
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="mt-6 text-center"
        >
          <a
            href="#auditoria"
            className="inline-flex items-center gap-2 rounded-2xl bg-primary px-8 py-4 text-base font-bold text-primary-foreground hover:bg-primary/90 cta-glow transition-all duration-300 group"
          >
            Quiero una solución para mi sector
            <ArrowRight className="h-5 w-5 transition-transform duration-300 group-hover:translate-x-1" />
          </a>
          <p className="mt-3 text-xs text-muted-foreground">
            Auditoría gratuita · Sin compromiso · Respuesta en menos de 24 h
          </p>
        </motion.div>
      </div>
    </section>
  );
}
