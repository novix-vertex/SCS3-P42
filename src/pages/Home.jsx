import Categories from "../components/home/Categories"
import HomeHero from "../components/home/HomeHero"
import Qualities from "../components/home/Qualities"
import Stats from "../components/home/Stats"
import TopItemsList from "../components/home/TopItemsList"

const Home = () => {
    return (
        <div className="bg-[#0A0A0A] text-white">
            <div className="mx-auto max-w-7xl px-5 py-20 space-y-24">
                <HomeHero />
                <Stats />
                <Categories />
                <TopItemsList />
                <Qualities />
            </div>
        </div>
    )
}

export default Home