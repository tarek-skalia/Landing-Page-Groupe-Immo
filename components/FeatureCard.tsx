import React from 'react';

interface FeatureCardProps {
  title: string;
  description: string;
  icon: React.ReactNode;
  index: number;
}

const FeatureCard: React.FC<FeatureCardProps> = ({ title, description, icon, index }) => {
  // Format index to always be 2 digits (01, 02, 03)
  const formattedNumber = (index + 1).toString().padStart(2, '0');

  return (
    <div className="group relative bg-white p-8 rounded-xl shadow-card hover:shadow-card-hover transition-all duration-500 ease-out border border-gray-100 overflow-hidden h-full flex flex-col hover:-translate-y-2">
      
      {/* Decorative Bottom Line (Animates width on hover) */}
      <div className="absolute bottom-0 left-0 h-1.5 bg-brand-accent w-0 group-hover:w-full transition-all duration-500 ease-in-out"></div>

      {/* Watermark Number Background */}
      <div className="absolute -right-4 -top-6 text-9xl font-black text-gray-100 opacity-40 select-none transition-transform duration-700 group-hover:scale-110 group-hover:text-gray-50 z-0">
        {formattedNumber}
      </div>

      {/* Content Container */}
      <div className="relative z-10 flex flex-col h-full">
        {/* Icon Container */}
        <div className="mb-6 inline-flex items-center justify-center w-16 h-16 rounded-2xl bg-brand-light text-brand-primary group-hover:bg-brand-primary group-hover:text-brand-accent transition-colors duration-300 shadow-sm">
          {React.cloneElement(icon as React.ReactElement<{ className?: string }>, { 
            className: "w-8 h-8 transition-transform duration-500 group-hover:rotate-6" 
          })}
        </div>

        {/* Title */}
        <h3 className="font-heading text-xl md:text-2xl font-bold text-brand-dark mb-4 group-hover:text-brand-primary transition-colors duration-300">
          {title}
        </h3>

        {/* Description */}
        <p className="text-gray-600 leading-relaxed text-base flex-grow font-light group-hover:text-gray-700">
          {description}
        </p>
      </div>
    </div>
  );
};

export default FeatureCard;