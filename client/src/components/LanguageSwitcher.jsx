import React from 'react';

const LanguageSwitcher = ({ lang, toggleLanguage }) => {
  return (
    <button
      onClick={toggleLanguage}
      className="flex items-center gap-1.5 px-3 py-1 rounded-full bg-[#1a1a1a] border border-[#333333] hover:border-white/30 hover:bg-[#222222] transition-colors font-medium text-xs text-white"
      aria-label="Toggle language"
    >
      <span className={lang === 'en' ? 'text-white' : 'text-brand-muted'}>EN</span>
      <span className="text-brand-muted/30">|</span>
      <span className={lang === 'vi' ? 'text-white' : 'text-brand-muted'}>VI</span>
    </button>
  );
};

export default LanguageSwitcher;
