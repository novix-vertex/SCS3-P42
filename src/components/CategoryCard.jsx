const CategoryCard = ({ icon:Icon,
    iconBg,
    iconColor,
    title,
    quantity }) => {
    return (
        <div className="flex gap-5 items-center justify-center flex-col rounded-3xl border border-gray-300/80 bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:shadow-lg">
            <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${iconBg}`}
            >
                <Icon size={30} className={iconColor} />
            </div>

            <h3 className="text-2xl font-medium text-gray-300">
                {title}
            </h3>

            <p className="mt-1 text-lg text-gray-500">
                {quantity}
            </p>
        </div>
    );
}

export default CategoryCard