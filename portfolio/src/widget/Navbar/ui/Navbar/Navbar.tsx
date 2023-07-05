import { memo } from "react";
import type { FC } from "react";

import { NavbarItem } from "@/widget/Navbar/ui/NavbarItem/NavbarItem";
import { ThemeSwitcher } from "@/widget/ThemeSwitcher";
import GithubIcon from "p/github1.svg";
import LinkedInIcon from "p/linkedin.svg";
import TelegramIcon from "p/telegram.svg";
import Image from "next/image";

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

const NavbarItems: NavbarItem[] = [
  {
    href: "#start",
    title: "Item1",
  },
  { href: "#skills", title: "Item2" },
  { href: "#projects", title: "Item3" },
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

export const Navbar: FC<NavbarProps> = memo(
  ({ className = "" }: NavbarProps) => {
    return (
      <nav
        className={`${className} sticky top-0 w-full justify-between items-center flex py-10 px-32`}
      >
        <div className='flex w-1/2 justify-around text-3xl'>
          {NavbarItems.map((item) => {
            return (
              <NavbarItem
                href={item.href}
                title={item.title}
                key={item.title}
              />
            );
          })}
        </div>
        <div className='w-1/3 flex justify-around items-center'>
          {NavbarIcons.map((icon) => {
            return (
              <Image
                className='cursor-pointer hover:scale-[1.05] transition-all'
                src={icon.svg}
                alt={icon.href}
                key={icon.svg}
                width={"50"}
              />
            );
          })}

          <ThemeSwitcher />
        </div>
      </nav>
    );
  }
);
