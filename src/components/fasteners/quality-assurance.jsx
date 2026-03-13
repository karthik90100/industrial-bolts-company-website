import React from "react";
import qaImage from "../../assets/fasteners_images/4.png";
// 🔁 update image path if needed

const QualityAssurance = () => {
    return (
        <section className="w-full flex justify-center py-20">
            <div className="max-w-6xl w-full px-6">

                {/* Section Heading */}
                <h2 className="text-center text-3xl font-semibold text-purple-700 mb-16">
                    Quality Assurance
                </h2>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Text */}
                    <div className="text-gray-700 leading-relaxed text-base max-w-md">
                        <p>
                            Every product at Royal Anchors undergoes rigorous quality
                            checks. Our in-house testing facilities and adherence to
                            global standards ensure you receive only the best.
                        </p>

                        <p className="mt-4">
                            From material sourcing to the final finish, our team works
                            diligently to maintain the highest level of excellence.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="rounded-3xl overflow-hidden h-105">
                        <img
                            src={qaImage}
                            alt="Quality Assurance"
                            className="w-full h-full object-cover"
                        />
                    </div>

                </div>
            </div>
        </section>
    );
};

export default QualityAssurance;