import { Navigate } from "react-router";
import { AuthContext } from "../context/AuthContext";
import { useContext } from "react";

const RootLayout = () => {
    const { isAuthenticated } = useContext(AuthContext)
    return isAuthenticated
        ? <Navigate to="/home" replace />
        : <Navigate to="/auth" replace />;
}

export default RootLayout