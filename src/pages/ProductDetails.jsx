const ProductDetails = () => {
    const product = {
        id: 9,
        category: "Home",
        title: "Ceramic Coffee Mug",
        image: "https://images.unsplash.com/photo-1517256064527-09c73fc73e38?w=500",
        price: 19.99,
        rating: 4,
        reviews: 130,
        isAdded: false,
    };
    return (
        <ProductDetails product={product} />
    )
}

export default ProductDetails