import Projects from "@/components/Projects";
import data from "../../locales/data.json";
import Footer from "@/components/Footer";

const page: React.FC = () => {
  const local = data.projects_page;
  return (
    <div className="min-h-screen flex flex-col items-center space-y-8 max-w-screen">
      <div className="space-y-4">
        <h1 className="text-4xl">{local.title}</h1>
        <p className="text-2xl">{local.description}</p>
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default page;
