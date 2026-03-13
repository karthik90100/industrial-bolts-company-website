import React, { useState, useRef } from "react";
import { gsap } from "gsap";

const reviews = [
    {
        name: "Mr jam George",
        date: "November 27, 2019",
        text: "On time delivery, very cooperative. Best place to buy foundation bolts",
    },
    {
        name: "Huzefa Shakir",
        date: "November 15, 2019",
        text: "Fantastic delivery. Got my order in one day!",
    },
    {
        name: "Mustansir Haji",
        date: "November 9, 2019",
        text: "Appreciate the speedy delivery. Excellent job.",
    },
    {
        name: "udhaya kumar",
        date: "April 26, 2019",
        text: "Very reliable service and quality products.",
    },
    {
        name: "Ravi Kumar",
        date: "March 12, 2019",
        text: "Excellent customer support and timely delivery.",
    },
    {
        name: "Arjun Patel",
        date: "January 20, 2019",
        text: "Great experience purchasing foundation bolts.",
    },
    {
        name: "Imran Khan",
        date: "February 11, 2019",
        text: "Very satisfied with the product quality.",
    },
    {
        name: "David George",
        date: "May 2, 2019",
        text: "Professional service and good packaging.",
    },
];

function ReviewCard({ review }) {
    return (
        <div className="bg-white shadow-lg rounded-xl p-6 min-w-70 sm:min-w-75">
            <h3 className="font-semibold text-lg">{review.name}</h3>

            <div className="text-yellow-500 mt-1">★★★★★</div>

            <p className="text-gray-500 text-sm mt-2">{review.date}</p>

            <p className="text-gray-700 mt-3 text-sm">{review.text}</p>
        </div>
    );
}

function ReviewCarousel() {
    const [index, setIndex] = useState(0);
    const sliderRef = useRef(null);

    const cardWidth = 320;

    const next = () => {
        const newIndex = (index + 1) % reviews.length;
        setIndex(newIndex);

        gsap.to(sliderRef.current, {
            x: -cardWidth * newIndex,
            duration: 0.6,
            ease: "power2.out",
        });
    };

    const prev = () => {
        const newIndex = index === 0 ? reviews.length - 1 : index - 1;
        setIndex(newIndex);

        gsap.to(sliderRef.current, {
            x: -cardWidth * newIndex,
            duration: 0.6,
            ease: "power2.out",
        });
    };

    return (
        <div className="w-full py-16 bg-white">

            <div className="max-w-7xl mx-auto relative">

                {/* Buttons */}
                <button
                    onClick={prev}
                    className="absolute left-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10"
                >
                    ◀
                </button>

                <button
                    onClick={next}
                    className="absolute right-0 top-1/2 -translate-y-1/2 bg-white shadow p-3 rounded-full z-10"
                >
                    ▶
                </button>

                {/* Slider */}
                <div className="overflow-hidden px-12">

                    <div
                        ref={sliderRef}
                        className="flex gap-6"
                    >
                        {reviews.map((review, i) => (
                            <ReviewCard key={i} review={review} />
                        ))}
                    </div>

                </div>
            </div>
        </div>
    );
}

export default ReviewCarousel;