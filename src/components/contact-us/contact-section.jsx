import React from "react";

const ContactCard = () => {
    return (
        <div className="min-h-screen flex items-center justify-center bg-white px-4">

            {/* 3D Perspective Wrapper */}
            <div className="relative perspective-distant">

                {/* Card */}
                <div className="
          group
          bg-white
          rounded-2xl
          shadow-[0_10px_30px_rgba(0,0,0,0.12),0_30px_80px_rgba(0,0,0,0.25)]
          hover:shadow-[0_40px_100px_rgba(0,0,0,0.35)]
          transition-all
          duration-500
          transform-gpu
        ">

                    {/* Content */}
                    <div className="grid md:grid-cols-2 overflow-hidden rounded-2xl">

                        {/* LEFT FORM */}
                        <div className="p-10">
                            <h2 className="text-3xl font-bold mb-8">
                                Get in touch with us
                            </h2>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-6">
                                <input
                                    type="text"
                                    placeholder="Your name"
                                    className="border rounded-lg px-4 py-3 focus:ring-2 focus:[#0B1F3B] outline-none"
                                />
                                <input
                                    type="email"
                                    placeholder="Your email"
                                    className="border rounded-lg px-4 py-3 focus:ring-2 focus:[#0B1F3B] outline-none"
                                />
                            </div>

                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full border rounded-lg px-4 py-3 mb-6 focus:ring-2 focus:ring-[#0B1F3B] outline-none"
                            />

                            <textarea
                                rows="4"
                                placeholder="Your message (optional)"
                                className="w-full border rounded-lg px-4 py-3 mb-6 focus:ring-2 focus:ring-[#0B1F3B] outline-none"
                            ></textarea>

                            <button className="
                bg-[#0B1F3B]
                text-white
                px-8 py-3
                rounded-lg
                font-semibold
                shadow-md
                hover:shadow-lg
                hover:scale-105
                transition
              ">
                                Submit
                            </button>
                        </div>

                        {/* RIGHT INFO */}
                        <div className="bg-[#0B1F3B] text-white p-10 space-y-8">

                            <div className="flex gap-4">
                                <div className="bg-yellow-400  w-12 h-12 flex items-center justify-center rounded-lg text-xl">
                                    📞
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">Phone Number</h4>
                                    <p>+91 98842 51521</p>
                                    <p>+91 98845 42523</p>
                                    <p>+91 96292 51526</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-yellow-400  w-12 h-12 flex items-center justify-center rounded-lg text-xl">
                                    ✉️
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">Email</h4>
                                    <p>sales@royalanchors.com</p>
                                </div>
                            </div>

                            <div className="flex gap-4">
                                <div className="bg-yellow-400  w-12 h-12 flex items-center justify-center rounded-lg text-xl">
                                    📍
                                </div>
                                <div>
                                    <h4 className="font-semibold text-lg text-white">
                                        Factory & Office Address
                                    </h4>
                                    <p className="text-sm leading-relaxed">
                                        Plot No 5 & 6, 8th Street, TASS Industrial Estate, <br />
                                        SIDCO, Ambattur, Chennai – 600098
                                    </p>
                                </div>
                            </div>

                        </div>

                    </div>
                </div>
            </div>

        </div>
    );
};

export default ContactCard;