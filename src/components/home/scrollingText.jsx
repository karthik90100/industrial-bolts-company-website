import React from 'react'
import { FaAngleDoubleRight } from "react-icons/fa";


function ScrollingText() {
    return (

        <div className="w-full overflow-hidden bg-white py-4 mt-8">
            <div className="flex whitespace-nowrap animate-marquee">

                <p className="flex items-center text-[#0B1F3B] font-semibold text-xl mx-5">
                    <FaAngleDoubleRight className="text-3xl mr-2 text-[#0B1F3B]" />
                    India's Leading Manufacturer of Anchor Foundation Bolts, Sag Rods, Brace Rods & Connection Fasteners
                </p>

                <p className="flex items-center text-[#0B1F3B] font-semibold text-xl mx-5">
                    <FaAngleDoubleRight className="text-3xl mr-2 text-[#0B1F3B]" />
                    India's Leading Manufacturer of Anchor Foundation Bolts, Sag Rods, Brace Rods & Connection Fasteners
                </p>

                <p className="flex items-center text-[#0B1F3B] font-semibold text-xl mx-5">
                    <FaAngleDoubleRight className="text-3xl mr-2 text-[#0B1F3B]" />
                    India's Leading Manufacturer of Anchor Foundation Bolts, Sag Rods, Brace Rods & Connection Fasteners
                </p>

                <p className="flex items-center text-[#0B1F3B] font-semibold text-xl mx-5">
                    <FaAngleDoubleRight className="text-3xl mr-2 text-[#0B1F3B]" />
                    India's Leading Manufacturer of Anchor Foundation Bolts, Sag Rods, Brace Rods & Connection Fasteners
                </p>

            </div>
        </div>

    )
}

export default ScrollingText;

