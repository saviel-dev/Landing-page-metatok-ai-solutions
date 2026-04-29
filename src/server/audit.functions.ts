import { createServerFn } from "@tanstack/react-start";
import { z } from "zod";

/**
 * Esquema Zod para la solicitud de auditoría gratuita.
 * Validación tanto en cliente como en servidor.
 */
export const auditSchema = z.object({
  nombre: z.string().trim().min(2, "Mínimo 2 caracteres").max(80),
  email: z.string().trim().email("Email no válido").max(160),
  empresa: z.string().trim().min(1, "Indica tu empresa").max(120),
  telefono: z.string().trim().min(6, "Teléfono no válido").max(30),
  web: z.string().trim().max(160).optional().or(z.literal("")),
  mensaje: z.string().trim().max(1200).optional().or(z.literal("")),
});

export type AuditInput = z.infer<typeof auditSchema>;

/**
 * Server function que recibe la solicitud de auditoría.
 * Por ahora registra en logs; preparado para conectar a CRM/email.
 */
export const submitAudit = createServerFn({ method: "POST" })
  .inputValidator((input: unknown) => auditSchema.parse(input))
  .handler(async ({ data }) => {
    // Punto de integración futuro: enviar a CRM, email transaccional, etc.
    console.log("[Metatok] Nueva solicitud de auditoría:", {
      nombre: data.nombre,
      email: data.email,
      empresa: data.empresa,
      recibidoEn: new Date().toISOString(),
    });

    return {
      ok: true as const,
      mensaje:
        "Hemos recibido tu solicitud. Un técnico senior te contactará en menos de 24h.",
    };
  });
