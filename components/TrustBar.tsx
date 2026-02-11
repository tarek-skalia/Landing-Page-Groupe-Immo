import React from 'react';
import { STATS } from '../constants';

const TrustBar: React.FC = () => {
  return (
    <section className="bg-brand-primary py-12 relative z-20 shadow-2xl border-b border-brand-secondary/30">
      <div className="container mx-auto px-4">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 divide-white/10 md:divide-x md:divide-y-0 divide-y">
          {STATS.map((stat) => (
            <div key={stat.id} className="flex flex-col items-center justify-center p-4 text-center group hover:-translate-y-1 transition-transform duration-300">
              <div className="text-brand-accent mb-4 transform scale-125 group-hover:scale-110 transition-transform">
                 {React.cloneElement(stat.icon as React.ReactElement<{ className?: string }>, { className: "text-brand-accent w-10 h-10 drop-shadow-lg" })}
              </div>
              <span className="font-heading text-4xl font-extrabold text-white block mb-2">
                {stat.value}
              </span>
              <span className="text-brand-accent font-bold text-sm uppercase tracking-widest">
                {stat.label}
              </span>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default TrustBar;