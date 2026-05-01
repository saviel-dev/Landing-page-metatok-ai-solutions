import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { SocialProofStrip } from "@/components/landing/SocialProofStrip";
import { Brands } from "@/components/landing/Brands";
import { PainPoints } from "@/components/landing/PainPoints";
import { Beneficios } from "@/components/landing/Beneficios";
import { MetaTokEngine } from "@/components/landing/MetaTokEngine";
import { EliteSolutions } from "@/components/landing/EliteSolutions";
import { Sectores } from "@/components/landing/Sectores";
import { Servicios } from "@/components/landing/Servicios";
import { ComparativaMetaTok } from "@/components/landing/ComparativaMetaTok";
import { DiagnosticoCTA } from "@/components/landing/DiagnosticoCTA";
import { MetaTokAcademy } from "@/components/landing/MetaTokAcademy";
import { Proceso } from "@/components/landing/Proceso";
import { Canales } from "@/components/landing/Canales";
import { Planes } from "@/components/landing/Planes";
import { Testimonios } from "@/components/landing/Testimonios";
import { Auditoria } from "@/components/landing/Auditoria";
import { Faq } from "@/components/landing/Faq";
import { Contacto } from "@/components/landing/Contacto";
import { Footer } from "@/components/landing/Footer";
import { FloatingActionsMenu } from "@/components/landing/FloatingActionsMenu";
import { LiveDemoWidget } from "@/components/landing/LiveDemoWidget";
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
          "MetaTok — Tu departamento de ventas en piloto automático con IA",
      },
      {
        name: "description",
        content:
          "Ecosistema de agentes autónomos: prospectan, cualifican y cierran en WhatsApp, Instagram y Web. API abierta a cualquier CRM, multilingüe y listo para escala.",
      },
      {
        property: "og:title",
        content: "MetaTok — Agentes de venta con IA, 24/7",
      },
      {
        property: "og:description",
        content:
          "No es un chatbot. Es un motor de conversión omnicanal con cierre autónomo y datos accionables.",
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
 * Flujo alineado al storyboard MetaTok: problema → motor → comparativa → confianza → contacto.
 */
function Index() {
  return (
    <div className="relative isolate min-h-screen bg-background text-foreground">
      <div
        aria-hidden
        className="pointer-events-none fixed inset-0 z-0 overflow-hidden"
      >
        <div className="absolute inset-0 bg-gradient-to-br from-muted/40 via-background to-background dark:from-primary/[0.07] dark:via-background dark:to-background" />
        <div className="absolute inset-0 bg-gradient-to-tl from-accent/[0.035] via-transparent to-primary/[0.04]" />
        <div className="absolute inset-0 mt-page-particles mt-page-particles--full" />
        <div
          className="absolute inset-0 backdrop-blur-[10px]"
          style={{
            backgroundColor: "color-mix(in oklab, var(--color-background) 48%, transparent)",
          }}
        />
      </div>

      <Header />
      <main className="relative z-10">
        <Hero />
        <SocialProofStrip />
        <Brands />
        <PainPoints />
        <Beneficios />
        <MetaTokEngine />
        <EliteSolutions />
        <Sectores />
        <Servicios />
        <ComparativaMetaTok />
        <DiagnosticoCTA />
        <MetaTokAcademy />
        <Proceso />
        <Canales />
        <Planes />
        <Testimonios />
        <Auditoria />
        <Faq />
        <Contacto />
      </main>
      <div className="relative z-10">
        <Footer />
      </div>
      <LiveDemoWidget />
      <FloatingActionsMenu />
      <Toaster />
    </div>
  );
}
