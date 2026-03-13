// import React, { useState } from "react";

// import Img1 from "../../assets/events_images/1-1.jpeg";
// import Img2 from "../../assets/events_images/1-2.jpeg";
// import Img3 from "../../assets/events_images/1-3.jpeg";
// import Img4 from "../../assets/events_images/1-4.jpeg";
// import Img5 from "../../assets/events_images/1-5.jpeg";
// import Img6 from "../../assets/events_images/1-6.jpeg";

// const images = [
//     { title: "Royal Anchors Stall", image: Img1 },
//     { title: "Product Showcase", image: Img2 },
//     { title: "Client Interaction", image: Img3 },
//     { title: "Engineering Solutions", image: Img4 },
//     { title: "Innovation Display", image: Img5 },
//     { title: "Steel Expo 2022", image: Img6 },
// ];

// function ExpoImageCarousel() {
//     const [activeIndex, setActiveIndex] = useState(0);

//     const next = () => {
//         setActiveIndex((prev) => (prev + 1) % images.length);
//     };

//     const prev = () => {
//         setActiveIndex((prev) =>
//             prev === 0 ? images.length - 1 : prev - 1
//         );
//     };

//     return (
//         <section className="w-full py-20 bg-white">
//             <div className="max-w-6xl mx-auto px-6 text-center">

//                 <h2 className="text-3xl font-semibold text-purple-700 mb-14">
//                     Steel Construction Expo at Hyderabad 2022
//                 </h2>

//                 {/* STACK CONTAINER */}
//                 <div className="relative w-[420px] h-[520px] mx-auto perspective-[1200px]">

//                     {images.map((card, index) => {
//                         const offset = index - activeIndex;

//                         // show only previous, active, next
//                         if (Math.abs(offset) > 1) return null;

//                         return (
//                             <div
//                                 key={index}
//                                 className="absolute inset-0 rounded-2xl overflow-hidden shadow-2xl transition-all duration-700 ease-in-out"
//                                 style={{
//                                     transform: `
//                     translateX(${offset * 240}px)
//                     translateY(${Math.abs(offset) * 14}px)
//                     scale(${offset === 0 ? 1 : 0.9})
//                     rotateY(${offset * -20}deg)
//                     rotateZ(${offset * -2}deg)
//                   `,
//                                     zIndex: offset === 0 ? 30 : 20,
//                                 }}
//                             >
//                                 <img
//                                     src={card.image}
//                                     alt={card.title}
//                                     className="w-full h-full object-cover"
//                                 />

//                                 {/* TITLE OVERLAY */}
//                                 <div className="absolute inset-0 bg-black/25 flex items-center justify-center">
//                                     <h3 className="text-white text-xl font-semibold px-4 text-center">
//                                         {card.title}
//                                     </h3>
//                                 </div>
//                             </div>
//                         );
//                     })}

//                     {/* LEFT BUTTON */}
//                     <button
//                         onClick={prev}
//                         className="absolute -left-16 top-1/2 -translate-y-1/2
//                        w-10 h-10 rounded-full border shadow
//                        bg-white hover:bg-black hover:text-white transition z-50"
//                     >
//                         ‹
//                     </button>

//                     {/* RIGHT BUTTON */}
//                     <button
//                         onClick={next}
//                         className="absolute -right-16 top-1/2 -translate-y-1/2
//                        w-10 h-10 rounded-full border shadow
//                        bg-white hover:bg-black hover:text-white transition z-50"
//                     >
//                         ›
//                     </button>

//                 </div>
//             </div>
//         </section>
//     );
// }

// export default ExpoImageCarousel;
import React, { useState, useEffect } from "react";

import Img1 from "../../assets/events_images/1-1.jpeg";
import Img2 from "../../assets/events_images/1-2.jpeg";
import Img3 from "../../assets/events_images/1-3.jpeg";
import Img4 from "../../assets/events_images/1-4.jpeg";
import Img5 from "../../assets/events_images/1-5.jpeg";
import Img6 from "../../assets/events_images/1-6.jpeg";

const images = [
    { title: "Royal Anchors Stall", subtitle: "Brand Presence", image: Img1 },
    { title: "Product Showcase", subtitle: "Featured Exhibits", image: Img2 },
    { title: "Client Interaction", subtitle: "Engagement & Outreach", image: Img3 },
    { title: "Engineering Solutions", subtitle: "Technical Expertise", image: Img4 },
    { title: "Innovation Display", subtitle: "Cutting-Edge Designs", image: Img5 },
    { title: "Steel Expo 2022", subtitle: "Industry Leadership", image: Img6 },
];

