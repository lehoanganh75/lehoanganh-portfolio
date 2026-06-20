import React, { useState } from 'react';
import { profileData, personalInfo } from '../data/profile';
import { Mail, Github } from 'lucide-react';
import { FaLinkedin } from 'react-icons/fa';

const Contact = ({ lang }) => {
  const data = profileData[lang].contact;
  
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    message: ''
  });
  
  const [status, setStatus] = useState({
    submitting: false,
    success: false,
    error: false
  });

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value });
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    setStatus({ submitting: true, success: false, error: false });
    
    try {
      let apiUrl = import.meta.env.VITE_API_URL;
      if (!apiUrl && typeof window !== 'undefined') {
        const { hostname, protocol } = window.location;
        if (hostname === 'localhost' || hostname === '127.0.0.1') {
          apiUrl = 'http://localhost:5000/api/contact';
        } else {
          // Dynamically point to port 5000 on the same host in production
          apiUrl = `${protocol}//${hostname}:5000/api/contact`;
        }
      }
      apiUrl = apiUrl || 'http://localhost:5000/api/contact';

      const response = await fetch(apiUrl, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(formData),
      });
      
      const result = await response.json();
      
      if (result.success) {
        setStatus({ submitting: false, success: true, error: false });
        setFormData({ name: '', email: '', message: '' });
        setTimeout(() => setStatus(prev => ({ ...prev, success: false })), 5000);
      } else {
        setStatus({ submitting: false, success: false, error: true });
      }
    } catch (error) {
      setStatus({ submitting: false, success: false, error: true });
    }
  };

  return (
    <section id="contact" className="py-20 bg-[#151515] border-t border-brand-border">
      <div className="container mx-auto px-6 max-w-5xl flex flex-col md:flex-row gap-16">
        
        {/* Left Side: Info */}
        <div className="flex-1 space-y-6">
          <h2 className="text-3xl font-black text-white mb-6">
            {data.title}
          </h2>
          <p className="text-brand-muted text-sm leading-relaxed max-w-md">
            {data.description}
          </p>
          
          <div className="flex items-center gap-3 text-brand-muted hover:text-white transition-colors cursor-pointer pt-4">
            <Mail size={18} />
            <a href={`mailto:${personalInfo.email}`} className="text-sm font-medium">
              {personalInfo.email}
            </a>
          </div>

          <div className="flex items-center gap-4 pt-6 text-brand-muted">
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all">
              <FaLinkedin size={20} />
            </a>
          </div>
        </div>

        {/* Right Side: Form */}
        <div className="flex-1">
          <form onSubmit={handleSubmit} className="flex flex-col gap-4">
            <div className="flex gap-4">
              <input
                type="text"
                name="name"
                value={formData.name}
                onChange={handleChange}
                required
                placeholder={data.fields.name}
                className="w-full bg-[#1a1a1a] border border-[#333333] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all text-sm"
              />
              <input
                type="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                placeholder={data.fields.email}
                className="w-full bg-[#1a1a1a] border border-[#333333] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all text-sm"
              />
            </div>
            
            <textarea
              name="message"
              value={formData.message}
              onChange={handleChange}
              required
              rows="4"
              placeholder={data.fields.message}
              className="w-full bg-[#1a1a1a] border border-[#333333] text-white px-4 py-3 rounded-xl focus:outline-none focus:border-white/50 focus:ring-1 focus:ring-white/50 transition-all text-sm resize-none"
            ></textarea>
            
            {status.success && <p className="text-green-500 text-sm">{data.successMessage}</p>}
            {status.error && <p className="text-red-500 text-sm">{data.errorMessage}</p>}
            
            <button
              type="submit"
              disabled={status.submitting}
              className="mt-2 w-max px-8 py-3 bg-white text-black font-bold rounded-full hover:bg-gray-200 transition-colors disabled:opacity-50 text-sm"
            >
              {status.submitting ? '...' : data.button}
            </button>
          </form>
        </div>
        
      </div>
    </section>
  );
};

export default Contact;
