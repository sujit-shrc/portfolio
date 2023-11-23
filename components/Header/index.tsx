"use client"

import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { ImGithub } from "react-icons/im";
import { GrTwitter } from "react-icons/gr";
import { PiInstagramLogoFill } from "react-icons/pi";
import { TbSocial } from "react-icons/tb";
import SocialLink from "./SocialLinks";
import ThemeSwitch from "../ThemeSwitcher";
import ScanMe from "../ScanMe";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/mnamesujit", icon: <ImGithub className="text-3xl" /> },
  {
    href: "https://www.linkedin.com/in/mnamesujit",
    icon: <FaLinkedinIn className="text-3xl" />,
  },
  {
    href: "#",
    icon: <PiInstagramLogoFill className="text-3xl" />,
  },
  { href: "https://twitter.com/mnamesujit", icon: <GrTwitter className="text-3xl" /> },
  { href: "/sujit-kumar.pdf", icon: <FaFilePdf className="text-[1.7rem]" download = "sujit-kumar.pdf" /> },
];

const Header: React.FC = () => {

  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const toggleSocialLinks = () => {
    setShowSocialLinks(!showSocialLinks);
  };

  return (
    <div className="z-10 max-w-5xl w-full flex items-center justify-between font-mono px-0 pr-4 md:px-6 border-b border-gray-300 dark:border-neutral-800 md:border-none">
      <Link href={"/"}>
        <p className="md:border-b border-gray-300 p-4 md:p-3  md:px-5 lg:py-3 md:backdrop-blur-2xl dark:border-neutral-800 md:w-auto md:rounded-full md:border">
          <code className="font-mono text-base md:text-sm font-bold">
            <span className="hidden md:inline">FullStack/StackShow</span>
            /Nucleus.dev
          </code>
        </p>
      </Link>

      <div className="hidden lg:flex space-x-3 items-end justify-center lg:h-auto lg:w-auto group-hover:flex">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.href} icon={link.icon} />
            ))}
      </div>

      {/* Mobile View for Social links */}
      <TbSocial size={50} className="sm:hidden fixed left-[13px] bottom-0 z-50 bg-white text-black rounded-full cursor-pointer p-3 mb-3 animate-bounce ${showSocialLinks ? 'animate-none' : ''}`}" onClick = {toggleSocialLinks} />
       {showSocialLinks && (
        <div className="sm:hidden fixed left-3 bottom-9 py-2 pb-12 bg-neutral-800 rounded-full z-40 text-md">
          {socialLinks.map((link, index) => (
            <SocialLink key={index} href={link.href} icon={link.icon} />
          ))}
        </div>
      )}

      <div className="flex items-center gap-4 md:gap-8">
        {/* Theme Switcher */}
        <ThemeSwitch />
        <ScanMe />  
      </div>
    </div>
  );
};
export default Header;
