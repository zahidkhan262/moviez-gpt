import { useEffect, useState } from 'react'
import { baseUrl, nowPlayingMovie, options, popularMovie } from '../../helpers';

export const useHeroMovie = () => {
    const [heroMovie, setHeroMovie] = useState<any>([])
    const [popularMovieList, setPopularMovieList] = useState<any>([])
    const [isLoading, setIsLoading] = useState<boolean>(false);

    useEffect(() => {
        (async () => {
            try {
                setIsLoading(true)
                console.log(options)
                let nowPlayingRes: any = await fetch(baseUrl + nowPlayingMovie + 1, options);
                let popularRes: any = await fetch(baseUrl + popularMovie + 1, options);
                const [nowPlaying, popular] = await Promise.all([nowPlayingRes, popularRes])


                if (!nowPlaying.ok || !popular.ok) {
                    throw new Error('Failed to fetch movies');
                }

                const nowPlayingData = await nowPlaying.json();
                const popularData = await popular.json();
                setHeroMovie(nowPlayingData?.results || []);
                setPopularMovieList(popularData?.results || [])
            } catch (error) {
                console.log(error)
            } finally {
                setIsLoading(false)
            }
        })()
    }, []);



    return { popularMovieList, heroMovie, isLoading }
}
