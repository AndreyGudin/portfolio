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
import { Burger } from "@/widget/Burger/ui/Burger";

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
    const [isNavHidden, setIsNavHidden] = useState(true);
    const t = useTranslations("Portfolio");

    const NavbarIcons: NavbarIcon[] = [
      {
        svg: GithubIcon,
        href: "https://github.com/AndreyGudin",
      },
      {
        svg: LinkedInIcon,
        href: "https://www.linkedin.com/in/andrey-gudin-65399124b",
      },
      {
        svg: TelegramIcon,
        href: "https://t.me/andreygudin",
      },
    ];

    const NavbarItems: NavbarItem[] = [
      {
        href: "#start",
        title: t("Обо мне"),
      },
      { href: "#skills", title: t("Навыки") },
      { href: "#projects", title: t("Проекты") },
    ];

    const handleOnClick = useCallback((e: MouseEvent) => {
      setActiveButton(e.currentTarget.id);
    }, []);

    const handleOnClickBurger = useCallback(() => {
      setIsNavHidden((state) => !state);
    }, []);

    return (
      <>
        <Burger onClick={handleOnClickBurger} />
        <nav
          className={`${className} ${
            isNavHidden ? "right-[-100%]" : "right-0"
          } h-screen pt-8 w-[300px] fixed flex gap-10 sm:flex flex-col transition-all sm:flex-row sm:sticky top-0 sm:h-fit sm:w-full sm:justify-between items-center sm:py-3 sm:px-10 xl:py-10 xl:px-32 z-40`}
        >
          <div className=' flex-col sm:flex-row flex w-1/2 justify-around text-base sm:text-xl xl:text-3xl'>
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
          <div className='w-1/3 flex justify-around gap-2 items-center'>
            {NavbarIcons.map((icon, i) => {
              return (
                <Image
                  className='cursor-pointer w-5 sm:w-7 xl:w-12 h-auto hover:scale-[1.05] transition-all'
                  src={icon.svg}
                  alt={icon.href}
                  key={i}
                  width={0}
                />
              );
            })}
          </div>
          <ThemeSwitcher />
          <LangSwitcher />
        </nav>
      </>
    );
  }
);
