import React from 'react';
// import { useNavigate } from 'react-router-dom';



const Hero = () => {
    return (
        <div className="pt-1">
            <div className="relative mt-10 bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 h-screen flex items-center justify-center text-center text-white px-6">

                {/* Announcement */}
                <div className="absolute top-8 w-full px-6 py-2 bg-gray-800 bg-opacity-70 rounded-full text-gray-200 text-sm shadow-xl">
                    Explore the latest in artistic innovation.{' '}
                    <span className="underline text-white cursor-pointer hover:text-yellow-300 transition-colors">Read more →</span>
                </div>

                {/* Main Content */}
                <div className="relative z-10">
                    <h1 className="text-4xl sm:text-5xl md:text-6xl font-serif font-extrabold leading-tight mb-4">
                        Immerse Yourself in Art
                    </h1>
                    <p className="text-lg sm:text-xl max-w-3xl mx-auto mb-8 font-light italic">
                        Discover artworks that push the boundaries of creativity and craftsmanship. Unleash your artistic spirit through our platform.
                    </p>

                    {/* Buttons */}
                    <div className="flex justify-center gap-6">

                        <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-lg">
                            {/* Explore Gallery Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M20 21c1.104 0 2-.896 2-2V5c0-1.104-.896-2-2-2H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16zM12 14l4-4-4-4M8 10l-4 4 4 4" />
                            </svg>
                            <span className="text-sm">Explore My Gallery</span>
                        </button>

                        <button className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-lg">
                            {/* Get in Touch Icon */}
                            <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                <path d="M21 13V8c0-1.104-.896-2-2-2H5c-1.104 0-2 .896-2 2v10c0 1.104.896 2 2 2h14c1.104 0 2-.896 2-2v-5" />
                                <path d="M12 11v6" />
                                <path d="M9 14l3 3 3-3" />
                            </svg>
                            <span className="text-sm">Get in Touch with Me</span>
                        </button>
                    </div>
                </div>
            </div>
            <div className="bg-gray-100 py-10 flex justify-center items-center">
                <div className="w-full max-w-6xl mx-auto">
                    <div className="bg-gradient-to-r from-teal-400 via-blue-500 to-indigo-600 text-white rounded-lg shadow-lg p-8 md:p-12 transition transform hover:scale-105 hover:shadow-2xl">
                        <div className="flex flex-col md:flex-row justify-between items-center">
                            <div className="mb-8 md:mb-0 md:w-1/2">
                                <h2 className="text-3xl font-serif font-extrabold mb-4">Explore Art like Never Before</h2>
                                <p className="text-lg italic">Dive into a world of creativity! Book your art lessons, workshops, or events easily through our platform, just like booking your favorite experiences.</p>

                                <div className="mt-6 gap-2 flex items-center">
                                    <span className="text-sm mr-3">Explore My Gallery:</span>


                                    <button className="flex items-center bg-indigo-600 text-white px-2 py-2 rounded-lg shadow-lg">
                                        <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                            <path d="M20 21c1.104 0 2-.896 2-2V5c0-1.104-.896-2-2-2H4c-1.104 0-2 .896-2 2v14c0 1.104.896 2 2 2h16zM12 14l4-4-4-4M8 10l-4 4 4 4" />
                                        </svg>
                                    </button>



                                </div>
                            </div>

                            <div className="md:w-1/2 flex justify-center">
                                {/* Art Image */}
                                <img className="w-full max-w-xs md:max-w-sm transform transition duration-500 hover:rotate-3" src="https://undraw.co/api/illustrations/creative_process-5-d6bf.svg" alt="Art Illustration" />
                            </div>
                        </div>

                        <div className="mt-8 text-center">
                            <button className="bg-white text-blue-500 font-bold py-3 px-8 rounded-full hover:bg-blue-100 transition duration-300 transform hover:scale-105">
                                Order Now
                            </button>
                        </div>
                    </div>
                </div>
            </div>


        </div>
    );
};

export default Hero;
