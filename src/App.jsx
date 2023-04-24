import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import HomeLayout from "./layout/home/Index"
import { AboutUs } from "./layout/About"
import Categories from "./layout/Categories"
import Testemonies from "./layout/Testemonies"
import Contact from "./layout/ContactMe/Contact"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeLayout/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/Testemonies" element={<Testemonies/>}/>
        <Route path="/Contact" element={<Contact/>} />
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
