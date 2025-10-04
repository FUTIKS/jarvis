// src/components/HeroSection.tsx
import { Button } from "@/components/ui/button";
import { ArrowRight, Globe, GraduationCap } from "lucide-react";
import { Parallax } from 'react-scroll-parallax';

const HeroSection = ({ onButtonClick }) => {
  return (
    <section id="home" className="min-h-screen flex items-center justify-center pt-20 relative z-10 overflow-hidden">
      <Parallax translateY={['-20px', '20px']} className="w-full h-full flex items-center justify-center"> {/* Parallax komponenti */}
        <div className="container mx-auto px-4 text-center">
          <div className="max-w-4xl mx-auto fade-in-up">
            {/* Main Headline - font-heading ishlatildi */}
            <h1 className="text-5xl md:text-7xl font-heading font-bold mb-6 leading-tight">
              <span className="text-foreground">Koreyaga </span>
              <span className="text-korea-red">Oching</span>
              <br />
              <span className="text-korea-blue">O'z Eshigingizni</span>
            </h1>

            {/* Sub-headline - font-inter ishlatildi */}
            <p className="text-xl md:text-2xl text-muted-foreground mb-8 leading-relaxed max-w-3xl mx-auto font-inter">
              Janubiy Koreyadagi ta'lim, martaba va sayohatingiz uchun zamonaviy va ishonchli ekspert yordami taklif etamiz.
            </p>

            {/* Features */}
            <div className="flex flex-col md:flex-row items-center justify-center gap-8 mb-10">
              <div className="flex items-center gap-3 text-lg">
                <div className="p-2 rounded-full bg-korea-blue/20">
                  <GraduationCap className="w-6 h-6 text-korea-blue" />
                </div>
                <span className="text-foreground font-inter">Premium Ta'lim</span> {/* font-inter qo'shildi */}
              </div>
              <div className="flex items-center gap-3 text-lg">
                <div className="p-2 rounded-full bg-korea-red/20">
                  <Globe className="w-6 h-6 text-korea-red" />
                </div>
                <span className="text-foreground font-inter">Global Imkoniyatlar</span> {/* font-inter qo'shildi */}
              </div>
            </div>

            {/* CTA Button */}
            <Button
              onClick={onButtonClick}
              variant="hero"
              size="lg"
              className="px-12 py-6 text-xl"
            >
              Xizmatlar Bilan Tanishing
              <ArrowRight className="w-6 h-6 ml-2" />
            </Button>

            {/* Trust Indicators - font-inter ishlatildi */}
            <div className="mt-12 flex flex-col md:flex-row items-center justify-center gap-8 text-sm text-muted-foreground font-inter">
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>95% Viza Kafolati</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>500+ Muvaffaqiyatli Talaba</span>
              </div>
              <div className="flex items-center gap-2">
                <div className="w-2 h-2 bg-success rounded-full"></div>
                <span>6+ Yillik Tajriba</span>
              </div>
            </div>
          </div>
        </div>
      </Parallax>
    </section>
  );
};

export default HeroSection;