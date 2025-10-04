import React, { useState } from 'react';
import { ArrowRight, X, Clock, User, Calendar } from 'lucide-react';

const blogPosts = [
  {
    id: 1,
    category: 'Viza masalalari',
    title: 'D-2 talabalik vizasini olishning 5 ta oltin qoidasi: Rad javobini qanday cheklab o\'tish mumkin?',
    excerpt: 'Koreya elchixonasidagi suhbatdan muvaffaqiyatli o\'tish, bank hisobini to\'g\'ri ko\'rsatish va hujjatlardagi eng kichik xatoliklarni bartaraf etish bo\'yicha ekspert maslahatlari.',
    author: 'Kamola Valiyeva, Viza bo\'yicha mutaxassis',
    publishDate: '15 dekabr 2024',
    readTime: '8 daqiqa',
    imageUrl: 'https://images.unsplash.com/photo-1522202176988-66273c2fd55f?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=871&q=80',
    fullContent: `
      <h3>D-2 viza olishning eng muhim qoidalari:</h3>
      
      <h4>1. Moliyaviy barqarorlik ko'rsating</h4>
      <p>Bank hisobingizda kamida $10,000 bo'lishi kerak. Bu pul kamida 3 oy davomida hisobda turgan bo'lishi shart. Ota-onangizning moliyaviy kafolatnomasini ham tayyorlab qo'ying.</p>
      
      <h4>2. Barcha hujjatlar apostil bilan tasdiqlangan bo'lsin</h4>
      <p>Diplom, ma'lumotnoma, tug'ilganlik guvohnomasi - bularning barchasi apostil bilan tasdiqlanishi kerak. Bu jarayon 2-3 hafta davom etishi mumkin, shuning uchun vaqtida boshlang.</p>
      
      <h4>3. Koreys tilini o'rganishga tayyor ekanligingizni ko'rsating</h4>
      <p>TOPIK darajangiz bo'lmasa ham, koreys tilini o'rganayotganingizni tasdiqlash uchun darslar sertifikatini taqdim eting. Bu sizning jiddiyligingizni ko'rsatadi.</p>
      
      <h4>4. Aniq universitet va mutaxassislik tanlangan bo'lsin</h4>
      <p>Nima uchun aynan o'sha universitetni tanlaganingizni, qanday mutaxassislikni o'qimoqchi ekanligingizni aniq bilishingiz kerak. Bu savollar elchixonada so'raladi.</p>
      
      <h4>5. Elchixonadagi suhbatda ishonchli va tayyorgarlik ko'ring</h4>
      <p>Suhbatdan oldin eng ko'p beriladigan savollarni o'rganing. Javoblaringiz qisqa, aniq va ishonchli bo'lishi kerak. Asabiylashmaslik juda muhim.</p>
      
      <p><strong>Qo'shimcha maslahat:</strong> Viza uchun ariza topshirishdan oldin barcha hujjatlarni ikki marta tekshiring. Eng kichik xato ham rad javobiga olib kelishi mumkin.</p>
    `
  },
  {
    id: 2,
    category: 'Grantlar va moliyalashtirish',
    title: 'Global Korea Scholarship (GKS): Hujjat topshirishdan g\'oliblikkacha bosqichma-bosqich qo\'llanma',
    excerpt: 'Nima uchun ba\'zilar GKS grantini yutadi-yu, boshqalar yuta olmaydi? Motivatsion xat yozish sirlari, professorlardan tavsiyanoma olish va portfolioni tayyorlash bo\'yicha to\'liq yo\'riqnoma.',
    author: 'Ibragimov Jasurbek, Ta\'lim strategi',
    publishDate: '10 dekabr 2024',
    readTime: '12 daqiqa',
    imageUrl: 'https://images.unsplash.com/photo-1523240795612-9a054b0db644?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    fullContent: `
      <h3>GKS grantini yutish uchun to'liq strategiya:</h3>
      
      <h4>1. Motivatsion xat - eng muhim qism</h4>
      <p>Bu yerda nima uchun aynan Koreyani tanlaganingizni aniq yozing. Shaxsiy hikoyangizni aytib bering: qanday qilib Koreya madaniyati yoki texnologiyalariga qiziqish paydo bo'lgani haqida.</p>
      
      <h4>2. Akademik natijalaringiz yuqori bo'lishi shart</h4>
      <p>GPA kamida 3.0 bo'lishi kerak, lekin 3.5 dan yuqori bo'lsa yaxshiroq. Agar pastroq bo'lsa, buni qanday kompensatsiya qilishni o'ylab ko'ring.</p>
      
      <h4>3. TOPIK darajangiz kamida 3-level bo'lsin</h4>
      <p>TOPIK 4-level bo'lsa juda yaxshi, lekin 3-level ham yetarli. Agar sizda yo'q bo'lsa, inglizcha dasturlar ham mavjud.</p>
      
      <h4>4. Tadqiqot rejangiz aniq va amalga oshirilishi mumkin bo'lsin</h4>
      <p>Siz nima ustida ishlash istayotganingizni aniq yozing. Koreyadagi qaysi professor yoki laboratoriya bilan ishlash istayotganingizni ko'rsating.</p>
      
      <h4>5. Professorlar bilan oldindan aloqa o'rnating</h4>
      <p>Sizni qabul qilishni istagan professor bor bo'lsa, imkoniyatlaringiz sezilarli darajada oshadi. Ular bilan email orqali muloqot qiling.</p>
      
      <h4>Hujjatlar ro'yxati:</h4>
      <ul>
        <li>Online ariza</li>
        <li>Shaxsiy bayonot</li>
        <li>Tadqiqot rejasi</li>
        <li>2 ta tavsiyanoma</li>
        <li>Rasmiy transkript</li>
        <li>TOPIK yoki IELTS/TOEFL natijasi</li>
      </ul>
      
      <p><strong>Muhim eslatma:</strong> Barcha hujjatlar ingliz yoki koreys tilida bo'lishi kerak. Tarjima qildirilgan hujjatlar notarius tasdiqlangan bo'lishi shart.</p>
    `
  },
  {
    id: 3,
    category: 'Koreyada hayot',
    title: 'Koreyada talabalar uchun ish topish: Soatbay ishlardan (arbeit) ofis ishlarigacha',
    excerpt: 'Qonuniy ishlash soatlari, eng ko\'p haq to\'lanadigan sohalar, TOPIK darajasining ish topishdagi o\'rni va rezyume yozish bo\'yicha amaliy maslahatlarimiz.',
    author: 'Go Korea jamoasi',
    publishDate: '5 dekabr 2024',
    readTime: '10 daqiqa',
    imageUrl: 'https://images.unsplash.com/photo-1543269865-cbf427effbad?ixlib=rb-4.0.3&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D&auto=format&fit=crop&w=870&q=80',
    fullContent: `
      <h3>Koreyada ish topishning to'liq yo'riqnomasi:</h3>
      
      <h4>1. Qonuniy ishlash soatlari</h4>
      <p>D-2 viza bilan haftasiga 20 soat ishlash mumkin. Bu qoidani buzmaslik juda muhim, chunki viza bekor qilinishi mumkin. Tatil paytida to'liq vaqt ishlash ruxsat etiladi.</p>
      
      <h4>2. Eng ko'p maosh to'lanadigan sohalar:</h4>
      <ul>
        <li><strong>Ingliz tili o'qitish:</strong> Soatiga 25,000-40,000 von</li>
        <li><strong>IT soha:</strong> Soatiga 15,000-25,000 von</li>
        <li><strong>Tarjimonlik:</strong> Soatiga 20,000-35,000 von</li>
        <li><strong>Restoran xizmati:</strong> Soatiga 9,000-12,000 von</li>
        <li><strong>Yetkazib berish:</strong> Soatiga 10,000-15,000 von</li>
      </ul>
      
      <h4>3. TOPIK darajasining ahamiyati</h4>
      <p>TOPIK 4-level bo'lsa, ofis ishlarida ishlash imkoniyati paydo bo'ladi. Bu yuqori maosh va yaxshi ish muhitini anglatadi. TOPIK 6-level esa deyarli barcha eshiklarni ochadi.</p>
      
      <h4>4. Rezyume yozish qoidalari</h4>
      <p>Koreycha rezyume boshqacha formatda yoziladi. Rasm qo'yish majburiy, shaxsiy ma'lumotlar batafsil yoziladi. Ish tajribasidan ko'ra, shaxsiy sifatlar ko'proq muhim.</p>
      
      <h4>5. Eng mashhur ish topish saytlari:</h4>
      <ul>
        <li><strong>Alba Heaven (알바천국):</strong> Part-time ishlar uchun eng yaxshi</li>
        <li><strong>Saramin:</strong> Professional ishlar uchun</li>
        <li><strong>JobKorea:</strong> Katta kompaniyalar ishlar</li>
        <li><strong>WorkNet:</strong> Davlat tomonidan qo'llab-quvvatlanadigan</li>
      </ul>
      
      <h4>Foydali maslahatlar:</h4>
      <p>Ish izlashdan oldin o'z koreys tilingizni yaxshilang. Suhbat paytida muloyimlik va hurmat ko'rsating - bu Koreya madaniyatining muhim qismi. Vaqtni qadrlash ham juda muhim.</p>
      
      <p><strong>Diqqat:</strong> Har doim ish shartnomangizni diqqat bilan o'qing. Agar tushunmagan narsangiz bo'lsa, koreys tilini yaxshi biladigan odamdan yordam so'rang.</p>
    `
  }
];

const BlogSection = () => {
  const [selectedPost, setSelectedPost] = useState(null);
  const [showFullContent, setShowFullContent] = useState(false);
  const [inViewCards, setInViewCards] = useState(new Set());

  React.useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setInViewCards(prev => new Set([...prev, entry.target.dataset.index]));
          }
        });
      },
      { threshold: 0.1 }
    );

    const cards = document.querySelectorAll('[data-index]');
    cards.forEach(card => observer.observe(card));

    return () => observer.disconnect();
  }, []);

  const handleReadMore = (post) => {
    setSelectedPost(post);
    setShowFullContent(false);
  };

  const handleShowFullContent = () => {
    setShowFullContent(true);
  };

  const closeModal = () => {
    setSelectedPost(null);
    setShowFullContent(false);
  };

  return (
    // Main container now has a transparent background
    <div className="min-h-screen"> 
      <div className="container mx-auto py-12 px-4 lg:py-20 text-white">
        {/* Header Section */}
        <div className="text-center mb-12 lg:mb-16">
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-bold mb-4 lg:mb-6 text-white leading-tight">
            Bizning blog: Koreyaga yo'lingizni osonlashtiramiz
          </h2>
          <p className="max-w-4xl mx-auto text-base lg:text-lg text-white/70 leading-relaxed px-4">
            Koreyada o'qish, yashash va ishlash haqidagi eng so'nggi maslahatlar, yo'riqnomalar va ekspert tahlillari. 
            Biz shunchaki yo'l ko'rsatmaymiz, balki tajribamiz bilan bo'lishamiz.
          </p>
        </div>

        {/* Blog Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 xl:grid-cols-3 gap-6 lg:gap-8">
          {blogPosts.map((post, index) => (
            <div
              key={post.id}
              data-index={index}
              className={`bg-white/10 backdrop-blur-lg rounded-2xl lg:rounded-3xl overflow-hidden flex flex-col 
                         border border-white/20 group shadow-xl 
                         transition-all duration-500 hover:scale-[1.02] hover:shadow-2xl hover:bg-white/15
                         ${inViewCards.has(index.toString()) ? 'animate-fade-in-up opacity-100' : 'opacity-0'}`}
              style={{ 
                animationDelay: `${index * 0.15}s`,
              }}
            >
              {/* Image */}
              <div className="relative overflow-hidden">
                <img 
                  src={post.imageUrl} 
                  alt={post.title} 
                  className="w-full h-48 sm:h-56 lg:h-64 object-cover transition-transform duration-700 group-hover:scale-110"
                />
                {/* Image overlay changed to blue shade for consistency */}
                <div className="absolute inset-0 bg-gradient-to-t from-blue-900/40 to-transparent" /> 
                
                {/* Category Badge */}
                <div className="absolute top-4 left-4">
                  <span className="px-3 py-1 bg-blue-600/90 backdrop-blur-sm text-white text-xs lg:text-sm font-semibold rounded-full border border-white/20">
                    {post.category}
                  </span>
                </div>
              </div>

              {/* Content */}
              <div className="p-4 lg:p-6 flex flex-col flex-grow">
                <h3 className="text-lg lg:text-xl font-bold mb-3 lg:mb-4 text-white leading-tight line-clamp-3 group-hover:text-blue-400 transition-colors duration-300">
                  {post.title}
                </h3>
                
                <p className="text-white/70 text-sm lg:text-base mb-4 lg:mb-6 leading-relaxed line-clamp-3 flex-grow">
                  {post.excerpt}
                </p>

                {/* Meta Info */}
                <div className="flex flex-wrap items-center gap-4 mb-4 text-xs lg:text-sm text-white/70">
                  <div className="flex items-center gap-1">
                    <Calendar size={14} />
                    <span>{post.publishDate}</span>
                  </div>
                  <div className="flex items-center gap-1">
                    <Clock size={14} />
                    <span>{post.readTime}</span>
                  </div>
                </div>

                {/* Author & Button */}
                <div className="mt-auto">
                  <button 
                    onClick={() => handleReadMore(post)}
                    className="w-full bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                               text-white font-semibold py-3 lg:py-4 px-6 rounded-xl lg:rounded-2xl
                               flex items-center justify-center gap-2 transition-all duration-300 
                               hover:scale-105 active:scale-95 shadow-lg hover:shadow-xl"
                  >
                    Batafsil o'qish <ArrowRight size={18} className="transition-transform group-hover:translate-x-1" />
                  </button>
                  
                  <div className="flex items-center gap-2 mt-3 lg:mt-4">
                    {/* Author avatar background changed to blue gradient */}
                    <div className="w-8 h-8 bg-gradient-to-r from-blue-600 to-blue-700 rounded-full flex items-center justify-center">
                      <User size={14} className="text-white" />
                    </div>
                    <p className="text-white/70 text-xs lg:text-sm">{post.author}</p>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Footer CTA */}
        <div className="text-center mt-12 lg:mt-16">
          {/* Footer CTA background changed to blue gradient */}
          <div className="bg-gradient-to-r from-blue-600/20 to-blue-700/20 backdrop-blur-lg rounded-2xl lg:rounded-3xl p-6 lg:p-8 border border-white/20">
            <h3 className="text-xl lg:text-2xl font-bold text-white mb-3 lg:mb-4">
              Ko'proq maqolalar kutilmoqda...
            </h3>
            <p className="text-base lg:text-lg text-white/70 mb-6 lg:mb-8 max-w-2xl mx-auto">
              To'liq funksional blogimiz tez orada ishga tushadi! Yangi maqolalar, video darslar va ekspert maslahatlar bilan.
            </p>
            {/* CTA button changed to blue gradient */}
            <button className="bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                               text-white font-bold py-3 lg:py-4 px-6 lg:px-8 rounded-xl lg:rounded-2xl 
                               transition-all duration-300 hover:scale-105 shadow-lg">
              Yangilanishlardan xabardor bo'ling
            </button>
          </div>
        </div>
      </div>

      {/* Modal */}
      {selectedPost && (
        <div className="fixed inset-0 bg-blue-900/80 backdrop-blur-sm z-50 flex items-center justify-center p-4 overflow-y-auto">
          <div className="bg-white/15 backdrop-blur-xl rounded-2xl lg:rounded-3xl max-w-4xl w-full max-h-[90vh] overflow-y-auto border border-white/20 shadow-2xl my-4">
            <div className="p-4 lg:p-8">
              {/* Modal Header */}
              <div className="flex justify-between items-start mb-4 lg:mb-6">
                <div className="flex-1 pr-4">
                  <span className="inline-block px-3 py-1 bg-blue-600/90 text-white text-xs lg:text-sm font-semibold rounded-full mb-3">
                    {selectedPost.category}
                  </span>
                  <h2 className="text-xl lg:text-3xl font-bold text-white leading-tight">{selectedPost.title}</h2>
                </div>
                <button 
                  onClick={closeModal}
                  className="flex-shrink-0 w-10 h-10 lg:w-12 lg:h-12 bg-red-600/20 hover:bg-red-600/40 
                             text-red-400 hover:text-red-300 rounded-full flex items-center justify-center 
                             transition-all duration-200 backdrop-blur-sm border border-red-500/30"
                >
                  <X size={20} />
                </button>
              </div>

              {/* Meta Info */}
              <div className="flex flex-wrap items-center gap-4 lg:gap-6 mb-4 lg:mb-6 text-sm text-white/70">
                <div className="flex items-center gap-2">
                  <User size={16} />
                  <span>{selectedPost.author}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Calendar size={16} />
                  <span>{selectedPost.publishDate}</span>
                </div>
                <div className="flex items-center gap-2">
                  <Clock size={16} />
                  <span>{selectedPost.readTime}</span>
                </div>
              </div>
              
              {/* Image */}
              <img 
                src={selectedPost.imageUrl} 
                alt={selectedPost.title}
                className="w-full h-48 lg:h-80 object-cover rounded-xl lg:rounded-2xl mb-6 lg:mb-8"
              />
              
              {/* Excerpt */}
              <div className="bg-blue-600/10 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-6 lg:mb-8 border border-blue-500/20">
                <h3 className="text-lg lg:text-xl font-semibold text-white mb-3 lg:mb-4">Qisqacha:</h3>
                <p className="text-white/70 text-sm lg:text-base leading-relaxed">{selectedPost.excerpt}</p>
              </div>

              {/* Full Content */}
              {showFullContent && (
                <div className="bg-white/5 backdrop-blur-sm rounded-xl lg:rounded-2xl p-4 lg:p-6 mb-6 lg:mb-8 border border-white/10">
                  <div 
                    className="text-white/70 text-sm lg:text-base leading-relaxed prose prose-invert max-w-none
                               prose-headings:text-white prose-headings:font-bold 
                               prose-h3:text-xl prose-h3:mb-4 prose-h3:text-blue-400
                               prose-h4:text-lg prose-h4:mb-3 prose-h4:text-white
                               prose-p:mb-4 prose-p:leading-relaxed
                               prose-ul:mb-4 prose-li:mb-2
                               prose-strong:text-blue-400"
                    dangerouslySetInnerHTML={{ __html: selectedPost.fullContent }}
                  />
                </div>
              )}

              {/* Action Buttons */}
              <div className="flex flex-col sm:flex-row gap-3 lg:gap-4">
                {!showFullContent ? (
                  <button 
                    onClick={handleShowFullContent}
                    className="flex-1 bg-gradient-to-r from-blue-600 to-blue-700 hover:from-blue-700 hover:to-blue-800 
                               text-white font-semibold py-3 lg:py-4 px-6 rounded-xl lg:rounded-2xl 
                               transition-all duration-300 hover:scale-105 flex items-center justify-center gap-2"
                  >
                    To'liq maqolani o'qish <ArrowRight size={18} />
                  </button>
                ) : (
                  // Success message changed to blue/white colors
                  <div className="flex-1 bg-blue-600/20 backdrop-blur-sm text-blue-300 font-semibold py-3 lg:py-4 px-6 rounded-xl lg:rounded-2xl border border-blue-500/30 text-center">
                    ✓ To'liq maqola o'qildi
                  </div>
                )}
                
                <button 
                  onClick={closeModal}
                  // Close button changed to blue/white colors
                  className="flex-shrink-0 bg-blue-600/20 hover:bg-blue-600/30 text-white/70 hover:text-white 
                             font-semibold py-3 lg:py-4 px-6 lg:px-8 rounded-xl lg:rounded-2xl 
                             transition-all duration-300 backdrop-blur-sm border border-blue-500/30"
                >
                  Yopish
                </button>
              </div>
            </div>
          </div>
        </div>
      )}

      <style jsx>{`
        @keyframes fade-in-up {
          from {
            opacity: 0;
            transform: translateY(30px);
          }
          to {
            opacity: 1;
            transform: translateY(0);
          }
        }
        
        .animate-fade-in-up {
          animation: fade-in-up 0.8s ease-out forwards;
        }
        
        .line-clamp-3 {
          display: -webkit-box;
          -webkit-line-clamp: 3;
          -webkit-box-orient: vertical;
          overflow: hidden;
        }
        
        /* Mobile optimizations */
        @media (max-width: 768px) {
          .container {
            padding-left: 1rem;
            padding-right: 1rem;
          }
        }
        
        /* Tablet optimizations */
        @media (min-width: 768px) and (max-width: 1024px) {
          .grid {
            gap: 1.5rem;
          }
        }

        /* Scroll behavior for modal */
        .modal-content {
          scrollbar-width: thin;
          scrollbar-color: rgba(59, 130, 246, 0.5) rgba(255, 255, 255, 0.1);
        }
        
        .modal-content::-webkit-scrollbar {
          width: 6px;
        }
        
        .modal-content::-webkit-scrollbar-track {
          background: rgba(255, 255, 255, 0.1);
          border-radius: 10px;
        }
        
        .modal-content::-webkit-scrollbar-thumb {
          background: rgba(59, 130, 246, 0.5);
          border-radius: 10px;
        }
        
        .modal-content::-webkit-scrollbar-thumb:hover {
          background: rgba(59, 130, 246, 0.7);
        }
      `}</style>
    </div>
  );
};

export default BlogSection;