import AboutStack from "./AboutStack"
import AboutContext from "./AboutContext"
import Formations from "./Formations"
import StackGraph from "./StackGraph"
import GitContributions from "./GitContributions"

const index = () => {
  return (
    <div className="flex flex-col gap-10">
      <AboutStack />
      <StackGraph />
      <AboutContext />
      <Formations />
      <GitContributions />
    </div>
  )
}

export default index
