//sendMessage.ts 

import { sql } from '@vercel/postgres';
import { VercelRequest, VercelResponse } from '@vercel/node';

export default async function handler(
  request: VercelRequest,
  response: VercelResponse,
) {
  if (request.method !== 'POST') {
    return response.status(405).json({ message: 'Faqat POST so\'rovlari qabul qilinadi.' });
  }

  try {
    const { name, phone, selectedPackage, program } = request.body;

    // Ma'lumotlar to'liqligini tekshirish
    if (!name || !phone) {
      return response.status(400).json({ message: 'Ism va telefon raqami kiritilishi shart.' });
    }

    // `message` ustuni uchun matn tayyorlash
    let messageText = '';
    if (selectedPackage) {
      messageText = `Tanlangan paket: ${selectedPackage}`;
    } else if (program) {
      messageText = `Tanlangan dastur: ${program}`;
    }

    // Ma'lumotlarni bazaga yozish
    await sql`
      INSERT INTO Consultations (name, phone, message) 
      VALUES (${name}, ${phone}, ${messageText});
    `;
    
    // Muvaffaqiyatli javobni yuborish
    return response.status(200).json({ message: 'Murojaat muvaffaqiyatli yuborildi!' });

  } catch (error) {
    console.error('Database Error:', error); 

    // Xatolik javobini yuborish
    return response.status(500).json({ 
      message: 'Serverda ichki xatolik yuz berdi.',
      error: (error as Error).message
    });
  }
}