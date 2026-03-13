import React from "react";
import ImageOne from '../../assets/certification_images/1-1.avif';
import ImageTwo from '../../assets/certification_images/1-2.avif';

const CertificatesCompoent = () => {
    return (
        <div className="w-full bg-white py-20">
            <div className="max-w-6xl mx-auto flex flex-col md:flex-row items-center justify-center gap-12 px-4">

                {/* Certificate 1 */}
                <div className="w-65 md:w-75 shadow-xl rounded-lg overflow-hidden">
                    <img
                        src={ImageOne}
                        alt="Certificate of Appreciation"
                        className="w-full h-auto object-contain"
                    />
                </div>

                {/* Certificate 2 */}
                <div className="w-65 md:w-75 shadow-xl rounded-lg overflow-hidden">
                    <img
                        src={ImageTwo}
                        alt="Industry Outlook Award"
                        className="w-full h-auto object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default CertificatesCompoent;