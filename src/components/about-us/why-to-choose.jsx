import {
    Clock,
    CheckCircle,
    Package,
    Percent,
    Award,
    Users,
    Wrench
} from "lucide-react";

function WhyChooseUs() {
    return (
        <section className="w-full bg-white py-20 px-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* ================= WHY CHOOSE US ================= */}
                <h2 className="text-center text-4xl font-bold mb-12">
                    <span className="text-[#0B1F3B]">Why </span>
                    <span className="text-yellow-500">Choose Us</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 mb-20">

                    {/* CARD */}
                    {[
                        {
                            icon: <Clock className="w-10 h-10 text-[#0B1F3B]" />,
                            title: "PROMPTNESS",
                            desc: "Our primary goal is supplying on time, and our rapid supply eliminates your labour costs."
                        },
                        {
                            icon: <CheckCircle className="w-10 h-10 text-[#0B1F3B]" />,
                            title: "QUALITY",
                            desc: "Our products are of the highest calibre and are offered in sufficient numbers."
                        },
                        {
                            icon: <Package className="w-10 h-10 text-[#0B1F3B]" />,
                            title: "STOCK AVAILABILITY",
                            desc: "MS and alloy steel raw materials are fully stocked from M12 dia to M64 dia."
                        },
                        {
                            icon: <Percent className="w-10 h-10 text-[#0B1F3B]" />,
                            title: "COMPETITIVE",
                            desc: "We offer quality goods in a timely manner at fair pricing to reduce project expenses."
                        }
                    ].map((item, index) => (
                        <div
                            key={index}
                            className="border rounded-lg p-8 text-center hover:shadow-lg transition"
                        >
                            <div className="flex justify-center mb-4">
                                {item.icon}
                            </div>
                            <h3 className="font-semibold mb-3">{item.title}</h3>
                            <p className="text-gray-600 text-sm">{item.desc}</p>
                        </div>
                    ))}

                </div>

                {/* ================= WHAT WE DO ================= */}
                <h2 className="text-center text-4xl font-bold mb-12">
                    <span className="text-[#0B1F3B]">What </span>
                    <span className="text-yellow-500">We Do</span>
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-12 items-start mb-20">

                    {/* ICONS */}
                    <div className="flex gap-10 justify-center md:justify-start">
                        <div className="text-center">
                            <Award className="w-10 h-10 text-[#0B1F3B] mx-auto mb-2" />
                            <p className="text-sm font-medium">World Class<br />Machinery</p>
                        </div>
                        <div className="text-center">
                            <Users className="w-10 h-10 text-[#0B1F3B] mx-auto mb-2" />
                            <p className="text-sm font-medium">Professional<br />Workers</p>
                        </div>
                        <div className="text-center">
                            <Wrench className="w-10 h-10 text-[#0B1F3B] mx-auto mb-2" />
                            <p className="text-sm font-medium">Certified<br />Products</p>
                        </div>
                    </div>

                    {/* TEXT */}
                    <div className="text-gray-700 leading-relaxed">
                        <p className="mb-4">
                            At Royal Anchors, we specialize in crafting large, custom Anchor
                            Foundation bolts, Sag Rods, Brace Rods, Hill Side Washers, and
                            Connection Fasteners tailored to each client’s unique needs.
                        </p>
                        <p className="mb-4">
                            Our premium raw materials from M12 to M100 diameters ensure strength
                            and durability. From material selection to threading, bending,
                            and welding, we deliver flawless finishes.
                        </p>
                        <p className="text-[#0B1F3B] font-semibold">
                            Royal Anchors ensures your fasteners arrive exactly where you need
                            them, when you need them.
                        </p>
                    </div>

                </div>

                {/* ================= MISSION & VISION ================= */}
                <h2 className="text-center text-4xl font-bold mb-6">
                    <span className="text-[#0B1F3B]">Mission & Vision </span>
                    <span className="text-yellow-500">Statements</span>
                </h2>

                <p className="text-center text-gray-600 max-w-3xl mx-auto mb-12">
                    We are committed to providing innovative solutions, maintaining the
                    highest standards of quality, and fostering long-term partnerships.
                </p>

                <div className="grid grid-cols-1 md:grid-cols-2 gap-8">

                    {/* MISSION */}
                    <div className="bg-white shadow-md rounded-lg p-8">
                        <h3 className="text-[#0B1F3B] font-semibold text-xl mb-3">
                            Mission
                        </h3>
                        <p className="text-gray-600">
                            At Royal Anchor, we believe quality should be at the core of all
                            corporate operations, ensuring long-term industry health.
                        </p>
                    </div>

                    {/* VISION */}
                    <div className="bg-white shadow-md rounded-lg p-8">
                        <h3 className="text-[#0B1F3B] font-semibold text-xl mb-3">
                            Vision
                        </h3>
                        <p className="text-gray-600">
                            To empower industries through precision and reliability by setting
                            the gold standard for quality, innovation, and customer satisfaction.
                        </p>
                    </div>

                </div>

            </div>
        </section>
    );
}

export default WhyChooseUs;