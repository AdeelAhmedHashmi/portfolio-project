import { TbBrandFigma } from "react-icons/tb";
import SkillsProgress from "./SkillsProgress";
import { useContext } from "react";
import type { BioDataResponse } from "../type";
import BioDataContext from "../context/bioContext";

const SkillsSection = () => {
  const data = useContext<BioDataResponse | null>(BioDataContext);

  // const skills = [
  //   { name: "Figma", value: 100, icon: <TbBrandFigma /> },
  //   { name: "Adobe XD", value: 100, icon: <TbBrandFigma /> },
  //   { name: "Adobe Photoshop", value: 80, icon: <TbBrandFigma /> },
  //   { name: "Adobe Illustrator", value: 70, icon: <TbBrandFigma /> },
  //   { name: " Adobe Premiere", value: 60, icon: <TbBrandFigma /> },
  // ];

  const skills =
    data?.skills.map((skill) => ({
      name: skill.name,
      value: skill.level,
      icon: <TbBrandFigma />,
    })) || [];

  return (
    <div className={`flex justify-between mx-auto mt-10 py-16 px-4 sm:px-8`}>
      <SkillsProgress skills={skills} />
    </div>
  );
};

export default SkillsSection;
