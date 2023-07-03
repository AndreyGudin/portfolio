import { memo } from "react";
import type { FC } from "react";

interface NavbarItemProps {
  className?: string;
  title: string;
  href: string;
}

export const NavbarItem: FC<NavbarItemProps> = memo(
  ({ className = "", href, title }: NavbarItemProps) => {
    return (
      <a href={href} className={`${className}`}>
        {title}
      </a>
    );
  }
);
