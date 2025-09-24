import {BrowserRoute , Routes, Route, Navigate} from "react-router-dom"
import Navbar from './components/Navbar'
import HomePage from './pages/HomePage'
import LoginInPage from './pages/LoginInPage'
import SignUpPage from './pages/SignupPage'
import SettingsPage from './pages/SettingsPage'
import ProfilePage from './pages/ProfilePage'
import { axiosInstance } from "./lib/axios"
import { useAuthstore } from "./store/useAuthstore"
import { useEffect } from "react"

function App() {
 
  const {authUser , checkAuth,isCheckingAuth} = useAuthstore()

useEffect(()=>{
  checkAuth()
},[checkAuth])

  if (isCheckingAuth && !authUser)
    return (
      <div className="flex items-center justify-center h-screen">
        <Loader className="size-10 animate-spin" />
      </div>
    );

  return (
    <>

    <div>
  
   <Navbar/>
   <Routes>
<Route path="/" element={authUser ? <HomePage /> : <Navigate to="/login" />}/>
<Route path="/signup" element={!authUser ? <SignUpPage /> : <Navigate to="/" />} />
<Route path="/login" element={!authUser ? <LoginInPage/>:<Navigate to="/" />} />
<Route path="/settings" element={<SettingsPage/>} />
<Route path="/Profile" element={authUser ? <ProfilePage /> : <Navigate to="/login" />} />
   </Routes>
       </div>

    </>
  )
}

export default App
