import { Package, Star, Truck, Users } from "lucide-react";
import StatsCard3 from "../common/StatsCard3";

const AboutStats = () => {
    const stats = [
        {
            icon: Package,
            title: "20K+",
            subtitle: "Products",
            bgColor: ""
        },
        {
            icon: Users,
            title: "50K+",
            subtitle: "Happy Customers",
            bgColor: ""
        },
        {
            icon: Star,
            title: "4.9",
            subtitle: "Avg. Rating",
            bgColor: ""
        },
        {
            icon: Truck,
            title: "99%",
            subtitle: "On-time Delivery",
            bgColor: ""
        },
    ];
    return (
        <section className="grid gap-6 md:grid-cols-2 xl:grid-cols-4">

            {stats.map((item) => (
                <StatsCard3
                    key={item.subtitle}
                    {...item}
                />
            ))}

        </section>
    )
}

export default AboutStats