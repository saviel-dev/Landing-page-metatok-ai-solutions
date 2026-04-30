import { createFileRoute } from "@tanstack/react-router";

import { Header }        from "@/components/landing/Header";
import { Hero }          from "@/components/landing/Hero";
import { Brands }        from "@/components/landing/Brands";
import { Beneficios }    from "@/components/landing/Beneficios";
import { Sectores }      from "@/components/landing/Sectores";
import { Servicios }     from "@/components/landing/Servicios";
import { DiagnosticoCTA } from "@/components/landing/DiagnosticoCTA";
import { Proceso }       from "@/components/landing/Proceso";
import { Canales }       from "@/components/landing/Canales";
import { Planes }        from "@/components/landing/Planes";
import { Testimonios }   from "@/components/landing/Testimonios";
import { Auditoria }     from "@/components/landing/Auditoria";
import { Faq }           from "@/components/landing/Faq";
import { Contacto }      from "@/components/landing/Contacto";
import { Footer }        from "@/components/landing/Footer";
import { Toaster }       from "@/components/ui/sonner";
import { faqs, servicios } from "@/components/landing/content";

// JSON-LD: FAQPage construido a partir de las preguntas reales
const faqJsonLd = {
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.pregunta,
    acceptedAnswer: { "@type": "Answer", text: f.respuesta },
  })),
};

// JSON-LD: catálogo de servicios
const serviceJsonLd = {
  "@context": "https://schema.org",
  "@type": "Service",
  serviceType: "Automatización con IA y cualificación de leads",
  provider: { "@type": "Organization", name: "Metatok" },
  areaServed: "Worldwide",
  hasOfferCatalog: {
    "@type": "OfferCatalog",
    name: "Servicios Metatok",
    itemListElement: servicios.map((s) => ({
      "@type": "Offer",
      itemOffered: { "@type": "Service", name: s.titulo, description: s.descripcion },
    })),
  },
};

export const Route = createFileRoute("/")({
  head: () => ({
    meta: [
      {
        title:
          "Metatok — Convierte más leads sin ampliar tu equipo | IA y Automatización",
      },
      {
        name: "description",
        content:
          "Agentes de IA que captan, cualifican y agendan leads 24/7. Más citas, menos trabajo manual, sin ampliar equipo. Solicita tu auditoría gratuita.",
      },
      {
        property: "og:title",
        content: "Metatok — Convierte más leads sin ampliar tu equipo",
      },
      {
        property: "og:description",
        content:
          "IA que capta y cualifica leads 24/7. Auditoría gratuita sin compromiso.",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: Index,
});

/**
 * Flujo narrativo de la landing (regla de los 5 segundos → conversión):
 *
 *  1. Hero          — ¿Qué haces? ¿Para quién? ¿Qué obtengo? → CTA principal
 *  2. Brands        — Prueba social (logos) — refuerzo de confianza
 *  3. Beneficios    — Resultados rápidos con métricas concretas
 *  4. Sectores      — Solución por sector: estado actual → mejoras → KPIs → avanzado
 *  5. Servicios     — Cómo lo hacemos (funciones + beneficio por servicio)
 *  6. DiagnosticoCTA— Antes / después + CTA intermedio de conversión
 *  7. Proceso       — 4 pasos llave en mano (elimina fricción de "¿cómo empiezo?")
 *  8. Canales       — Dónde se despliega (web, WhatsApp, Instagram, Telegram, API)
 *  9. Planes        — Inversión y qué incluye cada plan
 * 10. Auditoria     — CTA final de alta conversión
 * 11. FAQ           — Eliminar objeciones residuales
 * 12. Contacto      — Formulario de solicitud
 */
function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        {/* 1 — Propuesta de valor inmediata */}
        <Hero />

        {/* 2 — Prueba social: logos de empresas que confían en la automatización */}
        <Brands />

        {/* 3 — Resultados concretos desde el primer mes */}
        <Beneficios />

        {/* 4 — Solución por sector estratégico */}
        <Sectores />

        {/* 5 — Qué capacidades instalamos y qué beneficio concreto aporta cada una */}
        <Servicios />

        {/* 6 — Comparativa antes/después + CTA de conversión intermedio */}
        <DiagnosticoCTA />

        {/* 7 — Proceso de implementación llave en mano */}
        <Proceso />

        {/* 8 — Canales de despliegue (omnicanal) */}
        <Canales />

        {/* 9 — Planes y precios */}
        <Planes />

        {/* 9.5 — Testimonios (Prueba social) */}
        <Testimonios />

        {/* 10 — CTA de auditoría gratuita */}
        <Auditoria />

        {/* 11 — Preguntas frecuentes / elimina objeciones */}
        <Faq />

        {/* 12 — Formulario de contacto */}
        <Contacto />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
