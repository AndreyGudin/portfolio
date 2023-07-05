import { memo } from "react";
import type { FC } from "react";

import { Tab } from "@/shared/ui/Tab/Tab";

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
      <section
        className={`${className} scroll-mt-[140px] w-full flex flex-wrap gap-9 justify-center border border-accent dark:border-white p-9 cursor-pointer`}
        id='skills'
      >
        {SkillsItem.map((item) => {
          return <Tab text={item} key={item} />;
        })}
      </section>
    );
  }
);
