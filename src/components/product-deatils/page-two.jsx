// import React from 'react'

// function PageTwo() {
//     return (
//         <div>
//             <div>
//                 <h1>This is Pagetwo</h1>
//                 <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Consectetur ipsum labore exercitationem, recusandae sit cum in ipsa harum itaque cupiditate optio id, eligendi, velit similique laboriosam qui necessitatibus beatae praesentium.</p>
//             </div>
//         </div>
//     )
// }

// export default PageTwo
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

import pipeImg from "../../assets/product_page_images/2.png"; // change to your image

function PageTwo() {
    return (
        <section className="bg-[#F5F5F5] py-16 px-6">
            <div className="max-w-7xl mx-auto grid md:grid-cols-2 gap-12 items-center">

                {/* Left Image */}
                <div className="flex justify-center">
                    <div className="border-4 border-yellow-500 p-6">
                        <img
                            src={pipeImg}
                            alt="Pipe Stiffener Bolts"
                            className="w-87.5 object-contain"
                        />
                    </div>
                </div>

                {/* Right Content */}
                <div>

                    <h2 className="text-3xl font-bold text-[#8B2C7E] mb-6">
                        Pipe Stiffeners Foundation Bolts by Royal Anchors
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Royal Anchors is proud to be the leading manufacturer of{" "}
                        <span className="text-[#8B2C7E] font-semibold">
                            pipe stiffeners and foundation bolts in India
                        </span>.
                        Our innovatively designed pipe stiffeners provide essential
                        support to the interior walls of{" "}
                        <span className="text-[#8B2C7E] font-semibold">HDPE pipes</span>,
                        particularly in critical joining applications.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        These stiffeners not only support the pipe’s ends but also
                        effectively manage the necking-down reaction caused by pressure
                        during the installation process, ensuring a secure and reliable fit.
                    </p>

                    <p className="text-yellow-600 italic mb-6">
                        Choose Royal Anchors for unmatched quality and expertise in pipe
                        stiffeners and foundation bolts, where we prioritise strength and
                        durability for your most demanding projects.
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

export default PageTwo;