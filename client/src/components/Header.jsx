import React, { useState, useEffect } from 'react';
import { profileData } from '../data/profile';
import LanguageSwitcher from './LanguageSwitcher';
import { Menu, X } from 'lucide-react';

const Header = ({ lang, toggleLanguage }) => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [activeSection, setActiveSection] = useState('home');
  const data = profileData[lang].nav;

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 20);

      const sections = ['home', 'projects', 'experience', 'contact'];
      let current = '';
      
      for (const section of sections) {
        const element = document.getElementById(section);
        if (element) {
          const top = element.offsetTop - 150; 
          const height = element.offsetHeight;
          if (window.scrollY >= top && window.scrollY < top + height) {
            current = section;
          }
        }
      }

      if (window.innerHeight + window.scrollY >= document.body.offsetHeight - 50) {
        current = 'contact';
      }
      
      if (current) {
        setActiveSection(current);
      }
    };

    window.addEventListener('scroll', handleScroll);
    handleScroll();
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const navLinks = [
    { name: data.home, href: '#home', id: 'home' },
    { name: data.projects, href: '#projects', id: 'projects' },
    { name: data.experience, href: '#experience', id: 'experience' },
    { name: data.contact, href: '#contact', id: 'contact' }
  ];

  return (
    <header className={`fixed top-0 w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-brand-bg/90 backdrop-blur-md shadow-lg border-b border-brand-border' : 'bg-transparent py-4'}`}>
      <div className="container mx-auto px-6 max-w-5xl flex justify-between items-center py-4">
        {/* Logo */}
        <a href="#home" className="text-2xl font-bold text-white tracking-tighter" style={{ fontFamily: 'cursive' }}>
          lha<span className="text-[#ff6b6b]">.</span>
        </a>
        
        {/* Desktop Nav */}
        <nav className="hidden md:flex flex-1 justify-center items-center">
          <ul className="flex gap-8">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  className={`text-sm transition-colors ${activeSection === link.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#a052ff] font-bold' : 'font-medium text-brand-muted hover:text-white'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </nav>
        
        <div className="hidden md:flex items-center">
          <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} />
        </div>

        {/* Mobile Nav Toggle */}
        <div className="md:hidden flex items-center gap-4">
          <LanguageSwitcher lang={lang} toggleLanguage={toggleLanguage} />
          <button 
            onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            className="text-white hover:text-[#ff6b6b] transition-colors"
          >
            {mobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {mobileMenuOpen && (
        <div className="md:hidden absolute top-full left-0 w-full bg-brand-bg border-b border-brand-border py-4 shadow-xl">
          <ul className="flex flex-col px-6">
            {navLinks.map((link) => (
              <li key={link.name}>
                <a 
                  href={link.href} 
                  onClick={() => setMobileMenuOpen(false)}
                  className={`block py-3 text-base transition-colors ${activeSection === link.id ? 'text-transparent bg-clip-text bg-gradient-to-r from-[#ff6b6b] to-[#a052ff] font-bold' : 'font-medium text-brand-muted hover:text-white'}`}
                >
                  {link.name}
                </a>
              </li>
            ))}
          </ul>
        </div>
      )}
    </header>
  );
};

export default Header;
