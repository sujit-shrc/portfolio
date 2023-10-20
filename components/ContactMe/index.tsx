import IconsCard from "../IconsCard";
import Form from "./Form";

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
      icon: <PiGithubLogoFill size="40" />,
      href: "https://github.com/mnamesujit",
      title: "Github",
    },
    {
      icon: <RiLinkedinFill size="40" />,
      href: "https://www.linkedin.com/in/mnamesujit",
      title: "Linkedin",
    },
    {
      icon: <PiDevToLogoFill size="40" />,
      href: "https://dev.to/mnamesujit",
      title: "Dev.To",
    },
    {
      icon: <MdEmail size="40" />,
      href: "mailto:mnamesujit@gmail.com",
      title: "Email",
    },
    {
      icon: <RiInstagramFill size="40" />,
      href: "https://instagram.com/nucleus.me",
      title: "Instagram",
    },
    {
      icon: <PiTwitterLogoFill size="40" />,
      href: "https://twitter.com/mnamesujit",
      title: "Twitter",
    },
    {
      icon: <PiGitlabLogoSimpleFill size="40" />,
      href: "https://gitlab.com/mnamesujit",
      title: "Gitlab",
    },
  ];

  return (
    <div className="flex flex-col  gap-10 md:gap-14 py-6">
      <div className="flex flex-wrap gap-4 md:gap-6 justify-center">
        {social.map(
          (
            data: { icon: React.ReactNode; title: string; href: string },
            index: number
          ) => (
            <IconsCard key={index} {...data} />
          )
        )}
      </div>

      <div className="flex flex-col gap-6 lg:flex-row items-center">
        <div className="flex flex-col gap-2 items-center">
          <div className="hidden md:block relative">
            <RiUser3Fill size={80} />
            <BiSolidMessageEdit
              size={30}
              className="absolute top-[-10px] left-16"
            />
          </div>
          <h1 className="text-3xl">Send me your message</h1>
          <p className="">
            Please share your thoughts and opinions, whether about me or my
            website.
          </p>
        </div>
        <Form />
      </div>
    </div>
  );
};

export default index;
