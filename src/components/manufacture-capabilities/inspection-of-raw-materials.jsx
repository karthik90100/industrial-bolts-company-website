import React, { useEffect, useRef, useState } from "react";
import rawImg from "../../assets/manufacturing_capabilities_images/1.png";

const InspectionOfRawMaterials = () => {
  const imageRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
        }
      },
      { threshold: 0.3 }
    );

    if (imageRef.current) {
      observer.observe(imageRef.current);
    }

    return () => {
      if (imageRef.current) {
        observer.unobserve(imageRef.current);
      }
    };
  }, []);

  return (
    <div className="w-full bg-white px-6 py-24 flex justify-center">
      <div className="max-w-7xl w-full grid grid-cols-1 md:grid-cols-2 gap-14 items-center">

        {/* Image Section */}
        <div
          ref={imageRef}
          className={`transform transition-all duration-1000 ease-out
            ${isVisible ? "translate-x-0 opacity-100" : "-translate-x-24 opacity-0"}
          `}
        >
          <img
            src={rawImg}
            alt="Inspection of Raw Materials"
            className="w-full rounded-lg"
          />
        </div>

        {/* Text Section */}
        <div>
          <h2 className="text-4xl font-bold text-sky-400 mb-6">
            Inspection Of Raw Materials
          </h2>

          <p className="text-gray-700 leading-relaxed mb-4">
            The original or authenticated copies of mill certificates normally
            are available at the manufacturer’s premises. These are examined
            for compliance with the appropriate specification.
          </p>

          <p className="text-gray-700 leading-relaxed">
            Post examination of the certificates, a physical inspection of the
            raw materials is done to check the diameters and finish. Once approved
            by our quality team, the material is unloaded into our premises for
            stock or production purposes.
          </p>
        </div>

      </div>
    </div>
  );
};

export default InspectionOfRawMaterials;