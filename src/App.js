import "./App.css"
import Login from "./components/Login"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Signup from "./components/Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"

function App() {
  return (
    <div>
     <BrowserRouter>
     <Header/>
     <Routes>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
