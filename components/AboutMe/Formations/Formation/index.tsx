// components/EducationEntry.tsx

import React from 'react';
import { IconType } from 'react-icons';

interface EducationEntryProps {
  degree: string;
  school: string;
  icon: IconType;
  year: string;
}

const EducationEntry: React.FC<EducationEntryProps> = ({ degree, school, icon: Icon, year }) => {
  return (
    <li className="mb-4  text-white">
      <div className="flex items-center">
        <div className="mr-2">
          <Icon size={24} />
        </div>
        <div>
          <h3 className="text-lg font-semibold">{degree}</h3>
          <p className="text-gray-500">{school}</p>
          <p className="text-gray-500">{year}</p>
        </div>
      </div>
    </li>
  );
};

export default EducationEntry;
