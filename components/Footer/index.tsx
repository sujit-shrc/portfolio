import Link from 'next/link';

interface LinkProps {
  title: string;
  href: string;
}

const Footer: React.FC = () => {
  const linksColumn1: LinkProps[] = [
    { title: 'Home', href: '#' },
    { title: 'About-Me', href: '#' },
    { title: 'Contact-Me', href: '#' },
    { title: 'My-Contributions', href: '#' },
  ];

  const linksColumn2: LinkProps[] = [
    { title: 'Privacy Terms', href: '#' },
    { title: 'Privacy Conditions', href: '#' },
    { title: 'Give Your Feedback', href: '#' },
    { title: 'This Project on Github', href: '#' },
  ];

  return (
    <footer className="pt-8 pb-2 md:px-10 lg:px-28 border-t border-slate-800 text-center">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
        <div className="text-base md:text-xl border-b md:border-b-0 pb-2 md:pb-0">
          <p className="border-b inline-block mb-2">Menu</p>
          {linksColumn1.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="block mb-2">{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="text-base md:text-xl border-b md:border-b-0 pb-2 md:pb-0">
          <p className="border-b inline-block mb-2">Utils</p>
          {linksColumn2.map((link, index) => (
            <Link key={index} href={link.href}>
              <span className="block mb-2">{link.title}</span>
            </Link>
          ))}
        </div>
        <div className="text-base md:text-xl">
          <p>If you have a keen eye for details, just like me. You are feel free to check out my social networks or download my resume for a deeper understanding of my background. Appreciate your visit!. Thank you for stopping by!</p>
        </div>
      </div>
      <p className='mt-2 md:mt-4 text-sm md:text-xl opacity-50'>&copy; Copyright 2023 | Sujit Kumar</p>
    </footer>
  );
};

export default Footer;
