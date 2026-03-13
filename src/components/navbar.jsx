import { NavLink, useLocation } from "react-router-dom";
import { FaHome, FaBars, FaTimes } from "react-icons/fa";
import { useState, useEffect } from "react";

const Navbar = () => {
    const [isSticky, setIsSticky] = useState(false);
    const [menuOpen, setMenuOpen] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 20) {
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    const location = useLocation();
    const isHome = location.pathname === "/";

    const navItemClass = ({ isActive }) =>
        `
        px-3 py-2 text-sm font-medium transition-all duration-300 rounded-md
        whitespace-nowrap
        ${isActive
            ? "bg-white/20 text-white"
            : "text-white hover:bg-white/10"
        }
    `;

    const navBg =
        isHome
            ? isSticky
                ? "bg-black/40"
                : "bg-[#0B1F3B]/80"
            : isSticky
                ? "bg-black/40"
                : "bg-black/80";

    return (
        <nav
            className={`sticky top-0 z-50 w-full backdrop-blur-xl border-b border-white/10 shadow-[0_8px_32px_rgba(0,0,0,0.3)] transition-all duration-300 ${navBg}`}
        >

            {/* Top bar */}
            <div className="max-w-7xl mx-auto px-6 py-4 flex items-center justify-between">

                {/* Home Icon */}
                <NavLink to="/" className={navItemClass}>
                    <FaHome />
                </NavLink>

                {/* Desktop Menu */}
                <div className="hidden lg:flex items-center gap-4">

                    <NavLink to="/about" className={navItemClass}>About Us</NavLink>
                    <NavLink to="/products" className={navItemClass}>Products</NavLink>
                    <NavLink to="/fasteners" className={navItemClass}>Fasteners</NavLink>
                    <NavLink to="/technical" className={navItemClass}>Technical Specification</NavLink>
                    <NavLink to="/services" className={navItemClass}>Services</NavLink>
                    <NavLink to="/manufacturing" className={navItemClass}>Manufacturing Capabilities</NavLink>
                    <NavLink to="/industry" className={navItemClass}>Industry We Serve</NavLink>
                    <NavLink to="/events" className={navItemClass}>Events</NavLink>
                    <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
                    <NavLink to="/certification" className={navItemClass}>Certification</NavLink>
                    <NavLink to="/blog" className={navItemClass}>Blog</NavLink>

                </div>

                {/* Mobile Hamburger */}
                <div
                    className="lg:hidden text-white text-xl cursor-pointer"
                    onClick={() => setMenuOpen(!menuOpen)}
                >
                    {menuOpen ? <FaTimes /> : <FaBars />}
                </div>

            </div>

            {/* Mobile Menu */}
            {menuOpen && (
                <div className="lg:hidden flex flex-col gap-2 px-6 pb-4">

                    <NavLink to="/about" className={navItemClass}>About Us</NavLink>
                    <NavLink to="/products" className={navItemClass}>Products</NavLink>
                    <NavLink to="/fasteners" className={navItemClass}>Fasteners</NavLink>
                    <NavLink to="/technical" className={navItemClass}>Technical Specification</NavLink>
                    <NavLink to="/services" className={navItemClass}>Services</NavLink>
                    <NavLink to="/manufacturing" className={navItemClass}>Manufacturing Capabilities</NavLink>
                    <NavLink to="/industry" className={navItemClass}>Industry We Serve</NavLink>
                    <NavLink to="/events" className={navItemClass}>Events</NavLink>
                    <NavLink to="/contact" className={navItemClass}>Contact</NavLink>
                    <NavLink to="/certification" className={navItemClass}>Certification</NavLink>
                    <NavLink to="/blog" className={navItemClass}>Blog</NavLink>

                </div>
            )}

        </nav>
    );
};

export default Navbar;