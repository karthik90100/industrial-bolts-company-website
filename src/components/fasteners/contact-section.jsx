import React from "react";
import { Phone } from "lucide-react";

const ContactSection = () => {
    return (
        <section className="w-full flex justify-center py-20 bg-gray-50">
            <div className="max-w-6xl w-full px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 rounded-xl overflow-hidden shadow-lg">

                    {/* LEFT: Contact Form */}
                    <div className="bg-white p-10">
                        <h2 className="text-2xl font-semibold mb-8">Contact Us</h2>

                        <form className="space-y-6">
                            {/* Name & Email */}
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <div>
                                    <label className="block text-sm mb-1">Your name</label>
                                    <input
                                        type="text"
                                        className="w-full border border-[#0B1F3B] rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>

                                <div>
                                    <label className="block text-sm mb-1">Your email</label>
                                    <input
                                        type="email"
                                        className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                    />
                                </div>
                            </div>

                            {/* Subject */}
                            <div>
                                <label className="block text-sm mb-1">Subject</label>
                                <input
                                    type="text"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                />
                            </div>

                            {/* Message */}
                            <div>
                                <label className="block text-sm mb-1">Your message (optional)</label>
                                <textarea
                                    rows="5"
                                    className="w-full border border-gray-300 rounded-md px-4 py-2 focus:outline-none focus:ring-2 focus:ring-purple-500"
                                ></textarea>
                            </div>

                            {/* Submit */}
                            <button
                                type="submit"
                                className="bg-purple-700 text-white px-6 py-2 rounded-md font-semibold hover:bg-purple-800 transition"
                            >
                                Submit
                            </button>
                        </form>
                    </div>

                    {/* RIGHT: CTA Panel */}
                    <div className="bg-purple-700 text-white p-12 flex flex-col justify-center">
                        <div className="flex items-center gap-4 mb-6">
                            <div className="bg-yellow-400 p-3 rounded-md">
                                <Phone className="text-purple-700 w-6 h-6" />
                            </div>
                            <h3 className="text-xl font-semibold">Get in Touch Today!</h3>
                        </div>

                        <p className="leading-relaxed text-sm max-w-sm">
                            Ready to elevate your projects with world-class fasteners?
                            Contact us now for a consultation or a custom quote.
                            Let’s work together to achieve excellence.
                        </p>

                        {/* Social Icons */}
                        <div className="flex gap-4 mt-10">
                            <div className="border border-white p-2 rounded">
                                in
                            </div>
                            <div className="border border-white p-2 rounded">
                                IG
                            </div>
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ContactSection;