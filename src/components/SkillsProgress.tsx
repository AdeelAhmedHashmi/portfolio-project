import type { CSSProperties, JSX } from "react";
import { motion } from "motion/react";

type SkillSet = Array<{
  value: number;
  name: string;
  icon: JSX.Element;
}>;

interface SkillsProgressProps {
  skills: SkillSet;
}
const SkillsProgress = ({ skills }: SkillsProgressProps) => {
  return (
    <div className="w-full grid grid-cols-2 grid-cols-auto-fit md:grid-cols-3 lg:grid-cols-5 xl:grid-cols-7 gap-y-12 gap-x-8 text-center p-5">
      {skills.map((skill) => {
        return (
          <div key={skill.name} className="flex flex-col items-center">
            <div className="flex flex-col items-center">
              {/* <RadialProgress value={skill.value} icon={skill.icon} /> */}
              <motion.div
                initial={{
                  "--value": 0,
                }}
                whileInView={{
                  "--value": skill.value,
                }}
                className="radial-progress text-5xl text-primary"
                style={{ "--size": "7rem" } as CSSProperties}
                aria-valuenow={70}
                role="progressbar"
              >
                <div className="text-primary-content opacity-50">
                  {skill.icon}
                </div>
              </motion.div>
            </div>

            <div>
              <h3
                className={`responsive-progress-value mt-4 mb-2 text-primary font-bold`}
              >
                {skill.value}%
              </h3>
              <p
                className={`responsive-progress-heading font-semibold text-primary-content/40`}
              >
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
