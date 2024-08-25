import React from "react";
import location from '../assets/images/location.svg';
import message from '../assets/images/message.svg';
import phone from '../assets/images/phone.svg';


function ContactSection(){
    const icon = [
        {
            img: location ,
            des: 'Bhopal , M.P'  ,
        },
        {
            img: message ,
            des: 'gakareharsh@gmail.com' ,
        },
        {
            img: phone ,
            des: '+91 7499725914',
        },
    ]


    return ( 
        <section className="p-20  font-lexend">
            <div className=" flex flex-col items-center">
                <div className="text-center">
                    <h1 className="text-2xl font-bold text-customOrange pb-2">Contact Me</h1>
                    <h1 className=" text-4xl font-semibold text-white pb-6">
                    I Want To  Hear From You
                    </h1>
                    <p className="text-sm text-gray-300 pb-6">
                    Please fill the form on this section to contact with me..
                    </p>
                </div>
                <div className=" w-full flex flex-row justify-around pt-20">
                    <div className="w-[30%] flex flex-col">
                     { icon.map((item , index) => (
                         <div key={index} className="flex flex-row gap-4">
                             <img src={item.img} alt="" className="h-10 w-10"/>
                             <p className="text-xl text-white pb-16">{item.des}</p>
                         </div>
                     ))}
                    </div>
                    <div>
                    <form className="w-full space-y-4 flex flex-col items-center">
          <div className="flex space-x-4">
            <input type="text" placeholder="First Name" className="w-1/2 px-8 py-5 rounded-xl bg-transparent border-2 "/>
            <input type="text" placeholder="Last Name" className="w-1/2 px-8 py-5 rounded-xl bg-transparent border-2 "/>
          </div>
          <div className="flex space-x-4">
          <input type="email" placeholder="Email" className="w-1/2 px-8 py-5 rounded-xl bg-transparent border-2 "/>
            <input type="text" placeholder="Phone Number" className="w-1/2 px-8 py-5 rounded-xl bg-transparent border-2 "/>
          </div>
          <input type="text" placeholder="Subject" className="w-full px-8 py-5 rounded-xl bg-transparent border-2 "/>
          <textarea placeholder="Tell us something..." className="w-full h-40 px-8 py-5 rounded-xl bg-transparent border-2 "></textarea>
          <button type="submit" className="uppercase  bg-customOrange  hover:bg-orange-600 hover:scale-105 text-white px-12 py-4 text-xs  font-bold  rounded-xl transition duration-slow ease-in-out hover:bg-gradient-hover">Send To Me</button>
        </form>
                    </div>
                </div>
            </div>
              
        </section>
    );
}

export default ContactSection;
