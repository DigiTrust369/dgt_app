import { Inter } from "next/font/google";

import LocaleProvider from "@/locale/LocaleProvider";

import { DEFAULT_LOCALE } from "@/locale";

const inter = Inter({ subsets: ["latin"] });

// eslint-disable-next-line react/function-component-definition
export default function Provider(props) {
  const { children, locale = DEFAULT_LOCALE } = props;

  return (
    <html lang={locale}>
      <body suppressHydrationWarning className={inter.className}>
        <LocaleProvider locale={locale}>{children}</LocaleProvider>
      </body>
    </html>
  );
}
