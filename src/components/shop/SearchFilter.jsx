import { Search, ChevronDown } from "lucide-react";

const SearchFilter = () => {
    return (
        <div className="flex flex-col gap-4 rounded-3xl border border-gray-300/80 bg-[#111111] p-5 lg:flex-row lg:items-center">

            <div className="relative flex-1">
                <Search
                    size={20}
                    className="absolute left-5 top-1/2 -translate-y-1/2 text-gray-500"
                />

                <input
                    type="text"
                    placeholder="Search products..."
                    className="h-14 w-full rounded-2xl border border-white/10 bg-[#1C1C1C] pl-14 pr-5 text-lg text-white placeholder:text-gray-500 outline-none transition focus:border-lime-400"
                />
            </div>

            <div className="relative">
                <select
                    className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-[#1C1C1C] px-5 pr-12 text-lg font-medium text-white outline-none transition focus:border-lime-400 lg:w-52"
                >
                    <option>All Categories</option>
                    <option>Electronics</option>
                    <option>Fashion</option>
                    <option>Gaming</option>
                    <option>Home</option>
                </select>

                <ChevronDown
                    size={20}
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                />
            </div>

            <div className="relative">
                <select
                    className="h-14 w-full appearance-none rounded-2xl border border-white/10 bg-[#1C1C1C] px-5 pr-12 text-lg font-medium text-white outline-none transition focus:border-lime-400 lg:w-52"
                >
                    <option>Featured</option>
                    <option>Price: Low to High</option>
                    <option>Price: High to Low</option>
                    <option>Highest Rated</option>
                    <option>Newest</option>
                </select>

                <ChevronDown
                    size={20}
                    className="pointer-events-none absolute right-5 top-1/2 -translate-y-1/2 text-gray-500"
                />
            </div>

        </div>
    );
};

export default SearchFilter;