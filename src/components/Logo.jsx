import { ShoppingBag } from "lucide-react"

const Logo = () => {
    return (
        <div className="flex items-center gap-3">
            <div className="flex h-12 w-12 items-center justify-center rounded-2xl bg-[#C8F400]">
                <ShoppingBag
                    size={24}
                    className="text-black" />
            </div>
            <h1 className="text-3xl font-bold tracking-tight">
                Sky<span className="text-[#C8F400]">Mart</span>
            </h1>
        </div>
    )
}

export default Logo