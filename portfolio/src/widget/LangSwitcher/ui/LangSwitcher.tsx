import { memo } from "react";
import type { FC } from "react";
import Link from "next-intl/link";

interface LangSwitcherProps {
  className?: string;
}

export const LangSwitcher: FC<LangSwitcherProps> = memo(
  ({ className = "" }: LangSwitcherProps) => {
    return (
      <div className={`${className} flex gap-10`}>
        <Link href='/' locale='ru'>
          Ru
        </Link>
        <Link href='/' locale='en'>
          En
        </Link>
      </div>
    );
  }
);
