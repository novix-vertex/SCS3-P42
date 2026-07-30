import { Minus, Plus } from "lucide-react";

const QuantitySelector = ({
    quantity,
    increase,
    decrease,
}) => {
    return (
        <div className="flex items-center justify-between rounded-3xl border border-white/20 px-6 py-5">

            <span className="text-xl text-gray-400">
                In cart:
            </span>

            <div className="flex items-center gap-6">

                <button
                    onClick={decrease}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 hover:border-lime-400"
                >
                    <Minus />
                </button>

                <span className="text-3xl font-bold">
                    {quantity}
                </span>

                <button
                    onClick={increase}
                    className="flex h-12 w-12 items-center justify-center rounded-2xl border border-white/10 hover:border-lime-400"
                >
                    <Plus />
                </button>

            </div>

        </div>
    );
};

export default QuantitySelector;