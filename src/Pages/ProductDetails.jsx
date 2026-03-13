import React from 'react'
import PageOne from "../components/product-deatils/page-one";
import PageTwo from "../components/product-deatils/page-two";
import PageThree from "../components/product-deatils/page-three";
import PageFour from "../components/product-deatils/page-four";
import PageFive from "../components/product-deatils/page-five";
import PageSix from "../components/product-deatils/page-six";
import PageSeven from "../components/product-deatils/page-seven";
import PageEight from "../components/product-deatils/page-eigth";
import PageNine from "../components/product-deatils/page-nine";
import PageTen from "../components/product-deatils/page-ten";
import PageEleven from "../components/product-deatils/page-eleven";
import { useParams } from "react-router-dom";


function ProductDetails() {

    const { slug } = useParams();

    const productPages = {
        "connection-fasteners": PageOne,
        "pipe-stiffener-bolts": PageTwo,
        "light-pole-foundation": PageThree,
        "hillside-washer": PageFour,
        "brace-rod-connectors": PageFive,
        "z-sag-rod": PageSix,
        "brace-rod": PageSeven,
        "plate-type-foundation-bolt": PageEight,
        "item-9": PageNine,
        "item-10": PageTen,
        "item-11": PageEleven,
    };

    const Component = productPages[slug];

    return (
        <div>
            {Component ? <Component /> : <h1>Product Not Found</h1>}
        </div>
    );
}

export default ProductDetails;

