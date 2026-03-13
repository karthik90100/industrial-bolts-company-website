// import React from 'react'

// function PageOne() {
//     return (
//         <div>
//             <h1>THIS IS PAGE ONE</h1>
//         </div>
//     )
// }

// export default PageOne
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

import fastenerImg from "../../assets/product_page_images/1.png";

function PageOne() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={fastenerImg}
                            alt="Connection Fastener"
                            className="w-87.5 object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>
                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        Your Ultimate Solution for Connection Fasteners in PEB & Heavy
                        Structure Fabrication
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        At Royal Anchors, we strive to be your comprehensive solution
                        provider for all your{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            pre-engineered building (PEB)
                        </span>{" "}
                        and heavy structure fabrication needs. We specialize in
                        manufacturing high-strength{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            connection fasteners
                        </span>{" "}
                        designed to seamlessly join rafters and columns, available in
                        Grade 8.8 and Grade 10.9 for optimal performance and reliability.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        For purlins, our expertly crafted connection fasteners come in
                        Grade 4.6, ensuring robust connections that withstand the test
                        of time.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Understanding the challenges our customers face, Royal Anchors
                        delivers materials in assembled conditions, streamlining your
                        assembly process and reducing on-site complexity.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Our fasteners are meticulously manufactured and stocked with a
                        premium zinc finish, providing superior corrosion resistance
                        and longevity.
                    </p>

                    <p className="text-yellow-600 italic mb-6">
                        Choose Royal Anchors for unparalleled quality and service in the
                        PEB and heavy structure industry.
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

export default PageOne;