import "./App.css"
import Login from "./components/Login"
import "@fontsource/roboto/300.css"
import "@fontsource/roboto/400.css"
import "@fontsource/roboto/500.css"
import "@fontsource/roboto/700.css"
import Signup from "./components/Signup"
import { BrowserRouter, Route, Routes } from "react-router-dom"
import Header from "./components/Header"
import Search from "./components/Search/OrderPage"
import Profile from "./components/Profile/Profile"
import MyProfile from "./components/Profile/MyProfile"
import OrderPage from "./components/Search/OrderPage"

function App() {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/orderpage" element={<OrderPage />} />
          <Route path="/profile" element={<Profile />} />
          <Route path="/myprofile" element={<MyProfile />} />
          <Route path="/login" element={<Login />} />signup
          <Route path="/" element={<Signup />} />
        </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
