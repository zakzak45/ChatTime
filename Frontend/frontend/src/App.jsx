import {BrowserRoute , Routes, Route} from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginInPage from './pages/LoginInPage'
import SignUpPage from './pages/SignupPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { axiosInstance } from "./lib/axios"

function App() {


  return (
    <>

    <div>
  
   <Navbar/>
   <Routes>
<Route path="/" element={<HomePage />} />
<Route path="/signup" element={<SignUpPage />} />
<Route path="/login" element={<LoginInPage />} />
<Route path="/settings" element={<SettingsPage/>} />
<Route path="/Profile" element={<ProfilePage/>} />
   </Routes>

    </div>

    </>
  )
}

export default App
