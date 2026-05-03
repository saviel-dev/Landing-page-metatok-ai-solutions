import { motion } from "framer-motion";
import { fadeUp, viewportOnce } from "./motion";
import { useLang } from "@/i18n/LangContext";

import imgHeineken from "@/assets/brands/Heineken.png";
import imgLatam from "@/assets/brands/LATAM Airlines.png";
import imgZoom from "@/assets/brands/zoom.png";
import imgCemex from "@/assets/brands/CEMEX.png";
import imgMadrid from "@/assets/brands/Comunidad de Madrid.png";
import imgDupont from "@/assets/brands/DuPont.png";

const brands = [
  { name: "Heineken",             logo: imgHeineken },
  { name: "LATAM Airlines",       logo: imgLatam    },
  { name: "Zoom",                 logo: imgZoom     },
  { name: "Cemex",                logo: imgCemex    },
  { name: "Comunidad de Madrid",  logo: imgMadrid   },
  { name: "DuPont",               logo: imgDupont   },
];

// Triplicamos para bucle visualmente fluido
const marqueeBrands = [...brands, ...brands, ...brands];

export function Brands() {
  const { t } = useLang();
  return (
    <section className="py-7 md:py-8 border-b border-border bg-[var(--color-surface)] overflow-hidden">
      <div className="container-mt mb-5 text-center">
        <motion.p
          initial="hidden"
          whileInView="show"
          viewport={viewportOnce}
          variants={fadeUp}
          className="text-xs font-semibold tracking-widest uppercase text-muted-foreground/70"
        >
          {t.brands.line}
        </motion.p>
      </div>

      <div className="relative flex w-full overflow-hidden">
        {/* Gradientes de difuminado laterales */}
        <div className="absolute left-0 top-0 z-10 h-full w-16 md:w-36 bg-gradient-to-r from-[var(--color-surface)] to-transparent pointer-events-none" />
        <div className="absolute right-0 top-0 z-10 h-full w-16 md:w-36 bg-gradient-to-l from-[var(--color-surface)] to-transparent pointer-events-none" />

        <div className="flex w-max animate-marquee items-center gap-8 md:gap-12 px-6">
          {marqueeBrands.map((brand, i) => (
            <div
              key={`${brand.name}-${i}`}
              className="flex items-center gap-2.5 shrink-0 opacity-40 grayscale transition-all duration-300 hover:opacity-90 hover:grayscale-0"
            >
              <img
                src={brand.logo}
                alt={brand.name}
                className="h-7 md:h-8 w-auto max-w-[40px] object-contain"
                loading="lazy"
                draggable={false}
                suppressHydrationWarning
              />
              <span className="text-sm md:text-base font-semibold text-foreground whitespace-nowrap">
                {brand.name}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
