import Card from "./Cards/Card";
import { useContext } from "react";
import type { BioDataResponse } from "../type";
import BioDataContext from "../context/bioContext";
import useIcons from "../data/icons";
import useFindIcon from "../hooks/useFindIcon";

const Services = () => {
  const data = useContext<BioDataResponse | null>(BioDataContext);
  const icons = useIcons();
  const findIcon = useFindIcon;

  console.log(
    icons.filter((icon) => icon.name === "brush")[0].variants.outline
  );

  return (
    <div
      id="services"
      // FIX: Used max-w-7xl mx-auto to center content and prevent horizontal overflow
      // FIX: Removed non-standard xl:px-23
      className="px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-23 pt-20 font-sans"
    >
      <div className="flex flex-col gap-6">
        <h3 className="text-center text-4xl sm:text-5xl font-semibold">
          Services
        </h3>
        <p className="text-lg sm:text-xl opacity-70 text-center max-w-2xl mx-auto">
          Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed incidunt
          dolores veritatis!
        </p>
      </div>

      {/* Cards Grid */}
      <div className="grid mt-16 gap-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
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
    </div>
  );
};

export default Services;
