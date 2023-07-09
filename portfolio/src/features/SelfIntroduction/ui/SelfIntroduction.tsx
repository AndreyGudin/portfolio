"use client";
import Image from "next/image";
import { memo } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import image1 from "p/image1.svg";
import { fromLeft } from "@/shared/lib/animations/animation";
import Link from "next/link";

interface SelfIntroductionProps {
  className?: string;
}

export const SelfIntroduction: FC<SelfIntroductionProps> = memo(
  ({ className = "" }: SelfIntroductionProps) => {
    const t = useTranslations("Portfolio");

    return (
      <motion.section
        className={`${className} w-full flex items-center p-3 scroll-mt-[140px] justify-center`}
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.7 }}
        id='start'
      >
        <motion.div
          variants={fromLeft}
          className='flex flex-col gap-20 max-w-[70%]'
        >
          <Text
            text={t("Описание")}
            title={t("Приветствие")}
            sizeText={"medium"}
            sizeTitle={"medium"}
            className='max-w-[500px]'
          />
          <Button>
            <Link
              download
              href={"./1.txt"}
              target='_blank'
              rel='noopener noreferrer'
            >
              Download
            </Link>
          </Button>
        </motion.div>
        <motion.div
          animate={{
            translateY: [30, -30],
          }}
          transition={{
            duration: 2,
            repeat: Infinity,
            repeatType: "reverse",
          }}
          className='w-[600px] h-[600px]'
        >
          <Image src={image1} alt='self' width={"600"} height={"600"} />
        </motion.div>
      </motion.section>
    );
  }
);
