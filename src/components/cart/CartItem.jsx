import { Minus, Plus, Trash2 } from "lucide-react";
import { useContext } from "react";
import { CartContext } from "../../context/CartContext";

const CartItem = ({ item }) => {

    const { increaseQuantity, decreaseQuantity, removeFromCart} = useContext(CartContext);

    return (

        <div className="rounded-3xl border border-white/20 p-5">

            <div className="flex gap-5">

                <div className="h-24 w-24 rounded-2xl bg-white p-2">

                    <img
                        src={item.image}
                        alt={item.title}
                        className="h-full w-full object-contain"
                    />

                </div>

                <div className="flex flex-1 flex-col">

                    <h3 className="line-clamp-2 text-xl font-semibold text-gray-200">
                        {item.title}
                    </h3>

                    <p className="mt-2 text-2xl font-bold text-lime-400">
                        ${(item.price * item.quantity).toFixed(2)}
                    </p>

                    <p className="text-gray-500">
                        ${item.price} each
                    </p>

                    <div className="mt-4 flex items-center justify-between">

                        <div className="flex items-center gap-4">

                            <button
                                onClick={() => decreaseQuantity(item.id)}
                                className="cursor-pointer text-white rounded-xl border border-white/10 p-2"
                            >
                                <Minus size={18} />
                            </button>

                            <span className="text-xl font-bold text-white">
                                {item.quantity}
                            </span>

                            <button
                                onClick={() => increaseQuantity(item.id)}
                                className="cursor-pointer text-white rounded-xl border border-white/10 p-2"
                            >
                                <Plus size={18} />
                            </button>

                        </div>

                        <button
                            onClick={() => removeFromCart(item.id)}
                            className="cursor-pointer"
                        >
                            <Trash2
                                size={18}
                                className="text-red-400"
                            />
                        </button>

                    </div>

                </div>

            </div>

        </div>

    );

};

export default CartItem;