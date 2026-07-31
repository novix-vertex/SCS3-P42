import { ChevronLeft, ChevronRight } from "lucide-react";
import { useContext } from "react";
import { useNavigate } from "react-router";
import { ProductContext } from "../../context/ProductContext";
const ProductNavigation = ({ currentId }) => {

    const { products } = useContext(ProductContext);
    const navigate = useNavigate();
    const currentIndex = products.findIndex(
        product => product.id === currentId
    );
    const handlePrevious = () => {

        if (currentIndex > 0) {
            navigate(`/product/${products[currentIndex - 1].id}`);
        }

    };

    const handleNext = () => {

        if (currentIndex < products.length - 1) {
            navigate(`/product/${products[currentIndex + 1].id}`);
        }

    };
    return (
        <div className="mt-10 grid grid-cols-2 gap-4">

            <button
                onClick={handlePrevious}
                disabled={currentIndex === 0}
                className={`flex items-center justify-center gap-2 rounded-3xl py-5 text-xl font-semibold
        ${currentIndex === 0
                        ? "cursor-not-allowed bg-[#1A1A1A] text-gray-500"
                        : "cursor-pointer bg-[#2B2B2B] hover:bg-[#363636]"
                    }`}
            >
                <ChevronLeft />
                Previous
            </button>

            <button
                onClick={handleNext}
                disabled={currentIndex === products.length - 1}
                className={`flex items-center justify-center gap-2 rounded-3xl py-5 text-xl font-semibold
        ${currentIndex === products.length - 1
                        ? "cursor-not-allowed bg-[#2B2B2B] text-gray-500"
                        : "cursor-pointer bg-lime-400 text-black hover:bg-lime-300"
                    }`}
            >
                Next
                <ChevronRight />
            </button>

        </div>
    );
};

export default ProductNavigation;