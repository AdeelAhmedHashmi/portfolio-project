import React, { useContext, useState } from "react";
import { motion } from "motion/react";
import BioDataContext from "../context/bioContext";
import type { BioDataResponse } from "../type";
import { IoIosArrowBack } from "react-icons/io";
import { IoIosArrowForward } from "react-icons/io";

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

// const CardCarousel: React.FC<CarouselProps> = ({ items }) => {
//   const [index, setIndex] = useState<number>(0);
//   const [startX, setStartX] = useState<number>(0);
//   const [isDragging, setIsDragging] = useState<boolean>(false);
//   const MIN_DISTANCE = 65;

//   const goToSlide = (slideIndex: number) => {
//     setIndex(slideIndex);
//   };

//   const next = () => {
//     setIndex((prevIndex) =>
//       prevIndex === items.length - 1 ? 0 : prevIndex + 1
//     );
//   };
//   const prev = () => {
//     setIndex((prevIndex) =>
//       prevIndex === 0 ? items.length - 1 : prevIndex - 1
//     );
//   };
//   const detectPointerStart = (e: React.PointerEvent<HTMLDivElement>) => {
//     e.preventDefault();

//     e.currentTarget.setPointerCapture(e.pointerId);
//     setStartX(e.clientX);
//     setIsDragging(true);
//   };

//   const detectPointerMove = () => {
//     if (!isDragging) return;
//   };

//   const detectPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
//     if (!isDragging) return;
//     const endX = e.clientX;
//     const deltaX = endX - startX; // Positive = Right (Back), Negative = Left (Next)

//     // Release pointer capture immediately
//     e.currentTarget.releasePointerCapture(e.pointerId);

//     // Swipe Left (Go NEXT)
//     if (deltaX < 0 && Math.abs(deltaX) > MIN_DISTANCE) {
//       setIndex((prevIndex) =>
//         prevIndex === items.length - 1 ? 0 : prevIndex + 1
//       );
//     }
//     // Swipe Right (Go BACK)
//     else if (deltaX > 0 && Math.abs(deltaX) > MIN_DISTANCE) {
//       setIndex((prevIndex) =>
//         prevIndex === 0 ? items.length - 1 : prevIndex - 1
//       );
//     }

//     // Reset state
//     setIsDragging(false);
//     setStartX(0);
//   };

//   // Jump function for dots now uses goToSlide directly
//   const handleDotClick = (
//     e: React.PointerEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
//     i: number
//   ) => {
//     // Prevent the dot click from triggering swipe logic on the main container
//     e.stopPropagation();
//     goToSlide(i);
//   };

//   return (
//     <div
//       className="w-full h-full relative"
//       draggable="false"
//       onPointerDown={detectPointerStart}
//       onPointerMove={detectPointerMove}
//       onPointerUp={detectPointerEnd}
//       onPointerCancel={detectPointerEnd}
//     >
//       <img
//         src={items[index]}
//         className="h-full w-full object-cover"
//         alt={`Project image ${index + 1}`}
//         onError={(e) => {
//           e.currentTarget.src =
//             "https://placehold.co/800x600/cccccc/000000?text=Error";
//         }}
//       />

//       <div>
//         {/* Previous Button */}
//         <button
//           onClick={prev}
//           className="
//             absolute top-1/2 left-2 -translate-y-1/2
//             bg-black/30 hover:bg-black/50
//             size-8 rounded-full flex
//             justify-center items-center
//             text-white
//             transition-colors
//           "
//         >
//           ‹
//         </button>
//         {/* Next Button */}
//         <button
//           onClick={next}
//           className="
//             absolute top-1/2 right-2 -translate-y-1/2
//             bg-black/30 hover:bg-black/50
//             size-8 rounded-full flex
//             justify-center items-center
//             text-white
//             transition-colors
//           "
//         >
//           ›
//         </button>
//       </div>

//       {/* Navigation Dots (Styled for better visibility) */}
//       <div className="w-full py-2 absolute bottom-0 flex gap-2 justify-center z-10">
//         {items.map((_, i) => (
//           <div
//             key={i}
//             role="button"
//             aria-label={`Go to slide ${i + 1}`}
//             onClick={(e) => handleDotClick(e, i)}
//             onPointerUp={(e) => handleDotClick(e, i)}
//             className={`
//               size-3 rounded-full cursor-pointer border transition-colors duration-200
//               ${i === index ? "bg-white" : "bg-transparent hover:bg-white"}
//             `}
//           ></div>
//         ))}
//       </div>
//     </div>
//   );
// };

// --- 2. ProjectCard Component  ---

