import React from "react";
import location from '../assets/images/location.svg';
import message from '../assets/images/message.svg';
import phone from '../assets/images/phone.svg';

function ContactSection() {
    const icon = [
        {
            img: location,
            des: 'Bhopal, M.P',
        },
        {
            img: message,
            des: 'gakareharsh@gmail.com',
        },
        {
            img: phone,
            des: '+91 7499725914',
        },
    ];

    return (
        <section className="p-4 sm:p-8 lg:p-20 font-lexend">
            <div className="flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-customOrange pb-2">Contact Me</h1>
                    <h1 className="text-3xl sm:text-4xl font-semibold text-white pb-2 sm:pb-6">
                        I Want To Hear From You
                    </h1>
                    <p className="text-sm sm:text-base text-gray-300 pb-6">
                        Please fill out the form in this section to contact me.
                    </p>
                </div>
                <div className="w-full flex flex-col sm:flex-row sm:justify-between lg:justify-around pt-10">
                    <div className="w-full sm:w-1/2 lg:w-1/3 flex flex-col sm:gap-6 pb-10 sm:pb-0">
                        {icon.map((item, index) => (
                            <div key={index} className="flex items-center gap-4 mb-4 sm:mb-0">
                                <img src={item.img} alt="" className="h-8 w-8" />
                                <p className="text-lg text-white">{item.des}</p>
                            </div>
                        ))}
                    </div>
                    <div className="w-full lg:w-1/2">
                        <form className="w-full space-y-4 flex flex-col items-center">
                            <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
                                <input
                                    type="text"
                                    placeholder="First Name"
                                    className="w-full sm:w-1/2 px-4 py-3 mb-4 sm:mb-0 rounded-xl bg-transparent border-2 border-gray-300"
                                />
                                <input
                                    type="text"
                                    placeholder="Last Name"
                                    className="w-full sm:w-1/2 px-4 py-3 rounded-xl bg-transparent border-2 border-gray-300"
                                />
                            </div>
                            <div className="flex flex-col sm:flex-row sm:space-x-4 w-full">
                                <input
                                    type="email"
                                    placeholder="Email"
                                    className="w-full sm:w-1/2 px-4 py-3 mb-4 sm:mb-0 rounded-xl bg-transparent border-2 border-gray-300"
                                />
                                <input
                                    type="text"
                                    placeholder="Phone Number"
                                    className="w-full sm:w-1/2 px-4 py-3 rounded-xl bg-transparent border-2 border-gray-300"
                                />
                            </div>
                            <input
                                type="text"
                                placeholder="Subject"
                                className="w-full px-4 py-3 rounded-xl bg-transparent border-2 border-gray-300"
                            />
                            <textarea
                                placeholder="Tell us something..."
                                className="w-full h-40 px-4 py-3 rounded-xl bg-transparent border-2 border-gray-300"
                            />
                            <button
                                type="submit"
                                className="uppercase bg-customOrange hover:bg-orange-600 hover:scale-105 text-white px-8 py-3 text-xs font-bold rounded-xl transition duration-300 ease-in-out"
                            >
                                Send To Me
                            </button>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default ContactSection;
