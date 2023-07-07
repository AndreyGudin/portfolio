import { Button } from "@/shared/ui/Button/Button";
import { memo } from "react";
import type { FC, MouseEvent } from "react";

interface NavbarItemProps {
  className?: string;
  active?: boolean;
  title: string;
  href: string;
  handleOnClick?: (e: MouseEvent) => void;
}

export const NavbarItem: FC<NavbarItemProps> = memo(
  ({
    className = "",
    active = false,
    handleOnClick = () => {},
    href,
    title,
  }: NavbarItemProps) => {
    return (
      <Button
        handleOnClick={handleOnClick}
        theme={"link"}
        active={active}
        id={title}
      >
        <a href={href} className={`${className}`}>
          {title}
        </a>
      </Button>
    );
  }
);
