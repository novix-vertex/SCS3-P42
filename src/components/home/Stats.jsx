import { Package, Star, Tag, TrendingUp } from "lucide-react"
import StatsCard2 from "../common/StatCard2"
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";
import { CartContext } from "../../context/CartContext";
const Stats = () => {
    const { products, categories } = useContext(ProductContext);
const { cartCount, cartTotal } = useContext(CartContext);
    // const statsData = [
    //     {
    //         icon: Package,
    //         iconBg: "bg-lime-500/10",
    //         iconColor: "text-lime-400",
    //         value: "3",
    //         title: "Cart Items",
    //         subtitle: "In your bag",
    //         showValue: true,
    //         showBG: true,
    //     },
    //     {
    //         icon: TrendingUp,
    //         iconBg: "bg-blue-500/10",
    //         iconColor: "text-blue-400",
    //         value: "$999.97",
    //         title: "Cart Value",
    //         subtitle: "Ready to checkout",
    //         showValue: true,
    //         showBG: true,
    //     },
    //     {
    //         icon: Star,
    //         iconBg: "bg-amber-500/10",
    //         iconColor: "text-amber-400",
    //         value: "5",
    //         title: "Top Products",
    //         subtitle: "Highly rated",
    //         showValue: true,
    //         showBG: true,
    //     },
    //     {
    //         icon: Tag,
    //         iconBg: "bg-purple-500/10",
    //         iconColor: "text-purple-400",
    //         value: "6",
    //         title: "Categories",
    //         subtitle: "To explore",
    //         showValue: true,
    //         showBG: true,
    //     },
    // ];
   const statsData = [
    {
        icon: Package,
        iconBg: "bg-lime-500/10",
        iconColor: "text-lime-400",
        value: cartCount,
        title: "Cart Items",
        subtitle: "In your bag",
        showValue: true,
        showBG: true,
    },
    {
        icon: TrendingUp,
        iconBg: "bg-blue-500/10",
        iconColor: "text-blue-400",
        value: `$${cartTotal.toFixed(2)}`,
        title: "Cart Value",
        subtitle: "Ready to checkout",
        showValue: true,
        showBG: true,
    },
    {
        icon: Star,
        iconBg: "bg-amber-500/10",
        iconColor: "text-amber-400",
        value: products.length,
        title: "Products",
        subtitle: "Available",
        showValue: true,
        showBG: true,
    },
    {
        icon: Tag,
        iconBg: "bg-purple-500/10",
        iconColor: "text-purple-400",
        value: categories.length - 1, // not including "All Categories"
        title: "Categories",
        subtitle: "To explore",
        showValue: true,
        showBG: true,
    },
];
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            {statsData.map((item, index) => (
                <StatsCard2
                    key={index}
                    {...item}
                />
            ))}
        </div>
    );
}

export default Stats