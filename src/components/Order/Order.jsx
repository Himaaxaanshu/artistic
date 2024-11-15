import React, { useState } from 'react';
import { Link} from 'react-router-dom';
import OrderPage from '../../assests/img/OrderPage.jpg'

const Order = () => {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    purpose: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prevData) => ({
      ...prevData,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Handle form submission (e.g., send data to the server)
    console.log(formData);
  };

  return (
    <div className="flex flex-col lg:flex-row h-screen overflow-hidden">
      <div className="flex-1 flex items-center justify-center bg-white lg:p-0 relative bg-cover bg-center" style={{ backgroundImage: `url(${OrderPage})` }}>
        <div className="relative w-full h-full lg:h-full overflow-hidden flex items-center justify-center">
          <h1 className="absolute top-20 lg:top-28 left-1/2 transform -translate-x-1/2 text-6xl sm:text-4xl lg:text-5xl font-serif font-bold z-10 whitespace-nowrap bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
            <Link to="/" className="text-5xl font-extrabold text-gray-100">
              Artistic Tales
            </Link>
            <div className="text-sm text-gray-100">by Jidnyasa</div>
          </h1>
        </div>
      </div>

      <div className="flex-1 flex flex-col items-center justify-center bg-white p-4 lg:p-8">
        <h2 className="font-semibold text-2xl lg:text-3xl mb-4 text-center bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 bg-clip-text text-transparent">
          Fill out the Order Form
        </h2>

        <form onSubmit={handleSubmit} className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg mx-auto flex flex-col items-center">
          <input
            type="text"
            name="name"
            value={formData.name}
            onChange={handleChange}
            placeholder="Your Name"
            className="form-control w-full max-w-xs p-2 mb-4 border border-gray-300 rounded-full"
          />

          <input
            type="email"
            name="email"
            value={formData.email}
            onChange={handleChange}
            placeholder="Your Email"
            className="form-control w-full max-w-xs p-2 mb-4 border border-gray-300 rounded-full"
          />

          <input
            type="tel"
            name="phone"
            value={formData.phone}
            onChange={handleChange}
            placeholder="Phone Number"
            className="form-control w-full max-w-xs p-2 mb-4 border border-gray-300 rounded-full"
          />

          <select
            name="purpose"
            value={formData.purpose}
            onChange={handleChange}
            className="form-control w-full max-w-xs p-2 mb-4 border border-gray-300 rounded-full"
          >
            <option value="">Select Purpose</option>
            <option value="inquiry">Inquiry</option>
            <option value="order">Place an Order</option>
            <option value="support">Support</option>
            <option value="feedback">Feedback</option>
          </select>

          <button
            type="submit"
            className="bg-gradient-to-r from-indigo-600 via-purple-600 to-pink-600 text-white px-12 py-2 rounded-full w-72"
          >
            Submit Order
          </button>
        </form>
      </div>
    </div>
  );
};

export default Order;
