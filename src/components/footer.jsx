import React from "react";
import footerImg from "../assets/fasteners_images/5.jpg"

function Footer() {
    return (
        <footer className="w-full">
            <div className="w-full h-0.5 bg-black"></div>
            {/* Top Footer Section */}
            <div
                className="w-full text-black "
                style={{
                    backgroundImage: `url(${footerImg})`,
                    backgroundSize: "cover",
                    backgroundPosition: "center",
                }}
            >        {/* Overlay for readability */}
                <div >
                    <div className="max-w-7xl mx-auto flex flex-col lg:flex-row justify-between gap-10 px-6 py-16 md:py-16">

                        {/* First Column */}
                        <div className="lg:w-[30%]">
                            <h1 className="mb-4 text-xl font-semibold">Royal Anchors</h1>
                            <p className="text-[15px] leading-relaxed text-gray-700">
                                Royal Anchor provides Anchor Foundation bolts, Sag Rods, Brace Rods,
                                Connection Fasteners direct to PEB Manufacturers, Government agencies,
                                Fabricators, Erectors and subsequent Allied Industries.
                            </p>

                            <button className="mt-6 inline-block relative overflow-hidden bg-[#0B1F3B] text-white px-8 py-3 rounded-lg group transition duration-500">

                                <span className="relative z-10">COUNT CHART</span>

                                <span className="absolute left-0 bottom-0 w-full h-0 bg-[#820933] transition-all duration-500 ease-out group-hover:h-full"></span>

                            </button>
                        </div>

                        {/* Second Column */}
                        <div className="lg:w-[30%]">
                            <h3 className="mb-4 text-lg font-semibold">Phone</h3>
                            <ul className="space-y-2 text-gray-700">
                                <li>+91 96292 51526</li>
                                <li>+91 98845 45253</li>
                                <li>+91 98842 51521</li>
                            </ul>
                        </div>

                        {/* Third Column */}
                        <div className="lg:w-[30%]">
                            <h3 className="mb-4 text-lg font-semibold">Get In Touch</h3>
                            <p className="text-[15px] leading-relaxed text-gray-700">
                                Address: Plot No 5 & 6, 8th St, Tass Industrial Estate,
                                SIDCO Ambattur, Chennai – 600098
                            </p>
                            <p className="mt-2 text-[15px] text-gray-700">
                                Email: sales@royalanchors.com
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom Footer */}
            <div className="w-full bg-[#0B1F3B] text-white text-center py-3">
                <p>© 2026 All Rights Reserved. Design By Creative Dimag</p>
            </div>

        </footer>
    );
}

export default Footer;