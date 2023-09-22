import IconsCard from "../IconsCard"
import Form from './Form'

import { BiSolidMessageEdit } from "react-icons/bi"
import { RiInstagramFill, RiLinkedinFill, RiUser3Fill } from "react-icons/ri"
import { PiGithubLogoFill, PiDevToLogoFill, PiTwitterLogoFill, PiGitlabLogoSimpleFill } from "react-icons/pi"
import { MdEmail } from "react-icons/md"


const index: React.FC = () => {
    const skills = [
        {
            icon: <PiGithubLogoFill size="40" />,
            href: 'https://github.com',
            title: 'Github',
        },
        {
            icon: <RiLinkedinFill size="40" />,
            href: 'https://typescript.org/',
            title: 'Linkedin',
        },
        {
            icon: <PiDevToLogoFill size="40" />,
            href: 'https://www.python.org/',
            title: 'Dev.To',
        },
        {
            icon: <MdEmail size="40" />,
            href: 'mail-to:mnamesujit@gmail.com',
            title: 'Email',
        },
        {
            icon: <RiInstagramFill size="40" />,
            href: 'https://instagram.com/',
            title: 'Instagram',
        },
        {
            icon: <PiTwitterLogoFill size="40" />,
            href: 'https://twitter.com/',
            title: 'Twitter',
        },
        {
            icon: <PiGitlabLogoSimpleFill size="40" />,
            href: 'https://gitlab.com',
            title: 'Gitlab',
        },
    ]

    return (
        <div className="w-screen">
        <div className="flex flex-wrap">
            {skills.map((data: { icon: React.ReactNode; title: string; href: string }, index: number) => (
                <IconsCard key={index} {...data} />
            ))}
            </div>

           <div className="w-full flex justify-around items-center">
            <div className="flex flex-col items-center space-y-4 text-white">
                <div className="relative">
                    <RiUser3Fill size={80} />
                    <BiSolidMessageEdit size={30} className="absolute top-[-10px] left-16" />
                </div>
                <h1 className="text-4xl text-">Send me your message</h1>
                <p className="">Please share your thoughts and opinions, whether about me or my website.</p>
            </div>
           <div>
            <Form />
           </div>
           </div>
        </div>
    )
}

export default index;