"use client"
import Image from "next/image";
import { CgChevronDoubleRight } from "react-icons/cg"

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
    <div className="flex items-center justify-between">
      <div className="flex items-center space-x-4 space-y-4">
        <div className="bg-slate-200 p-2 rounded-full">
          <Image src={logoSrc} alt={company} width={24} height={24} />
          </div>
        <div className="space-y-[1px]">
          <p className="text-sm font-medium leading-none">{certification}</p>
          <p className="text-sm text-gray-500">@{company}</p>
        </div>
      </div>
      <div className="flex items-center justify-center space-x-1 px-2 py-1 border-[0.5px] border-slate-500 rounded-md">
      <a
       href={validatorLink}
       target="_blank"
       rel="noopener noreferrer" 
      >view</a>
      <CgChevronDoubleRight />
      </div>
    </div>
  );
};

export default index;

