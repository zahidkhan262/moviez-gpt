import React from "react"
import { useHeroVideo } from "../../service/hooks/useHeroVideo";
import { Button } from "../../components/ui/button";
import { makeElipsis } from "../../helpers";
type MainProps = {
    id: number;
    title: string;
    vote_average: any;
    overview: string;
    release_date: any
}
const MainContainer: React.FC<MainProps> = (props) => {
    const { id, title, overview, release_date, vote_average } = props;
    const { heroVideo } = useHeroVideo(id) || ''

    return (
        <div className="main-container relative ">

            <div className="caption-wrapper w-full aspect-video pt-[16%] px-24 absolute bg-gradient-to-r from-black text-white ">
                <h3 className="text-5xl font-bold w-5/12">{title}</h3>
                <p className="text-sm py-3 w-4/12">{makeElipsis(overview, 150)}</p>
                <strong>Rating: {vote_average} </strong>
                <strong>Release: {release_date}</strong>
                <div className="caption-btn pt-6">
                    <Button className="mr-4 px-8 text-black bg-gray-200 bg-opacity-100 hover:bg-white">Play</Button>
                    <Button className="px-10 bg-gray-500 hover:bg-gray-400">More Info</Button>
                </div>
            </div>

            <div className="video-wrapper">
                <iframe
                    className="w-full aspect-video"
                    src={`https://www.youtube.com/embed/${heroVideo?.key}?&autoplay=1&mute=1&controls=0&rel=0&modestbranding=1`}
                    title="YouTube video player"
                    allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                    referrerPolicy="strict-origin-when-cross-origin"
                    allowFullScreen
                >
                </iframe>
            </div>
        </div>
    )
}

export default MainContainer