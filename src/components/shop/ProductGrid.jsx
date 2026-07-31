import { useContext } from "react";
import ProductCard from "../common/ProductCard";
import { ProductContext } from "../../context/ProductContext"
import ProductDetails from "../productDetails/ProductDetails";
import EmptyProducts from "./EmptyProducts"
const ProductGrid = () => {
    const { filteredProducts } = useContext(ProductContext);

    if (filteredProducts.length === 0) {
        return <EmptyProducts />;
    }
    return (
        <section className="mt-10">

            <div className="grid gap-5 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-4">

                {filteredProducts.map((product) => (
                    <ProductCard
                        key={product.id}
                        {...product}
                    />
                ))}

            </div>

        </section>
    );
}

export default ProductGrid