import { Check, Heart, Shield, Truck, RotateCcw, ShoppingCart, Star } from "lucide-react";

import QuantitySelector from "./QuantitySelector";
import FeatureCard from "./FeatureCard";
import ProductNavigation from "./ProductNavigation";
import { useContext, useState } from "react";
import { CartContext } from "../../context/CartContext";

const ProductInfo = ({ product }) => {

    const { addToCart, isInCart, getCartQuantity, increaseQuantity, decreaseQuantity, } = useContext(CartContext);
    const added = isInCart(product.id);
    const quantity = getCartQuantity(product.id);

    const handleAddToCart = () => {
        addToCart(product, 1);
    };
    return (
        <div>

            <span className="rounded-full border border-lime-500/30 bg-lime-500/10 px-4 py-2 text-sm font-semibold text-lime-400">
                {product.category}
            </span>

            <h1 className="mt-6 text-4xl font-bold">
                {product.title}
            </h1>


            <div className="mt-6 flex items-center gap-4">

                <div className="flex text-yellow-400">
                    {[...Array(product.rating)].map((value, index) => (
                        <Star
                            key={index}
                            size={18}
                            fill="currentColor"
                        />
                    ))}
                </div>

                <span className="text-2xl font-bold">
                    {product.rating}.0
                </span>

                <span className="text-gray-500">
                    ({product.reviews} reviews)
                </span>

            </div>

            <hr className="my-8 border-white/20" />

            <h2 className="text-3xl font-bold text-lime-400">
                ${product.price}
            </h2>

            <hr className="my-8 border-white/20" />

            <p className="text-xl leading-10 text-gray-400">
                {product.description}
            </p>

            {
                added && (
                    <div className="mt-8">
                        <QuantitySelector
                            quantity={quantity}
                            increase={() => increaseQuantity(product.id)}
                            decrease={() => decreaseQuantity(product.id)}
                        />
                    </div>
                )
            }


            <div className="mt-8 flex gap-4">

                <button
                    onClick={handleAddToCart}
                    className={`flex-1 rounded-3xl py-5 text-2xl font-semibold transition-all
        ${added
                            ? "bg-green-900 text-green-300 cursor-not-allowed"
                            : "bg-lime-400 text-black hover:bg-lime-300 cursor-pointer"
                        }`}
                >

                    <div className="flex items-center justify-center gap-3">

                        {added ? <Check /> : <ShoppingCart />}

                        {added ? `Added (${quantity})` : "Add To Cart"}

                    </div>
                </button>

                <button className="rounded-3xl border border-white/10 px-6 hover:border-lime-400">
                    <Heart />
                </button>

            </div>

            <button className="mt-5 w-full rounded-3xl border border-white/20 py-5 text-xl font-semibold hover:border-lime-400">
                View Cart →
            </button>


            <div className="mt-8 grid grid-cols-3 gap-4">

                <FeatureCard
                    icon={Truck}
                    title="Free Delivery"
                    subtitle="On orders $50+"
                />

                <FeatureCard
                    icon={Shield}
                    title="Secure Pay"
                    subtitle="256-bit SSL"
                />

                <FeatureCard
                    icon={RotateCcw}
                    title="Easy Returns"
                    subtitle="30-day policy"
                />

            </div>

            <ProductNavigation />

        </div>
    );
};

export default ProductInfo;