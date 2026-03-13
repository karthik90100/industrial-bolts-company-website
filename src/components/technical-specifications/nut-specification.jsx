import React, { useState } from "react";
import { Plus, Minus, Info } from "lucide-react";

const NutSpecification = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full flex justify-center py-16 bg-white">
            <div className="max-w-6xl w-full px-6">

                {/* Heading */}
                <h2 className="text-center text-3xl font-semibold text-yellow-500 mb-6">
                    Nut Specification
                </h2>

                {/* Accordion Header */}
                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between bg-purple-700 text-white px-6 py-4 rounded-md cursor-pointer"
                >
                    <div className="flex items-center gap-3">
                        <Info className="w-5 h-5" />
                        <p className="text-sm">
                            ASTM A194 Carbon and alloy steel nuts for high pressure and high temperature service
                        </p>
                    </div>
                    {open ? <Minus /> : <Plus />}
                </div>

                {/* Accordion Content */}
                {open && (
                    <div className="mt-10">

                        {/* Table Title */}
                        <h3 className="text-3xl font-bold text-purple-700 mb-6">
                            A194 Mechanical Properties
                        </h3>

                        {/* Table */}
                        <div className="overflow-x-auto">
                            <table className="w-full border border-black text-center">
                                <thead className="bg-yellow-400">
                                    <tr>
                                        <th className="border p-3">Grade Identification Marking</th>
                                        <th className="border p-3">Specifications</th>
                                        <th className="border p-3">Material</th>
                                        <th className="border p-3">Normal Size, In</th>
                                        <th className="border p-3">Tempering Temp °F</th>
                                        <th className="border p-3">Proof Load Stress, ksi</th>
                                        <th className="border p-3">Hardness Rockwell Min</th>
                                        <th className="border p-3">Hardness Rockwell Max</th>
                                        <th className="border p-3">See Note</th>
                                    </tr>
                                </thead>

                                <tbody className="bg-gray-200">
                                    {/* Row 1 */}
                                    <tr>
                                        <td className="border p-4">
                                            <div className="flex justify-center">
                                                <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center text-xs">
                                                    2
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border p-4">ASTM A194 Grade 2</td>
                                        <td className="border p-4">Medium Carbon Steel</td>
                                        <td className="border p-4">¼ – 4</td>
                                        <td className="border p-4">0</td>
                                        <td className="border p-4">150</td>
                                        <td className="border p-4">159</td>
                                        <td className="border p-4">352</td>
                                        <td className="border p-4">1, 2, 3</td>
                                    </tr>

                                    {/* Row 2 */}
                                    <tr>
                                        <td className="border p-4">
                                            <div className="flex justify-center">
                                                <div className="w-20 h-20 border border-black rounded-full flex items-center justify-center text-xs">
                                                    2H
                                                </div>
                                            </div>
                                        </td>
                                        <td className="border p-4">ASTM A194 Grade 2H</td>
                                        <td className="border p-4">
                                            Medium Carbon Steel, Quenched and Tempered
                                        </td>
                                        <td className="border p-4">¼ – 4</td>
                                        <td className="border p-4">850</td>
                                        <td className="border p-4">175</td>
                                        <td className="border p-4">C24</td>
                                        <td className="border p-4">C38</td>
                                        <td className="border p-4">1, 2</td>
                                    </tr>
                                </tbody>
                            </table>
                        </div>

                    </div>
                )}
            </div>
        </section>
    );
};

export default NutSpecification;