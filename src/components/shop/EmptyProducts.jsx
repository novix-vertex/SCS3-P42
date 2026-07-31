const EmptyProducts = () => {
    return (
        <div className="flex h-96 items-center justify-center">

            <div className="text-center">

                <h2 className="text-4xl font-bold text-white">
                    No Products Found
                </h2>

                <p className="mt-4 text-xl text-neutral-500">
                    Try changing your search or filters.
                </p>

            </div>

        </div>
    );
};

export default EmptyProducts;