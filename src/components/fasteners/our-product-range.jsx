import React from "react";
import connectionImg from "../../assets/fasteners_images/2.png";
import purlinImg from "../../assets/fasteners_images/3.png";

const ProductRange = () => {
    return (
        <section className="w-full flex justify-center py-20">
            <div className="max-w-6xl w-full px-6">

                {/* Section Heading */}
                <h2 className="text-center text-3xl font-semibold text-[#0B1F3B] mb-14">
                    Our Product Range
                </h2>

                {/* Cards */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-10">

                    {/* Card 1 */}
                    <div className="border border-[#0B1F3B] rounded-2xl p-10 flex flex-col items-center text-center">
                        <img
                            src={connectionImg}
                            alt="Connection Fasteners"
                            className="h-40 object-contain mb-8"
                        />

                        <h3 className="text-[#0B1F3B] text-xl font-semibold mb-4">
                            Connection Fasteners
                        </h3>

                        <p className="text-gray-700 text-sm mb-2">
                            Designed for joining rafters and columns with exceptional strength.
                        </p>

                        <p className="text-gray-700 text-sm">
                            Available in Gr 8.8 &amp; Gr 10.9 from dia 12 mm onwards.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="border border-[#0B1F3B] rounded-2xl p-10 flex flex-col items-center text-center">
                        <img
                            src={purlinImg}
                            alt="Purlin Fasteners"
                            className="h-40 object-contain mb-8"
                        />

                        <h3 className="text-[#0B1F3B] text-xl font-semibold mb-4">
                            Purlin Fasteners
                        </h3>

                        <p className="text-gray-700 text-sm mb-2">
                            Lightweight and reliable, perfect for secondary structures.
                        </p>

                        <p className="text-gray-700 text-sm">
                            Available in Gr 4.6 &amp; Gr 8.8
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ProductRange;