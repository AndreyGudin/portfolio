import { memo } from "react";
import { cva, type VariantProps } from "cva";
import type { ButtonHTMLAttributes, FC, ReactNode } from "react";

export type ButtonVariantsProps = VariantProps<typeof buttonVariants>;

export const buttonVariants = cva("", {
  variants: {
    theme: {
      standard: [
        " inline-block rounded bg-primary-button dark:bg-dark-primary-button px-6 pb-2 pt-2.5 text-xs font-medium uppercase leading-normal text-white shadow-[0_4px_9px_-4px_#3b71ca] transition duration-150 ease-in-out hover:bg-primary-600 hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:bg-primary-600 focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] focus:outline-none focus:ring-0 active:bg-primary-700 active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] dark:shadow-[0_4px_9px_-4px_rgba(59,113,202,0.5)] dark:hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:focus:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)] dark:active:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.2),0_4px_18px_0_rgba(59,113,202,0.1)]",
      ],
      link: [
        "rounded px-6 pb-2 pt-2.5 leading-normal text-primary transition duration-150 ease-in-out hover:bg-neutral-100 hover:text-primary-600 focus:text-primary-600 focus:outline-none focus:ring-0 active:text-primary-700 dark:hover:bg-neutral-700",
      ],
    },
    size: {
      sm: ["w-[90px] h-[30px]"],
      m: ["w-[180px] h-[60px]"],
    },
  },
  defaultVariants: {
    theme: "standard",
    size: "m",
  },
});

interface ButtonProps
  extends ButtonHTMLAttributes<HTMLButtonElement>,
    ButtonVariantsProps {
  className?: string;
  children: ReactNode;
}

export const Button: FC<ButtonProps> = memo(
  ({ className = "", children, theme, ...props }: ButtonProps) => {
    return (
      <button
        type='button'
        className={buttonVariants({ theme, className })}
        {...props}
      >
        {children}
      </button>
    );
  }
);
