import type { JSX } from "react";
import React, { useEffect, useRef, useState } from "react";

type SkillSet = Array<{
  value: number;
  name: string;
  icon: JSX.Element;
}>;

interface SkillsProgressProps {
  skills: SkillSet;
}
const ACCENT_COLOR_HEX = "#f97316"; // Tailwind orange-500

// const SkillsProgress = ({ skills }: SkillsProgressProps) => {
//   return (
//     <div className="lg:flex lg:flex-wrap lg:justify-between gap-20 p-5 text-center">
//       {skills.map((skill) => {
//         return (
//           <div className="w-50">
//             <div>
//               <motion.div
//                 initial={{ "--value": 0 }}
//                 whileInView={{ "--value": skill.value }}
//                 viewport={{ once: true }}
//                 className="radial-progress text-primary text-5xl size-33 after:hidden border-primary "
//                 style={
//                   {
//                     "--value": skill.value,
//                     "--thickness": "0.8rem",
//                   } as React.CSSProperties
//                 }
//                 aria-valuenow={skill.value}
//                 role="progressbar"
//               >
//                 <div className="text-neutral-400">{skill.icon}</div>
//               </motion.div>
//             </div>
//             <div>
//               <h3 className="text-4xl m-3 mt-5 text-primary font-bold">
//                 {skill.value}%
//               </h3>
//               <p className="font-bold text-2xl text-neutral-400">
//                 {skill.name}
//               </p>
//             </div>
//           </div>
//         );
//       })}
//     </div>
//   );
// };

interface RadialProgressProps {
  value: number;
  icon: JSX.Element;
}

const RadialProgress = ({ value, icon }: RadialProgressProps) => {
  const [currentValue, setCurrentValue] = useState(0);
  const ref = useRef(null);

  const SIZE = 120; // Size in pixels for the SVG container
  const STROKE_WIDTH = 10; // Thickness (0.8rem)
  const RADIUS = SIZE / 2 - STROKE_WIDTH / 2;
  const CIRCUMFERENCE = 2 * Math.PI * RADIUS;

  useEffect(() => {
    let start: number;
    const duration = 1500; // 1.5 seconds

    const animate = (timestamp: number) => {
      if (!start) start = timestamp;
      const progress = timestamp - start;
      const percentage = Math.min(progress / duration, 1);
      setCurrentValue(Math.floor(value * percentage));

      if (progress < duration) {
        requestAnimationFrame(animate);
      }
    };

    const observer = new IntersectionObserver(([entry]) => {
      if (entry.isIntersecting) {
        requestAnimationFrame(animate);
        observer.unobserve(entry.target);
      }
    });

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [value]);

  const strokeDashoffset = CIRCUMFERENCE - (currentValue / 100) * CIRCUMFERENCE;

  return (
    <div ref={ref} className="relative inline-flex items-center justify-center">
      <svg
        className="w-32 h-32 transform -rotate-90"
        viewBox={`0 0 ${SIZE} ${SIZE}`}
      >
        {/* Background Trace */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke="rgba(255, 255, 255, 0.1)" // Light trace color
          strokeWidth={STROKE_WIDTH}
        />
        {/* Progress Arc (text-primary) */}
        <circle
          cx={SIZE / 2}
          cy={SIZE / 2}
          r={RADIUS}
          fill="none"
          stroke={ACCENT_COLOR_HEX}
          strokeWidth={STROKE_WIDTH}
          strokeDasharray={CIRCUMFERENCE}
          strokeDashoffset={strokeDashoffset}
          strokeLinecap="round"
          style={{ transition: "stroke-dashoffset 0.5s ease-out" }} // Smooth transition for updates
        />
      </svg>

      {/* Content in the center (Icon and Value) */}
      <div
        className={`absolute flex flex-col items-center justify-center text-7xl scale-140 text-neutral-400`}
      >
        {/* Icon */}
        {React.cloneElement(icon, { className: "w-10 h-10" })}
      </div>
    </div>
  );
};

const SkillsProgress = ({ skills }: SkillsProgressProps) => {
  return (
    <div className="w-full grid grid-cols-2 grid-cols-auto-fit md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-y-12 gap-x-8 text-center p-5">
      {skills.map((skill) => {
        return (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              <RadialProgress value={skill.value} icon={skill.icon} />
            </div>

            <div>
              <h3 className={`text-3xl mt-4 mb-2 text-primary font-bold`}>
                {skill.value}%
              </h3>
              <p className={`font-semibold text-xl text-neutral-400`}>
                {skill.name}
              </p>
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkillsProgress;
