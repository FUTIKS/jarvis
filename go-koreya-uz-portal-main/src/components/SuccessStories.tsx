// src/components/SuccessStories.tsx

import React from 'react';

// Matnni qisqartirish uchun yordamchi funksiya
const truncateText = (text, maxLength) => {
  if (text.length > maxLength) {
    return text.substring(0, maxLength) + '...';
  }
  return text;
};

const storiesData = [
  {
    name: 'Akhtamov Islom',
    university: 'Seoul National University',
    imageUrl: '/images/students/akhtamov_islom.jpg',
    review: "Akhtamov Islom Seul Milliy Universitetining magistratura bosqichiga muvaffaqiyatli qabul qilindi. Uning qat'iyati va akademik yutuqlari bu muhim qadamning garovi bo'ldi. Ishonamizki, Osiyoning yetakchi oliygohlaridan birida olingan tajriba uning oldida yangi ufqlar ochadi."
  },
  {
    name: 'Akramov Artur',
    university: 'Yonsei University',
    imageUrl: '/images/students/akramov_artur.jpg',
    review: "Akramov Artuming Yonsei Universiteti magistraturasiga qabul qilinganligi bilan faxrlanamiz. Bu uning astoydil mehnati va yuqori sifatli xalqaro taʼlim olishga intilishining dalilidir. Uning hikoyasi Koreyada o'qishni orzu qilayotgan bo'lajak abituriyentlar uchun ilhomlantiruvchi namuna bo'lib xizmat qiladi."
  },
  {
    name: 'Karimova Mushtariy',
    university: 'KAIST',
    imageUrl: '/images/students/karimova_mushtariy.jpg',
    review: "Karimova Mushtariy dunyoning eng innovatsion universitetlaridan biri bo'lgan KAIST'ga (Korea Advanced Institute of Science and Technology) qabul qilinib, o'zining ajoyib qobiliyatlarini namoyish etdi. Uning KAIST magistraturasiga qabul qilinishi, sabr-toqat bilan eng ulkan maqsadlarga ham erishish mumkinligini tasdiqlaydi. Unga samarali ilmiy-tadqiqot ishlarida muvaffaqiyatlar tilaymiz."
  },
  {
    name: 'Khayitov Mirzakhidjon',
    university: 'Korea University',
    imageUrl: '/images/students/khayitov_mirzokhidjon.jpg',
    review: "Хайитов Мирзахиджоннинг Korea University magistraturasiga qabul qilinishi uning akademik salohiyatining yorqin ko‘rsatkichidir. Uning o‘z ta’limini davom ettirish uchun shunday nufuzli o‘quv dargohini tanlaganidan mamnunmiz. Bu qadam, shubhasiz, uning kasbiy va shaxsiy rivojlanishini boyitadi."
  },
  {
    name: 'Khodjiev Uktam',
    university: 'Hanyang University',
    imageUrl: '/images/students/khodjiev_uktam.jpg',
    review: "Khodjiev Uktam Hanyang University magistraturasiga muvaffaqiyatli kirdi. Uning g‘ayrati va kelajakdagi aniq maqsadlari unga bu muhim niyatga erishishga yordam berdi. Hanyang University o‘zining kuchli dasturlari bilan mashhur va Uktam tanlagan sohasida muvaffaqiyat qozonishiga ishonamiz."
  },
  {
    name: 'Khudoev Akhtam',
    university: 'Sungkyunkwan University',
    imageUrl: '/images/students/khudoev_akhtam.jpg',
    review: "Худоев Актам Sungkyunkwan University magistraturasiga qabul qilinib, ta’sirchan natijaga erishdi. Bu yutuq uning eng yuqori akademik darajada ta’lim olishga tayyorligini ta’kidlaydi. Актамга yangi o‘quv yurtida muvaffaqiyatli moslashish va chuqur bilim olishini tilaymiz."
  },
  {
    name: 'Kirg\'izov Azizjon',
    university: 'Ewha Womans University',
    imageUrl: '/images/students/kirgizov_azizjon.jpg',
    review: "Kirg'izov Azizjonni Ewha Womans University'ga qabul qilinishi bilan tabriklaymiz. Ushbu nufuzli ta'lim muassasasi unga rivojlanish va ixtisoslashish uchun noyob imkoniyatlar yaratadi. Uning misoli orzuga erishish qat'iyat va puxta tayyorgarlik orqali amalga oshishini ko'rsatadi."
  },
  {
    name: 'Nazirjonov Izzatilla',
    university: 'Pohang University',
    imageUrl: '/images/students/nazirjanov_izzatilla.jpg',
    review: "Nazirjonov Izzatilla Pohang University of Science and Technology (POSTECH) magistraturasiga muvaffaqiyatli o'tdi. Koreyaning yetakchi ilmiy-texnik universitetlaridan birini tanlashi uning jiddiy akademik ambitsiyalaridan dalolat beradi. Unga tadqiqot faoliyatida muvaffaqiyatlar tilaymiz."
  },
  {
    name: 'Obidov Abdulaziz',
    university: 'Kyung Hee University',
    imageUrl: '/images/students/obidov_abdulaziz.jpg',
    review: "Obidov Abdulaziz Kyung Hee University magistratura bosqichiga muvaffaqiyatli qabul qilindi. Bu universitet o'zining xalqaro yondashuvi va sifatli ta'limi bilan mashhur. Ishonamizki, Abdulaziz yangi akademik muhitda o'z salohiyatini to'liq ro'yobga chiqaradi."
  },
  {
    name: 'Parmonov Ilkhom',
    university: 'Sogang University',
    imageUrl: '/images/students/parmonov_ilkhom.jpg',
    review: "Parmonov Ilkhom Sogang University magistraturasiga qabul qilinib, katta muvaffaqiyatga erishdi. Bu chuqur bilim va tanqidiy fikrlashni rivojlantirishga intiluvchilar uchun ajoyib tanlovdir. Uning Koreyaning eng yaxshi universitetlaridan birining talabalari qatorida ekanligidan xursandmiz."
  },
  {
    name: 'Rashidov Mukhammadali',
    university: 'Chung-Ang University',
    imageUrl: '/images/students/rashidov_mukhammadali.jpg',
    review: "Rashidov Muhammadali Chung-Ang University magistranti bo'ldi. Uning ushbu universitetga kirishi uning tinimsiz mehnati va xalqaro tajriba orttirishga intilishining natijasidir. Unga muvaffaqiyatli o'qish va yorqin kelajak tilaymiz."
  },
  {
    name: 'Sadullaev Erkinjon',
    university: 'Konkuk University',
    imageUrl: '/images/students/sadullaev_erkinjon.jpg',
    review: "Садуллаев Эркинжон Konkuk University magistraturasiga muvaffaqiyatli qabul qilindi. Uning qat’iyati va o‘qishga bo‘lgan ishtiyoqi natijasida erishilgan bu yutuq uning akademik yo‘lidagi muhim bosqichdir. Yangi bilim va tajribalar sari olg‘a!"
  },
  {
    name: 'Sayfullaev Abdulla',
    university: 'Dongguk University',
    imageUrl: '/images/students/sayfullaev_abdulla.jpg',
    review: "Sayfullaev Abdulla Dongguk University magistraturasiga qabul qilindi. Bu uning akademik mukammallikka intilishini va Koreyada ta'lim olish istagini namoyon etadi. Uning kelajakdagi o'qishlarida katta muvaffaqiyatlar tilaymiz."
  },
  {
    name: 'Sultonov Ulug\'bek',
    university: 'Inha University',
    imageUrl: '/images/students/sultonov_ulugbek.jpg',
    review: "Султонов Улуғбек Inha University (Inha University in Tashkentning asosiy universiteti) magistraturasiga qabul qilindi. Bu uning ulkan ambitsiyalari va sifatli xalqaro ta'limga bo'lgan intilishining yana bir tasdig'idir. Улуғбекка kelgusi o'qishlarida omad tilaymiz!"
  },
  {
    name: 'Toshkentboev Shakhzodbek',
    university: 'Ajou University',
    imageUrl: '/images/students/toshkentboev_shakhzodbek.jpg',
    review: "Toshkentboev Shakhzodbek Ajou University magistraturasiga qabul qilinib, o'zining qat'iyatliligini isbotladi. Ushbu universitet unga chuqur bilim va tadqiqot imkoniyatlarini taqdim etadi. Шаҳзодбекка kelgusi ilmiy faoliyatida yorqin yutuqlar tilaymiz."
  },
  {
    name: 'Usupjonov Saidbek',
    university: 'Gachon University',
    imageUrl: '/images/students/usupjonov_saidbek.jpg',
    review: "Усупжонов Саидбек Gachon University magistraturasiga qabul qilindi. Bu uning shaxsiy va kasbiy rivojlanishi uchun yangi imkoniyatlar eshigini ochadi. Саидбекка Koreyadagi o'qishlari mobaynida ajoyib tajribalar va muvaffaqiyatlar tilaymiz."
  },
  {
    name: 'Yuldashalievna Maftuna',
    university: 'Dankook University',
    imageUrl: '/images/students/yuldashalievna_maftuna.jpg',
    review: "Yuldashalievna Maftuna Dankook University magistratura bosqichiga muvaffaqiyatli qabul qilindi. Uning akademik yo'lidagi bu muhim yutug'i, uning oldida yangi bilim va ko'nikmalar eshigini ochadi. Maftunaga kelgusi o'qishlarida ulkan zafarlar tilaymiz."
  },
  {
    name: 'Zokirov Muhammaddiyor',
    university: 'Hallym University',
    imageUrl: '/images/students/zokirov_muhammaddiyor.jpg',
    review: "Zokirov Muhammaddiyor Hallym University magistraturasiga qabul qilinib, Koreyada o'qishdek orzusiga erishdi. Bu uning uchun yangi madaniyat va ta'lim muhitida qimmatli tajriba orttirish imkoniyatidir. Унга kelajakdagi barcha rejalarida omad yor bo'lsin."
  }
];

