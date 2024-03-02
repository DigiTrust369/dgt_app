import _merge from "lodash/merge";
import _get from "lodash/get";

import URLS from "@/constants/urls";
import { getMessages, LANGUAGES } from "@/locale";

export const getMetadataDefault = (data = {}) => {
  const {
    title = "Input your page title here",
    description = "Input your description here",
    locale = "en",
    ...rest
  } = data;

  const tt = {
    default: title,
    template: "%s | " + title,
  };

  return _merge(
    {
      metadataBase: new URL(URLS.WEB_URL),
      title: tt,
      description,
      // viewport: {
      //   width: "device-width",
      //   initialScale: 1,
      //   maximumScale: 1,
      // },
      icons: {
        // icon: [
        //   { url: "/icons/icon.png" },
        //   new URL("/icons/icon.png", URLS.WEB_URL),
        // ],
        // shortcut: ["/icons/shortcut-icon.png"],
        // apple: [
        //   { url: "/icons/apple-icon.png" },
        //   {
        //     url: "/icons/apple-icon-x3.png",
        //     sizes: "180x180",
        //     type: "image/png",
        //   },
        // ],
        // other: [
        //   {
        //     rel: "apple-touch-icon-precomposed",
        //     url: "/icons/apple-touch-icon-precomposed.png",
        //   },
        // ],
      },
      generator: "Next.js",
      applicationName: "Next.js",
      referrer: "origin-when-cross-origin",
      keywords: ["Next.js", "React"],
      authors: [{ name: "", url: "" }],
      // colorScheme: "#0ea5e9",
      creator: "",
      publisher: "",
      formatDetection: {
        email: false,
        address: false,
        telephone: false,
      },
      alternates: {
        canonical: "/",
        languages: Object.fromEntries(
          Object.keys(LANGUAGES).map((el) => [el, "/" + el])
        ),
      },
      lang: locale,
      openGraph: {
        title: tt,
        description,
        url: URLS.WEB_URL,
        siteName: "",
        images: [
          // {
          //   url: URLS.WEB_URL + "/images/thumbnail.png",
          //   width: 800,
          //   height: 600,
          // },
          // {
          //   url: URLS.WEB_URL + "/images/thumbnail.png",
          //   width: 1800,
          //   height: 1600,
          //   alt: "My custom alt",
          // },
        ],
        locale,
        type: "website",
      },
    },
    rest
  );
};

export const generateTranslator = async (locale, namespace = "Metadata") => {
  const messages = await getMessages(locale);

  if (!namespace || namespace === "Metadata") {
    return messages.Metadata;
  }

  return {
    ...messages.Metadata,
    ..._get(messages, namespace),
  };
};

export const getMetadata = async (data = {}) => {
  const { locale, namespace = "Metadata", ...rest } = data;

  const t = await generateTranslator(locale, namespace);

  return {
    ...getMetadataDefault({
      ...t,
      ...rest,
      locale,
    }),
  };
};
