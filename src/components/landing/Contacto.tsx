import { useMemo, useState } from "react";
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
import { useLang } from "@/i18n/LangContext";

type AuditInput = {
  nombre: string;
  email: string;
  empresa: string;
  telefono: string;
  web?: string;
  mensaje?: string;
};

const FORMSUBMIT_ENDPOINT = "https://formsubmit.co/ajax/info@metatok.ai";

export function Contacto() {
  const { t } = useLang();
  const cf = t.contactForm;
  const [enviando, setEnviando] = useState(false);

  const auditSchema = useMemo(
    () =>
      z.object({
        nombre: z.string().trim().min(2, cf.errors.nombre).max(80),
        email: z.string().trim().email(cf.errors.email).max(160),
        empresa: z.string().trim().min(1, cf.errors.empresa).max(120),
        telefono: z.string().trim().min(6, cf.errors.telefono).max(30),
        web: z.string().trim().max(160).optional().or(z.literal("")),
        mensaje: z.string().trim().max(1200).optional().or(z.literal("")),
      }),
    [cf],
  );

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

      const response = await fetch(FORMSUBMIT_ENDPOINT, {
        method: "POST",
        headers: {
          "Content-Type": "application/json",
          Accept: "application/json",
        },
        body: JSON.stringify({
          name: values.nombre,
          email: values.email,
          empresa: values.empresa,
          telefono: values.telefono,
          web: values.web || "—",
          message: values.mensaje || "—",
          _subject: cf.emailSubject(values.empresa),
          _template: "table",
          _captcha: "false",
        }),
      });

      const data = await response.json();

      if (!response.ok || data.success === "false") {
        throw new Error("Error en FormSubmit");
      }

      toast.success(cf.toastOk, {
        description: cf.toastOkDesc,
      });
      reset();
    } catch (err) {
      console.error(err);
      toast.error(cf.toastErr, {
        description: cf.toastErrDesc,
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
            {cf.kicker}
          </motion.span>
          <motion.h2
            id="contacto-heading"
            variants={fadeUp}
            className="mt-3 text-2xl md:text-3xl font-bold text-foreground tracking-tight"
          >
            {cf.heading}
          </motion.h2>
          <motion.p variants={fadeUp} className="mt-4 text-muted-foreground">
            {cf.intro}
          </motion.p>

          <motion.ul variants={fadeUp} className="mt-8 space-y-4">
            <li className="flex items-center gap-3 text-sm text-foreground">
              <Mail className="h-4 w-4 text-accent" aria-hidden />
              <a href="mailto:info@metatok.ai" className="hover:text-primary transition-colors">
                info@metatok.ai
              </a>
            </li>
            <li className="flex items-center gap-3 text-sm text-foreground">
              <MapPin className="h-4 w-4 text-accent" aria-hidden />
              {cf.remote}
            </li>
            <li className="flex items-center gap-3 text-sm text-muted-foreground">
              <ShieldCheck className="h-4 w-4 text-accent" aria-hidden />
              {cf.gdprLine}
            </li>
          </motion.ul>

          <motion.div
            variants={fadeUp}
            className="mt-8 rounded-xl border border-border bg-card p-5 text-sm text-muted-foreground"
          >
            <p className="text-foreground font-semibold">{cf.boxTitle}</p>
            <p className="mt-1">{cf.boxText}</p>
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
            <Field label={cf.labels.nombre} id="nombre" error={errors.nombre?.message}>
              <Input
                id="nombre"
                autoComplete="name"
                placeholder={cf.placeholders.nombre}
                {...register("nombre")}
              />
            </Field>
            <Field label={cf.labels.email} id="email" error={errors.email?.message}>
              <Input
                id="email"
                type="email"
                autoComplete="email"
                placeholder={cf.placeholders.email}
                {...register("email")}
              />
            </Field>
            <Field label={cf.labels.empresa} id="empresa" error={errors.empresa?.message}>
              <Input
                id="empresa"
                autoComplete="organization"
                placeholder={cf.placeholders.empresa}
                {...register("empresa")}
              />
            </Field>
            <Field label={cf.labels.telefono} id="telefono" error={errors.telefono?.message}>
              <Input
                id="telefono"
                type="tel"
                autoComplete="tel"
                placeholder={cf.placeholders.telefono}
                {...register("telefono")}
              />
            </Field>
            <Field label={cf.labels.web} id="web" error={errors.web?.message}>
              <Input
                id="web"
                autoComplete="url"
                placeholder={cf.placeholders.web}
                {...register("web")}
              />
            </Field>
          </div>

          <Field label={cf.labels.mensaje} id="mensaje" error={errors.mensaje?.message}>
            <Textarea
              id="mensaje"
              rows={4}
              placeholder={cf.placeholders.mensaje}
              {...register("mensaje")}
            />
          </Field>

          <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 pt-2">
            <p className="text-xs text-muted-foreground">{cf.consent}</p>
            <Button
              type="submit"
              size="lg"
              disabled={enviando}
              className="w-full sm:w-auto bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold"
            >
              {enviando ? (
                <>
                  <Loader2 className="mr-2 h-4 w-4 animate-spin" />
                  {cf.sending}
                </>
              ) : (
                <>
                  {cf.submit}
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
