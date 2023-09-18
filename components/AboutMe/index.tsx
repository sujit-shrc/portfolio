import AboutStack from "./AboutStack"
import AboutContext from "./AboutContext"
import Formations from "./Formations"
import StackGraph from "./StackGraph"

const index = () => {
  return (
    <div>
      <AboutStack />
      <StackGraph />
      <AboutContext />
      <Formations />
    </div>
  )
}

export default index