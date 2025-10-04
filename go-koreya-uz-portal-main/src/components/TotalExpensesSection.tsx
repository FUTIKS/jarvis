// src/components/TotalExpensesSection.tsx
import React from 'react';
import SectionWrapper from './SectionWrapper';

const IconConsulting = () => (
    <svg className="h-4 w-4 text-primary-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M8 10h.01M12 10h.01M16 10h.01M9 16H5a2 2 0 01-2-2V6a2 2 0 012-2h14a2 2 0 012 2v8a2 2 0 01-2 2h-5l-5 5v-5z" />
    </svg>
);
const IconApplicationFee = () => (
    <svg className="h-4 w-4 text-primary-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 5H7a2 2 0 00-2 2v12a2 2 0 002 2h10a2 2 0 002-2V7a2 2 0 00-2-2h-2M9 5a2 2 0 002 2h2a2 2 0 002-2M9 5a2 2 0 012-2h2a2 2 0 012 2m-3 7h3m-3 4h3m-6-4h.01M11 10.828V12h.172l4.93-4.93-1.172-1.172L11 10.828z" />
    </svg>
);
const IconContract = () => (
    <svg className="h-4 w-4 text-primary-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M9 12h6m-6 4h6m2 5H7a2 2 0 01-2-2V5a2 2 0 012-2h5.586a1 1 0 01.707.293l5.414 5.414a1 1 0 01.293.707V19a2 2 0 01-2 2z" />
    </svg>
);
const IconVisa = () => (
    <svg className="h-4 w-4 text-primary-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 2C6.477 2 2 6.477 2 12s4.477 10 10 10 10-4.477 10-10S17.523 2 12 2zm0 2c4.418 0 8 3.582 8 8s-3.582 8-8 8-8-3.582-8-8 3.582-8 8-8zm-1 3v2h2V7h-2zm0 4v6h2v-6h-2z" />
    </svg>
); 
const IconKDB = () => (
    <svg className="h-4 w-4 text-primary-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M19 21V5a2 2 0 00-2-2H7a2 2 0 00-2 2v16m14 0h2m-2 0h-5m-9 0H3m2 0h5M9 7h1m-1 4h1m4-4h1m-1 4h1m-5 10v-5a1 1 0 011-1h2a1 1 0 011 1v5m-4 0h4" />
    </svg>
);
const IconBilet = () => (
    <svg className="h-4 w-4 text-primary-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M12 19l9 2-9-18-9 18 9-2zm0 0v-8" />
    </svg>
);
const IconKvartira = () => (
    <svg className="h-4 w-4 text-primary-custom" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
        <path strokeLinecap="round" strokeLinejoin="round" d="M3 12l2-2m0 0l7-7 7 7M5 10v10a1 1 0 001 1h3m10-11l2 2m-2-2v10a1 1 0 01-1 1h-3m-6 0a1 1 0 001-1v-4a1 1 0 011-1h2a1 1 0 011 1v4a1 1 0 001 1m-6 0h6" />
    </svg>
);

const expensesData = [
    { label: 'Konsalting', amount: '$0 - $500', icon: <IconConsulting /> },
    { label: 'Application Fee', amount: '$0 - $200', icon: <IconApplicationFee /> },
    { label: 'Kontrakt', amount: '$0 - $3,000', icon: <IconContract /> },
    { label: 'Visa', amount: '$200', icon: <IconVisa /> },
    { label: 'KDB (Koreya Depozit Banki)', amount: '$0 - $1,400', icon: <IconKDB /> },
    { label: 'Bilet', amount: '$600 - $1,000', icon: <IconBilet /> },
    { label: 'Kvartira', amount: '$200 - $400', icon: <IconKvartira /> },
];

const summaryData = [
    { label: 'Eng kam xarajat', amount: '$1,000', bgColor: 'bg-korea-red' },
    { label: 'Eng yuqori xarajat', amount: '$6,700', bgColor: 'bg-korea-blue' },
    { label: 'O\'rtacha xarajat', amount: '~$5,000', bgColor: 'bg-success' },
];

const TotalExpensesSection = ({ onDetailsButtonClick }: { onDetailsButtonClick: (packageInfo: string) => void }) => {
    return (
        <SectionWrapper>
            <div className="container mx-auto py-12 md:py-16 px-4 text-white text-center">
                <h2 className="text-3xl md:text-4xl font-heading font-bold mb-3 text-white drop-shadow-lg animate-fade-in-up">
                    Koreyaga Ketguncha Umumiy Xarajat
                </h2>
                <p className="max-w-xl mx-auto text-gray-400 text-sm md:text-base mb-10 animate-fade-in-up delay-100">
                    To'liq shaffoflik - barcha xarajatlarni oldindan bilib oling.
                </p>

                <div className="max-w-2xl mx-auto bg-card glass rounded-2xl p-5 md:p-7 shadow-modal-shadow animate-scale-in">
                    <div className="space-y-3 mb-7">
                        {expensesData.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-2.5 px-4 bg-secondary rounded-xl border border-border/70 smooth-transition hover:border-primary-custom/70 hover:shadow-subtle-dark cursor-default">
                                <div className="flex items-center gap-3">
                                    <span className="p-2 rounded-full bg-primary-custom/10 border border-primary-custom/20 flex-shrink-0">{item.icon}</span> 
                                    <span className="text-sm md:text-base font-inter font-medium text-gray-100 text-left">{item.label}</span>
                                </div>
                                <span className="text-sm md:text-base font-inter font-bold text-primary-custom text-right">{item.amount}</span>
                            </div>
                        ))}
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-3 gap-4 mb-8">
                        {summaryData.map((item, index) => (
                            <div 
                                key={index} 
                                className={`flex flex-col items-center justify-center 
                                    py-1.5 px-2 rounded-xl text-white font-inter font-bold text-center 
                                    border border-transparent smooth-transition relative overflow-hidden group ${item.bgColor}
                                    `} 
                            >
                                <div className={`absolute inset-0 bg-white opacity-0 group-hover:opacity-5 transition-opacity duration-300`}></div>
                                <p className="text-sm md:text-base mb-0 z-10 leading-tight">{item.amount}</p> {/* Shrift o'lchami yanada kichraytirildi, mb-0 */}
                                <p className="text-xs opacity-90 z-10 leading-tight">{item.label}</p> {/* Shrift o'lchami faqat xs, leading-tight */}
                            </div>
                        ))}
                    </div>

                    <button 
                        onClick={() => onDetailsButtonClick("Umumiy Xarajatlar Bo'yicha Konsultatsiya")}
                        className="inline-flex items-center justify-center px-6 py-2.5 bg-accent-custom text-white font-bold text-base rounded-full shadow-lg hover:bg-opacity-90 smooth-transition transform hover:scale-105 animate-fade-in-up delay-200 focus:outline-none focus:ring-2 focus:ring-accent-custom focus:ring-offset-2 focus:ring-offset-background"
                    >
                        Batafsil ma'lumot olish
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 ml-2" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17 8l4 4m0 0l-4 4m4-4H3" />
                        </svg>
                    </button>
                </div>
            </div>
        </SectionWrapper>
    );
};

export default TotalExpensesSection;