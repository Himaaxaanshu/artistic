import { useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { RiMenu3Fill, RiCloseFill } from "react-icons/ri";

const Navbar = () => {
    const [isOpen, setIsOpen] = useState(false);
    const navigate = useNavigate();

    const toggleMenu = () => {
        setIsOpen(!isOpen);
    };

    const closeMenu = () => {
        setIsOpen(false);
    };

    const handleLoginClick = () => {
        navigate('/Order');
    };

    return (
        <nav className="bg-white shadow-lg fixed w-full top-0 left-0 z-50 transition-transform ease-in-out duration-300">
            <div className="container mx-auto px-4 py-2 flex items-center justify-between">
                <div className="flex flex-col items-center space-y-1 text-center">
                    {/* Colorful flower logo SVG */}
                    <svg className="w-6 h-6 text-blue-600 sm:w-8 sm:h-8" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF6384" d="M12 2c1.6 0 3.1 1.5 4 3 1 1.6 1 3.5 0 5-1 1.5-2.4 3-4 3s-3.1-1.5-4-3c-1-1.6-1-3.5 0-5 1-1.5 2.4-3 4-3z"></path>
                        <path fill="#36A2EB" d="M4 8c1.6 0 3.1 1.5 4 3 1 1.6 1 3.5 0 5-1 1.5-2.4 3-4 3s-3.1-1.5-4-3c-1-1.6-1-3.5 0-5 1-1.5 2.4-3 4-3z"></path>
                        <path fill="#FFCE56" d="M20 8c1.6 0 3.1 1.5 4 3 1 1.6 1 3.5 0 5-1 1.5-2.4 3-4 3s-3.1-1.5-4-3c-1-1.6-1-3.5 0-5 1-1.5 2.4-3 4-3z"></path>
                    </svg>
                    <Link to="/" className="text-lg sm:text-2xl font-extrabold text-gray-800">Artistic Tales</Link>
                    <span className="text-xs sm:text-sm text-gray-600">by Jidnyasa</span>
                </div>

                <div className="hidden lg:flex flex-grow items-center justify-center space-x-4">
                    <Link to="/" className="text-sm sm:text-base text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-105">Home</Link>
                    <Link to="/about" className="text-sm sm:text-base text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-105">About</Link>
                    <Link to="/gallery" className="text-sm sm:text-base text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-105">Gallery</Link>
                    <Link to="/contact" className="text-sm sm:text-base text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-105">Contact</Link>
                </div>

                <div className="hidden lg:flex items-center space-x-2">
                    <button
                        type="button"
                        className="text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600  hover:bg-blue-800 focus:outline-none focus:ring-6 focus:ring-blue-300 font-medium rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5"
                        onClick={handleLoginClick}
                    >
                        Order
                    </button>
                </div>

                <div className="lg:hidden flex items-center justify-end w-full">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <RiMenu3Fill className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>
                </div>
            </div>

            <div
                className={`lg:hidden fixed inset-0 z-50 transition-opacity duration-300 ${isOpen ? 'opacity-100' : 'opacity-0 pointer-events-none'}`}
            >
                <div
                    className="absolute inset-0 bg-black opacity-50"
                    onClick={closeMenu}
                ></div>

                <div
                    className={`relative bg-white h-full flex flex-col items-center justify-center space-y-6 transition-transform duration-300 ${isOpen ? 'translate-y-0' : 'translate-y-full'}`}
                >
                    <button onClick={toggleMenu} className="absolute top-4 right-4 text-gray-800 focus:outline-none">
                        <RiCloseFill className="w-6 h-6 sm:w-8 sm:h-8" />
                    </button>

                    <Link to="/" className="text-sm sm:text-lg text-gray-800 font-semibold" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/about" className="text-sm sm:text-lg text-gray-800 font-semibold" onClick={closeMenu}>
                        About
                    </Link>
                    <Link to="/gallery" className="text-sm sm:text-lg text-gray-800 font-semibold" onClick={closeMenu}>
                        Gallery
                    </Link>
                    <Link to="/contact" className="text-sm sm:text-lg text-gray-800 font-semibold" onClick={closeMenu}>
                        Contact
                    </Link>
                    <button
                        type="button"
                        className="text-xs sm:text-sm text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:bg-blue-800 focus:outline-none focus:ring-6 focus:ring-blue-300 font-medium rounded-full px-3 sm:px-5 py-1.5 sm:py-2.5"
                        onClick={() => {
                            handleLoginClick();
                            closeMenu();
                        }}
                    >
                        Order
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
