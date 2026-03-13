import React from "react";

const features = [
    {
        number: "1",
        title: "Sustainability & Precision",
        description:
            "At Royal Anchors, we pride ourselves on sustainable practices. Every fastener is engineered to deliver precision and strength, contributing to the overall safety and stability of our structures.",
    },
    {
        number: "2",
        title: "Customized Solutions",
        description:
            "Understanding the diverse needs of our clients, we deliver material in assembled conditions, saving time and effort on-site. Our custom solutions ensure seamless integration with your projects.",
    },
    {
        number: "3",
        title: "Superior Quality",
        description: (
            <>
                <p>
                    We manufacture fasteners in:
                </p>
                <p className="mt-2">
                    1) Grade 8.8 and Grade 10.9 for rafter and column connections,
                    ensuring superior strength and durability.
                </p>
                <p className="mt-2">
                    2) Grade 4.6 for purlin connections, offering dependable performance
                    for lighter applications.
                </p>
            </>
        ),
    },
    {
        number: "4",
        title: "Unparalleled Expertise",
        description:
            "With years of experience, Royal Anchors has established itself as a trusted name in the manufacturing of fasteners. From connection fasteners to pipe stiffeners and foundation bolts, we provide solutions tailored to your specific requirements.",
    },
];

const WhyChooseUs = () => {
    return (
        <section className="w-full flex justify-center py-20">
            <div className="max-w-7xl w-full px-6">
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((item, index) => (
                        <div
                            key={index}
                            className="relative border border-purple-400 rounded-xl p-8 text-center"
                        >
                            {/* Number Badge */}
                            <div className="absolute -top-6 left-1/2 -translate-x-1/2 bg-yellow-400 text-purple-700 font-bold text-3xl w-14 h-14 flex items-center justify-center rounded-lg">
                                {item.number}
                            </div>

                            {/* Title */}
                            <h3 className="text-purple-700 font-semibold text-lg mt-8 mb-4">
                                {item.title}
                            </h3>

                            {/* Description */}
                            <div className="text-gray-700 text-sm leading-relaxed">
                                {item.description}
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default WhyChooseUs;