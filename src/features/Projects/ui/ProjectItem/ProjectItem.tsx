"use client";

import { Button, buttonVariants } from "@/shared/ui/Button/Button";
import { Tab } from "@/shared/ui/Tab/Tab";
import { Text } from "@/shared/ui/Text/Text";
import Image, { StaticImageData } from "next/image";
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
  src: string | StaticImageData;
  hrefToSite: string;
  hrefToGit: string;
  skills?: string[];
};

export const ProjectItem: FC<ProjectItemProps> = memo(
  ({ className = "", project }: ProjectItemProps) => {
    return (
      <>
        <div className='flex p-3 flex-col gap-3 sm:gap-20 justify-center items-center'>
          <Text
            title={project.title}
            text={project.text}
            sizeText={"medium"}
            sizeTitle={"medium"}
            className='w-full sm:w-[70%] text-sm'
          />

          {project.skills ? (
            <div className='flex flex-wrap gap-4 justify-center w-full'>
              {project.skills.map((item, i) => {
                return (
                  <Tab key={i} type={"badge"}>
                    <Text text={item} sizeText={"small"} />
                  </Tab>
                );
              })}
            </div>
          ) : null}
          <div className='flex flex-col sm:flex-row gap-6'>
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
          className='hidden xl:block xl:max-w-[50%] h-fit'
        />
      </>
    );
  }
);
