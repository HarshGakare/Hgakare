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
        <section className="p-20 font-lexend">
            <div className="w-full flex flex-row  justify-around items-center pt-10">
                <div className="w-[42%] pt-20">
                    <h1 className="text-2xl font-bold text-customOrange pb-2">Design is Life</h1>
                    <h1 className="w-[100%] text-4xl font-semibold text-white pb-8">
                        I Develop Skills Regularly To Keep Me Updated
                    </h1>
                    <p className="w-[92%] text-lg text-gray-300 pb-16">
                    I am dedicated to continually enhancing my skills to stay ahead in the ever-evolving design landscape. Through ongoing learning and practice, I ensure that my design work is not only innovative but also aligned with the latest trends and technologies. This commitment allows me to deliver exceptional results and bring fresh, impactful solutions to every project.
                    </p>
                    <div className="w-4/5">
                        {skills.map((item, index) => (
                            <div key={index} className="mb-4">
                                <div className="flex items-center mb-2">
                                    <span className="text-white font-semibold ">{item.title} -</span>
                                    <span className="text-red-500 font-bold ml-2">{item.percentage}%</span>
                                </div>
                                <div className="w-full bg-white rounded-full h-2">
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
                <img className="w-[40%] h-[35rem]" src={char} alt="Character Illustration" />
            </div>
        </section>
    );
}

export default SkillSection;
