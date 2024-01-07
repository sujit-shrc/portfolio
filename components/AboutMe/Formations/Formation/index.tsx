import { FaGraduationCap } from 'react-icons/fa';

interface EducationEntryProps {
  degree: string;
  school: string;
  icon: React.ReactNode;
  year: string;
}

const EducationEntry: React.FC<EducationEntryProps> = ({ degree, school, icon, year }) => {
  return (
    <li className="group border sm:border-b-1 border-slate-600 p-3 md:px-4 rounded-md">
      <div className="flex gap-3 items-center">
        <div className="">
         {icon}
        </div>
        <div>
          <h3 className="text-lg font-normal">{degree}</h3>
          <p className="text-gray-500">{school}</p>
          <p className="text-gray-500">{year}</p>
        </div>
      </div>
    </li>
  );
};

export default EducationEntry;
