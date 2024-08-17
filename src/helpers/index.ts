export const accessToken = import.meta.env.VITE_TMDB_ACCESS_TOKEN
export const baseUrl = import.meta.env.VITE_BASE_URL
export const nowPlayingMovie = import.meta.env.VITE_MOVIE_NOW_PLAYING
export const popularMovie = import.meta.env.VITE_MOVIE_POPULAR
export const movieImgBaseUrl = import.meta.env.VITE_MOVIE_IMAGE
export const apiKey = import.meta.env.VITE_TMDB_API_KEY
export const BG: string = 'https://assets.nflxext.com/ffe/siteui/vlv3/21a8ba09-4a61-44f8-8e2e-70e949c00c6f/6678e2ea-85e8-4db2-b440-c36547313109/IN-en-20240722-POP_SIGNUP_TWO_WEEKS-perspective_WEB_3457a8b1-284d-4bb5-979e-2a2e9bb342b3_medium.jpg'

export const options = {
    method: 'GET',
    headers: {
        accept: 'application/json',
        Authorization: `Bearer ${accessToken}`
    }
};

export const getAccessToken = () => {
    const isAuthenticated = localStorage.getItem('AUTH_TOKEN');
    return isAuthenticated
}


export const makeMovieImage = (imgUrl: string | any) => {
    return movieImgBaseUrl + imgUrl
}

export const makeElipsis = (str: string, len: number) => {
    return str?.length > len ? str.substring(0, len) + '...' : str
}