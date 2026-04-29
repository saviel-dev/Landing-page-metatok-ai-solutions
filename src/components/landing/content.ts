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

export type Servicio = {
  icon: LucideIcon;
  titulo: string;
  descripcion: string;
  destacado?: boolean;
};

export const servicios: Servicio[] = [
  {
    icon: Bot,
    titulo: "Agentes de IA Conversacional",
    descripcion:
      "Agentes especializados con NLP que entienden intenciones, manejan objeciones y ejecutan estrategias de venta complejas en cada rama de tu negocio.",
    destacado: true,
  },
  {
    icon: Workflow,
    titulo: "Automatización de Procesos",
    descripcion:
      "Eliminamos tareas repetitivas y errores humanos liberando a tu equipo para que se enfoque en cerrar ventas de alto valor.",
  },
  {
    icon: Filter,
    titulo: "Cualificación de Leads",
    descripcion:
      "Filtramos y puntuamos cada prospecto en tiempo real para que solo hables con los que están listos para comprar.",
  },
  {
    icon: Database,
    titulo: "Integración con CRM",
    descripcion:
      "Sincronización bidireccional con tu CRM mediante API. Datos limpios, actualizados y accionables 24/7.",
  },
  {
    icon: CalendarClock,
    titulo: "Agendamiento Automático",
    descripcion:
      "Citas en tu calendario sin fricción. El agente negocia el horario, confirma y envía recordatorios.",
  },
  {
    icon: GitBranch,
    titulo: "Flow-works inteligentes",
    descripcion:
      "Flujos de trabajo que disparan acciones automáticas: cualificar leads, agendar, actualizar CRM y nutrir prospectos.",
    destacado: true,
  },
];

export const proceso = [
  {
    numero: "01",
    titulo: "Auditoría de Diagnóstico",
    descripcion:
      "Un experto en IA analiza tus cuellos de botella operativos y detecta fugas de conversión.",
  },
  {
    numero: "02",
    titulo: "Consultoría Estratégica",
    descripcion:
      "Definimos el alcance del proyecto y diseñamos la arquitectura de agentes y flujos a tu medida.",
  },
  {
    numero: "03",
    titulo: "Presupuesto Ad-Hoc",
    descripcion:
      "Recibes una propuesta transparente basada en la complejidad real de tu infraestructura.",
  },
  {
    numero: "04",
    titulo: "Despliegue y Programación",
    descripcion:
      "Entre 15 y 30 días: programación, entrenamiento de agentes y QA. Llave en mano.",
  },
];

export const beneficios = [
  {
    titulo: "+ Leads cualificados",
    descripcion:
      "Solo hablas con prospectos listos para comprar. Más eficiencia, menos ruido.",
  },
  {
    titulo: "Cero tareas repetitivas",
    descripcion:
      "La IA gestiona el front-end de atención y libera a tu equipo comercial.",
  },
  {
    titulo: "Conversión 24/7",
    descripcion:
      "Tu negocio nunca duerme. Capta, cualifica y agenda incluso fuera de horario.",
  },
  {
    titulo: "Integración omnicanal",
    descripcion:
      "Web, WhatsApp, Instagram, Telegram o tu CRM interno vía API.",
  },
];

export const canales = [
  { icon: Globe, label: "Web" },
  { icon: MessageCircle, label: "WhatsApp" },
  { icon: Instagram, label: "Instagram" },
  { icon: Send, label: "Telegram" },
  { icon: Plug, label: "API" },
];

