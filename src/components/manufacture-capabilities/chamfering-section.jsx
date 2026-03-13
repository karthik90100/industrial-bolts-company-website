import React, { useEffect, useRef, useState } from "react";
import chamferingImg from "../../assets/manufacturing_capabilities_images/3.png"; // change if needed

function ChamferingSection() {
    const imageRef = useRef(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                } else {
                    // reset when scrolling up
                    setIsVisible(false);
                }
            },
            {
                threshold: 0.3,
            }
        );

        if (imageRef.current) observer.observe(imageRef.current);

        return () => observer.disconnect();
    }, []);

    return (
        <section className="w-full bg-white py-20">
            <div className="max-w-7xl mx-auto px-6">

                <div className="grid grid-cols-1 md:grid-cols-2 items-center gap-10">

                    {/* IMAGE */}
                    <div
                        ref={imageRef}
                        className={`
          relative overflow-hidden
          transform transition-all duration-700 ease-out
          ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-20 opacity-0"}
        `}
                    >
                        <img
                            src={chamferingImg}
                            alt="Chamfering"
                            className="w-full h-75 object-cover"
                        />
                    </div>

                    {/* CONTENT */}
                    <div>
                        <h2 className="text-3xl font-bold text-purple-700 mb-4">
                            Chamfering
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-sm">
                            At Royal Anchors all bolts go through chamfering operation which is
                            the beveling of the end of a bolt (removal of the first thread) to
                            facilitate easy installation of a nut. These operations are
                            performed with highly specialized equipment designed to quickly
                            and consistently apply various degrees of points to fasteners.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default ChamferingSection;