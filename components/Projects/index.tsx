"use client"

import { useState } from "react";
import Mock from "./projects.mock"
import ImageCard from "./ImageCard";

const buttonOptions = [
  {
    filter: "github",
    label: "Front-End",
  },
  {
    filter: "complex",
    label: "Back-End",
  },
  {
    filter: "figma",
    label: "More Complex",
  },
];

const index: React.FC = () => {
  const [selected, setSelected] = useState("");

  const handleButtonClick = (filter: string) => {
    setSelected((prevSelected) => (prevSelected === filter ? "" : filter));
  };

  return (
    <div className="flex flex-col items-center">
      <div className="flex mb-4">
        {buttonOptions.map((option) => (
          <button
            key={option.filter}
            className={`mr-2 ${
              selected === option.filter ? "bg-blue-500 text-white" : "border"
            } px-4 py-2 rounded`}
            onClick={() => handleButtonClick(option.filter)}
          >
            {option.label}
          </button>
        ))}
      </div>
      <div className="flex flex-wrap justify-center">
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

export default index;
