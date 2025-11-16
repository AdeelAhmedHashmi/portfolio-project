import React, { useContext, useState } from "react";
import { motion } from "motion/react";
import BioDataContext from "../context/bioContext";
import type { BioDataResponse, Project } from "../type";
import CardCarousel from "./Cards/CardCarousel";
import Main from "./Wrappers/Main";
import usePagination from "../hooks/usePagination";
import a from "../assets/projects/0.png";
import b from "../assets/projects/1.png";
import c from "../assets/projects/2.png";
import d from "../assets/projects/3.png";
import ProjectDetails from "./PopUps/ProjectDetails";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const MOCK_IMAGES = [a, b, c, d];

// --- 1. CardCarousel Component (Refined) ---

interface CardProps {
  projectImages: Array<string>;
  projectName: string;
  category?: string;
}

const ProjectCard: React.FC<CardProps> = ({
  projectImages,
  projectName,
  category = undefined,
}) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: 20 }}
      whileInView={{
        opacity: 1,
        y: 0,
      }}
      viewport={{ once: true, amount: 0.3 }}
      className="
        bg-base-300 text-primary-content relative w-full h-[400px] cursor-pointer 
        rounded-xl 
        shadow-xl overflow-hidden 
        transition-all duration-300
        hover:shadow-2xl hover:scale-[1.01]
      "
    >
      <figure className="w-full h-80 object-cover">
        <CardCarousel items={projectImages} />
      </figure>

      {/* Footer Details */}
      <div
        className="
        flex px-5 pt-6 border-t border-neutral-800 
        items-center justify-between text-neutral-500
      "
      >
        <div className="responsive-projectcard-text font-bold text-neutral-400">
          {projectName}
        </div>
        {category && (
          <div className="responsive-projectcard-text scale-95 font-bold text-neutral-500">
            {category}
          </div>
        )}
      </div>
    </motion.div>
  );
};

// --- 3. Portfolio Component (Refined) ---

const PortfolioSec = () => {
  const [currentCatagory, setCurrentCategory] = useState<string>("All");
  const data = useContext<BioDataResponse | null>(BioDataContext);
  const [isPopupOpen, setIsPopupOpen] = useState<boolean>(false);
  const [selectedProject, setSelectedProject] = useState<Project | null>(null);
  const [scrollingTarget, setScrollingTarget] = useState<HTMLElement | null>(
    null
  );

  function setCatagory(catagory: string) {
    if (!catagory) {
      return setCurrentCategory("All");
    }
    setCurrentCategory(catagory);
  }

  const { itemsForShow, showMore, resetItems, canShowMore } =
    usePagination<Project>(data!.portfolio.projects, 6, 6);

  const projects = itemsForShow;

  function filterByCatagory(catagory: string | undefined) {
    return data?.portfolio.projects.filter(
      (project) => project.category === catagory
    );
  }

  return (
    <Main id="portfolio" className="z-20 py-12 pt-20">
      {/* Project Details Popup is here  */}
      {isPopupOpen && (
        <div>
          <ProjectDetails
            target={scrollingTarget}
            data={selectedProject}
            isOpen={isPopupOpen}
            close={setIsPopupOpen}
          />
        </div>
      )}

      {/* Title Header and Category Filters */}
      <div className="mb-10">
        <h3 className="text-center responsive-heading font-semibold mb-8 font-heading">
          Portfolio
        </h3>
        <div
          onClick={(e) => {
            if ((e.target as HTMLElement).tagName !== "BUTTON") return;
            setCatagory((e.target as HTMLElement).innerText);
          }}
          className="flex flex-wrap items-center justify-center gap-4 sm:gap-6"
        >
          <button
            className={`
            rounded-lg font-medium responsive-btn
            ${currentCatagory === "All" ? "bg-primary" : "bg-base-300"} shadow-md transition-colors 
            hover:bg-primary cursor-pointer
          `}
          >
            All
          </button>
          {data?.portfolio.categories.map((category) => {
            return (
              category !== "All" && (
                <button
                  key={category}
                  className={`
                px-7 py-2 lg:py-4 rounded-lg text-base font-medium 
                ${category === currentCatagory ? "bg-primary" : "bg-base-300"} transition-colors 
                hover:bg-primary cursor-pointer
                `}
                >
                  {category}
                </button>
              )
            );
          })}
        </div>
      </div>

      {/* Project Cards Grid (Responsive) */}
      <div
        className="
        mt-9 
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
        gap-8 lg:gap-10 
        justify-center
        min-h-[400px]
      "
      >
        {currentCatagory === "All" &&
          projects.map((project, i) => {
            return (
              <div
                key={i}
                onClick={(e) => {
                  setScrollingTarget(e.target as HTMLElement);
                  setSelectedProject(project);
                  setIsPopupOpen(true);
                  window.document.body.style.overflow = "hidden";
                  window.scrollTo(0, 0);
                }}
              >
                <ProjectCard
                  category={project.category}
                  projectImages={MOCK_IMAGES}
                  projectName={project.title}
                />
              </div>
            );
          })}

        {currentCatagory !== "All" &&
          (filterByCatagory(currentCatagory) === undefined ||
            filterByCatagory(currentCatagory)?.length === 0) && (
            <div className="col-span-full text-center text-neutral-500">
              No projects found in this category.
            </div>
          )}

        {filterByCatagory(currentCatagory)?.map((project, i) => {
          return (
            <ProjectCard
              key={i}
              projectImages={MOCK_IMAGES}
              projectName={project.title}
            />
          );
        })}
      </div>
      <div className="text-center text-neutral-500 cursor-pointer grid justify-center">
        <button
          onClick={() => {
            if (canShowMore) {
              showMore();
            } else {
              resetItems();
            }
          }}
          className="my-6"
        >
          {canShowMore ? (
            <IoIosArrowDown className="cursor-pointer text-2xl lg:text-3xl" />
          ) : projects.length < 0 ? (
            ""
          ) : (
            <IoIosArrowUp className="cursor-pointer text-2xl lg:text-3xl" />
          )}
        </button>
      </div>
    </Main>
  );
};

const Portfolio = () => {
  return <PortfolioSec />;
};

export { Portfolio };
