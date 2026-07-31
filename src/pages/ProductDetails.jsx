import { useParams } from "react-router";
import { ProductContext } from "../context/ProductContext";
import { useContext } from "react";
import ProductGallery from "../components/productDetails/ProductGallery";
import ProductInfo from "../components/productDetails/ProductInfo";
import RelatedProducts from "../components/products/RelatedProducts";

const ProductDetails = () => {
    const { id } = useParams();
    const { products } = useContext(ProductContext);
    const product = products.find(
        (item) => item.id === Number(id)
    );

    if (!product) {
        return (
            <div className="py-20 text-center text-3xl text-white">
                Product not found
            </div>
        );
    }

    return (
        <div className="bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-5 py-20">
                <div className="grid gap-14 lg:grid-cols-2">
                    <ProductGallery
                        image={product.image}
                        title={product.title}
                    />

                    <ProductInfo
                        product={product}
                    />
                </div>
                <RelatedProducts product={product} />
            </div>
        </div>
    )
}

export default ProductDetails