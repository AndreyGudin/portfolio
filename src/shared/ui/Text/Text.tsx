import { cva, type VariantProps } from "cva";
import { memo } from "react";
import type { FC } from "react";

export type TextVariantsProps = VariantProps<typeof textVariants>;
export type TitleVariantsProps = VariantProps<typeof titleVariants>;

export const textVariants = cva("", {
  variants: {
    sizeText: {
      small: ["text-xs sm:text-base"],
      medium: ["text-base sm:text-3xl"],
      large: ["text-lg sm:text-5xl"],
    },
  },
  defaultVariants: {
    sizeText: "medium",
  },
});

export const titleVariants = cva("font-semibold", {
  variants: {
    sizeTitle: {
      medium: ["text-lg sm:text-5xl"],
      large: ["text-xl sm:text-9xl"],
    },
  },
  defaultVariants: {
    sizeTitle: "medium",
  },
});

interface TextProps extends TextVariantsProps, TitleVariantsProps {
  className?: string;
  title?: string;
  text?: string;
}

export const Text: FC<TextProps> = memo(
  ({
    className = "",
    text = "",
    title = "",
    sizeText,
    sizeTitle,
  }: TextProps) => {
    return (
      <div className={`${className} flex flex-col gap-5`}>
        {title.length > 0 ? (
          <p className={titleVariants({ sizeTitle })}>{title}</p>
        ) : null}
        {text.length > 0 ? (
          <p className={textVariants({ sizeText })}>{text}</p>
        ) : null}
      </div>
    );
  }
);
