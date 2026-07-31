const ShopHeader = ({ totalProducts }) => {
    return (
        <section className="mb-10">

            <h1 className="text-6xl font-bold text-white">
                All Products
            </h1>

            <p className="mt-4 text-xl text-neutral-500">
                {totalProducts} products found
            </p>

        </section>
    );
};

export default ShopHeader;