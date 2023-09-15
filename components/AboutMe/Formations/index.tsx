// pages/index.tsx

import React from 'react';
import EducationEntry from './Formation';
import CertificationEntry from './Courses';
import { FaGraduationCap, FaCertificate } from 'react-icons/fa';


const Home: React.FC = () => {

    const educationData = [
        {
          degree: 'Bachelor of Science in Computer Science',
          school: 'Example University',
          icon: FaGraduationCap,
          year: '2020',
        },
        {
          degree: 'Master of Science in Software Engineering',
          school: 'Sample College',
          icon: FaGraduationCap,
          year: '2022',
        },
    ];

    const courses = [
        {
          logoSrc: '/company1-logo.png',
          certification: 'Certification 1',
          company: 'Company 1',
          validatorLink: 'https://example.com/certification1',
        },
        {
          logoSrc: '/company2-logo.png',
          certification: 'Certification 2',
          company: 'Company 2',
          validatorLink: 'https://example.com/certification2',
        },
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
