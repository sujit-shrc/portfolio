import DevToPosts from "./DevTo";
import GitHub from "./GitHub";


const index: React.FC =  () => {
    return (
        <div className="flex flex-col gap-8">
            <DevToPosts />
            <GitHub />
        </div>
    )
}

export default index;