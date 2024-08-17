import React from 'react'
import logo from '../assets/netflix.svg';
import { Avatar, AvatarFallback, AvatarImage } from '../components/ui/avatar';

const Header: React.FC = () => {
    return (
        <div className='fixed logo flex justify-between items-center pl-24 py-4 left-0 right-0 bg-gradient-to-b from-black z-10'>
            <img src={logo} alt="logo" />
            <div className="user-profile pr-12">
                <Avatar className='text-white' >
                    <AvatarImage src="https://github.com/shadcn.png" alt='src' />
                    <AvatarFallback>ZK</AvatarFallback>
                </Avatar>
            </div>
        </div>
    )
}

export default Header