import Auth from "./pages/Auth"
import { Routes, Route } from "react-router"
import Navbar from "./components/common/Navbar"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import Footer from "./components/common/Footer"

const App = () => {
  return (
    <div>
      {/* <Auth /> */}
      <>
        <Navbar />

        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/about" element={<About />} />
          <Route path="/productDetails" element={<About />} />
        </Routes>
        <Footer />
      </>

    </div>
  )
}

export default App