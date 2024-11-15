import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
// import Testimonial from './components/Testimonials/Testimonials';
import Hero from './components/Hero/Hero';  
import './App.css';  
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer'; 
import About from './components/About/About'; 
import Contact from './components/Contact/Contact';
import Numbers from './components/Numbers/Numbers';
import Order from './components/Order/Order';
import Gallery from './components/Gallery/Gallery';


const HomePage = () => (
  <div>
    <Hero />
    {/* <Testimonial />   */}
    <Numbers />
    <div>Home Page Content</div>
  </div>
);


// const ContactPage = () => <div>Contact Page Content</div>;

function App() {
  return (
    <Router>
      <div className="flex flex-col min-h-screen">
        <Navbar />
        
        <main className="flex-grow pt-16">
          <Routes>
            <Route path="/" element={<HomePage />} />
            <Route path="/about" element={<About />} />
            <Route path="/gallery" element={<Gallery />} />
            <Route path="/contact" element={<Contact />} />
            <Route path="/Order" element={<Order />} />
          </Routes>
        </main>
        

        <Footer />
      </div>
    </Router>
  );
}

export default App;
