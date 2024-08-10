import React from 'react'
import logo from '../assets/netflix.svg';

const Header: React.FC = () => {
    return (
        <div className='absolute logo px-8 py-4 left-0 right-0 bg-gradient-to-b from-black z-10'>
            <img src={logo} alt="logo" />
        </div>
    )
}

export default Header