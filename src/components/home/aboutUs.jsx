import React from 'react'
import aboutUsImage from '../../assets/home_page_imgs/aboutUs.webp'
import aboutUsImageTwo from '../../assets/home_page_imgs/hero.webp'

function AboutUs() {
    return (
        <section className="bg-white py-20">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-16 items-center">

                {/* LEFT IMAGE */}
                <div className="relative w-full max-w-xl group overflow-hidden rounded-xl shadow-2xl">

                    {/* MAIN IMAGE */}
                    <img
                        src={aboutUsImageTwo}
                        alt="About Royal Anchors"
                        className="w-full h-96 object-cover transition-all duration-700 group-hover:scale-105"
                    />

                    {/* HOVER IMAGE */}
                    <img
                        src={aboutUsImage}
                        alt="About Royal Anchors Hover"
                        className="absolute top-0 left-0 w-full h-96 object-cover opacity-0 transition-opacity duration-700 group-hover:opacity-100"
                    />

                </div>

                {/* RIGHT CONTENT */}
                <div className="max-w-xl">

                    <h2 className="text-[#0B1F3B] text-4xl font-bold mb-6">
                        About Us
                    </h2>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Founded in 2012, Royal Anchors has evolved into one of India’s most
                        trusted names in Anchor Foundation bolts and custom construction
                        fasteners.
                    </p>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Driven by an unwavering commitment to excellence, our state-of-the-art
                        manufacturing facility produces 200 metric tons each month.
                    </p>

                    <p className="text-gray-700 mb-6 leading-relaxed">
                        We are your single source for Anchor Foundation Bolts, Sag Rods,
                        Brace Rods, and Connection Fasteners.
                    </p>

                    <ul className="space-y-3 mb-6">

                        <li className="flex items-center gap-3">
                            <span className="text-purple-700 text-xl">✔</span>
                            <span>Unmatched Quality</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="text-purple-700 text-xl">✔</span>
                            <span>Readiness and Stock Availability</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="text-purple-700 text-xl">✔</span>
                            <span>Exceptional Value and Pricing</span>
                        </li>

                        <li className="flex items-center gap-3">
                            <span className="text-purple-700 text-xl">✔</span>
                            <span>Speed and Efficiency</span>
                        </li>

                    </ul>

                    <button className="relative overflow-hidden bg-[#0B1F3B] text-white px-8 py-3 rounded-lg group transition duration-500">

                        <span className="relative z-10">More About Us</span>

                        <span className="absolute left-0 bottom-0 w-full h-0 bg-[#820933] transition-all duration-500 ease-out group-hover:h-full"></span>

                    </button>

                </div>

            </div>
        </section>
    )
}

export default AboutUs