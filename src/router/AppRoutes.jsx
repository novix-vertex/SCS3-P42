import { Routes, Route } from "react-router"
import Auth from "../pages/Auth"
import MainLayout from "../layouts/MainLayout"
import Home from "../pages/Home"
import Shop from "../pages/Shop"
import About from "../pages/About"
import ProductDetails from "../components/productDetails/ProductDetails"
import ProtectedRoutes from "./ProtectedRoutes"
import RootLayout from "../layouts/RootLayout"

const AppRoutes = () => {
    return (
        <Routes>
            <Route path="/" element={<RootLayout />} />
            <Route path="/auth" element={<Auth />} />

            <Route element={<MainLayout />}>
                <Route path="/home"
                    element={<ProtectedRoutes>
                        <Home />
                    </ProtectedRoutes>} />
                <Route path="/shop"
                    element={<ProtectedRoutes>
                        <Shop />
                    </ProtectedRoutes>} />
                <Route path="/about"
                    element={<ProtectedRoutes>
                        <About />
                    </ProtectedRoutes>} />
                <Route path="/product/:id"
                    element={<ProtectedRoutes>
                        <ProductDetails />
                    </ProtectedRoutes>} />
            </Route>
        </Routes>
    )
}

export default AppRoutes