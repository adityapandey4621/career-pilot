import React, { useState, useEffect } from 'react';
import { Home, User, Briefcase, LayoutGrid, FileText, Mail, Sun, ChevronDown, Layers } from 'lucide-react';

const Navbar = ({ name }) => {
  const [firstName, lastName] = (name || 'Dev Patel').split(' ');
  const [activeHash, setActiveHash] = useState('#home');

  useEffect(() => {
    const handleHashChange = () => {
      setActiveHash(window.location.hash || '#home');
    };
    window.addEventListener('hashchange', handleHashChange);
    return () => window.removeEventListener('hashchange', handleHashChange);
  }, []);

  const navItems = [
    { id: '#home', label: 'Home' },
    { id: '#services', label: 'Services' },
    { id: '#works', label: 'Works' },
    { id: '#blogs', label: 'Blogs' },
    { id: '#contact', label: "Let's Talk" }
  ];

  return (
    <nav className="flex items-center justify-between px-6 py-4 rounded-[32px] sticky top-8 z-50 shadow-xl transition-all font-sans" style={{ backgroundColor: '#13161F', border: '1px solid rgba(255,255,255,0.03)' }}>
      {/* Logo */}
      <div className="flex items-center gap-3">
        <div className="flex gap-1">
          <div className="w-2 h-6 bg-white rounded-sm"></div>
          <div className="w-2 h-6 bg-white/50 rounded-sm"></div>
          <div className="w-2 h-6 bg-white/20 rounded-sm"></div>
        </div>
        <span className="text-xl font-extrabold tracking-tight text-white">
          {firstName || 'Dev'}<span style={{ color: '#4770FF' }}>{lastName || 'Patel'}</span>
        </span>
      </div>

      {/* Desktop Menu */}
      <div className="hidden lg:flex items-center gap-1 p-1 rounded-full" style={{ backgroundColor: '#0E1018' }}>
        {navItems.map((item) => {
          const isActive = activeHash === item.id || (activeHash === '' && item.id === '#home');
          return (
            <a
              key={item.id}
              href={item.id}
              className={`px-6 py-2.5 rounded-full text-sm font-bold transition-all duration-300 ${isActive ? 'text-white' : 'text-slate-400 hover:text-slate-200'}`}
              style={{ backgroundColor: isActive ? '#1A1F2C' : 'transparent' }}
            >
              {item.label}
            </a>
          );
        })}
      </div>

      {/* Right side - Theme / Hire me */}
      <div className="flex items-center gap-4">
        <button className="p-2.5 rounded-full transition-colors hover:bg-white/10" style={{ backgroundColor: '#0E1018', border: '1px solid rgba(255,255,255,0.05)' }}>
          <Sun size={18} className="text-slate-300" />
        </button>
        <a 
          href="#contact"
          className="hidden md:flex items-center gap-2 px-6 py-2.5 rounded-full text-sm font-bold text-white transition-transform hover:scale-[1.02]" 
          style={{ backgroundColor: '#4770FF' }}
        >
          Hire Me!
        </a>
        <button className="lg:hidden p-2.5 rounded-full transition-colors hover:bg-white/10 text-white" style={{ backgroundColor: '#0E1018', border: '1px solid rgba(255,255,255,0.05)' }}>
          <ChevronDown size={18} />
        </button>
      </div>
    </nav>
  );
};

export default Navbar;
