import img1 from "../../assets/product_page_images/1.png";
import img2 from "../../assets/product_page_images/2.png";
import img3 from "../../assets/product_page_images/3.png";
import img4 from "../../assets/product_page_images/4.png";
import img5 from "../../assets/product_page_images/5.png";
import img6 from "../../assets/product_page_images/6.png";
import img7 from "../../assets/product_page_images/7.png";
import img8 from "../../assets/product_page_images/8.png";
import img9 from "../../assets/product_page_images/9.png";
import img10 from "../../assets/product_page_images/10.png";
import img11 from "../../assets/product_page_images/11.png";
import { useNavigate } from "react-router-dom";
const items = [
    { title: "Connection Fasteners", image: img1, slug: "connection-fasteners" },
    { title: "Pipe Stiffener Bolts", image: img2, slug: "pipe-stiffener-bolts" },
    { title: "Light Pole Foundation", image: img3, slug: "light-pole-foundation" },
    { title: "Hillside Washer", image: img4, slug: "hillside-washer" },
    { title: "Brace Rod Connectors", image: img5, slug: "brace-rod-connectors" },
    { title: "Z-Sag Rod", image: img6, slug: "z-sag-rod" },
    { title: "Brace Rod", image: img7, slug: "brace-rod" },
    { title: "Plate Type Foundation Bolt", image: img8, slug: "plate-type-foundation-bolt" },
    { title: "Item 9", image: img9, slug: "item-9" },
    { title: "Item 10", image: img10, slug: "item-10" },
    { title: "Item 11", image: img11, slug: "item-11" },
];
function ProductCards() {
    const navigate = useNavigate();
    return (
        <div className="max-w-7xl mx-auto px-10 py-5">
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-8">
                {items.map((item, index) => (
                    <div
                        key={index}
                        onClick={() => navigate(`/products/${item.slug}`)}
                        className="bg-[#0B1F3B] rounded-xl p-5 flex flex-col items-center"
                    >
                        {/* Image Box */}
                        <div className="bg-white rounded-lg w-full h-48 flex items-center justify-center">
                            <img
                                src={item.image}
                                alt={item.title}
                                className="h-32 object-contain"
                            />
                        </div>

                        {/* Title */}
                        <h3 className="text-white font-semibold text-center mt-4">
                            {item.title}
                        </h3>
                    </div>
                ))}
            </div>
        </div>
    );
}

export default ProductCards;