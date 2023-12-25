"use client"

import React from 'react';
import { PiSunDimFill } from 'react-icons/pi'
import { BiSolidMoon } from 'react-icons/bi'
import { useTheme } from 'next-themes';

const ThemeSwitch: React.FC = () => {
  const { theme, setTheme } = useTheme();

  const toggleTheme = () => {
    setTheme(theme === "light" ? "dark" : "light");
  };

  const isActive = theme === "light";

  const switchClasses = `flex items-center justify-center w-5 h-5 md:w-6 md:h-6 text-dark bg-white rounded-full transform ${
    isActive ? 'translate-x-1' : 'translate-x-[24px] md:translate-x-7'
  } transition-transform duration-500 ease-in-out`;

  return (
    <div className="relative w-12 h-7 md:w-14 md:h-[30px] rounded-full cursor-pointer py-[3px] bg-[#ccc] text-slate-900" onClick={toggleTheme}>
      <button className={switchClasses}>
        {isActive ? <PiSunDimFill size={16} /> : <BiSolidMoon />}
      </button>
    </div>
  );
};

export default ThemeSwitch;