export default function ExpoImageCarousel() {
    const [activeIndex, setActiveIndex] = useState(0);
    const [animating, setAnimating] = useState(false);
    const [direction, setDirection] = useState(null);

    const go = (dir) => {
        if (animating) return;
        setDirection(dir);
        setAnimating(true);
        setTimeout(() => {
            setActiveIndex((prev) =>
                dir === "next"
                    ? (prev + 1) % images.length
                    : prev === 0 ? images.length - 1 : prev - 1
            );
            setAnimating(false);
        }, 400);
    };

    useEffect(() => {
        const timer = setInterval(() => go("next"), 5000);
        return () => clearInterval(timer);
    }, [animating]);

    const active = images[activeIndex];

    return (
        <section style={{
            background: "linear-gradient(135deg, #0d0d0d 0%, #1a1410 50%, #0d0d0d 100%)",
            padding: "80px 0",
            fontFamily: "'Georgia', 'Times New Roman', serif",
            position: "relative",
            overflow: "hidden",
        }}>

            {/* Background texture */}
            <div style={{
                position: "absolute", inset: 0, opacity: 0.03,
                backgroundImage: "repeating-linear-gradient(0deg, transparent, transparent 2px, #c8a96e 2px, #c8a96e 3px)",
                pointerEvents: "none",
            }} />

            {/* Decorative corner accents */}
            <div style={{
                position: "absolute", top: 32, left: 48, width: 60, height: 60,
                borderTop: "2px solid #c8a96e", borderLeft: "2px solid #c8a96e", opacity: 0.5
            }} />
            <div style={{
                position: "absolute", bottom: 32, right: 48, width: 60, height: 60,
                borderBottom: "2px solid #c8a96e", borderRight: "2px solid #c8a96e", opacity: 0.5
            }} />

            <div style={{ maxWidth: 1100, margin: "0 auto", padding: "0 48px" }}>

                {/* Header */}
                <div style={{ textAlign: "center", marginBottom: 56 }}>
                    <p style={{
                        color: "#c8a96e", fontSize: 11, letterSpacing: "0.35em",
                        textTransform: "uppercase", marginBottom: 14, fontFamily: "'Helvetica Neue', sans-serif",
                    }}>
                        Hyderabad · 2022
                    </p>
                    <h2 style={{
                        color: "#f5f0e8", fontSize: "clamp(26px, 4vw, 42px)",
                        fontWeight: 400, letterSpacing: "0.04em",
                        margin: 0, lineHeight: 1.2,
                    }}>
                        Steel Construction Expo
                    </h2>
                    <div style={{
                        width: 64, height: 2, background: "#c8a96e",
                        margin: "20px auto 0", borderRadius: 2,
                    }} />
                </div>

                {/* Main layout */}
                <div style={{ display: "flex", gap: 48, alignItems: "center", justifyContent: "center" }}>

                    {/* Prev button */}
                    <button onClick={() => go("prev")} style={{
                        flexShrink: 0, width: 48, height: 48, borderRadius: "50%",
                        border: "1px solid rgba(200,169,110,0.4)", background: "transparent",
                        color: "#c8a96e", fontSize: 22, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.25s", outline: "none",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#c8a96e"; e.currentTarget.style.color = "#0d0d0d"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#c8a96e"; }}
                    >
                        ‹
                    </button>

                    {/* Image + Info */}
                    <div style={{ flex: 1, maxWidth: 780, display: "flex", gap: 40, alignItems: "stretch" }}>

                        {/* Image frame */}
                        <div style={{
                            flex: "0 0 480px", height: 380,
                            position: "relative", borderRadius: 4,
                            overflow: "hidden",
                            boxShadow: "0 32px 80px rgba(0,0,0,0.7), 0 0 0 1px rgba(200,169,110,0.15)",
                        }}>
                            <img
                                key={activeIndex}
                                src={active.image}
                                alt={active.title}
                                style={{
                                    width: "100%", height: "100%", objectFit: "cover",
                                    animation: animating
                                        ? `${direction === "next" ? "slideOutLeft" : "slideOutRight"} 0.4s ease forwards`
                                        : "slideIn 0.5s ease forwards",
                                    display: "block",
                                }}
                            />
                            {/* Gold gradient overlay at bottom */}
                            <div style={{
                                position: "absolute", bottom: 0, left: 0, right: 0, height: "40%",
                                background: "linear-gradient(to top, rgba(13,10,5,0.85) 0%, transparent 100%)",
                            }} />
                            {/* Counter badge */}
                            <div style={{
                                position: "absolute", top: 16, right: 16,
                                background: "rgba(200,169,110,0.9)", color: "#0d0d0d",
                                fontSize: 11, fontWeight: 700, letterSpacing: "0.1em",
                                padding: "4px 10px", borderRadius: 2,
                                fontFamily: "'Helvetica Neue', sans-serif",
                            }}>
                                {String(activeIndex + 1).padStart(2, "0")} / {String(images.length).padStart(2, "0")}
                            </div>
                        </div>

                        {/* Info panel */}
                        <div style={{
                            flex: 1, display: "flex", flexDirection: "column", justifyContent: "space-between",
                            paddingTop: 8, paddingBottom: 8,
                        }}>
                            {/* Active card info */}
                            <div>
                                <p style={{
                                    color: "#c8a96e", fontSize: 10, letterSpacing: "0.3em",
                                    textTransform: "uppercase", marginBottom: 12, marginTop: 0,
                                    fontFamily: "'Helvetica Neue', sans-serif",
                                }}>
                                    {active.subtitle}
                                </p>
                                <h3 style={{
                                    color: "#f5f0e8", fontSize: 26, fontWeight: 400,
                                    margin: "0 0 20px", lineHeight: 1.25, letterSpacing: "0.02em",
                                }}>
                                    {active.title}
                                </h3>
                                <div style={{ width: 32, height: 1, background: "#c8a96e", marginBottom: 24 }} />
                                <p style={{
                                    color: "rgba(245,240,232,0.45)", fontSize: 13,
                                    lineHeight: 1.7, margin: 0,
                                    fontFamily: "'Helvetica Neue', sans-serif", fontWeight: 300,
                                }}>
                                    Showcasing excellence at India's premier steel construction industry event, bringing together engineers, architects, and innovators.
                                </p>
                            </div>

                            {/* Thumbnail dots / index list */}
                            <div style={{ display: "flex", flexDirection: "column", gap: 10 }}>
                                {images.map((img, i) => (
                                    <button key={i} onClick={() => { if (!animating) setActiveIndex(i); }}
                                        style={{
                                            display: "flex", alignItems: "center", gap: 12,
                                            background: "none", border: "none", cursor: "pointer",
                                            padding: "6px 0", textAlign: "left", outline: "none",
                                            opacity: i === activeIndex ? 1 : 0.35,
                                            transition: "opacity 0.25s",
                                        }}>
                                        <div style={{
                                            width: i === activeIndex ? 24 : 12, height: 1,
                                            background: i === activeIndex ? "#c8a96e" : "#f5f0e8",
                                            transition: "all 0.3s", flexShrink: 0,
                                        }} />
                                        <span style={{
                                            color: i === activeIndex ? "#c8a96e" : "#f5f0e8",
                                            fontSize: 11, letterSpacing: "0.15em",
                                            textTransform: "uppercase",
                                            fontFamily: "'Helvetica Neue', sans-serif",
                                            transition: "color 0.25s",
                                        }}>
                                            {img.title}
                                        </span>
                                    </button>
                                ))}
                            </div>
                        </div>
                    </div>

                    {/* Next button */}
                    <button onClick={() => go("next")} style={{
                        flexShrink: 0, width: 48, height: 48, borderRadius: "50%",
                        border: "1px solid rgba(200,169,110,0.4)", background: "transparent",
                        color: "#c8a96e", fontSize: 22, cursor: "pointer",
                        display: "flex", alignItems: "center", justifyContent: "center",
                        transition: "all 0.25s", outline: "none",
                    }}
                        onMouseEnter={e => { e.currentTarget.style.background = "#c8a96e"; e.currentTarget.style.color = "#0d0d0d"; }}
                        onMouseLeave={e => { e.currentTarget.style.background = "transparent"; e.currentTarget.style.color = "#c8a96e"; }}
                    >
                        ›
                    </button>
                </div>
            </div>

            <style>{`
        @keyframes slideIn {
          from { opacity: 0; transform: scale(1.04); }
          to   { opacity: 1; transform: scale(1); }
        }
        @keyframes slideOutLeft {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(-30px); }
        }
        @keyframes slideOutRight {
          from { opacity: 1; transform: translateX(0); }
          to   { opacity: 0; transform: translateX(30px); }
        }
      `}</style>
        </section>
    );
}