import { memo, useEffect, useState } from "react";
import type { FC } from "react";
import Link from "next-intl/link";
import { usePathname } from "next-intl/client";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
  ({ className = "" }: LangSwitcherProps) => {
    const [lang, setLang] = useState("ru");

    useEffect(() => {
      const currentLangWithDefaultRu =
        window.location.href.split("/").at(-1) ?? "ru";
      setLang(currentLangWithDefaultRu);
    }, [lang]);

    return (
      <div
        className={`${className} flex flex-col justify-between xl:flex-row xl:gap-10`}
      >
        <Link
          href='/'
          locale='ru'
          className={
            lang === "ru"
              ? "font-bold border rounded border-black dark:border-white"
              : ""
          }
        >
          Ru
        </Link>
        <Link
          href='/'
          locale='en'
          className={
            lang === "en"
              ? "font-bold border rounded border-black dark:border-white"
              : ""
          }
        >
          En
        </Link>
      </div>
    );
  }
);
