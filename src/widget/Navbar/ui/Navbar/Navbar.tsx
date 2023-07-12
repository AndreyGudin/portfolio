"use client";

import { memo, useCallback, useState } from "react";
import type { FC, MouseEvent } from "react";
import { useTranslations } from "next-intl";

import { NavbarItem } from "@/widget/Navbar/ui/NavbarItem/NavbarItem";
import { ThemeSwitcher } from "@/widget/ThemeSwitcher";
import GithubIcon from "p/github1.svg";
import LinkedInIcon from "p/linkedin.svg";
import TelegramIcon from "p/telegram.svg";
import Image from "next/image";
import { LangSwitcher } from "@/widget/LangSwitcher";

interface NavbarProps {
  className?: string;
}

interface NavbarItem {
  href: string;
  title: string;
}

interface NavbarIcon {
  svg: string;
  href: string;
}

export const Navbar: FC<NavbarProps> = memo(
  ({ className = "" }: NavbarProps) => {
    const [activeButton, setActiveButton] = useState("");
    const t = useTranslations("Portfolio");
    const handleOnClick = useCallback((e: MouseEvent) => {
      setActiveButton(e.currentTarget.id);
    }, []);

    const NavbarItems: NavbarItem[] = [
      {
        href: "#start",
        title: t("Обо мне"),
      },
      { href: "#skills", title: t("Навыки") },
      { href: "#projects", title: t("Проекты") },
    ];

    const NavbarIcons: NavbarIcon[] = [
      {
        svg: GithubIcon,
        href: "",
      },
      {
        svg: LinkedInIcon,
        href: "",
      },
      {
        svg: TelegramIcon,
        href: "",
      },
    ];

    return (
      <nav
        className={`${className} sticky top-0 w-full justify-between items-center flex py-10 px-32 z-50`}
      >
        <div className='flex w-1/2 justify-around text-3xl'>
          {NavbarItems.map((item, i) => {
            return (
              <NavbarItem
                handleOnClick={handleOnClick}
                href={item.href}
                title={item.title}
                key={item.href}
                active={activeButton === item.title}
              />
            );
          })}
        </div>
        <div className='w-1/3 flex justify-around items-center'>
          {NavbarIcons.map((icon, i) => {
            return (
              <Image
                className='cursor-pointer hover:scale-[1.05] transition-all'
                src={icon.svg}
                alt={icon.href}
                key={i}
                width={"50"}
              />
            );
          })}

          <ThemeSwitcher />
          <LangSwitcher />
        </div>
      </nav>
    );
  }
);
