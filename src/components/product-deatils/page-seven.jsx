// import React from 'react'

// function PageSeven() {
//     return (
//         <div>
//             7
//         </div>
//     )
// }

// export default PageSeven
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

import braceRodImg from "../../assets/product_page_images/7.png"; // update image if needed

function PageSeven() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={braceRodImg}
                            alt="Brace Rods"
                            className="w-105 object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        Brace Rods by Royal Anchors: Engineered for Extended Reach and
                        Uncompromised Strength
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Royal Anchors is proud to be India’s largest manufacturer of{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            Brace Rods
                        </span>
                        , offering unparalleled expertise from Chennai, Tamil Nadu.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our brace rods are designed for applications that require
                        extended lengths. They utilize an innovative two-rod
                        configuration joined with a high-strength connector in the
                        middle, with each end precision-threaded to ensure a secure
                        and seamless fit.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Royal Anchors supplies brace rods in lengths ranging from{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            500 mm up to 12 meters per piece
                        </span>
                        , making them ideal for large-scale structural projects.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Typically manufactured from premium low-carbon steel, our
                        brace rods can also be produced using higher-strength carbon
                        or alloy steel assemblies for projects requiring additional
                        durability and resilience.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Available in plain finish or painted as per customer
                        specifications, Royal Anchors’ Brace Rods provide dependable
                        strength and long-lasting performance for structural
                        applications.
                    </p>

                    <p className="text-yellow-600 italic mb-6">
                        Choose Royal Anchors for dependable brace rod solutions that
                        set the standard for strength, versatility, and durability
                        in modern construction projects.
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

export default PageSeven;