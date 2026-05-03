import { sectoresEs, sectoresEn } from "./sectoresI18n";

/** Textos de landing no incluidos en el bloque principal de translations.ts */

export const pageSectionsEs = {
  painPoints: {
    kicker: "La fuga de dinero",
    title: 'Tres costes silenciosos ',
    titleAccent: "que ya estás pagando",
    subtitle:
      "Cada minuto sin automatización es dinero que se va. Identifica exactamente cuánto te está costando el statu quo.",
    cards: [
      {
        stat: "70%",
        title: "Lead frío",
        text: "El 70% de los leads se pierden por responder después de 5 minutos. La velocidad lo es todo.",
      },
      {
        stat: "1.000",
        title: "Saturación humana",
        text: "Tu equipo humano no puede atender 1.000 chats a la vez. Los agentes MetaTok sí lo hacen.",
      },
      {
        stat: "Cero cierre",
        title: "Sin cierre autónomo",
        text: "Los bots comunes solo dan información. Los agentes MetaTok están programados para cerrar.",
      },
    ],
  },
  socialProof: {
    aria: "Escala de la plataforma",
    prefix: "ya está procesando",
    millions: "+12 millones",
    suffix: "de mensajes al mes en conversaciones de venta.",
  },
  brands: {
    line:
      "Sistemas robustos preparados para facturación masiva. Seguridad de grado bancario para tus datos.",
  },
  metaTokEngine: {
    pill: "MetaTok Engine V5",
    title: "La Arquitectura detrás de la ",
    titleAccent: "Conversión Autónoma",
    subtitle:
      "Descubre el motor cognitivo que no solo responde preguntas, sino que califica leads, supera objeciones y cierra ventas sin intervención humana.",
    coreTitle: "Procesamiento Cognitivo en Tiempo Real",
    coreText:
      "El núcleo V5 analiza intención, sentimiento y contexto en milisegundos. Adapta el guion de ventas dinámicamente basándose en más de 10.000 interacciones previas.",
    omniTitle: "Omnicanalidad Total",
    omniText: "WhatsApp, Instagram y Web conectados a un único cerebro central.",
    crmTitle: "Sincronización CRM",
    crmText: "Integración nativa bidireccional. Todo queda registrado.",
    autoTitle: "Auto-optimización Constante",
    autoText:
      "El sistema nunca deja de aprender. Realiza pruebas A/B automatizadas en sus propios mensajes para encontrar las combinaciones que generan mayor tasa de respuesta.",
    footerStats: [
      { v: "< 0.5s", l: "Latencia media" },
      { v: "99.9%", l: "Uptime garantizado" },
      { v: "AES-256", l: "Cifrado de datos" },
    ],
  },
  comparativa: {
    pill: "La Decisión",
    title: "MetaTok vs. ",
    titleMuted: "chatbots tradicionales",
    subtitle:
      "Un árbol de decisiones aburrido frente a una IA generativa orientada a conversión. La diferencia entre perder un lead y cerrar una venta.",
    colFeature: "Característica",
    colOld: "Bot Tradicional",
    colNew: "MetaTok AI",
    features: [
      {
        name: "Calidad de Respuesta",
        old: "Estática y basada en botones (Árbol de decisiones)",
        new: "Fluida, humana y persuasiva (IA Generativa)",
      },
      {
        name: "Integración",
        old: "Limitada o requiere Zapier complejo",
        new: "Nativa con CRMs, Apps y Sector Público",
      },
      {
        name: "Objetivo Principal",
        old: "Dar información y derivar a un humano",
        new: "Superar objeciones y cerrar la venta o cita",
      },
      {
        name: "Configuración",
        old: "Meses mapeando flujos interminables",
        new: "En minutos, entrenado con tus propios documentos",
      },
      {
        name: "Soporte",
        old: "Sistema de tickets básico",
        new: "Equipo de éxito dedicado y optimización continua",
      },
    ],
  },
  diagnosticoCTA: {
    kicker: "Antes y después",
    title: "¿Reconoces la situación ",
    titleAccent: "de tu negocio hoy?",
    subtitleLead: "La mayoría de negocios pierde entre un ",
    subtitleBold: "40% y un 60%",
    subtitleEnd: " de sus leads por falta de respuesta rápida y seguimiento sistemático.",
    colLeftBadge: "Situación actual",
    colLeftTitle: "Sin automatización",
    colRightBadge: "Con Metatok",
    colRightTitle: "Automatización activa",
    situacionActual: [
      "Leads que no reciben respuesta en menos de 5 minutos",
      "Tu equipo pierde horas en prospectos que nunca comprarán",
      "Citas que se pierden por falta de seguimiento",
      "CRM desactualizado con datos duplicados o incompletos",
      "Sin presencia activa fuera del horario comercial",
    ],
    conMetatok: [
      "Respuesta inmediata a cada lead, 24/7, en todos tus canales",
      "Solo hablas con prospectos listos para comprar",
      "Agendamiento automático con confirmación y recordatorios",
      "CRM actualizado en tiempo real, sin intervención humana",
      "Tu negocio capta y cualifica incluso mientras duermes",
    ],
    cta: "Deja de perder leads: auditoría gratuita en 24 h",
    footnote: "Sin compromiso · Sin permanencia · Respuesta en menos de 24 h",
  },
  canalesSection: {
    kicker: "Integración omnicanal",
    title: "Tu IA donde ya están ",
    titleAccent: "tus clientes",
    subtitle:
      "Desplegamos en los canales que tus prospectos ya usan. Sin fricciones, sin cambios de plataforma para ellos.",
    channels: [
      { key: "phone", label: "Teléfono", desc: "Llamadas de voz IA" },
      { key: "web", label: "Web", desc: "Chat en tu sitio web" },
      { key: "whatsapp", label: "WhatsApp", desc: "El canal más usado" },
      { key: "instagram", label: "Instagram", desc: "DMs automatizados" },
      { key: "api", label: "API", desc: "Integra cualquier sistema" },
    ],
    otherChannel: "¿Usas otro canal o sistema interno?",
    contactUs: "Consúltanos →",
  },
  planesSection: {
    kicker: "Planes y Precios",
    title: "Invierte en resultados, ",
    titleAccent: "no en horas extra",
    subtitle: "Sin permanencia. Sin costes ocultos. Solo escala cuando lo necesites.",
    popular: "Más Popular",
    billing: {
      mensual: { label: "Mensual", suffix: "/mes", saving: null as string | null },
      trimestral: { label: "Trimestral", suffix: "/trimestre", saving: "Ahorra ~16%" },
      anual: { label: "Anual", suffix: "/año", saving: "Ahorra ~29%" },
    },
    foot1: "Todos los planes incluyen acceso a la plataforma Metatok. Sin permanencia ni costes ocultos.",
    foot2Lead: "¿Necesitas algo específico?",
    foot2Link: "Hablamos de un plan a medida →",
    planes: [
      {
        name: "Starter",
        tagline: "Ideal para equipos pequeños que quieren empezar con IA sin riesgo.",
        price: { mensual: "99", trimestral: "199", anual: "679" },
        features: [
          "1 canal integrado (Web o WhatsApp)",
          "Asistente IA básico con NLP",
          "Hasta 500 conversaciones/mes",
          "Panel de control básico",
          "Cualificación automática de leads",
          "Soporte por email",
        ],
        cta: "Iniciar ahora",
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
        cta: "Escalar mis ventas",
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
        cta: "Solicitar propuesta",
      },
    ],
  },
  testimoniosSection: {
    kicker: "Historias de Éxito",
    title: "Casos reales de negocios que ya ",
    titleAccent: "escalaron su captación",
    subtitle:
      "Resultados comprobados por líderes en sus respectivos sectores tras integrar los agentes IA de Metatok en su operación.",
    items: [
      {
        nombre: "David Gómez",
        cargo: "Director de Ventas, inmobiliaria",
        texto:
          "Metatok.ai nos cambió el ritmo. Los bots califican leads 24/7 y solo le pasan al equipo los que vienen calientes. Subieron las citas y bajó el esfuerzo.",
      },
      {
        nombre: "Dra. Laura Peñafiel",
        cargo: "Dirección de clínica",
        texto:
          "Con el chatbot de Metatok.ai los pacientes agendan, preguntan y confirman solos. Los seguimientos automáticos nos ayudaron a recuperar citas perdidas.",
      },
      {
        nombre: "Ana Fuentes",
        cargo: "Gerente de Operaciones, marketplace digital",
        texto:
          "El 80% de las consultas ya las atiende el chatbot: pedidos, devoluciones, estatus. Bajamos carga al equipo sin bajar la calidad. Todo un éxito.",
      },
      {
        nombre: "Luis Carrión",
        cargo: 'Propietario, "Viajes Sin Fronteras"',
        texto:
          "Metatok.ai manda confirmaciones y recordatorios automático, y los asistentes de voz responden lo básico. Nos ahorró horas de gestión cada semana.",
      },
      {
        nombre: "Juan Valdés",
        cargo: 'Director de Ventas, "TecnoCenter"',
        texto:
          "El chatbot en la web atiende 24/7: ficha técnica, precios y disponibilidad. Llegan clientes más informados y el tráfico cualificado subió. Excelente.",
      },
      {
        nombre: "Ricardo Garrido",
        cargo: 'Abogado socio, "Garrido & Asociados"',
        texto:
          "Metatok.ai filtra los prospectos, agenda la primera consulta y nos deja el contexto. Así solo vemos a quien realmente necesita nuestros servicios.",
      },
    ],
  },
  auditoria: {
    badge: "Auditoría 100% gratuita · Sin compromiso",
    title: "Descubre exactamente cuánto ",
    titleAccent: "estás dejando de ganar",
    subtitle:
      "No es una llamada comercial. Es una sesión técnica gratuita donde un experto en automatización analiza tu operación real y te muestra — con números — cuánto puedes mejorar.",
    incluye: [
      "Análisis de tus canales y volumen de tráfico actuales",
      "Detección de fugas de conversión en tu funnel",
      "Mapa estratégico personalizado con IA",
      "Estimación de impacto real en facturación",
    ],
    stats: [
      { value: "+38%", label: "leads recuperados" },
      { value: "22h", label: "ahorradas / semana" },
      { value: "+54%", label: "citas agendadas" },
      { value: "+27%", label: "tasa de conversión" },
    ],
    statsTitle: "Resultados medios tras 60 días",
    statsDisclaimer:
      "*Promedios observados en clientes reales. Los resultados pueden variar según sector y volumen.",
    cta: "Solicitar mi auditoría gratuita",
    ctaNote: "Plazas limitadas cada semana.",
    ctaNote2: "Respuesta garantizada en < 24 h.",
  },
  metaTokAcademy: {
    tracks: [
      {
        title: "Playbooks comerciales",
        text: "Guiones, objeciones y secuencias listas para aplicar en campo.",
      },
      {
        title: "Marketing de guerrilla",
        text: "Campañas, contenido y posicionamiento para acelerar captación.",
      },
      {
        title: "Escalado operativo",
        text: "Rituales y métricas para crecer sin perder conversión ni calidad.",
      },
    ],
    heading: "Formación para vender mejor y liderar tu categoría",
    sub:
      "No solo entregamos software. Entregamos metodología comercial, acompañamiento y entrenamiento continuo para convertir tu marca en referencia de mercado.",
    card1Label: "Ruta de acompañamiento",
    card1Title: "Del onboarding al cierre repetible",
    card1Text:
      "Sesiones en vivo, talleres tácticos y soporte de expertos para que tu equipo comercial implemente rápido, mida mejor y escale su tasa de cierre de forma sostenible.",
    card1Bullets: [
      "Webinars semanales, certificaciones y guías por vertical para equipos de ventas.",
      "Framework de conversión con IA: prospección, cualificación, objeciones y cierre.",
      "Mentoría en posicionamiento de marca para vender método, no solo tecnología.",
    ],
    dashTitle: "Academy Dashboard",
    cohort: "Cohorte activa",
    modules: [
      { n: "Módulo 01", t: "Arquitectura comercial con IA", p: 82 },
      { n: "Módulo 02", t: "Guiones de cierre por nicho", p: 64 },
      { n: "Módulo 03", t: "Escalado y liderazgo de equipo", p: 47 },
    ],
    supportKicker: "Soporte experto",
    supportTitle: "Mentoría directa + playbooks accionables",
    ctaPrimary: "Quiero entrar a MetaTok Academy",
    ctaSecondary: "Ver planes de acompañamiento",
  },
  eliteSolutions: {
    bullets: [
      "Identidad corporativa integral: marca, tonalidad visual y naming alineados a tu negocio.",
      "Distribución profesional en App Store y Google Play, o canal privado corporativo cuando lo necesites.",
      "Misma capa cognitiva MetaTok dentro de tu app: agentes que venden, cualifican y agendan 24/7.",
      "Paneles analíticos y reporting bajo tu white label para medir funnel y equipo comercial.",
      "Roadmaps y actualizaciones coordinadas sin que tu marca pierda el control narrativo ante el cliente.",
      "Opciones Enterprise: SLAs, privacidad (RGPD) y gobernanza de datos coherentes con tu compliance.",
    ],
    highlights: [
      {
        title: "Branding completo",
        text: "UI, tono, iconografía y experiencia coherente con tu marca.",
      },
      {
        title: "Publicación oficial",
        text: "Despliegue en App Store y Google Play o distribución privada enterprise.",
      },
      {
        title: "Cumplimiento enterprise",
        text: "RGPD, controles de acceso y trazabilidad para operación segura.",
      },
      {
        title: "Escala multinicho",
        text: "Una base técnica para múltiples verticales sin rehacer producto.",
      },
    ],
    kicker: "Producto",
    heading: "Tu app, tu marca, nuestra tecnología",
    sub:
      "Convertimos MetaTok en un producto white label listo para venta: experiencia nativa, arquitectura de conversión y operación comercial bajo tu identidad.",
    panelKicker: "Tu marca, nuestra potencia",
    panelText:
      "Creamos tu aplicación nativa con el motor de MetaTok integrado. Tú controlas marca, narrativa comercial y pricing; nosotros aceleramos la capa técnica y la conversión.",
    phoneBadge: "White Label",
    phoneTitle: "TuMarca Assistant",
    phoneSub: "Lead cualificado en 43s",
    float1: "+31% demo bookings",
    float2: "Marca 100% personalizada",
    cta: "Quiero mi app white label",
    secondaryCta: "Ver opciones enterprise",
    chatSteps: [
      { from: "bot" as const, text: "Hola, soy el asesor de TuMarca. ¿En qué te ayudo? 👋" },
      { from: "user" as const, text: "Quiero una propuesta para esta semana." },
      { from: "bot" as const, text: "¡Perfecto! ¿Prefieres reunión por videollamada o presencial?" },
      { from: "user" as const, text: "Videollamada, any day ✅" },
      { from: "bot" as const, text: "Agendado para mañana 10:30. Te mando confirmación 📅" },
      { from: "user" as const, text: "Genial, muchas gracias 🙌" },
      { from: "bot" as const, text: "¡Hasta mañana! Cualquier duda, aquí estoy 🚀" },
    ],
  },
  contactForm: {
    kicker: "Contacto",
    heading: "Hablemos de tu próxima ventaja competitiva",
    intro:
      "Escríbenos y un técnico senior te contactará en menos de 24 horas para agendar tu auditoría gratuita.",
    email: "info@metatok.ai",
    remote: "Servicio remoto · Cobertura internacional",
    gdprLine: "Tratamos tus datos según RGPD",
    boxTitle: "Sin compromiso",
    boxText:
      "No vendemos llamadas comerciales. Recibirás un análisis técnico real de cómo la IA puede maximizar tu facturación actual.",
    labels: {
      nombre: "Nombre",
      email: "Email",
      empresa: "Empresa",
      telefono: "Teléfono",
      web: "Sitio web (opcional)",
      mensaje: "¿Qué quieres automatizar? (opcional)",
    },
    placeholders: {
      nombre: "Tu nombre completo",
      email: "tucorreo@empresa.com",
      empresa: "Nombre de tu empresa",
      telefono: "+34 600 000 000",
      web: "https://tuempresa.com",
      mensaje: "Cuéntanos brevemente tu reto principal.",
    },
    consent:
      "Al enviar aceptas que te contactemos sobre tu solicitud de auditoría.",
    submit: "Solicitar auditoría",
    sending: "Enviando…",
    toastOk: "Solicitud enviada ✓",
    toastOkDesc: "Te contactaremos en menos de 24 horas.",
    toastErr: "No se pudo enviar tu solicitud",
    toastErrDesc: "Inténtalo de nuevo en unos instantes.",
    errors: {
      nombre: "Mínimo 2 caracteres",
      email: "Email no válido",
      empresa: "Indica tu empresa",
      telefono: "Teléfono no válido",
    },
    emailSubject: (empresa: string) => `Nueva solicitud de auditoría — ${empresa}`,
  },
  footerExtended: {
    nextKicker: "Siguiente paso",
    nextTitle: "Transforma tu tráfico en ingresos hoy mismo.",
    login: "Iniciar sesión",
    talkTeam: "Hablar con el equipo",
    blurb:
      "Instalamos departamentos de ventas con IA: prospectan, cualifican y cierran 24/7 — omnicanal, con CRM y listos para escala enterprise.",
    colServices: "Servicios",
    colSectors: "Sectores",
    colContact: "Contacto",
    services: [
      "Agentes de IA Conversacional",
      "Automatización de Procesos",
      "Cualificación de Leads",
      "Integración con CRM",
      "Agendamiento Automático",
      "Flow-works inteligentes",
    ],
    sectors: [
      "Inmobiliaria",
      "Salud & Clínicas",
      "E-commerce",
      "Consultoría",
      "Despachos Profesionales",
      "Hoteles",
    ],
    hq: "Sede: Madrid, España",
    hqNote: "Dirección fiscal completa bajo solicitud para licitaciones y contratos.",
    privacyLine: "100 % privacidad de datos (RGPD)",
    copyright: "Todos los derechos reservados.",
    terms: "Términos de servicio",
    rgpd: "RGPD / Privacidad",
  },
  floating: {
    liveDemo: "Live Demo",
    auditoria: "Auditoría gratis",
    whatsapp: "WhatsApp",
    contacto: "Contacto",
    menuAria: "Acciones de contacto",
    closeMenu: "Cerrar menú de contacto",
    openMenu: "Abrir menú de contacto",
  },
  serviciosUi: {
    chip: "Servicios",
    pill1: "+400% tasa de respuesta",
    pill2: "24/7 operativo",
    pill3: "Integración omnicanal",
    serviceNum: "Servicio",
    activation: "Activación inmediata",
    seeMore: "Ver más",
    stackKicker: "Stack completo",
    stackTitle: "Diseña tu arquitectura comercial en una sola llamada",
    stackText:
      "Te mostramos qué módulos necesitas primero, cuánto impacto esperar y cómo desplegarlo sin fricción.",
    stackCta: "Solicitar demo estratégica",
  },
  liveDemo: {
    aria: "Live demo de MetaTok",
    title: "Live Demo MetaTok",
    subtitle: "Agente de ventas en tiempo real",
    newChat: "Nuevo chat",
    close: "Cerrar demo",
    placeholder: "Escribe tu consulta…",
    send: "Enviar mensaje",
    wa: "Hablar con agente real por WhatsApp",
    initial1:
      "Hola, soy el agente de demo de MetaTok. Te muestro cómo podrías convertir más leads en tu negocio.",
    initial2:
      "Cuéntame tu sector y tu reto principal (ej: respuestas tardías, agenda vacía, leads fríos).",
    quick: [
      "Soy de inmobiliaria",
      "Tengo una clínica",
      "Quiero más reservas en hotel",
      "Necesito integrar con CRM",
    ],
    replies: {
      inmobiliaria:
        "Perfecto. En inmobiliaria solemos reducir el tiempo de respuesta y subir visitas agendadas con cualificación automática por zona y presupuesto.",
      clinica:
        "En clínicas activamos agenda 24/7 con recordatorios inteligentes. El objetivo es bajar ausencias y aumentar citas efectivas.",
      hotel:
        "Para hoteles, MetaTok atiende disponibilidad en tiempo real, impulsa reserva directa y automatiza upsell pre-estancia.",
      crm: "Nos integramos por API con CRM para sincronizar conversaciones, estados y próximas acciones del equipo comercial.",
      precio:
        "El coste depende de canales, integraciones y volumen. Si quieres, te preparo una estimación rápida en una auditoría sin compromiso.",
      default:
        "Entendido. Con MetaTok podemos automatizar respuesta, cualificación y seguimiento para llevar al lead hasta cita o venta en menos tiempo.",
    },
  },
  sectoresUi: {
    kicker: "Por sector",
    title: "Tu sector, tus resultados, ",
    titleAccent: "tu solución a medida",
    subtitle:
      "No vendemos tecnología genérica. Diseñamos la automatización exacta que tu tipo de negocio necesita para convertir más.",
    estadoActual: "Estado actual",
    conMetatok: "Con Metatok",
    resultados: "Resultados medios",
    resultadosNote: "*Promedios en clientes tras 60 días de despliegue.",
    avanzado: "Opciones adicionales para escalar",
    cta: "Quiero una solución para mi sector",
    ctaNote: "Auditoría gratuita · Sin compromiso · Respuesta en menos de 24 h",
    items: sectoresEs,
  },
} as const;

