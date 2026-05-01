import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const Route = createFileRoute("/terminos")({
  component: Terminos,
});

function Terminos() {
  const lastUpdated = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <LegalPageLayout
      badge="Terminos de servicio"
      title="Terminos y Condiciones de Uso"
      subtitle="Estas condiciones regulan el acceso y uso de los servicios de Metatok. Al contratar o utilizar la plataforma, aceptas los terminos que se describen a continuacion."
      lastUpdated={lastUpdated}
      sections={[
        {
          id: "introduccion",
          title: "Introduccion",
          paragraphs: [
            "Bienvenido a Metatok. Al acceder y utilizar nuestro sitio web y servicios, aceptas estar sujeto a los presentes terminos y condiciones.",
            "Te recomendamos leer este documento de forma completa antes de utilizar nuestros servicios de inteligencia artificial conversacional y automatizacion comercial.",
          ],
        },
        {
          id: "servicio",
          title: "Descripcion del servicio",
          paragraphs: [
            "Metatok proporciona soluciones de automatizacion y agentes de IA para captar, cualificar y agendar leads en canales como web, WhatsApp e Instagram.",
            "Nuestros servicios incluyen auditoria, diseno estrategico, implementacion e iteracion continua segun el alcance acordado con cada cliente.",
          ],
        },
        {
          id: "uso",
          title: "Uso permitido",
          paragraphs: [
            "El cliente se compromete a utilizar el servicio conforme a la ley y a no emplearlo para actividades fraudulentas, abusivas o que vulneren derechos de terceros.",
          ],
          bullets: [
            "No utilizar la plataforma para spam o comunicaciones ilegales.",
            "No intentar vulnerar la seguridad o disponibilidad del servicio.",
            "Cumplir la normativa de proteccion de datos aplicable a su operacion.",
          ],
        },
        {
          id: "propiedad",
          title: "Propiedad intelectual",
          paragraphs: [
            "Los contenidos, disenos, codigo y arquitectura de automatizacion desarrollados por Metatok son propiedad de Metatok salvo pacto escrito en contrario.",
            "El cliente obtiene una licencia de uso no exclusiva en los terminos definidos en su propuesta comercial o contrato.",
          ],
        },
        {
          id: "responsabilidad",
          title: "Limitacion de responsabilidad",
          paragraphs: [
            "Metatok no responde por danos indirectos, lucro cesante o interrupciones derivadas de factores externos fuera de su control razonable.",
            "Las metricas o estimaciones de rendimiento son referencias orientativas y no constituyen garantia absoluta de resultados.",
          ],
        },
        {
          id: "modificaciones",
          title: "Modificaciones de los terminos",
          paragraphs: [
            "Metatok puede actualizar estos terminos para adaptarlos a cambios legales, tecnicos o de producto.",
            "Las modificaciones entraran en vigor desde su publicacion en esta pagina.",
          ],
        },
      ]}
    />
  );
}
