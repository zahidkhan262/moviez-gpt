import { BrowserRouter } from 'react-router-dom'
import './App.css'
import { Toaster } from 'react-hot-toast'
import { AppRouter } from './routing/app-router'
import Header from './layout/header'

function App() {

  return (
    <BrowserRouter>
      <Header />
      <AppRouter />
      <Toaster />
    </BrowserRouter>
  )
}

export default App
