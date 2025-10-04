// src/components/SectionWrapper.tsx

import React from 'react';
import { motion } from 'framer-motion';

// Komponentga keladigan propslar uchun tip (interfeys)
interface SectionWrapperProps {
  children: React.ReactNode; // Bu istalgan React elementini qabul qiladi
  className?: string; // Qo'shimcha CSS klasslarini qabul qilish uchun
}

const SectionWrapper = ({ children, className = '' }: SectionWrapperProps) => {
  return (
    // 'div' o'rniga 'motion.div' ishlatamiz. Bu unga animatsiya xususiyatlarini beradi.
    <motion.div
      // Boshlang'ich holat: element ko'rinmas va 50px pastda
      initial={{ opacity: 0, y: 50 }}
      
      // Element ekranga kirganda ishga tushadigan animatsiya: to'liq ko'rinadigan va o'z joyiga qaytadigan
      whileInView={{ opacity: 1, y: 0 }}
      
      // Animatsiya sozlamalari:
      transition={{ 
        duration: 0.7, // Animatsiya davomiyligi (0.7 soniya)
        ease: "easeInOut" // Animatsiyaning silliqlik uslubi
      }}
      
      // Animatsiya qachon ishga tushishini belgilaydi
      viewport={{ 
        once: true, // Animatsiya faqat bir marta (birinchi marta ko'ringanda) ishlaydi
        amount: 0.2 // Elementning 20% qismi ko'ringanda animatsiya boshlanadi
      }}
      
      // Qo'shimcha klasslarni qo'shish uchun
      className={className}
    >
      {children}
    </motion.div>
  );
};

export default SectionWrapper;