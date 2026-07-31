import { ArrowRight } from "lucide-react";
import { Link } from "react-router";

const CTASection = () => {
    return (
        <section className="rounded-[36px] border border-lime-400/20 bg-[#111111] px-6 py-20 text-center md:px-10">

            <h2 className="text-4xl font-bold text-white md:text-5xl">
                Ready to shop?
            </h2>

            <p className="mx-auto mt-5 max-w-2xl text-xl text-neutral-500">
                Explore thousands of products at unbeatable prices.
            </p>

            <Link
                to="/shop"
                className="group mt-12 inline-flex h-16 items-center justify-center gap-3 rounded-2xl bg-lime-400 px-10 text-2xl font-semibold text-black transition-all duration-300 hover:scale-[1.02] hover:shadow-[0_0_30px_rgba(190,242,100,0.35)]"
            >
                Browse Products

                <ArrowRight
                    size={24}
                    className="transition-transform duration-300 group-hover:translate-x-1"
                />
            </Link>

        </section>
    );
};

export default CTASection;