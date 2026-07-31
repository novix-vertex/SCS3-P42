import { Zap, Shield, Tag } from "lucide-react"
import StatsCard2 from "../common/StatCard2"

const Qualities = () => {

    const qualitiesData = [
        {
            icon: Zap,
            iconBg: "bg-lime-500/10",
            iconColor: "text-lime-400",
            value: "",
            title: "Fast Delivery",
            subtitle: "Same-day on select items",
            showValue: false,
            showBG: false,
        },
        {
            icon: Shield,
            iconBg: "bg-blue-500/10",
            iconColor: "text-blue-400",
            value: "",
            title: "Secure Payments",
            subtitle: "100% encrypted checkout",
            showValue: false,
            showBG: false,
        },
        {
            icon: Tag,
            iconBg: "bg-green-700/10",
            iconColor: "text-green-600",
            value: "",
            title: "Best Prices",
            subtitle: "Price-match guarantee",
            showValue: false,
            showBG: false,
        },
    ];
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {qualitiesData.map((item, index) => (
                <StatsCard2
                    key={index}
                    {...item}
                />
            ))}
        </div>
    );
}

export default Qualities