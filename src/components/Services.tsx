import Card from "./Cards/Card";
import { useContext } from "react";
import type { BioDataResponse } from "../type";
import BioDataContext from "../context/bioContext";
import useIcons from "../hooks/useIcons";
import useFindIcon from "../hooks/useFindIcon";
import Main from "./Wrappers/Main";

const Services = () => {
  const data = useContext<BioDataResponse | null>(BioDataContext);
  const icons = useIcons();
  const findIcon = useFindIcon;

  console.log(
    icons.filter((icon) => icon.name === "brush")[0].variants.outline
  );

  return (
    <Main id="services" className="pb-12 pt-7 z-0">
      <div className="flex flex-col gap-6">
        <h3 className="text-center  font-semibold font-heading responsive-heading">
          Services
        </h3>
        <p className="responsive-paragraph opacity-70 text-center max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed incidunt
          dolores veritatis!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid mt-16 gap-4 md:gap-6 lg:gap-8 grid-cols-1 lg:grid-cols-3">
        {data?.services.map((service, i) => {
          return (
            <Card
              key={i}
              title={service.title}
              icon={findIcon(service.icon).variants.solid}
              description={service.description}
            />
          );
        })}
      </div>
    </Main>
  );
};

export default Services;
