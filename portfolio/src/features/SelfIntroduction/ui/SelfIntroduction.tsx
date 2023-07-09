"use client";
import Image from "next/image";
import { memo } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";

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
    return (
      <motion.section
        className={`${className} flex items-center p-3 scroll-mt-[140px]`}
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
            text='Lorem ipsum dolor sit amet consectetur adipisicing elit. Quasi aliquid officia eius, modi eos blanditiis, fugit perferendis eum deleniti culpa rerum minima doloribus, illum eveniet pariatur ullam numquam totam veritatis!'
            title='Title Title ttitle teletll'
            sizeText={"large"}
            sizeTitle={"large"}
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
