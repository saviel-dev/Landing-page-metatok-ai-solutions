/**
 * Datos de contenido de la landing Metatok.
 * Centralizados para facilitar mantenimiento y reutilización en JSON-LD.
 */

import {
  Bot,
  Workflow,
  Filter,
  Database,
  CalendarClock,
  GitBranch,
  Globe,
  MessageCircle,
  Instagram,
  Send,
  Plug,
  type LucideIcon,
} from "lucide-react";

import imgIaConversacionalGif from "@/assets/gif/ia conversacional.gif";
import imgCualificacionLeadsGif from "@/assets/gif/Cualificación de Leads.gif";
import imgAutomatizacionGif from "@/assets/gif/automatizacion de procesos.gif";
import imgCRMGif from "@/assets/gif/Integración con CRM.gif";
import imgWorkflowGif from "@/assets/gif/workflow.gif";
import imgAgendamientoAutomaticoGif from "@/assets/gif/agendamiento automatico.gif";

export type Servicio = {
  icon: LucideIcon;
  titulo: string;
  descripcion: string;
  destacado?: boolean;
  image?: string;
  beneficio?: string; // beneficio concreto visible para el visitante
};

export const servicios: Servicio[] = [
  {
    icon: Bot,
    titulo: "Agentes de IA Conversacional",
    descripcion:
      "Agentes especializados con NLP que entienden intenciones, manejan objeciones y ejecutan estrategias de venta complejas en cada canal de tu negocio.",
    beneficio: "Responde al 100% de tus leads en segundos, no en horas.",
    destacado: true,
    image: imgIaConversacionalGif,
  },
  {
    icon: Workflow,
    titulo: "Automatización de Procesos",
    descripcion:
      "Eliminamos tareas repetitivas y errores humanos, liberando a tu equipo para que se enfoque exclusivamente en cerrar ventas de alto valor.",
    beneficio: "Recupera hasta 20 h/semana de tiempo productivo.",
    image: imgAutomatizacionGif,
  },
  {
    icon: Filter,
    titulo: "Cualificación de Leads",
    descripcion:
      "Filtramos y puntuamos cada prospecto en tiempo real para que solo hables con los que tienen intención real de compra.",
    beneficio: "Aumenta tu tasa de cierre hasta un 3× sin más presupuesto.",
    image: imgCualificacionLeadsGif,
  },
  {
    icon: Database,
    titulo: "Integración con CRM",
    descripcion:
      "Sincronización bidireccional con tu CRM mediante API. Datos limpios, actualizados y accionables 24/7, sin duplicados ni pérdidas.",
    beneficio: "0 horas de carga manual de datos en tu equipo.",
    image: imgCRMGif,
  },
  {
    icon: CalendarClock,
    titulo: "Agendamiento Automático",
    descripcion:
      "Citas en tu calendario sin fricción. El agente negocia el horario, confirma la reunión y envía recordatorios personalizados.",
    beneficio: "Hasta +54% más citas agendadas sin intervención humana.",
    image: imgAgendamientoAutomaticoGif,
  },
  {
    icon: GitBranch,
    titulo: "Flow-works Inteligentes",
    descripcion:
      "Flujos de trabajo que disparan acciones automáticas: cualifican leads, agendan reuniones, actualizan el CRM y nutren prospectos en piloto automático.",
    beneficio: "Tu embudo de ventas funciona solo, 24 horas al día.",
    destacado: true,
    image: imgWorkflowGif,
  },
];

export const proceso = [
  {
    numero: "01",
    titulo: "Auditoría de Diagnóstico",
    descripcion:
      "Un experto analiza tu operación actual, detecta fugas de conversión y cuantifica cuánto estás perdiendo sin automatización.",
    resultado: "Mapa claro de prioridades",
  },
  {
    numero: "02",
    titulo: "Estrategia a Medida",
    descripcion:
      "Diseñamos la arquitectura de agentes, flujos e integraciones adaptada exactamente a tu modelo de negocio y tus canales actuales.",
    resultado: "Propuesta técnica personalizada",
  },
  {
    numero: "03",
    titulo: "Presupuesto Transparente",
    descripcion:
      "Recibes una propuesta de precio basada en la complejidad real. Sin letra pequeña, sin costes ocultos, sin permanencia forzada.",
    resultado: "Inversión clara y escalable",
  },
  {
    numero: "04",
    titulo: "Despliegue Llave en Mano",
    descripcion:
      "Entre 15 y 30 días: programación, entrenamiento de agentes y QA completo. Tu equipo no toca código. Solo recibe resultados.",
    resultado: "Sistema activo en producción",
  },
];

