import React, { useState } from "react";
import { Plus, Minus, Info } from "lucide-react";

const BoltSpecification = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full flex justify-center py-16 bg-white">
            <div className="max-w-6xl w-full px-6">

                {/* Heading */}
                <h2 className="text-center text-3xl font-semibold text-yellow-500 mb-8">
                    Bolt Specification
                </h2>

                {/* Accordion Header */}
                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between bg-purple-700 text-white px-6 py-4 rounded-md cursor-pointer"
                >
                    <div className="flex items-center gap-3">
                        <Info className="w-5 h-5" />
                        <p className="text-sm">
                            ASTM F1554 Anchor bolt designed to anchor structural supports to concrete foundations
                        </p>
                    </div>

                    {open ? <Minus /> : <Plus />}
                </div>

                {/* Accordion Content */}
                {open && (
                    <div className="mt-12 space-y-16">

                        {/* ================= F1554 GRADES ================= */}
                        <div>
                            <h3 className="text-3xl font-bold text-purple-700 mb-6">
                                F1554 Grades
                            </h3>

                            <div className="border border-black">
                                <div className="grid grid-cols-3">
                                    <div className="bg-yellow-400 p-6 text-center font-semibold">
                                        F1554 Grade 36
                                    </div>
                                    <div className="col-span-2 bg-gray-200 p-6 text-center">
                                        Low carbon, 36 ksi yield steel anchor bolts
                                    </div>

                                    <div className="bg-yellow-400 p-6 text-center font-semibold">
                                        F1554 Grade 55
                                    </div>
                                    <div className="col-span-2 bg-gray-200 p-6 text-center">
                                        High strength, low alloys, 55 ksi yield steel anchor bolts
                                    </div>

                                    <div className="bg-yellow-400 p-6 text-center font-semibold">
                                        F1554 Grade 105
                                    </div>
                                    <div className="col-span-2 bg-gray-200 p-6 text-center">
                                        Alloy, heat treated, high strength 105 ksi yield steel anchor bolts
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* ================= MECHANICAL PROPERTIES ================= */}
                        <div>
                            <h3 className="text-3xl font-bold text-purple-700 mb-6">
                                F1554 Mechanical Properties
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full border border-black text-center">
                                    <thead className="bg-yellow-400">
                                        <tr>
                                            <th className="border p-3">Grade</th>
                                            <th className="border p-3">Marking</th>
                                            <th className="border p-3">Size (in)</th>
                                            <th className="border p-3">Tensile (ksi)</th>
                                            <th className="border p-3">Yield (ksi)</th>
                                            <th className="border p-3">Yield (MPa)</th>
                                            <th className="border p-3">Elong %</th>
                                            <th className="border p-3">RA %</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-200">
                                        <tr>
                                            <td className="border p-3 font-bold">36</td>
                                            <td className="border p-3">PB AB36</td>
                                            <td className="border p-3">½ – 4</td>
                                            <td className="border p-3">58 – 60</td>
                                            <td className="border p-3">36</td>
                                            <td className="border p-3">248</td>
                                            <td className="border p-3">23</td>
                                            <td className="border p-3">40</td>
                                        </tr>

                                        <tr>
                                            <td className="border p-3 font-bold">55</td>
                                            <td className="border p-3">PB AB55</td>
                                            <td className="border p-3">½ – 4</td>
                                            <td className="border p-3">75 – 95</td>
                                            <td className="border p-3">55</td>
                                            <td className="border p-3">380</td>
                                            <td className="border p-3">21</td>
                                            <td className="border p-3">30</td>
                                        </tr>

                                        <tr>
                                            <td className="border p-3 font-bold">105</td>
                                            <td className="border p-3">PB AB105</td>
                                            <td className="border p-3">½ – 3</td>
                                            <td className="border p-3">—</td>
                                            <td className="border p-3">105</td>
                                            <td className="border p-3">724</td>
                                            <td className="border p-3">15</td>
                                            <td className="border p-3">45</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ================= CHEMICAL PROPERTIES ================= */}
                        <div>
                            <h3 className="text-3xl font-bold text-purple-700 mb-6">
                                F1554 Chemical Properties
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full border border-black text-center">
                                    <thead className="bg-yellow-400">
                                        <tr>
                                            <th className="border p-3">Element</th>
                                            <th className="border p-3">Grade 36</th>
                                            <th className="border p-3">Grade 55 & 105</th>
                                        </tr>
                                    </thead>
                                    <tbody className="bg-gray-200">
                                        <tr>
                                            <td className="border p-3">Carbon (max)</td>
                                            <td className="border p-3">0.26%</td>
                                            <td className="border p-3">0.28%</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-3">Phosphorus (max)</td>
                                            <td className="border p-3">0.04%</td>
                                            <td className="border p-3">0.04%</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-3">Sulfur (max)</td>
                                            <td className="border p-3">0.05%</td>
                                            <td className="border p-3">0.05%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                    </div>
                )}

            </div>
        </section>
    );
};

export default BoltSpecification;