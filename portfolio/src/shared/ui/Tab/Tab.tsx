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
        "w-fit border bg-accent hover:bg-primary-button hover:text-white transition-all border-accent rounded p-5"
      }
    >
      {text}
    </div>
  );
});
