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
        className={
          "w-2/3 flex flex-wrap justify-between border border-accent p-9"
        }
      >
        {SkillsItem.map((item) => {
          return <Tab text={item} key={item} />;
        })}
      </section>
    );
  }
);
