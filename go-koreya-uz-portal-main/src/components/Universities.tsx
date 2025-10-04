// src/components/Universities.tsx
import React, { useState, useCallback } from 'react';
import { useInView } from 'react-intersection-observer';
import { Swiper, SwiperSlide } from 'swiper/react';
import { Navigation, Pagination, Autoplay, EffectFade } from 'swiper/modules';
import 'swiper/css';
import 'swiper/css/navigation';
import 'swiper/css/pagination';
import 'swiper/css/effect-fade';
import ConsultationModal from './ConsultationModal';

type University = {
  id: number;
  name: string;
  shortDescription: string;
  longDescription: string;
  mainImage: string;
  sliderImages: string[];
  websiteUrl: string;
  ranking: { world: string; korea: string };
  facts: { founded: string; students: string; location: string };
  strongFields: string[];
};
const universities: University[] = [
    {
    id: 1,
    name: 'Seoul National University',
    shortDescription: 'Janubiy Koreyaning eng nufuzli va №1 raqamli universiteti.',
    longDescription: "SNU - bu shunchaki universitet emas, bu kelajak liderlari yetishib chiqadigan elita maskani. Dunyoning eng kuchli 30 ta universiteti qatorida turadigan bu dargohda ta'lim olish sizning kelajagingiz uchun eng katta investitsiyadir.",
    mainImage: '/images/snu-main.jpg',
    sliderImages: ['/images/snu-slider-1.jpg', '/images/snu-slider-2.jpg', '/images/snu-slider-3.jpg'],
    websiteUrl: 'https://en.snu.ac.kr/',
    ranking: { world: '29', korea: '1' },
    facts: { founded: '1946', students: '28,000+', location: 'Seul, Gwanak' },
    strongFields: ['Muhandislik', 'Biznes Boshqaruvi', 'Tibbiyot'],
  },
  {
    id: 2,
    name: 'KAIST',
    shortDescription: 'Ilm-fan va texnologiyalar sohasida dunyoning yetakchi oliygohi.',
    longDescription: "Agar sizning maqsadingiz dunyoni o'zgartiradigan texnologiyalar yaratish bo'lsa, KAIST siz uchun. 'Koreyaning MIT'si' deb nom olgan bu universitet innovatsiyalar va startaplar beshigidir. Bu yerda g'oyalar haqiqatga aylanadi.",
    mainImage: '/images/kaist-main.jpg',
    sliderImages: ['/images/kaist-slider-1.jpg', '/images/kaist-slider-2.jpg', '/images/kaist-slider-3.jpg'],
    websiteUrl: 'https://www.kaist.ac.kr/en/',
    ranking: { world: '42', korea: '2' },
    facts: { founded: '1971', students: '11,000+', location: 'Daejeon' },
    strongFields: ['Sun\'iy Intellekt', 'Robototexnika', 'Biom muhandislik'],
  },
  {
    id: 3,
    name: 'Yonsei University',
    shortDescription: "Koreyaning eng qadimiy va nufuzli xususiy universitetlaridan biri.",
    longDescription: "Yonsei - bu an'analar va zamonaviylik uyg'unlashgan joy. Koreyaning eng obro'li 'SKY' uchligiga kiruvchi bu universitet nafaqat kuchli ta'lim, balki unutilmas talabalik davrini ham taqdim etadi. Xalqaro muhit va go'zal kampus sizni kutmoqda.",
    mainImage: '/images/yonsei-main.jpg',
    sliderImages: ['/images/yonsei-slider-1.jpg', '/images/yonsei-slider-2.jpg', '/images/yonsei-slider-3.jpg'],
    websiteUrl: 'https://www.yonsei.ac.kr/en_sc/',
    ranking: { world: '73', korea: '3' },
    facts: { founded: '1885', students: '38,000+', location: 'Seul, Sinchon' },
    strongFields: ['Xalqaro Biznes', 'Stomatologiya', 'Gumanitar Fanlar'],
  },
  {
    id: 4,
    name: 'Korea University',
    shortDescription: "Biznes, huquq va xalqaro munosabatlar yo'nalishlarida kuchli.",
    longDescription: "Kuchli bitiruvchilar tarmog'i va amaliyotga yo'naltirilgan ta'lim tizimi bilan Korea Universiteti karyerangiz uchun mustahkam poydevor bo'ladi. Bu yerda siz mamlakatning bo'lajak biznes va siyosat yetakchilari bilan birga o'qiysiz.",
    mainImage: '/images/korea-main.jpg',
    sliderImages: ['/images/korea-slider-1.jpg', '/images/korea-slider-2.jpg', '/images/korea-slider-3.jpg'],
    websiteUrl: 'http://www.korea.ac.kr/en/index.do',
    ranking: { world: '74', korea: '4' },
    facts: { founded: '1905', students: '37,000+', location: 'Seul, Anam' },
    strongFields: ['Huquqshunoslik', 'Iqtisodiyot', 'Media va Kommunikatsiya'],
  },
  {
    id: 5,
    name: 'Hanyang University',
    shortDescription: 'Muhandislik va amaliy fanlar sohasida innovatsion markaz.',
    longDescription: "Hanyang bitiruvchilarining ishga joylashish darajasi Koreyada eng yuqorilardan biridir. 'Amaliyotga yo'naltirilgan ta'lim' shiori ostida bu universitet sizni nazariy bilimlar bilan birga real hayotiy ko'nikmalar bilan ham qurollantiradi.",
    mainImage: '/images/hanyang-main.jpg',
    sliderImages: ['/images/hanyang-slider-1.jpg', '/images/hanyang-slider-2.jpg', '/images/hanyang-slider-3.jpg'],
    websiteUrl: 'https://www.hanyang.ac.kr/web/eng',
    ranking: { world: '157', korea: '7' },
    facts: { founded: '1939', students: '35,000+', location: 'Seul, Seongdong' },
    strongFields: ['Arxitektura', 'Avtomobil muhandisligi', 'Materialshunoslik'],
  },
  {
    id: 6,
    name: 'Sungkyunkwan University',
    shortDescription: 'Samsung korporatsiyasi bilan hamkorlikda ishlaydigan universitet.',
    longDescription: "Dunyodagi eng yirik texnologik kompaniyalardan biri - Samsung bilan bevosita hamkorlik qilishni tasavvur qiling. SKKU sizga aynan shunday imkoniyatni beradi. Bu yerda ta'lim Samsung'ning resurslari va innovatsiyalari bilan boyitilgan.",
    mainImage: '/images/skku-main.jpg',
    sliderImages: ['/images/skku-slider-1.jpg', '/images/skku-slider-2.jpg', '/images/skku-slider-3.jpg'],
    websiteUrl: 'https://www.skku.edu/eng/',
    ranking: { world: '97', korea: '5' },
    facts: { founded: '1398', students: '34,000+', location: 'Seul & Suwon' },
    strongFields: ['Biznes (MBA)', 'Nanotexnologiya', 'Dasturiy ta\'minot'],
  },

  {
    id: 7,
    name: 'Kyung Hee University',
    shortDescription: 'Tarixiy an\'analarga ega va zamonaviy ta\'limni birlashtirgan universitet.',
    longDescription: "Kyung Hee universiteti o'zining go'zal kampusi va xalqaro aloqalari bilan mashhur. Bu yerda siz global dunyoga tayyorlanadigan keng qamrovli ta'lim olishingiz mumkin. Turli sohalarda kuchli dasturlar mavjud.",
    mainImage: '/images/kyunghee-main.jpg',
    sliderImages: ['/images/kyunghee-slider-1.jpg', '/images/kyunghee-slider-2.jpg', '/images/kyunghee-slider-3.jpg'],
    websiteUrl: 'https://www.khu.ac.kr/eng/',
    ranking: { world: '269', korea: '8' },
    facts: { founded: '1949', students: '33,000+', location: 'Seul & Suwon' },
    strongFields: ['Gumanitar Fanlar', 'San\'at va Dizayn', 'Mehmonxona boshqaruvi'],
  },
  {
    id: 8,
    name: 'Pusan National University',
    shortDescription: "Koreyaning janubidagi eng yirik va nufuzli davlat universiteti.",
    longDescription: "Pusan National University Koreyaning janubiy qismida joylashgan bo'lib, keng miqyosdagi akademik dasturlarni taklif etadi. Dengizga yaqinligi va mintaqaviy sanoat bilan mustahkam aloqalari bilan ajralib turadi.",
    mainImage: '/images/pusan-main.jpg',
    sliderImages: ['/images/pusan-slider-1.jpg', '/images/pusan-slider-2.jpg', '/images/pusan-slider-3.jpg'],
    websiteUrl: 'https://www.pusan.ac.kr/eng/',
    ranking: { world: '450', korea: '10' },
    facts: { founded: '1946', students: '30,000+', location: 'Busan' },
    strongFields: ['Kemiya muhandisligi', 'Dengizshunoslik', 'Adliya'],
  },
];

