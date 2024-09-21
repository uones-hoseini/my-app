import "./App.css"
import Login from "./components/Login"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Signup from "./components/Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Search from "./components/Search/Search"

function App() {
  return (
    <div>
     <BrowserRouter>
     <Routes>
     <Route path="/search" element={<Search/>}/>
      <Route path="/test" element={<Header/>}/>
      <Route path="/login" element={<Login/>} />
      <Route path="/signup" element={<Signup/>}/>
     </Routes>
     </BrowserRouter>
    </div>
  )
}

export default App
