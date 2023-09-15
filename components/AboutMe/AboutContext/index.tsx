import data from "../../../locales/data.json"
const index = () => {
    const about = data['about-me'].description;
  return (
    <div className="text-white">
        <h1 className="text-3xl text-center">About Me</h1>
        <p className="text-xl">{about}</p>
    </div>
  )
}

export default index
