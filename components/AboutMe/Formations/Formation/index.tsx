import { FaGraduationCap } from 'react-icons/fa';

interface EducationEntryProps {
  degree: string;
  school: string;
  icon: React.ReactNode;
  year: string;
}

const EducationEntry: React.FC<EducationEntryProps> = ({ degree, school, icon, year }) => {
  return (
    <li className="mb-4 border px-4 md:px-6 py-3 rounded-md border-slate-700">
      <div className="flex gap-4 items-center">
        <div className="">
         <FaGraduationCap size={24} />
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
