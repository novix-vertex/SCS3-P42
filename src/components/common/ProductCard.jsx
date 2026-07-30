import { Star, Check } from "lucide-react";

const ProductCard = ({
    image,
    category,
    title,
    rating,
    reviews,
    price,
    isAdded,
}) => {
    return (
        <div className="w-[320px] overflow-hidden rounded-4xl border border-white/15 bg-[#121212] shadow-lg transition-all duration-300 hover:-translate-y-2 hover:shadow-2xl">

            <div className="relative bg-[#F4F4F4] px-8 pt-8 pb-10">

                <span className="absolute left-5 top-4 rounded-full bg-gray-600 px-4 py-1 text-sm font-medium text-white">
                    {category}
                </span>

                <img
                    src={image}
                    alt={title}
                    className="mx-auto h-52 w-full object-contain"
                />
            </div>

            <div className="space-y-4 p-5">

                <p className="text-sm font-medium uppercase tracking-widest text-gray-500">
                    {category}
                </p>

                <h2 className="line-clamp-2 text-3xl font-bold leading-tight text-gray-200">
                    {title}
                </h2>

                <div className="flex items-center gap-2">
                    <div className="flex text-yellow-400">
                        {
                            [...Array(rating)].map((value, index) => (
                                <Star
                                    key={index}
                                    size={16}
                                    fill="currentColor"
                                />
                            ))}
                    </div>

                    <span className="text-gray-500">
                        ({reviews})
                    </span>
                </div>

                <hr className="border-white/15" />

                {/* Bottom */}
                <div className="flex items-center justify-between">

                    <h3 className="text-5xl font-bold text-lime-400">
                        ${price}
                    </h3>

                    <button
                        className={`flex items-center gap-2 rounded-2xl px-5 py-3 text-lg font-semibold transition
            ${isAdded
                                ? "bg-green-500/15 text-green-400 border border-green-500/20"
                                : "bg-lime-400 text-black hover:bg-lime-300"
                            }`}
                    >
                        {isAdded && <Check size={18} />}

                        {isAdded ? "Added" : "Add"}
                    </button>

                </div>

            </div>
        </div>
    );
};

export default ProductCard;