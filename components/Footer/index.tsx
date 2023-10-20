// components/Footer.tsx

import React from 'react';

interface Link {
  title: string;
  href: string;
}

const linksColumn1: Link[] = [
  { title: 'Menu', href: '#' },
  { title: 'Contact-Me', href: '#' },
  { title: 'About-Me', href: '#' },
  { title: 'My-Contributions', href: '#' },
];

const linksColumn2: Link[] = [
  { title: 'Privacy Terms', href: '#' },
  { title: 'Privacy Conditions', href: '#' },
  { title: 'Give Your Feedback', href: '#' },
  { title: 'This Project on Github', href: '#' },
];

const Footer: React.FC = () => {
  return (
    <footer className="pt-8 pb-2 md:px-10 lg:px-28 border-t border-slate-700">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-xl">
          {linksColumn1.map((link, index) => (
            <a key={index} href={link.href} className="block mb-2">{link.title}</a>
          ))}
        </div>
        <div className="text-xl">
          {linksColumn2.map((link, index) => (
            <a key={index} href={link.href} className="block mb-2">{link.title}</a>
          ))}
        </div>
        <div>
          <p className="text-xl">If you have a keen eye for details, just like me. You are feel free to check out my social networks or download my resume for a deeper understanding of my background. Appreciate your visit!. Thank you for stopping by!</p>
        </div>
      </div>
      <p className='text-center mt-4'> &copy; Copyright 2023 | Sujit Kumar</p>
    </footer>
  );
};

export default Footer;
