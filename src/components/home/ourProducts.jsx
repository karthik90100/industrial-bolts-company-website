import React from "react";

import p1 from "../../assets/home_page_imgs/product_images/1.png";
import p2 from "../../assets/home_page_imgs/product_images/2.png";
import p3 from "../../assets/home_page_imgs/product_images/3.png";
import p4 from "../../assets/home_page_imgs/product_images/4.png";
import p5 from "../../assets/home_page_imgs/product_images/5.png";
import p6 from "../../assets/home_page_imgs/product_images/6.png";
import p7 from "../../assets/home_page_imgs/product_images/7.png";
import p8 from "../../assets/home_page_imgs/product_images/8.png";
import p9 from "../../assets/home_page_imgs/product_images/9.png";
import p10 from "../../assets/home_page_imgs/product_images/10.png";
import p12 from "../../assets/home_page_imgs/product_images/12.png";

function OurProducts() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 text-center">

                <h2 className="text-[#0B1F3B] text-4xl font-bold mb-8">
                    Our Products
                </h2>

                <p className="text-gray-700 max-w-4xl mx-auto mb-16">
                    Royal Anchor provides <b>Anchor Foundation bolts</b>, Sag Rods,
                    Brace Rods, Connection Fasteners direct to PEB Manufacturers,
                    Government agencies, Fabricators, Erectors and subsequent Allied
                    Industries.
                </p>

                {/* PRODUCTS GRID */}
                <div className="grid grid-cols-3 md:grid-cols-5 lg:grid-cols-7 gap-14 justify-items-center mb-12 ">

                    {/* p9 + p10 */}
                    <div className="flex flex-row items-end gap-1 border-2 border-black p-10 bg-gray-300 min-w-40 h-85">

                        <img
                            src={p9}
                            alt="nut"
                            className="h-52 object-contain "
                        />

                        <img
                            src={p10}
                            alt="bolt"
                            className="h-52 object-contain"
                        />

                    </div>

                    {/* p8 */}
                    <img src={p8} className="h-50 object-contain border-2 border-black " />
                    {/* p7 + p1  rotate-310 */}
                    <div className="flex flex-wrap gap-1 border-2 border-black bg-gray-300 min-w-40">

                        <img
                            src={p1}
                            alt="product"
                            className="h-30 object-contain  ml-13 "
                        />

                        <img
                            src={p7}
                            alt="product"
                            className="h-50 object-contain  rotate-45"
                        />


                    </div>


                    {/* p12 */}
                    <img src={p12} className="h-50 object-contain border-2 border-black p-2" />
                    {/* p3 + p6 */}
                    <div className="flex flex-row items-center border-2 border-black p-10 bg-gray-300 min-w-40">
                        <img src={p3} className="h-50 object-contain" />
                        <img src={p6} className="h-50 object-contain -mt-2" />
                    </div>

                    {/* p2 */}
                    <img src={p2} className="h-50 object-contain border-2 border-black p-10 pt-0 pb-0" />


                    {/* p4 + p5 */}
                    <div className="flex flex-row items-center border-2 border-black p-10 bg-gray-300 min-w-40">
                        <img src={p4} className="h-50 object-contain " />
                        <img src={p5} className="h-50 object-contain -mt-2" />
                    </div>

                </div>

                <p className="font-semibold mb-10">
                    Connection Fasteners
                </p>
                <button className="relative overflow-hidden bg-[#0B1F3B] text-white px-8 py-3 rounded-lg group transition duration-500">

                    <span className="relative z-10">View All Products</span>

                    <span className="absolute left-0 bottom-0 w-full h-0 bg-[#820933] transition-all duration-500 ease-out group-hover:h-full"></span>

                </button>

            </div>
        </section>
    );
}

export default OurProducts;