export const faqs = [
  {
    pregunta: "¿En qué consiste exactamente vuestro servicio de automatización e IA?",
    respuesta:
      "No somos solo proveedores de software; somos arquitectos de procesos. Implementamos ecosistemas de Inteligencia Artificial Conversacional y Estructuras de Automatización (SaaS) que se integran en el núcleo de su negocio para captar, nutrir y convertir leads de forma autónoma 24/7.",
  },
  {
    pregunta: "¿Cómo es el proceso desde que solicito mi auditoría gratuita?",
    respuesta:
      "El flujo es de alta precisión técnica: 1) Auditoría de Diagnóstico: un experto en IA analiza sus cuellos de botella operativos. 2) Consultoría Estratégica: definimos el alcance del proyecto. 3) Presupuesto Ad-Hoc: recibe una propuesta basada en la complejidad de los agentes y flujos necesarios. 4) Despliegue y Programación: iniciamos el desarrollo de su arquitectura personalizada.",
  },
  {
    pregunta: "¿Tengo algún compromiso de permanencia?",
    respuesta:
      "Absolutamente ninguno. Operamos bajo un modelo de suscripción mensual transparente. Queremos que se quede con nosotros por los resultados que generamos, no por un contrato. Puede dar de baja el servicio en cualquier momento, lo que le otorga total libertad y control sobre su inversión.",
  },
  {
    pregunta: "¿Por qué el presupuesto es a medida y no un precio fijo?",
    respuesta:
      'Porque la excelencia técnica no admite "tallas únicas". Un negocio puede requerir un agente de IA para tareas sencillas, mientras que otro necesita una integración profunda de APIs y múltiples flujos de trabajo. Usted paga estrictamente por la potencia y complejidad que su infraestructura requiere.',
  },
  {
    pregunta: "¿Cuánto tiempo tarda la implementación completa?",
    respuesta:
      'La ingeniería de calidad requiere rigor. El ciclo de desarrollo —que incluye programación lógica, entrenamiento de los agentes con sus datos y fase de QA (pruebas)— oscila entre 15 y 30 días. Es un despliegue "llave en mano" listo para producir resultados.',
  },
  {
    pregunta: "¿En qué se diferencian vuestros agentes de un chatbot convencional?",
    respuesta:
      "La diferencia es generacional. Un chatbot tradicional es rígido; nuestros Agentes de IA Especializados utilizan Procesamiento de Lenguaje Natural (NLP) para entender intenciones, manejar objeciones y ejecutar estrategias de venta complejas en cada rama de su negocio.",
  },
  {
    pregunta: '¿Qué son los "Flow-works" y cómo ayudan a mi negocio?',
    respuesta:
      "Los Flow-works son flujos de trabajo inteligentes que disparan acciones automáticas. No solo responden al cliente, sino que pueden agendar citas en su calendario, calificar la calidad de un lead o actualizar su CRM en tiempo real sin intervención humana.",
  },
  {
    pregunta: "¿Por qué es imprescindible un Embudo de Ventas (Sales Funnel) automatizado?",
    respuesta:
      "En el entorno digital, la velocidad es dinero. Un embudo automatizado garantiza que ningún prospecto se pierda por falta de atención, guiando al cliente desde el primer contacto hasta el cierre, optimizando su Tasa de Conversión (CR) de forma drástica.",
  },
  {
    pregunta: "¿Es difícil la configuración técnica para mí como cliente?",
    respuesta:
      "Para usted, la configuración es inexistente. Nuestro equipo de ingenieros se encarga de toda la programación, la instalación de scripts y la sincronización de herramientas. Su única tarea es recibir los resultados.",
  },
  {
    pregunta: "¿Cómo me ahorra tiempo y costes este sistema?",
    respuesta:
      "Al delegar el Front-End (atención) y la cualificación de leads a nuestros Agentes de IA, usted elimina el error humano y libera a su equipo de tareas repetitivas. Esto permite que su personal se enfoque exclusivamente en cerrar ventas de alto valor.",
  },
  {
    pregunta: "¿Qué sucede si mi negocio escala y necesito más capacidad?",
    respuesta:
      "Nuestra infraestructura SaaS es totalmente escalable. Podemos aumentar la capacidad de procesamiento, el número de agentes especializados o la complejidad de los flujos de trabajo de manera inmediata conforme su negocio crezca.",
  },
  {
    pregunta: "¿Mis datos y los de mis clientes están protegidos?",
    respuesta:
      "La seguridad es nuestra prioridad. Implementamos protocolos de cifrado de extremo a extremo y cumplimos estrictamente con la normativa RGPD. Su base de conocimientos es privada y está blindada contra accesos no autorizados.",
  },
  {
    pregunta: "¿En qué canales se pueden integrar estos Agentes de IA?",
    respuesta:
      "Somos totalmente omnicanal. Podemos desplegar sus embudos y agentes en su sitio Web, WhatsApp, Instagram, Telegram o incluso integrarlos en sistemas de gestión interna mediante API.",
  },
  {
    pregunta: "¿Qué incluye la Auditoría Gratuita inicial?",
    respuesta:
      "No es una simple llamada comercial; es una sesión de consultoría técnica. Evaluamos su volumen de tráfico, detectamos fugas de conversión y le presentamos un mapa estratégico de cómo la IA puede maximizar su facturación actual.",
  },
  {
    pregunta: "¿Cuál es el siguiente paso para empezar?",
    respuesta:
      "Solicite su auditoría gratuita hoy mismo. Una vez evaluado su caso, un técnico senior se pondrá en contacto para diseñar su presupuesto a medida y comenzar la fase de programación. Es hora de llevar su negocio al siguiente nivel operativo.",
  },
];
