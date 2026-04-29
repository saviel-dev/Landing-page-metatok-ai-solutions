import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

// Datos estructurados Organization (JSON-LD) para SEO
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Metatok",
  url: "https://metatok.ai",
  logo: "https://metatok.ai/metatok-logo.png",
  description:
    "Metatok diseña ecosistemas de Inteligencia Artificial Conversacional y automatización para captar, cualificar y convertir leads 24/7.",
  sameAs: [],
};

function NotFoundComponent() {
  return (
    <div className="flex min-h-screen items-center justify-center bg-background px-4">
      <div className="max-w-md text-center">
        <h1 className="text-7xl font-bold text-foreground">404</h1>
        <h2 className="mt-4 text-xl font-semibold text-foreground">Página no encontrada</h2>
        <p className="mt-2 text-sm text-muted-foreground">
          La página que buscas no existe o ha sido movida.
        </p>
        <div className="mt-6">
          <Link
            to="/"
            className="inline-flex items-center justify-center rounded-md bg-primary px-4 py-2 text-sm font-medium text-primary-foreground transition-colors hover:bg-primary/90"
          >
            Volver al inicio
          </Link>
        </div>
      </div>
    </div>
  );
}

export const Route = createRootRoute({
  head: () => ({
    meta: [
      { charSet: "utf-8" },
      { name: "viewport", content: "width=device-width, initial-scale=1" },
      {
        title:
          "Metatok — Automatización con IA para captar, cualificar y convertir leads 24/7",
      },
      {
        name: "description",
        content:
          "Implementamos agentes de IA, automatización de procesos, integración con CRM y agendamiento automático para escalar tu negocio. Solicita tu auditoría gratuita.",
      },
      {
        name: "keywords",
        content:
          "automatización IA, agentes de IA, cualificación de leads, CRM, agendamiento automático, embudo de ventas, asistentes IA, auditoría gratuita, Metatok",
      },
      { name: "author", content: "Metatok" },
      { name: "theme-color", content: "#0F172A" },
      { name: "robots", content: "index, follow" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Metatok" },
      { property: "og:locale", content: "es_ES" },
      {
        property: "og:title",
        content:
          "Metatok — Automatización con IA para captar, cualificar y convertir leads 24/7",
      },
      {
        property: "og:description",
        content:
          "Agentes de IA, automatización, CRM y agendamiento automático. Convierte más con menos esfuerzo. Solicita tu auditoría gratuita.",
      },
      { property: "og:image", content: "/metatok-logo.png" },
      { property: "og:url", content: "https://metatok.ai/" },

      // Twitter
      { name: "twitter:card", content: "summary_large_image" },
      {
        name: "twitter:title",
        content:
          "Metatok — Automatización con IA para captar, cualificar y convertir leads 24/7",
      },
      {
        name: "twitter:description",
        content:
          "Agentes de IA, automatización, CRM y agendamiento automático. Solicita tu auditoría gratuita.",
      },
      { name: "twitter:image", content: "/metatok-logo.png" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", type: "image/png", href: "/metatok-logo.png" },
      { rel: "canonical", href: "https://metatok.ai/" },
      { rel: "preconnect", href: "https://fonts.googleapis.com" },
      { rel: "preconnect", href: "https://fonts.gstatic.com", crossOrigin: "anonymous" },
      {
        rel: "stylesheet",
        href: "https://fonts.googleapis.com/css2?family=Inter:wght@400;500;600;700;800&display=swap",
      },
    ],
    scripts: [
      {
        type: "application/ld+json",
        children: JSON.stringify(organizationJsonLd),
      },
    ],
  }),
  shellComponent: RootShell,
  component: RootComponent,
  notFoundComponent: NotFoundComponent,
});

function RootShell({ children }: { children: React.ReactNode }) {
  return (
    <html lang="es" className="dark" suppressHydrationWarning>
      <head>
        <HeadContent />
      </head>
      <body>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
