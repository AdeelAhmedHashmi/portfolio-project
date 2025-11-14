import React, { useState } from "react";
import { motion } from "motion/react";

const MOCK_IMAGES = [
  "https://placehold.co/800x600/10b981/ffffff?text=Project+View+1",
  "https://placehold.co/800x600/f59e0b/ffffff?text=Project+View+2",
  "https://placehold.co/800x600/3b82f6/ffffff?text=Project+View+3",
  "https://placehold.co/800x600/ef4444/ffffff?text=Project+View+4",
];

// --- 1. CardCarousel Component (Refined) ---

interface CarouselProps {
  items: string[];
}

const CardCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [index, setIndex] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const MIN_DISTANCE = 65;

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  const detectPointerStart = (e: React.PointerEvent<HTMLDivElement>) => {
    e.preventDefault();

    e.currentTarget.setPointerCapture(e.pointerId);
    setStartX(e.clientX);
    setIsDragging(true);
  };

  // Pointer move is empty, as we only need start/end positions for swipe
  const detectPointerMove = () => {
    if (!isDragging) return;
  };

  const detectPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const endX = e.clientX;
    const deltaX = endX - startX; // Positive = Right (Back), Negative = Left (Next)

    // Release pointer capture immediately
    e.currentTarget.releasePointerCapture(e.pointerId);

    // Swipe Left (Go NEXT)
    if (deltaX < 0 && Math.abs(deltaX) > MIN_DISTANCE) {
      setIndex((prevIndex) =>
        prevIndex === items.length - 1 ? 0 : prevIndex + 1
      );
    }
    // Swipe Right (Go BACK)
    else if (deltaX > 0 && Math.abs(deltaX) > MIN_DISTANCE) {
      setIndex((prevIndex) =>
        prevIndex === 0 ? items.length - 1 : prevIndex - 1
      );
    }

    // Reset state
    setIsDragging(false);
    setStartX(0);
  };

  // Jump function for dots now uses goToSlide directly
  const handleDotClick = (
    e: React.PointerEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
    i: number
  ) => {
    // Prevent the dot click from triggering swipe logic on the main container
    e.stopPropagation();
    goToSlide(i);
  };

  return (
    <div
      className="w-full h-full relative"
      draggable="false"
      onPointerDown={detectPointerStart}
      onPointerMove={detectPointerMove}
      onPointerUp={detectPointerEnd}
      onPointerCancel={detectPointerEnd}
    >
      <img
        src={items[index]}
        className="h-full w-full object-cover"
        alt={`Project image ${index + 1}`}
        onError={(e) => {
          e.currentTarget.src =
            "https://placehold.co/800x600/cccccc/000000?text=Error";
        }}
      />

      {/* Navigation Dots (Styled for better visibility) */}
      <div className="w-full py-2 absolute bottom-0 flex gap-2 justify-center z-10">
        {items.map((_, i) => (
          <div
            key={i}
            role="button" // Use role for better semantic meaning
            aria-label={`Go to slide ${i + 1}`}
            onClick={(e) => handleDotClick(e, i)}
            onPointerUp={(e) => handleDotClick(e, i)}
            className={`
              size-3 rounded-full cursor-pointer border transition-colors duration-200 
              ${i === index ? "bg-white" : "bg-transparent hover:bg-white"}
            `}
          ></div>
        ))}
      </div>
    </div>
  );
};

// --- 2. ProjectCard Component  ---

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
        font-sans items-center justify-between text-neutral-500
      "
      >
        <div className="text-xl font-bold text-neutral-500">{projectName}</div>
        {category && (
          <div className="text-lg font-bold text-neutral-600">{category}</div>
        )}
      </div>
    </motion.div>
  );
};

// --- 3. Portfolio Component (Refined) ---

const PortfolioSec = () => {
  const [currentCatagory, setCurrentCategory] = useState<string>("All");

  function setCatagory(catagory: string) {
    if (!catagory) {
      return setCurrentCategory("All");
    }
    setCurrentCategory(catagory);
  }

  const projectData = [
    { name: "Skyline Commerce", cat: "Website Design", images: MOCK_IMAGES },
    { name: "Nova Mobile App", cat: "Mobile App Design", images: MOCK_IMAGES },
    { name: "Aura Desktop Tool", cat: "App Desktop", images: MOCK_IMAGES },
    { name: "Hair Style Catalog", cat: "Braiding", images: MOCK_IMAGES },
    { name: "Cloud API Portal", cat: "Website Design", images: MOCK_IMAGES },
    { name: "Finance Dashboard", cat: "Braiding", images: MOCK_IMAGES },
    { name: "Finance Dashboard", cat: "App Desktop", images: MOCK_IMAGES },
    { name: "Finance Dashboard", cat: "Braiding", images: MOCK_IMAGES },
  ];

  const catagories = new Set(projectData.map((project) => project.cat));

  return (
    <div
      id="portfolio"
      className="px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-23 pt-20 font-sans"
    >
      {/* Title Header and Category Filters */}
      <div className="mb-10">
        <h3 className="text-center text-4xl sm:text-5xl font-semibold mb-8">
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
            px-6 py-2 rounded-lg lg:py-4 text-base font-medium 
            ${currentCatagory === "All" ? "bg-primary" : "bg-base-300"} shadow-md transition-colors 
            hover:bg-primary
          `}
          >
            All
          </button>
          {[...catagories].map((category) => (
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
          ))}
        </div>
      </div>

      {/* Project Cards Grid (Responsive) */}
      <div
        className="
        mt-9 
        grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 
        gap-8 lg:gap-10 
        justify-center
      "
      >
        {currentCatagory === "All" &&
          projectData.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                category={project.cat}
                projectImages={project.images}
                projectName={project.name}
              />
            );
          })}

        {projectData
          .filter((project) => project.cat === currentCatagory)
          .map((project, i) => {
            return (
              <ProjectCard
                key={i}
                projectImages={project.images}
                projectName={project.name}
              />
            );
          })}
      </div>
    </div>
  );
};

const Portfolio = () => {
  return <PortfolioSec />;
};

export { Portfolio };
