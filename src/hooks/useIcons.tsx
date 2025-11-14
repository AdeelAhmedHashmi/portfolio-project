import {
  FaGithub,
  FaLinkedin,
  FaTwitter,
  FaMobileAlt,
  FaBrush,
  FaLink,
  FaTachometerAlt,
  FaEnvelope,
  FaPhone,
  FaMapMarkerAlt,
  FaBriefcase,
  FaProjectDiagram,
  FaSmile,
  FaCode,
  FaFire,
  FaDatabase,
  FaServer,
  FaGitAlt,
  FaPalette,
  FaCogs,
  FaLaptopCode,
  FaRocket,
  FaShoppingCart,
  FaTasks,
  FaGlobe,
  FaBox,
} from "react-icons/fa";
import {
  MdSmartphone,
  MdBrush,
  MdSpeed,
  MdEmail,
  MdPhone,
  MdLocationOn,
} from "react-icons/md";
import {
  IoMdSpeedometer,
  IoMdPhonePortrait,
  IoMdBrush,
  IoMdLink,
} from "react-icons/io";
import {
  AiOutlineGithub,
  AiOutlineLinkedin,
  AiOutlineTwitter,
  AiFillGithub,
  AiFillLinkedin,
  AiFillTwitterSquare,
} from "react-icons/ai";

const useIcons = () => {
  return [
    {
      name: "github",
      variants: {
        solid: <AiFillGithub />,
        outline: <AiOutlineGithub />,
        default: <FaGithub />,
      },
    },
    {
      name: "linkedin",
      variants: {
        solid: <AiFillLinkedin />,
        outline: <AiOutlineLinkedin />,
        default: <FaLinkedin />,
      },
    },
    {
      name: "twitter",
      variants: {
        solid: <AiFillTwitterSquare />,
        outline: <AiOutlineTwitter />,
        default: <FaTwitter />,
      },
    },
    {
      name: "smartphone",
      variants: {
        solid: <FaMobileAlt />,
        outline: <MdSmartphone />,
        default: <IoMdPhonePortrait />,
      },
    },
    {
      name: "brush",
      variants: {
        solid: <FaBrush />,
        outline: <MdBrush />,
        default: <IoMdBrush />,
      },
    },
    {
      name: "link",
      variants: {
        solid: <FaLink />,
        outline: <IoMdLink />,
        default: <FaLink />,
      },
    },
    {
      name: "speedometer",
      variants: {
        solid: <FaTachometerAlt />,
        outline: <IoMdSpeedometer />,
        default: <MdSpeed />,
      },
    },
    {
      name: "email",
      variants: {
        solid: <FaEnvelope />,
        outline: <MdEmail />,
        default: <FaEnvelope />,
      },
    },
    {
      name: "phone",
      variants: {
        solid: <FaPhone />,
        outline: <MdPhone />,
        default: <FaPhone />,
      },
    },
    {
      name: "location",
      variants: {
        solid: <FaMapMarkerAlt />,
        outline: <MdLocationOn />,
        default: <FaMapMarkerAlt />,
      },
    },
    {
      name: "briefcase",
      variants: {
        solid: <FaBriefcase />,
        outline: <FaBriefcase />,
        default: <FaBriefcase />,
      },
    },
    {
      name: "project",
      variants: {
        solid: <FaProjectDiagram />,
        outline: <FaProjectDiagram />,
        default: <FaProjectDiagram />,
      },
    },
    {
      name: "smile",
      variants: {
        solid: <FaSmile />,
        outline: <FaSmile />,
        default: <FaSmile />,
      },
    },
    {
      name: "code",
      variants: {
        solid: <FaCode />,
        outline: <FaCode />,
        default: <FaCode />,
      },
    },
    {
      name: "fire",
      variants: {
        solid: <FaFire />,
        outline: <FaFire />,
        default: <FaFire />,
      },
    },
    {
      name: "database",
      variants: {
        solid: <FaDatabase />,
        outline: <FaDatabase />,
        default: <FaDatabase />,
      },
    },
    {
      name: "server",
      variants: {
        solid: <FaServer />,
        outline: <FaServer />,
        default: <FaServer />,
      },
    },
    {
      name: "git",
      variants: {
        solid: <FaGitAlt />,
        outline: <FaGitAlt />,
        default: <FaGitAlt />,
      },
    },
    {
      name: "palette",
      variants: {
        solid: <FaPalette />,
        outline: <FaPalette />,
        default: <FaPalette />,
      },
    },
    {
      name: "cogs",
      variants: {
        solid: <FaCogs />,
        outline: <FaCogs />,
        default: <FaCogs />,
      },
    },
    {
      name: "laptop",
      variants: {
        solid: <FaLaptopCode />,
        outline: <FaLaptopCode />,
        default: <FaLaptopCode />,
      },
    },
    {
      name: "rocket",
      variants: {
        solid: <FaRocket />,
        outline: <FaRocket />,
        default: <FaRocket />,
      },
    },
    {
      name: "cart",
      variants: {
        solid: <FaShoppingCart />,
        outline: <FaShoppingCart />,
        default: <FaShoppingCart />,
      },
    },
    {
      name: "tasks",
      variants: {
        solid: <FaTasks />,
        outline: <FaTasks />,
        default: <FaTasks />,
      },
    },
    {
      name: "globe",
      variants: {
        solid: <FaGlobe />,
        outline: <FaGlobe />,
        default: <FaGlobe />,
      },
    },
    {
      name: "box",
      variants: {
        solid: <FaBox />,
        outline: <FaBox />,
        default: <FaBox />,
      },
    },
  ];
};

export default useIcons;
