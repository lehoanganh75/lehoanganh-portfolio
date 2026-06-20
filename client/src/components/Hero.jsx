import React from 'react';
import { profileData } from '../data/profile';
import cvFile from '../data/BE_LeHoangAnh_Intern_HCM.pdf';
import { FaJava, FaNodeJs, FaReact, FaDocker, FaGithub } from 'react-icons/fa';
import { SiSpringboot, SiMongodb, SiMysql, SiRedis, SiMariadb, SiTypescript, SiTailwindcss, SiKong } from 'react-icons/si';

const Hero = ({ lang }) => {
  const data = profileData[lang].hero;

  // Function to wrap the highlight text in a gradient span
  const renderHeadline = () => {
    const parts = data.headline.split(data.highlight);
    if (parts.length > 1) {
      return (
        <>
          {parts[0]}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#a052ff]">
            {data.highlight}
          </span>
          {parts[1]}
        </>
      );
    }
    return data.headline;
  };

  return (
    <section id="home" className="pt-16 pb-12 md:pt-20 md:pb-16 flex flex-col items-center justify-center text-center px-4">
      <div className="container mx-auto max-w-4xl flex flex-col items-center">

        {/* Avatar Placeholder */}
        <div className="w-32 h-32 md:w-40 md:h-40 rounded-full mb-8 bg-gradient-to-tr from-[#ff6b6b] to-[#a052ff] p-1 shadow-[0_0_40px_rgba(160,82,255,0.4)]">
          <div className="w-full h-full rounded-full bg-brand-bg flex items-center justify-center overflow-hidden border-4 border-brand-bg relative">
            <div className="w-full h-full bg-[#1a1a1a] flex items-center justify-center text-5xl overflow-hidden">
              <img src="https://res.cloudinary.com/ddga6y6tm/image/upload/v1780143669/381272274_1437529243479360_3700515112901386531_n_cmthqn.jpg" alt="Avatar" className="w-full h-full object-cover" />
            </div>
          </div>
        </div>

        {/* Headline */}
        <h1 className="text-4xl md:text-6xl font-black text-white leading-tight md:leading-tight mb-6 max-w-3xl tracking-tight">
          {renderHeadline()}
        </h1>

        {/* Description */}
        <div className="text-brand-muted text-sm md:text-base leading-relaxed max-w-2xl mb-10 flex flex-col gap-4">
          {Array.isArray(data.description) 
            ? data.description.map((p, i) => <p key={i}>{p}</p>) 
            : <p>{data.description}</p>}
        </div>

        {/* Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-20">
          <a
            href="#contact"
            className="px-8 py-3.5 bg-white text-black rounded-full font-bold hover:bg-gray-200 hover:scale-105 transition-all duration-300"
          >
            {data.buttons.contact}
          </a>
          <a
            href={cvFile}
            download="BE_LeHoangAnh_Intern_HCM.pdf"
            className="px-8 py-3.5 bg-transparent border-2 border-white/20 text-white rounded-full font-bold hover:border-white/50 hover:bg-white/5 hover:scale-105 transition-all duration-300"
          >
            {data.buttons.cv}
          </a>
        </div>

        {/* Technology Icons */}
        <div className="flex flex-col items-center w-full">
          <p className="text-xs tracking-[0.2em] text-brand-muted uppercase mb-6 font-semibold">
            EXPERIENCE WITH
          </p>
          <div className="flex flex-wrap justify-center gap-6 md:gap-10 text-brand-muted">
            <TechIcon icon={<FaJava size={36} />} label="Java" />
            <TechIcon icon={<SiSpringboot size={36} />} label="Spring Boot" />
            <TechIcon icon={<SiTypescript size={36} />} label="TypeScript" />
            <TechIcon icon={<FaNodeJs size={36} />} label="Node.js" />
            <TechIcon icon={<FaReact size={36} />} label="React" />
            <TechIcon icon={<SiTailwindcss size={36} />} label="Tailwind CSS" />
            <TechIcon icon={<FaDocker size={36} />} label="Docker" />
            <TechIcon icon={<SiMongodb size={36} />} label="MongoDB" />
            <TechIcon icon={<SiMariadb size={36} />} label="MariaDB" />
            <TechIcon icon={<SiRedis size={36} />} label="Redis" />
            <TechIcon icon={<SiKong size={36} />} label="Kong API Gateway" />
            <TechIcon icon={<FaGithub size={36} />} label="GitHub" />
          </div>
        </div>
      </div>
    </section>
  );
};

const TechIcon = ({ icon, label }) => (
  <div className="text-[#a3a3a3] hover:text-white hover:scale-110 transition-all duration-300 filter grayscale hover:grayscale-0 hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.3)]" title={label}>
    {icon}
  </div>
);

export default Hero;
