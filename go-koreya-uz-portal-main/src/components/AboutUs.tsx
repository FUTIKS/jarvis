// src/components/AboutUs.tsx

import React, { useState, useCallback } from 'react';
import Particles from "react-tsparticles";
import { loadFull } from "tsparticles";

import { Parallax } from 'react-scroll-parallax';

// Jamoa a'zolari ma'lumotlari
const teamMembers = [
    { name: 'Sobirov Shoxislombek', role: 'Asoschi va Bosh Direktor', image: '/logo.png' },
    { name: 'Ibragimov Jasurbek', role: 'Co-asoschi va direktor', image: '/logo.png' },
    { name: 'Ergashov Elyorbek', role: 'Admin', image: '/logo.png' },
    { name: 'Abdunabiyeva Shaxnoza', role: 'Admin', image: '/logo.png' },
    { name: 'Tólanova Mubinaxon ', role: 'Admin', image: '/logo.png' },
    { name: 'Ibragimov Bahrombek', role: 'Dasturchi', image: '/logo.png' },
];

const AboutUs = () => {
  const [showToast, setShowToast] = useState(false);

  const handleCardClick = () => {
    if (showToast) return;
    setShowToast(true);
    setTimeout(() => {
      setShowToast(false);
    }, 3000);
  };

  const particlesInit = useCallback(async (engine: any) => {
    await loadFull(engine);
  }, []);

  return (
    <div className="relative container mx-auto py-20 text-white overflow-hidden">
      {/* Particles animatsiyasi o'zgarishsiz qoldi */}
      <Parallax speed={-10} className="absolute top-0 left-0 w-full h-full z-0">
        <Particles
          id="tsparticles"
          init={particlesInit}
          options={{
            fullScreen: { enable: false },
            background: {
              color: { value: "transparent" },
            },
            particles: {
              links: { enable: false },
              move: {
                direction: "none",
                enable: true,
                outModes: {
                  default: "bounce",
                },
                random: true,
                speed: 1,
                straight: false,
              },
              number: {
                density: {
                  enable: true,
                  area: 800,
                },
                value: 80,
              },
              opacity: {
                value: 0.5,
              },
              shape: {
                type: "circle",
              },
              size: {
                value: { min: 1, max: 5 },
              },
            },
            detectRetina: true,
          }}
        />
      </Parallax>

      <div className="relative z-10">
        <div className="text-center mb-16">
            <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4 leading-tight">
                <span className="text-white">Biz Shunchaki Agentlik Emasmiz — </span>
                <br />
                <span className="text-white">Biz Sizning Kelajagingizga Yo'llanmamiz</span>
            </h2>
        </div>

        {/* Statistik ko'rsatkichlar - ramkalar olib tashlandi, raqamlar qizil va ingichkaroq qilindi */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 mb-16 text-center">
            {/* 6+ Yillik tajriba */}
            <div className="flex flex-col items-center justify-center p-4">
                <p className="text-4xl md:text-5xl font-light text-korea-red font-heading drop-shadow-md">6+</p>
                <p className="text-sm md:text-base text-gray-400 font-inter mt-2">Yillik tajriba</p>
            </div>
            {/* 500+ Muvaffaqiyatli talaba */}
            <div className="flex flex-col items-center justify-center p-4">
                <p className="text-4xl md:text-5xl font-light text-korea-red font-heading drop-shadow-md">500+</p>
                <p className="text-sm md:text-base text-gray-400 font-inter mt-2">Muvaffaqiyatli talaba</p>
            </div>
            {/* 98% Viza tasdiqlash */}
            <div className="flex flex-col items-center justify-center p-4">
                <p className="text-4xl md:text-5xl font-light text-korea-red font-heading drop-shadow-md">98%</p>
                <p className="text-sm md:text-base text-gray-400 font-inter mt-2">Viza tasdiqlash</p>
            </div>
            {/* 50+ Hamkor universitet */}
            <div className="flex flex-col items-center justify-center p-4">
                <p className="text-4xl md:text-5xl font-light text-korea-red font-heading drop-shadow-md">50+</p>
                <p className="text-sm md:text-base text-gray-400 font-inter mt-2">Hamkor universitet</p>
            </div>
        </div>

        <div className="text-center mb-12">
          <h2 className="text-4xl font-heading font-bold text-white">Jamoamiz Bilan Tanishing</h2>
        </div>

        {/* Jamoa a'zolari - o'zgarishsiz qoldi */}
        <div className="grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-6 gap-6 md:gap-8 place-items-center">
          {teamMembers.map((member, index) => (
            <button key={index} onClick={handleCardClick} className="text-center group transition-transform duration-300 hover:scale-105 relative z-10 flex flex-col items-center">
              <img
                src={member.image}
                alt={member.name}
                className="w-20 h-20 md:w-24 md:h-24 lg:w-28 lg:h-28 rounded-full mb-3 bg-gray-700 object-cover border-2 border-transparent group-hover:border-korea-blue transition-colors duration-300"
              />
              <h4 className="text-sm md:text-base lg:text-lg font-bold text-gray-50 font-heading text-center leading-tight">{member.name}</h4>
              <p className="text-xs md:text-sm text-gray-400 font-inter text-center mt-1">{member.role}</p>
            </button>
          ))}
        </div>
      </div>

      <div className={`toast-notification ${showToast ? 'show' : ''}`}>
        Texnik sozlamalar olib borilmoqda...
      </div>
    </div>
  );
};

export default AboutUs;