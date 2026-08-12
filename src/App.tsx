import React, { useState, useEffect } from 'react';
import { Navbar } from './components/Navbar';
import { Hero3D } from './components/Hero3D';
import { AboutSection } from './components/AboutSection';
import { ServicesSection } from './components/ServicesSection';
import { ProcessSection } from './components/ProcessSection';
import { WhyChooseUsSection } from './components/WhyChooseUsSection';
import { PortfolioSection } from './components/PortfolioSection';
import { ContactSection } from './components/ContactSection';
import { Footer } from './components/Footer';
import { ProjectEstimatorModal } from './components/ProjectEstimatorModal';
import { IntroAnimation } from './components/IntroAnimation';
import { MessageCircle, Play } from 'lucide-react';
import { COMPANY_INFO } from './data/companyData';

export default function App() {
  const [showIntro, setShowIntro] = useState<boolean>(true);
  const [activeTab, setActiveTab] = useState<string>('home');
  const [selectedServiceForContact, setSelectedServiceForContact] = useState<string>('');
  const [selectedProjectForContact, setSelectedProjectForContact] = useState<string>('');
  const [estimatorOpen, setEstimatorOpen] = useState<boolean>(false);

  // Scroll spy to update activeTab on scrolling
  useEffect(() => {
    const handleScroll = () => {
      const sections = ['home', 'about', 'services', 'process', 'why-choose-us', 'portfolio', 'contact'];
      const scrollPos = window.scrollY + 200;

      for (const sectionId of sections) {
        const el = document.getElementById(sectionId);
        if (el) {
          const top = el.offsetTop;
          const height = el.offsetHeight;
          if (scrollPos >= top && scrollPos < top + height) {
            setActiveTab(sectionId);
            break;
          }
        }
      }
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const handleNavigateToSection = (sectionId: string) => {
    setActiveTab(sectionId);
    const element = document.getElementById(sectionId);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    } else {
      window.scrollTo({ top: 0, behavior: 'smooth' });
    }
  };

  const handleSelectServiceForContact = (serviceTitle: string) => {
    setSelectedServiceForContact(serviceTitle);
    handleNavigateToSection('contact');
  };

  const handleSelectProjectForContact = (projectTitle: string) => {
    setSelectedProjectForContact(projectTitle);
    handleNavigateToSection('contact');
  };

  return (
    <div className="min-h-screen bg-slate-50 text-slate-800 antialiased selection:bg-purple-200 selection:text-purple-900 font-sans relative">
      
      {/* 3D Intro Entrance Animation */}
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}

      {/* Navigation Header */}
      <Navbar
        activeTab={activeTab}
        setActiveTab={handleNavigateToSection}
        onOpenEstimator={() => setEstimatorOpen(true)}
      />

      {/* Main Sections */}
      <main>
        {/* Hero Section */}
        <div id="home">
          <Hero3D
            onNavigate={handleNavigateToSection}
            onOpenEstimator={() => setEstimatorOpen(true)}
          />
        </div>

        {/* About Section */}
        <AboutSection />

        {/* Services Section */}
        <ServicesSection
          onSelectServiceForContact={handleSelectServiceForContact}
        />

        {/* Process Section */}
        <ProcessSection />

        {/* Why Choose Us Section */}
        <WhyChooseUsSection />

        {/* Portfolio Section */}
        <PortfolioSection
          onSelectProjectForContact={handleSelectProjectForContact}
        />

        {/* Contact Section */}
        <ContactSection
          initialService={selectedServiceForContact}
          initialProject={selectedProjectForContact}
        />
      </main>

      {/* Footer */}
      <Footer
        onNavigate={handleNavigateToSection}
        onOpenEstimator={() => setEstimatorOpen(true)}
      />

      {/* Interactive Project Scope Estimator Modal */}
      <ProjectEstimatorModal
        isOpen={estimatorOpen}
        onClose={() => setEstimatorOpen(false)}
      />

      {/* Floating Quick Action Controls (Replay Intro + WhatsApp) */}
      <div className="fixed bottom-6 right-6 z-40 flex flex-col items-end gap-2.5">
        
        {/* Replay 3D Intro Button */}
        {!showIntro && (
          <button
            onClick={() => setShowIntro(true)}
            className="flex items-center gap-1.5 bg-white/90 hover:bg-white text-slate-700 hover:text-indigo-600 font-semibold text-xs px-3 py-2 rounded-full shadow-md border border-purple-100/80 backdrop-blur-md transition-all cursor-pointer"
            title="Replay 3D Opening Animation"
          >
            <Play className="w-3.5 h-3.5 text-indigo-600 fill-indigo-600" />
            <span className="hidden sm:inline">3D Intro</span>
          </button>
        )}

        {/* WhatsApp Connect */}
        <a
          href={`https://wa.me/${COMPANY_INFO.phoneClean.replace('+', '')}?text=Hello%20Syntheriq%20Technologies,%20I%20would%20like%20to%20discuss%20a%20software%20project.`}
          target="_blank"
          rel="noopener noreferrer"
          className="flex items-center gap-2 bg-emerald-500 hover:bg-emerald-600 text-white font-semibold text-xs px-4 py-3 rounded-full shadow-lg hover:shadow-xl transition-all duration-300 transform hover:-translate-y-1 cursor-pointer"
          title="Chat on WhatsApp"
        >
          <MessageCircle className="w-5 h-5 fill-white" />
          <span className="hidden sm:inline">WhatsApp Us</span>
        </a>
      </div>

    </div>
  );
}
