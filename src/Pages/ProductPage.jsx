import HeroTwo from "../components/heroTwo.jsx";
import ManufacturerSection from '../components/products/matter.jsx'
import ProductCards from '../components/products/product-cards.jsx'

import React from 'react'

function Product() {
    return (
        <div><HeroTwo />

            <ManufacturerSection />
            <ProductCards />
        </div>
    )
}

export default Product
