import React from "react";
import char from "../assets/images/designer_img.svg";

function AboutSection() {
    return (
        <section className="p-4 sm:p-8 lg:p-20 font-lexend">
            <div className="flex flex-col lg:flex-row gap-10 items-center">
                {/* Content section */}
                <div className="w-full lg:w-1/2 pt-8 lg:pt-20">
                    <h1 className="text-2xl font-bold text-customOrange pb-2 text-center lg:text-left">I’m a Designer</h1>
                    <h1 className="text-3xl lg:text-4xl font-semibold text-white pb-4 text-center lg:text-left">I Can Design Anything You Want</h1>
                    <p className="text-lg text-gray-300 pb-8 text-center lg:text-left">
                        As a designer, I specialize in creating visually stunning and highly functional user interfaces. My approach blends creativity with usability, ensuring that each design not only looks great but also provides an intuitive user experience. Whether it’s a website, mobile app, or branding project, I am dedicated to crafting designs that meet your needs and exceed your expectations.
                    </p>
                    <div className="flex justify-center lg:justify-start">
                        <button className="font-lexend py-3 px-8 bg-customOrange hover:bg-orange-600 hover:scale-105 rounded-lg text-white text-xs font-bold">
                            Hire Me
                        </button>
                    </div>
                </div>
                {/* Image section */}
                <img className="w-full lg:w-1/2 h-auto lg:h-[35rem] object-cover" src={char} alt="Designer Illustration" />
            </div>
        </section>
    );
}

export default AboutSection;
