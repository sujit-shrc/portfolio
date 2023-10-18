import IconsCard from "../../IconsCard"
import { FaPython, FaGitAlt } from "react-icons/fa"
import { RiReactjsFill } from "react-icons/ri"
import { SiJavascript, SiTypescript, SiNextdotjs, SiExpress, SiMariadb, SiLinux } from "react-icons/si"
import { IoLogoNodejs } from "react-icons/io"
import { PiGithubLogoFill } from "react-icons/pi"
import { BiLogoMongodb } from "react-icons/bi"


const index: React.FC = () => {
  const skills = [
    {
      icon: <SiJavascript className="text-5xl md:text-6xl" />,
      href: 'https://javascript.org/',
      title: 'JavaScript',
    },
    {
      icon: <SiTypescript className="text-5xl md:text-6xl" />,
      href: 'https://typescript.org/',
      title: 'TypeScript',
    },
    {
      icon: <FaPython className="text-5xl md:text-6xl" />,
      href: 'https://www.python.org/',
      title: 'Python',
    },
    {
      icon: <RiReactjsFill className="text-5xl md:text-6xl" />,
      href: 'https://nodejs.org/',
      title: 'Node.Js',
    },
    {
      icon: <SiNextdotjs className="text-5xl md:text-6xl" />,
      href: 'https://nextjs.org/',
      title: 'Next.Js',
    },
    {
      icon: <IoLogoNodejs className="text-5xl md:text-6xl" />,
      href: 'https://nodejs.org/',
      title: 'NodeJs',
    },
    {
      icon: <SiExpress className="text-5xl md:text-6xl" />,
      href: 'https://expressjs.org',
      title: 'ExpressJs',
    },
    {
      icon: <SiMariadb className="text-5xl md:text-6xl" />,
      href: 'https://mariadb.org',
      title: 'MariaDB',
    },
    {
      icon: <BiLogoMongodb className="text-5xl md:text-6xl" />,
      href: 'https://mongodb.org',
      title: 'MongoDb',
    },
    {
      icon: <FaGitAlt className="text-5xl md:text-6xl" />,
      href: 'https://git.org',
      title: 'Git',
    },
    {
      icon: <SiLinux className="text-5xl md:text-6xl" />,
      href: 'https://archilinux.org',
      title: 'Linux',
    },
    {
      icon: <PiGithubLogoFill className="text-5xl md:text-6xl" />,
      href: 'https://github.com',
      title: 'Github',
    },
  ]
  return (
    <div className="flex flex-wrap justify-evenly gap-5 md:gap-8">
      {skills.map((data: { icon: React.ReactNode; title: string; href: string }, index: number) => (
        <IconsCard key={index} {...data} />
      ))}
    </div>
  )
}

export default index