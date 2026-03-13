// import React from 'react'

// function PageSix() {
//     return (
//         <div>
//             6
//         </div>
//     )
// }

// export default PageSix
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

import sagRodImg from "../../assets/product_page_images/6.png"; // change image if needed

function PageSix() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={sagRodImg}
                            alt="Z Sag Rod Assemblies"
                            className="w-105 object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        Z Sag Rod Assemblies by Royal Anchors: Precision-Engineered for
                        Unmatched Support
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Royal Anchors manufactures{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            Z Sag Rod Assemblies
                        </span>{" "}
                        in a wide range of specifications and sizes, custom-designed to
                        meet each project’s unique requirements.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our assemblies feature a single rod with threading at both ends,
                        providing exceptional bracing for steel columns, heavy timber
                        beams, and structural supports for canopies and awnings.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Crafted primarily from{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            high-quality low-carbon steel
                        </span>
                        , our sag rods are built for strength and reliability. For
                        projects requiring even greater durability, we also provide
                        higher-strength assemblies.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our carbon steel Z Sag Rods are available in{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            plain finish, electro-plated, or hot-dip galvanized
                        </span>
                        , offering strong protection against environmental conditions.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        To ensure seamless installation, each sag rod package is
                        pre-assembled in our facility, guaranteeing accurate thread fit
                        before shipment to your job site.
                    </p>

                    <p className="text-yellow-600 italic mb-6">
                        Choose Royal Anchors for high-performance Z Sag Rod Assemblies
                        that set the benchmark for structural stability and precision.
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

export default PageSix;