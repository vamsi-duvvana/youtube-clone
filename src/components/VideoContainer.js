import { useEffect, useState } from "react"
import { YOUTUBE_VIDEO_API_URL } from "../utils/constants"
import VideoCard from "./VideoCard";
import { Link } from "react-router-dom";
import ShimmerUi from "./ShimmerUi";

const VideoContainer = () => {

    const [videos, setVideos] = useState([]);

    const getVideo = async () => {
        const data = await fetch(YOUTUBE_VIDEO_API_URL);
        const json = await data.json();
        setVideos(json.items);
    }

    useEffect(() => {
        getVideo();
    }, [])

    return videos.length === 0 ? <ShimmerUi /> : (
        <div className="flex justify-evenly px-2 flex-wrap ml-6">
            {videos.map((data) => {
                return (
                    <div key={data.id}>
                        <Link to={`/watch?v=${data.id}`}>
                            <VideoCard data={data} />
                        </Link>
                    </div>
                )
            })}
        </div>
    )
}

export default VideoContainer
