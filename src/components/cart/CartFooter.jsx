import { ArrowRight } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartFooter = () => {
    const { cartTotal, clearCart, cartItems } = useContext(CartContext);
    return (
        <div className="border-t border-white/15 p-8">
            <div className="mb-4 flex items-center justify-between">
                <span className="text-2xl text-gray-400">
                    Total
                </span>
                <span className="text-2xl font-bold text-white">
                    ${cartTotal.toFixed(2)}
                </span>
            </div>
            <button className="cursor-pointer flex w-full items-center justify-center gap-3 rounded-3xl bg-lime-400 py-5 text-2xl font-bold text-black">
                Checkout
                <ArrowRight size={24} />
            </button>

            <button
                onClick={clearCart}
                className="cursor-pointer mt-2 w-full text-center text-gray-500 hover:text-red-400"
            >
                Clear Cart
            </button>

        </div>

    );

};

export default CartFooter;