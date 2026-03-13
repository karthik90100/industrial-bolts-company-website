import React from "react";
import imgOne from "../../assets/services_images/3-1.png";
import imgTwo from "../../assets/services_images/3-2.png";

const PlatingServices = () => {
    return (
        <div className="w-full flex justify-center bg-white px-6 py-20">
            <div className="max-w-7xl w-full">

                {/* Title */}
                <h2 className="text-center text-2xl font-medium mb-12">
                    Plating Services
                </h2>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-12">

                    {/* Text Section */}
                    <div>
                        <h3 className="text-3xl font-bold mb-4">
                            Hot-dip galvanizing
                        </h3>

                        <p className="text-gray-700 leading-relaxed mb-3">
                            Hot-dip galvanizing is the process of immersing iron or steel
                            in a bath of molten zinc to produce a corrosion resistant,
                            multi-layered coating of zinc-iron alloy and zinc metal.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            While the steel is immersed in the zinc, a metallurgical reaction
                            occurs between the iron in the steel and the molten zinc.
                        </p>
                    </div>

                    {/* Image Section */}
                    <div className="relative group w-full max-w-md mx-auto">
                        {/* Image 1 */}
                        <img
                            src={imgOne}
                            alt="Hot dip galvanizing process"
                            className="w-full transition-opacity duration-500 group-hover:opacity-0"
                        />

                        {/* Image 2 (on hover) */}
                        <img
                            src={imgTwo}
                            alt="Galvanized product"
                            className="w-full absolute inset-0 opacity-0 transition-opacity duration-500 group-hover:opacity-100"
                        />
                    </div>

                </div>
            </div>
        </div>
    );
};

export default PlatingServices;