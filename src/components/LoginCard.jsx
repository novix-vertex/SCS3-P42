import {
    ArrowRight,
    Eye,
    Lock,
    Mail,
} from "lucide-react";

const LoginCard = () => {
    return (
        <div className="min-h-screen bg-[#0A0A0A] flex items-center justify-center px-4">
            <div className="w-full max-w-140 rounded-[30px] border border-[#2A2A2A] bg-[#121212] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">
                <h1 className="text-5xl font-bold text-white">
                    Sign in
                </h1>

                <p className="mt-3 text-lg text-gray-500">
                    Enter your credentials to continue
                </p>

                <div className="mt-12 space-y-6">
                    <div className="relative">
                        <Mail
                            size={20}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        <input
                            type="email"
                            placeholder="Email address"
                            className="h-16 w-full rounded-2xl border border-[#323232] bg-[#1B1B1B] pl-16 pr-5 text-white placeholder:text-gray-500 outline-none transition focus:border-lime-400"
                        />
                    </div>

                    <div className="relative">
                        <Lock
                            size={20}
                            className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
                        />

                        <input
                            type="password"
                            placeholder="Password"
                            className="h-16 w-full rounded-2xl border border-[#323232] bg-[#1B1B1B] pl-16 pr-16 text-white placeholder:text-gray-500 outline-none transition focus:border-lime-400"
                        />

                        <Eye
                            size={20}
                            className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
                        />
                    </div>

                    <button className="group flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-[#D9FF00] text-2xl font-semibold text-black transition-all hover:scale-[1.01] hover:shadow-[0_0_25px_rgba(217,255,0,0.4)]">
                        Sign in

                        <ArrowRight
                            size={24}
                            className="transition-transform group-hover:translate-x-1"
                        />
                    </button>
                </div>

                <p className="mt-10 text-center text-lg text-gray-500">
                    Don't have an account?{" "}
                    <span className="cursor-pointer font-semibold text-[#D9FF00] hover:underline">
                        Create one
                    </span>
                </p>
            </div>
        </div>
    );
};

export default LoginCard;