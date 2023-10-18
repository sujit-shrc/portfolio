import { FaGraduationCap } from 'react-icons/fa';

interface EducationEntryProps {
  degree: string;
  school: string;
  icon: React.ReactNode;
  year: string;
}

const EducationEntry: React.FC<EducationEntryProps> = ({ degree, school, icon, year }) => {
  return (
    <li className="mb-4  text-white border px-8 py-3 rounded-md border-slate-600">
      <div className="flex items-center">
        <div className="mr-2">
         <FaGraduationCap size={24} />
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
