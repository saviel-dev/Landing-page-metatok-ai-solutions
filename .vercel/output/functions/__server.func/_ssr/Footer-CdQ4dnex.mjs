import { r as reactExports, j as jsxRuntimeExports } from "../_libs/react.mjs";
import { S as Slot } from "../_libs/radix-ui__react-slot.mjs";
import { c as cva } from "../_libs/class-variance-authority.mjs";
import { c as clsx } from "../_libs/clsx.mjs";
import { t as twMerge } from "../_libs/tailwind-merge.mjs";
import { R as Root2, T as Trigger, P as Portal2, C as Content2, I as Item2, S as SubTrigger2, a as SubContent2, b as CheckboxItem2, c as ItemIndicator2, d as RadioItem2, L as Label2, e as Separator2 } from "../_libs/radix-ui__react-dropdown-menu.mjs";
import { L as Link } from "../_libs/tanstack__react-router.mjs";
import { $ as Sun, a0 as Moon, X, a1 as Menu, Y as ChevronDown, a2 as ChevronRight, t as Check, a3 as Circle } from "../_libs/lucide-react.mjs";
import { A as AnimatePresence, m as motion } from "../_libs/framer-motion.mjs";
const logoMiniExtended = "/assets/logo%20mini%20extended-C6jcqcT-.png";
function cn(...inputs) {
  return twMerge(clsx(inputs));
}
const buttonVariants = cva(
  "inline-flex items-center justify-center gap-2 whitespace-nowrap rounded-md text-sm font-medium transition-colors focus-visible:outline-none focus-visible:ring-1 focus-visible:ring-ring disabled:pointer-events-none disabled:opacity-50 [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
  {
    variants: {
      variant: {
        default: "bg-primary text-primary-foreground shadow hover:bg-primary/90",
        destructive: "bg-destructive text-destructive-foreground shadow-sm hover:bg-destructive/90",
        outline: "border border-input bg-background shadow-sm hover:bg-accent hover:text-accent-foreground",
        secondary: "bg-secondary text-secondary-foreground shadow-sm hover:bg-secondary/80",
        ghost: "hover:bg-accent hover:text-accent-foreground",
        link: "text-primary underline-offset-4 hover:underline"
      },
      size: {
        default: "h-9 px-4 py-2",
        sm: "h-8 rounded-md px-3 text-xs",
        lg: "h-10 rounded-md px-8",
        icon: "h-9 w-9"
      }
    },
    defaultVariants: {
      variant: "default",
      size: "default"
    }
  }
);
const Button = reactExports.forwardRef(
  ({ className, variant, size, asChild = false, ...props }, ref) => {
    const Comp = asChild ? Slot : "button";
    return /* @__PURE__ */ jsxRuntimeExports.jsx(Comp, { className: cn(buttonVariants({ variant, size, className })), ref, ...props });
  }
);
Button.displayName = "Button";
const DropdownMenu = Root2;
const DropdownMenuTrigger = Trigger;
const DropdownMenuSubTrigger = reactExports.forwardRef(({ className, inset, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  SubTrigger2,
  {
    ref,
    className: cn(
      "flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none focus:bg-accent data-[state=open]:bg-accent [&_svg]:pointer-events-none [&_svg]:size-4 [&_svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props,
    children: [
      children,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronRight, { className: "ml-auto" })
    ]
  }
));
DropdownMenuSubTrigger.displayName = SubTrigger2.displayName;
const DropdownMenuSubContent = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  SubContent2,
  {
    ref,
    className: cn(
      "z-50 min-w-[8rem] overflow-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-lg data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
));
DropdownMenuSubContent.displayName = SubContent2.displayName;
const DropdownMenuContent = reactExports.forwardRef(({ className, sideOffset = 4, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(Portal2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(
  Content2,
  {
    ref,
    sideOffset,
    className: cn(
      "z-50 max-h-[var(--radix-dropdown-menu-content-available-height)] min-w-[8rem] overflow-y-auto overflow-x-hidden rounded-md border bg-popover p-1 text-popover-foreground shadow-md",
      "data-[state=open]:animate-in data-[state=closed]:animate-out data-[state=closed]:fade-out-0 data-[state=open]:fade-in-0 data-[state=closed]:zoom-out-95 data-[state=open]:zoom-in-95 data-[side=bottom]:slide-in-from-top-2 data-[side=left]:slide-in-from-right-2 data-[side=right]:slide-in-from-left-2 data-[side=top]:slide-in-from-bottom-2 origin-(--radix-dropdown-menu-content-transform-origin)",
      className
    ),
    ...props
  }
) }));
DropdownMenuContent.displayName = Content2.displayName;
const DropdownMenuItem = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Item2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center gap-2 rounded-sm px-2 py-1.5 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50 [&>svg]:size-4 [&>svg]:shrink-0",
      inset && "pl-8",
      className
    ),
    ...props
  }
));
DropdownMenuItem.displayName = Item2.displayName;
const DropdownMenuCheckboxItem = reactExports.forwardRef(({ className, children, checked, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  CheckboxItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    checked,
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Check, { className: "h-4 w-4" }) }) }),
      children
    ]
  }
));
DropdownMenuCheckboxItem.displayName = CheckboxItem2.displayName;
const DropdownMenuRadioItem = reactExports.forwardRef(({ className, children, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsxs(
  RadioItem2,
  {
    ref,
    className: cn(
      "relative flex cursor-default select-none items-center rounded-sm py-1.5 pl-8 pr-2 text-sm outline-none transition-colors focus:bg-accent focus:text-accent-foreground data-[disabled]:pointer-events-none data-[disabled]:opacity-50",
      className
    ),
    ...props,
    children: [
      /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "absolute left-2 flex h-3.5 w-3.5 items-center justify-center", children: /* @__PURE__ */ jsxRuntimeExports.jsx(ItemIndicator2, { children: /* @__PURE__ */ jsxRuntimeExports.jsx(Circle, { className: "h-2 w-2 fill-current" }) }) }),
      children
    ]
  }
));
DropdownMenuRadioItem.displayName = RadioItem2.displayName;
const DropdownMenuLabel = reactExports.forwardRef(({ className, inset, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Label2,
  {
    ref,
    className: cn("px-2 py-1.5 text-sm font-semibold", inset && "pl-8", className),
    ...props
  }
));
DropdownMenuLabel.displayName = Label2.displayName;
const DropdownMenuSeparator = reactExports.forwardRef(({ className, ...props }, ref) => /* @__PURE__ */ jsxRuntimeExports.jsx(
  Separator2,
  {
    ref,
    className: cn("-mx-1 my-1 h-px bg-muted", className),
    ...props
  }
));
DropdownMenuSeparator.displayName = Separator2.displayName;
function getInitialTheme() {
  if (typeof window === "undefined") return "light";
  const stored = localStorage.getItem("mt-theme");
  if (stored === "light" || stored === "dark") return stored;
  return "light";
}
function useTheme() {
  const [theme, setTheme] = reactExports.useState("light");
  reactExports.useEffect(() => {
    setTheme(getInitialTheme());
  }, []);
  reactExports.useEffect(() => {
    const root = document.documentElement;
    if (theme === "dark") {
      root.classList.add("dark");
      root.classList.remove("light");
    } else {
      root.classList.add("light");
      root.classList.remove("dark");
    }
    localStorage.setItem("mt-theme", theme);
  }, [theme]);
  const toggle = () => setTheme((t) => t === "dark" ? "light" : "dark");
  return { theme, toggle };
}
const navTop = [{ href: "/#inicio", label: "Inicio" }];
const navSolucion = [
  { href: "/#problema", label: "El problema" },
  { href: "/#motor-metatok", label: "Motor MetaTok" },
  { href: "/#servicios", label: "Servicios" },
  { href: "/#comparativa", label: "Vs. chatbots" },
  { href: "/#producto-white-label", label: "App & white label" }
];
const navExplorar = [
  { href: "/#sectores", label: "Sectores" },
  { href: "/#planes", label: "Precios" },
  { href: "/#faq", label: "FAQ" }
];
const navContacto = { href: "/#contacto", label: "Contacto" };
function NavDropdown({
  label,
  items,
  scrolled
}) {
  const dropdownTriggerClass = `inline-flex items-center gap-1 rounded-md border-0 bg-transparent px-2 py-1 text-sm font-medium outline-none transition-colors focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background text-muted-foreground hover:bg-accent/40 hover:text-foreground data-[state=open]:text-foreground`;
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenu, { modal: false, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsxs(DropdownMenuTrigger, { className: dropdownTriggerClass, children: [
      label,
      /* @__PURE__ */ jsxRuntimeExports.jsx(ChevronDown, { className: "h-3.5 w-3.5 shrink-0 opacity-70", "aria-hidden": true })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuContent, { align: "start", className: "min-w-[12rem]", children: items.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(DropdownMenuItem, { asChild: true, className: "cursor-pointer", children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, children: item.label }) }, item.href)) })
  ] });
}
function Header() {
  const [scrolled, setScrolled] = reactExports.useState(false);
  const [open, setOpen] = reactExports.useState(false);
  const [openGroup, setOpenGroup] = reactExports.useState(null);
  const { theme, toggle } = useTheme();
  reactExports.useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 8);
    onScroll();
    window.addEventListener("scroll", onScroll, { passive: true });
    return () => window.removeEventListener("scroll", onScroll);
  }, []);
  reactExports.useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    if (!open) setOpenGroup(null);
    return () => {
      document.body.style.overflow = "";
    };
  }, [open]);
  const linkClass = `relative text-sm transition-colors py-1 text-muted-foreground hover:text-foreground after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-left after:scale-x-0 after:bg-primary after:transition-transform after:duration-300 hover:after:scale-x-100`;
  const mobileGroupSummary = "flex w-full cursor-pointer items-center justify-between border-0 bg-transparent px-3 py-3 text-left text-sm font-semibold text-foreground";
  const mobileSubLink = "flex items-center px-3 py-2.5 pl-5 text-sm text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-lg transition-colors";
  return /* @__PURE__ */ jsxRuntimeExports.jsxs(jsxRuntimeExports.Fragment, { children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "header",
      {
        className: `fixed top-0 inset-x-0 z-50 transition-all duration-300 ${scrolled ? "border-b border-border backdrop-blur-md bg-background/90 shadow-sm shadow-foreground/5" : "border-b border-transparent bg-transparent py-1"}`,
        children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt flex items-center justify-between h-14 md:h-16", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#inicio", className: "flex items-center group", "aria-label": "Metatok inicio", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            "img",
            {
              src: logoMiniExtended,
              alt: "MetaTok",
              className: "h-5 md:h-8 w-auto",
              loading: "eager"
            }
          ) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "hidden md:flex items-center gap-5 lg:gap-6", "aria-label": "Navegación principal", children: [
            navTop.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: item.href, className: linkClass, children: item.label }, item.href)),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavDropdown, { label: "Solución", items: navSolucion, scrolled }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(NavDropdown, { label: "Explorar", items: navExplorar, scrolled }),
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: navContacto.href, className: linkClass, children: navContacto.label })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "hidden md:flex items-center gap-3", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: toggle,
                "aria-label": theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
                className: "inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-muted-foreground hover:bg-card hover:text-foreground transition-colors",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              Button,
              {
                asChild: true,
                className: "bg-primary text-primary-foreground hover:bg-primary/90 cta-glow font-semibold",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#contacto", children: "Desplegar agente" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "md:hidden flex items-center gap-2", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: toggle,
                "aria-label": theme === "dark" ? "Cambiar a modo claro" : "Cambiar a modo oscuro",
                className: "inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-foreground hover:bg-card transition-colors",
                children: theme === "dark" ? /* @__PURE__ */ jsxRuntimeExports.jsx(Sun, { className: "h-4 w-4" }) : /* @__PURE__ */ jsxRuntimeExports.jsx(Moon, { className: "h-4 w-4" })
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                className: "inline-flex items-center justify-center h-10 w-10 rounded-md border border-border text-foreground hover:bg-card transition-colors",
                onClick: () => setOpen((o) => !o),
                "aria-label": open ? "Cerrar menú" : "Abrir menú",
                "aria-expanded": open,
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { mode: "wait", initial: false, children: open ? /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { opacity: 0, rotate: -70, scale: 0.8 },
                    animate: { opacity: 1, rotate: 0, scale: 1 },
                    exit: { opacity: 0, rotate: 70, scale: 0.8 },
                    transition: { duration: 0.16, ease: "easeOut" },
                    className: "inline-flex",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-5 w-5" })
                  },
                  "close"
                ) : /* @__PURE__ */ jsxRuntimeExports.jsx(
                  motion.span,
                  {
                    initial: { opacity: 0, rotate: 70, scale: 0.8 },
                    animate: { opacity: 1, rotate: 0, scale: 1 },
                    exit: { opacity: 0, rotate: -70, scale: 0.8 },
                    transition: { duration: 0.16, ease: "easeOut" },
                    className: "inline-flex",
                    children: /* @__PURE__ */ jsxRuntimeExports.jsx(Menu, { className: "h-5 w-5" })
                  },
                  "menu"
                ) })
              }
            )
          ] })
        ] })
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsx(
      "div",
      {
        "aria-hidden": true,
        onClick: () => setOpen(false),
        className: [
          "fixed inset-0 z-[60] bg-background/70 backdrop-blur-sm transition-all duration-300 md:hidden",
          open ? "opacity-100 pointer-events-auto" : "opacity-0 pointer-events-none"
        ].join(" ")
      }
    ),
    /* @__PURE__ */ jsxRuntimeExports.jsxs(
      "aside",
      {
        "aria-label": "Menú de navegación",
        className: [
          "fixed top-0 right-0 z-[70] h-full w-72 bg-card border-l border-border",
          "flex flex-col shadow-xl shadow-foreground/10 dark:shadow-[-20px_0_60px_-15px_rgba(0,0,0,0.6)]",
          "transition-transform duration-300 ease-[cubic-bezier(0.22,1,0.36,1)] md:hidden",
          open ? "translate-x-0" : "translate-x-full"
        ].join(" "),
        children: [
          /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex items-center justify-between px-5 h-14 border-b border-border shrink-0", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#inicio", onClick: () => setOpen(false), className: "flex items-center", "aria-label": "Metatok inicio", children: /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logoMiniExtended, alt: "MetaTok", className: "h-5 w-auto" }) }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "button",
              {
                type: "button",
                onClick: () => setOpen(false),
                "aria-label": "Cerrar menú",
                className: "inline-flex items-center justify-center h-9 w-9 rounded-md border border-border text-muted-foreground hover:text-foreground hover:bg-background transition-colors",
                children: /* @__PURE__ */ jsxRuntimeExports.jsx(X, { className: "h-4 w-4" })
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("nav", { className: "flex flex-col px-3 py-2 flex-1 overflow-y-auto", "aria-label": "Navegación móvil", children: [
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: "/#inicio",
                onClick: () => setOpen(false),
                className: "px-3 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-lg transition-colors border-b border-border/50",
                children: "Inicio"
              }
            ),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenGroup((g) => g === "solucion" ? null : "solucion"),
                  "aria-expanded": openGroup === "solucion",
                  className: mobileGroupSummary,
                  children: [
                    "Solución",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        className: [
                          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                          openGroup === "solucion" ? "rotate-180" : ""
                        ].join(" ")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: openGroup === "solucion" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.22, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-2 flex flex-col", children: navSolucion.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: item.href,
                      onClick: () => setOpen(false),
                      className: mobileSubLink,
                      children: item.label
                    },
                    item.href
                  )) })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "border-b border-border/50", children: [
              /* @__PURE__ */ jsxRuntimeExports.jsxs(
                "button",
                {
                  type: "button",
                  onClick: () => setOpenGroup((g) => g === "explorar" ? null : "explorar"),
                  "aria-expanded": openGroup === "explorar",
                  className: mobileGroupSummary,
                  children: [
                    "Explorar",
                    /* @__PURE__ */ jsxRuntimeExports.jsx(
                      ChevronDown,
                      {
                        className: [
                          "h-4 w-4 shrink-0 text-muted-foreground transition-transform duration-300",
                          openGroup === "explorar" ? "rotate-180" : ""
                        ].join(" ")
                      }
                    )
                  ]
                }
              ),
              /* @__PURE__ */ jsxRuntimeExports.jsx(AnimatePresence, { initial: false, children: openGroup === "explorar" && /* @__PURE__ */ jsxRuntimeExports.jsx(
                motion.div,
                {
                  initial: { height: 0, opacity: 0 },
                  animate: { height: "auto", opacity: 1 },
                  exit: { height: 0, opacity: 0 },
                  transition: { duration: 0.22, ease: "easeOut" },
                  className: "overflow-hidden",
                  children: /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "pb-2 flex flex-col", children: navExplorar.map((item) => /* @__PURE__ */ jsxRuntimeExports.jsx(
                    "a",
                    {
                      href: item.href,
                      onClick: () => setOpen(false),
                      className: mobileSubLink,
                      children: item.label
                    },
                    item.href
                  )) })
                }
              ) })
            ] }),
            /* @__PURE__ */ jsxRuntimeExports.jsx(
              "a",
              {
                href: navContacto.href,
                onClick: () => setOpen(false),
                className: "px-3 py-3.5 text-sm font-medium text-muted-foreground hover:text-foreground hover:bg-background/60 rounded-lg transition-colors",
                children: navContacto.label
              }
            )
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "px-4 py-6 shrink-0 border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsx(
            Button,
            {
              asChild: true,
              className: "w-full bg-primary text-primary-foreground hover:bg-primary/90 font-semibold cta-glow",
              onClick: () => setOpen(false),
              children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#contacto", children: "Desplegar agente" })
            }
          ) })
        ]
      }
    )
  ] });
}
const logo = "/assets/logo-BJ-URXw3.png";
function IconFacebook() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "h-4 w-4", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M18 2h-3a5 5 0 0 0-5 5v3H7v4h3v8h4v-8h3l1-4h-4V7a1 1 0 0 1 1-1h3z" }) });
}
function IconInstagram() {
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("svg", { viewBox: "0 0 24 24", fill: "none", stroke: "currentColor", strokeWidth: "2", strokeLinecap: "round", strokeLinejoin: "round", className: "h-4 w-4", "aria-hidden": true, children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("rect", { x: "2", y: "2", width: "20", height: "20", rx: "5", ry: "5" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "12", cy: "12", r: "4" }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("circle", { cx: "17.5", cy: "6.5", r: "0.5", fill: "currentColor", stroke: "none" })
  ] });
}
function IconTikTok() {
  return /* @__PURE__ */ jsxRuntimeExports.jsx("svg", { viewBox: "0 0 24 24", fill: "currentColor", className: "h-4 w-4", "aria-hidden": true, children: /* @__PURE__ */ jsxRuntimeExports.jsx("path", { d: "M19.59 6.69a4.83 4.83 0 0 1-3.77-4.25V2h-3.45v13.67a2.89 2.89 0 0 1-2.88 2.5 2.89 2.89 0 0 1-2.89-2.89 2.89 2.89 0 0 1 2.89-2.89c.28 0 .54.04.79.1V9.01a6.32 6.32 0 0 0-.79-.05 6.34 6.34 0 0 0-6.34 6.34 6.34 6.34 0 0 0 6.34 6.34 6.34 6.34 0 0 0 6.33-6.34V8.69a8.18 8.18 0 0 0 4.78 1.52V6.76a4.85 4.85 0 0 1-1.01-.07z" }) });
}
const socialLinks = [
  {
    label: "Facebook",
    href: "https://facebook.com/metatok",
    icon: IconFacebook,
    hoverClass: "hover:bg-[#1877F2] hover:border-[#1877F2] hover:text-white hover:shadow-[0_0_15px_-5px_#1877F2]"
  },
  {
    label: "Instagram",
    href: "https://instagram.com/metatok",
    icon: IconInstagram,
    hoverClass: "hover:bg-gradient-to-tr hover:from-[#f9ce34] hover:via-[#ee2a7b] hover:to-[#6228d7] hover:border-transparent hover:text-white hover:shadow-[0_0_15px_-5px_#ee2a7b]"
  },
  {
    label: "TikTok",
    href: "https://tiktok.com/@metatok",
    icon: IconTikTok,
    hoverClass: "hover:bg-[#000000] hover:border-white/20 hover:text-white hover:shadow-[0_0_15px_-5px_rgba(255,255,255,0.4)]"
  }
];
const servicios = [
  "Agentes de IA Conversacional",
  "Automatización de Procesos",
  "Cualificación de Leads",
  "Integración con CRM",
  "Agendamiento Automático",
  "Flow-works inteligentes"
];
const sectores = [
  "Inmobiliaria",
  "Salud & Clínicas",
  "E-commerce",
  "Consultoría",
  "Despachos Profesionales",
  "Hoteles"
];
function Footer() {
  const year = (/* @__PURE__ */ new Date()).getFullYear();
  return /* @__PURE__ */ jsxRuntimeExports.jsxs("footer", { className: "border-t border-border bg-background", children: [
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-b border-border bg-[var(--color-surface)]", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt py-6 md:py-7 flex flex-col md:flex-row md:items-center md:justify-between gap-4", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "text-xs font-semibold uppercase tracking-widest text-luxury-gold", children: "Siguiente paso" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-1.5 text-lg md:text-xl font-bold text-foreground max-w-xl leading-snug", children: "Transforma tu tráfico en ingresos hoy mismo." })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsx(
        "a",
        {
          href: "/#contacto",
          className: "inline-flex shrink-0 items-center justify-center rounded-lg bg-primary px-5 py-2.5 text-sm font-bold text-primary-foreground hover:bg-primary/90 cta-glow transition-colors",
          children: "Hablar con el equipo"
        }
      )
    ] }) }),
    /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt py-9 md:py-10 grid sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "sm:col-span-2 lg:col-span-1", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("img", { src: logo, alt: "Metatok", className: "h-8 w-auto", width: 160, height: 40 }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("p", { className: "mt-4 text-sm text-muted-foreground max-w-xs leading-relaxed", children: "Instalamos departamentos de ventas con IA: prospectan, cualifican y cierran 24/7 — omnicanal, con CRM y listos para escala enterprise." }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "mt-6 flex items-center gap-3", children: socialLinks.map(({ label, href, icon: Icon, hoverClass }) => /* @__PURE__ */ jsxRuntimeExports.jsx(
          "a",
          {
            href,
            target: "_blank",
            rel: "noopener noreferrer",
            "aria-label": label,
            className: `inline-flex items-center justify-center h-9 w-9 rounded-lg border border-border bg-card text-muted-foreground transition-all duration-300 ${hoverClass}`,
            children: /* @__PURE__ */ jsxRuntimeExports.jsx(Icon, {})
          },
          label
        )) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Servicios" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5 text-sm text-muted-foreground", children: servicios.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "/#servicios", className: "hover:text-primary transition-colors duration-200", children: s }) }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Sectores" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("ul", { className: "mt-4 space-y-2.5 text-sm text-muted-foreground", children: sectores.map((s) => /* @__PURE__ */ jsxRuntimeExports.jsx("li", { className: "hover:text-primary transition-colors duration-200 cursor-default", children: s }, s)) })
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx("h4", { className: "text-sm font-semibold text-foreground", children: "Contacto" }),
        /* @__PURE__ */ jsxRuntimeExports.jsxs("ul", { className: "mt-4 space-y-2.5 text-sm text-muted-foreground", children: [
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: /* @__PURE__ */ jsxRuntimeExports.jsx("a", { href: "mailto:soporte@metatok.ai", className: "hover:text-primary transition-colors duration-200", children: "soporte@metatok.ai" }) }),
          /* @__PURE__ */ jsxRuntimeExports.jsxs("li", { className: "text-foreground/90", children: [
            "Sede: Madrid, España",
            /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "block text-xs text-muted-foreground mt-1", children: "Dirección fiscal completa bajo solicitud para licitaciones y contratos." })
          ] }),
          /* @__PURE__ */ jsxRuntimeExports.jsx("li", { children: "100 % privacidad de datos (RGPD)" })
        ] })
      ] })
    ] }),
    /* @__PURE__ */ jsxRuntimeExports.jsx("div", { className: "border-t border-border", children: /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "container-mt py-5 flex flex-col md:flex-row gap-3 items-center justify-between text-xs text-muted-foreground", children: [
      /* @__PURE__ */ jsxRuntimeExports.jsxs("span", { children: [
        "© ",
        year,
        " Metatok. Todos los derechos reservados."
      ] }),
      /* @__PURE__ */ jsxRuntimeExports.jsxs("div", { className: "flex flex-wrap items-center justify-center gap-x-4 gap-y-2", children: [
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/aviso-legal", className: "hover:text-primary transition-colors duration-200", children: "Aviso legal" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-30 hidden sm:inline", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/terminos", className: "hover:text-primary transition-colors duration-200", children: "Términos de servicio" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx("span", { className: "opacity-30 hidden sm:inline", children: "·" }),
        /* @__PURE__ */ jsxRuntimeExports.jsx(Link, { to: "/privacidad", className: "hover:text-primary transition-colors duration-200", children: "RGPD / Privacidad" })
      ] })
    ] }) })
  ] });
}
export {
  Button as B,
  Footer as F,
  Header as H,
  cn as c,
  logoMiniExtended as l
};
