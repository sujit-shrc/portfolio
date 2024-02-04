
import { TiStarOutline } from 'react-icons/ti'
import { CgHashtag } from 'react-icons/cg'
import { BiRadioCircle } from 'react-icons/bi'

interface Type {
  repo_name: string;
  repo_url: string;
  repo_desc: string;
  language: string;
  pull_request_id: number;
  date: string;
}

const index: React.FC = () => {

  const contributions: Type[] = [
    {
      "repo_name": "nucleus-dev CLI",
      "repo_url": "https://github.com/mnamesujit/nucleus-dev-cli",
      "repo_desc": "A modern CLI based portfolio website builds on top of NextJS and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 67,
      "date": "Dec 2023",
    },
    {
      "repo_name": "nucleus-dev",
      "repo_url": "https://github.com/mnamesujit/nucleus-dev",
      "repo_desc": "A modern portfolio website builds on top of NextJS and Tailwind CSS. ",
      "language": "Typescript",
      "pull_request_id": 67,
      "date": "Jan 2024",
    },
  ];

  return (
    <div className='flex flex-col gap-2'>
      {contributions.map((contribution, index) => (
        <div key={index} className="space-y-1 border border-gray-700 p-4 rounded-lg shadow-md w-100 hover:bg-gray-500 hover:bg-opacity-10">
          <div className="flex justify-between w-100">
            <div className="space-y-1">
              <div className='flex justify-between'>
                <h3 className="text-lg font-semibold">{contribution.repo_name}</h3>
                <button className=" px-2 py-1 rounded-md">
                  <TiStarOutline size={20} />
                </button>
              </div>
              <p className="">{contribution.repo_desc}</p>
            </div>

          </div>
          <div className="text-sm">
            <div className="flex items-center space-x-4">
              <div className="flex items-center">
                <BiRadioCircle size={20} className="mr-1 text-sky-400" />
                {contribution.language}
              </div>
              <div className="flex items-center">
                <CgHashtag size={20} className="text-sky-900" />
                {contribution.pull_request_id}
              </div>
              <div>Updated {contribution.date}</div>
            </div>
          </div>
        </div>
      ))}
    </div>
  );
};

export default index;
