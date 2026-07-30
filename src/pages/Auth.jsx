import Logo from "../components/Logo"
import StatCard from "../components/StatCard";
import LoginCard from "../components/LoginCard";
import RegisterCard from "../components/RegisterCard";

const Auth = () => {
    const statistics = [
        {
            id: 1,
            value: "20K+",
            label: "Products",
        },
        {
            id: 2,
            value: "50K+",
            label: "Users",
        },
        {
            id: 3,
            value: "4.9",
            label: "Rating",
            rating: true,
        },
    ];
    return (
        <main className="min-h-screen bg-neutral-950 text-white">
            <div className="grid min-h-screen lg:grid-cols-2">
                <section className="section-left border border-neutral-800 flex flex-col justify-between p-8 lg:p-12">
                    <Logo />
                    <div className="max-w-xl">
                        <p className="mb-6 text-sm font-semibold uppercase text-[#C8F400] tracking-[0.15em]">
                            Welcome Back
                        </p>
                        <h1 className="text-5xl font-bold md:text-6xl lg:text-7xl">Shop the future.
                            <br />
                            <span className="text-[#C8F400]">
                                Today.
                            </span>
                        </h1>
                        <p className="mt-8 max-w-lg text-lg text-neutral-400 leading-8 mb-4">
                            Thousands of products, lightning-fast delivery,
                            and prices that make your wallet happy.
                        </p>
                    </div>
                    <div className="grid grid-cols-3 gap-4">
                        {statistics.map((item) => {
                            return <StatCard
                                key={item.id}
                                value={item.value}
                                label={item.label}
                                rating={item.rating} />
                        })}
                    </div>
                </section>
                <section className=" section-right border border-neutral-800 flex items-center justify-center">
                    <RegisterCard />
                </section>
            </div>
        </main>
    )
}

export default Auth