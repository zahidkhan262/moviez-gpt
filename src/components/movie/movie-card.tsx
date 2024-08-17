import React from 'react'
import { makeMovieImage } from '../../helpers'
type MovieCardProps = {
    poster?: string;
    title?: string;
    rating?: string;
}
export const MovieCard: React.FC<MovieCardProps> = ({ poster, title, rating }) => {
    return (
        <div className='mr-4 w-48 transition-transform duration-300 ease-in-out transform hover:scale-110'>
            <img
                src={makeMovieImage(poster)}
                alt="movie image"
                className="w-full h-auto object-cover"
            />
            <div className="absolute inset-0 bg-black bg-opacity-50 flex flex-col justify-end items-center opacity-0 transition-opacity duration-300 ease-in-out hover:opacity-100 p-3">
                <div className="text-white text-sm font-semibold mb-1">{title}</div>
                <div className="text-yellow-400 text-sm">{`Rating: ${rating}`}</div>
            </div>
        </div>
    )
}
