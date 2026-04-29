import { useEffect, useState } from "react";
import { Menu, X, Sun, Moon } from "lucide-react";
import logo from "@/assets/logo.png";
import logoMiniExtended from "@/assets/logo mini extended.png";
import { Button } from "@/components/ui/button";
import { useTheme } from "@/hooks/useTheme";

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
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  // Bloquea el scroll del body cuando la sidebar está abierta
  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => { document.body.style.overflow = ""; };
  }, [open]);

  return (
    <>
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
              className="hidden md:block h-8 w-auto"
              width={160}
              height={40}
              loading="eager"
            />
            <img
              src={logoMiniExtended}
              alt="Logo Metatok"
              className="block md:hidden h-7 w-auto"
              width={120}
              height={28}
              loading="eager"
            />
          </a>

          {/* Nav desktop */}
          <nav className="hidden md:flex items-center gap-8" aria-label="Navegación principal">
            {nav.map((item) => (
              <a
                key={item.href}
                href={item.href}
                className="relative text-sm text-muted-foreground hover:text-foreground transition-colors py-1 after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100"
              >
                {item.label}
              </a>
            ))}
          </nav>

          <div className="hidden md:flex items-center gap-3">
            {/* Toggle de tema */}
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-muted-foreground transition-colors hover:bg-card hover:text-foreground"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold"
            >
              <a href="#auditoria">Auditoría Gratuita</a>
            </Button>
          </div>

          {/* Botón hamburguesa + toggle móvil */}
          <div className="md:hidden flex items-center gap-2">
            <button
              onClick={toggle}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-foreground transition-colors hover:bg-card"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-foreground transition-colors hover:bg-card"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              <Menu className="h-5 w-5" />
            </button>
          </div>
        </div>
      </header>

      {/* ── Sidebar móvil ── */}

      {/* Backdrop oscuro difuminado */}
      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-all duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      {/* Panel lateral deslizante desde la derecha */}
      <aside
        aria-label="Menú de navegación"
        className={[
          "fixed top-0 right-0 z-[70] h-full w-72 bg-card border-l border-border",
          "flex flex-col shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.6)]",
          "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        {/* Cabecera del panel */}
        <div className="flex items-center justify-between px-5 h-16 border-b border-border shrink-0">
          <img src={logoMiniExtended} alt="Metatok" className="h-7 w-auto" width={120} height={28} />
          <button
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        {/* Links de navegación */}
        <nav className="flex flex-col px-3 py-4 flex-1 overflow-y-auto" aria-label="Navegación móvil">
          {nav.map((item, i) => (
            <a
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              style={{ transitionDelay: open ? `${60 + i * 40}ms` : "0ms" }}
              className="relative flex items-center px-3 py-3.5 rounded-lg text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/60 transition-all duration-200 border-b border-border/50 last:border-b-0"
            >
              {item.label}
            </a>
          ))}
        </nav>

        {/* CTA inferior */}
        <div className="px-4 py-6 shrink-0 border-t border-border">
          <Button
            asChild
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold cta-glow"
            onClick={() => setOpen(false)}
          >
            <a href="#auditoria">Auditoría Gratuita</a>
          </Button>
        </div>
      </aside>
    </>
  );
}
