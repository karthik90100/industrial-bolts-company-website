// function PageFive() {
//     return (
//         <div>
//             <h1>Page Five Working</h1>
//         </div>
//     );
// }

// export default PageFive;
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

import braceImg from "../../assets/product_page_images/5.png"; // change if needed

function PageFive() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={braceImg}
                            alt="Brace Rod Connectors"
                            className="w-105 object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        Brace Rod Connectors by Royal Anchors: Innovative Solutions for Structural Stability
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Royal Anchors proudly leads as an innovator in{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            Brace Rod Connectors
                        </span>
                        , providing cutting-edge solutions that ensure secure and efficient
                        connections in brace rod assemblies.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Our high-performance connectors are precisely engineered to fit
                        seamlessly between two rods and are tightened by rotating the
                        connector to deliver a strong and stabilized assembly.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        This innovative design improves structural integrity while
                        simplifying installation, helping reduce both time and labor
                        during construction.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Available in{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            M16, M20, M24, and M32 sizes
                        </span>
                        , our connectors meet a wide range of project requirements with
                        exceptional precision and durability.
                    </p>

                    <p className="text-yellow-600 italic mb-6">
                        Trust Royal Anchors for advanced brace rod solutions that bring
                        unmatched stability and ease to your construction projects.
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

export default PageFive;