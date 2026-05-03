import {
  createContext,
  useCallback,
  useContext,
  useEffect,
  useMemo,
  useState,
  type ReactNode,
} from "react";
import { translations, type Lang, type Translations } from "./translations";

interface LangContextValue {
  lang: Lang;
  t: Translations;
  /** Alterna entre español e inglés (atajo). */
  toggle: () => void;
  /** Fija el idioma y persiste en `localStorage` y en `document.documentElement.lang`. */
  setLang: (l: Lang) => void;
}

const LangContext = createContext<LangContextValue | null>(null);

const STORAGE_KEY = "metatok-lang";

function readInitialLang(): Lang {
  if (typeof window === "undefined") return "es";
  try {
    const stored = localStorage.getItem(STORAGE_KEY) as Lang | null;
    if (stored === "es" || stored === "en") return stored;
  } catch {
    /* private / blocked storage */
  }
  const browser = navigator.language.slice(0, 2).toLowerCase();
  return browser === "en" ? "en" : "es";
}

export function LangProvider({ children }: { children: ReactNode }) {
  const [lang, setLangState] = useState<Lang>(() => {
    const initial = readInitialLang();
    if (typeof document !== "undefined") {
      document.documentElement.lang = initial;
    }
    return initial;
  });

  const setLang = useCallback((l: Lang) => {
    setLangState(l);
  }, []);

  const toggle = useCallback(() => {
    setLangState((prev) => (prev === "es" ? "en" : "es"));
  }, []);

  useEffect(() => {
    document.documentElement.lang = lang;
    try {
      localStorage.setItem(STORAGE_KEY, lang);
    } catch {
      /* ignore */
    }
  }, [lang]);

  const value = useMemo<LangContextValue>(
    () => ({
      lang,
      t: translations[lang] as Translations,
      toggle,
      setLang,
    }),
    [lang, toggle, setLang],
  );

  return <LangContext.Provider value={value}>{children}</LangContext.Provider>;
}

export function useLang(): LangContextValue {
  const ctx = useContext(LangContext);
  if (!ctx) throw new Error("useLang must be used inside <LangProvider>");
  return ctx;
}
