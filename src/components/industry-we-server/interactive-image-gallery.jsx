import React, { useState } from "react";
import ImageOne from "../../assets/industry_we_server_images/1-1.png";
import ImageTwo from "../../assets/industry_we_server_images/1-2.png";
import ImageThree from "../../assets/industry_we_server_images/1-3.jpg";

const items = [
    {
        title: "Pre-Engineered Building System",
        image: ImageOne,
    },
    {
        title: "Industrial Heavy Duty Fan",
        image: ImageTwo,
    },
    {
        title: "Beam Crash Barrier Installation",
        image: ImageThree,
    },
];

function InteractiveImageGallery() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(null);

    const currentIndex = hoverIndex !== null ? hoverIndex : activeIndex;

    const nextSlide = () => {
        setActiveIndex((prev) => (prev + 1) % items.length);
    };

    const prevSlide = () => {
        setActiveIndex((prev) =>
            prev === 0 ? items.length - 1 : prev - 1
        );
    };

    return (
        <section className="w-full py-20 bg-white">
            <div className="max-w-7xl mx-auto px-6">

                {/* IMAGE ROW */}
                <div className="flex justify-center gap-8 items-center mb-12">

                    {items.map((item, index) => {
                        const isActive = currentIndex === index;

                        return (
                            <div
                                key={index}
                                onMouseEnter={() => setHoverIndex(index)}
                                onMouseLeave={() => setHoverIndex(null)}
                                onClick={() => setActiveIndex(index)}
                                className={`
                  relative cursor-pointer overflow-hidden
                  rounded-2xl shadow-2xl
                  transition-all duration-500 ease-in-out
                  ${isActive
                                        ? "scale-110 z-20"
                                        : "scale-90 opacity-70"
                                    }
                `}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-[320px] h-55 object-cover"
                                />

                                {/* TOP OVERLAY TITLE */}
                                <div
                                    className={`
                    absolute inset-0 flex items-center justify-center
                    bg-black/50 text-white text-lg font-semibold
                    transition-opacity duration-300
                    ${hoverIndex === index ? "opacity-100" : "opacity-0"}
                  `}
                                >
                                    {item.title}
                                </div>
                            </div>
                        );
                    })}
                </div>

                {/* BOTTOM CONTENT */}
                <div className="text-center space-y-6">

                    {/* CLICKABLE TITLE */}
                    <h2
                        className="text-3xl font-semibold cursor-pointer hover:text-purple-700 transition"
                        onClick={() => setActiveIndex(currentIndex)}
                    >
                        {items[currentIndex].title}
                    </h2>

                    {/* BUTTONS */}
                    <div className="flex justify-center gap-6">
                        <button
                            onClick={prevSlide}
                            className="px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
                        >
                            ◀ Prev
                        </button>

                        <button
                            onClick={nextSlide}
                            className="px-6 py-2 rounded-full bg-gray-800 text-white hover:bg-gray-700 transition"
                        >
                            Next ▶
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default InteractiveImageGallery;