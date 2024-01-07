import data from "../../../locales/data.json";
import Image from "next/image";

const index = () => {
    const about = data['about-me'].description;
  return (
    <div className="flex flex-col gap-4 w-100">
        <h1 className="text-3xl text-center">About Me</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-full md:w-2/5 flex justify-center items-center">
              <Image src="/me.png" width={250} height={250} alt="profile" />
            </div>
            <div className="w-100 md:w-3/5">
              <p className="text-xl">{about}</p>
            </div>
        </div>
    </div>
  )
}

export default index
