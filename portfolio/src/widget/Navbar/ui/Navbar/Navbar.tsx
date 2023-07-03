import { NavbarItem } from "@/widget/Navbar/ui/NavbarItem/NavbarItem";
import { ThemeSwitcher } from "@/widget/ThemeSwitcher";
import { memo } from "react";
import type { FC } from "react";

interface NavbarProps {
  className?: string;
}

interface NavbarItem {
  href: string;
  title: string;
}

const NavbarItems: NavbarItem[] = [
  {
    href: "#start",
    title: "Home",
  },
  { href: "#skills", title: "Skills" },
  { href: "#projects", title: "Projects" },
];

export const Navbar: FC<NavbarProps> = memo(
  ({ className = "" }: NavbarProps) => {
    return (
      <nav className={`${className} w-full flex justify-end p-10`}>
        <div className='flex w-1/3 justify-around text-3xl'>
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
        <ThemeSwitcher />
      </nav>
    );
  }
);
