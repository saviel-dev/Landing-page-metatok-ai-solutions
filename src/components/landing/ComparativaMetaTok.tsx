import { motion } from "framer-motion";
import { Table, TableBody, TableCell, TableHead, TableHeader, TableRow } from "@/components/ui/table";
import { fadeUp, viewportOnce } from "./motion";

const rows = [
  {
    feature: "Respuesta",
    tradicional: "Estática y por opciones",
    metatok: "Humana y Persuasiva",
  },
  {
    feature: "Integración",
    tradicional: "Limitada",
    metatok: "CRM, Apps y Sector Público",
  },
  {
    feature: "Objetivo",
    tradicional: "Informar",
    metatok: "Cerrar venta / cita",
  },
  {
    feature: "Soporte",
    tradicional: "Ticket básico",
    metatok: "Equipo de éxito dedicado",
  },
];

export function ComparativaMetaTok() {
  return (
    <section
      id="comparativa"
      className="py-8 md:py-12 bg-background"
      aria-labelledby="comparativa-heading"
    >
      <div className="container-mt">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="max-w-3xl mb-6"
        >
          <span className="text-xs uppercase tracking-widest text-primary font-semibold">
            La decisión
          </span>
          <h2
            id="comparativa-heading"
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            MetaTok vs.{" "}
            <span className="text-muted-foreground">chatbots tradicionales</span>
          </h2>
          <p className="mt-4 text-muted-foreground text-base leading-snug">
            Un árbol de decisiones aburrido frente a IA generativa con cierre de ventas.
          </p>
        </motion.div>

        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="rounded-2xl border border-border/70 bg-card/95 overflow-hidden shadow-[0_24px_70px_-35px_rgba(0,0,0,0.45)] backdrop-blur-sm"
        >
          <div className="overflow-x-auto">
            <Table className="min-w-[720px]">
              <TableHeader>
                <TableRow className="border-border/70 bg-muted/40 hover:bg-muted/40">
                  <TableHead className="py-4 text-center text-foreground font-semibold min-w-[180px]">
                    Característica
                  </TableHead>
                  <TableHead className="py-4 text-center text-muted-foreground font-medium min-w-[230px]">
                    Chatbots tradicionales
                  </TableHead>
                  <TableHead className="py-4 text-center min-w-[230px]">
                    <span className="inline-flex items-center justify-center rounded-full border border-primary/35 bg-primary/10 px-3 py-1 text-xs font-semibold uppercase tracking-wide text-primary">
                      MetaTok AI
                    </span>
                  </TableHead>
                </TableRow>
              </TableHeader>
              <TableBody>
                {rows.map((row, index) => (
                  <TableRow
                    key={row.feature}
                    className={[
                      "border-border/70 transition-colors hover:bg-muted/25",
                      index % 2 === 0 ? "bg-background" : "bg-muted/10",
                    ].join(" ")}
                  >
                    <TableCell className="py-4 text-center font-semibold text-foreground">{row.feature}</TableCell>
                    <TableCell className="py-4 text-center text-muted-foreground">{row.tradicional}</TableCell>
                    <TableCell className="py-4 text-center font-medium text-foreground bg-primary/[0.06]">
                      {row.metatok}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </div>
        </motion.div>
      </div>
    </section>
  );
}
