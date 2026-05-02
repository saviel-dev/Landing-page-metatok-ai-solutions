import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { c as createRouter, u as useRouter, a as createRootRoute, b as createFileRoute, l as lazyRouteComponent, H as HeadContent, S as Scripts, O as Outlet, L as Link } from "../_libs/tanstack__react-router.mjs";
import { B as Bot, W as Workflow, F as Funnel, D as Database, C as CalendarClock, G as GitBranch, a as Globe, P as Plug } from "../_libs/lucide-react.mjs";
import "../_libs/tanstack__router-core.mjs";
import "../_libs/tanstack__history.mjs";
import "../_libs/cookie-es.mjs";
import "../_libs/seroval.mjs";
import "../_libs/seroval-plugins.mjs";
import "node:stream/web";
import "node:stream";
import "../_libs/react-dom.mjs";
import "util";
import "crypto";
import "async_hooks";
import "stream";
import "../_libs/isbot.mjs";
const appCss = "/assets/styles-QGzqqNtL.css";
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Metatok",
  url: "https://metatok.ai",
  logo: "https://metatok.ai/logo.png",
  description: "MetaTok diseña agentes de Inteligencia Artificial Conversacional y automatización para captar, cualificar y cerrar ventas 24/7 en todos tus canales.",
  sameAs: [
    "https://facebook.com/metatok",
    "https://instagram.com/metatok",
    "https://tiktok.com/@metatok"
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contacto@metatok.ai",
    contactType: "customer support",
    availableLanguage: "Spanish"
  }
};
function NotFoundComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-7xl font-bold text-foreground", children: "404" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "mt-4 text-xl font-semibold text-foreground", children: "Página no encontrada" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "La página que buscas no existe o ha sido movida." }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      Link,
      {
        to: "/",
        className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
        children: "Volver al inicio"
      }
    ) })
  ] }) });
}
const Route$4 = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title: "MetaTok AI | Automatiza tus Ventas y Atención al Cliente 24/7"
      },
      {
        name: "description",
        content: "Descubre MetaTok AI: Agentes de IA conversacional que cualifican leads, cierran ventas y agendan citas en WhatsApp, Web e Instagram automáticamente. API abierta e integración CRM."
      },
      {
        name: "keywords",
        content: "inteligencia artificial, agentes conversacionales, automatización de ventas, chatbot con IA generativa, captación de leads, MetaTok AI, integraciones CRM, atención al cliente automatizada, agendamiento de citas"
      },
      { name: "author", content: "Metatok" },
      { name: "theme-color", content: "#ffffff" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "es" },
      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Metatok" },
      { property: "og:locale", content: "es_ES" },
      {
        property: "og:title",
        content: "MetaTok AI | Automatiza tus Ventas y Atención al Cliente 24/7"
      },
      {
        property: "og:description",
        content: "Agentes de IA que cualifican leads, cierran ventas y agendan citas en WhatsApp, Web e Instagram 24/7. Descubre cómo MetaTok puede escalar tu negocio."
      },
      { property: "og:image", content: "https://metatok.ai/logo.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Metatok — Automatización con IA" },
      { property: "og:url", content: "https://metatok.ai/" },
      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@metatok" },
      {
        name: "twitter:title",
        content: "MetaTok AI | Automatiza tus Ventas y Atención al Cliente 24/7"
      },
      {
        name: "twitter:description",
        content: "Agentes de IA que cualifican leads, cierran ventas y agendan citas en WhatsApp, Web e Instagram 24/7. Descubre cómo MetaTok puede escalar tu negocio."
      },
      { name: "twitter:image", content: "https://metatok.ai/logo.png" },
      { name: "twitter:image:alt", content: "Metatok — Automatización con IA" }
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico?v=2" },
      { rel: "apple-touch-icon", href: "/favicon.ico?v=2" },
      { rel: "canonical", href: "https://metatok.ai/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap"
      }
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd)
      }
    ]
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent
});
function RootShell({ children }) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("html", { lang: "es", className: "light", suppressHydrationWarning: true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("head", { suppressHydrationWarning: true, children: /* @__PURE__ */ jsxRuntimeExports.jsx(HeadContent, {}) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("body", { suppressHydrationWarning: true, children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(Scripts, {})
    ] })
  ] });
}
function RootComponent() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx(Outlet, {});
}
const $$splitComponentImporter$3 = () => import("./terminos-DncAAuqZ.mjs");
const Route$3 = createFileRoute("/terminos")({
  component: lazyRouteComponent($$splitComponentImporter$3, "component")
});
const $$splitComponentImporter$2 = () => import("./privacidad-CSX7RU4k.mjs");
const Route$2 = createFileRoute("/privacidad")({
  component: lazyRouteComponent($$splitComponentImporter$2, "component")
});
const $$splitComponentImporter$1 = () => import("./aviso-legal-CW-3DJEX.mjs");
const Route$1 = createFileRoute("/aviso-legal")({
  component: lazyRouteComponent($$splitComponentImporter$1, "component")
});
const imgIaConversacionalGif = "/assets/ia%20conversacional-ColegBXr.gif";
const imgCualificacionLeadsGif = "/assets/Cualificaci%C3%B3n%20de%20Leads-CBb-nF63.gif";
const imgAutomatizacionGif = "/assets/automatizacion%20de%20procesos-B7oYbEhF.gif";
const imgCRMGif = "/assets/Integraci%C3%B3n%20con%20CRM-DtuKdD6k.gif";
const imgWorkflowGif = "/assets/workflow-SysUFXiI.gif";
const imgAgendamientoAutomaticoGif = "/assets/agendamiento%20automatico-1yo-f2Pz.gif";
const WhatsAppIcon = ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.888-.788-1.489-1.761-1.663-2.06-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51h-.57c-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z" }) });
const InstagramIcon = ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 2.163c3.204 0 3.584.012 4.85.07 3.252.148 4.771 1.691 4.919 4.919.058 1.265.069 1.645.069 4.849 0 3.205-.012 3.584-.069 4.849-.149 3.225-1.664 4.771-4.919 4.919-1.266.058-1.644.07-4.85.07-3.204 0-3.584-.012-4.849-.07-3.26-.149-4.771-1.699-4.919-4.92-.058-1.265-.07-1.644-.07-4.849 0-3.204.013-3.583.07-4.849.149-3.227 1.664-4.771 4.919-4.919 1.266-.057 1.645-.069 4.849-.069zM12 0C8.741 0 8.333.014 7.053.072 2.695.272.273 2.69.073 7.052.014 8.333 0 8.741 0 12c0 3.259.014 3.668.072 4.948.2 4.358 2.618 6.78 6.98 6.98C8.333 23.986 8.741 24 12 24c3.259 0 3.668-.014 4.948-.072 4.354-.2 6.782-2.618 6.979-6.98.059-1.28.073-1.689.073-4.948 0-3.259-.014-3.667-.072-4.947-.196-4.354-2.617-6.78-6.979-6.98C15.668.014 15.259 0 12 0zm0 5.838a6.162 6.162 0 100 12.324 6.162 6.162 0 000-12.324zM12 16c-2.21 0-4-1.79-4-4s1.79-4 4-4 4 1.79 4 4-1.79 4-4 4zm7.846-10.405a1.441 1.441 0 01-2.88 0 1.44 1.44 0 012.88 0z" }) });
const TelegramIcon = ({ className }) => /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { className, viewBox: "0 0 24 24", fill: "currentColor", children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M12 0C5.373 0 0 5.373 0 12s5.373 12 12 12 12-5.373 12-12S18.627 0 12 0zm5.894 8.221l-1.97 9.28c-.145.658-.537.818-1.084.508l-3-2.21-1.446 1.394c-.14.18-.357.223-.548.223l.188-2.85 5.18-4.68c.223-.198-.054-.31-.346-.116L7.49 14.113l-2.766-.863c-.602-.185-.615-.602.126-.893l10.812-4.168c.5-.184.945.115.832.832z" }) });
const servicios = [
  {
    icon: Bot,
    titulo: "Agentes de IA Conversacional",
    descripcion: "Agentes especializados con NLP que entienden intenciones, manejan objeciones y ejecutan estrategias de venta complejas en cada canal de tu negocio.",
    beneficio: "Responde al 100% de tus leads en segundos, no en horas.",
    destacado: true,
    image: imgIaConversacionalGif
  },
  {
    icon: Workflow,
    titulo: "Automatización de Procesos",
    descripcion: "Eliminamos tareas repetitivas y errores humanos, liberando a tu equipo para que se enfoque exclusivamente en cerrar ventas de alto valor.",
    beneficio: "Recupera hasta 20 h/semana de tiempo productivo.",
    image: imgAutomatizacionGif
  },
  {
    icon: Funnel,
    titulo: "Cualificación de Leads",
    descripcion: "Filtramos y puntuamos cada prospecto en tiempo real para que solo hables con los que tienen intención real de compra.",
    beneficio: "Aumenta tu tasa de cierre hasta un 3× sin más presupuesto.",
    image: imgCualificacionLeadsGif
  },
  {
    icon: Database,
    titulo: "Integración con CRM",
    descripcion: "Sincronización bidireccional con tu CRM mediante API. Datos limpios, actualizados y accionables 24/7, sin duplicados ni pérdidas.",
    beneficio: "0 horas de carga manual de datos en tu equipo.",
    image: imgCRMGif
  },
  {
    icon: CalendarClock,
    titulo: "Agendamiento Automático",
    descripcion: "Citas en tu calendario sin fricción. El agente negocia el horario, confirma la reunión y envía recordatorios personalizados.",
    beneficio: "Hasta +54% más citas agendadas sin intervención humana.",
    image: imgAgendamientoAutomaticoGif
  },
  {
    icon: GitBranch,
    titulo: "Flow-works Inteligentes",
    descripcion: "Flujos de trabajo que disparan acciones automáticas: cualifican leads, agendan reuniones, actualizan el CRM y nutren prospectos en piloto automático.",
    beneficio: "Tu embudo de ventas funciona solo, 24 horas al día.",
    destacado: true,
    image: imgWorkflowGif
  }
];
const proceso = [
  {
    numero: "01",
    titulo: "Auditoría de Diagnóstico",
    descripcion: "Un experto analiza tu operación actual, detecta fugas de conversión y cuantifica cuánto estás perdiendo sin automatización.",
    resultado: "Mapa claro de prioridades"
  },
  {
    numero: "02",
    titulo: "Estrategia a Medida",
    descripcion: "Diseñamos la arquitectura de agentes, flujos e integraciones adaptada exactamente a tu modelo de negocio y tus canales actuales.",
    resultado: "Propuesta técnica personalizada"
  },
  {
    numero: "03",
    titulo: "Presupuesto Transparente",
    descripcion: "Recibes una propuesta de precio basada en la complejidad real. Sin letra pequeña, sin costes ocultos, sin permanencia forzada.",
    resultado: "Inversión clara y escalable"
  },
  {
    numero: "04",
    titulo: "Despliegue Llave en Mano",
    descripcion: "Entre 15 y 30 días: programación, entrenamiento de agentes y QA completo. Tu equipo no toca código. Solo recibe resultados.",
    resultado: "Sistema activo en producción"
  }
];
const beneficios = [
  {
    titulo: "Respuesta que multiplica oportunidades",
    descripcion: "La velocidad y la insistencia correcta convierten conversaciones en ingresos. Menos leads muertos por silencio.",
    metrica: "+400%",
    metricaLabel: "Tasa de respuesta vs. manual"
  },
  {
    titulo: "Cero tareas repetitivas",
    descripcion: "La IA gestiona captación, seguimiento y agenda. Tu equipo solo interviene cuando hay una venta que cerrar.",
    metrica: "20h",
    metricaLabel: "Ahorradas por semana"
  },
  {
    titulo: "Operativo las 24 horas",
    descripcion: "Tu negocio nunca duerme. Capta, cualifica y agenda incluso fuera de horario comercial y festivos.",
    metrica: "24/7",
    metricaLabel: "Sin interrupciones"
  },
  {
    titulo: "Integración omnicanal",
    descripcion: "Web, WhatsApp, Instagram, Telegram o tu CRM interno vía API. Un ecosistema conectado y coherente.",
    metrica: "5+",
    metricaLabel: "Canales integrados"
  }
];
const canales = [
  { label: "Web", icon: Globe, descripcion: "Chat en tu sitio web" },
  { label: "WhatsApp", icon: WhatsAppIcon, descripcion: "El canal más usado" },
  { label: "Instagram", icon: InstagramIcon, descripcion: "DMs automatizados" },
  { label: "Telegram", icon: TelegramIcon, descripcion: "Bots y notificaciones" },
  { label: "API", icon: Plug, descripcion: "Integra cualquier sistema" }
];
const faqs = [
  {
    pregunta: "¿En qué consiste exactamente el servicio de automatización con IA?",
    respuesta: "Implementamos ecosistemas de Inteligencia Artificial Conversacional que se integran en el núcleo de tu negocio para captar, nutrir y convertir leads de forma autónoma 24/7. No vendemos software genérico; diseñamos arquitecturas a medida para tu operación."
  },
  {
    pregunta: "¿Cómo es el proceso desde que solicito mi auditoría gratuita?",
    respuesta: "El proceso es de alta precisión: 1) Auditoría de Diagnóstico — detectamos fugas de conversión. 2) Estrategia a Medida — diseñamos la arquitectura. 3) Presupuesto Transparente — propuesta sin letra pequeña. 4) Despliegue Llave en Mano — sistema activo en 15-30 días."
  },
  {
    pregunta: "¿Tengo algún compromiso de permanencia?",
    respuesta: "Ninguno. Operamos bajo suscripción mensual sin contratos de permanencia. Queremos que te quedes por los resultados que generamos, no por obligación contractual. Puedes cancelar en cualquier momento."
  },
  {
    pregunta: "¿Por qué el presupuesto es a medida y no un precio fijo cerrado?",
    respuesta: "Porque tu negocio no es igual al de nadie más. Un proyecto puede requerir un único agente de IA, mientras que otro necesita integración profunda con múltiples APIs y flujos complejos. Pagas estrictamente por la solución que tu operación necesita."
  },
  {
    pregunta: "¿Cuánto tiempo tarda la implementación completa?",
    respuesta: "El ciclo de desarrollo — programación, entrenamiento de agentes con tus datos y fase de QA — oscila entre 15 y 30 días. Es un despliegue llave en mano: tu equipo no toca código ni configura nada."
  },
  {
    pregunta: "¿En qué se diferencian vuestros agentes de un chatbot convencional?",
    respuesta: "Un chatbot tradicional sigue un árbol de decisiones rígido. Nuestros Agentes de IA utilizan NLP avanzado para entender intenciones, manejar objeciones en tiempo real y ejecutar estrategias de venta complejas adaptadas a cada conversación."
  },
  {
    pregunta: "¿Qué son los Flow-works y cómo ayudan a mi negocio?",
    respuesta: "Son flujos de trabajo inteligentes que disparan acciones automáticas. No solo responden al cliente: pueden agendar citas, cualificar leads, actualizar el CRM y enviar secuencias de seguimiento, todo sin intervención humana."
  },
  {
    pregunta: "¿Por qué necesito un embudo de ventas automatizado?",
    respuesta: "En el entorno digital, la velocidad de respuesta es dinero. Un embudo automatizado garantiza que ningún prospecto se pierda por falta de atención o respuesta tardía, guiando al cliente desde el primer contacto hasta el cierre de forma consistente."
  },
  {
    pregunta: "¿Es complicada la configuración técnica para mi equipo?",
    respuesta: "Para ti, la configuración es inexistente. Nuestro equipo de ingenieros se encarga de toda la programación, instalación e integración. Tu única tarea es revisar los resultados y seguir cerrando ventas."
  },
  {
    pregunta: "¿Cómo me ahorra tiempo y dinero este sistema?",
    respuesta: "Al delegar la captación, cualificación y seguimiento de leads a la IA, eliminas el error humano y liberas a tu equipo de tareas repetitivas. Esto permite que tu personal se enfoque exclusivamente en cerrar ventas de alto valor."
  },
  {
    pregunta: "¿Qué sucede si mi negocio crece y necesito más capacidad?",
    respuesta: "Nuestra infraestructura es 100% escalable. Podemos aumentar la capacidad de procesamiento, añadir nuevos agentes especializados o ampliar los flujos de trabajo de forma inmediata conforme crece tu negocio."
  },
  {
    pregunta: "¿Mis datos y los de mis clientes están protegidos?",
    respuesta: "La seguridad es prioritaria. Implementamos cifrado de extremo a extremo y cumplimos estrictamente la normativa RGPD. Tu base de conocimientos es privada y está blindada contra accesos no autorizados."
  },
  {
    pregunta: "¿En qué canales se pueden integrar los agentes de IA?",
    respuesta: "Somos totalmente omnicanal: Web, WhatsApp, Instagram, Telegram o cualquier sistema interno mediante API. Desplegamos donde están tus clientes, no donde sea más cómodo para nosotros."
  },
  {
    pregunta: "¿Qué incluye exactamente la Auditoría Gratuita?",
    respuesta: "No es una llamada comercial. Es una sesión técnica en la que evaluamos tu volumen de tráfico, detectamos fugas de conversión y te presentamos un mapa estratégico con estimaciones de impacto en facturación. Sin compromiso."
  },
  {
    pregunta: "¿Cuál es el siguiente paso para empezar?",
    respuesta: "Solicita tu auditoría gratuita ahora. En menos de 24 horas un técnico senior te contactará para analizar tu caso, diseñar tu propuesta a medida y fijar la fecha de inicio del despliegue."
  }
];
const testimonios = [
  {
    nombre: "David G.",
    cargo: "Director de Ventas, inmobiliaria",
    rating: 5,
    texto: "Metatok.ai nos cambió el ritmo. Los bots califican leads 24/7 y solo le pasan al equipo los que vienen calientes. Subieron las citas y bajó el esfuerzo."
  },
  {
    nombre: "Dra. Laura P.",
    cargo: "Dirección de clínica",
    rating: 5,
    texto: "Con el chatbot de Metatok.ai los pacientes agendan, preguntan y confirman solos. Los seguimientos automáticos nos ayudaron a recuperar citas perdidas."
  },
  {
    nombre: "Ana F.",
    cargo: "Gerente de Operaciones, marketplace digital",
    rating: 5,
    texto: "El 80% de las consultas ya las atiende el chatbot: pedidos, devoluciones, estatus. Bajamos carga al equipo sin bajar la calidad. Todo un éxito."
  },
  {
    nombre: "Luis C.",
    cargo: "Propietario, “Viajes Sin Fronteras”",
    rating: 5,
    texto: "Metatok.ai manda confirmaciones y recordatorios automático, y los asistentes de voz responden lo básico. Nos ahorró horas de gestión cada semana."
  },
  {
    nombre: "Juan V.",
    cargo: "Director de Ventas, “TecnoCenter”",
    rating: 5,
    texto: "El chatbot en la web atiende 24/7: ficha técnica, precios y disponibilidad. Llegan clientes más informados y el tráfico cualificado subió. Excelente."
  },
  {
    nombre: "Ricardo Xing",
    cargo: "Abogado socio, “Garrido & Asociados”",
    rating: 5,
    texto: "Metatok.ai filtra los prospectos, agenda la primera consulta y nos deja el contexto. Así solo vemos a quien realmente necesita nuestros servicios."
  }
];
const $$splitComponentImporter = () => import("./index-D2jHRKEb.mjs");
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.pregunta,
    acceptedAnswer: {
      "@type": "Answer",
      text: f.respuesta
    }
  }))
};
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Automatización con IA y cualificación de leads",
  provider: {
    "@type": "Organization",
    name: "Metatok"
  },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Metatok",
    itemListElement: servicios.map((s) => ({
      "@type": "Offer",
      itemOffered: {
        "@type": "Service",
        name: s.titulo,
        description: s.descripcion
      }
    }))
  }
};
const Route = createFileRoute("/")({
  head: () => ({
    meta: [{
      title: "MetaTok — Tu departamento de ventas en piloto automático con IA"
    }, {
      name: "description",
      content: "Ecosistema de agentes autónomos: prospectan, cualifican y cierran en WhatsApp, Instagram y Web. API abierta a cualquier CRM, multilingüe y listo para escala."
    }, {
      property: "og:title",
      content: "MetaTok — Agentes de venta con IA, 24/7"
    }, {
      property: "og:description",
      content: "No es un chatbot. Es un motor de conversión omnicanal con cierre autónomo y datos accionables."
    }],
    scripts: [{
      type: "application/ld+json",
      children: JSON.stringify(faqJsonLd)
    }, {
      type: "application/ld+json",
      children: JSON.stringify(serviceJsonLd)
    }]
  }),
  component: lazyRouteComponent($$splitComponentImporter, "component")
});
const TerminosRoute = Route$3.update({
  id: "/terminos",
  path: "/terminos",
  getParentRoute: () => Route$4
});
const PrivacidadRoute = Route$2.update({
  id: "/privacidad",
  path: "/privacidad",
  getParentRoute: () => Route$4
});
const AvisoLegalRoute = Route$1.update({
  id: "/aviso-legal",
  path: "/aviso-legal",
  getParentRoute: () => Route$4
});
const IndexRoute = Route.update({
  id: "/",
  path: "/",
  getParentRoute: () => Route$4
});
const rootRouteChildren = {
  IndexRoute,
  AvisoLegalRoute,
  PrivacidadRoute,
  TerminosRoute
};
const routeTree = Route$4._addFileChildren(rootRouteChildren)._addFileTypes();
function DefaultErrorComponent({ error, reset }) {
  const router2 = useRouter();
  return /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "flex min-h-screen items-center justify-center bg-background px-4", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "max-w-md text-center", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mx-auto mb-6 flex h-16 w-16 items-center justify-center rounded-full bg-destructive/10", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
      "svg",
      {
        xmlns: "http://www.w3.org/2000/svg",
        className: "h-8 w-8 text-destructive",
        fill: "none",
        viewBox: "0 0 24 24",
        stroke: "currentColor",
        strokeWidth: 2,
        children: /* @__PURE__ */ jsxRuntimeExports.jsx(
          "path",
          {
            strokeLinecap: "round",
            strokeLinejoin: "round",
            d: "M12 9v3.75m-9.303 3.376c-.866 1.5.217 3.374 1.948 3.374h14.71c1.73 0 2.813-1.874 1.948-3.374L13.949 3.378c-.866-1.5-3.032-1.5-3.898 0L2.697 16.126ZM12 15.75h.007v.008H12v-.008Z"
          }
        )
      }
    ) }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "text-2xl font-bold tracking-tight text-foreground", children: "Something went wrong" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-2 text-sm text-muted-foreground", children: "An unexpected error occurred. Please try again." }),
    false,
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex items-center justify-center gap-3", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "button",
        {
          onClick: () => {
            router2.invalidate();
            reset();
          },
          className: "inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90",
          children: "Try again"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/",
          className: "inline-flex items-center justify-center rounded-md border border-input bg-background px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-accent",
          children: "Go home"
        }
      )
    ] })
  ] }) });
}
const getRouter = () => {
  const router2 = createRouter({
    routeTree,
    context: {},
    scrollRestoration: true,
    defaultPreloadStaleTime: 0,
    defaultErrorComponent: DefaultErrorComponent
  });
  return router2;
};
const router = /* @__PURE__ */ Object.freeze(/* @__PURE__ */ Object.defineProperty({
  __proto__: null,
  getRouter
}, Symbol.toStringTag, { value: "Module" }));
export {
  beneficios as b,
  canales as c,
  faqs as f,
  proceso as p,
  router as r,
  servicios as s,
  testimonios as t
};
