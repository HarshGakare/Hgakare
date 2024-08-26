import React, { useState } from "react";
import bg_img from '../assets/images/hero_bg.jpg';
import Me from '../assets/images/Me.svg';
import logo from '../assets/images/logo.svg';
import { FaBars, FaTimes } from 'react-icons/fa';

function HeroSection() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => setMenuOpen(!menuOpen);

  return (
    <section className="relative">
      <div className="w-full h-screen bg-cover bg-center bg-no-repeat px-4 sm:px-8 md:px-12 lg:px-20 py-8" style={{ backgroundImage: `url(${bg_img})` }}>
        <div className="Navbar flex  sm:flex-row gap-20 md:gap-10 lg:gap-40  justify-content items-center relative">
          <img className="w-20 h-20 sm:w-24 sm:h-24" src={logo} alt="Logo" />
          <button className="block sm:hidden text-white text-3xl" onClick={toggleMenu}>
            {menuOpen ? <FaTimes /> : <FaBars />}
          </button>
          <div className={`absolute top-20 left-0 w-full bg-gray-800 sm:bg-transparent sm:static sm:flex sm:flex-row sm:gap-8 text-white font-bold text-sm sm:text-md md:text-lg transition-transform duration-300 ease-in-out ${menuOpen ? 'block' : 'hidden'} sm:block`}>
            <div className="flex flex-col sm:flex-row gap-4 sm:gap-8 items-center sm:items-center">
              <a href="#home" className="block py-2 sm:py-0 hover:text-customOrange">Home</a>
              <a href="#about" className="block py-2 sm:py-0 hover:text-customOrange">About</a>
              <a href="#skills" className="block py-2 sm:py-0 hover:text-customOrange">Skills</a>
              <a href="#projects" className="block py-2 sm:py-0 hover:text-customOrange">Projects</a>
              <a href="#education" className="block py-2 sm:py-0 hover:text-customOrange">Education</a>
            </div>
          </div>
          <button className="font-lexend py-2 px-6 sm:py-3 sm:px-6 border-2 border-customOrange hover:bg-customOrange hover:scale-105 rounded-lg text-white text-xs sm:text-sm font-bold mt-4 sm:mt-0">
            Download CV
          </button>
        </div>
        <div className="Hero flex flex-col lg:flex-row justify-between items-center font-lexend text-center md:text-left mt-8">
          <div className="w-full lg:w-2/3 flex flex-col items-center md:items-start">
            <h1 className="text-3xl md:text-4xl lg:text-5xl font-bold text-customOrange pb-2">Hello, I’m</h1>
            <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold text-white pb-6">Harsh Gakare</h1>
            <h1 className="text-lg md:text-xl lg:text-2xl font-semibold text-white pb-6">A Creative Designer making Websites</h1>
            <p className="w-2/3 text-sm md:text-base lg:text-lg text-gray-300 pb-8">I’m a creative designer specializing in crafting visually compelling and highly functional websites, delivering seamless and engaging digital experiences.</p>
            <button className="font-lexend py-2 px-6 sm:py-3 sm:px-8 bg-customOrange hover:bg-orange-600 hover:scale-105 rounded-lg text-white text-xs sm:text-sm font-bold">About Me</button>
          </div>
          <div className="w-full md:w-[60%] lg:w-[32.5%] flex justify-center md:justify-end mt-6 md:mt-0">
            <img className="w-[88%] md:w-[60rem] lg:w-full" src={Me} alt="Me" />
          </div>
        </div>
      </div>
    </section>
  );
}

export default HeroSection;
