import React from 'react';
import { Star, Quote, MapPin } from 'lucide-react';
import { GLOBAL_REVIEWS } from '../constants';

interface TestimonialsProps {
  communeName: string;
}

const Testimonials: React.FC<TestimonialsProps> = ({ communeName }) => {
  return (
    <section className="py-20 bg-brand-light relative overflow-hidden">
      {/* Decorative Background Elements */}
      <div className="absolute top-0 left-0 w-32 h-32 bg-white rounded-br-full opacity-50"></div>
      <div className="absolute bottom-0 right-0 w-64 h-64 bg-brand-accent/5 rounded-tl-full opacity-50"></div>

      <div className="container mx-auto px-4 relative z-10">
        <div className="text-center mb-16">
          <div className="inline-flex items-center gap-2 bg-white px-4 py-2 rounded-full mb-6 shadow-sm border border-brand-primary/10">
            <span className="flex text-brand-accent">
              {[...Array(5)].map((_, i) => (
                <Star key={i} className="w-4 h-4 fill-current" />
              ))}
            </span>
            <span className="text-sm font-bold text-brand-dark">4.9/5 sur Google</span>
          </div>
          
          {/* Titre orienté Région / Province pour la crédibilité */}
          <h2 className="font-heading text-3xl md:text-5xl font-bold text-brand-dark mb-6">
            La référence immobilière en <span className="text-brand-primary">région de Liège</span>
          </h2>
          <div className="w-20 h-1.5 bg-brand-accent mx-auto mb-6 rounded-full"></div>
          <p className="text-gray-600 max-w-2xl mx-auto text-lg">
            Propriétaires à {communeName} ou ailleurs en province de Liège, ils ont choisi l'efficacité. Découvrez les avis de nos clients.
          </p>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {GLOBAL_REVIEWS.map((review) => (
            <div key={review.id} className="bg-white p-8 rounded-2xl relative group hover:-translate-y-2 transition-transform duration-300 shadow-card hover:shadow-card-hover border border-transparent hover:border-brand-accent/30">
              <Quote className="absolute top-6 right-6 w-10 h-10 text-brand-light group-hover:text-brand-accent/20 transition-colors" />
              
              <div className="flex text-brand-accent mb-4">
                {[...Array(review.rating)].map((_, i) => (
                  <Star key={i} className="w-5 h-5 fill-current" />
                ))}
              </div>

              <p className="text-gray-700 italic mb-6 leading-relaxed relative z-10 font-light">
                "{review.text}"
              </p>

              <div className="flex items-center mt-auto pt-6 border-t border-gray-100">
                <div className="w-10 h-10 rounded-full bg-brand-primary text-white flex items-center justify-center font-bold text-lg mr-3 shadow-md shrink-0">
                  {review.name.charAt(0)}
                </div>
                <div>
                  <h4 className="font-bold text-brand-dark text-sm">{review.name}</h4>
                  {/* Respect de la consigne : "Dis toujours Liège" pour la localisation */}
                  <p className="text-xs text-brand-secondary font-semibold uppercase tracking-wide flex items-center gap-1">
                    <MapPin className="w-3 h-3" />
                    {review.location} - Liège
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
        
        {/* Mobile-friendly bottom link */}
        <div className="mt-12 text-center">
            <a href="https://g.page/groupimmo" target="_blank" rel="noreferrer" className="inline-block border-b border-brand-accent pb-1 text-brand-secondary font-bold hover:text-brand-primary transition-colors text-sm uppercase tracking-wider">
                Voir tous les avis vérifiés sur Google
            </a>
        </div>
      </div>
    </section>
  );
};

export default Testimonials;