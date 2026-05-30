import { useState } from 'react';
import Header from './components/Header';
import Hero from './components/Hero';
import Projects from './components/Projects';
import Experience from './components/Experience';
import Contact from './components/Contact';
import Footer from './components/Footer';

function App() {
  const [lang, setLang] = useState('en');

  const toggleLanguage = () => {
    setLang((prev) => (prev === 'en' ? 'vi' : 'en'));
  };

  return (
    <div className="min-h-screen bg-brand-bg text-brand-text font-sans">
      <Header lang={lang} toggleLanguage={toggleLanguage} />
      <main className="pt-24 pb-12">
        <Hero lang={lang} />
        <Projects lang={lang} />
        <Experience lang={lang} />
      </main>
      <Contact lang={lang} />
      <Footer lang={lang} />
    </div>
  );
}

export default App;
