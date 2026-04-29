import { useEffect, useState } from "react";
import { Menu, X } from "lucide-react";
import logo from "@/assets/metatok-logo.png";
import { Button } from "@/components/ui/button";

// Navegación principal — anclas a las secciones de la landing
const nav = [
  { href: "#inicio", label: "Inicio" },
  { href: "#servicios", label: "Servicios" },
  { href: "#proceso", label: "Proceso" },
  { href: "#faq", label: "FAQ" },
  { href: "#contacto", label: "Contacto" },
];

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <header
      className={[
        "fixed top-0 inset-x-0 z-50 transition-all duration-300",
        scrolled
          ? "backdrop-blur-md bg-background/80 border-b border-border"
          : "bg-transparent",
      ].join(" ")}
    >
      <div className="container-mt flex items-center justify-between h-16 md:h-20">
        <a href="#inicio" className="flex items-center gap-2" aria-label="Metatok inicio">
          <img
            src={logo}
            alt="Logo Metatok"
            className="h-7 md:h-8 w-auto"
            width={160}
            height={40}
            loading="eager"
          />
        </a>

        <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
          {nav.map((item) => (
            <a
              key={item.href}
              href={item.href}
              className="text-sm text-muted-foreground hover:text-foreground transition-colors"
            >
              {item.label}
            </a>
          ))}
        </nav>

        <div className="hidden md:block">
          <Button
            asChild
            className="bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold"
          >
            <a href="#auditoria">Auditoría Gratuita</a>
          </Button>
        </div>

        <button
          className="md:hidden inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-foreground"
          onClick={() => setOpen((o) => !o)}
          aria-label="Abrir menú"
          aria-expanded={open}
        >
          {open ? <X className="h-5 w-5" /> : <Menu className="h-5 w-5" />}
        </button>
      </div>

      {/* Menú móvil */}
      {open && (
        <div className="md:hidden border-t border-border bg-background/95 backdrop-blur-md">
          <nav className="container-mt py-4 flex flex-col gap-1" aria-label="Navegación móvil">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                onClick={() => setOpen(false)}
                className="px-2 py-3 rounded-md text-sm text-muted-foreground hover:text-foreground hover:bg-card transition-colors"
              >
                {item.label}
              </a>
            ))}
            <Button
              asChild
              className="mt-2 bg-primary text-primary-foreground hover:bg-primary/90 font-semibold"
              onClick={() => setOpen(false)}
            >
              <a href="#auditoria">Auditoría Gratuita</a>
            </Button>
          </nav>
        </div>
      )}
    </header>
  );
}
