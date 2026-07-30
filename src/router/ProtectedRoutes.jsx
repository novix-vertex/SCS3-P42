import { useContext } from "react";
import { AuthContext } from "../context/AuthContext"
import { Navigate } from "react-router";

const ProtectedRoutes = ({ children }) => {
    const { isAuthenticated } = useContext(AuthContext);

    if (!isAuthenticated) {
        return <Navigate to="/" replace />
    }

    return children

}

export default ProtectedRoutes