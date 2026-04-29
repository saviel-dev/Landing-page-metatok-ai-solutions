import { createFileRoute } from "@tanstack/react-router";

import { Header } from "@/components/landing/Header";
import { Hero } from "@/components/landing/Hero";
import { Brands } from "@/components/landing/Brands";
import { Beneficios } from "@/components/landing/Beneficios";
import { Servicios } from "@/components/landing/Servicios";
import { Proceso } from "@/components/landing/Proceso";
import { Canales } from "@/components/landing/Canales";
import { Faq } from "@/components/landing/Faq";
import { Auditoria } from "@/components/landing/Auditoria";
import { Planes } from "@/components/landing/Planes";
import { Contacto } from "@/components/landing/Contacto";
import { Footer } from "@/components/landing/Footer";
import { Toaster } from "@/components/ui/sonner";
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
          "Metatok — Automatización con IA para captar, cualificar y convertir leads 24/7",
      },
      {
        name: "description",
        content:
          "Agentes de IA, automatización de procesos, integración con CRM y agendamiento automático. Solicita tu auditoría gratuita y escala tu conversión sin tareas repetitivas.",
      },
      {
        property: "og:title",
        content: "Metatok — Automatización con IA para tu negocio",
      },
      {
        property: "og:description",
        content:
          "Agentes IA, CRM y agendamiento automático. Auditoría gratuita sin compromiso.",
      },
    ],
    scripts: [
      { type: "application/ld+json", children: JSON.stringify(faqJsonLd) },
      { type: "application/ld+json", children: JSON.stringify(serviceJsonLd) },
    ],
  }),
  component: Index,
});

function Index() {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <Header />
      <main>
        <Hero />
        <Brands />
        <Beneficios />
        <Servicios />
        <Planes />
        <Proceso />
        <Canales />
        <Faq />
        <Auditoria />
        <Contacto />
      </main>
      <Footer />
      <Toaster />
    </div>
  );
}
