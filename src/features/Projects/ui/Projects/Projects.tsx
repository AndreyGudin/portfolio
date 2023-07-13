"use client";

import { memo } from "react";
import type { FC } from "react";
import { motion } from "framer-motion";
import { useTranslations } from "next-intl";

import { ProjectItem, ProjectItemType } from "../ProjectItem/ProjectItem";
import RSLangImage from "p/RS-Lang.png";
import CalculatorImage from "p/calculator.png";

import image4 from "p/image4.svg";
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
        src: image5,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Dicta odio quae, quibusdam nihil id officia omnis hic beatae cupiditate vero quos voluptatum praesentium minus. Doloribus sapiente culpa illum odit libero.",
        title: "Title4",
        hrefToGit: "",
        hrefToSite: "",
      },
      {
        src: image6,
        text: "Lorem, ipsum dolor sit amet consectetur adipisicing elit. Officia esse fuga modi, deleniti quo quae eaque suscipit, nesciunt dolor nobis adipisci fugit. Laboriosam et quo beatae totam repudiandae vero tempora.",
        title: "Title5",
        hrefToGit: "",
        hrefToSite: "",
      },
      {
        src: image7,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Aperiam maiores saepe ab ut placeat similique deserunt cupiditate omnis? Earum itaque sed distinctio quisquam voluptatibus nisi inventore voluptates quae culpa adipisci?",
        title: "Title6",
        hrefToGit: "",
        hrefToSite: "",
      },
      {
        src: image8,
        text: "Lorem ipsum dolor sit amet consectetur adipisicing elit. Unde ut nobis cum recusandae eos, dolor, dolorem nihil quod illo eaque ipsum porro quasi, obcaecati cumque aperiam nulla architecto! Molestiae, deserunt?",
        title: "Title7",
        hrefToGit: "",
        hrefToSite: "",
      },
    ];
    return (
      <motion.section
        className={`${className} flex flex-col gap-12 p-3 scroll-mt-[140px]`}
        id='projects'
      >
        {ProjectsItems.map((item) => {
          return (
            <motion.div
              initial='hidden'
              whileInView='visible'
              viewport={{ amount: 0.7 }}
              variants={fromLeft}
              key={item.title}
              className={`${className} p-5 flex border border-accent dark:border-white hover:scale-[1.01]  shadow-[0_4px_9px_-4px_#3b71ca] hover:shadow-[0_8px_9px_-4px_rgba(59,113,202,0.3),0_4px_18px_0_rgba(59,113,202,0.2)] transition-all`}
            >
              <ProjectItem
                project={item}
                className="'bg-block3 dark:bg-dark-block3 p-block transition-all"
              />
            </motion.div>
          );
        })}
      </motion.section>
    );
  }
);
