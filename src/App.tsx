import { Routes, Route } from "react-router-dom"
import Header from "./components/shared/Header"
import { SignIn, SignUp } from "@clerk/clerk-react"
import Home from "./pages/Home"
import Helper from "./pages/Helper"
import ElderRegisterForm from "./components/shared/ElderRegisterForm"

function App() {
  

  return (
    <>    
   <div className=" w-full h-full flex flex-1 flex-col bg-slate-500">
    <Routes>
    <Route path="/" element={<Header/>}/>  
    <Route path="/uploadtest" element={<ElderRegisterForm/>}/>  

    <Route path="/home" element={<Home/>}/>      
    <Route path="/signin" element={<SignIn/>}/>
    <Route path="/signup" element={<SignUp/>}/>
    <Route path="/helper" element={<Helper/>}/>

  </Routes>   
  </div>
    </>
  )
}

export default App
