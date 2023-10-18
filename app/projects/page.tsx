import Projects from "@/components/Projects";
import data from "../../locales/data.json";

const page: React.FC = () => {
  const local = data.projects_page;
  return (
    <div className="min-h-screen flex flex-col items-center space-y-8 mt-8 md:mt-10 lg:mt-16 px-2 md:px-6 w-screen">
      <div className="space-y-4">
        <h1 className="text-4xl text-white">{local.title}</h1>
        <p className="text-2xl text-white">{local.description}</p>
      </div>
      <Projects />
    </div>
  );
};

export default page;
