"use client";

import { usePathname, useParams } from "next/navigation";

import { LANGUAGES } from "@/locale";

const w = typeof window === "undefined" ? {} : window;
const LocaleToggle = (props) => {
  const pathname = usePathname();
  const query = useParams();

  const generateHref = (lang) => {
    const langValue = lang === "en" || lang === "vi" ? lang : "en";

    const newPathname = `/${langValue}${pathname !== "/" ? pathname : ""}`;

    const { locale, ...newQuery } = query;
    const queryString = new URLSearchParams(newQuery).toString();
    return `${newPathname}${queryString ? `?${queryString}` : ""}`;
  };

  return (
    <div>
      <a href={generateHref("en")} locale={LANGUAGES.en.locale}>
        {LANGUAGES.en.flag}&nbsp;&nbsp;{LANGUAGES.en.name}
      </a>
      <a href={generateHref("vi")} locale="vi">
        {LANGUAGES.vi.flag}&nbsp;&nbsp;{LANGUAGES.vi.name}
      </a>
    </div>
  );
};

export default LocaleToggle;
