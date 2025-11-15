import SocialLinks from "./SocialLinks";
import { MdOutlineLocalPhone } from "react-icons/md";
import { HiOutlineMail } from "react-icons/hi";
import Navigation from "./Navigation";
import type { BioDataResponse } from "../type";
import BioDataContext from "../context/bioContext";
import { useContext } from "react";
import Main from "./Wrappers/Main";

const Footer = () => {
  const data = useContext<BioDataResponse | null>(BioDataContext);

  return (
    <Main className="pb-7 py-14 bg-base-300 mt-50 text-neutral-400">
      <div className="flex flex-col gap-15">
        {/* logo  */}
        <h3 className="text-4xl font-semibold text-primary text-center font-heading">
          Akhlas.
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
            <span className="font-semibold text-lg lg:text-xl">
              {data?.contactInfo.email}
            </span>
          </div>
          <div className="flex gap-4 align-middle justify-center">
            <MdOutlineLocalPhone className="text-3xl" />
            <span className="font-semibold text-lg text-nowrap lg:text-xl">
              {data?.contactInfo.phone}
            </span>
          </div>
        </div>
      </div>
    </Main>
  );
};

export default Footer;
