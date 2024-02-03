import { TbCornerDownRightDouble } from "react-icons/tb";


const index = () => {
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-3xl">About Me</h1>
        <div className="flex flex-col gap-4 md:px-4 md:py-2 rounded-lg">
            <div className="flex gap-1 md:gap-2 group">
              <span className="group-hover:text-emerald-500 transition-transform transform group-hover:translate-x-1"><TbCornerDownRightDouble size={20} /></span>
              <span className="">I bring extensive experience as a web developer, driven by a passion for creating dynamic and user-friendly web applications. My journey in web development has endowed me with a versatile skill set encompassing both frontend and backend domains. I excel in crafting robust scalable server-side applications with a strong focus on utilizing technologies such as Node.js and Express.</span>
            </div>
            <div className="flex gap-1 md:gap-2 group">
              <span className="group-hover:text-emerald-500 transition-transform transform group-hover:translate-x-1"><TbCornerDownRightDouble size={20} /></span>
              <span className=""> I&apos;m also a tech writer contributing articles to Dev.to. I am passionate about sharing knowledge and insights gained from my experiences. Additionally I actively participate in open-source projects fostering collaboration and innovation within the developer community.</span>
            </div>
            <div className="flex gap-1 md:gap-2 group">
              <span className="group-hover:text-emerald-500 transition-transform transform group-hover:translate-x-1"><TbCornerDownRightDouble size={20} /></span>
              <span className="">Beyond development my journey seamlessly extends into DevOps. Driven by a fervor for creating efficient and scalable systems, I&apos;m actively engaged in a continuous learning path, mastering tools that effectively bridge the gap between development and operations. My DevOps journey enriches my skill set, ensuring a holistic approach to crafting cutting-edge solutions.</span>
            </div>
            <div className="flex gap-1 md:gap-2 group">
              <span className="group-hover:text-emerald-500 transition-transform transform group-hover:translate-x-1"><TbCornerDownRightDouble size={20} /></span>
              <span className="">If you share my passion for technology and innovation, let&apos;s connect! Open to exciting opportunities collaborations and discussions about the fascinating world of software development, DevOps, and tech writing.
                Let me know if you have any opportunities that align with my skills and aspirations. Let&apos;s build something amazing together! 🚀.
              </span>
            </div>
          </div>
    </div>
  )
}

export default index
