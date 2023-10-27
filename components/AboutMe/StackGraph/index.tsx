"use client";

import {
  Legend,
  PolarAngleAxis,
  PolarGrid,
  PolarRadiusAxis,
  Radar,
  RadarChart
} from 'recharts';

const index: React.FC = () => {
  const tools = [
    { subject: 'Linux', A: 135, B: 130, fullMark: 150 },
    { subject: 'NGINX, Deployment', A: 86, B: 130, fullMark: 150 },
    { subject: 'Redux & Context API', A: 99, B: 100, fullMark: 150 },
    { subject: 'Postman', A: 140, B: 120, fullMark: 150 },
    { subject: 'Docker', A: 135, B: 85, fullMark: 150 },
    { subject: 'Github Workflow', A: 135, B: 140, fullMark: 150 },
  ];

  const dev = [
    { subject: 'Tailwind CSS', A: 110, fullMark: 150 },
    { subject: 'SCSS', A: 140, fullMark: 150 },
    { subject: 'Material UI', A: 110, fullMark: 150 },
    { subject: 'Chakra UI', A: 120, fullMark: 150 },
    { subject: 'Styled-Comp.', A: 105, fullMark: 150 },
  ];

  const getChartWidth = () => {
    const breakpoints = { sm: 300, md: 500, lg: 700 };
    const screenWidth = window.innerWidth;

    if (screenWidth < breakpoints.sm) {
      return screenWidth - 20;
    } else if (screenWidth < breakpoints.md) {
      return breakpoints.sm;
    } else if (screenWidth < breakpoints.lg) {
      return screenWidth * 0.6;
    } else {
      return screenWidth * 0.4;
    }
  };

  return (
    <div className="flex flex-col md:flex-row md:justify-center md:gap-2 items-center w-full text-center overflow-hidden">
      <div className="mb-8 w-full md:w-3/5 lg:w-1/2">
        <h1 className="text-2xl">Tech Tools </h1>
        <div className="w-full mx-auto">
          <RadarChart outerRadius={90} width={getChartWidth()} height={250} data={tools}>
            <PolarGrid />
            <PolarAngleAxis dataKey="subject" />
            <PolarRadiusAxis angle={30} domain={[0, 150]} />
            <Radar name="Tools" dataKey="A" stroke="#8884d8" fill="#8884d8" fillOpacity={0.6} />
            <Radar name="Tech" dataKey="B" stroke="#82ca9d" fill="#82ca9d" fillOpacity={0.6} />
            <Legend />
          </RadarChart>
        </div>
      </div>
      <div className="w-full mb-8 md:w-3/5 lg:w-1/2">
        <h1 className="text-2xl">Dev. Libraries</h1>
        <div className="w-full mx-auto">
          <RadarChart outerRadius={90} width={getChartWidth()} height={250} data={dev}>
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
    </div>
  );
};

export default index;
