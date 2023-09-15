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
      icon: <SiJavascript size="60" />,
      href: 'https://javascript.org/',
      title: 'React.Js',
    },
    {
      icon: <SiTypescript size="60" />,
      href: 'https://typescript.org/',
      title: 'React.Js',
    },
    {
      icon: <FaPython size="60" />,
      href: 'https://www.python.org/',
      title: 'Python',
    },
    {
      icon: <RiReactjsFill size="60" />,
      href: 'https://nodejs.org/',
      title: 'Node.Js',
    },
    {
      icon: <SiNextdotjs size="60" />,
      href: 'https://nextjs.org/',
      title: 'Next.Js',
    },
    {
      icon: <IoLogoNodejs size="60" />,
      href: 'https://nodejs.org/',
      title: 'NodeJs',
    },
    {
      icon: <SiExpress size="60" />,
      href: 'https://expressjs.org',
      title: 'ExpressJs',
    },
    {
      icon: <SiMariadb size="60" />,
      href: 'https://mariadb.org',
      title: 'MariaDB',
    },
    {
      icon: <BiLogoMongodb size="60" />,
      href: 'https://mongodb.org',
      title: 'MongoDb',
    },
    {
      icon: <FaGitAlt size="60" />,
      href: 'https://git.org',
      title: 'Git',
    },
    {
      icon: <SiLinux size="60" />,
      href: 'https://archilinux.org',
      title: 'Linux',
    },
    {
      icon: <PiGithubLogoFill size="60" />,
      href: 'https://github.com',
      title: 'Github',
    },
  ]
  return (
    <div className="flex flex-wrap">
      {skills.map((data: { icon: React.ReactNode; title: string; href: string }, index: number) => (
        <IconsCard key={index} {...data} />
      ))}
    </div>
  )
}

export default index
