import React from 'react';

const HeroSection = () => {
  return (
    <section className="relative flex min-h-[100vh] items-center justify-center text-center overflow-hidden">
      <div className="pb-20 animate-zoomFadeIn pt-20">
        <h1 className="font-playfair font-bold text-4xl sm:text-6xl md:text-7xl text-[#face52] border-b-2 border-[#face52] pb-6">
          <span className="text-2.5xl sm:text-5xl md:text-6xl block mb-10">WELCOME TO</span>
          <span className="text-2.5xl">YUKTIKULA COMMUNITY</span>
        </h1>
        <p className="text-sm sm:text-base my-4 sm:my-6 md:my-10">
          Official Club of Computer Science and Engineering, Data Science Department.
        </p>
        <a 
          href="https://chat.whatsapp.com/Edf9zptrIb6BhsB51CTJvl" 
          className="inline-block bg-[#face52] text-black font-bold px-5 py-2 rounded-full text-base sm:text-lg transition-all duration-300 hover:-translate-y-1 hover:bg-gradient-to-r hover:from-[#f5c518] hover:to-[#f5a418] hover:shadow-lg"
          target="_blank"
          rel="noopener noreferrer"
        >
          Join Now
        </a>
      </div>
    </section>
  );
};

export default HeroSection;