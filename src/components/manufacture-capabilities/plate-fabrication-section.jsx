import React, { useEffect, useRef, useState } from "react";
import plateImg from "../../assets/manufacturing_capabilities_images/4.png"; // use your image path

function PlateFabricationSection() {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                setIsVisible(entry.isIntersecting);
            },
            { threshold: 0.3 }
        );

        if (imageRef.current) observer.observe(imageRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                    {/* CONTENT */}
                    <div>
                        <h2 className="text-3xl font-bold text-purple-700 mb-4">
                            Plate Fabrication
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-sm">
                            Royal Anchors has the ability to shear and punch holes bar as thick
                            as 1”. Square and rectangular plates are used as templates, splice
                            plates, washers, or anchor plates on the bottom of anchor rods
                            embedded in concrete. Our certified welders are capable of welding
                            plates together, welding plates to rods, welding plates to nuts,
                            or any other requirements you may have.
                        </p>
                    </div>

                    {/* IMAGE */}
                    <div
                        ref={imageRef}
                        className={`
              overflow-hidden
              transform transition-all duration-700 ease-out
              ${isVisible ? "translate-x-0 opacity-100" : "translate-x-20 opacity-0"}
            `}
                    >
                        <img
                            src={plateImg}
                            alt="Plate Fabrication"
                            className="w-full h-75 object-cover rounded-md"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default PlateFabricationSection;