import React from 'react';
import { profileData } from '../data/profile';
import { ArrowUpRight, Github, ExternalLink } from 'lucide-react';

const Projects = ({ lang }) => {
  const data = profileData[lang].projects;

  // Placeholder images for projects since we don't have real images
  const projectBackgrounds = [
    "bg-gradient-to-br from-orange-500 to-red-600",
    "bg-gradient-to-br from-blue-600 to-cyan-500",
    "bg-gradient-to-br from-purple-600 to-pink-500"
  ];

  return (
    <section id="projects" className="py-20 flex flex-col items-center">
      <div className="container mx-auto px-6 max-w-5xl">
        <h2 className="text-2xl md:text-3xl font-black text-[#ff6b6b] uppercase text-center mb-12 tracking-wider">
          {data.title}
        </h2>

        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {data.items.map((project, index) => (
            <div 
              key={index} 
              className="group flex flex-col rounded-3xl bg-brand-card border border-brand-border overflow-hidden hover:-translate-y-2 hover:shadow-[0_10px_40px_rgba(255,107,107,0.15)] hover:border-white/20 transition-all duration-300"
            >
              {/* Image Area */}
              {project.image ? (
                <div className="w-full h-56 relative overflow-hidden shrink-0">
                  <img src={project.image} alt={project.name} className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500" />
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              ) : (
                <div className={`w-full h-56 ${projectBackgrounds[index % projectBackgrounds.length]} relative flex items-center justify-center overflow-hidden shrink-0`}>
                  <h3 className="text-white text-3xl font-black px-6 text-center z-10 mix-blend-overlay opacity-90 uppercase">
                    {project.name.split(" ")[0]}
                  </h3>
                  {/* Decorative overlay */}
                  <div className="absolute inset-0 bg-black/20 group-hover:bg-transparent transition-colors duration-300"></div>
                </div>
              )}

              {/* Text Area */}
              <div className="p-6 flex flex-col flex-grow bg-gradient-to-b from-transparent to-brand-bg/50">
                <div className="flex justify-between items-start gap-4 mb-4">
                  <h3 className="text-xl font-bold text-white uppercase group-hover:text-[#ff6b6b] transition-colors leading-tight">
                    {project.name}
                  </h3>
                  <div className="flex gap-2 shrink-0">
                    {project.github && (
                      Array.isArray(project.github) ? (
                        project.github.map((link, i) => {
                          const tooltipText = i === 0 ? 'Frontend' : 'Backend';
                          return (
                            <div key={i} className="relative group/tooltip">
                              <a href={link} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                                <Github size={18} />
                              </a>
                              <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-bold text-white bg-black/90 border border-white/10 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl z-20">
                                {tooltipText}
                              </span>
                            </div>
                          );
                        })
                      ) : (
                        <div className="relative group/tooltip">
                          <a href={project.github} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-white/5 flex items-center justify-center text-white hover:bg-white hover:text-black transition-colors">
                            <Github size={18} />
                          </a>
                          <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-bold text-white bg-black/90 border border-white/10 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl z-20">
                            GitHub
                          </span>
                        </div>
                      )
                    )}
                    {project.demo && (
                      <div className="relative group/tooltip">
                        <a href={project.demo} target="_blank" rel="noreferrer" className="w-10 h-10 rounded-full bg-[#ff6b6b]/10 flex items-center justify-center text-[#ff6b6b] hover:bg-[#ff6b6b] hover:text-white transition-colors">
                          <ExternalLink size={18} />
                        </a>
                        <span className="absolute bottom-full left-1/2 -translate-x-1/2 mb-2 px-3 py-1.5 text-xs font-bold text-white bg-black/90 border border-white/10 rounded-lg opacity-0 group-hover/tooltip:opacity-100 transition-opacity duration-200 pointer-events-none whitespace-nowrap shadow-xl z-20">
                          {lang === 'en' ? 'Live Demo' : 'Xem Demo'}
                        </span>
                      </div>
                    )}
                  </div>
                </div>
                
                <div className="flex flex-wrap gap-x-4 gap-y-2 mb-4 text-sm font-medium text-brand-muted">
                  {project.role && <span><span className="text-[#a052ff]">{lang === 'en' ? 'Role:' : 'Vai trò:'}</span> {project.role}</span>}
                  {project.duration && <span><span className="text-[#a052ff]">{lang === 'en' ? 'Duration:' : 'Thời gian:'}</span> {project.duration}</span>}
                </div>

                {Array.isArray(project.description) ? (
                  <ul className="list-disc list-outside pl-4 text-brand-muted text-sm md:text-[13px] leading-relaxed mb-6 flex-grow space-y-2">
                    {project.description.map((desc, i) => (
                      <li key={i}>{desc}</li>
                    ))}
                  </ul>
                ) : (
                  <p className="text-brand-muted text-sm leading-relaxed mb-6 flex-grow">
                    {project.description}
                  </p>
                )}

                {project.technologies && (
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.technologies.map((tech, i) => (
                      <span key={i} className="text-[11px] font-bold px-3 py-1.5 rounded-lg bg-[#1a1a1a] text-brand-muted border border-[#333333] tracking-wide">
                        {tech}
                      </span>
                    ))}
                  </div>
                )}
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
