import IconsCard from "../IconsCard";
import Form from "./Form";
import Image from "next/image";

import { BiSolidMessageEdit } from "react-icons/bi";
import { RiInstagramFill, RiLinkedinFill, RiUser3Fill } from "react-icons/ri";
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
      icon: <PiGithubLogoFill size="20" />,
      href: "https://github.com/mnamesujit",
      title: "Github",
    },
    {
      icon: <RiLinkedinFill size="20" color="#0077B5" />,
      href: "https://www.linkedin.com/in/mnamesujit",
      title: "Linkedin",
    },
    {
      icon: <PiDevToLogoFill size="20" />,
      href: "https://dev.to/mnamesujit",
      title: "Dev.To",
    },
    {
      icon: <MdEmail size="20" color="#4285F4" />,
      href: "mailto:mnamesujit@gmail.com",
      title: "Email",
    },
    {
      icon: <RiInstagramFill size="20" color="#E4405F" />,
      href: "https://instagram.com/nucleus.me",
      title: "Instagram",
    },
    {
      icon: <PiTwitterLogoFill size="20" color="#1DA1F2" />,
      href: "https://twitter.com/mnamesujit",
      title: "Twitter",
    },
    {
      icon: <PiGitlabLogoSimpleFill size="20" color="#FC6D26" />,
      href: "https://gitlab.com/mnamesujit",
      title: "Gitlab",
    },
  ];

  return (
    <div className="w-100 flex flex-col lg:flex-row lg:items-center lg:justify-between py-4 md:py-8">
        <div className="flex flex-col gap-2 items-center">
          <div className="w-full flex items-center justify-center">
          <Image src="/img/contact.svg" width={400} height={300} alt="contact-image" />
          </div>
          <h1 className="text-3xl">Send me your message</h1>
          <p>
            Please share your thoughts and opinions, whether about me or my
            website.
          </p>
          <div className="flex flex-wrap gap-2 md:gap-4 justify-center pb-4 sm:pb-0">
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
        <Form />
    </div>
  );
};

export default index;
