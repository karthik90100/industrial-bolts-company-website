
import heroImage from "../../assets/fasteners_images/1.png";

const FastenersHero = () => {
    return (
        <section className="w-full flex justify-center py-20">
            {/* Centered container */}
            <div className="max-w-6xl w-full px-6">
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left Image */}
                    <div className="rounded-3xl overflow-hidden h-150 flex justify-center">
                        <img
                            src={heroImage}
                            alt="Fasteners"
                            className="w-full h-full object-cover"
                        />
                    </div>

                    {/* Right Content */}
                    <div className="flex flex-col justify-center max-w-xl">
                        <h2 className="text-[#0B1F3B] text-3xl lg:text-4xl font-bold mb-6">
                            Leading Fasteners Manufacturers <br /> in India
                        </h2>

                        <p className="text-gray-700 leading-relaxed text-base">
                            Royal Anchors is a leading fastener manufacturer and exporter,
                            specializing in high tensile bolts, nuts, screws, and washers.
                            As one of the best fastener manufacturers in India, we provide
                            superior-quality industrial fasteners for a wide range of
                            applications.
                        </p>

                        <p className="text-gray-700 leading-relaxed text-base mt-4">
                            Our fasteners are trusted by industries worldwide for their
                            durability, strength, and precision. Choose Royal Anchors for
                            premium hardware solutions, whether you need fasteners for
                            construction, machinery, or any industrial project.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default FastenersHero;