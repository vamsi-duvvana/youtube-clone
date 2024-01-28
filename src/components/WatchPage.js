import React, { useEffect, useState } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/configSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer'
import { GOOGLE_API_KEY, VIDEO_DATA_URL } from '../utils/constants';

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    const [videoData, setVideoData] = useState({})
    const id = searchParams.get("v")
    const getVideoData = async (id) => {
        const data = await fetch(`${VIDEO_DATA_URL}&id=${id}&key=${GOOGLE_API_KEY}`)
        const json = await data.json();
        setVideoData(json.items[0]);
    }


    useEffect(() => {
        dispatch(closeMenu());
        getVideoData(id);
    }, [])

    return (
        <>
            <div className='flex flex-col'>
                <div className='px-5'>
                    <iframe
                        width="1100"
                        height="550"
                        src={`https://www.youtube.com/embed/${id}?si=3iVFPvNyepj9tYNk`}
                        title="YouTube video player"
                        frameBorder="0"
                        allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                        allowFullScreen
                        className='rounded-lg'
                    >
                    </iframe>
                    <div>
                        <div className='p-2 text-2xl font-semibold'>{videoData?.snippet?.title}</div>
                        <div className='flex justify-between'>
                            <div className='flex p-2 items-center'>
                                <div className='font-semibold text-xl mr-5'>{videoData?.snippet?.channelTitle}</div>
                                <button className='px-5 border border-gray-300 rounded-full py-2'>Join</button>
                                <button className='px-5 border border-gray-300 rounded-full ml-3 py-2 text-white bg-gray-800'>Subscribe</button>
                            </div>
                            <div className='p-2 border border-gray-300 rounded-full'>
                                <button className='py-2 px-4 bg-white border-r border-gray-300'>Likes {videoData?.statistics?.likeCount / 1000}K</button>
                                <button className='py-2 px-4 bg-white border-r border-gray-300'>Dislike</button>
                                <button className='py-2 px-4 bg-white border-r border-gray-300'>Share</button>
                                <button className='py-2 px-4 bg-white ' prefix=''>Download</button>
                            </div>
                        </div>
                    </div>
                </div>
                <CommentsContainer />
            </div>
        </>
    )
}

export default WatchPage