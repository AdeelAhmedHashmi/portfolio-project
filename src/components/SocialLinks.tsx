import { HiOutlineMail } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import { TbBrandLinkedin } from "react-icons/tb";

const SocialLinks = () => {
  return (
    <div>
      <div className="flex flex-nowrap translate-x-1 *:border *:bg-base-200 *:border-neutral-700 *:rounded-full *:p-2 *:scale-140 gap-9 ">
        <div>
          <a href="#">
            <TbBrandLinkedin className="text-xl scale-100 opacity-80" />
          </a>
        </div>

        <div>
          <a href="#">
            <VscGithub className="text-xl scale-100 opacity-80" />
          </a>
        </div>

        <div>
          <a href="#">
            <HiOutlineMail className="text-xl scale-100 opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
