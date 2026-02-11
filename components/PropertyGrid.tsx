import React from 'react';
import { Bed, Bath, Move, MapPin, Check } from 'lucide-react';
import { PROPERTIES, MAIN_SITE_URL } from '../constants';

const PropertyGrid: React.FC = () => {
  return (
    <section id="biens" className="py-24 bg-brand-light scroll-mt-24">
      <div className="container mx-auto px-4">
        <div className="text-center mb-16">
          <span className="text-brand-primary font-bold tracking-widest uppercase text-xs mb-3 block">
             Ils nous ont fait confiance
          </span>
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-dark mb-6">
            Nos dernières <span className="text-brand-primary">ventes réalisées</span>
          </h2>
          <div className="w-24 h-1.5 bg-brand-accent mx-auto mb-6"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            La preuve par l'exemple. Voici quelques biens vendus récemment par nos équipes dans la région.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10">
          {PROPERTIES.map((property) => (
            <a 
              key={property.id} 
              href={MAIN_SITE_URL}
              className="group bg-white rounded-lg shadow-card hover:shadow-card-hover transition-all duration-300 flex flex-col border border-gray-100 overflow-hidden relative grayscale-[30%] hover:grayscale-0"
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
                    <span className="inline-flex items-center bg-red-600 text-white text-xs font-bold px-3 py-1.5 uppercase tracking-wider rounded-sm shadow-md">
                      <Check className="w-3 h-3 mr-1" />
                      {property.badge}
                    </span>
                  </div>
                )}
              </div>

              <div className="p-6 flex-1 flex flex-col relative">
                <div className="mb-4">
                  <div className="flex items-center text-gray-500 text-xs font-bold uppercase tracking-wide mb-2">
                    <MapPin className="w-3 h-3 mr-1" />
                    {property.location}
                  </div>
                  <h3 className="font-heading text-lg font-bold text-brand-dark mb-3 line-clamp-1 group-hover:text-brand-primary transition-colors">
                    {property.title}
                  </h3>
                </div>

                <div className="flex items-center justify-start gap-6 pt-4 border-t border-gray-100 mt-auto text-gray-400 text-sm font-medium">
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
          ))}
        </div>

        <div className="text-center mt-16">
          <a 
            href={MAIN_SITE_URL}
            className="inline-flex items-center justify-center px-10 py-4 text-base font-bold text-brand-dark transition-all duration-300 bg-brand-accent hover:bg-white hover:text-brand-primary rounded-sm uppercase tracking-wide shadow-lg border-2 border-brand-accent"
          >
            Voir tous nos biens vendus
          </a>
        </div>
      </div>
    </section>
  );
};

export default PropertyGrid;