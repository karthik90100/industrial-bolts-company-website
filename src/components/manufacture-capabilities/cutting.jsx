import React from "react";
import cuttingImg from "../../assets/manufacturing_capabilities_images/cutting.png";

const Cutting = () => {
    return (
        <div className="w-full bg-white px-6 py-24 flex justify-center">
            <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-start">

                {/* Text Section */}
                <div>
                    <h2 className="text-4xl font-bold text-sky-400 mb-6">
                        Cutting
                    </h2>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        The first step in the manufacturing process of any fastener,
                        regardless of its final configuration, is cutting the bolt to
                        length. Raw material in the form of round bar ranging from 12”
                        to 40” in length is either saw cut or sheared.
                    </p>

                    <p className="text-gray-700 leading-relaxed mb-4">
                        Band saws use saw blades to cut through the steel round bar.
                        On the other hand, shearing equipment functions like a
                        guillotine, “chopping” the raw material.
                    </p>

                    <p className="text-gray-700 leading-relaxed">
                        During the shearing operation, the material is automatically
                        run against a stop and then sheared to length. This quick
                        process is extremely efficient and results in more
                        cost-effective and time-efficient production.
                    </p>
                </div>

                {/* Image Section */}
                <div className="flex justify-center">
                    <img
                        src={cuttingImg}
                        alt="Cutting process"
                        className="w-full max-w-xl rounded-md"
                    />
                </div>

            </div>
        </div>
    );
};

export default Cutting;