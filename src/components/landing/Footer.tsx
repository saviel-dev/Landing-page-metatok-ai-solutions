import logo from "@/assets/logo.png";
import { Link } from "@tanstack/react-router";

/* ——— Iconos SVG inline para redes que no están en lucide ——— */
function IconFacebook() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" />
    </svg>
  );
}
function IconInstagram() {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" className="h-4 w-4" aria-hidden>
      <rect x="2" y="2" width="20" height="20" rx="5" ry="5" />
      <circle cx="12" cy="12" r="4" />
      <circle cx="17.5" cy="6.5" r="0.5" fill="currentColor" stroke="none" />
    </svg>
  );
}
function IconTikTok() {
  return (
    <svg viewBox="0 0 24 24" fill="currentColor" className="h-4 w-4" aria-hidden>
      <path d="M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" />
    </svg>
  );
}

const socialLinks = [
  { 
    label: "Facebook", 
    href: "https://facebook.com/metatok", 
    icon: IconFacebook,
    hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:shadow-[0_0_15px_-5px_#1877F2]"
  },
  { 
    label: "Instagram", 
    href: "https://instagram.com/metatok", 
    icon: IconInstagram,
    hoverClass: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:text-white hover:shadow-[0_0_15px_-5px_#ee2a7b]"
  },
  { 
    label: "TikTok", 
    href: "https://tiktok.com/@metatok", 
    icon: IconTikTok,
    hoverClass: "hover:bg-[#000000] hover:border-white/20 hover:text-white hover:shadow-[0_0_15px_-5px_rgba(255,255,255,0.4)]"
  },
];

const servicios = [
  "Agentes de IA Conversacional",
  "Automatización de Procesos",
  "Cualificación de Leads",
  "Integración con CRM",
  "Agendamiento Automático",
  "Flow-works inteligentes",
];

const sectores = [
  "Inmobiliaria",
  "Salud & Clínicas",
  "E-commerce",
  "Consultoría",
  "Despachos Profesionales",
  "Hoteles",
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="border-b border-border bg-[var(--color-surface)]">
        <div className="container-mt py-6 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4">
          <div>
            <p className="text-xs font-semibold uppercase tracking-widest text-luxury-gold">
              Siguiente paso
            </p>
            <p className="mt-1.5 text-lg md:text-xl font-bold text-foreground max-w-xl leading-snug">
              Transforma tu tráfico en ingresos hoy mismo.
            </p>
          </div>
          <div className="flex flex-col sm:flex-row items-center gap-3 shrink-0">
            <a
              href="https://app.metatok.ai/"
              className="inline-flex items-center justify-center rounded-lg border border-input bg-background px-5 py-2.5 text-sm font-bold text-foreground hover:bg-accent hover:text-accent-foreground transition-colors w-full sm:w-auto"
            >
              Iniciar sesión
            </a>
            <a
              href="/#contacto"
              className="inline-flex items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 cta-glow transition-colors w-full sm:w-auto"
            >
              Hablar con el equipo
            </a>
          </div>
        </div>
      </div>

      <div className="container-mt py-9 md:py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">

        {/* Columna 1 — Logo + descripción + redes */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={logo} alt="Metatok" className="h-8 w-auto" width={160} height={40} />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Instalamos departamentos de ventas con IA: prospectan, cualifican y cierran 24/7 —
            omnicanal, con CRM y listos para escala enterprise.
          </p>
          <div className="mt-6 flex items-center gap-3">
            {socialLinks.map(({ label, href, icon: Icon, hoverClass }) => (
              <a
                key={label}
                href={href}
                target="_blank"
                rel="noopener noreferrer"
                aria-label={label}
                className={`inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 ${hoverClass}`}
              >
                <Icon />
              </a>
            ))}
          </div>
        </div>

        {/* Columna 2 — Servicios */}
        <div>
          <h4 className="text-sm font-semibold text-foreground">Servicios</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {servicios.map((s) => (
              <li key={s}>
                <a href="/#servicios" className="hover:text-primary transition-colors duration-200">
                  {s}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 3 — Sectores */}
        <div>
          <h4 className="text-sm font-semibold text-foreground">Sectores</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            {sectores.map((s) => (
              <li key={s} className="hover:text-primary transition-colors duration-200 cursor-default">
                {s}
              </li>
            ))}
          </ul>
        </div>

        {/* Columna 4 — Contacto */}
        <div>
          <h4 className="text-sm font-semibold text-foreground">Contacto</h4>
          <ul className="mt-4 space-y-2.5 text-sm text-muted-foreground">
            <li>
              <a href="mailto:soporte@metatok.ai" className="hover:text-primary transition-colors duration-200">
                soporte@metatok.ai
              </a>
            </li>
            <li className="text-foreground/90">
              Sede: Madrid, España
              <span className="block text-xs text-muted-foreground mt-1">
                Dirección fiscal completa bajo solicitud para licitaciones y contratos.
              </span>
            </li>
            <li>100 % privacidad de datos (RGPD)</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-mt py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <span>© {year} Metatok. Todos los derechos reservados.</span>
          <div className="flex flex-wrap items-center justify-center gap-x-4 gap-y-2">
            <Link to="/aviso-legal" className="hover:text-primary transition-colors duration-200">
              Aviso legal
            </Link>
            <span className="opacity-30 hidden sm:inline">·</span>
            <Link to="/terminos" className="hover:text-primary transition-colors duration-200">
              Términos de servicio
            </Link>
            <span className="opacity-30 hidden sm:inline">·</span>
            <Link to="/privacidad" className="hover:text-primary transition-colors duration-200">
              RGPD / Privacidad
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
