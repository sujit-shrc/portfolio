"use client";

import { PiSunDimFill } from 'react-icons/pi'
import { BiSolidMoon } from 'react-icons/bi'

import React, { useState } from 'react';

const ThemeSwitch: React.FC = () => {
    const [isDayMode, setIsDayMode] = useState(false);

    const toggleTheme = () => {
      setIsDayMode(!isDayMode);
    };
    return (
        <div className="relative w-16 h-8 rounded-full p-1 
        cursor-pointer bg-[#ccc]" onClick={toggleTheme}>
        <button
          className={`flex items-center justify-center w-6 h-6 text-dark-text bg-white rounded-full transform ${
            isDayMode ? 'translate-x-0' : 'translate-x-8'
          } transition-transform duration-500 ease-in-out`}
        >
          {isDayMode ? <PiSunDimFill size={16} /> : <BiSolidMoon />}
        </button>
      </div>
    );
};

export default ThemeSwitch;