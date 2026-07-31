import ProductList from "../components/shop/ProductList"
import SearchFilter from "../components/common/SearchFilter"

const Shop = () => {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 space-y-24">

        <SearchFilter />
        <ProductList />
      </div>
    </div>
  )
}

export default Shop