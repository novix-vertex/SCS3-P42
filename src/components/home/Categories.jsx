import { Box } from "lucide-react"
import CategoryCard from "../CategoryCard"

const Categories = () => {

    const categoriesData = [
        {
            icon: Box,
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
            title: "Electronics",
            quantity: "2 items",
        },
        {
            icon: Box,
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
            title: "Clothing",
            quantity: "2 items",
        },
        {
            icon: Box,
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
            title: "Furniture",
            quantity: "2 items",
        },
        {
            icon: Box,
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
            title: "Home",
            quantity: "2 items",
        },
        {
            icon: Box,
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
            title: "Sports",
            quantity: "2 items",
        },
        {
            icon: Box,
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
            title: "Accessories",
            quantity: "2 items",
        },
    ];
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {categoriesData.map((item, index) => (
                <CategoryCard
                    key={index}
                    {...item}
                />
            ))}
        </div>
    );
}

export default Categories