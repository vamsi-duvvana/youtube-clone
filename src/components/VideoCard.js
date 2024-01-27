import dayjs from "dayjs";
import relativeTime from "dayjs/plugin/relativeTime";

const VideoCard = ({ data }) => {

    const { snippet, statistics } = data;
    const { channelTitle, title, thumbnails } = snippet;

    const getTime = (dateTime) => {
        const date = dateTime.split('T')[0]
        dayjs.extend(relativeTime);
        const diff = dayjs(date).fromNow(true);
        return diff;
    }

    return (
        <div className="p-2 m-2 w-80">
            <img className="rounded-lg" src={thumbnails.medium.url} alt="thumbnail" />
            <ul>
                <li className="font-bold py-2">{title}</li>
                <li className="text-sm text-gray-500">{channelTitle}</li>
                <li className="text-sm text-gray-500">{statistics.viewCount % 1000}K views • {getTime(snippet.publishedAt)} ago</li>
            </ul>
        </div>
    )
}

export default VideoCard
