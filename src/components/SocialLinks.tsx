import { HiOutlineMail } from "react-icons/hi";
import { VscGithub } from "react-icons/vsc";
import { TbBrandLinkedin } from "react-icons/tb";

const SocialLinks = () => {
  return (
    <div>
      <div className="flex flex-nowrap translate-x-1 *:border *:backdrop-blur-3xl *:bg-[#00000022] *:border-neutral-700 *:rounded-full *:p-2 *:scale-140 gap-9 ">
        <div>
          <a href="#" className="size-5 flex align-middle justify-center">
            <TbBrandLinkedin className="text-xl opacity-80" />
          </a>
        </div>

        <div>
          <a href="#" className="size-5 flex align-middle justify-center">
            <VscGithub className="text-xl opacity-80" />
          </a>
        </div>

        <div>
          <a href="#" className="size-5 flex align-middle justify-center">
            <HiOutlineMail className="text-xl opacity-80" />
          </a>
        </div>
      </div>
    </div>
  );
};

export default SocialLinks;
