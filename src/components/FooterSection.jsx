import React from 'react';
import logo from '../assets/images/logo.svg'; 
import linkedin from '../assets/images/linkedin.svg'; 
import twitter from '../assets/images/twitter.svg';
import insta from '../assets/images/insta.svg'; 
import discord from '../assets/images/discord.svg'; 

function FooterSection() {
    return (
        <footer className="p-4 md:p-8 lg:p-20">
            <div className="footer flex flex-col md:flex-row justify-between items-center border-t-2 pt-4 gap-4 md:gap-0">
                <img className="w-20 h-20" src={logo} alt="Logo" />
                
                <div className="items font-lexend flex flex-row gap-4 md:gap-8 text-white font-bold text-sm md:text-md">
                    <a href="#about" className="hover:underline">About</a>
                    <a href="#skills" className="hover:underline">Skills</a>
                    <a href="#projects" className="hover:underline">Projects</a>
                    <a href="#education" className="hover:underline">Education</a>
                </div>
                
                <div className="flex flex-row gap-4 mt-4 md:mt-0">
                    <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer">
                        <img src={linkedin} alt="LinkedIn" className="w-6 h-6 md:w-8 md:h-8" />
                    </a>
                    <a href="https://discord.com" target="_blank" rel="noopener noreferrer">
                        <img src={discord} alt="Discord" className="w-6 h-6 md:w-8 md:h-8" />
                    </a>
                    <a href="https://twitter.com" target="_blank" rel="noopener noreferrer">
                        <img src={twitter} alt="Twitter" className="w-6 h-6 md:w-8 md:h-8" />
                    </a>
                    <a href="https://instagram.com" target="_blank" rel="noopener noreferrer">
                        <img src={insta} alt="Instagram" className="w-6 h-6 md:w-8 md:h-8" />
                    </a>
                </div>
            </div>
        </footer>
    );
}

export default FooterSection;
