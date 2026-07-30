import { useState } from "react";
import LoginCard from "../components/auth/LoginCard";
import RegisterCard from "../components/auth/RegisterCard";
import AuthInfoPage from "../components/common/AuthInfoPage";

const Auth = () => {
    const [isLogin, setIsLogin] = useState(true);
    return (
        <div className="min-h-screen bg-neutral-950 text-white">
            <div className="grid min-h-screen lg:grid-cols-2">
                <section className="section-left border border-neutral-800 flex flex-col justify-between p-8 lg:p-12">
                    <AuthInfoPage />
                </section>
                <section className=" section-right border border-neutral-800 flex items-center justify-center">
                    {isLogin ? (<LoginCard setIsLogin={setIsLogin} />) : (<RegisterCard setIsLogin={setIsLogin} />)}

                </section>
            </div>
        </div>
    )
}

export default Auth