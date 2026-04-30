import { createFileRoute } from "@tanstack/react-router";
import { Header } from "@/components/landing/Header";
import { Footer } from "@/components/landing/Footer";

export const Route = createFileRoute("/privacidad")({
  component: Privacidad,
});

function Privacidad() {
  return (
    <div className="min-h-screen flex flex-col bg-background text-foreground">
      <Header />
      <main className="flex-1 container-mt py-24 md:py-32">
        <div className="max-w-3xl mx-auto bg-card border border-border rounded-2xl p-8 md:p-12 shadow-sm">
          <h1 className="text-3xl md:text-4xl font-bold text-foreground mb-6">
            Política de Privacidad
          </h1>
          <div className="prose prose-sm md:prose-base dark:prose-invert max-w-none text-muted-foreground space-y-6">
            <p>
              Última actualización: {new Date().toLocaleDateString('es-ES', { year: 'numeric', month: 'long', day: 'numeric' })}
            </p>
            
            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">1. Recopilación de Información</h2>
              <p>
                En Metatok, recopilamos información personal que tú nos proporcionas directamente al solicitar una auditoría, contactarnos o contratar nuestros servicios. Esto puede incluir tu nombre, correo electrónico, número de teléfono, detalles de la empresa e información de facturación.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">2. Uso de la Información</h2>
              <p>
                Utilizamos la información recopilada para:
              </p>
              <ul className="list-disc pl-5 mt-2 space-y-1">
                <li>Proporcionar y gestionar los servicios de automatización solicitados.</li>
                <li>Comunicarnos contigo para ofrecer soporte técnico y atención al cliente.</li>
                <li>Enviar actualizaciones, propuestas comerciales y novedades sobre nuestros servicios.</li>
                <li>Mejorar nuestros sistemas y personalizar la experiencia del usuario.</li>
              </ul>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">3. Protección y Seguridad de Datos</h2>
              <p>
                Implementamos medidas de seguridad técnicas y organizativas para proteger tu información personal contra accesos no autorizados, alteración, divulgación o destrucción. Nuestro sistema cumple con las directrices generales de protección de datos y utilizamos cifrado en las comunicaciones de las APIs.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">4. Procesamiento de Datos de Terceros (Tus Leads)</h2>
              <p>
                Como proveedores de infraestructura de IA, Metatok procesa los datos de los usuarios finales (leads) en nombre de nuestros clientes. Nuestros clientes son los controladores de esos datos y son responsables de obtener el consentimiento necesario de sus usuarios. Metatok solo procesa estos datos para ejecutar las automatizaciones contratadas y no los utiliza para fines propios ni los vende a terceros.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">5. Compartición de Datos</h2>
              <p>
                No vendemos, alquilamos ni compartimos tu información personal con terceros, excepto cuando sea estrictamente necesario para proporcionar el servicio (ej. proveedores de hosting, pasarelas de pago o plataformas integradas mediante API bajo tu consentimiento) o para cumplir con obligaciones legales.
              </p>
            </section>

            <section>
              <h2 className="text-xl font-bold text-foreground mt-8 mb-4">6. Tus Derechos</h2>
              <p>
                Tienes derecho a acceder, corregir, actualizar o solicitar la eliminación de tu información personal. Para ejercer estos derechos o si tienes alguna pregunta sobre nuestra Política de Privacidad, puedes contactarnos en contacto@metatok.ai.
              </p>
            </section>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
