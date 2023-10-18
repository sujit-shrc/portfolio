"use client"

import { useState } from "react";
import Mock from "./projects.mock"
import ImageCard from "./ImageCard";

const buttonOptions = [
  {
    filter: "frontend",
    label: "Front-End",
  },
  {
    filter: "backend",
    label: "Back-End",
  },
  {
    filter: "complex",
    label: "Complex",
  },
];

const Projects: React.FC = () => {
  const [selected, setSelected] = useState("");

  const handleButtonClick = (filter: string) => {
    setSelected((prevSelected) => (prevSelected === filter ? "" : filter));
  };

  return (
    <div className="flex flex-col items-center w-full">
      <div className="flex flex-wrap mb-4">
        {buttonOptions.map((option) => (
          <button
            key={option.filter}
            className={`mr-2 ${
              selected === option.filter ? "bg-slate-200 text-black" : "border"
            } px-2 md:px-4 py-2 rounded`}
            onClick={() => handleButtonClick(option.filter)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-3 gap-4 w-full">
        {Mock(selected).map((item, key) => (
          <ImageCard
            link={item.link}
            technologies={item.technologies}
            key={key}
            title={item.title}
            image={item.image}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
