import Auth from "./pages/Auth"
import { Routes, Route } from "react-router"
import Home from "./pages/Home"
import Shop from "./pages/Shop"
import About from "./pages/About"
import MainLayout from "./layouts/MainLayout"
import ProductDetails from "./components/productDetails/ProductDetails"

const App = () => {
  return (
    <Routes  >
      <Route path="/" element={<Auth />} />

      <Route element={<MainLayout />}>
        <Route path="/home" element={<Home />} />
        <Route path="/shop" element={<Shop />} />
        <Route path="/about" element={<About />} />
        <Route path="/product/:id" element={<ProductDetails />} />
      </Route>
    </Routes>
  )
}

export default App