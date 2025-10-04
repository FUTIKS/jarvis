// src/components/ScholarshipSection.tsx
import React, { useState, useMemo, useCallback, useRef } from 'react';
import { useInView } from 'react-intersection-observer';
import { Search, Filter, Globe, GraduationCap, Calendar, BookOpen, ExternalLink, X } from 'lucide-react';

// --- STIPENDIYA DATA STRUKTURASI ---
interface Scholarship {
  id: number;
  name: string;
  provider: string; // Kim tomonidan beriladi (Universitet, KGSP, Elchixona)
  type: 'Full' | 'Partial'; // To'liq yoki qisman
  degree: 'Bakalavr' | 'Magistratura' | 'Doktorantura';
  field: string; // Yo'nalish (masalan: IT, Muhandislik, Biznes)
  description: string;
  benefits: string[]; // Nimalarni qoplaydi (o'qish, yashash, aviabilet)
  requirements: string[]; // Talablar
  documents: string[]; // Kerakli hujjatlar
  deadline: string; // Murojaat qilish muddati (masalan: "Har yili Mart", "2025-yil 30-aprel")
  link: string; // Rasmiy sahifaga havola
  imageUrl?: string; // Stipendiya uchun rasm (ixtiyoriy)
}

// --- NAMUNAVIY STIPENDIYALAR MA'LUMOTLARI ---
const allScholarships: Scholarship[] = [
  {
    id: 1,
    name: 'Global Korea Scholarship (GKS)',
    provider: 'Koreya Hukumati (NIIED)',
    type: 'Full',
    degree: 'Bakalavr',
    field: 'Barcha yo\'nalishlar',
    description: 'Janubiy Koreya hukumati tomonidan xalqaro talabalar uchun taqdim etiladigan eng nufuzli to\'liq stipendiya dasturi.',
    benefits: ['To\'liq o\'qish to\'lovi', 'Oylik stipendiya (KRW 900,000 - 1,000,000)', 'Aviabilet (bir tomonlama)', 'Tibbiy sug\'urta', 'Koreys tili kursi'],
    requirements: ['Yuqori akademik ko\'rsatkichlar', 'TOPIK 3+ (majburiy emas, lekin ustunlik beradi)', 'Yoshar chegarasi (Bakalavr uchun 25 yoshgacha)', 'Shaxsiy bayonot, tavsiyanomalar'],
    documents: ['Pasport nusxasi', 'Diplom va transkript', 'Til sertifikatlari', 'Tavsiyanomalar', 'Tibbiy ko\'rik'],
    deadline: 'Har yili Fevral-Mart (Elchixona orqali), Mart-Aprel (Universitet orqali)',
    link: 'https://www.studyinkorea.go.kr/en/main.do',
    imageUrl: 'https://images.unsplash.com/photo-1549247712-45e0568601ae?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 2,
    name: 'SNU President Fellowship',
    provider: 'Seoul National University',
    type: 'Full',
    degree: 'Doktorantura',
    field: 'Barcha yo\'nalishlar',
    description: 'SNU xalqaro doktorantura talabalari uchun akademik mukammallikni rag\'batlantirish maqsadida yaratilgan.',
    benefits: ['To\'liq o\'qish to\'lovi', 'Oylik stipendiya (KRW 1,500,000 - 2,000,000)', 'Tibbiy sug\'urta', 'Tadqiqot xarajatlari'],
    requirements: ['Magistratura diplomi', 'Yuqori akademik yutuqlar', 'Tadqiqot taklifi', 'Professor tavsiyanomasi'],
    documents: ['Pasport nusxasi', 'Diplom va transkript (Bakalavr va Magistratura)', 'Til sertifikatlari', 'Tadqiqot taklifi'],
    deadline: 'Har yili Aprel ~ May',
    link: 'https://en.snu.ac.kr/admission/graduate/snu-president-fellowship',
    imageUrl: 'https://images.unsplash.com/photo-1616812833075-802c67cf7660?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 3,
    name: 'KAIST International Student Scholarship',
    provider: 'KAIST',
    type: 'Full',
    degree: 'Bakalavr',
    field: 'Ilm-fan va Muhandislik',
    description: 'KAIST xalqaro talabalarga Koreyadagi eng yaxshi texnologiya universitetlaridan birida o\'qish imkoniyatini taqdim etadi.',
    benefits: ['To\'liq o\'qish to\'lovi', 'Oylik stipendiya (KRW 350,000)', 'Tibbiy sug\'urta'],
    requirements: ['Oliy maktab diplomi', 'SAT/ACT, AP, IB ballari', 'Ingliz tili sertifikati (TOEFL/IELTS)', 'Shaxsiy bayonot'],
    documents: ['Pasport nusxasi', 'Oliy maktab transkripti', 'Til sertifikatlari', 'Moliyaviy kafolat hujjati'],
    deadline: 'Har yili Sentyabr ~ Oktyabr',
    link: 'https://admission.kaist.ac.kr/international/scholarship/',
    imageUrl: 'https://images.unsplash.com/photo-1541339907198-e0875661f401?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80'
  },
  {
    id: 4,
    name: 'Yonsei Global Leader Fellowship',
    provider: 'Yonsei University',
    type: 'Partial',
    degree: 'Magistratura',
    field: 'Xalqaro munosabatlar, Biznes',
    description: 'Global liderlarni tarbiyalashga qaratilgan qisman stipendiya dasturi.',
    benefits: ['O\'qish to\'lovining 50%', 'Ba\'zi kurslar uchun moddiy yordam'],
    requirements: ['Bakalavr diplomi', 'Yuqori GPA', 'Ingliz tili sertifikati', 'Liderlik qobiliyatlari'],
    documents: ['Pasport nusxasi', 'Bakalavr transkripti', 'Til sertifikatlari', 'Tavsiyanoma'],
    deadline: 'Har yili Mart ~ Aprel',
    link: 'https://gsis.yonsei.ac.kr/admission/scholarship.asp',
    imageUrl: 'https://images.unsplash.com/photo-1579275522774-8846c4f9f74a?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
  {
    id: 5,
    name: 'Korea University Scholarship for International Students',
    provider: 'Korea University',
    type: 'Partial',
    degree: 'Bakalavr',
    field: 'Barcha yo\'nalishlar',
    description: 'KU xalqaro talabalarga o\'qish xarajatlarini qoplashda yordam berish uchun turli xil stipendiyalar taklif etadi.',
    benefits: ['O\'qish to\'lovining 30%-70%'],
    requirements: ['Yuqori akademik ko\'rsatkichlar', 'Ingliz yoki Koreys tili sertifikati'],
    documents: ['Pasport nusxasi', 'Oliy maktab transkripti', 'Til sertifikatlari'],
    deadline: 'Har yili Sentabr ~ Oktabr',
    link: 'https://www.korea.ac.kr/eng/admission/undergraduate.do#scholarships',
    imageUrl: 'https://images.unsplash.com/photo-1521743606616-e3d120a16b9b?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D'
  },
];

// --- STIPENDIYA MODALI KOMPONENTI ---
const ScholarshipModal = ({ scholarship, onClose }: { scholarship: Scholarship | null; onClose: () => void; }) => {
  if (!scholarship) return null;

  return (
    <div className="fixed inset-0 bg-black bg-opacity-70 backdrop-blur-sm flex justify-center items-center z-50 p-4" onClick={onClose}>
      <div 
        key={scholarship.id} 
        className="bg-card glass rounded-2xl shadow-modal-shadow w-full max-w-md md:max-w-4xl 
                   flex flex-col md:flex-row animate-scale-in max-h-[90vh]"
        onClick={(e) => e.stopPropagation()}
      >
        <button onClick={onClose} className="absolute top-3 right-3 text-foreground hover:text-white bg-secondary rounded-full w-8 h-8 flex items-center justify-center transition-colors z-20" aria-label="Yopish">
            <X className="h-5 w-5" />
        </button>
        {scholarship.imageUrl && (
          <div className="w-full md:w-1/2 flex-shrink-0 h-56 md:h-full relative overflow-hidden">
            <img src={scholarship.imageUrl} alt={scholarship.name} className="w-full h-full object-cover" />
          </div>
        )}
        <div className={`w-full ${scholarship.imageUrl ? 'md:w-1/2' : ''} flex flex-col p-6 md:p-8 overflow-y-auto`}>
          <h2 className="text-2xl md:text-3xl font-heading font-bold text-foreground mb-3">{scholarship.name}</h2>
          <p className="text-sm text-primary-custom font-inter font-medium mb-4">{scholarship.provider}</p>
          
          <p className="text-gray-300 leading-relaxed mb-4 text-sm md:text-base font-inter">{scholarship.description}</p>

          <div className="grid grid-cols-2 gap-y-3 gap-x-4 mb-6 text-sm font-inter">
            <div className="flex items-center gap-2 text-gray-200">
                <GraduationCap className="h-4 w-4 text-primary-custom flex-shrink-0" />
                <span>Daraja: <span className="font-bold">{scholarship.degree}</span></span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
                <Globe className="h-4 w-4 text-primary-custom flex-shrink-0" />
                <span>Yo'nalish: <span className="font-bold">{scholarship.field}</span></span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
                <Calendar className="h-4 w-4 text-primary-custom flex-shrink-0" />
                <span>Muddat: <span className="font-bold">{scholarship.deadline}</span></span>
            </div>
            <div className="flex items-center gap-2 text-gray-200">
                <BookOpen className="h-4 w-4 text-primary-custom flex-shrink-0" />
                <span>Turi: <span className="font-bold">{scholarship.type}</span></span>
            </div>
          </div>

          <h3 className="text-lg font-heading font-bold text-foreground mb-2 mt-4">Foydalari:</h3>
          <ul className="list-disc list-inside text-gray-300 text-sm font-inter mb-4 space-y-1">
            {scholarship.benefits.map((benefit, i) => <li key={i}>{benefit}</li>)}
          </ul>

          <h3 className="text-lg font-heading font-bold text-foreground mb-2 mt-4">Talablar:</h3>
          <ul className="list-disc list-inside text-gray-300 text-sm font-inter mb-4 space-y-1">
            {scholarship.requirements.map((req, i) => <li key={i}>{req}</li>)}
          </ul>

          <h3 className="text-lg font-heading font-bold text-foreground mb-2 mt-4">Kerakli hujjatlar:</h3>
          <ul className="list-disc list-inside text-gray-300 text-sm font-inter mb-4 space-y-1">
            {scholarship.documents.map((doc, i) => <li key={i}>{doc}</li>)}
          </ul>
          
          <div className="mt-auto pt-4 border-t border-border/70">
            <a href={scholarship.link} target="_blank" rel="noopener noreferrer" className="group w-full inline-flex items-center justify-center bg-primary-custom text-white font-inter font-bold py-2 px-3 rounded-lg hover:bg-primary-custom/80 transition-all duration-300 text-sm">
                Rasmiy sahifa
                <ExternalLink className="h-4 w-4 ml-2" />
            </a>
          </div>
        </div>
      </div>
    </div>
  );
};


// --- ASOSIY STIPENDIYALAR BO'LIMI KOMPONENTI ---
const ScholarshipSection = () => {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedDegree, setSelectedDegree] = useState('');
  const [selectedProvider, setSelectedProvider] = useState('');
  const [selectedType, setSelectedType] = useState('');
  const [selectedScholarship, setSelectedScholarship] = useState<Scholarship | null>(null);

  // useInView hook'i bo'lim uchun animatsiyani ishga tushirish uchun
  const { ref: sectionRef, inView: sectionInView } = useInView({
    triggerOnce: true,
    threshold: 0.1,
  });

  const filteredScholarships = useMemo(() => {
    return allScholarships.filter(scholarship => {
      const matchesSearch = scholarship.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            scholarship.description.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            scholarship.field.toLowerCase().includes(searchTerm.toLowerCase()) ||
                            scholarship.provider.toLowerCase().includes(searchTerm.toLowerCase());

      const matchesDegree = selectedDegree ? scholarship.degree === selectedDegree : true;
      const matchesProvider = selectedProvider ? scholarship.provider === selectedProvider : true;
      const matchesType = selectedType ? scholarship.type === selectedType : true;

      return matchesSearch && matchesDegree && matchesProvider && matchesType;
    });
  }, [searchTerm, selectedDegree, selectedProvider, selectedType]);

  const uniqueDegrees = useMemo(() => ['Barcha darajalar', ...Array.from(new Set(allScholarships.map(s => s.degree)))], []);
  const uniqueProviders = useMemo(() => ['Barcha provayderlar', ...Array.from(new Set(allScholarships.map(s => s.provider)))], []);
  const uniqueTypes = useMemo(() => ['Barcha turlar', ...Array.from(new Set(allScholarships.map(s => s.type)))], []);

  const openScholarshipModal = useCallback((scholarship: Scholarship) => {
    setSelectedScholarship(scholarship);
  }, []);

  const closeScholarshipModal = useCallback(() => {
    setSelectedScholarship(null);
  }, []);

  return (
    <div id="scholarships" className="container mx-auto py-20 px-4 text-white" ref={sectionRef}>
      <div className={`text-center mb-12 ${sectionInView ? 'animate-fade-in-up' : 'opacity-0'}`}>
        <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">Stipendiyalar Bazasi</h2>
        <p className="max-w-2xl mx-auto text-gray-300 font-inter">
          Koreyada bepul yoki arzon o'qish imkoniyatini toping. Bizning keng stipendiyalar ro'yxatimizni ko'rib chiqing.
        </p>
      </div>

      <div className={`max-w-4xl mx-auto bg-card glass p-6 md:p-8 rounded-2xl shadow-modal-shadow mb-12 
                        ${sectionInView ? 'animate-fade-in-up delay-200' : 'opacity-0'}`}>
        <div className="flex flex-col md:flex-row gap-4 mb-6">
          <div className="relative w-full md:w-1/2">
            <Search className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <input
              type="text"
              placeholder="Stipendiya bo'yicha qidiruv..."
              className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg border border-border focus:ring-1 focus:ring-primary-custom focus:border-primary-custom outline-none text-foreground font-inter"
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
            />
          </div>
          <div className="relative w-full md:w-1/2">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg border border-border focus:ring-1 focus:ring-primary-custom focus:border-primary-custom outline-none text-foreground appearance-none cursor-pointer font-inter"
              value={selectedDegree}
              onChange={(e) => setSelectedDegree(e.target.value === 'Barcha darajalar' ? '' : e.target.value)}
            >
              {uniqueDegrees.map(degree => (
                <option key={degree} value={degree}>{degree}</option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
        <div className="flex flex-col md:flex-row gap-4">
          <div className="relative w-full md:w-1/2">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg border border-border focus:ring-1 focus:ring-primary-custom focus:border-primary-custom outline-none text-foreground appearance-none cursor-pointer font-inter"
              value={selectedProvider}
              onChange={(e) => setSelectedProvider(e.target.value === 'Barcha provayderlar' ? '' : e.target.value)}
            >
              {uniqueProviders.map(provider => (
                <option key={provider} value={provider}>{provider}</option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
          <div className="relative w-full md:w-1/2">
            <Filter className="absolute left-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400" />
            <select
              className="w-full pl-10 pr-4 py-2 bg-secondary rounded-lg border border-border focus:ring-1 focus:ring-primary-custom focus:border-primary-custom outline-none text-foreground appearance-none cursor-pointer font-inter"
              value={selectedType}
              onChange={(e) => setSelectedType(e.target.value === 'Barcha turlar' ? '' : e.target.value)}
            >
              {uniqueTypes.map(type => (
                <option key={type} value={type}>{type}</option>
              ))}
            </select>
            <svg className="absolute right-3 top-1/2 -translate-y-1/2 h-5 w-5 text-gray-400 pointer-events-none" fill="none" viewBox="0 0 24 24" stroke="currentColor"><path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" /></svg>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
        {filteredScholarships.length > 0 ? (
          filteredScholarships.map((scholarship, index) => {
            const { ref, inView } = useInView({
              triggerOnce: true,
              threshold: 0.1,
            });

            return (
              <div 
                key={scholarship.id} 
                ref={ref}
                className={`bg-card glass rounded-2xl overflow-hidden flex flex-col 
                           border border-border/70 group shadow-subtle-dark 
                           smooth-transition hover:scale-[1.01] hover:shadow-card-glow
                           ${inView ? 'animate-fade-in-up' : 'opacity-0'}`}
                style={{ animationDelay: `${index * 0.1}s` }}
                onClick={() => openScholarshipModal(scholarship)}
              >
                {scholarship.imageUrl && (
                  <img src={scholarship.imageUrl} alt={scholarship.name} className="w-full h-48 object-cover" />
                )}
                <div className="p-5 flex flex-col flex-grow">
                  <h3 className="text-xl font-heading font-bold mb-2 text-foreground">{scholarship.name}</h3>
                  <p className="text-sm text-primary-custom font-inter font-medium mb-3">{scholarship.provider}</p>
                  <p className="text-gray-400 text-sm font-inter flex-grow leading-relaxed">{scholarship.description}</p>
                  <div className="mt-4 pt-4 border-t border-border/50 text-xs font-inter flex justify-between items-center">
                    <span className="flex items-center gap-1 text-gray-300"><Calendar className="h-3 w-3" /> {scholarship.deadline}</span>
                    <span className="flex items-center gap-1 text-gray-300"><GraduationCap className="h-3 w-3" /> {scholarship.degree}</span>
                  </div>
                </div>
              </div>
            );
          })
        ) : (
          <div className="col-span-full text-center text-gray-400 font-inter text-lg py-10">
            Hozircha bunday stipendiyalar mavjud emas.
          </div>
        )}
      </div>

      <ScholarshipModal scholarship={selectedScholarship} onClose={closeScholarshipModal} />
    </div>
  );
};

export default ScholarshipSection;