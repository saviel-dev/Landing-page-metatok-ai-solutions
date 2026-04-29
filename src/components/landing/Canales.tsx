import { canales } from "./content";
import { useFadeUp, useStaggerChildren, asRef } from "@/hooks/useAnimeJs";

export function Canales() {
  // Fade-up en el texto intro
  const introRef = useFadeUp(0);
  // Stagger horizontal en los iconos de canales
  const listRef = useStaggerChildren(":scope > li", 200, 80);

  return (
    <section className="py-14 md:py-16" aria-label="Canales de integración">
      <div className="container-mt">
        <p
          ref={asRef<HTMLParagraphElement>(introRef)}
          className="text-center text-sm text-muted-foreground"
        >
          Despliegue omnicanal · Web, mensajería e integraciones API
        </p>
        <ul
          ref={asRef<HTMLUListElement>(listRef)}
          className="mt-6 flex flex-wrap items-center justify-center gap-x-10 gap-y-5"
        >
          {canales.map((c) => (
            <li
              key={c.label}
              className="flex items-center gap-2 text-muted-foreground hover:text-foreground transition-colors"
            >
              <c.icon className="h-5 w-5 text-accent" aria-hidden />
              <span className="text-sm font-medium">{c.label}</span>
            </li>
          ))}
        </ul>
      </div>
    </section>
  );
}
