
import EducationEntry from './Formation';
import CertificationEntry from './Courses';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';


const Home: React.FC = () => {

    const educationData = [
    	{
          degree: 'Master of Computer Application',
          school: 'Kamla Nehru Instiute of Technology',
          icon: FaGraduationCap,
          year: '2024',
        },
        {
          degree: 'Bachelor of Computer Applicaton',
          school: 'CSJM University Kanpur',
          icon: FaGraduationCap,
          year: '2022',
        }
        
    ];

    const courses = [
        {
          logoSrc: '/devsnest.png',
          certification: 'Data Structures And Algorithms',
          company: 'Devsnest',
          validatorLink: 'https://devsnest.in/certificate/+W4QmqriuBY',
        },
        {
          logoSrc: '/devsnest.png',
          certification: 'Front-End Web Development',
          company: 'Devsnest',
          validatorLink: 'https://devsnest.in/certificate/igmVDkY31hk',
        },
        {
          logoSrc: '/devsnest.png',
          certification: 'Batch Lead',
          company: 'Devsnest',
          validatorLink: 'https://devsnest.in/certificate/Bi+ejdG02Rs',
        }
      ];

  return (
    <div className="container text-white">
      <h1 className="text-3xl font-bold mb-4">Formations and courses
</h1>
      <div className="flex flex-wrap">
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Education</h2>
          <ul>
            {educationData.map((edu, index) => (
              <EducationEntry key={index} {...edu} />
            ))}
          </ul>
        </div>
        <div className="w-full sm:w-1/2">
          <h2 className="text-2xl font-semibold mb-2">Certifications</h2>
          <ul>
            {courses.map((cert, index) => (
              <CertificationEntry key={index} {...cert} />
            ))}
          </ul>
        </div>
      </div>
    </div>
  );
};

export default Home;
