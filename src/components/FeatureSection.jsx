import React from "react";
import target from '../assets/images/target.svg';
import target_ng from '../assets/images/target_ng.svg';
import light from '../assets/images/light.svg';
import light_bg from '../assets/images/light_bg.svg';
import brush from '../assets/images/brush.svg';
import brush_bg from '../assets/images/brush_bg.svg';



function FeatureSection() {
    
    const elem = [
        {
            img1: target_ng ,
            img2: target ,
            title: "Target",
            des:"My target is to master Figma for designing intuitive interfaces, use Webflow for building responsive websites, and leverage Framer for creating interactive prototypes.",
            img2Top: '40px', 
        img2Left: '38px',
        },
        {
            img1: light_bg ,
            img2: light ,
            title: "Idea",
            des:"My idea is to craft innovative and user-friendly digital solutions that combine aesthetic appeal with functional excellence.",
            img2Top: '34px', 
            img2Left: '38px',
        },
        {
            img1: brush_bg ,
            img2: brush ,
            title: "Skills",
            des:"Designer with expertise in Figma, Webflow, and Framer, specializing in creating engaging user interfaces.",
            img2Top: '40px', 
            img2Left: '46px',
        },
    ]
  

    return ( 
        <section className="p-20">
            <div className="w-full flex gap-10">
                {elem.map((item, index) => (
                <div key={index} className="w-full flex flex-col items-center "> 
                    <div className="relative ">
                        <img src={item.img1} alt="" />
                        <img className="absolute " src={item.img2} alt=""  style={{
                                    top: item.img2Top,
                                    left: item.img2Left,
                                }}/>
                    </div>
                    <h1 className=" pt-4 text-2xl font-lexend font-bold text-white pb-6">{item.title} </h1>
                    <p className="w-[60%] text-md text-gray-300 text-center">{item.des} </p>
                </div>

                ))}
                
            </div>
        </section>
    );
}

export default FeatureSection;