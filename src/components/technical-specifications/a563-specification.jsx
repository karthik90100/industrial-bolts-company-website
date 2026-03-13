import React, { useState } from "react";
import { Plus, Minus, Info } from "lucide-react";

const A563Specification = () => {
    const [open, setOpen] = useState(false);

    return (
        <section className="w-full flex justify-center py-16 bg-white">
            <div className="max-w-6xl w-full px-6">

                {/* Accordion Header */}
                <div
                    onClick={() => setOpen(!open)}
                    className="flex items-center justify-between bg-purple-700 text-white px-6 py-4 rounded-md cursor-pointer"
                >
                    <div className="flex items-center gap-3">
                        <Info className="w-5 h-5" />
                        <p className="text-sm">
                            ASTM A563 Standard specification for carbon and alloy steel nuts
                        </p>
                    </div>
                    {open ? <Minus /> : <Plus />}
                </div>

                {/* Accordion Content */}
                {open && (
                    <div className="mt-12 space-y-16">

                        {/* ================= TABLE 1 ================= */}
                        <div>
                            <h3 className="text-3xl font-bold text-purple-700 mb-6">
                                A563 Mechanical Properties
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full border border-black text-center">
                                    <thead className="bg-yellow-400">
                                        <tr>
                                            <th className="border p-3">Grade</th>
                                            <th className="border p-3">Style</th>
                                            <th className="border p-3">Size, in.</th>
                                            <th className="border p-3">Proof Load, ksi (Plain)</th>
                                            <th className="border p-3">Proof Load, ksi (Galvanized)</th>
                                            <th className="border p-3">Hardness, HBN</th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-gray-200">
                                        <tr>
                                            <td className="border p-4 font-bold" rowSpan={2}>A</td>
                                            <td className="border p-4">Hex</td>
                                            <td className="border p-4">¼ – 1½</td>
                                            <td className="border p-4">90</td>
                                            <td className="border p-4">68</td>
                                            <td className="border p-4">116 – 302</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-4">Heavy Hex</td>
                                            <td className="border p-4">¼ – 4</td>
                                            <td className="border p-4">100</td>
                                            <td className="border p-4">75</td>
                                            <td className="border p-4">116 – 302</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ================= TABLE 2 ================= */}
                        <div>
                            <h3 className="text-3xl font-bold text-purple-700 mb-6">
                                A563 Grade Identification Markings
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full border border-black text-center">
                                    <thead className="bg-yellow-400">
                                        <tr>
                                            <th className="border p-3">Element</th>
                                            <th className="border p-3">Grades O, A, B, C</th>
                                            <th className="border p-3">D**</th>
                                            <th className="border p-3">DH**</th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-gray-200">
                                        <tr>
                                            <td className="border p-3">Carbon</td>
                                            <td className="border p-3">0.55% max</td>
                                            <td className="border p-3">0.55% max</td>
                                            <td className="border p-3">0.20 – 0.55%</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-3">Manganese, min</td>
                                            <td className="border p-3">—</td>
                                            <td className="border p-3">0.30%</td>
                                            <td className="border p-3">0.60%</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-3">Phosphorus, max</td>
                                            <td className="border p-3">0.12%</td>
                                            <td className="border p-3">0.04%</td>
                                            <td className="border p-3">0.04%</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-3">Sulfur, max</td>
                                            <td className="border p-3">0.15%</td>
                                            <td className="border p-3">0.05%</td>
                                            <td className="border p-3">0.05%</td>
                                        </tr>
                                    </tbody>
                                </table>
                            </div>
                        </div>

                        {/* ================= TABLE 3 ================= */}
                        <div>
                            <h3 className="text-3xl font-bold text-purple-700 mb-6">
                                A563 Grade Identification Markings
                            </h3>

                            <div className="overflow-x-auto">
                                <table className="w-full border border-black text-center">
                                    <thead className="bg-yellow-400">
                                        <tr>
                                            <th className="border p-3">Grade Identification</th>
                                            <th className="border p-3">Material</th>
                                            <th className="border p-3">Nominal Size, in</th>
                                            <th className="border p-3">Proof Load Stress, ksi</th>
                                            <th className="border p-3">Hardness Min</th>
                                            <th className="border p-3">Hardness Max</th>
                                            <th className="border p-3">See Note</th>
                                        </tr>
                                    </thead>

                                    <tbody className="bg-gray-200">
                                        <tr>
                                            <td className="border p-3">ASTM A563 Grade O</td>
                                            <td className="border p-3">Carbon Steel</td>
                                            <td className="border p-3">¼ – 1½</td>
                                            <td className="border p-3">69</td>
                                            <td className="border p-3">B55</td>
                                            <td className="border p-3">C32</td>
                                            <td className="border p-3">2, 3</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-3">ASTM A563 Grade A</td>
                                            <td className="border p-3">Carbon Steel</td>
                                            <td className="border p-3">¼ – 1½</td>
                                            <td className="border p-3">90</td>
                                            <td className="border p-3">B68</td>
                                            <td className="border p-3">C32</td>
                                            <td className="border p-3">2, 3</td>
                                        </tr>
                                        <tr>
                                            <td className="border p-3">ASTM A563 Grade B</td>
                                            <td className="border p-3">Carbon Steel</td>
                                            <td className="border p-3">¼ – 1</td>
                                            <td className="border p-3">120</td>
                                            <td className="border p-3">B69</td>
                                            <td className="border p-3">C32</td>
                                            <td className="border p-3">2, 3</td>
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

export default A563Specification;