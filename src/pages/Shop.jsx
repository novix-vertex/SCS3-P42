import { useState } from "react";
import SearchFilter from "../components/common/SearchFilter"
import ProductGrid from "../components/shop/ProductGrid"
import ShopHeader from "../components/shop/ShopHeader"

const Shop = () => {
  return (
    <div className="bg-[#0A0A0A] text-white">
      <div className="mx-auto max-w-7xl px-5 py-20 space-y-24">

        <ShopHeader />
        <SearchFilter />
        <ProductGrid />

      </div>
    </div>
  )
}

export default Shop