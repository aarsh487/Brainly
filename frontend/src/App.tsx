import { BrowserRouter, Navigate, Route, Routes } from "react-router-dom"
import { SingupPage } from "./Pages/SingupPage"
import { HomePage } from "./Pages/HomePage"
import { LoginPage } from "./Pages/LoginPage"
import { useContent } from "./hooks/useContent"
import { useEffect } from "react"


function App() {
  const { isAuth, checkAuth } = useContent();

  useEffect(() => {
    checkAuth();
  },[checkAuth]);

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {isAuth ? <HomePage /> : <Navigate to='/login' />} />
        <Route path="/signup" element = {<SingupPage />} />
        <Route path="/login" element = {<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
