import React from "react";
import bg_img from '../assets/images/hero_bg.jpg';
import Me from '../assets/images/Me.svg';
import logo from '../assets/images/logo.svg';
import hero_char from '../assets/images/hero_char.svg';


function HeroSection(){

  return( 
    <section className="">
       <div className="w-full h-screen bg-cover bg-center bg-no-repeat px-20 py-8" style={{ backgroundImage: `url(${bg_img})` }} >
        <div className="Navbar flex flex-row justify-between items-center">
            <img className="w-24 h-24"  src={logo} alt="" />
            <div className="items font-lexend flex flex-row gap-16 text-white font-bold text-md">
                <a href="#home">Home</a>
                <a href="#about">About</a>
                <a href="#skills">Skills</a>
                <a href="#projects">Projects</a>
                <a href="#education">Education</a>
            </div>
            <button className="font-lexend py-3 px-8 border-2 border-customOrange hover:bg-customOrange hover:scale-105 rounded-lg text-white text-xs font-bold" >Download CV</button>
        </div>
        <div className="Hero  flex flex-row justify-between items-center font-lexend">
            <div className="w-2/3" >
                <h1 className="text-2xl font-bold text-customOrange pb-2">Hello, I’m</h1>
                <h1 className="text-6xl font-bold text-white pb-6">Harsh Gakare</h1>
                <h1 className="text-md font-semibold text-white pb-6">A Creative Designer  maek Websites </h1>
                <p className="w-[42%] text-sm text-gray-300 pb-8"> I’m a creative designer specializing in crafting visually compelling and highly functional websites, delivering seamless and engaging digital experiences.</p>
                <button className="font-lexend py-3 px-8   bg-customOrange hover:bg-orange-600 hover:scale-105 rounded-lg text-white text-xs font-bold"  >About Me</button>
            </div>
            <div className="w-[31.7%]">
                <img src={Me} alt="" />
            </div>
        </div>

        </div>


    </section>
  );
}

export default HeroSection;