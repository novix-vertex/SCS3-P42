import {
    ShoppingCart,
    LogOut,
    Zap,
} from "lucide-react";
import { useContext, useState } from "react";
import { NavLink } from "react-router";
import CartSidebar from "../cart/CartSidebar";
import { CartContext } from "../../context/CartContext";

const Navbar = () => {
    const [openCart, setOpenCart] = useState(false);
    const { cartCount } = useContext(CartContext);
    return (
        <header className="sticky top-0 z-50 border-b border-white/10 bg-[#111111]">
            <div className="mx-auto flex h-20 max-w-7xl items-center justify-between px-6">

                <NavLink to="/" className="flex items-center gap-3">          <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-lime-400">
                    <Zap size={24} className="fill-black text-black" />
                </div>

                    <h1 className="text-4xl font-bold text-white">
                        Sky<span className="text-lime-400">Mart</span>
                    </h1>
                </NavLink>

                <nav className="hidden md:block">
                    <ul className="flex items-center gap-12 text-xl font-semibold">
                        <li>
                            <NavLink
                                to="/"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-lime-400"
                                        : "text-gray-500 transition hover:text-lime-400"
                                }
                            >
                                Home
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/shop"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-lime-400"
                                        : "text-gray-500 transition hover:text-lime-400"
                                }
                            >
                                Shop
                            </NavLink>
                        </li>

                        <li>
                            <NavLink
                                to="/about"
                                className={({ isActive }) =>
                                    isActive
                                        ? "text-lime-400"
                                        : "text-gray-500 transition hover:text-lime-400"
                                }
                            >
                                About
                            </NavLink>
                        </li>
                    </ul>
                </nav>

                <div className="flex items-center gap-4">

                    <button className="flex items-center gap-3 rounded-2xl border border-white/10 bg-[#1C1C1C] px-4 py-2 transition hover:border-lime-400/50">

                        <div className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-400 font-bold text-black">
                            H
                        </div>

                        <span className="text-xl font-medium text-gray-300">
                            happy
                        </span>

                    </button>

                    <button onClick={() => setOpenCart(true)} className="cursor-pointer relative flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#1C1C1C] transition hover:border-lime-400/50">

                        <ShoppingCart
                            size={22}
                            className="text-white"
                        />

                        {
                            cartCount > 0 && (
                                <span className="absolute -right-1 -top-2 flex h-6 w-6 items-center justify-center rounded-full bg-lime-400 text-xs font-bold text-black">
                                    {cartCount}
                                </span>
                            )
                        }

                    </button>

                    <button className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 bg-[#1C1C1C] transition hover:border-red-400/50">
                        <LogOut
                            size={22}
                            className="text-gray-300"
                        />
                    </button>

                </div>

            </div>
            <CartSidebar
                open={openCart}
                onClose={() => setOpenCart(false)}
            />
        </header>

    );
};

export default Navbar;