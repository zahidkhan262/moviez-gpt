import React from 'react'
type CardBtnProps = {
    handleScroll: (direction: number) => void;
    direction: number;
    positionX: string;
    label: string;
}
export const CardButton: React.FC<CardBtnProps> = ({ handleScroll, direction, positionX, label }) => {
    return (
        <button
            className={`absolute ${positionX} top-40 text-2xl flex justify-center items-center transform -translate-y-1/4 hover:bg-gray-600 bg-opacity-40 hover:opacity-60 text-white w-10 h-64 rounded`}
            onClick={() => handleScroll(direction)}
        >
            {label}
        </button>
    )
}
