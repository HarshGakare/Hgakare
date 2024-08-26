import React from "react";
import char from '../assets/images/skill_img.svg';

function SkillSection() {

    const skills = [
        {
            title: "Figma",
            percentage: 80,
        },
        {
            title: "Webflow",
            percentage: 70,
        },
        {
            title: "Framer",
            percentage: 40,
        },
    ];

    return (
        <section className="pt-20 md:pt=0 p-4 sm:p-8 lg:p-20 font-lexend">
            <div className="flex  flex-col-reverse lg:flex-row gap-10 lg:gap-20 items-center">
                <img 
                    className="w-full lg:w-1/2 h-auto lg:h-[35rem] object-cover mb-8 lg:mb-0" 
                    src={char} 
                    alt="Character Illustration" 
                />
                <div className="w-full lg:w-1/2">
                    <h1 className="text-2xl font-bold text-customOrange pb-2 text-center lg:text-left">Design is Life</h1>
                    <h1 className="text-3xl sm:text-4xl font-semibold text-white pb-4 text-center lg:text-left">
                        I Develop Skills Regularly To Keep Me Updated
                    </h1>
                    <p className="text-base sm:text-lg text-gray-300 pb-8 text-center lg:text-left">
                        I am dedicated to continually enhancing my skills to stay ahead in the ever-evolving design landscape. Through ongoing learning and practice, I ensure that my design work is not only innovative but also aligned with the latest trends and technologies. This commitment allows me to deliver exceptional results and bring fresh, impactful solutions to every project.
                    </p>
                    <div>
                        {skills.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex items-center mb-2">
                                    <span className="text-white font-semibold">{item.title} -</span>
                                    <span className="text-red-500 font-bold ml-2">{item.percentage}%</span>
                                </div>
                                <div className="w-full bg-gray-300 rounded-full h-2">
                                    <div
                                        className="bg-red-500 h-2 rounded-full"
                                        style={{ width: `${item.percentage}%` }}
                                    >
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}

export default SkillSection;