export const beneficios = [
  {
    titulo: "Respuesta que multiplica oportunidades",
    descripcion:
      "La velocidad y la insistencia correcta convierten conversaciones en ingresos. Menos leads muertos por silencio.",
    metrica: "+400%",
    metricaLabel: "Tasa de respuesta vs. manual",
  },
  {
    titulo: "Cero tareas repetitivas",
    descripcion:
      "La IA gestiona captación, seguimiento y agenda. Tu equipo solo interviene cuando hay una venta que cerrar.",
    metrica: "20h",
    metricaLabel: "Ahorradas por semana",
  },
  {
    titulo: "Operativo las 24 horas",
    descripcion:
      "Tu negocio nunca duerme. Capta, cualifica y agenda incluso fuera de horario comercial y festivos.",
    metrica: "24/7",
    metricaLabel: "Sin interrupciones",
  },
  {
    titulo: "Integración omnicanal",
    descripcion:
      "Web, WhatsApp, Instagram, Telegram o tu CRM interno vía API. Un ecosistema conectado y coherente.",
    metrica: "5+",
    metricaLabel: "Canales integrados",
  },
];

import { WhatsAppIcon, InstagramIcon, TelegramIcon } from "./BrandIcons";

export const canales = [
  { label: "Web", icon: Globe, descripcion: "Chat en tu sitio web" },
  { label: "WhatsApp", icon: WhatsAppIcon, descripcion: "El canal más usado" },
  { label: "Instagram", icon: InstagramIcon, descripcion: "DMs automatizados" },
  { label: "Telegram", icon: TelegramIcon, descripcion: "Bots y notificaciones" },
  { label: "API", icon: Plug, descripcion: "Integra cualquier sistema" },
];

