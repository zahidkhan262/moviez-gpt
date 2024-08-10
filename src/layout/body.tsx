import React from 'react'
import Header from './header'
import Login from '../pages/auth/login'
export const Body: React.FC = () => {
    return (
        <div className=''>
            <Header />
            <Login />
        </div>
    )
}
