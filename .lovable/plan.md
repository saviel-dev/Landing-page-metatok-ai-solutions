
# Landing Page Metatok — Plan

Construiré una landing **dark, premium, flat, tipo SaaS** (inspiración Stripe/Linear) para Metatok, optimizada para convertir visitas en solicitudes de **Auditoría Gratuita**. Usaré el contenido real extraído de los PDFs adjuntos (servicios, proceso de 4 pasos, las 15 FAQs textuales).

## Identidad visual

- **Logo**: copio `Metatok_-_Logo_Color.png` a `src/assets/` y lo uso en header y footer (versión recortada del isotipo en header).
- **Paleta exacta** (la pedida):
  - Fondo `#0F172A`, secundario `#111827`, superficies `#1E293B`
  - Acento primario `#22C55E` (verde — CTAs, métricas)
  - Acento secundario `#38BDF8` (azul cielo — iconos, detalles)
  - Texto `#F8FAFC` / `#CBD5E1`, bordes `#334155`
  - Nota: el azul corporativo del logo se conserva tal cual en el PNG; los acentos UI siguen tu paleta.
- **Tipografía**: **Inter** (Google Fonts, vía `<link>` en `__root.tsx`), pesos 400/500/600/700.
- **Estilo flat**: sin degradados, bordes sutiles `#334155`, sombras mínimas, mucho espacio en blanco (negativo), iconos `lucide-react`.

## Arquitectura de rutas (TanStack Start, SSR + SEO)

Single-page comercial con **scroll suave entre secciones** (la estructura solicitada — Inicio, Servicios, FAQ, Contacto, Auditoría — se concibe como secciones de una landing, no como páginas separadas). El header sticky tiene anclas a cada sección.

```
src/routes/
  __root.tsx          → meta global, Inter font, favicon, JSON-LD Organization
  index.tsx           → landing completa (hero + secciones)
  api/
    audit.ts          → POST endpoint que recibe el formulario
```

Aunque sea single-page, el `head()` del root y del index tendrán title/description/OG completos y específicos de Metatok.

## Secciones de la landing (en orden de scroll)

1. **Sticky Header**
   - Logo Metatok + nav: Inicio · Servicios · Proceso · FAQ · Contacto
   - Botón CTA verde **"Auditoría Gratuita"** (ancla a #auditoria)
   - Menú móvil con `Sheet` de shadcn

2. **Hero `#inicio`**
   - H1: *"Automatiza la captación, calificación y conversión de tus leads con IA"*
   - Subtítulo sobre agentes IA 24/7, CRM y agendamiento
   - Doble CTA: **"Solicitar Auditoría Gratuita"** (verde) + "Ver servicios" (outline)
   - Trust strip: 4 métricas (24/7 · NLP · RGPD · Llave en mano)
   - Mockup decorativo flat a la derecha (cards apiladas mostrando "Lead cualificado", "Cita agendada", "CRM actualizado")
   - Animaciones de entrada suaves (fade + translate-y) con Framer Motion

3. **Beneficios resumidos** (4 cards)
   - Más leads cualificados · Cero tareas repetitivas · Conversión 24/7 · Integración omnicanal

4. **Servicios `#servicios`** — Bento Grid
   - 6 servicios con icono lucide, título, descripción, hover sutil (border verde + lift):
     1. Agentes de IA Conversacional (NLP)
     2. Automatización de Procesos
     3. Cualificación de Leads
     4. Integración con CRM
     5. Agendamiento Automático
     6. Flow-works (flujos inteligentes)
   - Layout bento: 2 cards grandes destacadas + 4 estándar

5. **Proceso `#proceso`** — 4 pasos del PDF
   1. Auditoría de Diagnóstico
   2. Consultoría Estratégica
   3. Presupuesto Ad-Hoc
   4. Despliegue y Programación
   - Timeline horizontal (desktop) / vertical (móvil) con números grandes en verde

6. **Canales omnicanal** (banda)
   - Web · WhatsApp · Instagram · Telegram · API — iconos en fila

7. **FAQ `#faq`** — Acordeón shadcn con animación
   - Las **15 preguntas reales** extraídas del PDF `preguntas.pdf`, textuales
   - JSON-LD `FAQPage` schema generado a partir del mismo array

8. **Auditoría Gratuita `#auditoria`** — sección de máxima conversión
   - Fondo `#111827`, borde verde sutil, headline fuerte: *"Descubre cuánto está perdiendo tu negocio sin IA"*
   - Bullet list de qué incluye la auditoría (texto del PDF)
   - Botón XL verde **"Solicitar mi auditoría gratuita"** → scroll a formulario
   - Microcopy de urgencia: "Plazas limitadas cada semana · Sin compromiso"

9. **Contacto `#contacto`**
   - Formulario (react-hook-form + zod): nombre, email, empresa, teléfono, web actual, mensaje
   - Envío a server function `submitAudit` (createServerFn POST) que valida con Zod y registra en consola/BD (placeholder — listo para enchufar email/CRM)
   - Toast de confirmación con `sonner`
   - Datos de contacto laterales: email, ubicación, redes
   - Mensaje de confianza: "Respuesta en menos de 24h · RGPD"

10. **Footer**
    - Logo, links de navegación, redes, aviso legal/privacidad (placeholders), copyright

## SEO técnico

- **Un solo H1** en el hero con keyword principal: *"Automatización con IA para captación y conversión de leads"*
- Jerarquía H2/H3 limpia por sección
- `head()` en `__root.tsx` y `index.tsx` con title, description, keywords, canonical, OG y Twitter Card
- **JSON-LD** vía `head().scripts`:
  - `Organization` (nombre Metatok, logo, sameAs)
  - `FAQPage` (las 15 Q&A)
  - `Service` (catálogo de servicios)
- `robots.txt` y `sitemap.xml` en `public/`
- Imágenes con `alt` descriptivo, logo en formato optimizado
- `lang="es"` ya presente en `__root.tsx`
- Mobile-first, breakpoints Tailwind, contraste AA

## Animaciones (sutiles, premium)

- **Framer Motion** (`bun add framer-motion`)
- Patrón único reutilizable: `whileInView` fade+slide-up 16px, duración 500ms, stagger 80ms en grids
- Hover en cards: border verde + `translate-y(-2px)` con transición 200ms
- Botones: scale 0.98 active, glow verde sutil en hover del CTA principal
- Sin parallax, sin efectos recargados

## Detalles técnicos

- **Stack**: TanStack Start (existente), Tailwind v4, shadcn/ui (Accordion, Button, Input, Textarea, Sheet, Sonner, Card)
- **Nuevas deps**: `framer-motion`
- **Tema**: aplico `.dark` por defecto en `<html>` y sobrescribo los tokens CSS de `:root`/`.dark` en `src/styles.css` con la paleta exacta solicitada (mapeo: `--background`, `--card`, `--primary` = verde, `--accent` = azul cielo, etc.) para que todos los componentes shadcn hereden correctamente.
- **Server function**: `src/server/audit.functions.ts` con `createServerFn({ method: "POST" })`, validación Zod, devuelve `{ ok: true }`. Pensada para conectar luego a email/CRM real.
- **Comentarios en español** en todos los componentes y funciones, código modular en `src/components/landing/` (Hero, Services, Process, Faq, Audit, Contact, Footer, Header).
- Reemplazo el placeholder de `src/routes/index.tsx`.

## Entregable
Landing en una ruta `/` totalmente funcional, SEO-ready, con formulario operativo (server function), JSON-LD válido, accesible y mobile-first.
