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

import jBoltImg from "../../assets/product_page_images/10.png"; // update image if needed

function PageTen() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={jBoltImg}
                            alt="J Type Anchor Foundation Bolts"
                            className="w-105 object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        J Type Anchor Foundation Bolts by Royal Anchors: Secure Anchoring
                        for Heavy-Duty Applications
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        At Royal Anchors, our{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            J Type Anchor Foundation Bolts
                        </span>{" "}
                        are engineered to securely anchor heavy support structures into
                        concrete foundations.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        These bolts provide exceptional stability for applications such as
                        beams, columns, axial fans, industrial equipment, signage, posts,
                        light fixtures, electrical towers, cell phone towers, and highway
                        sign structures.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Designed with a distinctive{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            J-shaped hook
                        </span>{" "}
                        on one end and precision threading on the other, these bolts offer
                        strong resistance against pull-out forces.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        The curved hooked end embeds firmly within the concrete,
                        providing dependable structural stability and long-term
                        reliability even in demanding environments.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Available in{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            Grade 4.6, Grade 8.8, and Grade 10.9
                        </span>
                        , these bolts deliver excellent durability and strength,
                        ensuring secure anchorage in concrete foundations.
                    </p>

                    <p className="text-yellow-600 italic mb-6">
                        Choose Royal Anchors for high-quality J Type Anchor Foundation
                        Bolts built to perform reliably in the most demanding structural
                        and industrial applications.
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

export default PageTen;