export const faqs = [
  {
    pregunta: "¿En qué consiste exactamente el servicio de automatización con IA?",
    respuesta:
      "Implementamos ecosistemas de Inteligencia Artificial Conversacional que se integran en el núcleo de tu negocio para captar, nutrir y convertir leads de forma autónoma 24/7. No vendemos software genérico; diseñamos arquitecturas a medida para tu operación.",
  },
  {
    pregunta: "¿Cómo es el proceso desde que solicito mi auditoría gratuita?",
    respuesta:
      "El proceso es de alta precisión: 1) Auditoría de Diagnóstico — detectamos fugas de conversión. 2) Estrategia a Medida — diseñamos la arquitectura. 3) Presupuesto Transparente — propuesta sin letra pequeña. 4) Despliegue Llave en Mano — sistema activo en 15-30 días.",
  },
  {
    pregunta: "¿Tengo algún compromiso de permanencia?",
    respuesta:
      "Ninguno. Operamos bajo suscripción mensual sin contratos de permanencia. Queremos que te quedes por los resultados que generamos, no por obligación contractual. Puedes cancelar en cualquier momento.",
  },
  {
    pregunta: "¿Por qué el presupuesto es a medida y no un precio fijo cerrado?",
    respuesta:
      "Porque tu negocio no es igual al de nadie más. Un proyecto puede requerir un único agente de IA, mientras que otro necesita integración profunda con múltiples APIs y flujos complejos. Pagas estrictamente por la solución que tu operación necesita.",
  },
  {
    pregunta: "¿Cuánto tiempo tarda la implementación completa?",
    respuesta:
      "El ciclo de desarrollo — programación, entrenamiento de agentes con tus datos y fase de QA — oscila entre 15 y 30 días. Es un despliegue llave en mano: tu equipo no toca código ni configura nada.",
  },
  {
    pregunta: "¿En qué se diferencian vuestros agentes de un chatbot convencional?",
    respuesta:
      "Un chatbot tradicional sigue un árbol de decisiones rígido. Nuestros Agentes de IA utilizan NLP avanzado para entender intenciones, manejar objeciones en tiempo real y ejecutar estrategias de venta complejas adaptadas a cada conversación.",
  },
  {
    pregunta: "¿Qué son los Flow-works y cómo ayudan a mi negocio?",
    respuesta:
      "Son flujos de trabajo inteligentes que disparan acciones automáticas. No solo responden al cliente: pueden agendar citas, cualificar leads, actualizar el CRM y enviar secuencias de seguimiento, todo sin intervención humana.",
  },
  {
    pregunta: "¿Por qué necesito un embudo de ventas automatizado?",
    respuesta:
      "En el entorno digital, la velocidad de respuesta es dinero. Un embudo automatizado garantiza que ningún prospecto se pierda por falta de atención o respuesta tardía, guiando al cliente desde el primer contacto hasta el cierre de forma consistente.",
  },
  {
    pregunta: "¿Es complicada la configuración técnica para mi equipo?",
    respuesta:
      "Para ti, la configuración es inexistente. Nuestro equipo de ingenieros se encarga de toda la programación, instalación e integración. Tu única tarea es revisar los resultados y seguir cerrando ventas.",
  },
  {
    pregunta: "¿Cómo me ahorra tiempo y dinero este sistema?",
    respuesta:
      "Al delegar la captación, cualificación y seguimiento de leads a la IA, eliminas el error humano y liberas a tu equipo de tareas repetitivas. Esto permite que tu personal se enfoque exclusivamente en cerrar ventas de alto valor.",
  },
  {
    pregunta: "¿Qué sucede si mi negocio crece y necesito más capacidad?",
    respuesta:
      "Nuestra infraestructura es 100% escalable. Podemos aumentar la capacidad de procesamiento, añadir nuevos agentes especializados o ampliar los flujos de trabajo de forma inmediata conforme crece tu negocio.",
  },
  {
    pregunta: "¿Mis datos y los de mis clientes están protegidos?",
    respuesta:
      "La seguridad es prioritaria. Implementamos cifrado de extremo a extremo y cumplimos estrictamente la normativa RGPD. Tu base de conocimientos es privada y está blindada contra accesos no autorizados.",
  },
  {
    pregunta: "¿En qué canales se pueden integrar los agentes de IA?",
    respuesta:
      "Somos totalmente omnicanal: Web, WhatsApp, Instagram, Telegram o cualquier sistema interno mediante API. Desplegamos donde están tus clientes, no donde sea más cómodo para nosotros.",
  },
  {
    pregunta: "¿Qué incluye exactamente la Auditoría Gratuita?",
    respuesta:
      "No es una llamada comercial. Es una sesión técnica en la que evaluamos tu volumen de tráfico, detectamos fugas de conversión y te presentamos un mapa estratégico con estimaciones de impacto en facturación. Sin compromiso.",
  },
  {
    pregunta: "¿Cuál es el siguiente paso para empezar?",
    respuesta:
      "Solicita tu auditoría gratuita ahora. En menos de 24 horas un técnico senior te contactará para analizar tu caso, diseñar tu propuesta a medida y fijar la fecha de inicio del despliegue.",
  },
];

export const testimonios = [
  {
    nombre: "David G.",
    cargo: "Director de Ventas, inmobiliaria",
    rating: 5,
    texto: "Metatok.ai nos cambió el ritmo. Los bots califican leads 24/7 y solo le pasan al equipo los que vienen calientes. Subieron las citas y bajó el esfuerzo.",
  },
  {
    nombre: "Dra. Laura P.",
    cargo: "Dirección de clínica",
    rating: 5,
    texto: "Con el chatbot de Metatok.ai los pacientes agendan, preguntan y confirman solos. Los seguimientos automáticos nos ayudaron a recuperar citas perdidas.",
  },
  {
    nombre: "Ana F.",
    cargo: "Gerente de Operaciones, marketplace digital",
    rating: 5,
    texto: "El 80% de las consultas ya las atiende el chatbot: pedidos, devoluciones, estatus. Bajamos carga al equipo sin bajar la calidad. Todo un éxito.",
  },
  {
    nombre: "Luis C.",
    cargo: "Propietario, “Viajes Sin Fronteras”",
    rating: 5,
    texto: "Metatok.ai manda confirmaciones y recordatorios automático, y los asistentes de voz responden lo básico. Nos ahorró horas de gestión cada semana.",
  },
  {
    nombre: "Juan V.",
    cargo: "Director de Ventas, “TecnoCenter”",
    rating: 5,
    texto: "El chatbot en la web atiende 24/7: ficha técnica, precios y disponibilidad. Llegan clientes más informados y el tráfico cualificado subió. Excelente.",
  },
  {
    nombre: "Ricardo Xing",
    cargo: "Abogado socio, “Garrido & Asociados”",
    rating: 5,
    texto: "Metatok.ai filtra los prospectos, agenda la primera consulta y nos deja el contexto. Así solo vemos a quien realmente necesita nuestros servicios.",
  },
];

