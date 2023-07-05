import { memo } from "react";
import type { FC } from "react";

interface TabProps {
  className?: string;
  text: string;
}

export const Tab: FC<TabProps> = memo(({ className = "", text }: TabProps) => {
  return (
    <div
      className={
        "w-fit border bg-accent dark:bg-dark-accent dark:hover:bg-dark-primary-button hover:bg-primary-button hover:text-white transition-all dark:border-dark-accent border-accent rounded p-5"
      }
    >
      {text}
    </div>
  );
});
