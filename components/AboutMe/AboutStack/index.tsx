import { FaNodeJs,DiReact, DiMongodb, DiGit, BsDatabaseFillLock, TbDevicesCode, BiLogoKubernetes, BiLogoPostgresql, SiTailwindcss, SiRedux, SiExpress, SiReactquery, SiGithubactions, SiGraphql, SiMariadb, SiNextdotjs, SiDocker, TbBrandFramerMotion, TbBrandTypescript, IoHardwareChipOutline, VscTerminalBash } from '@lib/icons';

const skillsData = {
  frontend: {
    title: 'Frontend',
    skills: [
      { name: 'React', icon: <DiReact color="#61DAFB" /> },
      { name: 'Next.js', icon: <SiNextdotjs /> },
      { name: 'Tailwind CSS', icon: <SiTailwindcss color="#38B2AC" /> },
      { name: 'Framer Motion', icon: <TbBrandFramerMotion color="#02569B" /> },
      { name: 'React Query', icon: <SiReactquery color="#9A192F" /> },
      { name: 'Redux', icon: <SiRedux color="#764ABC" /> },
      { name: 'TypeScript', icon: <TbBrandTypescript color="#3178C6" /> },
    ],
    icon: <TbDevicesCode color="#61DAFB" />,
  },
  backend: {
    title: 'Backend',
    skills: [
      { name: 'Node.js', icon: <FaNodeJs color="#8CC84B" /> },
      { name: 'ExpressJs', icon: <SiExpress /> },
    ],
    icon: <IoHardwareChipOutline color="#8CC84B" />,
  },
  databases: {
    title: 'Databases',
    skills: [
      { name: 'MariaDB', icon: <SiMariadb color="#003545" /> },
      { name: 'PostgreSQL', icon: <BiLogoPostgresql color="#336791" /> },
      { name: 'GraphQL', icon: <SiGraphql color="#E10098" /> },
      { name: 'MongoDB', icon: <DiMongodb color="#4DB33D" /> },
    ],
    icon: <BsDatabaseFillLock color="#00DD80" />,
  },
  devops: {
    title: 'DevOps',
    skills: [
      { name: 'Git', icon: <DiGit color="#F05032" /> },
      { name: 'Docker', icon: <SiDocker color="#2496ED" /> },
      { name: 'Kubernetes', icon: <BiLogoKubernetes color="#326CE5" /> },
      { name: 'Bash Scripting', icon: <VscTerminalBash /> },
    ],
    icon: <SiGithubactions color="#DDDD00" />,
  },
};

const SkillComponent = () => {
  return (
    <div className="flex flex-col gap-2 md:gap-3 md:flex-row md:flex-wrap justify-between">
      {Object.values(skillsData).map((category) => (
        <div
          key={category.title}
          className="relative overflow-hidden border border-0.5 border-gray-800 rounded-lg w-full lg:w-[275px] p-4"
        >
          <div className='flex gap-4 items-center border-dashed border-b-[1px] border-slate-800 mb-2 pb-2'>
            <div className="text-2xl">{category.icon}</div>
            <p className="text-xl font-semibold">{category.title}</p>
          </div>
          <ul className='flex flex-wrap gap-2 lg:block'>
            {category.skills.map((skill, index) => (
              <li
                key={index}
                className="flex items-center mb-2 hover:text-blue-500"
              >
                <div className="mr-2 text-2xl">{skill.icon}</div>
                {skill.name}
              </li>
            ))}
          </ul>
        </div>
      ))}
    </div>
  );
};

export default SkillComponent;