import React from "react"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Admin from "./components/Admin"
import Quiz from "./components/Quiz"
import Result from "./components/Result"
import Home from "./components/Home"
import Login from "./components/login/Login"


function App() {
  
  return (
    <BrowserRouter>
      <div className="bg-gradient-to-b font-body from-violet-500 to-violet-900  h-screen flex justify-center items-center">
        <Routes>
          <Route path="/" element={<Home/>} />
          <Route path="/quiz" element={<Quiz/>}/>
          <Route path="/admin" element={<Admin/>}/>
          <Route path="/result" element={<Result/>}/>
          <Route path="/login" element={<Login/>}/>
        </Routes>
      </div>
   </BrowserRouter>
   
  )
}

export default App
