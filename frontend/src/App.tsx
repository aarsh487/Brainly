import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { SingupPage } from "./Pages/SingupPage"
import { HomePage } from "./Pages/HomePage"
import { LoginPage } from "./Pages/LoginPage"
import { useContent } from "./hooks/useContent"
import { useEffect } from "react"
import { RiLoader3Line } from "react-icons/ri";

function App() {
  const { checkAuth, user, checkingAuth } = useContent();

  useEffect(() => {
    console.log("check auth before")
    checkAuth();
    console.log("check auth after")
  },[checkAuth]);

  if(checkingAuth){
    return (
      <div className="flex items-center justify-center h-screen">
        <RiLoader3Line className="size-10 animate-spin" />
      </div>
    )
  }

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {user ? <HomePage /> : <Navigate to='/login' />} />
        <Route path="/signup" element = {!user ? <SingupPage /> : <Navigate to='/' />} />
        <Route path="/login" element = {!user? <LoginPage /> : <Navigate to='/' />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
