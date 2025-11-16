import React, { useState } from "react";
import { IoIosArrowBack, IoIosArrowForward } from "react-icons/io";

interface CarouselProps {
  items: string[];
}

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
    e.stopPropagation();
    setIndex((prevIndex) =>
      prevIndex === items.length - 1 ? 0 : prevIndex + 1
    );
  };

  const prev = (e: React.MouseEvent<HTMLButtonElement>) => {
    e.stopPropagation();
    setIndex((prevIndex) =>
      prevIndex === 0 ? items.length - 1 : prevIndex - 1
    );
  };

  // --- POINTER/SWIPE HANDLERS ---

  const detectPointerStart = (e: React.PointerEvent<HTMLDivElement>) => {
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
        loading="lazy"
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

      <div className="w-full py-3 absolute bottom-0 flex justify-center z-10">
        <div className="flex bg-neutral-400/30 px-3 py-1 rounded-2xl gap-2">
          {items.map((_, i) => (
            <div
              key={i}
              role="button"
              aria-label={`Go to slide ${i + 1}`}
              onClick={(e) => handleDotClick(e, i)}
              onPointerUp={(e) => handleDotClick(e, i)}
              className={`
            size-2 rounded-full cursor-pointer transition-all duration-300 
            border border-white/70 
            ${i === index ? "bg-white scale-125" : "bg-transparent hover:bg-white/50"}
            `}
            ></div>
          ))}
        </div>
      </div>
    </div>
  );
};

export default CardCarousel;
