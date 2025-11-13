import { TbBrandFigma } from "react-icons/tb";
import SkillsProgress from "./SkillsProgress";

const SkillsSection = () => {
  const skills = [
    { name: "Figma", value: 100, icon: <TbBrandFigma /> },
    { name: "Adobe XD", value: 100, icon: <TbBrandFigma /> },
    { name: "Adobe Photoshop", value: 80, icon: <TbBrandFigma /> },
    { name: "Adobe Illustrator", value: 70, icon: <TbBrandFigma /> },
    { name: " Adobe Premiere", value: 60, icon: <TbBrandFigma /> },
  ];

  return (
    <div
      // FIX: Replaced custom px-23 pt-30 with standard, responsive padding
      className={`bg-[#00000022] backdrop-blur-3xl mx-auto py-16 px-4 sm:px-8`}
    >
      <SkillsProgress skills={skills} />
    </div>
  );
};

export default SkillsSection;