export const pageSectionsEn = {
  painPoints: {
    kicker: "Money leaking away",
    title: "Three silent costs ",
    titleAccent: "you’re already paying",
    subtitle:
      "Every minute without automation is revenue left on the table. See exactly what the status quo is costing you.",
    cards: [
      {
        stat: "70%",
        title: "Cold lead",
        text: "70% of leads are lost when you reply after 5 minutes. Speed is everything.",
      },
      {
        stat: "1,000",
        title: "Human saturation",
        text: "Your team can’t handle 1,000 chats at once. MetaTok agents can.",
      },
      {
        stat: "No close",
        title: "No autonomous close",
        text: "Basic bots only share information. MetaTok agents are built to close.",
      },
    ],
  },
  socialProof: {
    aria: "Platform scale",
    prefix: "is already processing",
    millions: "+12 million",
    suffix: "sales-conversation messages every month.",
  },
  brands: {
    line:
      "Enterprise-grade systems built for high-volume billing. Bank-grade security for your data.",
  },
  metaTokEngine: {
    pill: "MetaTok Engine V5",
    title: "The architecture behind ",
    titleAccent: "Autonomous Conversion",
    subtitle:
      "The cognitive engine that doesn’t just answer questions—it qualifies leads, handles objections and closes without human hand-offs.",
    coreTitle: "Real-time cognitive processing",
    coreText:
      "The V5 core reads intent, sentiment and context in milliseconds. It adapts the sales script dynamically from 10,000+ past interactions.",
    omniTitle: "Full omnichannel",
    omniText: "WhatsApp, Instagram and web wired to one central brain.",
    crmTitle: "CRM sync",
    crmText: "Native bidirectional integration. Everything is logged.",
    autoTitle: "Always-on optimisation",
    autoText:
      "The system never stops learning. It runs automated A/B tests on its own messages to maximise reply rates.",
    footerStats: [
      { v: "< 0.5s", l: "Median latency" },
      { v: "99.9%", l: "Uptime" },
      { v: "AES-256", l: "Data encryption" },
    ],
  },
  comparativa: {
    pill: "The choice",
    title: "MetaTok vs. ",
    titleMuted: "traditional chatbots",
    subtitle:
      "A rigid decision tree versus conversion-focused generative AI. The gap between losing a lead and closing the deal.",
    colFeature: "Feature",
    colOld: "Traditional bot",
    colNew: "MetaTok AI",
    features: [
      {
        name: "Reply quality",
        old: "Static, button-driven (decision tree)",
        new: "Fluid, human, persuasive (generative AI)",
      },
      {
        name: "Integration",
        old: "Limited or heavy Zapier workarounds",
        new: "Native CRM, apps and public-sector flows",
      },
      {
        name: "Primary goal",
        old: "Share info and hand off to a human",
        new: "Handle objections and close sale or booking",
      },
      {
        name: "Setup",
        old: "Months mapping endless branches",
        new: "Minutes, trained on your own documents",
      },
      {
        name: "Support",
        old: "Basic ticketing",
        new: "Dedicated success team and continuous optimisation",
      },
    ],
  },
  diagnosticoCTA: {
    kicker: "Before & after",
    title: "Does this sound like ",
    titleAccent: "your business today?",
    subtitleLead: "Most businesses lose ",
    subtitleBold: "40% to 60%",
    subtitleEnd: " of leads due to slow replies and weak follow-up.",
    colLeftBadge: "Current situation",
    colLeftTitle: "No automation",
    colRightBadge: "With MetaTok",
    colRightTitle: "Automation live",
    situacionActual: [
      "Leads waiting more than 5 minutes for a reply",
      "Hours burned on prospects who will never buy",
      "Meetings lost without systematic follow-up",
      "CRM out of date with duplicates or gaps",
      "No active presence outside business hours",
    ],
    conMetatok: [
      "Instant reply to every lead, 24/7, on every channel",
      "You only talk to prospects ready to buy",
      "Automatic scheduling with confirmations and reminders",
      "CRM updated in real time with zero manual entry",
      "Your business captures and qualifies while you sleep",
    ],
    cta: "Stop losing leads: free audit within 24 h",
    footnote: "No commitment · No lock-in · Reply in under 24 h",
  },
  canalesSection: {
    kicker: "Omnichannel integration",
    title: "Your AI where ",
    titleAccent: "your customers already are",
    subtitle:
      "We deploy on the channels your prospects already use—no friction, no platform switch for them.",
    channels: [
      { key: "phone", label: "Phone", desc: "AI voice calls" },
      { key: "web", label: "Web", desc: "Chat on your site" },
      { key: "whatsapp", label: "WhatsApp", desc: "The channel people use most" },
      { key: "instagram", label: "Instagram", desc: "Automated DMs" },
      { key: "api", label: "API", desc: "Plug in any system" },
    ],
    otherChannel: "Using another channel or internal system?",
    contactUs: "Talk to us →",
  },
  planesSection: {
    kicker: "Plans & pricing",
    title: "Invest in outcomes, ",
    titleAccent: "not overtime",
    subtitle: "No lock-in. No hidden fees. Scale only when you need to.",
    popular: "Most popular",
    billing: {
      mensual: { label: "Monthly", suffix: "/mo", saving: null as string | null },
      trimestral: { label: "Quarterly", suffix: "/quarter", saving: "Save ~16%" },
      anual: { label: "Annual", suffix: "/year", saving: "Save ~29%" },
    },
    foot1: "All plans include MetaTok platform access. No lock-in or hidden costs.",
    foot2Lead: "Need something specific?",
    foot2Link: "Let’s talk custom pricing →",
    planes: [
      {
        name: "Starter",
        tagline: "Small teams starting with AI without risk.",
        price: { mensual: "99", trimestral: "199", anual: "679" },
        features: [
          "1 channel (Web or WhatsApp)",
          "Core NLP assistant",
          "Up to 500 conversations/mo",
          "Basic control panel",
          "Automatic lead qualification",
          "Email support",
        ],
        cta: "Start now",
      },
      {
        name: "Business",
        tagline: "Full automation so you never miss a lead.",
        price: { mensual: "239", trimestral: "629", anual: "2.149" },
        features: [
          "Up to 3 integrated channels",
          "Premium chat & voice agents",
          "Automatic follow-up & scoring",
          "Bidirectional CRM sync",
          "Scheduling with reminders",
          "Intelligent flow-works",
          "Advanced analytics",
          "Priority support 24/5",
        ],
        cta: "Scale my sales",
      },
      {
        name: "Enterprise",
        tagline: "Unlimited channels with dedicated guidance.",
        price: { mensual: "590", trimestral: "1.589", anual: "5.399" },
        features: [
          "Unlimited channels",
          "Fully custom flows and bots",
          "Advanced API integrations",
          "1:1 account manager",
          "Guaranteed uptime SLA",
          "Tailored onboarding",
          "Specialist technical support 24/7",
        ],
        cta: "Request proposal",
      },
    ],
  },
  testimoniosSection: {
    kicker: "Success stories",
    title: "Real businesses that already ",
    titleAccent: "scaled acquisition",
    subtitle:
      "Results from leaders across industries after integrating MetaTok AI agents into their operations.",
    items: [
      {
        nombre: "David Gómez",
        cargo: "Head of Sales, real estate",
        texto:
          "MetaTok changed our pace. Bots qualify 24/7 and only hot leads reach the team. More meetings, less grunt work.",
      },
      {
        nombre: "Dr Laura Peñafiel",
        cargo: "Clinic director",
        texto:
          "Patients book, ask and confirm on their own. Automated follow-ups helped us recover lost appointments.",
      },
      {
        nombre: "Ana Fuentes",
        cargo: "COO, digital marketplace",
        texto:
          "80% of tickets are handled by the bot: orders, returns, status. Less load on the team with no drop in quality.",
      },
      {
        nombre: "Luis Carrión",
        cargo: 'Owner, “Viajes Sin Fronteras”',
        texto:
          "Confirmations and reminders on autopilot; voice assistants cover basics. Saves hours every week.",
      },
      {
        nombre: "Juan Valdés",
        cargo: 'Head of Sales, “TecnoCenter”',
        texto:
          "The site bot answers 24/7: specs, pricing, stock. Buyers arrive better informed and qualified traffic is up.",
      },
      {
        nombre: "Ricardo Garrido",
        cargo: 'Partner, “Garrido & Asociados”',
        texto:
          "MetaTok filters prospects, books the first consult and gives us context—we only meet those who truly need us.",
      },
    ],
  },
  auditoria: {
    badge: "100% free audit · No obligation",
    title: "See exactly how much ",
    titleAccent: "you’re leaving on the table",
    subtitle:
      "Not a sales call. A free technical session where an automation expert reviews your real operation—with numbers on the upside.",
    incluye: [
      "Review of your channels and current traffic volume",
      "Detection of conversion leaks in your funnel",
      "Personalised strategic map with AI",
      "Estimate of revenue impact",
    ],
    stats: [
      { value: "+38%", label: "leads recovered" },
      { value: "22h", label: "saved / week" },
      { value: "+54%", label: "meetings booked" },
      { value: "+27%", label: "conversion rate" },
    ],
    statsTitle: "Average results after 60 days",
    statsDisclaimer:
      "*Based on real customer averages. Results vary by sector and volume.",
    cta: "Request my free audit",
    ctaNote: "Limited slots each week.",
    ctaNote2: "Guaranteed reply in < 24 h.",
  },
  metaTokAcademy: {
    tracks: [
      {
        title: "Sales playbooks",
        text: "Scripts, objections and sequences ready for the field.",
      },
      {
        title: "Guerrilla marketing",
        text: "Campaigns, content and positioning to accelerate leads.",
      },
      {
        title: "Operational scale",
        text: "Rituals and metrics to grow without losing conversion.",
      },
    ],
    heading: "Training to sell better and lead your category",
    sub:
      "We don’t just ship software—we ship methodology, coaching and ongoing training so your brand becomes a market reference.",
    card1Label: "Guided journey",
    card1Title: "From onboarding to repeatable closing",
    card1Text:
      "Live sessions, tactical workshops and expert support so your sales team ships fast, measures better and scales close rates sustainably.",
    card1Bullets: [
      "Weekly webinars, certifications and vertical guides for sales teams.",
      "AI conversion framework: prospecting, qualification, objections and close.",
      "Brand positioning mentorship—sell the method, not just the tech.",
    ],
    dashTitle: "Academy dashboard",
    cohort: "Active cohort",
    modules: [
      { n: "Module 01", t: "Commercial architecture with AI", p: 82 },
      { n: "Module 02", t: "Closing scripts by niche", p: 64 },
      { n: "Module 03", t: "Scaling and team leadership", p: 47 },
    ],
    supportKicker: "Expert support",
    supportTitle: "Direct mentorship + actionable playbooks",
    ctaPrimary: "Join MetaTok Academy",
    ctaSecondary: "View coaching plans",
  },
  eliteSolutions: {
    bullets: [
      "Full brand identity: visuals, tone and naming aligned to your business.",
      "Professional distribution on App Store and Google Play—or private enterprise channel.",
      "Same MetaTok cognitive layer inside your app: agents that sell, qualify and book 24/7.",
      "Analytics and reporting under your white label to track funnel and sales team.",
      "Coordinated roadmaps and releases without losing narrative control with customers.",
      "Enterprise options: SLAs, GDPR-style privacy and data governance.",
    ],
    highlights: [
      {
        title: "Full branding",
        text: "UI, tone, iconography and experience aligned with your brand.",
      },
      {
        title: "Official release",
        text: "App Store & Google Play or private enterprise distribution.",
      },
      {
        title: "Enterprise compliance",
        text: "GDPR, access controls and traceability for safe operations.",
      },
      {
        title: "Multi-vertical scale",
        text: "One technical base for many verticals without rebuilding product.",
      },
    ],
    kicker: "Product",
    heading: "Your app, your brand, our technology",
    sub:
      "We turn MetaTok into a white-label product: native experience, conversion architecture and commercial ops under your identity.",
    panelKicker: "Your brand, our engine",
    panelText:
      "We build your native app with MetaTok inside. You own brand, narrative and pricing; we accelerate the tech layer and conversion.",
    phoneBadge: "White label",
    phoneTitle: "YourBrand Assistant",
    phoneSub: "Lead qualified in 43s",
    float1: "+31% demo bookings",
    float2: "100% bespoke branding",
    cta: "I want my white-label app",
    secondaryCta: "View enterprise options",
    chatSteps: [
      { from: "bot" as const, text: "Hi, I’m your Brand advisor. How can I help? 👋" },
      { from: "user" as const, text: "I need a proposal this week." },
      { from: "bot" as const, text: "Great! Video call or in-person meeting?" },
      { from: "user" as const, text: "Video call, any day ✅" },
      { from: "bot" as const, text: "Booked for tomorrow 10:30. Sending confirmation 📅" },
      { from: "user" as const, text: "Perfect, thank you 🙌" },
      { from: "bot" as const, text: "See you tomorrow—I'm here if anything comes up 🚀" },
    ],
  },
  contactForm: {
    kicker: "Contact",
    heading: "Let’s talk about your next competitive edge",
    intro:
      "Write to us and a senior engineer will reach out within 24 hours to schedule your free audit.",
    email: "info@metatok.ai",
    remote: "Remote delivery · Worldwide coverage",
    gdprLine: "We treat your data under GDPR",
    boxTitle: "No obligation",
    boxText:
      "We don’t do generic sales calls—you get a real technical take on how AI can grow your revenue.",
    labels: {
      nombre: "Name",
      email: "Email",
      empresa: "Company",
      telefono: "Phone",
      web: "Website (optional)",
      mensaje: "What do you want to automate? (optional)",
    },
    placeholders: {
      nombre: "Full name",
      email: "you@company.com",
      empresa: "Company name",
      telefono: "+1 …",
      web: "https://yourcompany.com",
      mensaje: "Briefly describe your main challenge.",
    },
    consent: "By submitting you agree we may contact you about your audit request.",
    submit: "Request audit",
    sending: "Sending…",
    toastOk: "Request sent ✓",
    toastOkDesc: "We’ll get back to you within 24 hours.",
    toastErr: "Couldn’t send your request",
    toastErrDesc: "Please try again in a moment.",
    errors: {
      nombre: "At least 2 characters",
      email: "Invalid email",
      empresa: "Company required",
      telefono: "Invalid phone",
    },
    emailSubject: (empresa: string) => `New audit request — ${empresa}`,
  },
  footerExtended: {
    nextKicker: "Next step",
    nextTitle: "Turn your traffic into revenue today.",
    login: "Log in",
    talkTeam: "Talk to the team",
    blurb:
      "We install AI-powered sales departments that prospect, qualify and close 24/7—omnichannel, CRM-ready and enterprise-grade.",
    colServices: "Services",
    colSectors: "Industries",
    colContact: "Contact",
    services: [
      "Conversational AI agents",
      "Process automation",
      "Lead qualification",
      "CRM integration",
      "Automatic scheduling",
      "Intelligent flow-works",
    ],
    sectors: ["Real estate", "Healthcare", "E-commerce", "Consulting", "Professional firms", "Hotels"],
    hq: "HQ: Madrid, Spain",
    hqNote: "Full registered address available on request for tenders and contracts.",
    privacyLine: "100% data privacy (GDPR)",
    copyright: "All rights reserved.",
    terms: "Terms of service",
    rgpd: "GDPR / Privacy",
  },
  floating: {
    liveDemo: "Live demo",
    auditoria: "Free audit",
    whatsapp: "WhatsApp",
    contacto: "Contact",
    menuAria: "Contact actions",
    closeMenu: "Close contact menu",
    openMenu: "Open contact menu",
  },
  serviciosUi: {
    chip: "Services",
    pill1: "+400% response rate",
    pill2: "24/7 live",
    pill3: "Omnichannel integration",
    serviceNum: "Service",
    activation: "Instant activation",
    seeMore: "Learn more",
    stackKicker: "Full stack",
    stackTitle: "Design your commercial architecture in one call",
    stackText:
      "We show which modules to ship first, expected impact and how to deploy without friction.",
    stackCta: "Book a strategy demo",
  },
  liveDemo: {
    aria: "MetaTok live demo",
    title: "MetaTok Live Demo",
    subtitle: "Sales agent in real time",
    newChat: "New chat",
    close: "Close demo",
    placeholder: "Type your question…",
    send: "Send message",
    wa: "Talk to a real agent on WhatsApp",
    initial1:
      "Hi, I’m the MetaTok demo agent. Here’s how you could convert more leads.",
    initial2:
      "Tell me your sector and main challenge (e.g. slow replies, empty calendar, cold leads).",
    quick: [
      "I’m in real estate",
      "I run a clinic",
      "I want more hotel bookings",
      "I need CRM integration",
    ],
    replies: {
      inmobiliaria:
        "Great. For real estate we usually cut response time and lift booked viewings with automatic qualification by area and budget.",
      clinica:
        "For clinics we enable 24/7 scheduling with smart reminders—fewer no-shows and more effective appointments.",
      hotel:
        "For hotels, MetaTok handles live availability, drives direct bookings and automates pre-stay upsell.",
      crm: "We integrate via API so conversations, stages and next actions stay synced with your CRM.",
      precio:
        "Pricing depends on channels, integrations and volume—I can outline a quick estimate in a no-strings audit.",
      default:
        "Got it. With MetaTok we can automate replies, qualification and follow-through so leads reach a meeting or sale faster.",
    },
  },
  sectoresUi: {
    kicker: "By industry",
    title: "Your industry, your results, ",
    titleAccent: "your tailored solution",
    subtitle:
      "We don’t sell generic tech. We design the exact automation your business needs to convert more.",
    estadoActual: "Current state",
    conMetatok: "With MetaTok",
    resultados: "Typical results",
    resultadosNote: "*Averages after 60 days live.",
    avanzado: "More ways to scale",
    cta: "I want a solution for my sector",
    ctaNote: "Free audit · No obligation · Reply in under 24 h",
    items: sectoresEn,
  },
} as const;