const SuccessStories = () => {
  // Uzluksiz aylanish (loop) uchun ma'lumotlarni ikki marta nusxalash yetarli.
  const duplicatedData = [...storiesData, ...storiesData];
  const MAX_REVIEW_LENGTH = 150; // Izohlar uchun maksimal belgi soni

  return (
    // Asosiy bo'limning orqa fonini shaffof qilish uchun "bg-background" olib tashlandi
    <div className="overflow-hidden bg-transparent"> 
      <div className="py-16 text-white">
        <div className="text-center mb-12 px-4">
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-4">
            Biz Bilan Muvaffaqiyatga Erishganlar
          </h2>
          <p className="max-w-2xl mx-auto text-gray-300 font-inter">
            Har bir talabamizning yutug'i — bizning g'ururimiz. Koreyada o'qiyotgan talabalarimiz bilan tanishing.
          </p>
        </div>

        {/* Birinchi qator - chapdan o'ngga harakat (animate-scroll-left) */}
        <div className="relative mb-8 overflow-hidden">
          <div className="flex gap-8 animate-scroll-left">
            {duplicatedData.map((story, index) => (
              <div
                key={`row1-${index}`}
                // Karta o'lchamlari va paddingi kichiklashtirildi, fon shaffof
                className="flex-shrink-0 w-64 md:w-72 p-4 rounded-2xl border-2 border-primary-custom/30 
                           shadow-xl hover:shadow-2xl hover:shadow-primary-custom/20 
                           transition-all duration-300 hover:scale-105 hover:border-primary-custom/50
                           flex flex-col justify-between backdrop-blur-lg bg-transparent" 
              >
                <div className="flex items-center gap-4 mb-3"> {/* Gap va margin qisqartirildi */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-custom/20 rounded-full blur-xl"></div>
                    <img
                      src={story.imageUrl}
                      alt={story.name}
                      // Rasm o'lchami kichiklashtirildi
                      className="relative w-16 h-16 rounded-full object-cover border-3 border-primary-custom/60 
                                 shadow-lg ring-4 ring-primary-custom/20"
                      onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/64"; }} // Placeholder ham yangilandi
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-bold text-white mb-1">{story.name}</h4> {/* Nomi qalin va text-lg */}
                    <p className="text-sm text-gray-300 font-inter leading-relaxed">{story.university}</p>
                  </div>
                </div>
                {/* Sharhni qisqartirish */}
                <p className="text-xs text-gray-400 font-inter leading-tight">
                  {truncateText(story.review, MAX_REVIEW_LENGTH)}
                </p>
              </div>
            ))}
          </div>
        </div>

        {/* Ikkinchi qator - o'ngdan chapga harakat (animate-scroll-right) */}
        <div className="relative overflow-hidden">
          <div className="flex gap-8 animate-scroll-right">
            {duplicatedData.map((story, index) => (
              <div
                key={`row2-${index}`}
                // Karta o'lchamlari va paddingi kichiklashtirildi, fon shaffof
                className="flex-shrink-0 w-64 md:w-72 p-4 rounded-2xl border-2 border-primary-custom/30 
                           shadow-xl hover:shadow-2xl hover:shadow-primary-custom/20 
                           transition-all duration-300 hover:scale-105 hover:border-primary-custom/50
                           flex flex-col justify-between backdrop-blur-lg bg-transparent" 
              >
                <div className="flex items-center gap-4 mb-3"> {/* Gap va margin qisqartirildi */}
                  <div className="relative">
                    <div className="absolute inset-0 bg-primary-custom/20 rounded-full blur-xl"></div>
                    <img
                      src={story.imageUrl}
                      alt={story.name}
                      // Rasm o'lchami kichiklashtirildi
                      className="relative w-16 h-16 rounded-full object-cover border-3 border-primary-custom/60 
                                 shadow-lg ring-4 ring-primary-custom/20"
                      onError={(e) => { e.currentTarget.src = "https://via.placeholder.com/64"; }} // Placeholder ham yangilandi
                    />
                  </div>
                  <div className="flex-1">
                    <h4 className="text-lg font-heading font-bold text-white mb-1">{story.name}</h4> {/* Nomi qalin va text-lg */}
                    <p className="text-sm text-gray-300 font-inter leading-relaxed">{story.university}</p>
                  </div>
                </div>
                {/* Sharhni qisqartirish */}
                <p className="text-xs text-gray-400 font-inter leading-tight">
                  {truncateText(story.review, MAX_REVIEW_LENGTH)}
                </p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <style>{`
        /* O'ngga aylanish uchun animatsiya */
        @keyframes scroll-left {
          0% {
            transform: translateX(0);
          }
          100% {
            /* Ma'lumotlar ikki marta takrorlanganligi sababli, 
               birinchi to'liq qismning kengligi bo'yicha siljiymiz (-50%) */
            transform: translateX(-50%); 
          }
        }

        /* Chapga aylanish uchun animatsiya (orqaga) */
        @keyframes scroll-right {
          0% {
            /* Boshlanish nuqtasini sozlaymiz, shunda u scroll-left ning tugash nuqtasidan boshlanadi */
            transform: translateX(-50%); 
          }
          100% {
            transform: translateX(0);
          }
        }

        .animate-scroll-left {
          animation: scroll-left 40s linear infinite; /* Tezlikni sozlash mumkin */
        }

        .animate-scroll-right {
          animation: scroll-right 40s linear infinite; /* Tezlikni sozlash mumkin */
        }
      `}</style>
    </div>
  );
};

export default SuccessStories;