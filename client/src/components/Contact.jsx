import React, { useState } from 'react';
import { profileData, personalInfo } from '../data/profile';
import { Mail, Github } from 'lucide-react';
import { FaLinkedin, FaFacebook } from 'react-icons/fa';

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
          // In production, if using HTTPS, Nginx will proxy /api/contact to port 5000
          if (protocol === 'https:') {
            apiUrl = `https://${hostname}/api/contact`;
          } else {
            apiUrl = `http://${hostname}:5000/api/contact`;
          }
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
            <a href={personalInfo.github} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all" title="GitHub">
              <Github size={20} />
            </a>
            <a href={personalInfo.linkedin} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all" title="LinkedIn">
              <FaLinkedin size={20} />
            </a>
            <a href={personalInfo.facebook} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all" title="Facebook">
              <FaFacebook size={20} />
            </a>
            <a href={personalInfo.zalo} target="_blank" rel="noreferrer" className="hover:text-white hover:scale-110 transition-all" title="Zalo">
              <svg viewBox="0 0 24 24" className="w-[20px] h-[20px] fill-current" xmlns="http://www.w3.org/2000/svg">
                <path d="M12 2C6.48 2 2 5.92 2 10.78c0 2.87 1.63 5.4 4.15 6.94l-.84 2.94c-.11.39.29.73.66.54l3.43-1.74c.83.19 1.7.3 2.6.3 5.52 0 10-3.92 10-8.78S17.52 2 12 2zm1.65 11.23H9.86v-.88h2.09c.39 0 .54-.25.2-.6l-2-2.05c-.34-.34-.53-.82-.53-1.38v-1.15c0-.26.22-.48.48-.48h3.33v.89H11.4c-.39 0-.54.25-.2.6l2 2.05c.34.34.53.82.53 1.38v1.08c0 .26-.22.48-.48.48z"/>
              </svg>
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