const CardCarousel: React.FC<CarouselProps> = ({ items }) => {
  const [index, setIndex] = useState<number>(0);
  const [startX, setStartX] = useState<number>(0);
  const [isDragging, setIsDragging] = useState<boolean>(false);
  const MIN_DISTANCE = 65;

  // --- NAVIGATION FUNCTIONS ---

  const goToSlide = (slideIndex: number) => {
    setIndex(slideIndex);
  };

  const next = (e: React.MouseEvent<HTMLButtonElement>) => {
    // FIX: Stop propagation to prevent triggering swipe logic on the parent div
    e.stopPropagation();
    setIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = (e: React.MouseEvent<HTMLButtonElement>) => {
    // FIX: Stop propagation to prevent triggering swipe logic on the parent div
    e.stopPropagation();
    setIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // --- POINTER/SWIPE HANDLERS ---

  const detectPointerStart = (e: React.PointerEvent<HTMLDivElement>) => {
    // Only capture if we are interacting directly with the image/carousel body, not a child element
    if (e.target !== e.currentTarget) return;

    e.preventDefault();
    e.currentTarget.setPointerCapture(e.pointerId);
    setStartX(e.clientX);
    setIsDragging(true);
  };

  const detectPointerMove = () => {
    // We keep this function light, as the movement logic is handled on end
    if (!isDragging) return;
  };

  const detectPointerEnd = (e: React.PointerEvent<HTMLDivElement>) => {
    if (!isDragging) return;
    const endX = e.clientX;
    const deltaX = endX - startX; // Positive = Right (Back), Negative = Left (Next)

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

  // Jump function for dots
  const handleDotClick = (
    e: React.PointerEvent<HTMLElement> | React.MouseEvent<HTMLElement>,
    i: number
  ) => {
    // FIX: Use e.stopPropagation() here to prevent the dot click from starting a swipe
    e.stopPropagation();
    goToSlide(i);
  };

  // Fallback Image URL
  const fallbackImageUrl =
    "https://placehold.co/800x600/1f2937/FFFFFF?text=Project+Placeholder";

  return (
    <div
      className="w-full h-full relative"
      draggable="false"
      onPointerDown={detectPointerStart}
      onPointerMove={detectPointerMove}
      onPointerUp={detectPointerEnd}
      onPointerCancel={detectPointerEnd}
    >
      {/* Remove the unnecessary input field */}

      <img
        src={items[index]}
        className="h-full w-full object-cover transition-opacity duration-300"
        alt={`Project image ${index + 1}`}
        // Graceful error handling for missing images
        onError={(e) => {
          e.currentTarget.src = fallbackImageUrl;
        }}
      />

      {/* --- PREV / NEXT BUTTONS --- */}
      <div>
        {/* Previous Button */}
        <div className="h-full flex align-middle hover:opacity-100 opacity-0">
          <button
            onClick={prev}
            aria-label="Previous Slide"
            className="
            absolute top-1/2 left-2 -translate-y-1/2 
            bg-black/10 hover:bg-black/50 backdrop-blur-sm
             hover:opacity-100 opacity-0 font-extrabold
            size-10 rounded-full flex cursor-pointer
            justify-center items-center
            text-white/80 hover:text-white
            transition-all duration-200 z-10
          "
          >
            <IoIosArrowBack className="text-3xl" />
          </button>
        </div>
        {/* Next Button */}
        <div className="h-full flex align-middle hover:opacity-100 opacity-0">
          <button
            onClick={next}
            aria-label="Next Slide"
            className=" 
            absolute top-1/2 right-2 -translate-y-1/2
           hover:bg-black/50 hover:opacity-100 opacity-0 font-extrabold backdrop-blur-sm
            size-10 rounded-full flex cursor-pointer
            justify-center items-center
            text-white/80 hover:text-white
            transition-all duration-200 z-10
          "
          >
            <IoIosArrowForward className="text-3xl" />
          </button>
        </div>
      </div>

      <div className="w-full py-3 absolute bottom-0 flex gap-2 justify-center z-10">
        {items.map((_, i) => (
          <div
            key={i}
            role="button"
            aria-label={`Go to slide ${i + 1}`}
            onClick={(e) => handleDotClick(e, i)}
            // Use onPointerUp for touch compatibility on dots, but call handleDotClick which stops propagation
            onPointerUp={(e) => handleDotClick(e, i)}
            className={`
              size-3 rounded-full cursor-pointer transition-all duration-300 
              border border-white/50 
              ${i === index ? "bg-white scale-125" : "bg-transparent hover:bg-white/50"}
            `}
          ></div>
        ))}
      </div>
    </div>
  );
};

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
  const data = useContext<BioDataResponse | null>(BioDataContext);

  function setCatagory(catagory: string) {
    if (!catagory) {
      return setCurrentCategory("All");
    }
    setCurrentCategory(catagory);
  }

  function filterByCatagory(catagory: string | undefined) {
    return data?.portfolio.projects.filter(
      (project) => project.category === catagory
    );
  }

  return (
    <div
      id="portfolio"
      className="z-20 px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-23 pt-20 backdrop-blur-3xl"
    >
      {/* Title Header and Category Filters */}
      <div className="mb-10">
        <h3 className="text-center text-4xl sm:text-5xl font-semibold mb-8 font-heading">
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
          data?.portfolio.projects.map((project, i) => {
            return (
              <ProjectCard
                key={i}
                category={project.category}
                projectImages={MOCK_IMAGES}
                projectName={project.title}
              />
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
    </div>
  );
};

const Portfolio = () => {
  return <PortfolioSec />;
};

export { Portfolio };
