import Projects from "@/components/Projects";
import data from "../../locales/data.json";
import Footer from "@/components/Footer";

const page: React.FC = () => {
  const local = data.projects_page;
  return (
    <div className="min-h-screen flex flex-col items-center gap-4 max-w-screen mt-3 md:mt-10 lg:mt-12 w-100">
      <div className="">
        <h1 className="text-2xl md:text-4xl font-bold">{local.title}</h1>
      </div>
      <Projects />
      <Footer />
    </div>
  );
};

export default page;
