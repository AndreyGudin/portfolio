"use client";

import { memo } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { ProjectItem, ProjectItemType } from "../ProjectItem/ProjectItem";
import RSLangImage from "p/RS-Lang.png";
import CalculatorImage from "p/calculator.png";
import SimpleHotelCheckImage from "p/simple-hotel-check-img.png";

import image5 from "p/image5.svg";
import image6 from "p/image6.svg";
import image7 from "p/image7.svg";
import image8 from "p/image8.svg";
import { fromLeft } from "@/shared/lib/animations/animation";

interface ProjectsProps {
  className?: string;
}

export const Projects: FC<ProjectsProps> = memo(
  ({ className = "" }: ProjectsProps) => {
    const t = useTranslations("Portfolio");

    const ProjectsItems: ProjectItemType[] = [
      {
        src: RSLangImage,
        text: t("Описание проекта Приложение для изучения английского языка"),
        title: t("Приложение для изучения английского языка"),
        hrefToGit: "https://github.com/AndreyGudin/RS-Lang",
        hrefToSite: "https://fastify-deploy-production.up.railway.app/app",
        skills: ["Typescript", "ChartJs", "Webpack"],
      },
      {
        src: CalculatorImage,
        text: t("Описание проекта Калькулятор"),
        title: t("Калькулятор"),
        hrefToGit: "https://github.com/AndreyGudin/calculator",
        hrefToSite: "https://andreygudin.github.io/calculator/",
        skills: ["React", "Typescript", "Dnd Kit", "Tailwind", "Vite"],
      },
      {
        src: SimpleHotelCheckImage,
        text: t("Описание проекта Simple Hotel Check"),
        title: t("Simple Hotel Check"),
        hrefToGit: "https://github.com/AndreyGudin/simple-hotel-check",
        hrefToSite: "https://andreygudin.github.io/simple-hotel-check/",
        skills: [
          "React",
          "Typescript",
          "Redux",
          "Redux Saga",
          "Tailwind",
          "Vite",
        ],
      },
    ];
    return (
      <motion.section
        className={`${className} w-full flex flex-col gap-12 sm:p-3 scroll-mt-[140px]`}
        id='projects'
      >
        {ProjectsItems.map((item) => {
          return (
            <motion.div
              initial='hidden'
              whileInView='visible'
              variants={fromLeft}
              key={item.title}
              className={`${className} sm:p-5 flex-col flex xl:flex-row border border-accent dark:border-white hover:scale-[1.01]  shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] transition-all`}
            >
              <ProjectItem
                project={item}
                className="'bg-block3 dark:bg-dark-block3 sm:p-block transition-all"
              />
            </motion.div>
          );
        })}
      </motion.section>
    );
  }
);
