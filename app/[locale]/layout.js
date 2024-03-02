import Provider from "@/app/provider";

import { LANGUAGES } from "@/locale";

import { getMetadata } from "@/constants/metadata";

export async function generateStaticParams() {
  return Object.values(LANGUAGES).map((el) => {
    return { locale: el.locale };
  });
}

export async function generateMetadata(props) {
  const { params: { locale } = {} } = props;

  const meta = await getMetadata({
    locale,
  });

  return meta;
}

export default async function LocaleLayout(props) {
  const { children, params: { locale } = {} } = props;
  return <Provider locale={locale}>{children}</Provider>;
}
