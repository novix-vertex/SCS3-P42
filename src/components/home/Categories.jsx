import CategoryCard from "../CategoryCard"
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
const Categories = () => {
    const { categories, products } = useContext(ProductContext);
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">
            {categories.slice(1).map((category) => {

                const count = products.filter(
                    (product) => product.category === category
                ).length;

                return (
                    <CategoryCard
                        key={category}
                        title={category}
                        quantity={`${count} items`}
                    />
                );
            })}
            
        </div>
    );
}

export default Categories