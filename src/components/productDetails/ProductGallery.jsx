const ProductGallery = ({ image, title }) => {
    return (
        <div className="flex items-center justify-center rounded-[40px] bg-white p-12">

            <img
                src={image}
                alt={title}
                className="max-h-137 object-cover"
            />

        </div>
    );
};

export default ProductGallery;