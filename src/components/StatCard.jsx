import { Star } from "lucide-react"

const StatCard = ({ value, label, rating = false }) => {
    return (
        <div className="rounded-3xl border border-neutral-800 bg-neutral-900/60 p-6 hover:border-[#C8F400]">
            <div className="flex items-center gap-1">
                <h3 className="text-3xl font-bold text-[#C8F400]">
                    {value}
                </h3>
                {rating && <Star size={20} fill="currentColor" className="text-[#C8F400]" />}
            </div>
            <p className="mt-2 text-neutral-400">
                {label}
            </p>
        </div>
    )
}

export default StatCard