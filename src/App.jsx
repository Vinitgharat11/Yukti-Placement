import { BrowserRouter, Route, Routes } from "react-router-dom"
import Navbar from "./components/navbar"
import HomeLayout from "./layout/home/Index"
import Contact from "./layout/home/Contact"
import { AboutUs } from "./layout/About"
import Categories from "./layout/Categories"
import Testemonies from "./layout/Testemonies"

function App() {
  return (
    <div>
      <BrowserRouter>
      <Navbar/>
      <Routes>
        <Route path="/" element={<HomeLayout/>}/>
        <Route path="/contact" element={<Contact/>}/>
        <Route path="/AboutUs" element={<AboutUs/>}/>
        <Route path="/Categories" element={<Categories/>}/>
        <Route path="/Testemonies" element={<Testemonies/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App
