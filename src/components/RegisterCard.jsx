import {
  ArrowRight,
  Eye,
  Lock,
  Mail,
  User
} from "lucide-react";

const RegisterCard = () => {
  return (
    <div className="min-h-screen bg-[#0A0A0A] flex flex-col items-center justify-center">

      <div className="w-full max-w-140 rounded-[30px] border border-[#292929] bg-[#121212] p-10 shadow-[0_20px_60px_rgba(0,0,0,0.6)]">

        <h1 className="text-5xl font-bold text-white">
          Create account
        </h1>

        <p className="mt-3 text-lg text-gray-500">
          Join SkyMart and start shopping
        </p>

        <div className="mt-12 space-y-5">

          <div className="relative">
            <User
              size={20}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="text"
              placeholder="Full name"
              className="h-16 w-full rounded-2xl border border-[#333333] bg-[#1C1C1C] pl-16 pr-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#D9FF00]"
            />
          </div>

          <div className="relative">
            <Mail
              size={20}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="email"
              placeholder="Email address"
              className="h-16 w-full rounded-2xl border border-[#333333] bg-[#1C1C1C] pl-16 pr-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#D9FF00]"
            />
          </div>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="password"
              placeholder="Password (min 6 chars)"
              className="h-16 w-full rounded-2xl border border-[#333333] bg-[#1C1C1C] pl-16 pr-16 text-white placeholder:text-gray-500 outline-none transition focus:border-[#D9FF00]"
            />

            <Eye
              size={20}
              className="absolute right-6 top-1/2 -translate-y-1/2 cursor-pointer text-gray-500"
            />
          </div>

          <div className="relative">
            <Lock
              size={20}
              className="absolute left-6 top-1/2 -translate-y-1/2 text-gray-500"
            />

            <input
              type="password"
              placeholder="Confirm password"
              className="h-16 w-full rounded-2xl border border-[#333333] bg-[#1C1C1C] pl-16 pr-5 text-white placeholder:text-gray-500 outline-none transition focus:border-[#D9FF00]"
            />
          </div>

          <button className="group mt-2 flex h-16 w-full items-center justify-center gap-3 rounded-2xl bg-[#D9FF00] text-2xl font-semibold text-black transition-all duration-300 hover:scale-[1.01] hover:shadow-[0_0_30px_rgba(217,255,0,0.4)]">
            Create Account

            <ArrowRight
              size={24}
              className="transition-transform duration-300 group-hover:translate-x-1"
            />
          </button>
        </div>

        <p className="mt-10 text-center text-lg text-gray-500">
          Already have an account?{" "}
          <span className="cursor-pointer font-semibold text-[#D9FF00] hover:underline">
            Sign in
          </span>
        </p>
      </div>
    </div>
  );
};

export default RegisterCard;