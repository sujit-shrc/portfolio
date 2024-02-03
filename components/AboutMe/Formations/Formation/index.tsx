import { LuCalendarCheck } from "react-icons/lu";





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
        <div className="group-hover:text-emerald-500">
         {icon}
        </div>
        <div>
          <h3 className="text-lg font-normal">{degree}</h3>
          <p className="text-gray-300 group-hover:text-emerald-500">{school}</p>
          <p className="text-gray-500 flex items-center gap-1"><span className='inline-block text-white'><LuCalendarCheck /></span> {year}</p>
        </div>
      </div>
    </li>
  );
};

export default EducationEntry;
