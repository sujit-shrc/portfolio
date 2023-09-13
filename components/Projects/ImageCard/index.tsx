import {useState} from "react";
import Link from "next/link";
import { FaReact, FaGithub, FaHtml5, FaCss3, FaWordpress, FaJsSquare, FaFigma, FaNode } from "react-icons/fa";
import { SiNextdotjs, SiNestjs, SiTypescript } from "react-icons/si";

interface Type {
  title: string;
  image: string;
  technologies: string[];
  link: string;
}

const index: React.FC<Type> = ({
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
  ];
  

  const handleMouseEnter = () => {
    setHovered(true);
  };

  const handleMouseLeave = () => {
    setHovered(false);
  };

  return (
    <Link href={link} target="_blank">
      <div className="relative overflow-hidden bg-cover bg-center w-80 h-44 m-2" style={{ backgroundImage: image }}
       onMouseEnter={handleMouseEnter}
       onMouseLeave={handleMouseLeave}
      >
        <div  className={`absolute bottom-0 w-full py-1 text-white bg-slate-900 bg-opacity-50 transition-all duration-500 ease ${
            hovered ? "bottom-9 bg-opacity-80" : "bottom-0"
          }`}>
          <span className="text-[22px] mx-1.5">{title}</span>
        </div>
        <div className={`absolute bottom-0 flex items-center w-full transition-all duration-500 ease bg-white ${
            hovered ? "bottom-0 opacity-100" : "bottom-[-50px] opacity-0"
          }`}>
          {techStackIcons.map((item, key) =>
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

export default index;
