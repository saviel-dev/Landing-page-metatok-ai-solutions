import { CheckCircle2 } from "lucide-react";
import { beneficios } from "./content";
import { useStaggerChildren, useScaleFade, asRef } from "@/hooks/useAnimeJs";

export function Beneficios() {
  // Scale + fade en cada card con stagger
  const gridRef = useStaggerChildren(":scope > div", 0, 100);

  return (
    <section className="py-16 md:py-20 border-y border-border bg-[var(--color-surface)]">
      <div className="container-mt">
        <div
          ref={asRef<HTMLDivElement>(gridRef)}
          className="grid sm:grid-cols-2 lg:grid-cols-4 gap-5"
        >
          {beneficios.map((b) => (
            <div
              key={b.titulo}
              className="card-hover rounded-xl border border-border bg-card p-5"
            >
              <CheckCircle2 className="h-5 w-5 text-primary" aria-hidden />
              <h3 className="mt-4 text-base font-semibold text-foreground">{b.titulo}</h3>
              <p className="mt-2 text-sm text-muted-foreground">{b.descripcion}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
