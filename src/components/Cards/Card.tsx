import type { JSX } from "react";
import { motion } from "motion/react";

interface CardProps {
  title: string;
  icon?: JSX.Element;
  description: string;
}

const Card = ({ title, icon, description }: CardProps) => {
  return (
    <motion.div
      initial={{ opacity: 0, y: -6 }}
      whileInView={{ opacity: 1, y: 0 }}
      className={`
        w-full max-w-xl grow mx-auto rounded-3xl
        bg-base-300 responsive-card-pad
        cursor-pointer transition-transform hover:scale-[1.03] 
        shadow-lg  hover:shadow-[#4242428f]
      `}
    >
      <div className="items-center flex flex-col responsive-card-layout text-center">
        {/* Icon */}
        <div className={`responsive-card-icons text-primary`}>{icon}</div>

        {/* Title */}
        <h2 className={`responsive-card-title font-semibold text-primary`}>
          {title}
        </h2>

        {/* Description */}
        <p
          className={`responsive-paragraph opacity-70 md:pt-3 text-neutral-500`}
        >
          {description}
        </p>
      </div>
    </motion.div>
  );
};

export default Card;
