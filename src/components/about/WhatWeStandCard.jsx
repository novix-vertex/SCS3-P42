import { Handshake, Star, Truck, Shield } from "lucide-react"
import StatsCard2 from "../common/StatCard2";

const WhatWeStandCard = () => {
    const stats = [
        {
            icon: Shield,
            title: "Trust",
            subtitle: "Every product is verified for quality and authenticity before listing.",
            value: "",
            iconBg: "bg-lime-500/10",
            iconColor: "text-lime-400",
            showValue: true,
            showBg: true
        },
        {
            icon: Truck,
            title: "50K+",
            subtitle: "We obsess over delivery times so your orders arrive when promised.",
            value: "",
            iconBg: "bg-lime-500/10",
            iconColor: "text-lime-400",
            showValue: true,
            showBg: true
        },
        {
            icon: Handshake,
            title: "Community",
            subtitle: "Built around real customer feedback, not just business metrics.",
            value: "",
            iconBg: "bg-lime-500/10",
            iconColor: "text-lime-400",
            showValue: true,
            showBg: true
        },
        {
            icon: Star,
            title: "Quality",
            subtitle: "We curate the best — no filler, no junk, just great products.",
            value: "",
            iconBg: "bg-lime-500/10",
            iconColor: "text-lime-400",
            showValue: true,
            showBg: true
        },
    ];
    return (
        <>
            <h2 className="text-4xl font-bold text-white">{"What We Stand For"}</h2>

            <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 flex-wrap">
                {stats.map((item) => (
                    <StatsCard2
                        key={item.title}
                        {...item}
                    />
                ))}
            </div>
        </>
    )
}

export default WhatWeStandCard