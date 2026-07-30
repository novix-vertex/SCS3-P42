import { Star, Zap } from "lucide-react";
import ProductList from "./ProductList";

const TopItemsList = () => {
    const topRated = [
        {
            id: 1,
            image: "https://images.unsplash.com/photo-1516035069371-29a1b244cc32?w=200",
            title: "Professional Camera Lens",
            price: "599.99",
        },
        {
            id: 2,
            image: "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?w=200",
            title: "Ergonomic Office Chair",
            price: "199.99",
        },
        {
            id: 3,
            image: "https://images.unsplash.com/photo-1527443224154-c4a3942d3acf?w=200",
            title: "4K Ultra HD Monitor",
            price: "349.99",
        },
        {
            id: 4,
            image: "https://images.unsplash.com/photo-1603006905003-be475563bc59?w=200",
            title: "Aromatherapy Oil Diffuser",
            price: "49.99",
        },
        {
            id: 5,
            image: "https://images.unsplash.com/photo-1511467687858-23d96c32e4ae?w=200",
            title: "Mechanical Keyboard",
            price: "149.99",
        },
    ];
    return (
        <div className="grid gap-8 lg:grid-cols-2">

            <ProductList
                title="Top Rated"
                icon={Star}
                products={topRated}
            />

            <ProductList
                title="New Arrivals"
                icon={Zap}
                products={topRated}
            />

        </div>)
}

export default TopItemsList