import React, { useState } from 'react';

const Slider = () => {
    const [currentSlide, setCurrentSlide] = useState(0);
    const skills = [
        { name: 'React', icon: 'react-icon' },
        { name: 'Next', icon: 'next-icon' },
        { name: 'Node', icon: 'node-icon' },
        { name: 'Express', icon: 'express-icon' },
        { name: 'MUI', icon: 'mui-icon' },
        { name: 'Redux', icon: 'redux-icon' },
        { name: 'JavaScript', icon: 'js-icon' },
    ];

    const handlePrev = () => {
        setCurrentSlide((prevSlide) => (prevSlide - 1 + skills.length) % skills.length);
    };

    const handleNext = () => {
        setCurrentSlide((prevSlide) => (prevSlide + 1) % skills.length);
    };

    const displayedSlides = [
        skills[(currentSlide - 2 + skills.length) % skills.length],
        skills[(currentSlide - 1 + skills.length) % skills.length],
        skills[currentSlide],
        skills[(currentSlide + 1) % skills.length],
        skills[(currentSlide + 2) % skills.length],
    ];

    return (
        <div className="slider-container">
            <div className="slides">
                {displayedSlides.map((skill, index) => (
                    <div key={index} className="slide">
                        {/* <div className={skill.icon}></div> */}
                        <p>{skill.name}</p>
                    </div>
                ))}
            </div>
            <div className="controls">
                <button className="prev" onClick={handlePrev}>
                    Prev
                </button>
                <button className="next" onClick={handleNext}>
                    Next
                </button>
            </div>
        </div>
    );
};

export default Slider;
