import { IoMdDownload } from "react-icons/io";
import profile from "../assets/profile-primary.png";
import { motion } from "motion/react";
import { useContext } from "react";
import type { BioDataResponse } from "../type";
import BioDataContext from "../context/bioContext";
import SkillsSection from "./SkillsSection";

const AboutMe = () => {
  // Custom wrapper function to replace motion.div for compilation stability
  const MotionDiv = ({
    children,
    className,
  }: {
    children: React.ReactNode;
    className: string;
  }) => <div className={className}>{children}</div>;

  const data = useContext<BioDataResponse | null>(BioDataContext);

  return (
    <div
      id="about"
      className={`mx-auto px-4 py-16 sm:px-8 md:px-12 lg:px-16 z-20 pt-20 font-sans`}
      // className={`mx-auto px-4 py-16 sm:px-8 md:px-12 lg:px-16 pt-20 font-sans`}
    >
      {/* Header Section */}
      <div className="flex flex-col gap-4 text-center mb-16">
        <h3 className="text-3xl md:text-4xl lg:text-5xl font-semibold font-heading">
          About Me
        </h3>
        <p
          className={`text-lg md:text-xl opacity-70 text-neutral-400 max-w-7xl mx-auto`}
        >
          {data?.about.description}
        </p>
      </div>

      {/* Content Section (Grid layout for large screens) */}
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-20 items-center">
        {/* Image Section (Col 1) */}
        <div className="flex justify-center shrink-0 grow w-full">
          <div className="relative w-full max-w-lg aspect-4/5 rounded-xl shadow-2xl">
            <MotionDiv className="size-full rounded-full overflow-hidden">
              <img
                src={profile}
                alt="Profile"
                className="w-full h-full object-cover rounded-xl"
                onError={(e) => {
                  e.currentTarget.src =
                    "https://placehold.co/500x700/1C1917/A8A29E?text=PROFILE+IMAGE";
                }}
              />
            </MotionDiv>
          </div>
        </div>

        {/* Text and Button Section (Col 2) */}
        <div className="flex-1 space-y-6">
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            whileInView={{ height: "auto", opacity: 1 }}
            viewport={{ once: true }}
            className={`space-y-6 text-lg p-2 lg:text-xl text-center lg:text-start text-neutral-400 leading-relaxed`}
          >
            <p>{data?.about.description}</p>
          </motion.div>

          {/* Button Section */}
          <div className="pt-8 flex justify-center lg:justify-start">
            <button
              className={`
              px-6 py-3 rounded-xl font-bold text-lg 
              bg-primary 
              flex items-center gap-2 transition-opacity hover:opacity-70
              shadow-lg shadow-orange-500/30
            `}
            >
              <IoMdDownload className="w-5 h-5" />
              Download CV
            </button>
          </div>
        </div>
      </div>
      <SkillsSection />
    </div>
  );
};
export default AboutMe;
