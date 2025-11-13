// const ContactMe = () => {
//   const serviceOfInterest = ["Designing", "Editing", "Development"];
//   return (
//     <div
//       id="contact"
//       className="px-4 py-12 sm:px-8 md:px-16 lg:px-24 xl:px-23 pt-20 font-sans "
//     >
//       <div className="flex flex-col gap-8">
//         <h3 className="text-center text-5xl font-semibold">Contact Me</h3>
//         <p className="text-2xl opacity-55 text-center">
//           Cultivating Connections: Reach Out and Connect with Me
//         </p>
//       </div>
//       <div className="mt-20">
//         <form className="flex justify-center flex-wrap content-center">
//           {/* left  */}
//           {/* <div className="flex flex-col gap-4"> */}
//           <motion.input
//             initial={{ scale: 0.8, opacity: 0.5 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             type="text"
//             placeholder="Name"
//             className="input input-xl"
//           />
//           <motion.input
//             initial={{ scale: 0.8, opacity: 0.5 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             type="text"
//             placeholder="Phone Number"
//             className="input input-xl"
//           />
//           <motion.input
//             initial={{ scale: 0.8, opacity: 0.5 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             type="text"
//             placeholder="Timeline"
//             className="input input-xl"
//           />
//           {/* </div> */}

import type { FormEvent } from "react";

//           {/* right */}
//           {/* <div className="flex flex-col gap-4"> */}
//           <motion.input
//             initial={{ scale: 0.8, opacity: 0.5 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             type="email"
//             placeholder="Email"
//             className="input validator input-xl"
//           />
//           <motion.select
//             initial={{ scale: 0.8, opacity: 0.5 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             defaultValue="Services of interest"
//             className="select h-18 select-xl text-neutral-500"
//           >
//             <option disabled={true}>Services of interest</option>
//             {serviceOfInterest.map((service) => {
//               return <option>{service}</option>;
//             })}
//           </motion.select>
//           <motion.textarea
//             initial={{ scale: 0.8, opacity: 0.5 }}
//             whileInView={{ scale: 1, opacity: 1 }}
//             name="message"
//             id="message"
//             placeholder="Project Details..."
//             className="input -translate-y-3 mt-7 input-xl h-60 resize-none"
//           ></motion.textarea>
//           <br />
//           <div className="">
//             <button className="btn ml-100 btn-xl btn-outline hover:bg-primary btn-border opacity-75">
//               Send
//             </button>
//           </div>
//           {/* </div> */}
//         </form>
//       </div>
//     </div>
//   );
// };

const ContactMe = () => {
  const serviceOfInterest = ["Designing", "Editing", "Development"];

  // Standard input/select styles combined with focus states
  const baseInputClasses = `
    w-full p-4 rounded-xl border border-neutral-800 bg-base-300 
    placeholder-neutral-500 focus:outline-none 
    focus:ring-2 focus:ring-primary focus:border-primary 
    transition-colors text-lg
  `;

  // Adjusted button classes to match the 'btn-outline hover:bg-primary btn-border' style
  const buttonClasses = `
    px-8 py-7 rounded-xl font-bold text-lg 
    border-2 border-neutral-500 cursor-pointer
    transition-colors hover:bg-primary
    hover:border-transparent opacity-85
    btn
  `;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    // Placeholder for form submission logic
    console.log("Form submitted!");
  };

  return (
    <div
      id="contact"
      className={`max-w-7xl mx-auto px-4 py-16 sm:px-8 md:px-12 lg:px-16 pt-20 font-sans bg-[#00000022] backdrop-blur-3xl`}
    >
      {/* Header Section */}
      <div className="flex flex-col gap-4 text-center mb-16">
        <h3 className="text-4xl sm:text-5xl font-bold">Contact Me</h3>
        <p
          className={`text-xl sm:text-2xl opacity-70 text-neutral-400 max-w-2xl mx-auto`}
        >
          Cultivating Connections: Reach Out and Connect with Me
        </p>
      </div>

      {/* Form Section */}
      <div className="mt-10 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-6">
          {/* Top Row: Name, Phone, Timeline, Email (using a responsive grid) */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            {/* Name */}
            <input
              type="text"
              placeholder="Name"
              className={baseInputClasses}
            />

            {/* Email (Moved to be next to Name on desktop) */}
            <input
              type="email"
              placeholder="Email"
              className={baseInputClasses}
            />

            {/* Phone Number */}
            <input
              type="text"
              placeholder="Phone Number"
              className={baseInputClasses}
            />

            {/* Services of interest (Select) */}
            <select
              defaultValue="Services of interest"
              className={`${baseInputClasses} h-auto appearance-none`}
            >
              <option disabled={true}>Services of interest</option>
              {serviceOfInterest.map((service) => (
                <option key={service} className=" border-none p-4">
                  {service}
                </option>
              ))}
            </select>

            {/* Timeline */}
            <input
              type="text"
              placeholder="Timeline (e.g., 2-4 weeks)"
              className={baseInputClasses}
            />
          </div>

          {/* Project Details (Textarea, spans full width) */}
          <textarea
            name="message"
            id="message"
            placeholder="Project Details..."
            // FIX: Replaced custom h-60 and input-xl with standard h-40 and padding
            className={`${baseInputClasses} h-40 resize-none`}
          ></textarea>

          {/* Submit Button */}
          <div className="pt-4 flex justify-end">
            <button type="submit" className={buttonClasses}>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </div>
  );
};

export default ContactMe;
