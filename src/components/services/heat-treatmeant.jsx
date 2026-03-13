import React from "react";
import heatImgOne from '../../assets/services_images/2-1.png';
import heatImgTwo from '../../assets/services_images/2-2.png';


const HeatTreatment = () => {
    return (
        <div className="w-full flex justify-center bg-white px-6 py-20">
            {/* Main Container */}
            <div className="max-w-6xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 items-center">

                {/* Image Section */}
                <div className="relative group w-full max-w-lg mx-auto">
                    {/* Black & White Image (default) */}
                    <img
                        src={heatImgOne}
                        alt="Heat Treatment Black & White"
                        className="w-full rounded-lg transition-opacity duration-500 group-hover:opacity-0"
                    />

                    {/* Color Image (on hover) */}
                    <img
                        src={heatImgTwo}
                        alt="Heat Treatment Color"
                        className="w-full rounded-lg absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                    />
                </div>

                {/* Text Section */}
                <div className="text-left">
                    <h2 className="text-3xl font-bold mb-4">Heat Treat</h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Carbon and alloy steel fasteners, bolts class 8.8, and nuts class 8
                        require heat treatment to achieve the mechanical properties specified
                        by standard authorities.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Hardening occurs when specific steels are heated above 850°C,
                        followed by quenching in oil. The furnace atmosphere is controlled
                        to reduce oxidation.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        Tempering at around 450°C reduces brittleness and improves toughness.
                        This final process ensures the fastener achieves the desired properties.
                    </p>

                    <button className="mt-4 text-black font-semibold flex items-center gap-1 hover:underline">
                        Read More →
                    </button>
                </div>
            </div>
        </div>
    );
};

export default HeatTreatment;