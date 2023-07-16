"use client";

import { memo } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";

import { fromBelow } from "@/shared/lib/animations/animation";
import { SkillsItem } from "../SkillsItem/SkillsItem";
import TypescriptIcon from "p/typescript.svg";
import ReactIcon from "p/react.svg";
import ReduxIcon from "p/redux.svg";
import SCSSIcon from "p/css.svg";
import TailwindIcon from "p/tailwind.svg";
import JestIcon from "p/jest.svg";
import WebpackIcon from "p/webpack.svg";
import ViteIcon from "p/vite.svg";
import GitIcon from "p/git.svg";
import StorybookIcon from "p/storybook.svg";

interface SkillsProps {
  className?: string;
}

type SkillsItemType = {
  skill: string;
  icon: Icon;
};

type Icon = {
  src: string;
  height: number;
  width: number;
  blurWidth: number;
  blurHeight: number;
};

const SkillsItems: SkillsItemType[] = [
  {
    skill: "Typescript",
    icon: TypescriptIcon,
  },
  {
    skill: "React",
    icon: ReactIcon,
  },
  {
    skill: "Redux",
    icon: ReduxIcon,
  },
  {
    skill: "SCSS",
    icon: SCSSIcon,
  },
  {
    skill: "Tailwind",
    icon: TailwindIcon,
  },
  {
    skill: "Jest",
    icon: JestIcon,
  },
  {
    skill: "i18next",
    icon: "",
  },
  {
    skill: "Webpack",
    icon: WebpackIcon,
  },
  {
    skill: "Vite",
    icon: ViteIcon,
  },
  {
    skill: "Git",
    icon: GitIcon,
  },
  {
    skill: "Storybook",
    icon: StorybookIcon,
  },
  {
    skill: "React Testing Library",
    icon: "",
  },
];

export const Skills: FC<SkillsProps> = memo(
  ({ className = "" }: SkillsProps) => {
    return (
      <motion.section
        className={`${className} scroll-mt-[140px] w-full flex flex-wrap gap-9 justify-center border border-accent dark:border-white p-9 cursor-pointer`}
        id='skills'
        initial='hidden'
        whileInView='visible'
        variants={fromBelow}
      >
        {SkillsItems.map((item) => {
          return (
            <SkillsItem
              key={item.skill}
              skill={item.skill}
              icon={item.icon.src}
            />
          );
        })}
      </motion.section>
    );
  }
);
