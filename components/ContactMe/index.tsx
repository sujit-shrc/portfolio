import IconsCard from "../IconsCard";
import Form from "./Form";
import Image from "next/image";

import { RiInstagramFill, RiLinkedinFill } from "@lib/icons";
import {
  PiGithubLogoFill,
  PiDevToLogoFill,
  PiTwitterLogoFill,
  PiGitlabLogoSimpleFill,
} from "react-icons/pi";
import { MdEmail } from "react-icons/md";

const index: React.FC = () => {
  const social = [
    {
      icon: <PiGithubLogoFill size="22" />,
      href: "https://github.com/mnamesujit",
      title: "Github",
    },
    {
      icon: <RiLinkedinFill size="22" />,
      href: "https://www.linkedin.com/in/mnamesujit",
      title: "Linkedin",
    },
    {
      icon: <PiDevToLogoFill size="22" />,
      href: "https://dev.to/mnamesujit",
      title: "Dev.To",
    },
    {
      icon: <MdEmail size="22" />,
      href: "mailto:mnamesujit@gmail.com",
      title: "Email",
    },
    {
      icon: <RiInstagramFill size="22" />,
      href: "https://instagram.com/nucleus.me",
      title: "Instagram",
    },
    {
      icon: <PiTwitterLogoFill size="22" />,
      href: "https://twitter.com/mnamesujit",
      title: "Twitter",
    },
    {
      icon: <PiGitlabLogoSimpleFill size="22" />,
      href: "https://gitlab.com/mnamesujit",
      title: "Gitlab",
    },
  ];

  return (
    <div className="w-100 grid grid-cols-1 lg:grid-cols-2 py-4 md:py-8">
      <div className="flex flex-col items-center gap-2">
        <div className="w-full flex items-center justify-center">
          <Image src="/img/contact.svg" width={350} height={250} alt="contact-image" />
        </div>
        <div className="flex flex-wrap pb-2 gap-2 md:pb-4 sm:pb-0">
          <h1 className="text-xl md:text-3xl">Dispatch Your Thoughts, and Reflections!</h1>
          <p className="">I eagerly await your thoughts and impressions, be it about my endeavors or the tapestry of my website. Your insights are invaluable, and I&apos;m excited to hear your reflections!. Your insights mean a lot, and I&apos;m eager to hear your take!</p>
          <div className="flex flex-wrap gap-2 md:gap-3.5">
          {social.map(
            (
              data: { icon: React.ReactNode; title: string; href: string },
              index: number
            ) => (
              <IconsCard key={index} {...data} />
            )
          )}
          </div>
        </div>
      </div>
      <Form />
    </div>
  );
};

export default index;
