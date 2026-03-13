import img1 from "../../assets/about_page_images/section1.jpg";
import img2 from "../../assets/about_page_images/section1(2).jpg";

function WhoWeAre() {
    return (
        <section className="w-full bg-white py-16 px-100">
            <div className="max-w-7xl mx-auto px-6 grid grid-cols-1 md:grid-cols-2 gap-12 items-center">

                {/* LEFT CONTENT */}
                <div>
                    <h2 className="text-4xl font-bold mb-6">
                        <span className="text-[#0B1F3B]">Who</span>{" "}
                        <span className="text-yellow-500">We are</span>
                    </h2>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        At <span className="text-[#0B1F3B] font-semibold">Royal Anchors</span>,
                        we started with a simple vision that has grown into becoming one of
                        India’s foremost names in Anchor Foundation bolts and custom
                        construction fasteners.
                    </p>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        With a cutting-edge manufacturing facility and an expert team,
                        we produce a remarkable 200 metric tons of precision fasteners monthly.
                    </p>

                    <p className="text-gray-700 mb-4 leading-relaxed">
                        Our guiding principle, <strong>Passion Driven Precision</strong>,
                        fuels our commitment to quality and on-time delivery.
                    </p>

                    <p className="text-[#0B1F3B] font-semibold">
                        Count on Royal Anchors for expertise, innovation, and reliability
                        in every product.
                    </p>
                </div>

                {/* RIGHT IMAGES */}
                <div className="relative flex justify-center gap-8">

                    {/* Image 1 */}
                    <div className="w-55 h-80 overflow-hidden rounded-full">
                        <img
                            src={img1}
                            alt="Manufacturing"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Image 2 */}
                    <div className="w-55 h-80 overflow-hidden rounded-full">
                        <img
                            src={img2}
                            alt="Team"
                            className="w-full h-full object-cover grayscale"
                        />
                    </div>

                </div>

            </div>
        </section>
    );
}

export default WhoWeAre;