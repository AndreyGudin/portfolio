import { Tab } from "@/shared/ui/Tab/Tab";
import { Text } from "@/shared/ui/Text/Text";
import Image from "next/image";
import { memo } from "react";
import type { FC } from "react";

interface SkillsItemProps {
  className?: string;
  skill: string;
  icon?: string;
}

export const SkillsItem: FC<SkillsItemProps> = memo(
  ({ skill, icon = "", className = "" }: SkillsItemProps) => {
    return (
      <Tab className={`${className}`}>
        <Text text={skill} sizeText={"medium"} />
        {icon.length > 0 ? (
          <Image src={icon} alt={skill} width={"50"} height={"50"} />
        ) : null}
      </Tab>
    );
  }
);
