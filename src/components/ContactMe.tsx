import { motion } from "motion/react";
import { useContext, type FormEvent } from "react";
import type { BioDataResponse } from "../type";
import BioDataContext from "../context/bioContext";
const ContactMe = () => {
  const data = useContext<BioDataResponse | null>(BioDataContext);

  const handleStyling = (e: React.ChangeEvent<HTMLSelectElement>) => {
    if ((e.target as HTMLSelectElement).value !== "default") {
      (e.target as HTMLElement).style.color = "white";
    }
  };
  const serviceOfInterest = data?.services.map((service) => service.title);

  // Standard input/select styles combined with focus states
  const baseInputClasses = `
    w-full rounded-xl border border-base-300/10 bg-base-300 
    placeholder-primary-content/30 focus:outline-none
    transition-colors text-lg responsive-input
  `;

  // Adjusted button classes to match the 'btn-outline hover:bg-primary btn-border' style
  const buttonClasses = `
    rounded-xl responsive-btn  bg-transparent
    border-2 border-primary-content/10 cursor-pointer
    transition-opacity hover:opacity-60
    opacity-85 font-light btn lg:py-7
  `;

  const handleSubmit = (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Form submitted!");
  };

  return (
    <motion.div
      initial={{ opacity: 0, y: 50 }}
      whileInView={{ opacity: 1, y: 0 }}
      transition={{ duration: 1 }}
      viewport={{ once: true }}
      id="contact"
      className={`max-w-7xl mx-auto px-4 py-16 sm:px-8 md:px-12 lg:px-16`}
    >
      {/* Header Section */}
      <div className="flex flex-col gap-4 text-center mb-16">
        <h3 className="responsive-heading font-bold font-heading">
          Contact Me
        </h3>
        <p
          className={`responsive-paragraph opacity-70 text-primary-content/90 max-w-2xl mx-auto`}
        >
          Cultivating Connections: Reach Out and Connect with Me
        </p>
      </div>

      {/* Form Section */}
      <div className="mt-10 max-w-4xl mx-auto">
        <form onSubmit={handleSubmit} className="flex flex-col gap-4 lg:gap-8">
          {/* Top Row: Name, Phone, Timeline, Email (using a responsive grid) */}
          <div className="grid grid-cols-2 md:grid-cols-2 gap-4 lg:gap-8">
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
              onChange={handleStyling}
              defaultValue="Services of interest"
              className={`${baseInputClasses} select text-sm py-3 lg:text-lg text-primary-content/30 h-auto appearance-none`}
            >
              <option disabled={true} className="item">
                Services of interest
              </option>
              {serviceOfInterest?.map((service) => (
                <option
                  value={service}
                  key={service}
                  className="border-none p-4"
                >
                  {service}
                </option>
              ))}
            </select>

            {/* Timeline */}
            {/* <input
              type="text"
              placeholder="Timeline (e.g., 2-4 weeks)"
              className={baseInputClasses + "w-full"}
            /> */}
          </div>

          {/* Project Details (Textarea, spans full width) */}
          <textarea
            name="message"
            id="message"
            placeholder="Project Details..."
            className={`${baseInputClasses} h-40 resize-none`}
          ></textarea>

          {/* Submit Button */}
          <div className="pt-4 flex justify-end">
            <button type="submit" className={buttonClasses + "lg:py-6"}>
              {/* <div className="size-4 rounded-full border border-b-2 animate-spin"></div> */}
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
