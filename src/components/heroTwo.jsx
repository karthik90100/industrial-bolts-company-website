import { useParams } from 'react-router-dom';
import headerImage from '../assets/about_page_images/header.jpg';
import { useLocation } from 'react-router-dom';
function HeroTwo() {
    const location = useLocation();
    const path = location.pathname.replace("/", "").toUpperCase();
    return (
        <div className="relative h-75 w-full overflow-hidden pt-24">

            {/* Background Image */}
            <img
                src={headerImage}
                alt="Logo"
                className="absolute inset-0 w-full h-full object-cover"
            />

            {/* Dark Overlay */}
            <div className="absolute inset-0 bg-black/55"></div>


            {/* Centered Text */}
            <div className="absolute inset-0 flex items-center justify-center">
                <h1 className="text-white text-4xl font-bold uppercase">
                    {path}
                </h1>
            </div>

        </div>
    );
}
export default HeroTwo;