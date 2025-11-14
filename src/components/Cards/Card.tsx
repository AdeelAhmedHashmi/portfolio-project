import type { JSX } from "react";
import { motion } from "motion/react";

interface CardProps {
  title: string;
  icon?: JSX.Element;
  description: string;
}

const Card = ({ title, icon, description }: CardProps) => {
  // Removed motion.div and type JSX import for compilation stability
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`
        w-full max-w-xl grow mx-auto p-8 rounded-3xl
        bg-base-300
        cursor-pointer transition-transform hover:scale-[1.03] 
        shadow-lg  hover:shadow-[#4242428f] border border-neutral-800
      `}
    >
      <div
        // card-body items-center flex flex-col gap-7 text-center text-primary
        className="items-center flex flex-col gap-6 text-center"
      >
        {/* Icon */}
        <div className={`text-6xl text-primary`}>{icon}</div>

        {/* Title */}
        <h2
          // card-title text-3xl font-semibold text-primary
          className={`text-3xl font-semibold text-primary`}
        >
          {title}
        </h2>

        {/* Description */}
        <p
          // text-2xl text-primary-content opacity-30 pt-3
          className={`text-xl opacity-70 pt-3 text-neutral-500`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
