import React, { useEffect, useState, useRef } from 'react';

const Numbers = () => {
  const [count1, setCount1] = useState(0);
  const [count2, setCount2] = useState(0);
  const [count3, setCount3] = useState(0);
  const numbersSectionRef = useRef(null);  // Reference for the numbers section
  const [hasAnimated, setHasAnimated] = useState(false); // Control when animation happens

  useEffect(() => {
    const animateCount = (target, setCount) => {
      let start = 0;
      const end = target;
      const duration = 2000; 
      const increment = end / (duration / 100); 

      const interval = setInterval(() => {
        start += increment;
        if (start >= end) {
          clearInterval(interval);
          setCount(end); 
        } else {
          setCount(Math.ceil(start));
        }
      }, 50); 
    };

    const handleIntersection = (entries) => {
      const entry = entries[0];
      if (entry.isIntersecting && !hasAnimated) {
        animateCount(20, setCount1);
        animateCount(500, setCount2);
        animateCount(5, setCount3);
        setHasAnimated(true); // Ensure animation happens only once per scroll into view
      } else if (!entry.isIntersecting) {
        // Reset counts when out of view
        setCount1(0);
        setCount2(0);
        setCount3(0);
        setHasAnimated(false);
      }
    };

    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.5, // Trigger when 50% of the section is visible
    });

    if (numbersSectionRef.current) {
      observer.observe(numbersSectionRef.current);
    }

    return () => {
      if (numbersSectionRef.current) {
        observer.unobserve(numbersSectionRef.current);
      }
    };
  }, [hasAnimated]);

  return (
    <section ref={numbersSectionRef} className="bg-gradient-to-r from-gray-700 via-gray-900 to-black py-16">
      <div className="container mx-auto">
        <div className="text-center mb-12">
          <h2 className="text-4xl font-bold text-white">Our Numbers</h2>
          <p className="text-gray-200 mt-4">Some cool stats about our journey so far</p>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
          <div className="bg-white shadow-xl p-8 rounded-lg text-center transform transition duration-500 hover:scale-110 hover:shadow-2xl">
            <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <h3 className="text-5xl font-extrabold text-indigo-600 animate-counter">{count1}+</h3>
            </div>
            <p className="mt-2 text-gray-600">Number of Customers</p>
          </div>

          <div className="bg-white shadow-xl p-8 rounded-lg text-center transform transition duration-500 hover:scale-110 hover:shadow-2xl">
            <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <h3 className="text-5xl font-extrabold text-indigo-600 animate-counter">{count2}+</h3>
            </div>
            <p className="mt-2 text-gray-600">Followers on Social Media</p>
          </div>

          <div className="bg-white shadow-xl p-8 rounded-lg text-center transform transition duration-500 hover:scale-110 hover:shadow-2xl">
            <div className="w-24 h-24 mx-auto rounded-full bg-indigo-100 flex items-center justify-center mb-4">
              <h3 className="text-5xl font-extrabold text-indigo-600 animate-counter">{count3}+</h3>
            </div>
            <p className="mt-2 text-gray-600">Years of Experience</p>
          </div>
        </div>

        <div className="text-center mt-8">
  <p className="text-white text-2xl">Curious to know more?</p>
</div>
<div className="flex justify-center mt-6">
  <a
    href="https://www.instagram.com/artistic_tales__/"
    target="_blank"
    rel="noopener noreferrer"
    className="flex items-center bg-black text-white px-4 py-2 rounded-lg shadow-lg"
  >
    {/* Colorful Instagram SVG */}
    <svg xmlns="http://www.w3.org/2000/svg" className="h-6 w-6 mr-2" viewBox="0 0 448 512">
      <defs>
        <linearGradient id="instagramGradient" x1="0%" y1="0%" x2="100%" y2="100%">
          <stop offset="0%" style={{ stopColor: "#f09433", stopOpacity: 1 }} />
          <stop offset="30%" style={{ stopColor: "#e6683c", stopOpacity: 1 }} />
          <stop offset="60%" style={{ stopColor: "#dc2743", stopOpacity: 1 }} />
          <stop offset="100%" style={{ stopColor: "#bc1888", stopOpacity: 1 }} />
        </linearGradient>
      </defs>
      <path
        fill="url(#instagramGradient)"
        d="M224 141c-63.6 0-115 51.4-115 115s51.4 115 115 115 115-51.4 115-115-51.4-115-115-115zm0 189c-40.9 0-74-33.1-74-74s33.1-74 74-74 74 33.1 74 74-33.1 74-74 74zm146.4-194.7c0 14.9-12 26.9-26.9 26.9h-34.7c-14.9 0-26.9-12-26.9-26.9v-34.7c0-14.9 12-26.9 26.9-26.9h34.7c14.9 0 26.9 12 26.9 26.9v34.7zm76.1 27.2c-1.7-35.3-9.9-66.6-35.7-92.4S364.3 35.2 329 33.5c-39.4-2.2-156.6-2.2-196 0-35.3 1.7-66.6 9.9-92.4 35.7S33.2 115.7 31.5 151c-2.2 39.4-2.2 156.6 0 196 1.7 35.3 9.9 66.6 35.7 92.4s57.1 34 92.4 35.7c39.4 2.2 156.6 2.2 196 0 35.3-1.7 66.6-9.9 92.4-35.7s34-57.1 35.7-92.4c2.2-39.4 2.2-156.6 0-196zm-48.6 245.7c-7.8 19.5-22.9 34.6-42.4 42.4-29.3 11.7-98.9 9-131.4 9s-102.1 2.6-131.4-9c-19.5-7.8-34.6-22.9-42.4-42.4-11.7-29.3-9-98.9-9-131.4s-2.6-102.1 9-131.4c7.8-19.5 22.9-34.6 42.4-42.4 29.3-11.7 98.9-9 131.4-9s102.1-2.6 131.4 9c19.5 7.8 34.6 22.9 42.4 42.4 11.7 29.3 9 98.9 9 131.4s2.6 102.1-9 131.4z"
      />
    </svg>
    <span className="text-sm">@artistic_tales__</span>
  </a>
</div>

      </div>
    </section>
  );
};

export default Numbers;
