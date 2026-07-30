import Categories from "../components/home/Categories"
import Qualities from "../components/home/Qualities"
import Stats from "../components/home/Stats"
import TopItemsList from "../components/home/TopItemsList"

const Home = () => {
    return (
        <div>
            <Stats />
            <Categories />
            <TopItemsList />
            <Qualities />
        </div>
    )
}

export default Home