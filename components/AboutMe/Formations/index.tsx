"use client"
import Education from "./Formation";
import Courses from "./Courses";
import { FaGraduationCap } from "react-icons/fa";
import { MdContentCopy } from "react-icons/md"

const index: React.FC = () => {
  const resumeURl = "https://drive.google.com/file/d/1BCwctarESyC_r3ICEqzZNGbMtBPHRnfu/view?usp=drivesdk"
  const education = [
    {
      degree: "Master of Computer Application",
      school: "Kamla Nehru Instiute of Technology",
      icon: FaGraduationCap,
      year: "Nov 2022-May 2024",
    },
    {
      degree: "Full Stack Developer Intern",
      school: "ProSecDevs",
      icon: FaGraduationCap,
      year: "Jun 2023-Ongoing",
    },
    {
      degree: "Hacktoberfest Contributer",
      school: "Hacktoberfest",
      icon: FaGraduationCap,
      year: "Oct 2022 & Oct-2023",
    },
    {
      degree: "Devsnest Hackthon",
      school: "Devsnest",
      icon: FaGraduationCap,
      year: "Nov 2022",
    },
  ];

  const courses = [
    {
      logoSrc: "/devsnest.png",
      certification: "Data Structures And Algorithms",
      company: "Devsnest",
      validatorLink: "https://devsnest.in/certificate/+W4QmqriuBY",
    },
    {
      logoSrc: "/devsnest.png",
      certification: "Front-End Web Development",
      company: "Devsnest",
      validatorLink: "https://devsnest.in/certificate/igmVDkY31hk",
    },
    {
      logoSrc: "/devsnest.png",
      certification: "Batch Lead",
      company: "Devsnest",
      validatorLink: "https://devsnest.in/certificate/Bi+ejdG02Rs",
    },
  ];

  const copyToClipboard = async () => {
    try {
      await navigator.clipboard.writeText(resumeURl);
    } catch (err) {
      console.error('Unable to copy to clipboard', err);
    }
  };

  return (
    <div className="">
      <h1 className="text-3xl font-bold mb-4 text-center">Formations and courses</h1>
      <div className="flex flex-col gap-2 pt-6 md:flex-row sm:items-center justify-center md:justify-between">
        <div className="flex flex-col gap-2">
          <h2 className="text-3xl font-semibold mb-2">Education & ECA</h2>
          <ul className="grid grid-cols-1 sm:grid-cols-2 gap-2">
            {education.map((edu, index) => (
              <Education key={index} {...edu} />
            ))}
          </ul>
        </div>
          <div className="w-full md:w-fit p-5 rounded-md border border-slate-600">
            <div className="space-y-1">
              <h1 className="text-xl text-semibold">Refer my resume</h1>
              <p className="text-gray-500">Anyone with the link can view this document.</p>
            </div>
            <div className="w-100 mt-1 flex space-x-1 md:space-x-3">
              <input
                value="https://drive.google.com/file/d/1BCwctarESyC_r3ICEqzZNGbMtBPHRnfu/view?usp=drivesdk"
                readOnly
                className="w-full px-2 py-1 bg-transparent dark:bg-slate-800 dark:bg-opacity-40 rounded-md outline-none border border-slate-700"
              />
              <button className=" text-base bg-transparent dark:bg-slate-800 focus:bg-green-400 px-2 py-1 border border-slate-800 rounded-md shrink-0" onClick={copyToClipboard}>
                <MdContentCopy />
              </button>
            </div>
            <div className="mt-4 border-b border-slate-600"></div>
            <div className="mt-4 space-y-2">
              <h2>People with access</h2>
              <ul>
                {courses.map((cert, index) => (
                  <Courses key={index} {...cert} />
                ))}
              </ul>
            </div>
        </div>
      </div>
    </div>
  );
};

export default index;
