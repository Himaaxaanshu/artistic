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
            <div className="container mx-auto px-6 py-4 flex items-center justify-between">
                <div className="flex flex-col items-center space-y-1 text-center">
                    {/* Colorful flower logo SVG */}
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF6384" d="M12 2c1.6 0 3.1 1.5 4 3 1 1.6 1 3.5 0 5-1 1.5-2.4 3-4 3s-3.1-1.5-4-3c-1-1.6-1-3.5 0-5 1-1.5 2.4-3 4-3z"></path>
                        <path fill="#36A2EB" d="M4 8c1.6 0 3.1 1.5 4 3 1 1.6 1 3.5 0 5-1 1.5-2.4 3-4 3s-3.1-1.5-4-3c-1-1.6-1-3.5 0-5 1-1.5 2.4-3 4-3z"></path>
                        <path fill="#FFCE56" d="M20 8c1.6 0 3.1 1.5 4 3 1 1.6 1 3.5 0 5-1 1.5-2.4 3-4 3s-3.1-1.5-4-3c-1-1.6-1-3.5 0-5 1-1.5 2.4-3 4-3z"></path>
                    </svg>
                    <Link to="/" className="text-2xl font-extrabold text-gray-800">Artistic Tales</Link>
                    <span className="text-sm text-gray-600">by Jidnyasa</span>
                </div>

                <div className="hidden lg:flex flex-grow items-center justify-center space-x-8">
                    <Link to="/" className="text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-105">Home</Link>
                    <Link to="/about" className="text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-105">About</Link>
                    <Link to="/gallery" className="text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-105">Gallery</Link>
                    <Link to="/contact" className="text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-105">Contact</Link>

                    <div className="relative group">
                        <button className="text-gray-800 hover:text-blue-600 transition-transform transform hover:scale-105 focus:outline-none">
                            Download App
                        </button>
                        <div className="absolute hidden group-hover:block bg-white shadow-lg rounded-lg mt-2 z-50 w-64">
                            <Link to="#" className="flex items-center px-4 py-3 hover:bg-gray-100 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mr-3" viewBox="0 0 512 512" xmlSpace="preserve">
                                    <path fill="#FFD700" d="M48.6 402.4L30.5 413.5v-59.5l18.1 9.2v39.2z" />
                                    <path fill="#FF4500" d="M99.1 376.7l-12.7 12.9-40.2-20.5 6.3-3.2c2.9-1.5 6.3-1.5 9.2 0L99.1 376.7z" />
                                </svg>
                                <span className="text-sm">Get on Google Play</span>
                            </Link>
                            <Link to="#" className="flex items-center px-4 py-3 hover:bg-gray-100 transition duration-300">
                                <svg xmlns="http://www.w3.org/2000/svg" className="h-2 w-2 mr-3" viewBox="0 0 384 512" fill="currentColor">
                                    <path d="M318.7 268c-.3-70.5 57.7-104.7 60.4-106.2-33-48.2-84.2-54.7-102.1-55.4-43.6-4.4-84.7 25.8-106.6 25.8s-55-25.3-90.2-24.6c-46.4.7-89.7 27.2-113.8 69-49 84.9-12.6 209.9 34.8 278.7 23.1 33.2 50.5 70.3 86.4 68.8 34.5-1.4 47.6-22.4 89.4-22.4s53.4 22.4 90.2 21.7c37.4-.6 61.1-33.1 83.8-66.4 26.5-39 37.4-76.7 38-78.8-1-.3-71.2-27.3-71.5-108.3z" />
                                </svg>
                                <span className="text-sm">Download on the App Store</span>
                            </Link>
                        </div>
                    </div>
                </div>

                <div className="hidden lg:flex items-center space-x-2">
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600  hover:bg-blue-800 focus:outline-none focus:ring-6 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={handleLoginClick}
                    >
                        Order
                    </button>
                </div>

                <div className="lg:hidden flex items-center justify-end w-full">
                    <button onClick={toggleMenu} className="text-gray-800 focus:outline-none">
                        <RiMenu3Fill className="w-8 h-8" />
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
                        <RiCloseFill className="w-8 h-8" />
                    </button>

                    <Link to="/" className="text-gray-800 text-2xl font-semibold" onClick={closeMenu}>
                        Home
                    </Link>
                    <Link to="/about" className="text-gray-800 text-2xl font-semibold" onClick={closeMenu}>
                        About
                    </Link>
                    <Link to="/services" className="text-gray-800 text-2xl font-semibold" onClick={closeMenu}>
                        Services
                    </Link>
                    <Link to="/contact" className="text-gray-800 text-2xl font-semibold" onClick={closeMenu}>
                        Contact
                    </Link>
                    <Link to="#" className="text-gray-800 text-2xl font-semibold" onClick={closeMenu}>
                        Download App
                    </Link>
                    <button
                        type="button"
                        className="text-white bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 hover:bg-blue-800 focus:outline-none focus:ring-6 focus:ring-blue-300 font-medium rounded-full text-md px-5 py-2.5 text-center dark:bg-blue-600 dark:hover:bg-blue-700 dark:focus:ring-blue-800"
                        onClick={() => {
                            handleLoginClick();
                            closeMenu();
                        }}
                    >
                        Login
                    </button>
                </div>
            </div>
        </nav>
    );
};

export default Navbar;
