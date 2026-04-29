import logo from "@/assets/logo.png";

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
  "Educación",
  "E-commerce",
  "Consultoría",
  "Finanzas",
];

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-mt py-14 grid sm:grid-cols-2 lg:grid-cols-4 gap-10">

        {/* Columna 1 — Logo + descripción + redes */}
        <div className="sm:col-span-2 lg:col-span-1">
          <img src={logo} alt="Metatok" className="h-8 w-auto" width={160} height={40} />
          <p className="mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed">
            Arquitectos de procesos con IA. Diseñamos ecosistemas de automatización
            para captar, cualificar y convertir leads 24/7.
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
                <a href="#servicios" className="hover:text-primary transition-colors duration-200">
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
              <a href="mailto:contacto@metatok.ai" className="hover:text-primary transition-colors duration-200">
                contacto@metatok.ai
              </a>
            </li>
            <li>Cobertura internacional</li>
            <li>Cumplimiento RGPD</li>
          </ul>
        </div>
      </div>

      {/* Bottom bar */}
      <div className="border-t border-border">
        <div className="container-mt py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground">
          <span>© {year} Metatok. Todos los derechos reservados.</span>
          <div className="flex items-center gap-4">
            <a href="/terminos-y-condiciones" className="hover:text-primary transition-colors duration-200">
              Términos y Condiciones
            </a>
            <span className="opacity-30">·</span>
            <a href="/politica-de-privacidad" className="hover:text-primary transition-colors duration-200">
              Política de Privacidad
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
}
