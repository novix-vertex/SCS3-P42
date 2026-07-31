import { Package, Star, Tag, TrendingUp } from "lucide-react"
import StatsCard2 from "../common/StatCard2"

const Stats = () => {
    const statsData = [
        {
            icon: Package,
            iconBg: "bg-lime-500/10",
            iconColor: "text-lime-400",
            value: "3",
            title: "Cart Items",
            subtitle: "In your bag",
            showValue: true,
            showBG: true,
        },
        {
            icon: TrendingUp,
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-400",
            value: "$999.97",
            title: "Cart Value",
            subtitle: "Ready to checkout",
            showValue: true,
            showBG: true,
        },
        {
            icon: Star,
            iconBg: "bg-amber-500/10",
            iconColor: "text-amber-400",
            value: "5",
            title: "Top Products",
            subtitle: "Highly rated",
            showValue: true,
            showBG: true,
        },
        {
            icon: Tag,
            iconBg: "bg-purple-500/10",
            iconColor: "text-purple-400",
            value: "6",
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