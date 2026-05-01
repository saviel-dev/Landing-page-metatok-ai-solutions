/** URL del agente MetaTok por WhatsApp. Configura VITE_WHATSAPP_PHONE (solo dígitos, ej. 34600111222). */
export function getWhatsappAgentHref(): string {
  const raw = import.meta.env.VITE_WHATSAPP_PHONE as string | undefined;
  const text = encodeURIComponent(
    "Hola, quiero hablar con un agente MetaTok para ver cómo podéis aplicar esto a mi empresa.",
  );
  const digits = raw?.replace(/\D/g, "") ?? "";
  if (digits.length >= 8) {
    return `https://wa.me/${digits}?text=${text}`;
  }
  return "/#contacto";
}
