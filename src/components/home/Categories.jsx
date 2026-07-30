import { Tag } from "lucide-react"
import CategoryCard from "../CategoryCard"

const Categories = () => {
    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-4 flex-wrap">

            <CategoryCard
                icon={Tag}
                iconBg="bg-purple-500/10"
                iconColor="text-purple-400"
                title="Electronic"
                quantity="2 items" />

            <CategoryCard
                icon={Tag}
                iconBg="bg-purple-500/10"
                iconColor="text-purple-400"
                title="Clothing"
                quantity="2 items"
            />

            <CategoryCard
                icon={Tag}
                iconBg="bg-purple-500/10"
                iconColor="text-purple-400"
                title="Furtinure"
                quantity="2 items" />

            <CategoryCard
                icon={Tag}
                iconBg="bg-purple-500/10"
                iconColor="text-purple-400"
                title="Home"
                quantity="2 items" />
            <CategoryCard
                icon={Tag}
                iconBg="bg-purple-500/10"
                iconColor="text-purple-400"
                title="Sports"
                quantity="2 items" />
            <CategoryCard
                icon={Tag}
                iconBg="bg-purple-500/10"
                iconColor="text-purple-400"
                title="Accessories"
                quantity="2 items" />

        </div>
    )
}

export default Categories