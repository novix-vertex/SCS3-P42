const OurStory = () => {
    return (

        <div className="flex gap-2 flex-col rounded-3xl border border-gray-300/80 bg-[#111111] p-9 transition-all duration-300 hover:-translate-y-1 hover:border-lime-400/40 hover:shadow-lg">
            <h3 className="text-4xl font-medium text-gray-300 mb-3">
                {"Our Story"}
            </h3>
            <div className="flex flex-col gap-3 text-lg text-gray-500">
                <p>{`SkyMart started in 2022 as a small side project — two engineers tired of bloated, slow e-commerce experiences. We asked ourselves: what if shopping online was actually enjoyable?`}</p>
                <p>{`Three years later, SkyMart serves over 50,000 customers across the country. We stock electronics, fashion, jewelry, and everyday essentials — all at prices that don't require a second mortgage.`}</p>
                <p>{`We're still the same team at heart: obsessed with speed, transparency, and making you feel good about every purchase you make here.`}</p>
            </div>
        </div>

    )
}

export default OurStory