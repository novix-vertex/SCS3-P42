const StatsCard3 = ({ icon: Icon,
    title,
    subtitle }) => {
    return (
        <div className="flex gap-2 items-center justify-center flex-col rounded-3xl border border-gray-300/80 bg-[#111111] px-5 py-3 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:shadow-lg">
            <div
                className={`flex h-16 w-16 items-center justify-center rounded-2xl` }
            >
                <Icon size={30} className="text-lime-400" />
            </div>

            <h3 className="text-4xl font-medium text-gray-300">
                {title}
            </h3>

            <p className="mt-1 text-lg text-gray-500">
                {subtitle}
            </p>
        </div>
    );
}

export default StatsCard3