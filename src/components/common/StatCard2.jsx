const StatsCard2 = ({
    icon: Icon,
    iconBg,
    iconColor,
    value,
    title,
    subtitle,
    showValue,
    showBG
}) => {
    return (
        <div className="flex gap-5 rounded-3xl border border-gray-300/80 bg-[#111111] p-7 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:shadow-lg">
            <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl ${ showBG ? iconBg : ""}`}
            >
                <Icon size={30} className={iconColor} />
            </div>

            <div>
                {
                    showValue ?
                        <h2 className="text-4xl mb-4 font-bold text-white">{value}</h2>
                        :
                        ""}

                <h3 className="text-2xl font-medium text-gray-300">
                    {title}
                </h3>

                <p className="mt-1 text-lg text-gray-500">
                    {subtitle}
                </p>
            </div>
        </div>
    );
};

export default StatsCard2;