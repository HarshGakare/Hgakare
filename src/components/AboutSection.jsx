import React from "react";
import char from "../assets/images/designer_img.svg";

function AboutSection() {

    return ( 
        <section className="p-20 font-lexend">
            <div className="w-full flex flex-row gap-10 items-center" >
             <img className="w-1/2 h-[35rem]" src={char} alt="" />
            <div className="w-1/2 pt-20" >
                <h1 className="text-2xl font-bold text-customOrange pb-2">I’m a Designer</h1>
                <h1 className="text-4xl font-semibold text-white pb-8">I Can Design Anything You Want</h1>
                <p className="w-[84%] text-lg text-gray-300 pb-16"> As a designer, I specialize in creating visually stunning and highly functional user interfaces. My approach blends creativity with usability, ensuring that each design not only looks great but also provides an intuitive user experience. Whether it’s a website, mobile app, or branding project, I am dedicated to crafting designs that meet your needs and exceed your expectations.</p>
                <button className="font-lexend py-3 px-8  bg-customOrange  hover:bg-orange-600 hover:scale-105 rounded-lg text-white text-xs font-bold">Hire Me</button>
            </div>
            </div>
            
        </section>
    );
}

export default AboutSection;
