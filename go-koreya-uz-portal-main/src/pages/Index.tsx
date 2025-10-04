// src/pages/Index.tsx
import { useState, useRef, useCallback } from "react";
import { ParallaxProvider } from 'react-scroll-parallax';
import { useInView } from 'react-intersection-observer';


import Header from "@/components/Header";
import HeroSection from "@/components/HeroSection";
import ServicePackages from "@/components/ServicePackages";
import ConsultationModal from "@/components/ConsultationModal";
import DarkVeil from '../components/DarkVeil';
import AboutUs from '../components/AboutUs';
import Universities from '../components/Universities'; // 'ui/' qo'shildi
import SuccessStories from '../components/SuccessStories';
import BlogSection from '../components/BlogSection';
import Footer from '../components/Footer';
import SectionWrapper from '../components/SectionWrapper';
import TotalExpensesSection from '../components/TotalExpensesSection';

const Index = () => {
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedPackage, setSelectedPackage] = useState<string | null>(null);

  // Scroll uchun alohida useRef'lar
  const homeScrollRef = useRef<HTMLDivElement>(null);
  const aboutUsScrollRef = useRef<HTMLDivElement>(null);
  const servicesScrollRef = useRef<HTMLDivElement>(null);
  const expensesScrollRef = useRef<HTMLDivElement>(null);
  const universitiesScrollRef = useRef<HTMLDivElement>(null);
  const storiesScrollRef = useRef<HTMLDivElement>(null);
  const blogScrollRef = useRef<HTMLDivElement>(null); 
  const contactScrollRef = useRef<HTMLDivElement>(null);

  // InView holatlari uchun useInView hooklari
  const { ref: homeInViewRef, inView: isHomeInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: aboutUsInViewRef, inView: isAboutUsInView } = useInView({ threshold: 0.3, triggerOnce: false }); 
  const { ref: servicesInViewRef, inView: isServicesInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: expensesInViewRef, inView: isExpensesInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: universitiesInViewRef, inView: isUniversitiesInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: storiesInViewRef, inView: isStoriesInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: blogInViewRef, inView: isBlogInView } = useInView({ threshold: 0.3, triggerOnce: false });
  const { ref: contactInViewRef, inView: isContactInView } = useInView({ threshold: 0.3, triggerOnce: false });


  // Scroll va InView ref'larini birlashtirish uchun useCallback funksiyalari
  const setHomeRefs = useCallback((node: HTMLDivElement | null) => {
    homeScrollRef.current = node;
    homeInViewRef(node);
  }, [homeInViewRef]);

  const setAboutUsRefs = useCallback((node: HTMLDivElement | null) => {
    aboutUsScrollRef.current = node;
    aboutUsInViewRef(node);
  }, [aboutUsInViewRef]);

  const setServicesRefs = useCallback((node: HTMLDivElement | null) => {
    servicesScrollRef.current = node;
    servicesInViewRef(node);
  }, [servicesInViewRef]);

  const setExpensesRefs = useCallback((node: HTMLDivElement | null) => {
    expensesScrollRef.current = node;
    expensesInViewRef(node);
  }, [expensesInViewRef]);

  const setUniversitiesRefs = useCallback((node: HTMLDivElement | null) => {
    universitiesScrollRef.current = node;
    universitiesInViewRef(node);
  }, [universitiesInViewRef]);

  const setStoriesRefs = useCallback((node: HTMLDivElement | null) => {
    storiesScrollRef.current = node;
    storiesInViewRef(node);
  }, [storiesInViewRef]);

  const setBlogRefs = useCallback((node: HTMLDivElement | null) => {
    blogScrollRef.current = node;
    blogInViewRef(node);
  }, [blogInViewRef]);

  const setContactRefs = useCallback((node: HTMLDivElement | null) => {
    contactScrollRef.current = node;
    contactInViewRef(node);
  }, [contactInViewRef]);

  const handleScrollToHome = () => {
    homeScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToServices = () => {
    servicesScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToAboutUs = () => { 
    aboutUsScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToExpenses = () => {
    expensesScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToUniversities = () => {
    universitiesScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToStories = () => {
    storiesScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToBlog = () => { 
    blogScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const handleScrollToContact = () => {
    contactScrollRef.current?.scrollIntoView({ behavior: 'smooth' });
  };

  const openConsultationModal = (packageName: string | null = null) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  const openPackageDetailsModal = (packageName: string) => {
    setSelectedPackage(packageName);
    setIsModalOpen(true);
  };

  return (
    <ParallaxProvider>
      <div className="min-h-screen bg-black flex flex-col">

        <div className="fixed top-0 left-0 w-full h-full z-0">
          <DarkVeil />
        </div>

        <div className="relative z-10 flex-grow">
          <Header
            onHomeClick={handleScrollToHome}
            onConsultationClick={() => openConsultationModal()}
            onServicesClick={handleScrollToServices}
            onExpensesClick={handleScrollToExpenses}
            onUniversitiesClick={handleScrollToUniversities}
            onStoriesClick={handleScrollToStories}
            onContactClick={handleScrollToContact}
            isHomeInView={isHomeInView}
            AboutUsInView={isAboutUsInView} 
            isServicesInView={isServicesInView}
            isExpensesInView={isExpensesInView}
            isUniversitiesInView={isUniversitiesInView}
            isStoriesInView={isStoriesInView}
            isBlogInView={isBlogInView} 
            isContactInView={isContactInView}
          />
          <main>
            <div ref={setHomeRefs}>
              <HeroSection onButtonClick={handleScrollToServices} />
            </div>

            {}
            <div ref={setAboutUsRefs}> {}
              <SectionWrapper>
                <AboutUs />
              </SectionWrapper>
            </div>

            <div ref={setServicesRefs}>
              <SectionWrapper>
                <ServicePackages onDetailsClick={openPackageDetailsModal} />
              </SectionWrapper>
            </div>

            <div ref={setExpensesRefs}>
              <TotalExpensesSection onDetailsButtonClick={openConsultationModal} />
            </div>

            <div ref={setUniversitiesRefs}>
              <SectionWrapper>
                <Universities />
              </SectionWrapper>
            </div>

            <div ref={setStoriesRefs}>
              <SectionWrapper>
                <SuccessStories />
              </SectionWrapper>
            </div>

            {}
            <div ref={setBlogRefs}> {}
              <SectionWrapper>
                <BlogSection />
              </SectionWrapper>
            </div>

          </main>
        </div>

        <div ref={setContactRefs} className="relative z-10">
          <SectionWrapper>
            <Footer />
          </SectionWrapper>
        </div>

        <ConsultationModal
          isOpen={isModalOpen}
          onClose={() => setIsModalOpen(false)}
          selectedPackage={selectedPackage}
        />
      </div>
    </ParallaxProvider>
  );
};

export default Index;