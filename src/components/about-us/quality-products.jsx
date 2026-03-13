import { useState } from "react";
import certificate from "../../assets/about_page_images/Certificate.png";
// 👆 change path if needed

function QualityPolicy() {
    const [openIndex, setOpenIndex] = useState(0);

    const items = [
        {
            title: "ISO 9001:2015",
            content: (
                <>
                    <p className="font-semibold mb-2">
                        The Quality Management System is Applicable to :
                    </p>
                    <p>
                        Manufacture and supply of anchor bolts, Foundation Bolts, Sag Rods,
                        Bracing Rods & Connection Fasteners.
                    </p>
                </>
            ),
        },
        {
            title: "Certificate No",
            content: <p>QDW2410922</p>,
        },
    ];

    return (
        <section className="w-full bg-white py-20 px-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADING */}
                <h2 className="text-center text-4xl font-bold mb-16">
                    <span className="text-[#0B1F3B]">Quality </span>
                    <span className="text-yellow-500">& Policy</span>
                </h2>

                {/* CONTENT */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start">

                    {/* LEFT – CERTIFICATE */}
                    <div className="flex justify-center">
                        <div className="relative">
                            {/* Yellow background block */}
                            <div className="absolute -top-6 -left-6 w-full h-full bg-yellow-500 -z-10"></div>

                            <img
                                src={certificate}
                                alt="ISO Certificate"
                                className="w-65 md:w-75 shadow-lg"
                            />
                        </div>
                    </div>

                    {/* RIGHT – ACCORDION */}
                    <div className="space-y-6">
                        {items.map((item, index) => (
                            <div key={index} className="border border-gray-200 rounded-sm">

                                {/* HEADER */}
                                <button
                                    onClick={() =>
                                        setOpenIndex(openIndex === index ? -1 : index)
                                    }
                                    className={`w-full flex justify-between items-center px-6 py-4 font-semibold text-left
                    ${openIndex === index
                                            ? "bg-yellow-500 text-white"
                                            : "bg-[#0B1F3B] text-white"
                                        }`}
                                >
                                    {item.title}
                                    <span className="text-xl">
                                        {openIndex === index ? "⌃" : "⌄"}
                                    </span>
                                </button>

                                {/* BODY */}
                                {openIndex === index && (
                                    <div className="px-6 py-5 bg-white text-gray-700 leading-relaxed">
                                        {item.content}
                                    </div>
                                )}
                            </div>
                        ))}
                    </div>

                </div>
            </div>
        </section>
    );
}

export default QualityPolicy;