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

import tBoltImg from "../../assets/product_page_images/11.png"; // update if needed

function PageEleven() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={tBoltImg}
                            alt="T Type Foundation Bolts"
                            className="w-105 object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        T Type Foundation Bolts by Royal Anchors: The Ultimate Solution
                        for Secure Structural Connections
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Royal Anchors proudly presents{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            T Type Foundation Bolts
                        </span>
                        , also known as T-head anchor bolts or T-bolts, designed to
                        provide superior anchoring solutions for securing structural
                        components to concrete foundations.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        The innovative <strong>T-shaped design</strong> ensures a stable
                        connection while effectively distributing loads, improving the
                        overall strength and performance of the structure.
                    </p>

                    <ul className="text-gray-700 leading-relaxed mb-6 list-disc pl-6 space-y-2">
                        <li>
                            <strong>Embedding:</strong> The horizontal portion of the T
                            is securely embedded into the concrete, creating a solid
                            and reliable foundation.
                        </li>

                        <li>
                            <strong>Protruding Stem:</strong> The vertical stem extends
                            above the surface and acts as a strong attachment point
                            for the structural element being anchored.
                        </li>

                        <li>
                            <strong>Wide Bearing Surface:</strong> The T shape provides
                            an expansive bearing surface that enhances stability and
                            optimizes load distribution.
                        </li>
                    </ul>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        T Type Foundation Bolts are widely used in building
                        construction, infrastructure development, industrial
                        machinery installations, and heavy equipment relocation
                        projects where strong and dependable anchoring is essential.
                    </p>

                    <p className="text-yellow-600 italic mb-6">
                        Trust Royal Anchors for T Type Foundation Bolts that deliver
                        unmatched strength, stability, and reliability in every
                        structural application.
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

                <div className="flex gap-6 text-[#8B2C7E] text-lg *:cursor-pointer *:hover:scale-110 transition">
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

export default PageEleven;