import React from 'react';
import { Bed, Bath, Move, MapPin, Check, TrendingUp } from 'lucide-react';
import { PROPERTIES, MAIN_SITE_URL } from '../constants';

interface PropertyGridProps {
  communeName: string;
}

const PropertyGrid: React.FC<PropertyGridProps> = ({ communeName }) => {
  return (
    <section id="biens" className="py-24 bg-white scroll-mt-24 relative">
       {/* Background Pattern */}
       <div className="absolute inset-0 opacity-[0.03] pointer-events-none" style={{ backgroundImage: 'radial-gradient(#3965a3 1px, transparent 1px)', backgroundSize: '20px 20px' }}></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">
             Ils nous ont fait confiance
          </span>
          {/* OPTION C: Titre Global "Région de Liège" pour la crédibilité */}
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-dark mb-6">
            Nos derniers succès en <span className="text-brand-primary">région de Liège</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-6"></div>
          
          {/* Le "Pont" sémantique vers la commune locale */}
          <div className="max-w-3xl mx-auto bg-brand-light/50 p-6 rounded-xl border border-brand-primary/10">
            <p className="text-gray-600 text-lg mb-2">
              Notre force de frappe commerciale rayonne sur toute la province.
            </p>
            <p className="text-brand-primary font-bold text-xl flex items-center justify-center gap-2">
              <TrendingUp className="w-5 h-5" />
              Votre bien à {communeName} intéresse déjà nos acheteurs !
            </p>
          </div>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROPERTIES.map((property) => {
            // OPTION C: On garde les VRAIES données (Pas de fake)
            // On affiche la vraie localisation pour prouver l'activité réelle
            
            return (
                <a 
                key={property.id} 
                href={MAIN_SITE_URL}
                className="group bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col border border-gray-100 overflow-hidden relative grayscale-[10%] hover:grayscale-0"
                >
                <div className="relative h-72 overflow-hidden">
                    <img 
                    src={property.image} 
                    alt={property.title} 
                    className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-700 ease-in-out"
                    />
                    
                    {/* Sold Overlay */}
                    <div className="absolute inset-0 bg-brand-dark/20 group-hover:bg-transparent transition-colors duration-300"></div>
                    
                    {property.badge && (
                    <div className="absolute top-4 left-4 z-10">
                        <span className="inline-flex items-center bg-brand-primary text-brand-accent text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm shadow-md border border-brand-accent">
                        <Check className="w-3 h-3 mr-1" />
                        {property.badge}
                        </span>
                    </div>
                    )}
                </div>

                <div className="p-6 flex-1 flex flex-col relative">
                    <div className="mb-4">
                    <div className="flex items-center text-brand-primary text-xs font-bold uppercase tracking-wide mb-2">
                        <MapPin className="w-3 h-3 mr-1" />
                        {property.location} {/* Vraie localisation (ex: Liège, Chaudfontaine) */}
                    </div>
                    <h3 className="font-heading text-lg font-bold text-brand-dark mb-3 line-clamp-1 group-hover:text-brand-primary transition-colors">
                        {property.title}
                    </h3>
                    </div>

                    <div className="flex items-center justify-start gap-6 pt-4 border-t border-gray-100 mt-auto text-gray-500 text-sm font-medium">
                    <div className="flex items-center gap-2">
                        <Bed className="w-4 h-4" /> 
                        <span>{property.beds} <span className="hidden sm:inline">ch.</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Bath className="w-4 h-4" /> 
                        <span>{property.baths} <span className="hidden sm:inline">sdb.</span></span>
                    </div>
                    <div className="flex items-center gap-2">
                        <Move className="w-4 h-4" /> 
                        <span>{property.area}</span>
                    </div>
                    </div>
                </div>
                </a>
            );
          })}
        </div>

        <div className="text-center mt-16">
          <a 
            href={MAIN_SITE_URL}
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-brand-dark transition-all duration-300 bg-brand-accent hover:bg-white hover:text-brand-primary rounded-sm uppercase tracking-wide shadow-lg border-2 border-brand-accent"
          >
            Estimer mon bien à {communeName}
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;