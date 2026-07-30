import { ChevronLeft, ChevronRight } from "lucide-react";

const ProductNavigation = () => {
    return (
        <div className="mt-10 grid grid-cols-2 gap-4">

            <button className="flex items-center justify-center gap-2 rounded-3xl bg-[#2B2B2B] py-5 text-xl font-semibold hover:bg-[#363636]">

                <ChevronLeft />

                Previous

            </button>

            <button className="flex items-center justify-center gap-2 rounded-3xl bg-lime-400 py-5 text-xl font-semibold text-black hover:bg-lime-300">

                Next

                <ChevronRight />

            </button>

        </div>
    );
};

export default ProductNavigation;