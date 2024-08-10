import React, { useRef, useState } from 'react'
import { Link, NavLink } from 'react-router-dom'
import { checkValidation } from '../../utils/validate';

const BG: string = 'https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_medium.jpg'

const Login: React.FC = () => {

    const [isLogin, setIsLogin] = useState<boolean>(true);
    const [error, setError] = useState<string | null>(null);

    const email = useRef<any>(null)
    const password = useRef<any>(null)

    const handleToggle = () => setIsLogin((prev: boolean) => !prev);

    const handleSubmit = () => {
        const message: string | null = checkValidation(email.current.value, password.current.value);
        setError(message)
        console.log(message, "message")
    }

    return (
        <div className='login-page'>
            <div className="hero-bg absolute">
                <img src={BG} alt="bg" />
            </div>
            <form onSubmit={(e) => e.preventDefault()}
                className='w-4/12 p-12 text-white text-center absolute bg-black left-0 right-0 my-36 mx-auto rounded-lg bg-opacity-80 '>
                <h1 className='text-white font-bold text-left text-3xl py-4'>{isLogin ? 'Sign In' : 'Sign Up'}</h1>

                {
                    !isLogin &&
                    <input
                        type="text"
                        placeholder='Enter your Full Name'
                        className='py-3 my-4 px-2 w-full text-gray-700 bg-gray-100'
                    />
                }
                <input
                    type="text"
                    placeholder='Enter your email'
                    className='py-3 my-4 px-2 w-full text-gray-700 bg-gray-100'
                    ref={email}
                />
                <input
                    type="password"
                    placeholder='Enter your password'
                    className='py-3 my-4 px-2 w-full text-gray-700 bg-gray-100'
                    ref={password}
                />
                <p className='text-red-500 text-sm text-left'>{error}</p>

                <div className="signin-btn my-4">
                    <button
                        onClick={handleSubmit}
                        className='py-2 font-bold text-xl px-16 bg-red-700 text-white w-full'>
                        {
                            isLogin ? 'Sign In' : 'Sign Up'
                        }
                    </button>
                </div>
                <div className="forgot-pass py-4">
                    <a href="/forgot-password" >Forgot password?</a>
                </div>
                <div className="footer py-4 text-left">
                    <input type="checkbox" /><span className='pl-2 text-sm'>Remember me</span>
                    <div className="py-2 cursor-pointer" onClick={handleToggle}>
                        {
                            !isLogin ?
                                <>
                                    <span className='text-sm'>Already Netflix User?</span>
                                    <span className='text-bold hover:underline text-blue-300 hover:text-blue-500' > Sign in now</span>
                                </>
                                :
                                <>
                                    <span className='text-sm'>New to Netflix?</span>
                                    <span className='text-bold hover:underline text-blue-300 hover:text-blue-500' > Sign up now</span>
                                </>

                        }
                    </div>
                    <p className='text-xs pr-20'>This page is protected by Google reCAPTCHA to ensure you're not a bot.</p>
                </div>
            </form>
        </div>
    )
}

export default Login