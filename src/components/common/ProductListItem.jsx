import { ShoppingBag } from "lucide-react";

const ProductListItem = ({
    image,
    title,
    price,
}) => {
    return (
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

                    <p className="mt-1 text-3xl font-bold text-lime-400">
                        ${price}
                    </p>
                </div>

            </div>

            <button className="flex h-10 w-10 items-center justify-center rounded-xl bg-lime-500/10 text-lime-400 transition hover:bg-lime-500 hover:text-black">
                <ShoppingBag size={18} />
            </button>

        </div>
    );
};

export default ProductListItem;