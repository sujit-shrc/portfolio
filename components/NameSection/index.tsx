import Link from "next/link";
import { HiReceiptTax } from "react-icons/hi";

const TyperComponent: React.FC = () => {
  return (
    <div className="font-limelight text-3xl md:text-4xl lg:text-5xl font-semibold min-h-[calc(100vh-320px)] md:min-h-[calc(100vh-270px)] flex items-center pt-2 md:pt-12">
      <div className="w-100 sm:w-3/4 space-y-2">
        <h1 className="text-2xl sm:text-4xl mt-2">
          Software Developer |
          <span className="text-emerald-500"> OpenSource Contributor</span> and{" "}
          <span className="text-emerald-500">DevOps Explorer</span>
        </h1>
        <div className="space-y-2">
          <p className="text-sm sm:text-base">
            I&apos;m Sujit Kumar, a software engineer based in Kanpur, India 📍.
            I love to create products that are not only beautiful and intuitive
            but also bring joy to the end-users.
          </p>
          <p className="text-sm sm:text-base">
            I Currently work as a Full Stack Engineer Intern at ProSecdevs,
            where I am developing impactful real-world industry projects with a
            global reach 🌏.
          </p>
          <p className="text-sm sm:text-base">I&spos;m delving into the dynamic field of DevOps. And passionate about creating efficient and scalable systems.</p>
        </div>
        <Link href="/contactme">
        <button className="mt-2 font-sans font-bold text-center uppercase transition-all disabled:opacity-50 disabled:shadow-none disabled:pointer-events-none text-xs py-2 px-4 rounded-md bg-gray-900 text-white dark:bg-gray-100 dark:text-black shadow-md shadow-gray-900/10 hover:shadow-lg hover:shadow-gray-900/20 hover:bg-gray-900/95 dark:hover:bg-gray-100/95 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none flex items-center gap-1"
          type="button">Hire Me
          <span className=""><HiReceiptTax size = {20} /></span>
        </button>
        </Link>
      </div>
    </div>
  );
};

export default TyperComponent;
