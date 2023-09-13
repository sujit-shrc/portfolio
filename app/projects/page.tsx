import Projects from '@/components/Projects';
import data from '../../locales/data.json';

const page: React.FC = () => {
  const local = data.projects_page
  return (
    <div className="min-h-screen flex flex-col items-center space-y-8 px-20 bg-dark-primary">
      <h1 className="text-4xl text-white">{local.title}</h1>
      <p className="text-2xl text-white">{local.description}</p>
      <Projects />
    </div>
  );
};

export default page;