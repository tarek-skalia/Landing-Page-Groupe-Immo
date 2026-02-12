import React, { useState, useEffect } from 'react';
import { Menu, X, Loader2 } from 'lucide-react';
import Hero from './components/Hero';
import TrustBar from './components/TrustBar';
import FeatureCard from './components/FeatureCard';
import PropertyGrid from './components/PropertyGrid';
import Testimonials from './components/Testimonials';
import Footer from './components/Footer';
import { FEATURES, MAIN_SITE_URL, GOOGLE_SHEET_CSV_URL, FALLBACK_COMMUNE } from './constants';
import { fetchCommuneData } from './utils/csvParser';
import { CommuneConfig } from './types';

// We need to override the static imports in components since data is now async
// NOTE: Ideally, we pass props to components, but to keep changes minimal we will pass data via Context or simple prop drilling.
// For this structure, I will clone the Hero element or pass props to it.

const App: React.FC = () => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [loading, setLoading] = useState(true);
  const [communeData, setCommuneData] = useState<CommuneConfig>(FALLBACK_COMMUNE);

  useEffect(() => {
    const loadData = async () => {
      setLoading(true);
      
      // 1. Get Slug from URL
      const params = new URLSearchParams(window.location.search);
      const slug = (params.get('commune') || 'herstal').toLowerCase();

      // 2. Fetch Data from Sheet
      const db = await fetchCommuneData(GOOGLE_SHEET_CSV_URL);
      
      // 3. Find match or use fallback
      if (db[slug]) {
        setCommuneData(db[slug]);
        document.title = `Immobilier ${db[slug].name} | Vendez au meilleur prix avec Group Immo`;
      } else {
        // Use fallback but maybe update title
        setCommuneData(FALLBACK_COMMUNE);
        document.title = `Immobilier ${FALLBACK_COMMUNE.name} | Vendez au meilleur prix avec Group Immo`;
      }
      
      setLoading(false);
    };

    loadData();
  }, []);

  const toggleMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const closeMenu = () => {
    setIsMobileMenuOpen(false);
  };

  if (loading) {
      return (
          <div className="min-h-screen bg-brand-light flex items-center justify-center">
              <div className="text-center">
                <Loader2 className="w-12 h-12 text-brand-primary animate-spin mx-auto mb-4" />
                <p className="text-brand-primary font-bold animate-pulse">Chargement de votre agence locale...</p>
              </div>
          </div>
      );
  }

  // Pass dynamic data to Hero component by recreating it here with props 
  // (Or we could refactor Hero to accept props, which is cleaner)
  
  return (
    <div className="min-h-screen bg-brand-light font-sans text-brand-dark selection:bg-brand-accent selection:text-brand-primary">
      {/* Sticky Header */}
      <nav className="fixed w-full z-50 bg-brand-primary/95 backdrop-blur-md shadow-lg border-b border-brand-secondary/30 transition-all duration-300">
        <div className="container mx-auto px-4 h-20 md:h-24 flex items-center justify-between">
          
          {/* Logo */}
          <div className="flex items-center z-50">
            <a href="/" className="flex items-center gap-3 group" onClick={closeMenu}>
               <img 
                 src="https://cdn.prod.website-files.com/68f96b71387d3d720da45ca8/698cae9310045db18a39e07b_Group-Immo_logo_final2021_pour-fond-bleu.169x80.png" 
                 alt="Group Immo" 
                 className="h-12 md:h-20 w-auto object-contain transition-transform duration-300 group-hover:scale-105"
               />
            </a>
          </div>

          {/* Desktop Navigation */}
          <div className="hidden lg:flex items-center space-x-8">
            <a href="#accueil" className="text-white font-bold text-sm uppercase tracking-wider hover:text-brand-accent transition-colors relative group">
              Accueil
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#atouts" className="text-white font-bold text-sm uppercase tracking-wider hover:text-brand-accent transition-colors relative group">
              Nos Services
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#biens" className="text-white font-bold text-sm uppercase tracking-wider hover:text-brand-accent transition-colors relative group">
              Nos Succès
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#contact" className="text-white font-bold text-sm uppercase tracking-wider hover:text-brand-accent transition-colors relative group">
              Contact
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-brand-accent transition-all duration-300 group-hover:w-full"></span>
            </a>
          </div>
          
          {/* Desktop CTA */}
          <a 
            href={MAIN_SITE_URL + "contact"} 
            className="hidden lg:inline-flex items-center px-8 py-3 bg-brand-accent text-brand-primary text-sm font-bold uppercase tracking-wider hover:bg-white hover:text-brand-primary transition-all duration-300 rounded-sm shadow-md"
          >
            Estimation Gratuite
          </a>

          {/* Mobile Menu Button (Hamburger) */}
          <button 
            className="lg:hidden z-50 text-white p-2 focus:outline-none"
            onClick={toggleMenu}
            aria-label="Toggle menu"
          >
            {isMobileMenuOpen ? <X className="w-8 h-8 text-brand-accent" /> : <Menu className="w-8 h-8" />}
          </button>
        </div>

        {/* Mobile Menu Overlay */}
        <div 
          className={`fixed inset-0 bg-brand-primary/98 backdrop-blur-xl z-40 transform transition-transform duration-300 ease-in-out lg:hidden flex flex-col items-center justify-center space-y-8 ${
            isMobileMenuOpen ? 'translate-x-0' : 'translate-x-full'
          }`}
        >
            <a href="#accueil" onClick={closeMenu} className="text-white text-2xl font-heading font-bold hover:text-brand-accent transition-colors">Accueil</a>
            <a href="#atouts" onClick={closeMenu} className="text-white text-2xl font-heading font-bold hover:text-brand-accent transition-colors">Nos Services</a>
            <a href="#biens" onClick={closeMenu} className="text-white text-2xl font-heading font-bold hover:text-brand-accent transition-colors">Nos Succès</a>
            <a href="#contact" onClick={closeMenu} className="text-white text-2xl font-heading font-bold hover:text-brand-accent transition-colors">Contact</a>
            
            <div className="w-16 h-1 bg-brand-accent rounded-full my-4"></div>
            
            <a 
              href={MAIN_SITE_URL + "contact"} 
              className="px-8 py-4 bg-brand-accent text-brand-primary text-lg font-bold uppercase tracking-wider shadow-xl rounded-sm w-3/4 text-center"
            >
              Estimation Gratuite
            </a>
        </div>
      </nav>

      <main className="pt-20 md:pt-24">
        {/* Pass fetched data to Hero */}
        <Hero data={communeData} />
        
        <TrustBar />
        
        {/* Features Section - Update Title Dynamically */}
        <section id="atouts" className="py-16 md:py-24 bg-brand-light scroll-mt-24">
          <div className="container mx-auto px-4">
            <div className="text-center mb-12 md:mb-16">
              <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">
                Pourquoi nous choisir ?
              </span>
              <h2 className="font-heading text-3xl md:text-5xl font-extrabold text-brand-dark mb-6">
                Expertise locale à <span className="text-brand-primary">{communeData.name}</span>
              </h2>
               <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-8 rounded-full"></div>
              <p className="text-gray-600 max-w-2xl mx-auto text-lg leading-relaxed">
                Notre connaissance pointue du marché immobilier de {communeData.name} et notre puissance commerciale sont vos meilleurs atouts.
              </p>
            </div>
            
            <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
              {FEATURES.map((feature, index) => (
                <FeatureCard 
                  key={index}
                  index={index}
                  title={feature.title}
                  description={feature.description}
                  icon={feature.icon}
                />
              ))}
            </div>
          </div>
        </section>

        {/* INJECTED: communeName into PropertyGrid */}
        <PropertyGrid communeName={communeData.name} />

        {/* INJECTED: communeName into Testimonials */}
        <Testimonials communeName={communeData.name} />

      </main>

      {/* Pass name to Footer */}
      <Footer communeName={communeData.name} />
    </div>
  );
};

export default App;