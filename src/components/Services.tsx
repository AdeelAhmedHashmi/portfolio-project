import {
  IoLogoPython,
  IoMdBrowsers,
  IoMdDesktop,
  IoMdPhonePortrait,
  IoMdPhotos,
  IoMdVideocam,
} from "react-icons/io";
import Card from "./Cards/Card";

// const Services = () => {
//   const cards = [
//     { title: "App Design", icon: <IoMdPhonePortrait /> },
//     { title: "Photo Editing", icon: <IoMdPhotos /> },
//     { title: "Web development", icon: <IoMdBrowsers /> },
//     { title: "Python Scripting", icon: <IoLogoPython /> },
//     { title: "Web Designing", icon: <IoMdDesktop /> },
//     { title: "Video Editing", icon: <IoMdVideocam /> },
//   ];

//   return (
//     <div
//       id="services"
//       className="px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-23 pt-20 font-sans"
//     >
//       <div className="flex flex-col gap-8">
//         <h3 className="text-center text-5xl font-semibold">Services</h3>
//         <p className="text-2xl opacity-55 text-center">
//           Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sed incidunt
//           dolores veritatis!
//         </p>
//       </div>
//       {/* Cards  */}
//       <div className="grid mt-27 justify-items-center border sm:grid-cols-1 lg:grid-cols-3 gap-y-12">
//         {cards.map((card, i) => {
//           return (
//             <Card
//               key={i}
//               title={card.title}
//               icon={card.icon}
//               description={
//                 "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit met consectetur"
//               }
//             />
//           );
//         })}
//       </div>
//     </div>
//   );
// };

// export default Services;

const Services = () => {
  const cards = [
    { title: "App Design", icon: <IoMdPhonePortrait className="text-6xl" /> },
    { title: "Photo Editing", icon: <IoMdPhotos className="text-6xl" /> },
    { title: "Web development", icon: <IoMdBrowsers className="text-6xl" /> },
    { title: "Python Scripting", icon: <IoLogoPython className="text-6xl" /> },
    { title: "Web Designing", icon: <IoMdDesktop className="text-6xl" /> },
    { title: "Video Editing", icon: <IoMdVideocam className="text-6xl" /> },
  ];

  return (
    <div
      id="services"
      // FIX: Used max-w-7xl mx-auto to center content and prevent horizontal overflow
      // FIX: Removed non-standard xl:px-23
      className="mx-auto px-4 lg:py-12 pb-10 sm:px-8 md:px-12 lg:px-16 lg:pt-20 font-sans "
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
      <div className="grid mt-16 gap-y-12 gap-x-8 grid-cols-1 sm:grid-cols-2 lg:grid-cols-3">
        {cards.map((card, i) => {
          return (
            <Card
              key={i}
              title={card.title}
              icon={card.icon}
              description={
                "Lorem ipsum dolor sit amet. Imperdiet Lorem ipsum dolor sit met consectetur"
              }
            />
          );
        })}
      </div>
    </div>
  );
};

export default Services;
