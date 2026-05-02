import { useEffect, useState } from "react";
import { ChevronDown, Menu, Moon, Sun, X } from "lucide-react";
import { AnimatePresence, motion } from "framer-motion";
import logo from "@/assets/logo.png";
import { Button } from "@/components/ui/button";
import {
  DropdownMenu,
  DropdownMenuContent,
  DropdownMenuItem,
  DropdownMenuTrigger,
} from "@/components/ui/dropdown-menu";
import { useTheme } from "@/hooks/useTheme";

const navTop = [{ href: "/#inicio", label: "Inicio" }] as const;

const navSolucion = [
  { href: "/#problema", label: "El problema" },
  { href: "/#motor-metatok", label: "Motor MetaTok" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#comparativa", label: "Vs. chatbots" },
  { href: "/#producto-white-label", label: "App & white label" },
] as const;

const navExplorar = [
  { href: "/#sectores", label: "Sectores" },
  { href: "/#planes", label: "Precios" },
  { href: "/#faq", label: "FAQ" },
] as const;

const navContacto = { href: "/#contacto", label: "Contacto" } as const;



function NavDropdown({
  label,
  items,
  scrolled,
}: {
  label: string;
  items: readonly { href: string; label: string }[];
  scrolled: boolean;
}) {
  const dropdownTriggerClass = `inline-flex items-center gap-1 rounded-md border-0 bg-transparent px-2 py-1 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background text-muted-foreground hover:bg-accent/40 hover:text-foreground data-[state=open]:text-foreground`;

  return (
    <DropdownMenu modal={false}>
      <DropdownMenuTrigger className={dropdownTriggerClass}>
        {label}
        <ChevronDown className="h-3.5 w-3.5 shrink-0 opacity-70" aria-hidden />
      </DropdownMenuTrigger>
      <DropdownMenuContent align="start" className="min-w-[12rem]">
        {items.map((item) => (
          <DropdownMenuItem key={item.href} asChild className="cursor-pointer">
            <a href={item.href}>{item.label}</a>
          </DropdownMenuItem>
        ))}
      </DropdownMenuContent>
    </DropdownMenu>
  );
}

export function Header() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const [openGroup, setOpenGroup] = useState<"solucion" | "explorar" | null>(null);
  const { theme, toggle } = useTheme();

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    window.dispatchEvent(new CustomEvent("metatok:mobile-menu", { detail: open }));
    if (!open) setOpenGroup(null);
    return () => {
      document.body.style.overflow = "";
      window.dispatchEvent(new CustomEvent("metatok:mobile-menu", { detail: false }));
    };
  }, [open]);

  const linkClass = `relative text-sm transition-colors py-1 text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100`;

  const mobileGroupSummary = "flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-3 py-3 text-left text-sm font-semibold text-foreground";
  const mobileSubLink = "flex items-center px-3 py-2.5 pl-5 text-sm text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-lg transition-colors";

  return (
    <>
      <header
        className={`fixed top-0 inset-x-0 z-50 transition-all duration-300 ${
          scrolled
            ? "border-b border-border backdrop-blur-md bg-background/90 shadow-sm shadow-foreground/5"
            : "border-b border-transparent bg-transparent py-1"
        }`}
      >
        <div className="container-mt flex items-center justify-between h-14 md:h-16">
          <a href="/#inicio" className="flex items-center group" aria-label="Metatok inicio">
            <img
              src={logo}
              alt="MetaTok"
              className="h-5 md:h-8 w-auto"
              loading="eager"
            />
          </a>

          <nav className="hidden md:flex items-center gap-5 lg:gap-6" aria-label="Navegación principal">
            {navTop.map((item) => (
              <a key={item.href} href={item.href} className={linkClass}>
                {item.label}
              </a>
            ))}
            <NavDropdown label="Solución" items={navSolucion} scrolled={scrolled} />
            <NavDropdown label="Explorar" items={navExplorar} scrolled={scrolled} />
            <a href={navContacto.href} className={linkClass}>
              {navContacto.label}
            </a>
          </nav>

          <div className="hidden md:flex items-center gap-3">
            <a
              href="https://app.metatok.ai/"
              className={linkClass}
            >
              Iniciar sesión
            </a>
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-muted-foreground hover:bg-card hover:text-foreground transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <Button
              asChild
              className="bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold"
            >
              <a href="/#contacto">Desplegar agente</a>
            </Button>
          </div>

          <div className="md:hidden flex items-center gap-2">
            <button
              type="button"
              onClick={toggle}
              aria-label={theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro"}
              className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-foreground hover:bg-card transition-colors"
            >
              {theme === "dark" ? <Sun className="h-4 w-4" /> : <Moon className="h-4 w-4" />}
            </button>
            <button
              type="button"
              className="inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-foreground hover:bg-card transition-colors"
              onClick={() => setOpen((o) => !o)}
              aria-label={open ? "Cerrar menú" : "Abrir menú"}
              aria-expanded={open}
            >
              <AnimatePresence mode="wait" initial={false}>
                {open ? (
                  <motion.span
                    key="close"
                    initial={{ opacity: 0, rotate: -70, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: 70, scale: 0.8 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="inline-flex"
                  >
                    <X className="h-5 w-5" />
                  </motion.span>
                ) : (
                  <motion.span
                    key="menu"
                    initial={{ opacity: 0, rotate: 70, scale: 0.8 }}
                    animate={{ opacity: 1, rotate: 0, scale: 1 }}
                    exit={{ opacity: 0, rotate: -70, scale: 0.8 }}
                    transition={{ duration: 0.16, ease: "easeOut" }}
                    className="inline-flex"
                  >
                    <Menu className="h-5 w-5" />
                  </motion.span>
                )}
              </AnimatePresence>
            </button>
          </div>
        </div>
      </header>

      <div
        aria-hidden
        onClick={() => setOpen(false)}
        className={[
          "fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-all duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none",
        ].join(" ")}
      />

      <aside
        aria-label="Menú de navegación"
        className={[
          "fixed top-0 right-0 z-[70] h-full w-72 bg-card border-l border-border",
          "flex flex-col shadow-xl shadow-foreground/10 dark:shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.6)]",
          "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          open ? "translate-x-0" : "translate-x-full",
        ].join(" ")}
      >
        <div className="flex items-center justify-between px-5 h-14 border-b border-border shrink-0">
          <a href="/#inicio" onClick={() => setOpen(false)} className="flex items-center" aria-label="Metatok inicio">
            <img src={logo} alt="MetaTok" className="h-8 w-auto" />
          </a>
          <button
            type="button"
            onClick={() => setOpen(false)}
            aria-label="Cerrar menú"
            className="inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-background transition-colors"
          >
            <X className="h-4 w-4" />
          </button>
        </div>

        <nav className="flex flex-col px-3 py-2 flex-1 overflow-y-auto" aria-label="Navegación móvil">
          <a
            href="/#inicio"
            onClick={() => setOpen(false)}
            className="px-3 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-lg transition-colors border-b border-border/50"
          >
            Inicio
          </a>

          <div className="border-b border-border/50">
            <button
              type="button"
              onClick={() => setOpenGroup((g) => (g === "solucion" ? null : "solucion"))}
              aria-expanded={openGroup === "solucion"}
              className={mobileGroupSummary}
            >
              Solución
              <ChevronDown
                className={[
                  "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                  openGroup === "solucion" ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>
            <AnimatePresence initial={false}>
              {openGroup === "solucion" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-2 flex flex-col">
                    {navSolucion.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={mobileSubLink}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <div className="border-b border-border/50">
            <button
              type="button"
              onClick={() => setOpenGroup((g) => (g === "explorar" ? null : "explorar"))}
              aria-expanded={openGroup === "explorar"}
              className={mobileGroupSummary}
            >
              Explorar
              <ChevronDown
                className={[
                  "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                  openGroup === "explorar" ? "rotate-180" : "",
                ].join(" ")}
              />
            </button>
            <AnimatePresence initial={false}>
              {openGroup === "explorar" && (
                <motion.div
                  initial={{ height: 0, opacity: 0 }}
                  animate={{ height: "auto", opacity: 1 }}
                  exit={{ height: 0, opacity: 0 }}
                  transition={{ duration: 0.22, ease: "easeOut" }}
                  className="overflow-hidden"
                >
                  <div className="pb-2 flex flex-col">
                    {navExplorar.map((item) => (
                      <a
                        key={item.href}
                        href={item.href}
                        onClick={() => setOpen(false)}
                        className={mobileSubLink}
                      >
                        {item.label}
                      </a>
                    ))}
                  </div>
                </motion.div>
              )}
            </AnimatePresence>
          </div>

          <a
            href={navContacto.href}
            onClick={() => setOpen(false)}
            className="px-3 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-lg transition-colors"
          >
            {navContacto.label}
          </a>
        </nav>

        <div className="px-4 py-6 shrink-0 border-t border-border flex flex-col gap-3">
          <Button
            asChild
            variant="outline"
            className="w-full font-semibold"
          >
            <a href="https://app.metatok.ai/">Iniciar sesión</a>
          </Button>
          <Button
            asChild
            className="w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold cta-glow"
            onClick={() => setOpen(false)}
          >
            <a href="/#contacto">Desplegar agente</a>
          </Button>
        </div>
      </aside>
    </>
  );
}
