import { FaPhoneSquareAlt } from "react-icons/fa";
import { SiGmail } from "react-icons/si";
import logo from "../assets/home_page_imgs/Logo.png";

function Header() {
    return (
        <>
            <div className="w-full  bg-white">
                <div className="hidden md:flex max-w-7xl mx-auto px-4 sm:px-6 py-4 items-center justify-between">
                    {/* Left: Logo */}
                    <div >
                        <img
                            src={logo}
                            alt="Royal Anchors Logo"
                            className="h-20 w-auto"
                        />
                    </div>

                    {/* Center: Contact Info */}
                    <div className="flex flex-col sm:flex-row items-center gap-4 sm:gap-10 text-sm text-black">

                        <div className="flex items-center gap-2">
                            <FaPhoneSquareAlt className="text-lg sm:text-xl text-[#FFBF46]" />
                            <span>+91 98845 45253</span>
                        </div>

                        <div className="flex items-center gap-2">
                            <SiGmail className="text-lg sm:text-xl text-[#FFBF46]" />
                            <span>sales@royalanchors.com</span>
                        </div>

                    </div>

                    {/* Right: Button */}
                    <div>
                        <button className="       bg-[#820933] text-white
    px-4 py-2
    text-sm
    rounded-md
    font-medium
    shadow-sm
    hover:bg-[#6f072b]
    transition">
                            Download Brochure
                        </button>
                    </div>

                </div>
            </div >


        </>
    );
}

export default Header;