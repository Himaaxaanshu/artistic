import React, { useEffect } from 'react';
import AboutImg from '../.././assests/img/AboutImg.jpg'

const About = () => {
  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  return (
    <div className="bg-gray-50 min-h-screen">

      <section className="bg-white py-16">
        <div className="container mx-auto px-4 text-center">
          <h1 className="text-5xl font-bold text-gray-800">About Me</h1>

          <div className="relative mt-8">
            <img
              src={AboutImg}
              alt="About Us"
              className="w-full h-64 object-cover rounded-lg shadow-lg"
            />
            <span className="absolute inset-0 flex items-center justify-center text-3xl font-bold text-white">
              I pour my soul into creating captivating art that speaks to your heart and elevates your space.
            </span>
          </div>
        </div>

      </section>


      <section className="bg-gray-100 py-16">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-800">My Story</h2>
          <p className="mt-6 text-center text-lg text-gray-600">
            Although I began my artistic journey in 2020, my passion for art has been with me since childhood.
            From creating sketches on order to experimenting with various forms of art, I have always been driven
            by a desire to improve and explore new creative possibilities.
          </p>
          <div className="mt-12 grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">My Mission</h3>
              <p className="mt-4 text-gray-600">
                To create art that resonates with people, sparks emotions, and transforms spaces with unique, handcrafted pieces.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">My Vision</h3>
              <p className="mt-4 text-gray-600">
                To inspire and connect with others through my art, pushing boundaries and continuously evolving as an artist.
              </p>
            </div>
            <div className="p-6 bg-white rounded-lg shadow-lg">
              <h3 className="text-2xl font-semibold text-gray-800">My Values</h3>
              <p className="mt-4 text-gray-600">
                Passion, Creativity, and Authenticity are the foundation of every piece I create, as I strive for originality and self-expression.
              </p>
            </div>
          </div>

        </div>
      </section>


      <section className="py-16 bg-white">
        <div className="container mx-auto px-4">
          <h2 className="text-4xl font-semibold text-center text-gray-800">Meet Our Team Or Should I Say 'ME'</h2>
          <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-8">

            <div className="p-6 bg-gray-100 rounded-lg shadow-lg text-center">
              <img
                src="team-member-image-url"
                alt="Team Member"
                className="w-32 h-32 mx-auto rounded-full object-cover"
              />
              <h3 className="mt-4 text-xl font-semibold text-gray-800">Jidnyasa Narayankar</h3>
              <p className="mt-2 text-gray-600">Artist</p>
            </div>

          </div>
        </div>
      </section>


      <section className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-4xl font-semibold text-white">Ready to Explore My Art?</h2>
          <p className="mt-4 text-lg text-gray-200">
            Dive into a world of creativity and discover unique pieces that speak to your soul.
          </p>
          <div className="flex justify-center mt-6 space-x-4">
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
      </section>

    </div>
  );
};

export default About;
