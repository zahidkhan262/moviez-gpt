import { useEffect, useState } from 'react'
import { baseUrl, options } from '../../helpers';

export const useHeroVideo = (movieId: any) => {
    console.log(baseUrl + movieId + '/videos', "base")
    const [heroVideo, setHeroVideo] = useState<any>('')
    const [isVideoLoading, setIsVideoLoading] = useState<boolean>(false);

    // if (!movieId) return
    useEffect(() => {
        try {
            (async () => {
                setIsVideoLoading(true)
                console.log(options)
                let response: any = await fetch(baseUrl + movieId + '/videos?language=en-US', options)
                response = await response.json()
                if (response?.results?.length) {
                    const findTrailer = response?.results.find((movie: any) => movie.type === "Trailer");
                    setHeroVideo(findTrailer)
                    setIsVideoLoading(false);
                }
            })()
        } catch (error) {
            setIsVideoLoading(false)
        }
    }, [movieId]);

    return { heroVideo, isVideoLoading }
}
