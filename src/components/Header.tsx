import { motion, AnimatePresence } from "motion/react";
import Navigation from "./Navigation";
import { RiMenu2Fill } from "react-icons/ri";
import { RxCross1 } from "react-icons/rx";
import { useState } from "react";

const Header = () => {
  const [isOpen, setIsOpen] = useState<boolean>(false);
  return (
    <div
      id="header"
      className="px-4 w-full lg:mt-18 mt-13 sm:px-8 md:px-16 lg:px-24 xl:px-23"
    >
      <AnimatePresence>
        {isOpen && (
          <motion.div
            initial={{ y: "-100%", opacity: 0 }}
            animate={{ y: 0, opacity: 1 }}
            exit={{ y: "-100%", opacity: 0 }}
            transition={{ type: "tween" }}
            className="absolute bg-[#000000d] w-screen backdrop-blur-3xl left-0 top-0 z-50 py-6"
          >
            <div
              className="text-2xl px-3 cursor-pointer"
              onClick={() => setIsOpen(false)}
            >
              <RxCross1 />
            </div>
            <ul
              onClick={() => setIsOpen(false)}
              className="flex h-full flex-col justify-center *:text-xl *:p-1 *:hover:bg-primary *:hover:cursor-pointer *:hover:text-white gap-4 align-middle text-center grow"
            >
              <Navigation />
            </ul>
          </motion.div>
        )}
      </AnimatePresence>

      <div className="flex justify-between align-middle">
        <div
          className="lg:hidden flex align-middle"
          onClick={() => setIsOpen(true)}
        >
          <RiMenu2Fill className="text-4xl text-neutral-500" />
        </div>
        <div className="h-full flex align-middle">
          <h2 className="text-4xl font-semibold text-primary font-heading">
            Akhlas.
          </h2>
        </div>
        <div className="hidden lg:block">
          <ul className="flex *:hover:text-primary font-semibold cursor-pointer gap-x-15 text-xl text-nowrap translate-y-1">
            <Navigation />
          </ul>
        </div>
        <div>
          <button className="btn btn-primary responsive-btn px-4 md:px-6 text-nowrap">
            Hire Me
          </button>
        </div>
      </div>
    </div>
  );
};

export default Header;
