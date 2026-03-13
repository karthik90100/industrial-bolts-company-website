import React from "react";
import threadingImg from "../../assets/services_images/1.png";
// 🔁 change path to your actual image

const ThreadingServices = () => {
    return (
        <section className="w-full flex justify-center py-20 bg-white">
            <div className="max-w-6xl w-full px-6">

                {/* Top Center Title */}
                <h2 className="text-center text-3xl font-semibold mb-14">
                    Threading Services
                </h2>

                {/* Content */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-14 items-center">

                    {/* Left Text */}
                    <div>
                        <h3 className="text-2xl font-semibold mb-6">
                            Threading Services
                        </h3>

                        <p className="text-gray-700 leading-relaxed text-[15px]">
                            After the raw material is cut to length, threads of a mechanical
                            fastener can be produced by either cutting or rolling. Royal
                            Anchor is capable of cut threading through 2 1/2” (63mm) diameter.
                            <br /><br />
                            Cut threading is a process by which steel is cut away, or
                            physically removed, from a round bar of steel to form the threads.
                            A 1” diameter bolt, for example, is produced by cutting threads
                            into a full 1” diameter body of the bolt.
                        </p>
                    </div>

                    {/* Right Image */}
                    <div className="flex justify-center lg:justify-end">
                        <div className="rounded-xl overflow-hidden shadow-md w-full max-w-sm">
                            <img
                                src={threadingImg}
                                alt="Threading Services"
                                className="w-full h-full object-cover"
                            />
                        </div>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default ThreadingServices;