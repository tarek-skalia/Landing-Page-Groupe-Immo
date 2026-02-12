import React from 'react';
import { Phone, Mail, MapPin, Facebook, Instagram, Linkedin } from 'lucide-react';
import { AGENCY_NAME, MAIN_SITE_URL } from '../constants';

interface FooterProps {
  communeName: string;
}

const Footer: React.FC<FooterProps> = ({ communeName }) => {
  return (
    <footer id="contact" className="bg-brand-primary text-white border-t-4 border-brand-accent scroll-mt-24">
        
      {/* Pre-footer CTA - Darker Blue background for contrast */}
      <div className="bg-brand-secondary relative overflow-hidden">
         {/* Decorative Circle */}
         <div className="absolute -right-20 -top-40 w-80 h-80 bg-white/5 rounded-full blur-3xl"></div>
         
         <div className="container mx-auto px-4 py-16 text-center relative z-10">
            <h2 className="font-heading text-3xl md:text-4xl font-bold mb-4 text-white">Vous vendez un bien à {communeName} ?</h2>
            <div className="w-16 h-1 bg-brand-accent mx-auto mb-6"></div>
            <p className="mb-8 text-white/90 max-w-2xl mx-auto text-lg font-light">
                Nos experts locaux sont prêts à valoriser votre bien. Profitez d'une estimation offerte et sans engagement.
            </p>
            <a 
                href={MAIN_SITE_URL}
                className="inline-block bg-brand-accent text-brand-primary font-bold text-lg py-4 px-10 rounded-sm hover:bg-white hover:text-brand-primary transition-all duration-300 shadow-xl uppercase tracking-wide transform hover:-translate-y-1"
            >
                Demander mon estimation gratuite
            </a>
         </div>
      </div>

      <div className="container mx-auto px-4 pt-16 pb-8 bg-brand-primary">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-12 mb-12">
          <div className="md:col-span-1">
            {/* Logo Footer - Image */}
            <div className="mb-6">
               <img 
                 src="https://cdn.prod.website-files.com/68f96b71387d3d720da45ca8/698cae9310045db18a39e07b_Group-Immo_logo_final2021_pour-fond-bleu.169x80.png" 
                 alt="Group Immo" 
                 className="h-16 w-auto object-contain"
               />
            </div>

            <p className="text-white/80 text-sm leading-relaxed mb-6">
              L'agence de référence pour vos projets immobiliers. Expertise, transparence et innovation au service de votre patrimoine.
            </p>
            <div className="flex space-x-4">
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors text-white"><Facebook className="w-5 h-5"/></a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors text-white"><Instagram className="w-5 h-5"/></a>
                <a href="#" className="w-10 h-10 bg-white/10 rounded-full flex items-center justify-center hover:bg-brand-accent hover:text-brand-primary transition-colors text-white"><Linkedin className="w-5 h-5"/></a>
            </div>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-brand-accent pl-3">Contact</h4>
            <ul className="space-y-4 text-white/80 text-sm">
              <li className="flex items-start">
                <MapPin className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0" />
                <span>Rue de la Réussite 10,<br/>4000 Liège</span>
              </li>
              <li className="flex items-center">
                <Phone className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0" />
                <a href="tel:+32400000000" className="hover:text-white transition-colors">+32 4 000 00 00</a>
              </li>
              <li className="flex items-center">
                <Mail className="w-5 h-5 mr-3 text-brand-accent flex-shrink-0" />
                <a href="mailto:info@groupimmo.be" className="hover:text-white transition-colors">info@groupimmo.be</a>
              </li>
            </ul>
          </div>

          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-brand-accent pl-3">Navigation</h4>
            <ul className="space-y-3 text-white/80 text-sm font-medium">
              <li><a href={MAIN_SITE_URL} className="hover:text-brand-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></span> Acheter</a></li>
              <li><a href={MAIN_SITE_URL} className="hover:text-brand-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></span> Louer</a></li>
              <li><a href={MAIN_SITE_URL} className="hover:text-brand-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></span> Vendre</a></li>
              <li><a href={MAIN_SITE_URL} className="hover:text-brand-accent transition-colors flex items-center"><span className="w-1.5 h-1.5 bg-brand-accent rounded-full mr-2"></span> Estimation</a></li>
            </ul>
          </div>
          
          <div>
            <h4 className="font-heading font-bold text-lg mb-6 text-white border-l-4 border-brand-accent pl-3">Secteurs</h4>
            {/* Dynamic Linking for Multi-Commune System */}
            <ul className="flex flex-wrap gap-2 text-xs font-medium text-white/70">
                <li><a href="?commune=liege" className="block bg-white/10 px-2 py-1 rounded hover:bg-brand-accent hover:text-brand-primary transition-colors cursor-pointer border border-white/5">Liège</a></li>
                <li><a href="?commune=herstal" className="block bg-white/10 px-2 py-1 rounded hover:bg-brand-accent hover:text-brand-primary transition-colors cursor-pointer border border-white/5">Herstal</a></li>
                <li><a href="?commune=seraing" className="block bg-white/10 px-2 py-1 rounded hover:bg-brand-accent hover:text-brand-primary transition-colors cursor-pointer border border-white/5">Seraing</a></li>
                <li><a href="?commune=ans" className="block bg-white/10 px-2 py-1 rounded hover:bg-brand-accent hover:text-brand-primary transition-colors cursor-pointer border border-white/5">Ans</a></li>
            </ul>
          </div>
        </div>

        <div className="border-t border-white/10 pt-8 text-center text-white/50 text-xs">
          <p>&copy; {new Date().getFullYear()} {AGENCY_NAME}. Tous droits réservés. | <a href="#" className="hover:text-white">Mentions Légales</a> | <a href="#" className="hover:text-white">Politique de confidentialité</a></p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;