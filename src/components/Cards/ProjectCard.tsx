import { motion } from "motion/react";
import CardCarousel from "../Carousels/CardCarousel";

interface CardProps {
  projectImages: Array<string>;
  projectName: string;
  category: string;
}
const ProjectCard = ({ projectImages, projectName, category }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0 }}
      whileInView={{
        opacity: 1,
      }}
      className="bg-base-300 relative w-6xl h-7xl cursor-pointer border rounded-4xl hover:shadow-sm hover:scale-102 transition-all shadow-primary overflow-hidden"
    >
      <figure className="w-full h-full left-0 object-cover">
        <CardCarousel items={projectImages} />
      </figure>
      <div className="flex px-6 pb-4 *:text-lg opacity-50 font-semibold items-center text-center justify-between">
        <div>{projectName}</div>
        <div>{category}</div>
      </div>
    </motion.div>
  );
};

export default ProjectCard;
