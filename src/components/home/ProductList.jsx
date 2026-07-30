import { ArrowRight } from "lucide-react";
import ProductListItem from "../common/ProductListItem";

const ProductList = ({
    title,
    icon: Icon,
    products,
}) => {
    return (
        <div className="rounded-4xl border border-white/15 bg-[#111111] p-8">

            {/* Heading */}
            <div className="mb-8 flex items-center justify-between">

                <div className="flex items-center gap-3">

                    <Icon
                        size={24}
                        className="text-lime-400"
                    />

                    <h2 className="text-4xl font-bold text-lime-400">
                        {title}
                    </h2>

                </div>

                <button className="flex items-center gap-2 text-lg font-semibold text-lime-400 hover:gap-3 transition-all">
                    See all

                    <ArrowRight size={18} />
                </button>

            </div>

            {/* List */}
            <div className="space-y-4">
                {products.map((product) => (
                    <ProductListItem
                        key={product.id}
                        image={product.image}
                        title={product.title}
                        price={product.price}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProductList;