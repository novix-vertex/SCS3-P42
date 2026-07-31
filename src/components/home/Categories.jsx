import { categoriesData } from "../../helpers/categoriesData";
import CategoryCard from "../CategoryCard"

const Categories = () => {


    return (
        <div className="grid gap-6 md:grid-cols-2 xl:grid-cols-3">

            {categoriesData.map((item, index) => (
                <CategoryCard
                    key={index}
                    {...item}
                />
            ))}
        </div>
    );
}

export default Categories