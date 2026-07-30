import ProductGallery from "./ProductGallery";
import ProductInfo from "./ProductInfo";

const ProductDetails = ({ product }) => {
    return (
        <div className="mx-auto grid max-w-7xl gap-14 py-14 lg:grid-cols-2">

            <ProductGallery
                image={product.image}
                title={product.title}
            />

            <ProductInfo product={product} />

        </div>
    );
};

export default ProductDetails;