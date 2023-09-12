import Projects from '@/components/Projects';
import data from '../../locales/data.json';

const page: React.FC = () => {
  const local = data.projects_page
  return (
    <div>
      <h1>{local.title}</h1>
      <p>{local.description}</p>
      <Projects />
    </div>
  );
};

export default page;