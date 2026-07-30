const FeatureCard = ({
    icon: Icon,
    title,
    subtitle,
}) => {
    return (
        <div className="rounded-3xl border border-white/20 p-8 text-center">

            <Icon
                className="mx-auto text-lime-400"
                size={26}
            />

            <h3 className="mt-4 text-xl font-semibold">
                {title}
            </h3>

            <p className="mt-2 text-gray-500">
                {subtitle}
            </p>

        </div>
    );
};

export default FeatureCard;