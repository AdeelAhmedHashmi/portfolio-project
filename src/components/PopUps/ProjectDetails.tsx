import { FaLink } from "react-icons/fa";
import { MdClose } from "react-icons/md";
import type { Project } from "../../type";
import type React from "react";
import CardCarousel from "../Cards/CardCarousel";
import a from "../../assets/projects/a.jpg";
import b from "../../assets/projects/b.jpg";
import c from "../../assets/projects/2.png";
import d from "../../assets/projects/1.png";
import { motion } from "motion/react";

interface ProjectDetailsProps {
  data: Project | null;
  isOpen: boolean;
  close: React.Dispatch<React.SetStateAction<boolean>>;
  target: HTMLElement | null;
}

const MOCK_IMAGES = [a, b, c, d];

const ProjectDetails = ({
  data,
  isOpen,
  close,
  target,
}: ProjectDetailsProps) => {
  if (!data) return null;
  if (!isOpen) return null;

  function releaseFreeze() {
    close(false);
    window.document.body.style.overflow = "auto";
    target?.scrollIntoView({ behavior: "instant" });
  }
  return (
    <div
      onClick={() => releaseFreeze()}
      className="fixed inset-0 z-60 bg-base-200/10 backdrop-blur-xl flex justify-center items-center p-4"
    >
      <div
        className="bg-base-300 rounded-xl shadow-2xl w-full max-w-5xl max-h-[90vh] overflow-hidden transform transition-all duration-300 scale-100"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Modal Scrollable Content Wrapper */}
        <motion.div
          initial={{ opacity: 0.5 }}
          animate={{ opacity: 1 }}
          className="overflow-y-auto max-h-[90vh]"
        >
          {/* Header with Close Button - Now STICKY relative to its scrollable parent */}
          <div className="sticky top-0 bg-base-300 p-6 flex justify-between items-center z-10">
            <h2 className="text-3xl font-extrabold font-heading">
              {data.title}
            </h2>
            <button
              onClick={releaseFreeze}
              className="p-2 rounded-full transition-color text-3xl font-bold hover:bg-white/10 cursor-pointer"
              aria-label="Close modal"
            >
              <MdClose />
            </button>
          </div>

          {/* Body Content */}
          <div className="p-6">
            {/* Image Placeholder */}
            <div className="mb-6 rounded-lg w-full aspect-video overflow-hidden">
              <CardCarousel items={MOCK_IMAGES}></CardCarousel>
            </div>

            {/* Description */}
            <div className="mb-6">
              <p className="text-lg text-neutral-500 leading-relaxed">
                {data.description}
              </p>
            </div>

            {/* Link Button */}
            <div className="mt-8 pt-4">
              <a
                href={data.link}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center w-full sm:w-auto px-6 py-3 border border-transparent text-base font-medium rounded-lg shadow-md text-white bg-primary hover:bg-primary/75 focus:outline-none focus:ring-2 focus:ring-offset-2"
              >
                View Live Project / Source
                <FaLink className="ml-2" size={18} />
              </a>
            </div>
          </div>
        </motion.div>
      </div>
    </div>
  );
};

export default ProjectDetails;
