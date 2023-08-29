"use client";
import Image from "next/image";
import { memo } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { Text } from "@/shared/ui/Text/Text";
import { Button } from "@/shared/ui/Button/Button";
import image1 from "p/my_photo.jpg";
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
        className={`${className} w-full flex-col sm:flex-row flex items-center p-3 sm:scroll-mt-[140px] justify-center`}
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
              href={
                "https://drive.google.com/file/d/1y1iDhRgrl4b7PmJ1l_HXV0e4drLEktEi/view?usp=sharing"
              }
              target='_blank'
              rel='noopener noreferrer'
            >
              {t("Скачать")}
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
          className='w-[300px] sm:w-[400px] h-fit'
        >
          <Image src={image1} alt='self' width={"400"} height={"600"} />
        </motion.div>
      </motion.section>
    );
  }
);
