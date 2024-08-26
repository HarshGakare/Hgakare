import React from "react";
import pr1 from '../assets/images/pr1.jpg';
import pr2 from '../assets/images/pr2.jpg';
import pr3 from '../assets/images/pr3.jpg';
import pr4 from '../assets/images/pr4.jpg';
import ds1 from '../assets/images/ds1.jpg';
import ds2 from '../assets/images/ds2.jpg';
import ds3 from '../assets/images/ds3.jpg';
import ds4 from '../assets/images/ds4.jpg';







function ProjectSection() {
    return ( 
        <section className="p-20">
<div className="text-center">
  <h1 className="text-2xl font-bold text-customOrange pb-2">Projects</h1>
    <h2 className="font-lexend text-3xl font-bold text-white">My Amazing Works</h2>
    <p className="font-lexends text-gray-400 mt-2 max-w-md mx-auto pb-16">
    Designed an interactive virtual assistant with dynamic features.
    </p>
    <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 max-w-6xl mx-auto">
      <div className="h-96 bg-gray-400 rounded-md overflow-hidden">
        <img className="w-full h-full bg-cover" src={pr3} alt="" />
      </div>
      <div className="h-56 bg-gray-400 rounded-md overflow-hidden">
      <img className="w-full h-full bg-cover" src={ds1} alt="" />
      </div>
      <div className="h-96 bg-gray-400 rounded-md overflow-hidden">
      <img className="w-full h-full bg-cover" src={pr1} alt="" />
      </div>
      <div className="h-56 bg-gray-400 rounded-md overflow-hidden">
      <img className="w-full h-full bg-cover" src={ds2} alt="" />
      </div>
      <div className="h-56 bg-gray-400 rounded-md overflow-hidden">
      <img className="w-full h-full bg-cover" src={ds3} alt="" />
      </div>
      <div className="md:-mt-40  h-96 bg-gray-400 rounded-md overflow-hidden">
      <img className="w-full h-full bg-cover" src={pr2} alt="" />
      </div>
      <div className="h-56 bg-gray-400 rounded-md overflow-hidden">
      <img className="w-full h-full bg-cover" src={ds4} alt="" />
      </div>
      <div className="md:-mt-40 h-96 bg-gray-400 rounded-md overflow-hidden">
      <img className="w-full h-full bg-cover" src={pr4} alt="" />
      </div>

    </div>
  </div>
        </section>
    );
}

export default ProjectSection;