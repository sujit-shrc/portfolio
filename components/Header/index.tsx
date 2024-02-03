"use client"

import { useState } from "react";
import { FaLinkedinIn } from "react-icons/fa";
import { FaFilePdf } from "react-icons/fa6";
import { IoExit } from "react-icons/io5";
import { FaGithubAlt } from "react-icons/fa6";
import { FaXTwitter } from "react-icons/fa6";
import { VscTerminalBash } from "react-icons/vsc";
import { TbSocial } from "react-icons/tb";
import { CgMenuGridO } from "react-icons/cg";
import SocialLink from "./SocialLinks";
import ThemeSwitch from "../ThemeSwitcher";
import ScanMe from "../ScanMe";
import Link from "next/link";

const socialLinks = [
  { href: "https://github.com/mnamesujit", icon: <FaGithubAlt className="text-[1.7rem]" /> },
  { href: "https://github.com/mnamesujit", icon: <VscTerminalBash className="text-[1.7rem]" /> },
  {
    href: "https://www.linkedin.com/in/mnamesujit",
    icon: <FaLinkedinIn className="text-[1.7rem]" />,
  },
  { href: "/sujit-kumar.pdf", icon: <FaFilePdf className="text-[1.5rem]" download = "sujit-kumar.pdf" /> },
  { href: "https://twitter.com/mnamesujit", icon: <FaXTwitter className="text-[1.5rem]" /> },
];

const Header: React.FC = () => {

  const [showSocialLinks, setShowSocialLinks] = useState(false);

  const toggleSocialLinks = () => {
    setShowSocialLinks(!showSocialLinks);
  };

  return (
    <div className="z-10 max-w-7xl w-full flex items-center justify-between font-mono border-b border-gray-300 dark:border-neutral-800 md:border-none">
      <Link href={"/"}>
        <p className="md:border-b border-gray-300 px-0 py-3 md:px-4 lg:py-2.5 md:backdrop-blur-2xl dark:border-neutral-800 md:w-auto md:rounded-full md:border hover:hover:text-emerald-500">
          <code className="font-mono text-base md:text-sm font-bold">
            <span className="hidden md:inline">FullStack/StackShow</span>
            /Nucleus.dev
          </code>
        </p>
      </Link>

      <div className="hidden lg:flex space-x-3 items-end justify-center lg:h-auto lg:w-auto border border-neutral-800 rounded-full px-4 py-2">
            {socialLinks.map((link, index) => (
              <SocialLink key={index} href={link.href} icon={link.icon} />
            ))}
      </div>

      {/* Mobile View for Social links */}
      {showSocialLinks ? (
        <IoExit
          size={40}
          className="sm:hidden fixed left-[8px] bottom-0 z-50 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full cursor-pointer p-1.5 mb-2"
          onClick={toggleSocialLinks}
        />
      ) : (
        <CgMenuGridO
          size={40}
          className="sm:hidden fixed left-[8px] bottom-0 z-50 bg-gray-900 dark:bg-white text-white dark:text-black rounded-full cursor-pointer p-1.5 mb-2"
          onClick={toggleSocialLinks}
        />
      )}
      
       {showSocialLinks && (
        <div className="sm:hidden fixed left-1 bottom-1 py-2 bg-gray-300 dark:bg-gray-950 dark:bg-opacity-90 rounded-full shadow-md">
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
