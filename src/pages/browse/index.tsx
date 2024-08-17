import { useHeroMovie } from "../../service/hooks/useHeroMovie"
import MainContainer from "./main-container"
import SecondaryContainer from "./secondary-container"

export const BrowsePage = () => {
    const { heroMovie, popularMovieList, isLoading } = useHeroMovie();
    const mainMovie: any = heroMovie ? heroMovie?.[Math.floor(Math.random() * heroMovie.length)] : ''

    if (isLoading) {
        return <p className="text-center">loading...</p>
    }
    return (
        <>
            <MainContainer
                id={mainMovie?.id}
                title={mainMovie?.title}
                overview={mainMovie?.overview}
                release_date={mainMovie?.release_date}
                vote_average={mainMovie?.vote_average}
            />
            <SecondaryContainer nowPlaying={heroMovie} popularMovie={popularMovieList} />
        </>
    )
}
