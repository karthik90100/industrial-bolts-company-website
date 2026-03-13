import React from "react";
import { Handshake } from "lucide-react";

const PartnerWithUs = () => {
    return (
        <section className="w-full flex justify-center py-20 bg-gray-50">
            {/* Same width as Contact section */}
            <div className="max-w-6xl w-full px-6">

                {/* Purple CTA box */}
                <div className="bg-purple-700 rounded-xl py-16 px-10 flex justify-center">
                    <div className="relative border-4 border-yellow-400 rounded-md py-14 px-10 text-center text-white w-full max-w-5xl">

                        {/* Icon */}
                        <div className="absolute -top-7 left-1/2 -translate-x-1/2 bg-yellow-400 p-3 rounded">
                            <Handshake className="text-black w-6 h-6" />
                        </div>

                        {/* Heading */}
                        <h3 className="text-yellow-400 text-xl font-semibold mb-6">
                            Partner With Us
                        </h3>

                        {/* Content */}
                        <p className="max-w-3xl mx-auto leading-relaxed text-base">
                            Choosing Royal Anchors means choosing a partner committed to your success.
                            Whether it’s a small-scale project or a large industrial venture, our fasteners
                            provide the strength and reliability you need. Together, let’s build structures
                            that stand the test of time.
                        </p>

                    </div>
                </div>

            </div>
        </section>
    );
};

export default PartnerWithUs;