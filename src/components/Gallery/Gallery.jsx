import React from 'react'
import AboutImg from './../../assests/img/AboutImg.jpg'

const Gallery = () => {
  // Using AboutImg for all the images
  const images = [
    AboutImg,
    AboutImg,
    AboutImg,
    AboutImg,
    AboutImg,
    AboutImg,
  ]

  return (
    <div className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 py-16">
      <div className="container mx-auto px-6 text-center text-white">
        <h2 className="text-5xl font-bold leading-tight mb-4">
          Explore My Art
        </h2>
        <p className="text-xl md:text-2xl font-light mb-8 max-w-2xl mx-auto">
          A curated collection of my artwork, showcasing creativity and inspiration through unique visual experiences.
        </p>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {images.map((image, index) => (
            <div key={index} className="relative group overflow-hidden rounded-lg shadow-xl transform transition duration-500 hover:scale-105">
              <img
                src={image}
                alt={`Art piece ${index + 1}`}
                className="w-full h-72 md:h-80 object-cover transition duration-500 group-hover:opacity-80"
              />
              <div className="absolute inset-0 bg-black bg-opacity-40 opacity-0 group-hover:opacity-100 flex items-center justify-center text-white text-lg font-semibold transition-opacity">
                <span>View Details</span>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  )
}

export default Gallery
