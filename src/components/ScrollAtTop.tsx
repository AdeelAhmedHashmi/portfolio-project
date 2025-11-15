import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ScrollAtTop = () => {
  const [isUp, setIsUp] = React.useState(false);

  return (
    <div
      className={`
        fixed bottom-3 z-50 right-3 left-1/2 -translate-x-1/2 lg:left-auto lg:translate-x-0 lg:bottom-6 lg:right-6
        size-10 flex items-center justify-center
        p-3 rounded-full
        cursor-pointer
        shadow-lg text-primary
        top-btn
        `}
      onClick={() => {
        if (isUp) {
          window.scrollTo({ top: 0, behavior: "smooth" });
        } else {
          window.scrollTo({
            top: document.body.scrollHeight,
            behavior: "smooth",
          });
        }
        setIsUp(!isUp);
      }}
    >
      {isUp ? (
        <div>
          <IoIosArrowUp className="scale-200" />
        </div>
      ) : (
        <div>
          <IoIosArrowDown className="scale-200" />
        </div>
      )}
    </div>
  );
};

export default ScrollAtTop;
