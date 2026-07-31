import { ShoppingBag } from "lucide-react";
import { useContext } from "react";
import { NavLink } from "react-router";
import { CartContext } from "../../context/CartContext";

const ProductListItem = ({ product }) => {
    const { id, image, category, title, rating, reviews, price, isAdded } = product;

    const { addToCart, isInCart } = useContext(CartContext);
    const added = isInCart(id);

    return (
        <NavLink to={`/product/${id}`}>

            <div className="flex items-center justify-between rounded-3xl border border-white/20 bg-[#111111] px-4 py-3 transition-all duration-300 hover:border-lime-400/40 hover:-translate-y-1">
                <div className="flex items-center gap-4">
                    <img
                        src={image}
                        alt={title}
                        className="h-16 w-16 rounded-2xl bg-white object-cover"
                    />
                    <div>
                        <h3 className="text-lg font-medium text-gray-200">
                            {title}
                        </h3>
                        <p className="mt-1 text-2xl font-bold text-lime-400">
                            ${price}
                        </p>
                    </div>

                </div>

                <button onClick={(e) => {
                    e.preventDefault();
                    addToCart({ id, image, category, title, rating, reviews, price, isAdded }, 1)
                }} className={`cursor-pointer flex h-10 w-10 items-center justify-center rounded-xl
                ${added
                        ? "bg-green-500/15 text-green-400 border border-green-500/20 cursor-not-allowed"
                        : "bg-lime-400 text-black hover:bg-lime-300 cursor-pointer"
                    }`}>
                    <ShoppingBag size={18} />
                </button>

            </div>
        </NavLink>
    );
};

export default ProductListItem;