// src/components/ServicePackages.tsx
import { Button } from "@/components/ui/button";
import { Check, Shield, Star, Crown } from "lucide-react";

import { useInView } from 'react-intersection-observer';

const ServicePackages = ({ onDetailsClick }) => {
  const packages = [
    {
      name: "ODDIY",
      price: "6,500,000 SO'M",
      icon: <Star className="w-8 h-8 text-korea-blue" />,
      features: [
        "2 nusxada hujjatlarni tayyorlash (apostil, tarjima notarius)",
        "Talaba uchun 1 kunlik bank ma'lumotnomasi  (Kapital)",
        "Ota-ona uchun 1 kunlik bank ma'lumotnomasi  (Kapital)",
        "O'qishga qabul qilinishini kafolatlash",
        "Barcha masalalarda nazariy ko'rsatma va maslaxatlar berish"
      ],
      note: "O`qishga kiraolmasangiz to'lov qaytarilmaydi",
      buttonText: "BATAFSIL MA'LUMOT OLISH",
      popular: false
    },
    {
      name: "ZERO LOSS",
      price: "$2,800",
      icon: <Shield className="w-8 h-8 text-korea-red" />,
      features: [
        "'Oddiy' tarifdagi barcha hizmatlar",
        "Universitet ariza to'lovi",
        "Bir oylik KDB bank ma'lumotnomasi ",
        "Viza hujjatlari va to'lovlari"
      ],
      note: "Viza chiqmasa, to'lov qaytariladi",
      buttonText: "BATAFSIL MA'LUMOT OLISH",
      popular: true
    },
    {
      name: "VIZA GARANTIYA",
      price: "$5,800",
      icon: <Crown className="w-8 h-8 text-korea-blue" />,
      features: [
        "'Zero Loss' tarifdagi barcha hizmatlar",
        "Birinchi semester kontrakt to'lovi ($1,800 gacha)",
        "Aviabilet (bir tomonlama)",
        "Bir oylik kvartira puli (goshiwon)",
        "Kutib olish va Sim karta"
      ],
      note: "Viza chiqmasa, to'lov qaytariladi",
      buttonText: "BATAFSIL MA'LUMOT OLISH",
      popular: false
    }
  ];

  return (
    <section id="packages" className="py-20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16"> {}
          <h2 className="text-4xl md:text-5xl font-heading font-bold mb-6"> {}
            <span className="text-korea-red">XIZMAT</span>{" "}
            <span className="text-foreground">PAKETLARI</span>
          </h2>
          <p className="text-xl text-muted-foreground max-w-2xl mx-auto font-inter"> {}
            Sizning ehtiyojlaringizga mos keladigan mukammal paketni tanlang
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 max-w-7xl mx-auto">
          {packages.map((pkg, index) => {
            
            const { ref, inView } = useInView({
              triggerOnce: true, 
              threshold: 0.2,    
            });

            return (
              <div
                key={pkg.name}
                ref={ref} 
                className={`relative glass rounded-2xl p-8 smooth-transition hover:scale-105 transform ${
                  pkg.popular 
                    ? "ring-2 ring-korea-red glow-red" 
                    : "hover:glow-blue"
                } ${
                  inView ? 'animate-fade-in-up' : 'opacity-0' 
                }`}
              
                style={{ animationDelay: `${index * 0.15}s` }} 
              >
                {pkg.popular && (
                  <div className="absolute -top-4 left-1/2 transform -translate-x-1/2">
                    <div className="bg-korea-red text-korea-red-foreground px-6 py-2 rounded-full text-sm font-bold font-inter"> {}
                      ENG MASHHUR
                    </div>
                  </div>
                )}

                <div className="text-center mb-8">
                  <div className="flex justify-center mb-4">
                    {pkg.icon}
                  </div>
                  <h3 className="text-2xl font-heading font-bold text-foreground mb-2"> {}
                    {pkg.name}
                  </h3>
                  <div className="text-3xl font-black text-korea-blue mb-2 font-inter"> {}
                    {pkg.price}
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  {pkg.features.map((feature, featureIndex) => (
                    <div key={featureIndex} className="flex items-start gap-3">
                      <Check className="w-5 h-5 text-success mt-0.5 flex-shrink-0" />
                      <span className="text-sm text-foreground leading-relaxed font-inter"> {}
                        {feature}
                      </span>
                    </div>
                  ))}
                </div>

                <div className="mb-6 p-4 bg-success/10 rounded-lg border border-success/20">
                  <p className="text-sm text-success font-semibold text-center font-inter"> {}
                    {pkg.note}
                  </p>
                </div>

                <Button
                  onClick={() => onDetailsClick(pkg.name)}
                  variant="korea-blue"
                  size="lg"
                  className="w-full font-bold font-inter" 
                >
                  {pkg.buttonText}
                </Button>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ServicePackages;