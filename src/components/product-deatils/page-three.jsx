// import React from 'react'

// function PageThree() {
//     return (
//         <div>
//             <h1>tHSIS IS paGE THERE</h1>
//         </div>
//     )
// }

// export default PageThree
import React from "react";
import {
    FaFacebookF,
    FaXTwitter,
    FaPinterestP,
    FaRedditAlien,
    FaWhatsapp,
    FaTelegram,
    FaEnvelope,
} from "react-icons/fa6";

import poleImg from "../../assets/product_page_images/3.png"; // change if needed

function PageThree() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={poleImg}
                            alt="Light Pole Foundation Bolts"
                            className="w-[420px] object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        Royal Anchors’ Street Light Pole Foundation Bolts: Engineered for
                        Lasting Strength and Resilience
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Royal Anchors’{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            Street Light Pole Foundation Bolts
                        </span>{" "}
                        are expertly engineered to anchor street light poles securely to
                        concrete foundations, delivering unwavering stability vital for
                        dependable, long-term outdoor lighting.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        With precision-engineered alignment and robust strength, these
                        bolts provide a rock-solid foundation, supporting safe and
                        steadfast posts.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Constructed from premium-grade carbon steel and{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            hot-dip galvanized
                        </span>{" "}
                        for exceptional corrosion resistance, our bolts are built to
                        withstand even the harshest outdoor environments.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Designed for effortless, accurate installation, these bolts form
                        the backbone of resilient street lighting, ensuring enduring safety
                        and structural integrity for your infrastructure.
                    </p>

                    {/* Button */}
                    <button className="bg-yellow-500 hover:bg-yellow-600 text-white font-semibold px-6 py-2 rounded">
                        Get a Quote
                    </button>

                </div>
            </div>

            {/* Share Section */}
            <div className="max-w-3xl mx-auto mt-14 border-2 border-yellow-500 rounded-lg p-4 flex items-center justify-between">

                <span className="font-semibold text-gray-700">SHARE</span>

                <div className="flex gap-6 text-[#8B2C7E] text-lg">
                    <FaFacebookF />
                    <FaXTwitter />
                    <FaPinterestP />
                    <FaRedditAlien />
                    <FaWhatsapp />
                    <FaTelegram />
                    <FaEnvelope />
                </div>

            </div>
        </section>
    );
}

export default PageThree;