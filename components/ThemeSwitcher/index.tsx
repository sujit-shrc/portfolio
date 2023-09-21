"use client"
import { PiSunDimFill } from 'react-icons/pi';
import { BiSolidMoon } from 'react-icons/bi';
import { useTheme } from 'next-themes';
import { RiComputerFill } from 'react-icons/ri'
const ThemeSwitch: React.FC = () => {
  const { setTheme } = useTheme();
  return (
    <div
      className="flex gap-1 rounded-full px-2 py-1 cursor-pointer bg-[#ccc] dark:bg-gray-700"
    >
      <button onClick={() => setTheme("light")}>
          <PiSunDimFill size={30} />
         </button>
         <button onClick={() => setTheme("dark")}>
           <BiSolidMoon size={22} />
         </button>
         <button onClick={() => setTheme("system")}>
           <RiComputerFill size={20} />
         </button>
      
    </div>
  );
};

export default ThemeSwitch;
