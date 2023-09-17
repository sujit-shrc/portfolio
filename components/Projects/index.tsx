"use client"

import { useState } from "react";
import Mock from "./projects.mock"
import ImageCard from "./ImageCard";

const buttonOptions = [
  {
    filter: "fronted",
    label: "Front-End",
  },
  {
    filter: "backend",
    label: "Back-End",
  },
  {
    filter: "complex",
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
      <div className="flex flex-wrap mb-4">
        {buttonOptions.map((option) => (
          <button
            key={option.filter}
            className={`mr-2 text-white ${
              selected === option.filter ? "bg-slate-200 text-black" : "border"
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
