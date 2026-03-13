// import React from 'react'

// function PageEight() {
//     return (
//         <div>
//             8
//         </div>
//     )
// }

// export default PageEight;
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

import plateBoltImg from "../../assets/product_page_images/8.png"; // update image if needed

function PageEight() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={plateBoltImg}
                            alt="Plate Type Foundation Bolts"
                            className="w-105 object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        Plate Type Foundation Bolts by Royal Anchors: Built for Strength
                        and Reliability
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Royal Anchors manufactures{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            Plate Type Foundation Bolts
                        </span>
                        , a trusted choice in the construction industry known for their
                        rugged design and exceptional durability.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Each bolt features a robust housing plate at one end and
                        heavy-duty threading at the other, ensuring secure anchorage
                        and dependable performance in demanding structural applications.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        At Royal Anchors, we provide application-specific foundation
                        bolts manufactured from a range of materials to meet unique
                        project requirements.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        For customized solutions—including{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            Bent, Rag, and Lewis foundation bolts
                        </span>
                        —Royal Anchors stands out for its commitment to superior
                        engineering, product quality, and service excellence.
                    </p>

                    <p className="text-yellow-600 italic mb-6">
                        Trust Royal Anchors to deliver foundation bolts that meet the
                        highest standards of strength, precision, and versatility for
                        modern construction projects.
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

export default PageEight;