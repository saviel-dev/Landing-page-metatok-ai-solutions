import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { useServerFn } from "@tanstack/react-start";
import { Mail, MapPin, ShieldCheck, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { auditSchema, type AuditInput, submitAudit } from "@/server/audit.functions";
import { fadeUp, stagger, viewportOnce } from "./motion";

export function Contacto() {
  const submit = useServerFn(submitAudit);
  const [enviando, setEnviando] = useState(false);

  const {
    register,
    handleSubmit,
    reset,
    formState: { errors },
  } = useForm<AuditInput>({
    resolver: zodResolver(auditSchema),
    defaultValues: {
      nombre: "",
      email: "",
      empresa: "",
      telefono: "",
      web: "",
      mensaje: "",
    },
  });

  const onSubmit = async (values: AuditInput) => {
    try {
      setEnviando(true);
      const res = await submit({ data: values });
      toast.success("Solicitud enviada", { description: res.mensaje });
      reset();
    } catch (err) {
      console.error(err);
      toast.error("No se pudo enviar tu solicitud", {
        description: "Inténtalo de nuevo en unos instantes.",
      });
    } finally {
      setEnviando(false);
    }
  };

  return (
    <section
      id="contacto"
      className="py-20 md:py-28 bg-[var(--color-surface)] border-t border-border"
      aria-labelledby="contacto-heading"
    >
      <div className="container-mt grid lg:grid-cols-12 gap-10">
        <motion.div
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={stagger}
          className="lg:col-span-5"
        >
          <motion.span
            variants={fadeUp}
            className="text-xs uppercase tracking-widest text-primary font-semibold"
          >
            Contacto
          </motion.span>
          <motion.h2
            id="contacto-heading"
            variants={fadeUp}
            className="mt-3 text-3xl md:text-4xl font-bold text-foreground tracking-tight"
          >
            Hablemos de tu próxima ventaja competitiva
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
            Escríbenos y un técnico senior te contactará en menos de 24 horas para
            agendar tu auditoría gratuita.
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-sm text-foreground">
              <Mail className="h-4 w-4 text-accent" aria-hidden />
              <a href="mailto:contacto@metatok.ai" className="hover:text-primary transition-colors">
                contacto@metatok.ai
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-foreground">
              <MapPin className="h-4 w-4 text-accent" aria-hidden />
              Servicio remoto · Cobertura internacional
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden />
              Tratamos tus datos según RGPD
            </li>
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground"
          >
            <p className="text-foreground font-semibold">Sin compromiso</p>
            <p className="mt-1">
              No vendemos llamadas comerciales. Recibirás un análisis técnico real
              de cómo la IA puede maximizar tu facturación actual.
            </p>
          </motion.div>
        </motion.div>

        <motion.form
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          onSubmit={handleSubmit(onSubmit)}
          className="lg:col-span-7 rounded-2xl border border-border bg-card p-6 md:p-8 space-y-5"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-5">
            <Field label="Nombre" id="nombre" error={errors.nombre?.message}>
              <Input
                id="nombre"
                autoComplete="name"
                placeholder="Tu nombre completo"
                {...register("nombre")}
              />
            </Field>
            <Field label="Email" id="email" error={errors.email?.message}>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder="tucorreo@empresa.com"
                {...register("email")}
              />
            </Field>
            <Field label="Empresa" id="empresa" error={errors.empresa?.message}>
              <Input
                id="empresa"
                autoComplete="organization"
                placeholder="Nombre de tu empresa"
                {...register("empresa")}
              />
            </Field>
            <Field label="Teléfono" id="telefono" error={errors.telefono?.message}>
              <Input
                id="telefono"
                type="tel"
                autoComplete="tel"
                placeholder="+34 600 000 000"
                {...register("telefono")}
              />
            </Field>
            <Field label="Sitio web (opcional)" id="web" error={errors.web?.message}>
              <Input
                id="web"
                autoComplete="url"
                placeholder="https://tuempresa.com"
                {...register("web")}
              />
            </Field>
            <Field label="Sector / canal principal" id="mensaje-corto" error={undefined}>
              <Input
                id="mensaje-corto"
                placeholder="Ej. ecommerce, servicios, B2B…"
                onChange={(e) => {
                  // Lo concatenamos al campo mensaje para no añadir más estado
                  const ev = e.target.value;
                  if (ev) (document.getElementById("mensaje") as HTMLTextAreaElement | null);
                }}
              />
            </Field>
          </div>

          <Field label="¿Qué quieres automatizar? (opcional)" id="mensaje" error={errors.mensaje?.message}>
            <Textarea
              id="mensaje"
              rows={4}
              placeholder="Cuéntanos brevemente tu reto principal."
              {...register("mensaje")}
            />
          </Field>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">
              Al enviar aceptas que te contactemos sobre tu solicitud de auditoría.
            </p>
            <Button
              type="submit"
              size="lg"
              disabled={enviando}
              className="bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold"
            >
              {enviando ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  Solicitar auditoría
                  <Send className="ml-2 h-4 w-4" />
                </>
              )}
            </Button>
          </div>
        </motion.form>
      </div>
    </section>
  );
}

function Field({
  label,
  id,
  error,
  children,
}: {
  label: string;
  id: string;
  error?: string;
  children: React.ReactNode;
}) {
  return (
    <div className="space-y-1.5">
      <Label htmlFor={id} className="text-sm text-muted-foreground">
        {label}
      </Label>
      {children}
      {error && (
        <p className="text-xs text-destructive" role="alert">
          {error}
        </p>
      )}
    </div>
  );
}
