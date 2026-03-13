import React from "react";
import electroImg from "../../assets/services_images/4.png";

const ElectroplatingServices = () => {
    return (
        <div className="w-full bg-white px-6 py-20 flex justify-center">
            <div className="max-w-7xl w-full">

                {/* Title */}
                <h2 className="text-center text-3xl font-semibold mb-12">
                    Electroplating Services
                </h2>

                {/* Content */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                    {/* Image Section */}
                    <div className="flex justify-center">
                        <img
                            src={electroImg}
                            alt="Electroplating process diagram"
                            className="max-w-md w-full"
                        />
                    </div>

                    {/* Text Section */}
                    <div>
                        <p className="text-gray-700 leading-relaxed mb-4">
                            Electroplating is done by the process of electro deposition.
                            The fasteners are dipped in a chemical bath containing
                            dissolved zinc.
                        </p>

                        <p className="text-gray-700 leading-relaxed">
                            When direct current is applied, the zinc metal at the anode
                            begins to dissolve, and the free metal ions reach the cathode
                            to form a thin layer of coating on the fastener.
                        </p>
                    </div>

                </div>
            </div>
        </div>
    );
};

export default ElectroplatingServices;