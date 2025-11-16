import { TbBrandFigma } from "react-icons/tb";
import SkillsProgress from "./SkillsProgress";
import { useContext } from "react";
import type { BioDataResponse } from "../type";
import BioDataContext from "../context/bioContext";

const SkillsSection = () => {
  const data = useContext<BioDataResponse | null>(BioDataContext);
  const skills =
    data?.skills.map((skill) => ({
      name: skill.name,
      value: skill.level,
      icon: <TbBrandFigma />,
    })) || [];

  return (
    <div className={`flex justify-between mx-auto mt-10 py-16 md:px-4 lg:px-8`}>
      <SkillsProgress skills={skills} />
    </div>
  );
};

export default SkillsSection;
