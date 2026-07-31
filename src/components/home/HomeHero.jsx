import { ArrowRight } from "lucide-react";
import { Link } from "react-router";
import { useContext } from "react";
import { ProductContext } from "../../context/ProductContext";

const HomeHero = () => {
    const { products } = useContext(ProductContext);
    return (
        <section className="overflow-hidden rounded-[36px] border border-neutral-300/80 bg-[#111111]">

            <div
                className="grid min-h-112 grid-cols-1 lg:grid-cols-[1fr_280px]"
                style={{
                    backgroundImage: `
                    linear-gradient(rgba(217,255,0,0.05) 1px, transparent 1px),
                    linear-gradient(90deg, rgba(217,255,0,0.05) 1px, transparent 1px)
                    `,
                    backgroundSize: "50px 50px",
                }}
            >
                <div className="flex flex-col justify-center px-8 py-10 lg:px-14">

                    <span className="text-lg font-semibold uppercase tracking-widest text-lime-400">
                        Good Morning 👋
                    </span>

                    <h1 className="mt-6 text-6xl font-bold leading-tight text-white lg:text-7xl">
                        Welcome back,
                        <br />
                        <span className="text-lime-400">
                            Happy!
                        </span>
                    </h1>

                    <p className="mt-8 max-w-2xl text-2xl leading-10 text-neutral-500">
                        Discover today's picks — hand-curated products across
                        electronics, fashion, and more.
                    </p>

                    <div className="mt-10 flex flex-wrap gap-5">

                        <Link
                            to="/shop"
                            className="group flex h-16 items-center gap-3 rounded-2xl bg-lime-400 px-9 text-xl font-semibold text-black transition hover:scale-[1.02]"
                        >
                            Shop Now

                            <ArrowRight
                                size={22}
                                className="transition group-hover:translate-x-1"
                            />
                        </Link>

                        <Link
                            to="/shop"
                            className="flex h-16 items-center rounded-2xl border border-neutral-700 px-9 text-xl font-medium text-white transition hover:border-lime-400"
                        >
                            View All Products
                        </Link>

                    </div>

                </div>

                <div className="flex flex-col justify-center gap-6 px-8 py-10">

                    <div className="rounded-3xl border border-lime-400/30 bg-lime-400/10 p-8 text-center">

                        <h2 className="text-6xl font-bold text-lime-400">
                            {products.length}+
                        </h2>

                        <p className="mt-3 text-lg text-neutral-400">
                            Products Available
                        </p>

                    </div>

                    <div className="rounded-3xl border border-neutral-300/80 bg-[#111111] p-8 text-center">

                        <h2 className="text-5xl font-bold text-white">
                            Free
                        </h2>

                        <p className="mt-3 text-lg text-neutral-500">
                            Delivery on ₹999+
                        </p>

                    </div>

                </div>

            </div>

        </section>
    );
};

export default HomeHero;