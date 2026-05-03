/** Datos de sectores (sin iconos). Los iconos se resuelven por `id` en el componente. */

export type SectorCopy = {
  id: string;
  sector: string;
  tagline: string;
  descripcion: string;
  actual: string[];
  mejoras: string[];
  resultados: { kpi: string; desc: string }[];
  avanzado: string[];
};

export const sectoresEs: SectorCopy[] = [
  {
    id: "inmobiliaria",
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
      { kpi: "3×", desc: "más leads cualificados" },
    ],
    avanzado: [
      "Voicebot para llamadas entrantes fuera de horario",
      "Secuencias de nutrición por WhatsApp hasta el cierre",
      "Dashboard de rendimiento por agente y zona",
    ],
  },
  {
    id: "clinicas",
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
      { kpi: "20h", desc: "ahorradas en recepción/sem." },
    ],
    avanzado: [
      "Encuestas de satisfacción automatizadas post-visita",
      "Reactivación de pacientes inactivos por IA",
      "Integración con software de gestión clínica (HIS)",
    ],
  },
  {
    id: "ecommerce",
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
      { kpi: "4×", desc: "más propuestas enviadas/mes" },
    ],
    avanzado: [
      "Agente de nutrición para leads fríos a largo plazo",
      "Integración con CRM propio o HubSpot/Salesforce",
      "Reporte semanal automático al equipo comercial",
    ],
  },
  {
    id: "despachos",
    sector: "Despachos Profesionales",
    tagline: "Convierte consultas en clientes sin perder tiempo en pre-filtros.",
    descripcion:
      "Despachos legales, fiscales y laborales pierden oportunidades por respuestas tardías o por dedicar horas a consultas no cualificadas. MetaTok filtra, prioriza y agenda solo los casos con alto encaje.",
    actual: [
      "Consultas iniciales por email o WhatsApp sin seguimiento rápido",
      "Tiempo del equipo senior invertido en leads sin potencial",
      "Información inicial incompleta antes de la primera reunión",
      "Falta de trazabilidad comercial por área o tipo de caso",
    ],
    mejoras: [
      "Respuesta automática en minutos con captación estructurada",
      "Pre-cualificación por urgencia, especialidad y presupuesto",
      "Agenda automática con envío de documentación previa",
      "CRM y pipeline actualizados por tipo de servicio",
    ],
    resultados: [
      { kpi: "+52%", desc: "consultas cualificadas" },
      { kpi: "−58%", desc: "tiempo en pre-filtro" },
      { kpi: "2.6×", desc: "reuniones con alto fit" },
    ],
    avanzado: [
      "Rutas de atención por área: mercantil, laboral, fiscal, civil",
      "Recordatorios automáticos de hitos y documentación",
      "Panel de conversión por fuente y especialidad",
    ],
  },
  {
    id: "hoteles",
    sector: "Hoteles y Hospedaje",
    tagline: "Más reservas directas, menos fricción y mejor experiencia 24/7.",
    descripcion:
      "Hoteles y apartahoteles compiten por velocidad de respuesta y personalización. MetaTok atiende consultas de disponibilidad, tarifas y servicios en tiempo real para aumentar reservas directas y reducir carga operativa.",
    actual: [
      "Consultas de disponibilidad sin respuesta inmediata",
      "Dependencia excesiva de OTAs para cerrar reservas",
      "Recepción saturada con preguntas repetitivas",
      "Poca automatización en upsell y pre-estancia",
    ],
    mejoras: [
      "Asistente IA multicanal para web, WhatsApp e Instagram",
      "Cotización automática por fechas, tipo de habitación y ocupación",
      "Secuencias de pre-check-in y upsell de servicios",
      "Integración con PMS/CRM para seguimiento unificado",
    ],
    resultados: [
      { kpi: "+34%", desc: "reservas directas" },
      { kpi: "−46%", desc: "carga en recepción" },
      { kpi: "+21%", desc: "ticket medio por upsell" },
    ],
    avanzado: [
      "Bot de concierge para dudas durante la estancia",
      "Campañas automáticas para repetición y temporada baja",
      "Panel de rendimiento por canal y tipo de reserva",
    ],
  },
];