const TabButton = ({ label, active, onClick }: { label: string, active: boolean, onClick: () => void }) => (
  <button
    onClick={onClick}
    className={`px-4 py-2 text-sm font-inter font-bold rounded-lg transition-all duration-300
      ${active
        ? 'bg-primary-custom text-white border-2 border-blue-500 shadow-lg'
        : 'bg-transparent text-gray-400 border border-transparent hover:bg-secondary/70 hover:text-white hover:border-2 hover:border-blue-500 hover:shadow-md'
      }`}
  >
    {label}
  </button>
);

const UniversityModal = ({ university, onClose }: { university: University | null; onClose: () => void; }) => {
  const [activeTab, setActiveTab] = useState('umumiy');
  const [showConsultationModal, setShowConsultationModal] = useState(false);

  if (!university) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div
        key={university.id}
        className="bg-card glass rounded-2xl shadow-modal-shadow w-full max-w-md md:max-w-4xl
                   flex flex-col md:flex-row animate-scale-in max-h-[90vh]
                   md:h-[500px] md:min-h-[500px]"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-foreground hover:text-white bg-secondary rounded-full w-8 h-8 flex items-center justify-center transition-colors z-20" aria-label="Yopish">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" /></svg>
        </button>
        <div className="w-full md:w-1/2 flex-shrink-0 h-56 md:h-full relative group">
          <Swiper modules={[Navigation, Pagination, Autoplay, EffectFade]} loop={true} autoplay={{ delay: 3000, disableOnInteraction: false }} pagination={{ clickable: true }} navigation={true} effect="fade" className="w-full h-full md:rounded-l-2xl">
            {university.sliderImages.map((imgUrl, index) => (<SwiperSlide key={index}><img src={imgUrl} alt={`${university.name} surati ${index + 1}`} className="w-full h-full object-cover" /></SwiperSlide>))}
          </Swiper>
        </div>
        <div className="w-full md:w-1/2 flex flex-col p-6 md:p-8 overflow-y-auto">
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-4">{university.name}</h2>
          <div className="flex items-center gap-2 mb-5 border-b border-border/70 pb-4">
            <TabButton label="Umumiy" active={activeTab === 'umumiy'} onClick={() => setActiveTab('umumiy')} />
            <TabButton label="Faktlar" active={activeTab === 'faktlar'} onClick={() => setActiveTab('faktlar')} />
            <TabButton label="Yo'nalishlar" active={activeTab === 'yo\'nalishlar'} onClick={() => setActiveTab('yo\'nalishlar')} />
            {}
          </div>
          <div className="flex-grow">
            {activeTab === 'umumiy' && (
              <div><p className="text-gray-300 leading-relaxed mb-6 text-sm md:text-base font-inter">{university.longDescription}</p></div>
            )}
            {activeTab === 'faktlar' && (
              <div className="animate-fade-in">
                 <div className="grid grid-cols-2 gap-2 text-center">
                    <div className="bg-secondary/50 py-1 px-2 rounded-lg border border-border/50"><p className="text-lg font-bold text-primary-custom font-heading">{university.ranking.world}</p><p className="text-xs text-gray-400 uppercase font-inter">Dunyo reytingi</p></div>
                    <div className="bg-secondary/50 py-1 px-2 rounded-lg border border-border/50"><p className="text-lg font-bold text-primary-custom font-heading">{university.ranking.korea}</p><p className="text-xs text-gray-400 uppercase font-inter">Koreya reytingi</p></div>
                    <div className="bg-secondary/50 py-1 px-2 rounded-lg border border-border/50"><p className="font-bold text-foreground text-sm font-inter">{university.facts.founded}</p><p className="text-xs text-gray-400 font-inter">Tashkil etilgan</p></div>
                    <div className="bg-secondary/50 py-1 px-2 rounded-lg border border-border/50"><p className="font-bold text-foreground text-sm font-inter">{university.facts.students}</p><p className="text-xs text-gray-400 font-inter">Talabalar</p></div>
                 </div>
                 <div className="bg-secondary/50 py-1 px-2 rounded-lg text-center mt-4 border border-border/50"><p className="font-bold text-foreground text-sm font-inter">{university.facts.location}</p><p className="text-xs text-gray-400 font-inter">Joylashuv</p></div>
              </div>
            )}
            {activeTab === 'yo\'nalishlar' && (
               <div className="animate-fade-in">
                <p className="text-gray-300 mb-4 font-inter">Ushbu universitet quyidagi sohalarda dunyo miqyosida tan olingan:</p>
                <div className="flex flex-wrap gap-2">{university.strongFields.map(field => (<span key={field} className="bg-secondary/50 text-primary-custom text-sm font-inter font-medium px-4 py-2 rounded-lg border border-primary-custom/20">{field}</span>))}</div>
              </div>
            )}
            {}
          </div>
          <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 gap-3 pt-4 border-t border-border/70">
            <button
                onClick={(e) => {
                    e.stopPropagation();
                    setShowConsultationModal(true);
                }}
                className="group w-full inline-flex items-center justify-center bg-primary-custom text-white font-inter font-bold py-2 px-3 rounded-lg hover:bg-primary-dark transition-all duration-300 transform hover:scale-105 text-sm"
            >
                Konsultatsiyaga yozilish
            </button>
            <a href={university.websiteUrl} target="_blank" rel="noopener noreferrer" className="group w-full inline-flex items-center justify-center bg-secondary text-foreground font-inter font-bold py-2 px-3 rounded-lg hover:bg-secondary/70 transition-all duration-300 text-sm">Rasmiy Veb-sayt<svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 2 0 00-2 2v10a2 2 0 002 2h10a2 2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" /></svg></a>
          </div>
        </div>
      </div>
      <style>{`
        .swiper-button-next,.swiper-button-prev{color:#fff!important;background-color:rgba(0,0,0,.3);border-radius:50%;width:32px;height:32px;opacity:0;transition:opacity .3s ease}
        .swiper-button-next:after,.swiper-button-prev:after{font-size:16px!important;font-weight:700}
        .group:hover .swiper-button-next,.group:hover .swiper-button-prev{opacity:1}
        .swiper-pagination-bullet{background-color:hsla(0,0%,100%,.5)!important}
        .swiper-pagination-bullet-active{background-color:#fff!important}
        .animate-fade-in{animation:fadeIn 0.5s ease-in-out}
        @keyframes fadeIn{from{opacity:0}to{opacity:1}}
      `}</style>

      <ConsultationModal
        isOpen={showConsultationModal}
        onClose={() => setShowConsultationModal(false)}
        selectedPackage={university.name}
      />
    </div>
  );
};

