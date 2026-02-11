import React from 'react';
import { ArrowRight, CheckCircle, Calculator, MapPin } from 'lucide-react';
import { MAIN_SITE_URL } from '../constants';
import { CommuneConfig } from '../types';

interface HeroProps {
  data: CommuneConfig;
}

const Hero: React.FC<HeroProps> = ({ data }) => {
  return (
    <div id="accueil" className="relative w-full min-h-[85vh] flex items-center justify-center bg-brand-primary overflow-hidden">
      {/* Background Image */}
      <div className="absolute inset-0 z-0">
        <img 
          src={data.heroImage} 
          alt={data.heroTitle}
          className="w-full h-full object-cover"
        />
        {/* Darker overlay for better text contrast */}
        <div className="absolute inset-0 bg-brand-primary/70 mix-blend-multiply"></div>
        <div className="absolute inset-0 bg-gradient-to-t from-black/90 via-black/40 to-black/20"></div>
      </div>

      <div className="relative z-10 container mx-auto px-4 text-center max-w-5xl flex flex-col items-center pt-12 md:pt-24 pb-16">
        
        {/* SEO Tagline with Location Icon */}
        <div className="inline-flex items-center gap-2 py-2 px-5 mb-8 text-xs md:text-sm font-bold tracking-widest text-brand-primary uppercase bg-brand-accent rounded-full shadow-[0_0_20px_rgba(252,219,53,0.4)] animate-fade-in-up hover:scale-105 transition-transform cursor-default">
          <MapPin className="w-4 h-4" />
          <span>Agence experte à {data.name} ({data.zip})</span>
        </div>

        {/* H1 - Ultra Modern & Impactful */}
        <h1 className="font-heading text-4xl sm:text-5xl md:text-7xl font-extrabold text-white mb-8 leading-tight drop-shadow-2xl">
          {data.heroTitle}
        </h1>

        {/* Redesigned Subtitle Section */}
        <div className="max-w-3xl mx-auto mb-12 flex flex-col items-center">
            {/* Part 1: The City Context (Glassmorphism) */}
            <div className="backdrop-blur-md bg-white/10 border border-white/20 p-6 rounded-2xl shadow-xl mb-6 relative overflow-hidden group">
                <div className="absolute top-0 left-0 w-1 h-full bg-brand-accent"></div>
                <p className="text-lg md:text-xl text-gray-100 font-medium leading-relaxed italic relative z-10">
                   "{data.localVibe}"
                </p>
                {/* Subtle shine effect */}
                <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/5 to-transparent -translate-x-full group-hover:animate-[shimmer_2s_infinite]"></div>
            </div>

            {/* Part 2: The Hard Value Proposition */}
            <div className="flex items-center gap-3">
                <div className="h-px w-8 md:w-16 bg-brand-accent/50"></div>
                <p className="text-xl md:text-2xl text-brand-accent font-bold uppercase tracking-wide drop-shadow-lg text-center">
                    Découvrez la valeur de votre bien en 48h
                </p>
                <div className="h-px w-8 md:w-16 bg-brand-accent/50"></div>
            </div>
        </div>

        {/* CTA Buttons */}
        <div className="flex flex-col sm:flex-row gap-4 md:gap-6 w-full sm:w-auto justify-center mb-16">
          <a 
            href={MAIN_SITE_URL}
            className="group relative inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold text-brand-primary transition-all duration-300 bg-brand-accent hover:bg-white hover:text-brand-primary rounded-sm shadow-[0_10px_20px_rgba(0,0,0,0.2)] hover:shadow-[0_15px_30px_rgba(252,219,53,0.3)] hover:-translate-y-1 uppercase tracking-wide border-2 border-brand-accent w-full sm:w-auto overflow-hidden"
          >
             {/* Button shine effect */}
            <div className="absolute inset-0 bg-white/20 translate-y-full group-hover:translate-y-0 transition-transform duration-300 skew-y-12"></div>
            <Calculator className="w-5 h-5 mr-3 relative z-10" />
            <span className="relative z-10">Obtenir mon estimation gratuite</span>
          </a>
          
          <a 
            href={MAIN_SITE_URL}
            className="group inline-flex items-center justify-center px-8 py-4 md:px-10 md:py-5 text-base md:text-lg font-bold text-white transition-all duration-300 bg-transparent border-2 border-white/30 hover:border-white hover:bg-white/10 rounded-sm uppercase tracking-wide w-full sm:w-auto backdrop-blur-sm"
          >
            Prendre Rendez-vous
            <ArrowRight className="ml-3 w-5 h-5 group-hover:translate-x-2 transition-transform" />
          </a>
        </div>

        {/* Micro-reassurance */}
        <div className="flex flex-col sm:flex-row flex-wrap justify-center gap-4 sm:gap-8 md:gap-12 text-xs md:text-sm font-bold text-white/90 uppercase tracking-widest">
          <div className="flex items-center justify-center bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <CheckCircle className="w-4 h-4 mr-2 text-brand-accent" /> Estimation 48h
          </div>
          <div className="flex items-center justify-center bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <CheckCircle className="w-4 h-4 mr-2 text-brand-accent" /> Photos Pro HD
          </div>
          <div className="flex items-center justify-center bg-black/20 px-4 py-2 rounded-full backdrop-blur-sm border border-white/10">
            <CheckCircle className="w-4 h-4 mr-2 text-brand-accent" /> +5000 Acheteurs
          </div>
        </div>
      </div>
    </div>
  );
};

export default Hero;