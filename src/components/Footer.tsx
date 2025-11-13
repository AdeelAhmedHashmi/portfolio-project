import SocialLinks from "./SocialLinks";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Navigation from "./Navigation";

const Footer = () => {
  return (
    <div className="px-23 pb-7 py-14 bg-base-300 mt-50 text-neutral-400">
      <div className="flex flex-col gap-15">
        {/* logo  */}
        <h3 className="text-4xl font-semibold text-primary text-center">
          LOGO
        </h3>

        {/* navigations  */}
        <div className="flex justify-center">
          <ul className="flex flex-wrap justify-center cursor-pointer text-xl font-semibold gap-15">
            <Navigation />
          </ul>
        </div>

        {/* social links  */}
        <div className="flex justify-center">
          <SocialLinks />
        </div>

        {/* contacts  */}
        <div className="flex flex-wrap justify-center gap-y-4 gap-x-10">
          <div className="flex gap-4 align-middle justify-center">
            <HiOutlineMail className="text-3xl" />
            <span className="font-semibold text-xl">
              akhlasahmed.ah@gmail.com
            </span>
          </div>
          <div className="flex gap-4 align-middle justify-center">
            <MdOutlineLocalPhone className="text-3xl" />
            <span className="font-semibold text-xl">+92 345 345 623</span>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
