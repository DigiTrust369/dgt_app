import { NextIntlClientProvider } from "next-intl";

import { getMessages, DEFAULT_LOCALE } from ".";

// eslint-disable-next-line react/function-component-definition
export default async function LocaleProvider(props) {
  const { children, locale = DEFAULT_LOCALE } = props;

  const messages = await getMessages(locale);

  return (
    <NextIntlClientProvider locale={locale} messages={messages}>
      {children}
    </NextIntlClientProvider>
  );
}
