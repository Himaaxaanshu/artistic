// src/components/Footer.js
import { Link } from 'react-router-dom';
import { FaFacebookF, FaInstagram, FaLinkedinIn } from 'react-icons/fa';
import { FaXTwitter } from "react-icons/fa6";

const Footer = () => {
    return (
        <footer className="bg-gray-900 text-white py-12">
            <div className="container mx-auto px-6 flex flex-col lg:flex-row items-center justify-between space-y-8 lg:space-y-0">

                {/* Logo and Description */}
                <div className="flex flex-col items-center lg:items-start">
                    <svg className="w-8 h-8 text-blue-600" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                        <path fill="#FF6384" d="M12 2c1.6 0 3.1 1.5 4 3 1 1.6 1 3.5 0 5-1 1.5-2.4 3-4 3s-3.1-1.5-4-3c-1-1.6-1-3.5 0-5 1-1.5 2.4-3 4-3z"></path>
                        <path fill="#36A2EB" d="M4 8c1.6 0 3.1 1.5 4 3 1 1.6 1 3.5 0 5-1 1.5-2.4 3-4 3s-3.1-1.5-4-3c-1-1.6-1-3.5 0-5 1-1.5 2.4-3 4-3z"></path>
                        <path fill="#FFCE56" d="M20 8c1.6 0 3.1 1.5 4 3 1 1.6 1 3.5 0 5-1 1.5-2.4 3-4 3s-3.1-1.5-4-3c-1-1.6-1-3.5 0-5 1-1.5 2.4-3 4-3z"></path>
                    </svg>
                    <Link to="/" className="text-2xl font-extrabold text-white">Artistic Tales</Link>
                    <span className="text-sm text-white">by Jidnyasa</span>
                    <p className="text-gray-400 text-center lg:text-left">
                        Bringing Your Vision to Life, <br />
                        One Brushstroke at a Time
                    </p>
                </div>

                {/* Navigation Links */}
                <div className="flex flex-col lg:flex-row items-center space-y-4 lg:space-y-0 lg:space-x-8">
                    <div className="flex flex-col items-center lg:items-start">
                        <h4 className="text-lg font-semibold mb-2">Quick Links</h4>
                        <Link to="/" className="text-gray-400 hover:text-blue-400 mb-1">Home</Link>
                        <Link to="/about" className="text-gray-400 hover:text-blue-400 mb-1">About</Link>
                        <Link to="/services" className="text-gray-400 hover:text-blue-400 mb-1">Services</Link>
                        <Link to="/contact" className="text-gray-400 hover:text-blue-400">Contact</Link>
                    </div>
                    <div className="flex flex-col items-center lg:items-start">
                        <h4 className="text-lg font-semibold mb-2">Contact Us</h4>
                        <p className="text-gray-400 mb-1">123 Main St, Suite 100</p>
                        <p className="text-gray-400 mb-1">City, State, 12345</p>
                        <p className="text-gray-400 mb-1">Email: info@example.com</p>
                        <p className="text-gray-400">Phone: (123) 456-7890</p>
                    </div>
                </div>

                {/* Social Media Links */}
                <div className="flex space-x-4 justify-center lg:justify-start">
                    <a href="https://facebook.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-600">
                        <FaFacebookF className="w-6 h-6" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-400">
                        <FaXTwitter className="w-6 h-6" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-pink-500">
                        <FaInstagram className="w-6 h-6" />
                    </a>
                    <a href="https://in.linkedin.com/in/jidnyasa-narayankar-739ba61b6" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-blue-700">
                        <FaLinkedinIn className="w-6 h-6" />
                    </a>
                </div>
            </div>

            {/* Copyright */}
            <div className="text-center text-gray-400 mt-8">
                <p>&copy; {new Date().getFullYear()} Brand. All rights reserved.</p>
            </div>
        </footer>
    );
};

export default Footer;
