import { Outlet } from "react-router"
import Footer from "../components/common/Footer"
import Navbar from "../components/common/Navbar"

const MainLayout = () => {
    return (
        <>
            <Navbar />
            <main className="min-h-screen">
                <Outlet />
            </main>
            <Footer />
        </>
    )
}

export default MainLayout