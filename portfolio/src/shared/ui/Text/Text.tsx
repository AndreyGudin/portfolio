import { cva, type VariantProps } from "cva";
import { memo } from "react";
import type { FC } from "react";

export type TextVariantsProps = VariantProps<typeof textVariants>;
export type TitleVariantsProps = VariantProps<typeof titleVariants>;

export const textVariants = cva("", {
  variants: {
    sizeText: {
      medium: ["text-3xl"],
      large: ["text-5xl"],
    },
  },
  defaultVariants: {
    sizeText: "medium",
  },
});

export const titleVariants = cva("", {
  variants: {
    sizeTitle: {
      medium: ["text-5xl"],
      large: ["text-9xl"],
    },
  },
  defaultVariants: {
    sizeTitle: "medium",
  },
});

interface TextProps extends TextVariantsProps, TitleVariantsProps {
  className?: string;
  title?: string;
  text: string;
}

export const Text: FC<TextProps> = memo(
  ({ className = "", text, title = "", sizeText, sizeTitle }: TextProps) => {
    return (
      <div className={`${className} flex flex-col gap-5`}>
        {title.length > 0 ? (
          <p className={titleVariants({ sizeTitle })}>{title}</p>
        ) : null}
        <p className={textVariants({ sizeText })}>{text}</p>
      </div>
    );
  }
);
