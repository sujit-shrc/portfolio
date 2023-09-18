import Education from "./Formation";
import Courses from "./Courses";
import { FaGraduationCap } from "react-icons/fa";

const index: React.FC = () => {
  const education = [
    {
      degree: "Master of Computer Application",
      school: "Kamla Nehru Instiute of Technology",
      icon: FaGraduationCap,
      year: "2024",
    },
    {
      degree: "Bachelor of Computer Applicaton",
      school: "CSJM University Kanpur",
      icon: FaGraduationCap,
      year: "2022",
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

  return (
    <div className="container text-white">
      <h1 className="text-3xl font-bold mb-4">Formations and courses</h1>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul>
            {education.map((edu, index) => (
              <Education key={index} {...edu} />
            ))}
          </ul>
        </div>
        <div className="sm:w-1/2">
          <div className="w-fit p-6 rounded-md border">
            <div className="space-y-1">
              <h1 className="text-xl text-semibold">Refer my resume</h1>
              <p className="text-gray-500">Anyone with the link can view this document.</p>
            </div>
            <div className="flex space-x-3 my-2">
              <input
                value="https://gdrive.com/Xfkek4dsd34se33sd3sl3sd4322990%dsk/myresume.pdf"
                readOnly
                className="px-2 py-1 rounded-md outline-none"
              />
              <button className="text-sm bg-gray-700 px-2 py-1 rounded-md shrink-0">
                Copy Link
              </button>
            </div>
            <div className="mt-4 border-b border-slate-600" ></div>
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
    </div>
  );
};

export default index;
