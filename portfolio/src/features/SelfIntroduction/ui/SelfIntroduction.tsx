"use client";
import Image from "next/image";
import { memo } from "react";
import type { FC } from "react";

import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import image1 from "p/image1.svg";

interface SelfIntroductionProps {
  className?: string;
}

export const SelfIntroduction: FC<SelfIntroductionProps> = memo(
  ({ className = "" }: SelfIntroductionProps) => {
    return (
      <section className={`${className} flex items-center p-3`}>
        <div className='flex flex-col gap-20'>
          <Text
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid officia eius, modi eos blanditiis, fugit perferendis eum deleniti culpa rerum minima doloribus, illum eveniet pariatur ullam numquam totam veritatis!'
            title='Title Title ttitle teletll'
            sizeText={"large"}
            sizeTitle={"large"}
          />
          <Button>Download</Button>
        </div>

        <Image src={image1} alt='self' width={"600"} height={"600"} />
      </section>
    );
  }
);
