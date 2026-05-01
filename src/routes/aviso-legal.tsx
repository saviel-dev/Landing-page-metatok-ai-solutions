import { createFileRoute } from "@tanstack/react-router";
import { LegalPageLayout } from "@/components/legal/LegalPageLayout";

export const Route = createFileRoute("/aviso-legal")({
  component: AvisoLegal,
});

function AvisoLegal() {
  const lastUpdated = new Date().toLocaleDateString("es-ES", {
    year: "numeric",
    month: "long",
    day: "numeric",
  });

  return (
    <LegalPageLayout
      badge="Aviso legal"
      title="Aviso Legal e Informacion del Sitio"
      subtitle="Este aviso regula el uso del sitio web de Metatok e informa sobre titularidad, condiciones de acceso, responsabilidades y marco legal aplicable."
      lastUpdated={lastUpdated}
      sections={[
        {
          id: "titular",
          title: "Titular del sitio web",
          paragraphs: [
            "Titular: Metatok.",
            "Contacto: contacto@metatok.ai.",
            "Este sitio web tiene por objeto informar sobre nuestros servicios de automatizacion e inteligencia artificial conversacional.",
          ],
        },
        {
          id: "condiciones",
          title: "Condiciones de uso del sitio",
          paragraphs: [
            "El acceso y navegacion por este sitio atribuye la condicion de usuario e implica la aceptacion de este aviso legal.",
            "El usuario se compromete a utilizar la web conforme a la ley, la buena fe y el orden publico.",
          ],
        },
        {
          id: "responsabilidad",
          title: "Responsabilidad",
          paragraphs: [
            "Metatok no garantiza la disponibilidad continua del sitio ni la ausencia de errores tecnicos puntuales.",
            "No nos responsabilizamos del uso indebido de la informacion publicada ni de contenidos de terceros enlazados externamente.",
          ],
        },
        {
          id: "propiedad",
          title: "Propiedad intelectual e industrial",
          paragraphs: [
            "Los textos, disenos, marcas, logos y elementos visuales de este sitio son titularidad de Metatok o cuentan con licencias validas de uso.",
            "Queda prohibida su reproduccion, distribucion o transformacion sin autorizacion expresa.",
          ],
        },
        {
          id: "jurisdiccion",
          title: "Legislacion aplicable y jurisdiccion",
          paragraphs: [
            "Este sitio se rige por la legislacion espanola y, en su caso, por normativa europea aplicable.",
            "Para cualquier controversia, las partes se someteran a los juzgados y tribunales competentes conforme a derecho.",
          ],
        },
      ]}
    />
  );
}
