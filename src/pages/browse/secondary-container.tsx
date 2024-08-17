import MovieList from "../../components/movie/movie-list";

type SecondaryProps = {
    nowPlaying: any;
    popularMovie: any;
}

const SecondaryContainer: React.FC<SecondaryProps> = ({ nowPlaying, popularMovie }) => {
    console.log(nowPlaying, "nowPlaying")
    console.log(popularMovie, "popularMovie")
    return (
        <div className="secondary-container h-[100%] pb-20 bg-black text-white">
            <div className='-mt-44 z-20'>
                <MovieList nowPlaying={nowPlaying} title={"Now Playing"} />
                <MovieList nowPlaying={popularMovie} title={"Popular"} />
            </div>
        </div>
    )
}

export default SecondaryContainer