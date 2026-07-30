import { Package, Star, Tag, TrendingUp } from "lucide-react"
import StatsCard2 from "../StatCard2"

const Stats = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            <StatsCard2
                icon={Package}
                iconBg="bg-lime-500/10"
                iconColor="text-lime-400"
                value="3"
                title="Cart Items"
                subtitle="In your bag"
                showValue={true}
                showBG={true}
            />

            <StatsCard2
                icon={TrendingUp}
                iconBg="bg-blue-500/10"
                iconColor="text-blue-400"
                value="$999.97"
                title="Cart Value"
                subtitle="Ready to checkout"
                showValue={true}
                showBG={true}
            />

            <StatsCard2
                icon={Star}
                iconBg="bg-amber-500/10"
                iconColor="text-amber-400"
                value="5"
                title="Top Products"
                subtitle="Highly rated"
                showValue={true}
                showBG={true}
            />

            <StatsCard2
                icon={Tag}
                iconBg="bg-purple-500/10"
                iconColor="text-purple-400"
                value="6"
                title="Categories"
                subtitle="To explore"
                showValue={true}
                showBG={true}
            />

        </div>
    );
}

export default Stats