import ProjectCard from "./Cards/ProjectCard";
import a from "../assets/projects/a.jpg";
import b from "../assets/projects/b.jpg";

const Portfolio = () => {
  const projectsCategories = [
    "Website Design",
    "Mobile App Design",
    "App Desktop",
    "Braiding",
  ];
  const projectImages = [a, b, a, b, a, b];
  return (
    <div id="portfolio" className="px-23 py-20 pt-30">
      {/* title Header  */}
      <div>
        <h3 className="text-center text-5xl font-semibold">Portfolio</h3>
        <div className="flex flex-wrap align-middle justify-center gap-10 p-10">
          <button className="btn btn-xl bg-base-300 hover:bg-primary py-8 text-xl">
            All
          </button>
          {projectsCategories.map((catagory) => {
            return (
              <button className="btn btn-xl bg-base-300 hover:bg-primary py-8 text-xl">
                {catagory}
              </button>
            );
          })}
        </div>
      </div>

      {/* Project Cards  */}
      <div className="mt-9 grid lg:grid-cols-2 xl:grid-cols-3 gap-6 justify-center">
        {projectImages.map((_, i) => {
          return (
            <ProjectCard
              key={i}
              category={"category"}
              projectImages={projectImages}
              projectName="Project Name"
            />
          );
        })}
      </div>
    </div>
  );
};

export default Portfolio;
