import { Zap, Shield, Tag } from "lucide-react"
import StatsCard2 from "../StatCard2"

const Qualities = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">
            <StatsCard2
                icon={Zap}
                iconBg="bg-lime-500/10"
                iconColor="text-lime-400"
                value=""
                title="Fast Delivery"
                subtitle="Same-day on select items"
                showValue={false}
                showBG={false}
            />

            <StatsCard2
                icon={Shield}
                iconBg="bg-blue-500/10"
                iconColor="text-blue-400"
                value="$999.97"
                title="Secure Payments"
                subtitle="100% encrypted checkout"
                showValue={false}
                showBG={false}
            />

            <StatsCard2
                icon={Tag}
                iconBg="bg-green-700/10"
                iconColor="text-green-600"
                value="5"
                title="Best Prices"
                subtitle="Price-match guarantee"
                showValue={false}
                showBG={false}
            />

        </div>
    );
}

export default Qualities