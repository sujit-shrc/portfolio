import {useState} from "react";
import Link from "next/link";
import { FaReact, FaGithub, FaHtml5, FaCss3, FaJsSquare, FaFigma, FaNode } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiTypescript,SiTailwindcss, SiExpress, SiMongodb, SiMariadb, SiMui } from "react-icons/si";
import { TbBrandRedux, TbBrandSass, TbBrandNextjs } from 'react-icons/tb';
import { TiChartArea } from 'react-icons/ti';
import Image from "next/image";

interface Type {
  title: string;
  image: string;
  technologies: string[];
  link: string;
}

const ProjectCard: React.FC<Type> = ({
  title,
  image,
  technologies,
  link,
}) => {

  const [hovered, setHovered] = useState(false);

  const techStackIcons = [
    { name: "typescript", icon: <SiTypescript size={30} /> },
    { name: "javascript", icon: <FaJsSquare size={30} /> },
    { name: "figma", icon: <FaFigma size={30} /> },
    { name: "nest", icon: <SiNestjs size={30} /> },
    { name: "react", icon: <FaReact size={30} /> },
    { name: "git", icon: <FaGithub size={30} /> },
    { name: "next", icon: <SiNextdotjs size={30} /> },
    { name: "html", icon: <FaHtml5 size={30} /> },
    { name: "css", icon: <FaCss3 size={30} /> },
    { name: "nodejs", icon: <FaNode size={30} /> },
    { name: "tailwind-css", icon: <SiTailwindcss size={30} /> },
    { name: "redux", icon: <TbBrandRedux size={30} /> },
    { name: "scss", icon: <TbBrandSass size={30} /> },
    { name: "express", icon: <SiExpress size={30} /> },
    { name: "mongodb", icon: <SiMongodb size={30} /> },
    { name: "mariadb", icon: <SiMariadb size={30} /> },
    { name: "nextjs", icon: <TbBrandNextjs size={30} /> },
    { name: "recharts", icon: <TiChartArea size={30} /> },
    { name: "mui", icon: <SiMui size={30} /> },

  ];


  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link href= {link} target = "_blank">
      <div className="relative overflow-hidden bg-contain bg-no-repeat border border-gray-700 rounded-md h-52 md:h-56" style={{backgroundImage: image}}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      >
        <div className={`absolute bottom-0 w-full py-1 text-white bg-slate-800 bg-opacity-70 transition-all duration-200 ease ${
            hovered ? "bottom-9 bg-opacity-80" : "bottom-0"
          }`}>
          <span className="text-[22px] mx-1.5">{title}</span>
        </div>
        <div className={`absolute bottom-0 flex items-center w-full transition-all duration-200 ease bg-white text-black ${
            hovered ? "bottom-0 opacity-100" : "bottom-[-50px] opacity-0"
          }`}>
          {techStackIcons.map((item:{name: string, icon: React.ReactNode}, key: number) =>
            technologies.includes(item.name) ? (
              <div key={key} className="inline-block mx-1.5 py-1">
                {item.icon}
              </div>
            ) : (
              ""
            )
          )}
        </div>
      </div>
    </Link>
  );
};

export default ProjectCard;
