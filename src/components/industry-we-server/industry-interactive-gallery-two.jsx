import React, { useState } from "react";

import ImgOne from "../../assets/industry_we_server_images/2-1.jpg";
import ImgTwo from "../../assets/industry_we_server_images/2-2.jpg";
import ImgThree from "../../assets/industry_we_server_images/2-3.jpg";

const items = [
    {
        title: "Pre-Cast Concrete Structure",
        image: ImgOne,
    },
    {
        title: "Heavy Metal Fabrication",
        image: ImgTwo,
    },
    {
        title: "Street & Domestic Lamp Foundation Bolt",
        image: ImgThree,
    },
];

function IndustryInteractiveGalleryTwo() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [hoverIndex, setHoverIndex] = useState(null);

    // if hovering, show hover image as active
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
                <div className="flex justify-center items-center gap-8 mb-12">

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
                  transform
                  ${isActive
                                        ? "scale-110 z-20"
                                        : "scale-90 opacity-70"
                                    }
                `}
                            >
                                <img
                                    src={item.image}
                                    alt={item.title}
                                    className="w-85 h-57.5 object-cover"
                                />

                                {/* CENTER OVERLAY TITLE */}
                                <div
                                    className={`
                    absolute inset-0 flex items-center justify-center
                    bg-black/45 text-white text-xl font-semibold
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

                    {/* NAV BUTTONS */}
                    <div className="flex justify-center gap-6">
                        <button
                            onClick={prevSlide}
                            className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
                        >
                            ‹
                        </button>

                        <button
                            onClick={nextSlide}
                            className="w-10 h-10 rounded-full border border-black flex items-center justify-center hover:bg-black hover:text-white transition"
                        >
                            ›
                        </button>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default IndustryInteractiveGalleryTwo;