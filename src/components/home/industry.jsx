import img1 from "../../assets/home_page_imgs/industry_imgs/1.webp";
import img2 from "../../assets/home_page_imgs/industry_imgs/2.webp";
import img3 from "../../assets/home_page_imgs/industry_imgs/3.webp";
import img4 from "../../assets/home_page_imgs/industry_imgs/4.webp";
import img5 from "../../assets/home_page_imgs/industry_imgs/5.webp";
import img6 from "../../assets/home_page_imgs/industry_imgs/6.webp";

const images = [
    {
        src: img1,
        title: "GI Sag Rod Price Guide: Factors That Affect Cost"
    },
    {
        src: img2,
        title: "Leading L Type Foundation Bolt Manufacturer in India"
    },
    {
        src: img3,
        title: "Bevel Washer Supplier in Chennai"
    },
    {
        src: img4,
        title: "Common Mistakes to Avoid When Selecting a Foundation Bolt Manufacturer"
    },
    {
        src: img5,
        title: "Hillside Washer in Chennai – Uses, Benefits & Structural Importance"
    },
    {
        src: img6,
        title: "Light Pole Foundation Bolts in Chennai – Types & Installation Guide"
    }
];

function Industry() {
    return (
        <div className="max-w-5xl mx-auto px-4 py-16">
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6">

                {images.map((item, index) => (
                    <div
                        key={index}
                        className="group relative h-420px rounded-xl overflow-hidden shadow-lg"
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
                bg-black/60
                transition-opacity duration-500
                group-hover:opacity-0
              "
                        ></div>

                        {/* TITLE */}
                        <h3
                            className="
                absolute bottom-4 left-4 right-4
                text-white text-lg font-semibold
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
}

export default Industry;