import gen1 from "../../assets/about_page_images/Generation1.jpg";
import gen2 from "../../assets/about_page_images/Generation2.jpg";
import gen3 from "../../assets/about_page_images/Generation3.jpg";
import gen4 from "../../assets/about_page_images/Generation4.jpg";

function ThreeGenerations() {
    return (
        <section className="w-full bg-white py-20 px-100">
            <div className="max-w-7xl mx-auto px-6">

                {/* HEADING */}
                <h2 className="text-center text-4xl font-bold mb-6">
                    <span className="text-[#0B1F3B]">Three </span>
                    <span className="text-yellow-500">Generations</span>
                </h2>

                {/* DESCRIPTION */}
                <p className="text-center text-gray-700 max-w-5xl mx-auto leading-relaxed mb-14">
                    Royal Anchors is a pioneering leader in the fastener industry, renowned
                    for our commitment to exceptional quality and innovative solutions.
                    With a rich legacy spanning three generations, we have consistently
                    set the standard for excellence in connection fasteners for the
                    construction and manufacturing sectors. Our comprehensive range of
                    products is designed to meet the most stringent industry standards.
                    <br /><br />
                    At Royal Anchors, we combine over 50 plus years of industry expertise
                    with a forward-thinking approach to technology and customer service.
                    Partner with us to experience the Royal Anchors difference—a commitment
                    to quality, a passion for innovation, and a legacy of excellence.
                </p>

                {/* PROFILES */}
                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-10">

                    {/* CARD 1 */}
                    <div className="text-center">
                        <div className="w-full h-65 overflow-hidden rounded-md mb-4">
                            <img
                                src={gen1}
                                alt="Late Mr Fakhruddin Shakir"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-[#0B1F3B] font-semibold">
                            Late Mr Fakhruddin Shakir
                        </p>
                    </div>

                    {/* CARD 2 */}
                    <div className="text-center">
                        <div className="w-full h-65 overflow-hidden rounded-md mb-4">
                            <img
                                src={gen2}
                                alt="Mr Johar Fakhruddin"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-[#0B1F3B] font-semibold">
                            Mr Johar Fakhruddin
                        </p>
                    </div>

                    {/* CARD 3 */}
                    <div className="text-center">
                        <div className="w-full h-65 overflow-hidden rounded-md mb-4">
                            <img
                                src={gen3}
                                alt="Mr Muffadal Johar"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-[#0B1F3B] font-semibold">
                            Mr Muffadal Johar
                        </p>
                    </div>

                    {/* CARD 4 */}
                    <div className="text-center">
                        <div className="w-full h-65 overflow-hidden rounded-md mb-4">
                            <img
                                src={gen4}
                                alt="Mr Huzefa Johar"
                                className="w-full h-full object-cover grayscale"
                            />
                        </div>
                        <p className="text-[#0B1F3B] font-semibold">
                            Mr Huzefa Johar
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
}

export default ThreeGenerations;