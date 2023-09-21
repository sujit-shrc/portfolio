
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
      "repo_name": "My-repo-1",
      "repo_url": "https://github.com/your-repo-1",
      "repo_desc":"Beautifully designed components built with Radix UI and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 67,
      "date": "May 2023",
    },
    {
      "repo_name": "My-repo-2",
      "repo_url": "https://github.com/your-repo-2",
      "repo_desc":"Beautifully designed components built with Radix UI and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 46,
      "date": "May 2023",
    },
    {
      "repo_name": "My-repo-1",
      "repo_url": "https://github.com/your-repo-1",
      "repo_desc":"Beautifully designed components built with Radix UI and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 67,
      "date": "May 2023",
    },
    {
      "repo_name": "My-repo-2",
      "repo_url": "https://github.com/your-repo-2",
      "repo_desc":"Beautifully designed components built with Radix UI and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 46,
      "date": "May 2023",
    },
    {
      "repo_name": "My-repo-1",
      "repo_url": "https://github.com/your-repo-1",
      "repo_desc":"Beautifully designed components built with Radix UI and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 67,
      "date": "May 2023",
    },
    {
      "repo_name": "My-repo-2",
      "repo_url": "https://github.com/your-repo-2",
      "repo_desc":"Beautifully designed components built with Radix UI and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 46,
      "date": "May 2023",
    },
    {
      "repo_name": "My-repo-1",
      "repo_url": "https://github.com/your-repo-1",
      "repo_desc":"Beautifully designed components built with Radix UI and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 67,
      "date": "May 2023",
    },
    {
      "repo_name": "My-repo-2",
      "repo_url": "https://github.com/your-repo-2",
      "repo_desc":"Beautifully designed components built with Radix UI and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 46,
      "date": "May 2023",
    },
    {
      "repo_name": "My-repo-1",
      "repo_url": "https://github.com/your-repo-1",
      "repo_desc":"Beautifully designed components built with Radix UI and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 67,
      "date": "May 2023",
    },
    {
      "repo_name": "My-repo-2",
      "repo_url": "https://github.com/your-repo-2",
      "repo_desc":"Beautifully designed components built with Radix UI and Tailwind CSS.",
      "language": "Typescript",
      "pull_request_id": 46,
      "date": "May 2023",
    },
  ];

  return (
    <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-4">
      {contributions.map((contribution, index) => (
        <div key={index} className="border text-white border-gray-500 p-4 rounded-lg shadow-md">
          <div className="flex justify-between">
            <div className="max-w-[65%] space-y-1">
              <h3 className="text-lg font-semibold">{contribution.repo_name}</h3>
              <p className="text-gray-400">{contribution.repo_desc}</p>
            </div>
            <button className="h-fit px-3 py-1 bg-gray-600 rounded-md">
              <TiStarOutline size={20} />
            </button>
          </div>
          <div className="text-sm text-gray-600">
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
