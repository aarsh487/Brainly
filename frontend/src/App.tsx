import { BrowserRouter, Route, Routes } from "react-router-dom"
import { SingupPage } from "./Pages/SingupPage"
import { HomePage } from "./Pages/HomePage"
import { LoginPage } from "./Pages/LoginPage"


function App() {

  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element = {<HomePage />} />
        <Route path="/signup" element = {<SingupPage />} />
        <Route path="/login" element = {<LoginPage />} />
      </Routes>
    </BrowserRouter>
  )
}

export default App
