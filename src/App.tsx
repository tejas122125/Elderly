import { Routes, Route } from "react-router-dom"
import Header from "./components/shared/Header"
import { SignIn, SignUp } from "@clerk/clerk-react"
import Home from "./pages/Home"

function App() {
  

  return (
    <>    
   <div className=" w-screen h-screen bg-slate-500">
    <Routes>
    <Route path="/" element={<Header/>}/>  
    <Route path="/home" element={<Home/>}/>      
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
  </Routes>   
  </div>
    </>
  )
}

export default App
