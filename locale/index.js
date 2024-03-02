import { notFound } from "next/navigation";

export const LANGUAGES = {
  en: {
    locale: "en",
    name: "English",
    flag: "🇺🇸",
    unicode: "1f1fa-1f1f8",
  },
  vi: {
    locale: "vi",
    name: "Vietnam",
    flag: "🇻🇳",
    unicode: "1f1fb-1f1f3",
  },
};

export const DEFAULT_LOCALE = "en";

export async function getMessages(locale = DEFAULT_LOCALE) {
  try {
    return (await import(`@/locale/messages/${locale}.json`)).default;
  } catch (error) {
    notFound();
  }
}
