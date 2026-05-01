import { useState } from "react";
import { motion } from "framer-motion";
import { useForm } from "react-hook-form";
import { zodResolver } from "@hookform/resolvers/zod";
import { Mail, MapPin, ShieldCheck, Send, Loader2 } from "lucide-react";
import { toast } from "sonner";
import { z } from "zod";

import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Label } from "@/components/ui/label";
import { Textarea } from "@/components/ui/textarea";

import { fadeUp, stagger, viewportOnce } from "./motion";

const auditSchema = z.object({
  nombre: z.string().trim().min(2, "Minimo 2 caracteres").max(80),
  email: z.string().trim().email("Email no valido").max(160),
  empresa: z.string().trim().min(1, "Indica tu empresa").max(120),
  telefono: z.string().trim().min(6, "Telefono no valido").max(30),
  web: z.string().trim().max(160).optional().or(z.literal("")),
  mensaje: z.string().trim().max(1200).optional().or(z.literal("")),
});

type AuditInput = z.infer<typeof auditSchema>;

export function Contacto() {
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

      // TODO: Reemplazar por tu endpoint real cuando lo tengas.
      const endpoint = import.meta.env.VITE_AUDIT_ENDPOINT || "https://tu-endpoint.com/auditoria";

      const response = await fetch(endpoint, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          // TODO: Agregar headers de autenticacion si aplica.
          // Authorization: `Bearer ${import.meta.env.VITE_API_TOKEN}`,
        },
        body: JSON.stringify(values),
      });

      if (!response.ok) {
        throw new Error("Error enviando el formulario");
      }

      toast.success("Solicitud enviada", {
        description: "Tu solicitud fue enviada correctamente.",
      });
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
      className="py-8 md:py-12 bg-[var(--color-surface)] border-t border-border"
      aria-labelledby="contacto-heading"
    >
      <div className="container-mt grid lg:grid-cols-12 gap-6 md:gap-8">
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
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
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
          className="lg:col-span-7 rounded-xl border border-border bg-card p-4 md:p-5 space-y-4"
          noValidate
        >
          <div className="grid sm:grid-cols-2 gap-3">
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
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold"
            >
              {enviando ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  Enviando…
                </>
              ) : (
                <>
                  Solicitar auditoría
                  <Send className="ml-2 h-4 w-4 shrink-0" />
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
