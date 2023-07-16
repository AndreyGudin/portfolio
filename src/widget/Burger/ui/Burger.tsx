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
        className={`${className} fixed top-0 right-0 z-50 sm:hidden mt-3 mr-3`}
        size={"square"}
        onClick={onClick}
      >
        Ш
      </Button>
    );
  }
);
