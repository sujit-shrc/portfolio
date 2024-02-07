import Image from "next/image";
import { CgChevronDoubleRight, FaEyeSlash } from "@lib/icons";


interface Props {
  logoSrc: string;
  certification: string;
  company: string;
  validatorLink: string;
}

const index: React.FC<Props> = ({
  logoSrc,
  certification,
  company,
  validatorLink,
}) => {
  return (
    <div className="flex justify-between items-center gap-4">
      <div className="flex items-center space-x-4 space-y-4">
        <div className="bg-white p-2 border rounded-full">
          <Image src={logoSrc} alt={company} width={24} height={24} />
          </div>
        <div className="space-y-[1px]">
          <p className="text-sm font-medium leading-none">{certification}</p>
          <p className="text-sm text-gray-500">@{company}</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-1 px-1.5 md:px-2 py-1.5 h-fit border-[0.5px] border-slate-700 rounded-md hover:text-emerald-500">
      <a
       href={validatorLink}
       target="_blank"
       rel="noopener noreferrer"
      ><FaEyeSlash /></a>
      <CgChevronDoubleRight />
      </div>
    </div>
  );
};

export default index;

