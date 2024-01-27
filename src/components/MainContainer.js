import ButtonList from "./ButtonList"
import VideoContainer from "./VideoContainer"

const MainContainer = () => {
    return (
        <div className="overflow-hidden">
            <div className="">
                <ButtonList />
            </div>
            <div className="mt-3 ml-3">
                <VideoContainer />
            </div>

        </div>
    )
}

export default MainContainer
