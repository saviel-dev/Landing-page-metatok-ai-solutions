import { useCallback, useEffect, useRef, useState } from "react";
import type { ComponentType } from "react";
import { ClipboardCheck, Mail, MessageSquare, Plus, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import { getWhatsappAgentHref } from "@/lib/whatsapp";

function IconWhatsApp({ className }: { className?: string }) {
  return (
    <svg viewBox="0 0 24 24" className={className} xmlns="http://www.w3.org/2000/svg" aria-hidden>
      <path
        fill="currentColor"
        d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.435 9.884-9.884 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.890-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"
      />
    </svg>
  );
}

type ActionItem = {
  id: string;
  label: string;
  href: string;
  external?: boolean;
  onSelect?: () => void;
  icon: ComponentType<{ className?: string }>;
  iconClass: string;
  bgClass: string;
};

/** De arriba a abajo al desplegar: live demo → auditoría → WhatsApp → contacto. */
function buildActions(): ActionItem[] {
  const wa = getWhatsappAgentHref();
  const waExternal = !wa.startsWith("/") && !wa.startsWith("#");
  return [
    {
      id: "live-demo",
      label: "Live Demo",
      href: "#",
      onSelect: () => {
        window.dispatchEvent(new CustomEvent("metatok:open-live-demo"));
      },
      icon: MessageSquare,
      iconClass: "text-primary-foreground",
      bgClass: "bg-primary hover:bg-primary/90",
    },
    {
      id: "auditoria",
      label: "Auditoría gratis",
      href: "/#auditoria",
      icon: ClipboardCheck,
      iconClass: "text-foreground",
      bgClass: "bg-card border border-border hover:bg-muted",
    },
    {
      id: "whatsapp",
      label: "WhatsApp",
      href: wa,
      external: waExternal,
      icon: IconWhatsApp,
      iconClass: "text-white",
      bgClass: "bg-[#25D366] hover:bg-[#20bd5a]",
    },
    {
      id: "contacto",
      label: "Contacto",
      href: "/#contacto",
      icon: Mail,
      iconClass: "text-primary-foreground",
      bgClass: "bg-primary hover:bg-primary/90",
    },
  ];
}

export function FloatingActionsMenu() {
  const [open, setOpen] = useState(false);
  const rootRef = useRef<HTMLDivElement>(null);
  const actions = buildActions();

  const close = useCallback(() => setOpen(false), []);

  useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === "Escape") close();
    };
    const onPointer = (e: MouseEvent | TouchEvent) => {
      const el = rootRef.current;
      if (!el) return;
      if (!el.contains(e.target as Node)) close();
    };
    document.addEventListener("keydown", onKey);
    document.addEventListener("mousedown", onPointer);
    document.addEventListener("touchstart", onPointer, { passive: true });
    return () => {
      document.removeEventListener("keydown", onKey);
      document.removeEventListener("mousedown", onPointer);
      document.removeEventListener("touchstart", onPointer);
    };
  }, [open, close]);

  return (
    <div ref={rootRef} className="fixed bottom-5 right-5 z-[90] flex flex-col items-end gap-2.5 md:bottom-8 md:right-8">
      <AnimatePresence>
        {open && (
          <motion.ul
            className="m-0 flex list-none flex-col items-end gap-2.5 p-0"
            role="menu"
            aria-label="Acciones de contacto"
            initial={{ opacity: 0, y: 14, scale: 0.96 }}
            animate={{
              opacity: 1,
              y: 0,
              scale: 1,
              transition: {
                duration: 0.18,
                ease: "easeOut",
                when: "beforeChildren",
                staggerChildren: 0.06,
              },
            }}
            exit={{
              opacity: 0,
              y: 10,
              scale: 0.98,
              transition: {
                duration: 0.14,
                ease: "easeIn",
                when: "afterChildren",
                staggerChildren: 0.04,
                staggerDirection: -1,
              },
            }}
          >
            {actions.map((a) => (
              <motion.li
                key={a.id}
                role="none"
                initial={{ opacity: 0, x: 18, y: 4 }}
                animate={{ opacity: 1, x: 0, y: 0, transition: { duration: 0.18, ease: "easeOut" } }}
                exit={{ opacity: 0, x: 12, y: 3, transition: { duration: 0.12, ease: "easeIn" } }}
              >
                <a
                  role="menuitem"
                  href={a.href}
                  {...(a.external ? { target: "_blank", rel: "noopener noreferrer" } : {})}
                  onClick={(e) => {
                    if (a.onSelect) {
                      e.preventDefault();
                      a.onSelect();
                    }
                    close();
                  }}
                  className="flex flex-row-reverse items-center gap-2.5 rounded-full py-0.5 pl-0.5"
                >
                  <span
                    className={`flex h-12 w-12 shrink-0 items-center justify-center rounded-full shadow-md transition-transform hover:scale-105 active:scale-95 ${a.bgClass}`}
                  >
                    <a.icon className={`h-5 w-5 ${a.iconClass}`} aria-hidden />
                  </span>
                  <span className="max-w-[10.5rem] rounded-lg border border-border bg-card/95 px-2.5 py-1.5 text-right text-xs font-semibold text-foreground shadow-md backdrop-blur-sm sm:max-w-none">
                    {a.label}
                  </span>
                </a>
              </motion.li>
            ))}
          </motion.ul>
        )}
      </AnimatePresence>

      <button
        type="button"
        onClick={() => setOpen((o) => !o)}
        className="flex h-14 w-14 items-center justify-center rounded-full bg-primary text-primary-foreground shadow-lg shadow-primary/30 transition-transform hover:scale-105 focus-visible:outline focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-[var(--luxury-gold)] dark:shadow-black/50 cta-glow"
        aria-expanded={open}
        aria-haspopup="menu"
        aria-label={open ? "Cerrar menú de contacto" : "Abrir menú de contacto"}
      >
        {open ? <X className="h-7 w-7" aria-hidden /> : <Plus className="h-7 w-7" aria-hidden />}
      </button>
    </div>
  );
}
