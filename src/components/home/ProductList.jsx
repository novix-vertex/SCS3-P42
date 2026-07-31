import { ArrowRight } from "lucide-react";
import ProductListItem from "../common/ProductListItem";
import { useNavigate } from "react-router";

const ProductList = ({ title, icon: Icon, products }) => {
    const navigate = useNavigate();
    return (
        <div className="rounded-4xl border border-white/15 bg-[#111111] p-8">

            <div className="mb-8 flex items-center justify-between">
                <div className="flex items-center gap-3">
                    <Icon
                        size={24}
                        className="text-lime-400"
                    />
                    <h2 className="text-3xl font-bold text-lime-400">
                        {title}
                    </h2>

                </div>

                <button onClick={() => navigate("/shop")} className="cursor-pointer flex items-center gap-2 text-lg font-semibold text-lime-400 hover:gap-3 transition-all">
                    See all
                    <ArrowRight size={18} />
                </button>

            </div>

            <div className="space-y-4 flex gap-2 flex-col">
                {products.map((product) => (
                    <ProductListItem
                        key={product.id}
                        product={product}
                    />
                ))}
            </div>

        </div>
    );
};

export default ProductList;