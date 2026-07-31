import { Zap } from "lucide-react";

const AboutHero = () => {
    return (
        <section className="text-center">

            <div className="mx-auto flex h-20 w-20 items-center justify-center rounded-3xl bg-lime-400">

                <Zap
                    size={36}
                    className="text-black fill-black"
                />

            </div>

            <h1 className="mt-10 text-5xl font-bold lg:text-7xl">
                About{" "}
                <span className="text-lime-400">
                    SkyMart
                </span>
            </h1>

            <p className="mx-auto mt-8 max-w-3xl text-xl leading-9 text-neutral-500">
                SkyMart is a next-generation e-commerce platform built to
                make online shopping fast, fair, and enjoyable for everyone.
            </p>

        </section>
    );
};

export default AboutHero;