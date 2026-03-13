import React, { useEffect, useRef } from "react";
import heroVideo from "../../assets/hero_background_animation.mp4";
import SplitType from "split-type";
import { gsap } from "gsap";

function HeroOne() {
    const textRef = useRef(null);

    useEffect(() => {
        const splitText = new SplitType(textRef.current, {
            types: "chars",
        });

        gsap.fromTo(
            splitText.chars,
            {
                opacity: 0,
                y: 30,
            },
            {
                opacity: 1,
                y: 0,
                duration: 1.2,
                ease: "power4.out",
                stagger: 0.06,
            }
        );

        return () => splitText.revert();
    }, []);

    return (
        <div className=" relative w-full overflow-hidden lg:h-170 pt-24 ">
            {/* 🔹 Background Video */}
            <video
                className="absolute top-0 left-0 w-full h-full object-cover"
                src={heroVideo}
                autoPlay
                loop
                muted
                playsInline
            />

            {/* 🔹 Dark Overlay */}
            <div className="absolute inset-0 bg-[#0B1F3B]/90"></div>


            {/* 🔹 Content */}
            <div className="relative z-10 flex items-center justify-center h-full px-4 text-center">
                <h1
                    ref={textRef}
                    className=" text-white font-bold uppercase tracking-wider leading-[1.1] text-3xl sm:text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-[system-ui,Segoe UI,Roboto,Helvetica,Arial,sans-serif] wrap-break-word " >
                    India’s #1 Anchor Foundation Bolt
                    <br />
                    Manufacturing Company
                </h1>

            </div>
        </div>
    );
}

export default HeroOne;