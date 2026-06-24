import React from 'react';
import { profileData } from '../data/profile';

const Experience = ({ lang }) => {
  const data = profileData[lang].experience;
  const sortedItems = [...data.items].reverse();

  return (
    <section id="experience" className="py-20 bg-brand-bg flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-4xl">
        <h2 className="text-2xl md:text-3xl font-black text-[#a052ff] uppercase text-center mb-16 tracking-wider">
          {data.title}
        </h2>

        <div className="relative border-l border-[#333333] ml-4 md:ml-6 space-y-12">
          {sortedItems.map((item, index) => (
            <div 
              key={index} 
              className="relative pl-8 md:pl-12 group hover:-translate-y-1 transition-transform duration-300"
            >
              {/* Timeline Dot */}
              <div className="absolute -left-[9px] top-1.5 w-4 h-4 rounded-full bg-[#333333] group-hover:bg-[#ff6b6b] group-hover:shadow-[0_0_15px_#ff6b6b] transition-all duration-300 border-4 border-[#111111]"></div>
              
              <div className="flex flex-col md:flex-row md:items-center justify-between gap-3 mb-4">
                <div>
                  <h3 className="text-xl md:text-2xl font-bold text-white group-hover:text-white transition-colors">
                    {item.role}
                  </h3>
                  <p className="text-base font-medium text-[#a052ff] mt-1">
                    {item.company}
                  </p>
                </div>
                <span className="text-xs font-bold text-brand-muted tracking-wider uppercase bg-[#1a1a1a] px-4 py-2 rounded-full border border-[#333333] inline-block w-max">
                  {item.period}
                </span>
              </div>
              
              <p className="text-brand-muted text-sm md:text-base leading-relaxed max-w-3xl">
                {item.description}
              </p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
