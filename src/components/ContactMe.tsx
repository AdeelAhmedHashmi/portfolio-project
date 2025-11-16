import { motion } from "motion/react";
import { useContext, type FormEvent } from "react";
import type { BioDataResponse } from "../type";
import BioDataContext from "../context/bioContext";
const ContactMe = () => {
  const data = useContext<BioDataResponse | null>(BioDataContext);

  const serviceOfInterest = data?.services.map((service) => service.title);

  // Standard input/select styles combined with focus states
  const baseInputClasses = `
    w-full rounded-xl border border-neutral-800 bg-base-300 
    placeholder-neutral-500 focus:outline-none
    focus:ring-2 focus:ring-primary focus:border-primary 
    transition-colors text-lg responsive-input
  `;

  // Adjusted button classes to match the 'btn-outline hover:bg-primary btn-border' style
  const buttonClasses = `
    rounded-xl font-bold responsive-btn  
    border-2 border-neutral-500 cursor-pointer
    transition-colors hover:bg-primary
    hover:border-transparent opacity-85
    btn
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
      className={`max-w-7xl mx-auto px-4 py-16 sm:px-8 md:px-12 lg:px-16 pt-20`}
    >
      {/* Header Section */}
      <div className="flex flex-col gap-4 text-center mb-16">
        <h3 className="responsive-heading font-bold font-heading">
          Contact Me
        </h3>
        <p
          className={`responsive-paragraph opacity-70 text-neutral-400 max-w-2xl mx-auto`}
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
              className={`${baseInputClasses} text-sm lg:text-lg text-neutral-500 h-auto appearance-none`}
            >
              <option disabled={true}>Services of interest</option>
              {serviceOfInterest?.map((service) => (
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
            <button type="submit" className={buttonClasses + "lg:py-6"}>
              <div className="size-4 rounded-full border border-b-2 animate-spin"></div>
              Send Message
            </button>
          </div>
        </form>
      </div>
    </motion.div>
  );
};

export default ContactMe;
