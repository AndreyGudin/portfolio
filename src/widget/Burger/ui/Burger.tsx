import { Button } from "@/shared/ui/Button/Button";
import { memo } from "react";
import type { FC } from "react";

interface BurgerProps {
  className?: string;
  onClick?: () => void;
}

export const Burger: FC<BurgerProps> = memo(
  ({ className = "", onClick = () => {} }: BurgerProps) => {
    return (
      <Button
        className={`${className} block top-0 right-0 z-50 absolute sm:hidden`}
        size={"square"}
        onClick={onClick}
      >
        Ш
      </Button>
    );
  }
);
