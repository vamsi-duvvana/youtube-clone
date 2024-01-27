import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { closeMenu } from '../utils/configSlice';
import { useSearchParams } from 'react-router-dom';
import CommentsContainer from './CommentsContainer'

const WatchPage = () => {

    const dispatch = useDispatch();
    const [searchParams, setSearchParams] = useSearchParams();
    console.log("🚀 ~ WatchPage ~ searchParams:", searchParams.get("v"))


    useEffect(() => {
        dispatch(closeMenu());
    }, [])

    return (
        <>
            <div className='px-5'>
                <iframe
                    width="1100"
                    height="550"
                    src={`https://www.youtube.com/embed/${searchParams.get("v")}?si=3iVFPvNyepj9tYNk`}
                    title="YouTube video player"
                    frameBorder="0"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture;"
                    allowFullScreen>
                </iframe>
            </div>
            <CommentsContainer />
        </>
    )
}

export default WatchPage