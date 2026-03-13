// function PageFour() {
//     return (
//         <div>
//             <h1>Page Four Working</h1>
//         </div>
//     );
// }

// export default PageFour;
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

import washerImg from "../../assets/product_page_images/4.png"; // change if needed

function PageFour() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={washerImg}
                            alt="Hillside Washers"
                            className="w-105 object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        Hillside Washers Manufacturer in Chennai, India
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        <span className="text-[#8B2C7E] font-semibold">
                            Hillside Washers by Royal Anchors
                        </span>{" "}
                        are engineered for superior load distribution in critical
                        cross-bracing applications. As a leading manufacturer of
                        hillside washers in Chennai, India, Royal Anchors delivers
                        components that ensure strength, stability, and long-term
                        structural reliability.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        These washers play a vital role in supporting wall columns
                        and steel beams and are designed to work seamlessly with
                        diagonal sag rods, which are widely used in metal building
                        construction.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Featuring a curved outer surface that allows nuts to be
                        tightened at different angles, our hillside washers reduce
                        installation time and minimize field adjustments, improving
                        efficiency while maintaining structural strength.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Available in{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            M16, M20, M24, and M32 sizes
                        </span>{" "}
                        in self finish, Royal Anchors’ Hillside Washers are built
                        for dependable performance in demanding structural projects.
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

export default PageFour;