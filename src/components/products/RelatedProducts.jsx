import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import ProductCard from "../common/ProductCard";

const RelatedProducts = ({ product }) => {

    const { products } = useContext(ProductContext);

    const relatedProducts = products
        .filter(item =>
            item.category === product.category &&
            item.id !== product.id
        ).slice(0, 4);

    if (relatedProducts.length === 0) {
        console.log('nothing');
        return null;
    }

    return (
        <section className="mt-24">

            <h2 className="mb-8 text-4xl font-bold text-white">
                Related Products
            </h2>

            <section className="mt-10">

                <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 2xl:grid-cols-3">
                    {relatedProducts.map((product) => (
                        <ProductCard
                            key={product.id}
                            product={product}
                        />
                    ))}

                </div>

            </section>

        </section>
    );
};

export default RelatedProducts;