const NotificationModal = ({ show, onClose }: { show: boolean, onClose: () => void }) => {
  if (!show) return null;
  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div className="bg-card border border-border rounded-2xl p-8 text-center max-w-sm animate-scale-in shadow-modal-shadow" onClick={(e) => e.stopPropagation()}>
        <h3 className="text-xl font-heading font-bold text-foreground mb-2">Tez Orada</h3>
        <p className="text-gray-300 font-inter mb-6">Bu bo'lim hozirda ishlab chiqilmoqda va tez orada ishga tushadi. Yangiliklarni kuzatib boring!</p>
        <button onClick={onClose} className="bg-primary-custom text-white font-inter font-bold py-2 px-6 rounded-lg hover:bg-primary-dark transition-colors">Tushunarli</button>
      </div>
    </div>
  );
};

const Universities = () => {
  const [selectedUniversity, setSelectedUniversity] = useState<University | null>(null);
  const [showNotification, setShowNotification] = useState(false);

  return (
    <div className="container mx-auto py-20 px-4 text-white">
      <div className="text-center mb-12">
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Hamkor Universitetlarimiz</h2>
        <p className="max-w-2xl mx-auto text-gray-300 font-inter">
          Biz Janubiy Koreyaning eng nufuzli universitetlari bilan bevosita hamkorlik qilamiz, bu
          esa sizga eng yaxshi ta'lim olish imkoniyatini beradi.
        </p>
      </div>
      <div className="grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-6">
        {universities.map((uni, index) => {
          const { ref, inView } = useInView({
            triggerOnce: true,
            threshold: 0.1,
          });

          return (
            <div
              key={uni.id}
              ref={ref}
              onClick={() => setSelectedUniversity(uni)}
              className={`bg-card glass p-4 md:p-6 rounded-2xl text-center flex flex-col items-center
                         border border-border/70 smooth-transition hover:border-primary-custom/70
                         cursor-pointer transform hover:-translate-y-1 shadow-subtle-dark
                         ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="w-20 h-20 md:w-24 md:h-24 mb-4 bg-secondary rounded-full flex items-center justify-center p-1 overflow-hidden border border-border/50">
                <img src={uni.mainImage} alt={`${uni.name} asosiy rasmi`} className="h-full w-full object-cover rounded-full"/>
              </div>
              <h3 className="text-base md:text-xl font-heading font-bold text-foreground mb-2">{uni.name}</h3>
              <p className="text-gray-400 text-xs md:text-sm flex-grow font-inter">{uni.shortDescription}</p>
            </div>
          );
        })}
      </div>

      <div className="text-center mt-8">
        <button
          onClick={() => setShowNotification(true)}
          className="bg-secondary/50 text-foreground font-inter font-bold py-3 px-8 rounded-lg
                     hover:bg-secondary/70 transition-colors duration-300 transform hover:scale-105
                     border border-border/70 hover:border-primary-custom/70"
        >
          42+ hamkor universitetlar
        </button>
      </div>

      <UniversityModal university={selectedUniversity} onClose={() => setSelectedUniversity(null)} />
      <NotificationModal show={showNotification} onClose={() => setShowNotification(false)} />
    </div>
  );
};

export default Universities;