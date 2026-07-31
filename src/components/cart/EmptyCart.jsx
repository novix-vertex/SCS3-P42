import { ShoppingCart } from "lucide-react"

const EmptyCart = () => {
    return (
        <div className="flex h-full flex-col items-center justify-center px-8">

            <ShoppingCart
                size={70}
                className="text-lime-400"
            />

            <h2 className="mt-6 text-2xl font-bold text-white">
                Your cart is empty
            </h2>

            <p className="mt-2 text-center text-gray-500">
                Looks like you haven't added anything yet.
            </p>

        </div>
    )
}

export default EmptyCart