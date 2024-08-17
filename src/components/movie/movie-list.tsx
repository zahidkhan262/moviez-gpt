import React, { useRef } from 'react'
import { MovieCard } from './movie-card'
import { CardButton } from './card-button';
type MovieListProps = {
    nowPlaying?: any;
    title: string
}
const MovieList: React.FC<MovieListProps> = ({ nowPlaying, title }) => {
    const scrollContainerRef = useRef<null | any>(null);


    const handleScroll = (direction: number) => {
        if (scrollContainerRef.current) {
            scrollContainerRef.current.scrollBy({
                left: direction * 900,
                behavior: 'smooth'
            });
        }
    };

    return (
        <div className='relative'>
            <h3 className='text-xl font-bold py-4 pl-4'>{title}</h3>
            <div className='flex pl-2 overflow-x-scroll scrollbar-hidden' ref={scrollContainerRef}>
                <div className="flex">
                    {
                        nowPlaying.length && nowPlaying?.map((movie: any) => (
                            <MovieCard
                                key={movie?.id}
                                poster={movie?.poster_path}
                                title={movie?.title}
                                rating={movie?.vote_average}
                            />
                        ))
                    }
                </div>
                <CardButton handleScroll={handleScroll} direction={-1} positionX='left-0' label={'<'} />
                <CardButton handleScroll={handleScroll} direction={1} positionX='right-0' label={'>'} />
            </div>
        </div>
    )
}

export default MovieList