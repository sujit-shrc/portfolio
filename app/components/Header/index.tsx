import { FaFilePdf, FaLinkedinIn } from "react-icons/fa";
import { ImGithub } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { PiInstagramLogoFill } from "react-icons/pi";
import SocialLink from "./SocialLinks";
import ThemeSwitch from "../ThemeSwitcher";


const socialLinks = [
  { href: "#", icon: <FaFilePdf size={28} className="" /> },
  { href: "#", icon: <ImGithub size={30} className="" /> },
  {
    href: "#",
    icon: <FaLinkedinIn size={30} className="" />,
  },
  {
    href: "#",
    icon: <PiInstagramLogoFill size={30} className="" />,
  },
  { href: "#", icon: <GrTwitter size={30} className="" /> },
];

const Header: React.FC = () => {
  return (
    <div
      className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex"
    >
      <p className="fixed left-0 top-0 flex w-full justify-center border-b border-gray-300 pb-6 pt-8 backdrop-blur-2xl dark:border-neutral-800 lg:static lg:w-auto lg:rounded-full lg:border lg:p-3.5">
        <code className="font-mono font-bold">FullStack/StackShow/Nucleus</code>
      </p>
      <div
        className="fixed bottom-0 left-0 flex space-x-3 h-48 w-full items-end justify-center lg:static lg:h-auto lg:w-auto "
      >
        {socialLinks.map((link, index) => (
          <SocialLink key={index} href={link.href} icon={link.icon} />
        ))}
      </div>

      {/* Theme Switcher */}
      <ThemeSwitch />
    </div>
  );
};
export default Header;
