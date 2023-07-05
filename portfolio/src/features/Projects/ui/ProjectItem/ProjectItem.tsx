"use client";

import { Button } from "@/shared/ui/Button/Button";
import { Text } from "@/shared/ui/Text/Text";
import Image from "next/image";
import Link from "next/link";
import { memo } from "react";
import type { FC } from "react";

interface ProjectItemProps {
  className?: string;
  project: ProjectItemType;
}

export type ProjectItemType = {
  title: string;
  text: string;
  src: string;
  hrefToSite: string;
  hrefToGit: string;
};

export const ProjectItem: FC<ProjectItemProps> = memo(
  ({ className = "", project }: ProjectItemProps) => {
    return (
      <div
        className={`${className} p-5 flex border border-accent dark:border-white hover:scale-[1.01]  shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] transition-all`}
      >
        <div className='flex flex-col gap-28 justify-center'>
          <Text
            title={project.title}
            text={project.text}
            sizeText={"medium"}
            sizeTitle={"medium"}
            className='w-[70%]'
          />
          <div className='flex gap-6'>
            <Button>
              <Link href={project.hrefToGit}>To GitHub</Link>
            </Button>
            <Button>
              <Link href={project.hrefToSite}>To Site</Link>
            </Button>
          </div>
        </div>

        <Image src={project.src} alt={project.title} width={"600"} />
      </div>
    );
  }
);