export const sectoresEn: SectorCopy[] = [
  {
    id: "inmobiliaria",
    sector: "Real Estate & Agencies",
    tagline: "Stop losing buyers to slow replies.",
    descripcion:
      "78% of buyers choose the agent who responds first. With MetaTok your agency replies in seconds, qualifies intent and books viewings while your team focuses on other deals.",
    actual: [
      "Leads unanswered for hours or days",
      "Viewings cancelled due to missing confirmations",
      "Agents wasting time on cold prospects",
      "CRM data outdated or incomplete",
    ],
    mejoras: [
      "Automatic reply in under 60s on WhatsApp or web",
      "Qualification: area, budget and urgency before the visit",
      "Viewings managed by AI without manual hand-offs",
      "CRM updated instantly from every conversation",
    ],
    resultados: [
      { kpi: "+47%", desc: "booked viewings" },
      { kpi: "−65%", desc: "response time" },
      { kpi: "3×", desc: "more qualified leads" },
    ],
    avanzado: [
      "Voicebot for inbound calls after hours",
      "WhatsApp nurture sequences through close",
      "Performance dashboard by agent and zone",
    ],
  },
  {
    id: "clinicas",
    sector: "Clinics & Healthcare",
    tagline: "Fill your schedule without manual calling.",
    descripcion:
      "Clinics lose up to 40% of appointments to no-shows and poor follow-up. MetaTok automates intake, confirms visits and cuts absenteeism.",
    actual: [
      "Patients call and get no answer",
      "Last-minute cancellations and empty slots",
      "Front desk time spent on reminders",
      "No post-visit follow-up to drive loyalty",
    ],
    mejoras: [
      "Web + WhatsApp booking 24/7 with no wait",
      "Auto confirmation + 24h reminder",
      "Personalised post-consult follow-up",
      "Fewer no-shows with smart reminders",
    ],
    resultados: [
      { kpi: "−40%", desc: "no-shows" },
      { kpi: "+35%", desc: "new appointments/mo" },
      { kpi: "20h", desc: "saved at front desk/wk" },
    ],
    avanzado: [
      "Automated satisfaction surveys after visits",
      "Reactivation of inactive patients with AI",
      "Integration with clinic management (HIS)",
    ],
  },
  {
    id: "ecommerce",
    sector: "E-commerce & Retail",
    tagline: "Recover carts and turn visitors into buyers.",
    descripcion:
      "About 70% of carts are abandoned. MetaTok runs recovery sequences, answers buying questions in real time and turns doubts into orders without a huge support team.",
    actual: [
      "High cart abandonment with no recovery",
      "Product questions left unanswered",
      "Support buried in repetitive queries",
      "No automatic customer segmentation",
    ],
    mejoras: [
      "AI agent answers product questions live",
      "Automatic cart recovery sequences",
      "Smart upsell/cross-sell from history",
      "Lead scoring and segments for campaigns",
    ],
    resultados: [
      { kpi: "+28%", desc: "cart recovery" },
      { kpi: "+22%", desc: "avg. ticket from upsell" },
      { kpi: "−50%", desc: "support load" },
    ],
    avanzado: [
      "Post-sale agent for loyalty and repeat buys",
      "Shopify, WooCommerce, Magento integrations",
      "Conversation insights to improve catalogue",
    ],
  },
  {
    id: "agencias",
    sector: "Agencies & Consultancies",
    tagline: "Scale demand without scaling headcount.",
    descripcion:
      "Agencies lose deals when leads are not followed up fast or onboarding drags. MetaTok automates the top of the funnel so your team closes instead of chasing.",
    actual: [
      "Campaign leads with no immediate follow-up",
      "Slow, manual onboarding",
      "Sales time on poorly qualified prospects",
      "No clear conversion metrics by channel",
    ],
    mejoras: [
      "Lead contacted in under 2 minutes after form submit",
      "Budget, urgency and fit scored before the call",
      "Automated onboarding with documentation",
      "Conversion dashboard by channel and campaign",
    ],
    resultados: [
      { kpi: "+60%", desc: "lead-to-meeting conversion" },
      { kpi: "−70%", desc: "manual qualification time" },
      { kpi: "4×", desc: "more proposals sent/mo" },
    ],
    avanzado: [
      "Long-term nurture for cold leads",
      "CRM integration: HubSpot, Salesforce or yours",
      "Weekly automated report for sales",
    ],
  },
  {
    id: "despachos",
    sector: "Professional Firms",
    tagline: "Turn enquiries into clients without manual triage.",
    descripcion:
      "Legal, tax and HR firms lose revenue to slow replies and hours spent on low-fit enquiries. MetaTok filters, prioritises and books only high-fit cases.",
    actual: [
      "Initial enquiries on email/WhatsApp with slow follow-up",
      "Senior time spent on low-potential leads",
      "Incomplete information before first meeting",
      "Weak commercial traceability by practice area",
    ],
    mejoras: [
      "Structured intake with reply in minutes",
      "Pre-qualify urgency, practice area and budget",
      "Automatic scheduling with prior documentation",
      "CRM and pipeline updated by service line",
    ],
    resultados: [
      { kpi: "+52%", desc: "qualified enquiries" },
      { kpi: "−58%", desc: "triage time" },
      { kpi: "2.6×", desc: "high-fit meetings" },
    ],
    avanzado: [
      "Routes by area: corporate, employment, tax, civil",
      "Automatic reminders for milestones and documents",
      "Conversion panel by source and specialty",
    ],
  },
  {
    id: "hoteles",
    sector: "Hotels & Lodging",
    tagline: "More direct bookings, less friction, 24/7 experience.",
    descripcion:
      "Hotels compete on speed and personalisation. MetaTok answers availability, rates and services in real time to grow direct bookings and cut ops load.",
    actual: [
      "Availability questions without instant answers",
      "Heavy reliance on OTAs to close bookings",
      "Front desk overloaded with repetitive questions",
      "Little automation in upsell and pre-stay",
    ],
    mejoras: [
      "Multichannel AI assistant: web, WhatsApp, Instagram",
      "Auto quotes by dates, room type and occupancy",
      "Pre-check-in and service upsell sequences",
      "PMS/CRM integration for unified follow-up",
    ],
    resultados: [
      { kpi: "+34%", desc: "direct bookings" },
      { kpi: "−46%", desc: "front desk load" },
      { kpi: "+21%", desc: "avg. ticket from upsell" },
    ],
    avanzado: [
      "Concierge bot during the stay",
      "Campaigns for repeat stays and low season",
      "Performance by channel and booking type",
    ],
  },
];
