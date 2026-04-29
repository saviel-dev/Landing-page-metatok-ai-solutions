import {
  Accordion,
  AccordionContent,
  AccordionItem,
  AccordionTrigger,
} from "@/components/ui/accordion";
import { faqs } from "./content";
import { useFadeUp, useSlideInLeft, useSlideInRight, useTypingEffect, asRef } from "@/hooks/useAnimeJs";

export function Faq() {
  const headerRef = useFadeUp(0);
  const titleRef = useTypingEffect(300);
  const col1Ref = useSlideInLeft(200);
  const col2Ref = useSlideInRight(200);

  return (
    <section id="faq" className="py-20 md:py-28" aria-labelledby="faq-heading">
      <div className="container-mt">
        {/* Encabezado centrado con fade-up */}
        <div
          ref={asRef<HTMLDivElement>(headerRef)}
          className="max-w-3xl mx-auto text-center mb-16"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            FAQ
          </span>
          <h2
            id="faq-heading"
            ref={asRef<HTMLHeadingElement>(titleRef)}
            className="mt-3 text-3xl md:text-4xl lg:text-5xl font-bold text-foreground tracking-tight"
          >
            Preguntas frecuentes
          </h2>
          <p className="mt-4 text-muted-foreground text-lg">
            Resolvemos las dudas más habituales sobre el servicio, la
            implementación y la inversión.
          </p>
        </div>

        <div className="grid md:grid-cols-2 gap-6">
          {/* Columna izquierda — slide desde la izquierda */}
          <div ref={asRef<HTMLDivElement>(col1Ref)}>
            <Accordion
              type="single"
              collapsible
              className="rounded-2xl border border-border bg-card divide-y divide-border"
            >
              {faqs.slice(0, Math.ceil(faqs.length / 2)).map((f, i) => (
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
          </div>

          {/* Columna derecha — slide desde la derecha */}
          <div ref={asRef<HTMLDivElement>(col2Ref)}>
            <Accordion
              type="single"
              collapsible
              className="rounded-2xl border border-border bg-card divide-y divide-border"
            >
              {faqs.slice(Math.ceil(faqs.length / 2)).map((f, i) => (
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
          </div>
        </div>
      </div>
    </section>
  );
}
