import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/terminos")({
  component: Terminos,
});

function Terminos() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container-mt py-24 md:py-32">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Términos y Condiciones
          </h1>
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground space-y-6">
            <p>
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Introducción</h2>
              <p>
                Bienvenido a Metatok. Al acceder y utilizar nuestro sitio web y servicios, aceptas estar sujeto a los siguientes términos y condiciones. Te recomendamos leer detenidamente este documento antes de utilizar nuestros servicios de Inteligencia Artificial Conversacional y automatización.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Descripción del Servicio</h2>
              <p>
                Metatok proporciona soluciones de automatización y agentes de IA diseñados para captar, cualificar y agendar leads en múltiples canales (Web, WhatsApp, Instagram, etc.). Nuestros servicios incluyen auditoría, diseño estratégico, implementación y soporte continuo de las arquitecturas propuestas.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Uso del Servicio</h2>
              <p>
                Al utilizar los servicios de Metatok, te comprometes a hacer un uso legal y adecuado de las herramientas proporcionadas, sin infringir derechos de terceros ni normativas locales o internacionales de protección de datos aplicables a tu jurisdicción.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Propiedad Intelectual</h2>
              <p>
                Todos los contenidos, diseños, logotipos, código fuente y arquitecturas de automatización proporcionados por Metatok son propiedad exclusiva de la empresa, a menos que se indique lo contrario. El cliente obtiene una licencia de uso para la operación de su negocio según lo estipulado en su contrato particular.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Limitación de Responsabilidad</h2>
              <p>
                Metatok no se hace responsable por daños indirectos, pérdida de beneficios o interrupciones en el negocio derivados del uso o la incapacidad de usar nuestros servicios. Las estimaciones de mejora de conversión basadas en métricas pasadas no constituyen una garantía legal de resultados futuros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Modificaciones</h2>
              <p>
                Nos reservamos el derecho de modificar estos términos en cualquier momento. Los cambios entrarán en vigor inmediatamente después de su publicación en el sitio web. El uso continuado del servicio implicará la aceptación de dichos cambios.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
