import React from 'react';
import logo from '../assets/images/logo.svg'; 
import linkedin from '../assets/images/linkedin.svg'; 
import twitter from '../assets/images/twitter.svg';
import insta from '../assets/images/insta.svg'; 
import discord from '../assets/images/discord.svg'; 

 


function FooterSection() {
    return (
        <footer className="p-20">
            <div className="footer flex flex-row justify-between items-center border-b-2 pb-4">
        <img className="w-20 h-20"  src={logo} alt="" />
        <div className="items font-lexend flex flex-row gap-16 text-white font-bold text-md ">
            <a href="#about">About</a>
            <a href="#skills">Skills</a>
            <a href="#projects">Projects</a>
            <a href="#education">Education</a>
        </div>
        <div className="flex flex-row gap-6">
            <img src={linkedin} alt="" />
            <img src={discord} alt="" />
            <img src={twitter} alt="" />
            <img src={insta} alt="" />
            
        </div>
    </div>
        </footer>
       
    );
}

export default FooterSection;
