import { motion } from "framer-motion";
import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./content";
import { fadeUp, stagger, viewportOnce } from "./motion";

export function Faq() {
  return (
    <section id="faq" className="py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="container-mt grid lg:grid-cols-12 gap-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="lg:col-span-4"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-primary font-semibold"
          >
            FAQ
          </motion.span>
          <motion.h2
            id="faq-heading"
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            Preguntas frecuentes
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
            Resolvemos las dudas más habituales sobre el servicio, la
            implementación y la inversión.
          </motion.p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="lg:col-span-8"
        >
          <Accordion
            type="single"
            collapsible
            className="rounded-2xl border border-border bg-card divide-y divide-border"
          >
            {faqs.map((f, i) => (
              <AccordionItem key={i} value={`item-${i}`} className="border-0 px-5">
                <AccordionTrigger className="text-left text-base font-medium text-foreground hover:no-underline py-5">
                  {f.pregunta}
                </AccordionTrigger>
                <AccordionContent className="text-sm text-muted-foreground leading-relaxed pb-5">
                  {f.respuesta}
                </AccordionContent>
              </AccordionItem>
            ))}
          </Accordion>
        </motion.div>
      </div>
    </section>
  );
}
