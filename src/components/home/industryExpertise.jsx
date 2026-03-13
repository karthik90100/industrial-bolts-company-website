import React from "react";
import { Headset, Settings, Globe, Bolt } from "lucide-react";

function IndustryExpertise() {
    return (
        <div>
            {/* Heading */}
            <h2 className="text-center text-[#0B1F3B] text-4xl font-bold mb-16">
                Industry Expertise
            </h2>

            {/* Cards Container */}
            <div className="max-w-300 mx-auto min-h-70 px-6 grid grid-cols-1 md:grid-cols-3 gap-8 ">

                {/* Card 1 +ICON  */}
                <div className=" border border-[#0B1F3B] rounded-lg p-8 text-center hover:shadow-lg group ">
                    <div className="inline-flex items-center gap-4">
                        <h3 className=" text-[#0B1F3B] text-xl font-semibold mt-8 mb-4 ">
                            Outstanding Customer Support
                        </h3>
                        <Headset className=" mt-6 text-[#0B1F3B] " />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ">
                        Our customer support team is always ready to assist you. Whether you
                        have questions, need technical advice, or require post-sales
                        support, we're here to help you at every step of the way.
                    </p>
                </div>

                {/* Card 2 + Icon*/}
                <div className=" border border-[#0B1F3B] rounded-lg p-8 text-center hover:shadow-lg group ">
                    <div className="inline-flex items-center gap-4">
                        <h3 className=" text-[#0B1F3B] text-xl font-semibold mt-8 mb-4 ">
                            Outstanding Customer Support
                        </h3>
                        <Settings className=" mt-6 text-[#0B1F3B] " />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ">
                        Our customer support team is always ready to assist you. Whether you
                        have questions, need technical advice, or require post-sales
                        support, we're here to help you at every step of the way.
                    </p>
                </div>


                {/* Card 3  + Icon*/}
                <div className=" border border-[#0B1F3B] rounded-lg p-8 text-center hover:shadow-lg group ">
                    <div className="inline-flex items-center gap-4">
                        <h3 className=" text-[#0B1F3B] text-xl font-semibold mt-8 mb-4 ">
                            Customization Options
                        </h3>
                        <Globe className=" mt-6 text-[#0B1F3B] " />
                    </div>
                    <p className="text-gray-700 text-sm leading-relaxed ">
                        Our customer support team is always ready to assist you. Whether you
                        have questions, need technical advice, or require post-sales
                        support, we're here to help you at every step of the way.
                    </p>
                </div>


            </div>
            <div className="max-w-7xl mx-auto px-6">

                {/* Main Box */}
                <div className="relative border-4 border-black rounded-xl p-10 flex flex-col md:flex-row items-center justify-between gap-8 mt-8">

                    {/* Left Icon */}
                    <div className="absolute -left-6 bg-yellow-400 p-4 rounded-lg">
                        <Bolt className="w-8 h-8 text-black" />
                    </div>

                    {/* Text Content */}
                    <div className="max-w-3xl">
                        <h2 className="text-3xl md:text-4xl font-bold text-black mb-4">
                            Get Your Anchor Bolts Fast!
                            <br />
                            Click to Bolt Up Quote Now
                        </h2>

                        <p className="text-lg text-gray-700">
                            Precision in Every Thread. Request Your Bolt & Nut Quote Now
                        </p>
                    </div>

                    {/* Button */}
                    <button className="bg-[#0B1F3B] hover:bg-[#820933] transition duration-500 ease-out text-white px-8 py-4 rounded-lg text-lg font-semibold flex items-center gap-2 ">
                        Request a Quote
                        <span className="text-2xl">›</span>
                    </button>

                </div>


            </div>
        </div>
    );
}
export default IndustryExpertise;
