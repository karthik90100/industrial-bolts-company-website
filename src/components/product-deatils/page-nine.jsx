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

import lBoltImg from "../../assets/product_page_images/9.png"; // update image if needed

function PageNine() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={lBoltImg}
                            alt="L Type Foundation Bolts"
                            className="w-105 object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        L Type Foundation Bolts by Royal Anchors: Reliable Anchoring for
                        Demanding Applications
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Royal Anchors manufactures{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            L Type Foundation Bolts
                        </span>{" "}
                        —also known as anchor bolts or bed bolts—engineered to provide
                        secure support for structural steel columns, light poles,
                        traffic signals, highway signs, industrial equipment, and
                        many other structural applications.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Precision-crafted to meet diverse specifications, our
                        <span className="text-[#8B2C7E] font-semibold">
                            {" "}L Type and J Type foundation bolts
                        </span>{" "}
                        range from <strong>12mm to M100mm diameter</strong>, ensuring
                        a reliable fit for a wide variety of construction needs.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Available in{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            Grade 4.6, Grade 8.8, and Grade 10.9
                        </span>
                        , these bolts provide superior durability and strength,
                        designed to anchor firmly within concrete foundations.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        The bent portion—or "leg"—of each bolt creates exceptional
                        resistance, preventing pull-out under applied force and
                        ensuring long-term structural stability.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-6">
                        Royal Anchors offers multiple finish options including{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            plain finish, zinc plating, hot-dip galvanizing, and
                            custom paint finishes
                        </span>{" "}
                        according to project specifications.
                    </p>

                    <p className="text-yellow-600 italic mb-6">
                        With unmatched quality, durability, and customization,
                        Royal Anchors’ L Type Foundation Bolts set the industry
                        standard for dependable anchoring solutions.
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

export default PageNine;