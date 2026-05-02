import { Outlet, Link, createRootRoute, HeadContent, Scripts } from "@tanstack/react-router";

import appCss from "../styles.css?url";

// Datos estructurados Organization (JSON-LD) para SEO
const organizationJsonLd = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "Metatok",
  url: "https://metatok.ai",
  logo: "https://metatok.ai/logo.png",
  description:
    "MetaTok diseña agentes de Inteligencia Artificial Conversacional y automatización para captar, cualificar y cerrar ventas 24/7 en todos tus canales.",
  sameAs: [
    "https://facebook.com/metatok",
    "https://instagram.com/metatok",
    "https://tiktok.com/@metatok",
  ],
  contactPoint: {
    "@type": "ContactPoint",
    email: "contacto@metatok.ai",
    contactType: "customer support",
    availableLanguage: "Spanish",
  },
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
        title: "MetaTok AI | Automatiza tus Ventas y Atención al Cliente 24/7",
      },
      {
        name: "description",
        content:
          "Descubre MetaTok AI: Agentes de IA conversacional que cualifican leads, cierran ventas y agendan citas en WhatsApp, Web e Instagram automáticamente. API abierta e integración CRM.",
      },
      {
        name: "keywords",
        content:
          "inteligencia artificial, agentes conversacionales, automatización de ventas, chatbot con IA generativa, captación de leads, MetaTok AI, integraciones CRM, atención al cliente automatizada, agendamiento de citas",
      },
      { name: "author", content: "Metatok" },
      { name: "theme-color", content: "#ffffff" },
      { name: "robots", content: "index, follow" },
      { name: "language", content: "es" },

      // Open Graph
      { property: "og:type", content: "website" },
      { property: "og:site_name", content: "Metatok" },
      { property: "og:locale", content: "es_ES" },
      {
        property: "og:title",
        content: "MetaTok AI | Automatiza tus Ventas y Atención al Cliente 24/7",
      },
      {
        property: "og:description",
        content:
          "Agentes de IA que cualifican leads, cierran ventas y agendan citas en WhatsApp, Web e Instagram 24/7. Descubre cómo MetaTok puede escalar tu negocio.",
      },
      { property: "og:image", content: "https://metatok.ai/logo.png" },
      { property: "og:image:width", content: "1200" },
      { property: "og:image:height", content: "630" },
      { property: "og:image:alt", content: "Metatok — Automatización con IA" },
      { property: "og:url", content: "https://metatok.ai/" },

      // Twitter / X
      { name: "twitter:card", content: "summary_large_image" },
      { name: "twitter:site", content: "@metatok" },
      {
        name: "twitter:title",
        content: "MetaTok AI | Automatiza tus Ventas y Atención al Cliente 24/7",
      },
      {
        name: "twitter:description",
        content:
          "Agentes de IA que cualifican leads, cierran ventas y agendan citas en WhatsApp, Web e Instagram 24/7. Descubre cómo MetaTok puede escalar tu negocio.",
      },
      { name: "twitter:image", content: "https://metatok.ai/logo.png" },
      { name: "twitter:image:alt", content: "Metatok — Automatización con IA" },
    ],
    links: [
      { rel: "stylesheet", href: appCss },
      { rel: "icon", href: "/favicon.ico?v=2" },
      { rel: "apple-touch-icon", href: "/favicon.ico?v=2" },
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
    <html lang="es" className="light" suppressHydrationWarning>
      <head suppressHydrationWarning>
        <HeadContent />
      </head>
      <body suppressHydrationWarning>
        {children}
        <Scripts />
      </body>
    </html>
  );
}

function RootComponent() {
  return <Outlet />;
}
