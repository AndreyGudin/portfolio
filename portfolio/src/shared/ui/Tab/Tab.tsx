import { memo } from "react";
import type { FC, ReactNode } from "react";

interface TabProps {
  className?: string;
  children: ReactNode;
}

export const Tab: FC<TabProps> = memo(
  ({ className = "", children }: TabProps) => {
    return (
      <div
        className={`${className} flex gap-6 items-center w-fit border bg-accent dark:bg-dark-accent dark:hover:bg-dark-primary-button hover:bg-primary-button hover:text-white transition-all dark:border-dark-accent border-accent rounded p-5`}
      >
        {children}
      </div>
    );
  }
);
