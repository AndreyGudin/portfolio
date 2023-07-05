"use client";

import { memo } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";

import { Tab } from "@/shared/ui/Tab/Tab";
import { fromBelow } from "@/shared/lib/animations/animation";

interface SkillsProps {
  className?: string;
}

const SkillsItem = [
  "Skill1",
  "Skill1s",
  "Skill1ss",
  "Skill1asda",
  "Skill1s",
  "Skill1sadas",
];

export const Skills: FC<SkillsProps> = memo(
  ({ className = "" }: SkillsProps) => {
    return (
      <motion.section
        className={`${className} scroll-mt-[140px] w-full flex flex-wrap gap-9 justify-center border border-accent dark:border-white p-9 cursor-pointer`}
        id='skills'
        initial='hidden'
        whileInView='visible'
        viewport={{ amount: 0.7 }}
        variants={fromBelow}
      >
        {SkillsItem.map((item) => {
          return <Tab text={item} key={item} />;
        })}
      </motion.section>
    );
  }
);
