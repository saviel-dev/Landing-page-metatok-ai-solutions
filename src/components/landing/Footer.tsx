import logo from "@/assets/metatok-logo.png";

export function Footer() {
  const year = new Date().getFullYear();
  return (
    <footer className="border-t border-border bg-background">
      <div className="container-mt py-12 grid md:grid-cols-4 gap-10">
        <div className="md:col-span-2">
          <img src={logo} alt="Metatok" className="h-8 w-auto" width={160} height={40} />
          <p className="mt-4 text-sm text-muted-foreground max-w-sm">
            Arquitectos de procesos con IA. Diseñamos ecosistemas de automatización
            para captar, cualificar y convertir leads 24/7.
          </p>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Navegación</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li><a href="#inicio" className="hover:text-primary transition-colors">Inicio</a></li>
            <li><a href="#servicios" className="hover:text-primary transition-colors">Servicios</a></li>
            <li><a href="#proceso" className="hover:text-primary transition-colors">Proceso</a></li>
            <li><a href="#faq" className="hover:text-primary transition-colors">FAQ</a></li>
            <li><a href="#contacto" className="hover:text-primary transition-colors">Contacto</a></li>
          </ul>
        </div>

        <div>
          <h4 className="text-sm font-semibold text-foreground">Contacto</h4>
          <ul className="mt-4 space-y-2 text-sm text-muted-foreground">
            <li>
              <a href="mailto:contacto@metatok.ai" className="hover:text-primary transition-colors">
                contacto@metatok.ai
              </a>
            </li>
            <li>Cobertura internacional</li>
            <li>Cumplimiento RGPD</li>
          </ul>
        </div>
      </div>
      <div className="border-t border-border">
        <div className="container-mt py-5 flex flex-col md:flex-row gap-2 items-center justify-between text-xs text-muted-foreground">
          <span>© {year} Metatok. Todos los derechos reservados.</span>
          <span>Hecho con precisión técnica · Diseño flat premium</span>
        </div>
      </div>
    </footer>
  );
}
