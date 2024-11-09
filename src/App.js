
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Signup from "./components/Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "../src/components/Header/Header"
import Search from "./components/Search/OrderPage"
import Profile from "./components/Profile/Profile"
import MyProfile from "./components/Profile/MyProfile"
import OrderPage from "./components/Search/OrderPage"
import SimpleModal from "./components/Modals/ModalOrder"
import CreateOrder from "./components/Form/CreateOrder"
import EditProfile from "./components/Form/EditProfile"
import { useState } from "react"
import Axios from "axios"
import { Provider, useDispatch, useSelector } from "react-redux"
import { loggin } from "./Reducer/logginSlice"

Axios.defaults.baseURL = "http://localhost:1337/api"
Axios.interceptors.request.use((config) => {
  const token = localStorage.getItem("jwt"); 
  if (token) {
      config.headers.Authorization = `Bearer ${token}`;
  }
  return config;
});


function App() {
  // const [loggedIn, setLoggedIn] = useState(localStorage.getItem("jwt"))
  const dispatch=useDispatch()
  const isLoggedin=useSelector((state)=>state.isLoggedin)
  console.log(isLoggedin)
  return (
    <div className="App">
      
      <BrowserRouter>
        <Header />
        <Routes>
        <Route path="/" element={isLoggedin ? <OrderPage /> : <Signup />} />
          {isLoggedin && (
            <>
              <Route path="/profile" element={<Profile />} />
              <Route path="/create-order" element={<CreateOrder />} />
              <Route path="/myprofile" element={<MyProfile />} />
              <Route path="/orders" element={< OrderPage/>} />
              <Route path="/edit-profile" element={< EditProfile/>} />
            </>
          )}
          {/* <Route path="/login" element={<Login />} /> */}
          <Route path="*" element={<h2><br/><br/><br/><br/><br/> 404 - NOT FOUND</h2>}/>
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
