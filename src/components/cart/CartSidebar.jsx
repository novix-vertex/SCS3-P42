import { ShoppingBag, X } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

import CartItem from "./CartItem";
import CartFooter from "./CartFooter";
import EmptyCart from "./EmptyCart";

const CartSidebar = ({ open, onClose }) => {

    const { cartItems, cartCount, clearCart } = useContext(CartContext);

    return (

        <>
            {open && (
                <div
                    onClick={onClose}
                    className="fixed inset-0 z-40 bg-black/60 backdrop-blur-sm"
                />
            )}
            <aside
                className={`fixed right-0 top-0 z-50 flex h-screen w-full max-w-130 flex-col bg-[#121212] transition-transform duration-300
                ${open ? "translate-x-0" : "translate-x-full"
                    }`}
            >
                <div className="flex items-center justify-between border-b border-white/15 p-8">
                    <div className="flex items-center gap-4">
                        <ShoppingBag className="text-lime-400" />
                        <h2 className="text-4xl font-bold text-white">
                            Cart
                        </h2>
                        <span className="rounded-full bg-lime-500/20 px-4 py-1 text-sm font-semibold text-lime-400">
                            {cartCount} items
                        </span>
                    </div>
                    <button onClick={() => {
                        onClose()
                    }
                    }>
                        <X className="cursor-pointer text-gray-400" />
                    </button>

                </div>
                <div className="flex-1 space-y-5 overflow-y-auto p-8">
                    {
                        cartItems.length === 0
                            ? <EmptyCart />
                            : cartItems.map(item => (
                                <CartItem
                                    key={item.id}
                                    item={item}
                                />
                            ))
                    }

                </div>
                {
                    cartItems.length > 0 &&
                    <CartFooter />
                }

            </aside >

        </>

    );
};

export default CartSidebar;