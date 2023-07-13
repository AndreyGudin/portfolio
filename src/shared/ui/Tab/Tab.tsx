import { memo } from "react";
import type { FC, ReactNode } from "react";
import { cva, type VariantProps } from "cva";

interface TabProps extends TabVariantsProps {
  className?: string;
  children: ReactNode;
}

export type TabVariantsProps = VariantProps<typeof tabVariants>;

export const tabVariants = cva("flex gap-6 items-center w-fit rounded p-5", {
  variants: {
    type: {
      badge: ["bg-block2 dark:bg-dark-block2 text-white bor"],
      tab: [
        "bg-accent border dark:bg-dark-accent dark:hover:bg-dark-primary-button hover:bg-primary-button hover:text-white transition-all dark:border-dark-accent border-accent",
      ],
    },
  },
  defaultVariants: {
    type: "tab",
  },
});

export const Tab: FC<TabProps> = memo(
  ({ className = "", children, type }: TabProps) => {
    return <div className={tabVariants({ className, type })}>{children}</div>;
  }
);
