import data from "../../../locales/data.json"
const index = () => {
    const about = data['about-me'].description;
  return (
    <div className="flex flex-col gap-4">
        <h1 className="text-3xl text-center">About Me</h1>
        <div className="flex flex-col md:flex-row gap-4 items-center">
            <div className="w-100 sm:w-2/5 border">
              <img src="https://media.istockphoto.com/id/1320530947/vector/boys-and-girl-study-in-computer-class-using-internet-technology.jpg?s=612x612&w=0&k=20&c=3NgC89BE130yZ2sENW8v9TxWBgAkIzM6aZ-UHPAdQVE=" alt="profile" className="w-full"/>
            </div>
            <div className="w-full bg-red-500 sm:w-3/5">
              <p className="text-xl">{about}</p>
            </div>
        </div>
    </div>
  )
}

export default index
