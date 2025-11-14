import { motion, AnimatePresence } from "motion/react";
import React from "react";
import { IoIosArrowUp, IoIosArrowDown } from "react-icons/io";

const ScrollAtTop = () => {
  const [isUp, setIsUp] = React.useState(true);

  return (
    <div
      className={`
        fixed bottom-3 z-50 right-3 lg:bottom-6 lg:right-6
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
      <AnimatePresence>
        {isUp ? (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <IoIosArrowUp className="scale-200" />
          </motion.div>
        ) : (
          <motion.div
            initial={{ scale: 0 }}
            animate={{ scale: 1 }}
            exit={{ scale: 0 }}
          >
            <IoIosArrowDown className="scale-200" />
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
};

export default ScrollAtTop;
