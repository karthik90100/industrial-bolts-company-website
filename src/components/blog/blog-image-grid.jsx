import React from "react";

// ✅ IMPORT IMAGES (your filenames kept as-is)
import Img1 from "../../assets/blog_page_images/One.png";
import Img2 from "../../assets/blog_page_images/Two.png";
import Img3 from "../../assets/blog_page_images/Three.png";
import Img4 from "../../assets/blog_page_images/Four.png";
import Img5 from "../../assets/blog_page_images/Five.png";
import Img6 from "../../assets/blog_page_images/Six.png";
import Img7 from "../../assets/blog_page_images/Seven.jpg";
import Img8 from "../../assets/blog_page_images/Eight.jpg";
import Img9 from "../../assets/blog_page_images/Nine.jpg"
import { useNavigate } from "react-router-dom";

const images = [
    {
        slug: "gi-sag-rod-price-guide",
        src: Img1,
        title: "GI Sag Rod Price Guide: Factors That Affect Cost"
    },
    {
        slug: "l-type-foundation-bolt-manufacturer",
        src: Img2,
        title: "Leading L Type Foundation Bolt Manufacturer in India"
    },
    {
        slug: "bevel-washer-supplier-chennai",
        src: Img3,
        title: "Bevel Washer Supplier in Chennai"
    },
    {
        slug: "foundation-bolt-selection-mistakes",
        src: Img4,
        title: "Common Mistakes to Avoid When Selecting a Foundation Bolt Manufacturer"
    },
    {
        slug: "hillside-washer-chennai",
        src: Img5,
        title: "Hillside Washer in Chennai – Uses, Benefits & Structural Importance"
    },
    {
        slug: "light-pole-foundation-bolts",
        src: Img6,
        title: "Light Pole Foundation Bolts in Chennai – Types & Installation Guide"
    },
    {
        slug: "l-type-foundation-bolts-guide",
        src: Img7,
        title: "What Are L Type Foundation Bolts? Uses & Specifications"
    },
    {
        slug: "j-type-foundation-bolts",
        src: Img8,
        title: "Unbeatable Quality J-Type Foundation Bolts in Chennai, India"
    },
    {
        slug: "j-type-foundation-bolts-india",
        src: Img9,
        title: "Unbeatable Quality J-Type Foundation Bolts in Chennai, India"
    }
];

const BlogImageGrid = () => {
    const navigate = useNavigate();
    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 ">
                {images.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(`/blog/${item.slug}`)}
                        className="group relative h-110 rounded-xl overflow-hidden shadow-lg cursor-pointer"
                    >
                        {/* IMAGE */}
                        <img
                            src={item.src}
                            alt={item.title}
                            className="
                w-full h-full object-cover
                transition-all duration-500
                brightness-75
                group-hover:brightness-100
                group-hover:scale-105
              "
                        />

                        {/* OVERLAY */}
                        <div
                            className="
                absolute inset-0
                flex items-end
               bg-black/60 from-black/70 via-black/40 to-transparent
                transition-opacity duration-500
                group-hover:opacity-0
              "
                        ></div>

                        {/* TITLE */}
                        <h3
                            className="
                absolute bottom-4 left-4 right-4
                text-white
                group-hover:opacity-0
              "
                        >
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
};

export default BlogImageGrid;