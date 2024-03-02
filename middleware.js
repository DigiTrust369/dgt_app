import createIntlMiddleware from "next-intl/middleware";
import { DEFAULT_LOCALE, LANGUAGES } from "./locale";

const intlMiddleware = createIntlMiddleware({
  // A list of all locales that are supported
  locales: Object.keys(LANGUAGES),

  // If this locale is matched, pathnames work without a prefix (e.g. `/about`)
  defaultLocale: DEFAULT_LOCALE,

  /** The default locale can be used without a prefix (e.g. `/about`). If you prefer to have a prefix for the default locale as well (e.g. `/en/about`), you can switch this option to `always`. */
  localePrefix: "never",
});

export default function middleware(req, res) {
  return intlMiddleware(req, res);
}

export const config = {
  matcher: ["/((?!api|_next|.*\\..*).*)"],
};
