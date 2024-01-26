import MainContainer from "./MainContainer"
import Sidebar from "./Sidebar"

export const Body = () => {
    return (
        <div className="flex">
            <Sidebar />
            <MainContainer />
        </div>
    )
}
