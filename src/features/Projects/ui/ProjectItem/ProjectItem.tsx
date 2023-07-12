"use client";

import { Button, buttonVariants } from "@/shared/ui/Button/Button";
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
      <>
        <div className='flex flex-col gap-28 justify-center items-center'>
          <Text
            title={project.title}
            text={project.text}
            sizeText={"medium"}
            sizeTitle={"medium"}
            className='w-[70%]'
          />
          <div className='flex gap-6'>
            <Link
              href={project.hrefToGit}
              className={buttonVariants({
                className: "flex justify-center items-center",
              })}
              target='_blank'
            >
              To GitHub
            </Link>

            <Link
              href={project.hrefToSite}
              className={buttonVariants({
                className: "flex justify-center items-center",
              })}
              target='_blank'
            >
              To Site
            </Link>
          </div>
        </div>

        <Image
          src={project.src}
          alt={project.title}
          className='max-w-[50%] h-fit'
        />
      </>
    );
  }
);
