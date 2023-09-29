"use client";

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from "recharts";

const index: React.FC = () => {
  const tools = [
    {
      subject: 'Linux',
      A: 135,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'NGINX, Deployment',
      A: 86,
      B: 130,
      fullMark: 150,
    },
    {
      subject: 'Redux & Context API',
      A: 99,
      B: 100,
      fullMark: 150,
    },
    {
      subject: 'Postman',
      A: 140,
      B: 120,
      fullMark: 150,
    },
    {
      subject: 'Docker',
      A: 135,
      B: 85,
      fullMark: 150,
    },
    {
      subject: 'Github Workflow',
      A: 135,
      B: 140,
      fullMark: 150,
    },
  ];


  const dev = [
    {
      subject: "Tailwind CSS",
      A: 110,
      fullMark: 150,
    },
    {
      subject: "SCSS",
      A: 140,
      fullMark: 150,
    },
    {
      subject: "Material UI",
      A: 110,
      fullMark: 150,
    },
    {
      subject: "Chacka UI",
      A: 120,
      fullMark: 150,
    },
    {
      subject: "Styled-Comp.",
      A: 105,
      fullMark: 150,
    },
  ];
  return (
    <div className="flex flex-col items-center lg:flex-row w-full justify-center lg:justify-evenly text-center">
      <div>
        <h1 className="text-2xl">Tech Tools </h1>
        <RadarChart outerRadius={90} width={500} height={250} data={tools}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar name="Tools" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
          <Radar name="Tech" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
          <Legend />
        </RadarChart>
      </div>
      <div>
        <h1 className="text-2xl">Dev. Libraries</h1>
        <RadarChart outerRadius={90} width={500} height={250} data={dev}>
          <PolarGrid />
          <PolarAngleAxis dataKey="subject" />
          <PolarRadiusAxis angle={30} domain={[0, 150]} />
          <Radar
            name="UI Experience"
            dataKey="A"
            stroke="#84d8d4"
            fill="#84d8d4"
            fillOpacity={0.6}
          />
          <Legend />
        </RadarChart>
      </div>
    </div>
  );
};

export default index;