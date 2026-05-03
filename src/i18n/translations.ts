import { pageSectionsEs, pageSectionsEn } from "./pageSections";

export type Lang = "es" | "en";

export const translations = {
  es: {
    ui: {
      switchLang: "Cambiar idioma",
      langSpanish: "Español",
      langEnglish: "English",
    },
    nav: {
      inicio: "Inicio",
      solucion: "Solución",
      explorar: "Explorar",
      contacto: "Contacto",
      login: "Iniciar sesión",
      cta: "Desplegar agente",
      items: {
        problema: "El problema",
        motor: "Motor MetaTok",
        servicios: "Servicios",
        comparativa: "Vs. chatbots",
        whitelabel: "App & white label",
        sectores: "Sectores",
        precios: "Precios",
        faq: "FAQ",
      },
    },
    hero: {
      pill: "Ecosistema de Agentes · MetaTok AI",
      titlePrefix: "Tu equipo de",
      titleSuffix: "en Piloto Automático con IA",
      departments: ["Ventas", "Soporte", "Gestión de Redes", "Contabilidad", "Contenido"],
      subtitle:
        "No son simples chatbots. Es la <strong>clonación de tu mejor personal</strong>. Despliega un ecosistema de <primary>Asistentes Humanoides</primary> que asumen tus <strong>ventas, soporte, contabilidad, gestión de redes y creación de contenido</strong> por ti <strong>24/7</strong> en <green>WhatsApp</green>, <blue>Llamadas de Voz</blue>, <pink>Instagram</pink> y <amber>Web</amber>.",
      quote: "MetaTok: Automatiza tu negocio de extremo a extremo y ahorra más de 3.000€ por cada trabajador.",
      ctaPrimary: "Desplegar mi Agente Ahora",
      ctaSecondary: "Auditoría gratuita",
      disclaimer: "Sin permanencia · Despliegue en 15-30 días · Sin código para tu equipo",
      metrics: [
        { value: "100%", label: "Automatización total" },
        { value: "3.000€", label: "Ahorro por trabajador" },
        { value: "24/7", label: "Operación continua" },
      ],
      trust: [
        "Velocidad de respuesta",
        "Agentes autónomos",
        "RGPD blindado",
        "API abierta",
      ],
      testimonial: {
        quote: "Automatizamos el soporte, ventas y cobros en menos de 30 días. El ahorro estructural fue inmediato.",
        name: "Director de Operaciones",
        company: "Grupo Empresarial — Madrid",
      },
      dashboard: {
        status: "Red Neuronal Activa",
        statusSub: "Procesando +10.000 operaciones/s",
        online: "ONLINE",
        ahorroLabel: "Ahorro Generado",
        ahorroSub: "+3.000€ este mes",
        autoLabel: "Automatización",
        autoSub: "Sin intervención humana",
        log1: "[SYS] Sincronizando CRM...",
        log2: "[VOZ] Llamada saliente #4092",
        log3: "[SALES] Lead cualificado Score 98",
        logOk: "OK",
        logConn: "CONECTADO",
        logClosed: "CERRADO",
        badge1: "Máximo Rendimiento",
        badge2: "Infraestructura Segura",
        panel: "Panel · En vivo",
        events: [
          { label: "Ticket resuelto", value: "Soporte · T-892" },
          { label: "Factura procesada", value: "Contabilidad · #A-402" },
          { label: "Post publicado", value: "Instagram · Contenido" },
          { label: "Lead cualificado", value: "Ventas · Score 94" },
        ],
        stats: [
          { l: "Tareas/hora", v: "142" },
          { l: "Dptos. Activos", v: "5" },
          { l: "Ahorro/mes", v: "€3k+" },
        ],
        scrollLabel: "Descubre más",
      },
    },
    beneficios: {
      heading: "Por qué MetaTok cambia las reglas",
      items: [
        {
          titulo: "Respuesta que multiplica oportunidades",
          descripcion: "La velocidad y la insistencia correcta convierten conversaciones en ingresos. Menos leads muertos por silencio.",
          metrica: "+400%",
          metricaLabel: "Tasa de respuesta vs. manual",
        },
        {
          titulo: "Cero tareas repetitivas",
          descripcion: "La IA asume toda la carga operativa. Elimina errores humanos y reduce costes estructurales masivamente.",
          metrica: "3.000€",
          metricaLabel: "Ahorro por trabajador",
        },
        {
          titulo: "Operativo las 24 horas",
          descripcion: "Tu negocio nunca duerme. Capta, cualifica y agenda incluso fuera de horario comercial y festivos.",
          metrica: "24/7",
          metricaLabel: "Sin interrupciones",
        },
        {
          titulo: "Integración omnicanal total",
          descripcion: "Teléfono, Web, WhatsApp, Instagram, Telegram o tu CRM interno vía API. Un ecosistema de texto y voz conectado y coherente.",
          metrica: "5+",
          metricaLabel: "Canales integrados",
        },
      ],
    },
    servicios: {
      heading: "Servicios de Automatización IA",
      subheading: "Soluciones diseñadas para escalar tu operación sin añadir headcount.",
      items: [
        {
          titulo: "Agentes de IA Conversacional",
          descripcion: "Agentes especializados con NLP que entienden intenciones, manejan objeciones y ejecutan estrategias de venta complejas en cada canal de tu negocio.",
          beneficio: "Responde al 100% de tus leads en segundos, no en horas.",
        },
        {
          titulo: "Voicebots (Agentes de Voz)",
          descripcion: "Asistentes de voz ultrarrealistas que realizan y reciben llamadas telefónicas. Atienden objeciones, califican y agendan como un operador humano.",
          beneficio: "Atiende llamadas entrantes sin tiempo de espera 24/7.",
        },
        {
          titulo: "Cualificación de Leads",
          descripcion: "Filtramos y puntuamos cada prospecto en tiempo real para que solo hables con los que tienen intención real de compra.",
          beneficio: "Aumenta tu tasa de cierre hasta un 3× sin más presupuesto.",
        },
        {
          titulo: "Integración con CRM",
          descripcion: "Sincronización bidireccional con tu CRM mediante API. Datos limpios, actualizados y accionables 24/7, sin duplicados ni pérdidas.",
          beneficio: "0 horas de carga manual de datos en tu equipo.",
        },
        {
          titulo: "Agendamiento Automático",
          descripcion: "Citas en tu calendario sin fricción. El agente negocia el horario, confirma la reunión y envía recordatorios personalizados.",
          beneficio: "Hasta +54% más citas agendadas sin intervención humana.",
        },
        {
          titulo: "Flow-works Inteligentes",
          descripcion: "Flujos de trabajo que disparan acciones automáticas: cualifican leads, agendan reuniones, actualizan el CRM y nutren prospectos en piloto automático.",
          beneficio: "Tu embudo de ventas funciona solo, 24 horas al día.",
        },
      ],
    },
    proceso: {
      heading: "Del diagnóstico al despliegue",
      subheading: "Un proceso de alta precisión sin improvisación.",
      items: [
        {
          numero: "01",
          titulo: "Auditoría de Diagnóstico",
          descripcion: "Un experto analiza tu operación actual, detecta fugas de conversión y cuantifica cuánto estás perdiendo sin automatización.",
          resultado: "Mapa claro de prioridades",
        },
        {
          numero: "02",
          titulo: "Estrategia a Medida",
          descripcion: "Diseñamos la arquitectura de agentes, flujos e integraciones adaptada exactamente a tu modelo de negocio y tus canales actuales.",
          resultado: "Propuesta técnica personalizada",
        },
        {
          numero: "03",
          titulo: "Presupuesto Transparente",
          descripcion: "Recibes una propuesta de precio basada en la complejidad real. Sin letra pequeña, sin costes ocultos, sin permanencia forzada.",
          resultado: "Inversión clara y escalable",
        },
        {
          numero: "04",
          titulo: "Despliegue Llave en Mano",
          descripcion: "Entre 15 y 30 días: programación, entrenamiento de agentes y QA completo. Tu equipo no toca código. Solo recibe resultados.",
          resultado: "Sistema activo en producción",
        },
      ],
    },
    faq: {
      heading: "Preguntas frecuentes",
      subtitle:
        "Resolvemos las dudas más habituales sobre el servicio, la implementación y la inversión.",
      items: [
        {
          pregunta: "¿En qué consiste exactamente el servicio de automatización con IA?",
          respuesta: "Implementamos ecosistemas de Inteligencia Artificial Conversacional que se integran en el núcleo de tu negocio para captar, nutrir y convertir leads de forma autónoma 24/7.",
        },
        {
          pregunta: "¿Cómo es el proceso desde que solicito mi auditoría gratuita?",
          respuesta: "1) Auditoría de Diagnóstico. 2) Estrategia a Medida. 3) Presupuesto Transparente. 4) Despliegue Llave en Mano — sistema activo en 15-30 días.",
        },
        {
          pregunta: "¿Tengo algún compromiso de permanencia?",
          respuesta: "Ninguno. Suscripción mensual sin contratos de permanencia. Puedes cancelar en cualquier momento.",
        },
        {
          pregunta: "¿Por qué el presupuesto es a medida?",
          respuesta: "Porque tu negocio no es igual al de nadie más. Pagas estrictamente por la solución que tu operación necesita.",
        },
        {
          pregunta: "¿Cuánto tiempo tarda la implementación completa?",
          respuesta: "Entre 15 y 30 días. Es un despliegue llave en mano: tu equipo no toca código ni configura nada.",
        },
        {
          pregunta: "¿En qué se diferencian vuestros agentes de un chatbot convencional?",
          respuesta: "Un chatbot sigue un árbol de decisiones rígido. Nuestros agentes usan NLP avanzado para entender intenciones y manejar objeciones en tiempo real.",
        },
      ],
    },
    contacto: {
      heading: "Solicita tu Auditoría Gratuita",
      subheading: "En menos de 24 horas un técnico senior te contactará para analizar tu caso.",
      namePlaceholder: "Nombre completo",
      emailPlaceholder: "Correo electrónico",
      phonePlaceholder: "Teléfono (opcional)",
      messagePlaceholder: "Cuéntanos tu negocio...",
      submit: "Enviar solicitud",
      disclaimer: "Sin compromiso · Respuesta en menos de 24 h",
    },
    footer: {
      tagline: "Automatiza tu negocio de extremo a extremo.",
      rights: "Todos los derechos reservados.",
      legal: "Aviso Legal",
      privacy: "Política de Privacidad",
      cookies: "Cookies",
    },
    ...pageSectionsEs,
  },

  en: {
    ui: {
      switchLang: "Change language",
      langSpanish: "Spanish",
      langEnglish: "English",
    },
    nav: {
      inicio: "Home",
      solucion: "Solution",
      explorar: "Explore",
      contacto: "Contact",
      login: "Log in",
      cta: "Deploy agent",
      items: {
        problema: "The problem",
        motor: "MetaTok Engine",
        servicios: "Services",
        comparativa: "Vs. chatbots",
        whitelabel: "App & white label",
        sectores: "Industries",
        precios: "Pricing",
        faq: "FAQ",
      },
    },
    hero: {
      pill: "Agent Ecosystem · MetaTok AI",
      titlePrefix: "Your",
      titleSuffix: "team on Autopilot with AI",
      departments: ["Sales", "Support", "Social Media", "Accounting", "Content"],
      subtitle:
        "These aren't simple chatbots. It's the <strong>cloning of your best staff</strong>. Deploy an ecosystem of <primary>Humanoid Assistants</primary> that take over your <strong>sales, support, accounting, social media management, and content creation</strong> for you <strong>24/7</strong> on <green>WhatsApp</green>, <blue>Voice Calls</blue>, <pink>Instagram</pink> and <amber>Web</amber>.",
      quote: "MetaTok: Automate your business end-to-end and save over €3,000 per worker.",
      ctaPrimary: "Deploy My Agent Now",
      ctaSecondary: "Free Audit",
      disclaimer: "No commitment · Deployment in 15-30 days · No code for your team",
      metrics: [
        { value: "100%", label: "Full automation" },
        { value: "€3,000", label: "Saved per worker" },
        { value: "24/7", label: "Non-stop operation" },
      ],
      trust: [
        "Response speed",
        "Autonomous agents",
        "GDPR compliant",
        "Open API",
      ],
      testimonial: {
        quote: "We automated support, sales and billing in under 30 days. The structural savings were immediate.",
        name: "Head of Operations",
        company: "Business Group — Madrid",
      },
      dashboard: {
        status: "Neural Network Active",
        statusSub: "Processing +10,000 ops/s",
        online: "ONLINE",
        ahorroLabel: "Savings Generated",
        ahorroSub: "+€3,000 this month",
        autoLabel: "Automation",
        autoSub: "Zero human intervention",
        log1: "[SYS] Syncing CRM...",
        log2: "[VOICE] Outbound call #4092",
        log3: "[SALES] Qualified lead Score 98",
        logOk: "OK",
        logConn: "CONNECTED",
        logClosed: "CLOSED",
        badge1: "Peak Performance",
        badge2: "Secure Infrastructure",
        panel: "Panel · Live",
        events: [
          { label: "Ticket resolved", value: "Support · T-892" },
          { label: "Invoice processed", value: "Accounting · #A-402" },
          { label: "Post published", value: "Instagram · Content" },
          { label: "Lead qualified", value: "Sales · Score 94" },
        ],
        stats: [
          { l: "Tasks/hour", v: "142" },
          { l: "Active Depts.", v: "5" },
          { l: "Savings/mo", v: "€3k+" },
        ],
        scrollLabel: "Discover more",
      },
    },
    beneficios: {
      heading: "Why MetaTok changes the rules",
      items: [
        {
          titulo: "Response that multiplies opportunities",
          descripcion: "Speed and the right persistence turn conversations into revenue. No more dead leads from silence.",
          metrica: "+400%",
          metricaLabel: "Response rate vs. manual",
        },
        {
          titulo: "Zero repetitive tasks",
          descripcion: "AI takes on the entire operational load. Eliminates human error and massively reduces structural costs.",
          metrica: "€3,000",
          metricaLabel: "Saved per worker",
        },
        {
          titulo: "Operational 24 hours a day",
          descripcion: "Your business never sleeps. Captures, qualifies and books even outside business hours and holidays.",
          metrica: "24/7",
          metricaLabel: "No interruptions",
        },
        {
          titulo: "Total omnichannel integration",
          descripcion: "Phone, Web, WhatsApp, Instagram, Telegram or your internal CRM via API. A connected text and voice ecosystem.",
          metrica: "5+",
          metricaLabel: "Channels integrated",
        },
      ],
    },
    servicios: {
      heading: "AI Automation Services",
      subheading: "Solutions designed to scale your operations without adding headcount.",
      items: [
        {
          titulo: "Conversational AI Agents",
          descripcion: "Specialized NLP agents that understand intent, handle objections and execute complex sales strategies across every channel.",
          beneficio: "Respond to 100% of your leads in seconds, not hours.",
        },
        {
          titulo: "Voicebots (Voice Agents)",
          descripcion: "Ultra-realistic voice assistants that make and receive phone calls. Handle objections, qualify and schedule like a human operator.",
          beneficio: "Answer inbound calls with zero wait time 24/7.",
        },
        {
          titulo: "Lead Qualification",
          descripcion: "We filter and score every prospect in real time so you only talk to those with genuine purchase intent.",
          beneficio: "Increase your close rate up to 3× without extra budget.",
        },
        {
          titulo: "CRM Integration",
          descripcion: "Bidirectional sync with your CRM via API. Clean, updated, actionable data 24/7—no duplicates, no losses.",
          beneficio: "0 hours of manual data entry for your team.",
        },
        {
          titulo: "Automatic Scheduling",
          descripcion: "Appointments in your calendar without friction. The agent negotiates the slot, confirms the meeting and sends personalized reminders.",
          beneficio: "Up to +54% more booked appointments without human intervention.",
        },
        {
          titulo: "Intelligent Flow-works",
          descripcion: "Smart workflows that trigger automatic actions: qualify leads, book meetings, update the CRM and nurture prospects on autopilot.",
          beneficio: "Your sales funnel runs itself, 24 hours a day.",
        },
      ],
    },
    proceso: {
      heading: "From diagnosis to deployment",
      subheading: "A high-precision process with no improvisation.",
      items: [
        {
          numero: "01",
          titulo: "Diagnostic Audit",
          descripcion: "An expert analyses your current operation, identifies conversion leaks and quantifies how much you're losing without automation.",
          resultado: "Clear priority map",
        },
        {
          numero: "02",
          titulo: "Tailored Strategy",
          descripcion: "We design the agent architecture, flows and integrations adapted exactly to your business model and current channels.",
          resultado: "Personalised technical proposal",
        },
        {
          numero: "03",
          titulo: "Transparent Pricing",
          descripcion: "You receive a price proposal based on real complexity. No fine print, no hidden costs, no forced commitment.",
          resultado: "Clear and scalable investment",
        },
        {
          numero: "04",
          titulo: "Turnkey Deployment",
          descripcion: "Between 15 and 30 days: programming, agent training and full QA. Your team touches no code. They just see results.",
          resultado: "Live system in production",
        },
      ],
    },
    faq: {
      heading: "Frequently asked questions",
      subtitle:
        "Answers to the most common questions about the service, rollout and investment.",
      items: [
        {
          pregunta: "What exactly does the AI automation service consist of?",
          respuesta: "We implement Conversational AI ecosystems that integrate into the core of your business to autonomously capture, nurture and convert leads 24/7.",
        },
        {
          pregunta: "What's the process after I request my free audit?",
          respuesta: "1) Diagnostic Audit. 2) Tailored Strategy. 3) Transparent Pricing. 4) Turnkey Deployment — live system in 15-30 days.",
        },
        {
          pregunta: "Is there any long-term commitment?",
          respuesta: "None. Monthly subscription with no lock-in contracts. Cancel any time.",
        },
        {
          pregunta: "Why is the pricing custom?",
          respuesta: "Because your business is unique. You pay strictly for the solution your operation needs.",
        },
        {
          pregunta: "How long does the full implementation take?",
          respuesta: "Between 15 and 30 days. It's a turnkey deployment: your team touches no code and configures nothing.",
        },
        {
          pregunta: "How are your agents different from a conventional chatbot?",
          respuesta: "A chatbot follows a rigid decision tree. Our agents use advanced NLP to understand intent and handle objections in real time.",
        },
      ],
    },
    contacto: {
      heading: "Request your Free Audit",
      subheading: "A senior technician will contact you within 24 hours to analyse your case.",
      namePlaceholder: "Full name",
      emailPlaceholder: "Email address",
      phonePlaceholder: "Phone (optional)",
      messagePlaceholder: "Tell us about your business...",
      submit: "Send request",
      disclaimer: "No commitment · Response in under 24 h",
    },
    footer: {
      tagline: "Automate your business end-to-end.",
      rights: "All rights reserved.",
      legal: "Legal Notice",
      privacy: "Privacy Policy",
      cookies: "Cookies",
    },
    ...pageSectionsEn,
  },
} as const;

export type Translations = typeof translations.es;
