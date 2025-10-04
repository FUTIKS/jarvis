// src/components/Footer.tsx

import React from 'react';
import { Phone, Mail, MapPin } from 'lucide-react';
import { FaTelegramPlane, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const slogan = "Biz Faqat Yo'llanma Bermaymiz. Biz Kelajakni Quramiz.";

    // Toshkent xaritasi uchun asl iframe kodi
    const tashkentMapIframeSrc = "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6002.556081383549!2d69.216189!3d41.215711!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDHCsDEyJzU2LjYiTiA2OcKwMTInNTguMyJF!5e0!3m2!1sru!2s!4v1755785003162!5m2!1sru!2s";

    // Andijon xaritasi uchun siz bergan iframe kodi
    const andijanMapIframeSrc = "https://www.google.com/maps/embed?pb=!1m13!1m8!1m3!1d6044.063628058121!2d72.354371!3d40.761325!3m2!1i1024!2i768!4f13.1!3m2!1m1!2zNDDCsDQ1JzQwLjgiTiA3MsKwMjEnMTUuNyJF!5e0!3m2!1sru!2s!4v1757595476005!5m2!1sru!2s";

    return (
        <footer className="bg-black border-t border-gray-800/50 pt-6 pb-2 text-white"> {/* Footerning umumiy yuqori va pastki qora joylari kamaytirildi */}
            <div className="container mx-auto px-4">
                <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 mb-6"> {/* Umumiy gap va margin kamaytirildi */}

                    {/* 1. Kompaniya ma'lumotlari va ijtimoiy tarmoqlar */}
                    <div className="lg:col-span-4 flex flex-col items-center lg:items-start text-center lg:text-left">
                        <div className="flex items-center mb-3">
                            <img
                                src="/logo.png"
                                alt="Go Korea Logo"
                                className="h-10 w-10 rounded-full object-cover"
                            />
                            <span className="ml-2 text-xl font-bold">Go Korea</span>
                        </div>
                        <p className="max-w-xs text-gray-400 text-sm mb-4">{slogan}</p>
                        <div className="flex space-x-4">
                            <a href="https://t.me/GoKoreaTashkent" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaTelegramPlane size={22} />
                            </a>
                            <a href="https://www.instagram.com/gokorea.premium?igsh=Z3JiOTE1M3A5c3Bi" target="_blank" rel="noopener noreferrer" className="text-gray-400 hover:text-white transition-colors">
                                <FaInstagram size={22} />
                            </a>
                        </div>
                    </div>

                    {/* 2. Aloqa ma'lumotlari */}
                    <div className="lg:col-span-4">
                        <h3 className="text-base font-semibold mb-2 text-center lg:text-left">Aloqa</h3>
                        <ul className="space-y-2 text-center lg:text-left">
                            {/* Toshkent Ofisi */}
                            <li>
                                <h4 className="text-sm font-semibold text-korea-blue mb-0.5">Toshkent Ofisi</h4>
                                <div className="flex items-center justify-center lg:justify-start text-xs">
                                    <MapPin className="w-3 h-3 mr-1.5 text-korea-blue flex-shrink-0" />
                                    <span className="text-gray-300">Toshkent sh., Sergeli tumani, Yangi Sergeli ko'chasi</span>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start mt-0.5 text-xs">
                                    <Phone className="w-3 h-3 mr-1.5 text-korea-blue flex-shrink-0" />
                                    <a href="tel:+998979481515" className="text-gray-300 hover:text-white transition-colors">+998 97 948 15 15</a>
                                </div>
                                {/* Emailni Toshkent Ofisi ostiga qo'yish */}
                                <div className="flex items-center justify-center lg:justify-start mt-0.5 text-xs">
                                    <Mail className="w-3 h-3 mr-1.5 text-korea-blue flex-shrink-0" />
                                    <a href="mailto:gokorea.visa@gmail.com" className="text-gray-300 hover:text-white transition-colors">gokorea.visa@gmail.com</a>
                                </div>
                            </li>

                            {/* Andijon Ofisi - ENDI 3 SM DAN KO'PROQ PASTGA SILJITILDI (mt-48 = 192px) */}
                            <li className="mt-60"> {/* mt-48 qo'shildi, bu 192 piksel degani. Bu 3 sm dan sezilarli darajada ko'proq va vizual farqni ta'minlaydi. */}
                                <h4 className="text-base font-semibold text-korea-blue mb-100">Andijon Ofisi</h4>
                                <div className="flex items-center justify-center lg:justify-start text-sm">
                                    <MapPin className="w-4 h-4 mr-2 text-korea-blue flex-shrink-0" />
                                    <span className="text-gray-300">Andijon sh., Amir Temur ko'chasi, 5-uy</span>
                                </div>
                                <div className="flex items-center justify-center lg:justify-start mt-1 text-sm">
                                    <Phone className="w-4 h-4 mr-2 text-korea-blue flex-shrink-0" />
                                    <a href="tel:+998976481515" className="text-gray-300 hover:text-white transition-colors">+998 97 648 15 15</a>
                                </div>
                            </li>
                        </ul>
                    </div>

                    {/* 3. Xarita - Ikkala ofis uchun alohida xaritalar, balandligi moslashtirildi */}
                    <div className="lg:col-span-4 flex flex-col space-y-4">
                        {/* Toshkent Ofisi Xaritasi */}
                        <div>
                            <h3 className="text-base font-medium mb-1.5 text-center lg:text-left">Toshkent Ofisi Xaritasi</h3>
                            {/* Xarita balandligi oldingi maqbulroq holatga qaytarildi */}
                            <div className="rounded-lg overflow-hidden border border-gray-700/50 h-24 sm:h-28 lg:h-32">
                                <iframe
                                    src={tashkentMapIframeSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>

                        {/* Andijon Ofisi Xaritasi */}
                        <div>
                            <h3 className="text-base font-medium mb-1.5 text-center lg:text-left">Andijon Ofisi Xaritasi</h3>
                            {/* Xarita balandligi oldingi maqbulroq holatga qaytarildi */}
                            <div className="rounded-lg overflow-hidden border border-gray-700/50 h-24 sm:h-28 lg:h-32">
                                <iframe
                                    src={andijanMapIframeSrc}
                                    width="100%"
                                    height="100%"
                                    style={{ border: 0 }}
                                    allowFullScreen=""
                                    loading="lazy"
                                    referrerPolicy="no-referrer-when-downgrade"
                                ></iframe>
                            </div>
                        </div>
                    </div>
                </div>

                {/* Mualliflik huquqi */}
                <div className="border-t border-gray-800/50 pt-4 text-center text-gray-500 text-sm">
                    <p>&copy; {new Date().getFullYear()} Go Korea. Barcha huquqlar himoyalangan.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;