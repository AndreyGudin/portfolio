import { Button } from "@/shared/ui/Button/Button";
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
      <Button theme={"link"}>
        <a href={href} className={`${className}`}>
          {title}
        </a>
      </Button>
    );
  }
);
