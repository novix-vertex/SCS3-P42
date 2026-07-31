import { createContext, useState } from "react";
import { productsData } from "../helpers/productsData";

export const ProductContext = createContext();

const ProductProvider = ({ children }) => {

    const [products, setProducts] = useState(productsData);

    const [search, setSearch] = useState("");
    const [category, setCategory] = useState("All Categories");
    const [sortBy, setSortBy] = useState("Featured");

    let filteredProducts = [...products];

    if (search.trim()) {
        filteredProducts = filteredProducts.filter(product =>
            product.title.toLowerCase().includes(search.toLowerCase())
        );
    }

    if (category !== "All Categories") {
        filteredProducts = filteredProducts.filter(
            product => product.category === category
        );
    }

    switch (sortBy) {
        case "Price: Low to High":
            filteredProducts.sort((a, b) => a.price - b.price);
            break;

        case "Price: High to Low":
            filteredProducts.sort((a, b) => b.price - a.price);
            break;

        case "Rating":
            filteredProducts.sort((a, b) => b.rating - a.rating);
            break;

        default:
            break;
    }


    const categories = ["All Categories"];

    products.map((product) => {
        if (!categories.includes(product.category)) {
            categories.push(product.category);
        }
    });

    const sortOptions = [
        "Featured",
        "Price: Low to High",
        "Price: High to Low",
        "Rating",
    ];

    const topRatedProducts = [...products]
        .sort((a, b) => b.rating - a.rating)
        .slice(0, 5);

    const newArrivalProducts = [...products]
        .sort((a, b) => b.id - a.id)
        .slice(0, 5);

    return (
        <ProductContext.Provider value={{ products, filteredProducts, search, setSearch, category, setCategory, sortBy, setSortBy, categories, sortOptions, topRatedProducts, newArrivalProducts }}>
            {children}
        </ProductContext.Provider>
    );
};
export default ProductProvider;