import { Star, Zap } from "lucide-react";
import ProductList from "./ProductList";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const TopItemsList = () => {
    const { topRatedProducts, newArrivalProducts } = useContext(ProductContext);
    return (
        <div className="grid gap-8 lg:grid-cols-2">

            <ProductList
                title="Top Rated"
                icon={Star}
                products={topRatedProducts}
            />

            <ProductList
                title="New Arrivals"
                icon={Zap}
                products={newArrivalProducts}
            />

        </div>)
}

export default TopItemsList