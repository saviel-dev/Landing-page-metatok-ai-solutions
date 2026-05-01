import { useEffect, useMemo, useState } from "react";
import { AnimatePresence, motion } from "framer-motion";
import { Bot, MessageSquare, Send, Sparkles, User, X } from "lucide-react";
import { getWhatsappAgentHref } from "@/lib/whatsapp";

type ChatRole = "bot" | "user";
type ChatMessage = { id: string; role: ChatRole; text: string };

const initialMessages: ChatMessage[] = [
  {
    id: "m1",
    role: "bot",
    text: "Hola, soy el agente de demo de MetaTok. Te muestro como podrias convertir mas leads en tu negocio.",
  },
  {
    id: "m2",
    role: "bot",
    text: "Cuentame tu sector y tu reto principal (ej: respuestas tardias, agenda vacia, leads frios).",
  },
];

const quickActions = [
  "Soy de inmobiliaria",
  "Tengo una clinica",
  "Quiero mas reservas en hotel",
  "Necesito integrar con CRM",
];

function getBotReply(input: string): string {
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

export function LiveDemoWidget() {
  const [open, setOpen] = useState(false);
  const [messages, setMessages] = useState<ChatMessage[]>(initialMessages);
  const [input, setInput] = useState("");
  const [isTyping, setIsTyping] = useState(false);
  const whatsappHref = useMemo(() => getWhatsappAgentHref(), []);

  useEffect(() => {
    const handler = () => setOpen(true);
    window.addEventListener("metatok:open-live-demo", handler as EventListener);
    return () => {
      window.removeEventListener("metatok:open-live-demo", handler as EventListener);
    };
  }, []);

  function sendMessage(text: string) {
    const value = text.trim();
    if (!value || isTyping) return;

    const userMsg: ChatMessage = {
      id: `u-${Date.now()}`,
      role: "user",
      text: value,
    };

    setMessages((prev) => [...prev, userMsg]);
    setIsTyping(true);
    setInput("");

    window.setTimeout(() => {
      const botMsg: ChatMessage = {
        id: `b-${Date.now()}-${Math.random().toString(36).slice(2, 7)}`,
        role: "bot",
        text: getBotReply(value),
      };
      setMessages((prev) => [...prev, botMsg]);
      setIsTyping(false);
    }, 700);
  }

  return (
    <div
      className={`fixed right-5 z-[85] md:right-8 ${
        open ? "bottom-24 md:bottom-24" : "bottom-1 md:bottom-2"
      }`}
    >
      <AnimatePresence mode="wait">
        {open ? (
          <motion.aside
            key="open"
            initial={{ opacity: 0, y: 12, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 8, scale: 0.98 }}
            transition={{ duration: 0.2 }}
            className="w-[min(92vw,370px)] flex flex-col max-h-[calc(100vh-140px)] overflow-hidden rounded-2xl border border-border/80 bg-card/95 shadow-[0_24px_70px_-30px_var(--color-primary)] backdrop-blur-md"
            aria-label="Live demo de MetaTok"
          >
            <div className="shrink-0 flex items-center justify-between border-b border-border/70 bg-background/70 px-4 py-3">
              <div className="flex items-center gap-2">
                <span className="inline-flex h-8 w-8 items-center justify-center rounded-lg border border-primary/30 bg-primary/10 text-primary">
                  <Sparkles className="h-4 w-4" aria-hidden />
                </span>
                <div>
                  <p className="text-sm font-bold text-foreground">Live Demo MetaTok</p>
                  <p className="text-[11px] text-muted-foreground">Agente de ventas en tiempo real</p>
                </div>
              </div>
              <button
                type="button"
                onClick={() => setOpen(false)}
                className="inline-flex h-8 w-8 items-center justify-center rounded-md border border-border bg-card text-muted-foreground transition-colors hover:text-foreground"
                aria-label="Cerrar demo"
              >
                <X className="h-4 w-4" aria-hidden />
              </button>
            </div>

            <div className="flex-1 overflow-y-auto bg-background/55 px-3 py-3 space-y-2">
              {messages.map((message) => (
                <motion.div
                  key={message.id}
                  initial={{ opacity: 0, y: 6, scale: 0.98 }}
                  animate={{ opacity: 1, y: 0, scale: 1 }}
                  transition={{ duration: 0.2 }}
                  className={`flex items-start gap-2 ${message.role === "user" ? "justify-end" : "justify-start"}`}
                >
                  {message.role === "bot" ? (
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                      <Bot className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  ) : null}
                  <div
                    className={`max-w-[85%] rounded-xl border px-3 py-2 text-xs leading-relaxed ${
                      message.role === "user"
                        ? "border-accent/30 bg-accent/10 text-foreground"
                        : "border-border/80 bg-card text-foreground/90"
                    }`}
                  >
                    {message.text}
                  </div>
                  {message.role === "user" ? (
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-accent/35 bg-accent/10 text-accent">
                      <User className="h-3.5 w-3.5" aria-hidden />
                    </span>
                  ) : null}
                </motion.div>
              ))}

              <AnimatePresence>
                {isTyping ? (
                  <motion.div
                    key="typing"
                    initial={{ opacity: 0, y: 4 }}
                    animate={{ opacity: 1, y: 0 }}
                    exit={{ opacity: 0, y: 4 }}
                    className="flex items-start gap-2"
                  >
                    <span className="mt-0.5 inline-flex h-6 w-6 shrink-0 items-center justify-center rounded-full border border-primary/30 bg-primary/10 text-primary">
                      <Bot className="h-3.5 w-3.5" aria-hidden />
                    </span>
                    <div className="inline-flex items-center gap-1 rounded-xl border border-border/80 bg-card px-3 py-2">
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/80 animate-bounce [animation-delay:-0.2s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/80 animate-bounce [animation-delay:-0.1s]" />
                      <span className="h-1.5 w-1.5 rounded-full bg-primary/80 animate-bounce" />
                    </div>
                  </motion.div>
                ) : null}
              </AnimatePresence>
            </div>

            <div className="shrink-0 border-t border-border/70 bg-card/80 p-3">
              <div className="mb-2 flex gap-2 overflow-x-auto pb-1 [&::-webkit-scrollbar]:hidden [-ms-overflow-style:none] [scrollbar-width:none]">
                {quickActions.map((action) => (
                  <button
                    key={action}
                    type="button"
                    onClick={() => sendMessage(action)}
                    className="shrink-0 whitespace-nowrap rounded-full border border-border bg-background/70 px-3 py-1.5 text-[11px] text-muted-foreground transition-colors hover:border-primary/40 hover:text-foreground"
                  >
                    {action}
                  </button>
                ))}
              </div>

              <div className="flex items-center gap-2">
                <input
                  value={input}
                  onChange={(e) => setInput(e.target.value)}
                  onKeyDown={(e) => {
                    if (e.key === "Enter") sendMessage(input);
                  }}
                  placeholder="Escribe tu consulta..."
                  className="h-10 flex-1 rounded-lg border border-border bg-background/75 px-3 text-sm text-foreground outline-none transition-colors placeholder:text-muted-foreground focus:border-primary/45"
                />
                <button
                  type="button"
                  onClick={() => sendMessage(input)}
                  className="inline-flex h-10 w-10 items-center justify-center rounded-lg bg-primary text-primary-foreground transition-all hover:bg-primary/90 disabled:cursor-not-allowed disabled:opacity-60"
                  aria-label="Enviar mensaje"
                  disabled={isTyping}
                >
                  <Send className={`h-4 w-4 ${isTyping ? "animate-pulse" : ""}`} aria-hidden />
                </button>
              </div>

              <a
                href={whatsappHref}
                className="mt-2 inline-flex items-center gap-1.5 text-[11px] font-semibold text-primary transition-colors hover:text-accent"
              >
                <MessageSquare className="h-3.5 w-3.5" aria-hidden />
                Hablar con agente real por WhatsApp
              </a>
            </div>
          </motion.aside>
        ) : null}
      </AnimatePresence>
    </div>
  );
}
