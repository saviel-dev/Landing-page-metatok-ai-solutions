import { j as jsxRuntimeExports } from "../_libs/react.mjs";
import { H as Header, F as Footer } from "./Footer-CdQ4dnex.mjs";
import { S as Scale, b as ShieldCheck } from "../_libs/lucide-react.mjs";
function LegalPageLayout({
  badge,
  title,
  subtitle,
  lastUpdated,
  sections
}) {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "min-h-screen bg-background text-foreground", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(Header, {}),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("main", { className: "relative overflow-hidden border-y border-border bg-[var(--color-surface)]", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute inset-0 bg-[radial-gradient(circle_at_12%_15%,color-mix(in_oklab,var(--color-primary)_16%,transparent)_0%,transparent_42%),radial-gradient(circle_at_88%_84%,color-mix(in_oklab,var(--color-accent)_18%,transparent)_0%,transparent_44%)]"
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "div",
        {
          "aria-hidden": true,
          className: "pointer-events-none absolute inset-0 opacity-20",
          style: {
            backgroundImage: "linear-gradient(to right, color-mix(in oklab, var(--color-foreground) 6%, transparent) 1px, transparent 1px), linear-gradient(to bottom, color-mix(in oklab, var(--color-foreground) 6%, transparent) 1px, transparent 1px)",
            backgroundSize: "48px 48px"
          }
        }
      ),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt relative z-10 py-20 md:py-24", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto max-w-5xl rounded-3xl border border-border/80 bg-card/65 p-6 backdrop-blur-sm md:p-8", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "inline-flex items-center gap-2 rounded-full border border-primary/30 bg-primary/10 px-4 py-1.5 text-xs font-semibold uppercase tracking-[0.16em] text-primary", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(Scale, { className: "h-3.5 w-3.5", "aria-hidden": true }),
            badge
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("h1", { className: "mt-4 text-3xl font-black leading-tight tracking-tight text-foreground md:text-5xl", children: title }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 max-w-3xl text-base leading-relaxed text-muted-foreground", children: subtitle }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "mt-6 flex flex-wrap items-center gap-3 text-xs", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "rounded-full border border-border bg-background/60 px-3 py-1.5 text-muted-foreground", children: [
              "Ultima actualizacion: ",
              lastUpdated
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { className: "inline-flex items-center gap-1.5 rounded-full border border-primary/30 bg-primary/10 px-3 py-1.5 font-semibold text-primary", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsx(ShieldCheck, { className: "h-3.5 w-3.5", "aria-hidden": true }),
              "Diseno compatible claro / oscuro"
            ] })
          ] })
        ] }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("section", { className: "mx-auto mt-8 grid max-w-5xl gap-6 lg:grid-cols-[260px_1fr]", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("aside", { className: "rounded-2xl border border-border/80 bg-card/60 p-4 backdrop-blur-sm lg:sticky lg:top-24 lg:h-fit", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mb-3 text-xs font-semibold uppercase tracking-[0.14em] text-[var(--luxury-gold)]", children: "Indice legal" }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("nav", { "aria-label": "Indice del documento", children: /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "space-y-1.5", children: sections.map((section, index) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsxs(
              "a",
              {
                href: `#${section.id}`,
                className: "block rounded-lg border border-transparent px-3 py-2 text-sm text-muted-foreground transition-colors hover:border-primary/25 hover:bg-primary/10 hover:text-foreground",
                children: [
                  index + 1,
                  ". ",
                  section.title
                ]
              }
            ) }, section.id)) }) })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "space-y-4", children: sections.map((section) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
            "article",
            {
              id: section.id,
              className: "rounded-2xl border border-border/80 bg-card/60 p-5 backdrop-blur-sm md:p-6",
              children: [
                /* @__PURE__ */ jsxRuntimeExports.jsx("h2", { className: "text-xl font-bold text-foreground", children: section.title }),
                /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-3 space-y-3", children: section.paragraphs.map((paragraph) => /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-sm leading-relaxed text-muted-foreground md:text-[15px]", children: paragraph }, paragraph)) }),
                section.bullets && section.bullets.length > 0 ? /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2", children: section.bullets.map((bullet) => /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "flex items-start gap-2 text-sm text-foreground/90", children: [
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "mt-1.5 h-1.5 w-1.5 rounded-full bg-primary", "aria-hidden": true }),
                  /* @__PURE__ */ jsxRuntimeExports.jsx("span", { children: bullet })
                ] }, bullet)) }) : null
              ]
            },
            section.id
          )) })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(Footer, {})
  ] });
}
export {
  LegalPageLayout as L
};
