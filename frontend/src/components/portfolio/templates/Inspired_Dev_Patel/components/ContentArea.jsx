import React from 'react';
import { ArrowRight, ExternalLink } from 'lucide-react';
import { motion } from 'framer-motion';

// Helper component for Marquee text
const MarqueeText = ({ text }) => (
  <div className="relative flex overflow-x-hidden w-full bg-[#0E1018] rounded-xl border border-white/5 py-3">
    <div className="animate-marquee whitespace-nowrap flex items-center">
      <span className="mx-4 font-semibold text-sm tracking-widest text-slate-300">{text}</span>
      <span className="mx-4 font-semibold text-sm tracking-widest text-slate-300">{text}</span>
      <span className="mx-4 font-semibold text-sm tracking-widest text-slate-300">{text}</span>
      <span className="mx-4 font-semibold text-sm tracking-widest text-slate-300">{text}</span>
    </div>
    <div className="absolute top-0 animate-marquee2 whitespace-nowrap flex items-center">
      <span className="mx-4 font-semibold text-sm tracking-widest text-slate-300">{text}</span>
      <span className="mx-4 font-semibold text-sm tracking-widest text-slate-300">{text}</span>
      <span className="mx-4 font-semibold text-sm tracking-widest text-slate-300">{text}</span>
      <span className="mx-4 font-semibold text-sm tracking-widest text-slate-300">{text}</span>
    </div>
  </div>
);

// Fallback images for logos
const LOGOS = {
  freelancer: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/figma/figma-original.svg',
  upwork: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jira/jira-original.svg',
  popway: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/firefox/firefox-original.svg',
  visitorz: 'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/html5/html5-original.svg'
};

const SKILL_LOGOS = [
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/dot-net/dot-net-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/javascript/javascript-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/jquery/jquery-original-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/microsoftsqlserver/microsoftsqlserver-plain-wordmark.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/docker/docker-original.svg',
  'https://cdn.jsdelivr.net/gh/devicons/devicon/icons/csharp/csharp-original.svg',
];

const ContentArea = ({ data, theme, activeTab }) => {
  const { experience, projects, personal, stats } = data || {};

  // Animations
  const containerVars = {
    hidden: { opacity: 0 },
    visible: { opacity: 1, transition: { staggerChildren: 0.1 } }
  };
  const itemVars = {
    hidden: { opacity: 0, y: 20 },
    visible: { opacity: 1, y: 0, transition: { duration: 0.5 } }
  };
  const sentence = {
    hidden: { opacity: 1 },
    visible: { opacity: 1, transition: { delay: 0.2, staggerChildren: 0.015 } }
  };
  const letter = {
    hidden: { opacity: 0, y: 5 },
    visible: { opacity: 1, y: 0 }
  };

  const bioText = personal?.bio || 'Passionate .NET Developer 🛠️ with hands-on experience in building scalable apps using ASP.NET Core, C#, and SQL. I love turning real-world problems into clean, efficient backend solutions.';

  if (activeTab === 'About') {
    return (
      <motion.div variants={containerVars} initial="hidden" animate="visible" className="flex flex-col gap-6 w-full">
        <motion.div variants={itemVars} className="p-10 rounded-[32px] shadow-lg flex-1" style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.border}` }}>
          
          <div className="flex justify-between items-start mb-8">
            <h1 className="text-4xl md:text-5xl font-bold">
              Hi, I Am <span style={{ color: theme.accent }}>{personal?.name || 'Dev Patel'}</span> <span className="inline-block animate-wave">👋</span>
            </h1>
            <div className="hidden sm:flex items-center gap-2 px-4 py-2 rounded-full text-sm font-medium w-48 relative overflow-hidden" style={{ backgroundColor: '#0E1018', border: `1px solid ${theme.border}` }}>
               <div className="animate-marquee whitespace-nowrap flex items-center gap-2 text-blue-400">
                 Available For Hire 🚀 Available For Hire 🚀
               </div>
               <div className="absolute top-2 animate-marquee2 whitespace-nowrap flex items-center gap-2 text-blue-400">
                 Available For Hire 🚀 Available For Hire 🚀
               </div>
            </div>
          </div>

          <motion.p 
            className="text-lg md:text-xl leading-relaxed max-w-3xl mb-12" 
            style={{ color: theme.textMuted }}
            variants={sentence}
          >
            {bioText.split("").map((char, index) => (
              <motion.span key={char + "-" + index} variants={letter}>{char}</motion.span>
            ))}
          </motion.p>

          <div className="grid grid-cols-3 gap-6 mb-16">
            <motion.div variants={itemVars}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stats?.yearsExperience || '2'}+</div>
              <div className="text-sm md:text-base font-medium" style={{ color: theme.textMuted }}>Year of<br/>Experience</div>
            </motion.div>
            <motion.div variants={itemVars}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">10+</div>
              <div className="text-sm md:text-base font-medium" style={{ color: theme.textMuted }}>Technologies<br/>Mastered</div>
            </motion.div>
            <motion.div variants={itemVars}>
              <div className="text-4xl md:text-5xl font-bold text-white mb-2">{stats?.projectsCompleted || '50'}+</div>
              <div className="text-sm md:text-base font-medium" style={{ color: theme.textMuted }}>Successful<br/>Projects</div>
            </motion.div>
          </div>

          <motion.h2 variants={itemVars} className="text-2xl font-bold mb-8">
            Worked With 50+ Brands ✨ Worldwide | .NET Developer
          </motion.h2>

          <motion.div variants={itemVars} className="flex flex-col gap-4 overflow-hidden relative w-full pt-4">
            <div className="flex gap-4 animate-marquee whitespace-nowrap">
              {[...SKILL_LOGOS, ...SKILL_LOGOS].map((url, idx) => (
                <div key={idx} className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-md transition-transform hover:scale-110 p-4 bg-[#0E1018] border border-white/5">
                  <img src={url} className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all" alt="tech" />
                </div>
              ))}
            </div>
            <div className="flex gap-4 animate-marquee-reverse whitespace-nowrap">
              {[...SKILL_LOGOS, ...SKILL_LOGOS].reverse().map((url, idx) => (
                <div key={idx} className="w-20 h-20 rounded-2xl flex items-center justify-center shrink-0 shadow-md transition-transform hover:scale-110 p-4 bg-[#0E1018] border border-white/5">
                  <img src={url} className="w-full h-full object-contain filter grayscale hover:grayscale-0 transition-all" alt="tech" />
                </div>
              ))}
            </div>
          </motion.div>

        </motion.div>
      </motion.div>
    );
  }

  return (
    <motion.div variants={containerVars} initial="hidden" animate="visible" className="flex flex-col gap-6 w-full">
      <div className="grid grid-cols-1 xl:grid-cols-2 gap-6">
        <div className="flex flex-col gap-6">
          <motion.div variants={itemVars} className="p-8 rounded-[32px] shadow-lg" style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.border}` }}>
            <h2 className="text-2xl font-bold mb-6">Work Experience</h2>
            <div className="flex flex-col gap-6">
              {[
                { title: 'Freelancer', comp: 'Software Developer', years: '2021-2025', logo: LOGOS.freelancer },
                { title: 'Popway Software', comp: 'Software Developer', years: '2025-2025', logo: LOGOS.popway },
                { title: 'Upwork', comp: 'Software Engineer', years: '2021-2025', logo: LOGOS.upwork },
                { title: 'Visitorz.io', comp: 'Internship', years: '2024-2025', logo: LOGOS.visitorz }
              ].map((exp, idx) => (
                <motion.div key={idx} whileHover={{ y: -5 }} className="flex items-center gap-4 group cursor-pointer p-2 rounded-2xl hover:bg-white/5 transition-colors">
                  <div className="w-12 h-12 rounded-xl flex items-center justify-center shrink-0 p-2 shadow-inner" style={{ backgroundColor: '#0E1018', border: `1px solid ${theme.border}` }}>
                    <img src={exp.logo} alt={exp.title} className="w-full h-full object-contain" />
                  </div>
                  <div className="flex-1 min-w-0">
                    <h3 className="font-semibold text-white truncate">{exp.title}</h3>
                    <p className="text-sm truncate" style={{ color: theme.textMuted }}>{exp.comp}</p>
                  </div>
                  <div className="text-sm font-medium shrink-0" style={{ color: theme.textMuted }}>
                    {exp.years}
                  </div>
                </motion.div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVars} className="p-8 rounded-[32px] shadow-lg flex-1" style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.border}` }}>
            <h2 className="text-2xl font-bold mb-6">My Expert Area</h2>
            <div className="grid grid-cols-3 gap-4">
              {SKILL_LOGOS.map((url, idx) => (
                <div key={idx} className="flex flex-col items-center gap-3">
                  <div className="w-16 h-16 rounded-2xl flex items-center justify-center transition-all duration-300 hover:scale-110 shadow-lg p-3" style={{ backgroundColor: '#0E1018', border: `1px solid ${theme.border}` }}>
                     <img src={url} alt="skill" className="w-full h-full object-contain" />
                  </div>
                </div>
              ))}
            </div>
          </motion.div>

          <motion.div variants={itemVars} className="p-8 rounded-[32px] shadow-lg flex-1" style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.border}` }}>
            <h2 className="text-2xl font-bold mb-6">Certificates</h2>
            <div className="flex flex-col gap-4">
               {['Advanced ASP.NET Core Architecture', 'Azure Cloud Developer Associate'].map((cert, idx) => (
                 <div key={idx} className="flex items-center gap-4 bg-[#0E1018] p-4 rounded-2xl border border-white/5 cursor-pointer hover:border-blue-500/50 transition-colors">
                    <div className="w-10 h-10 rounded-lg bg-blue-500/10 flex flex-center text-blue-400 items-center justify-center shrink-0">🎓</div>
                    <span className="font-medium text-sm text-slate-200">{cert}</span>
                 </div>
               ))}
            </div>
          </motion.div>
        </div>

        <motion.div variants={itemVars} className="p-8 rounded-[32px] shadow-lg flex flex-col h-full" style={{ backgroundColor: theme.cardBg, border: `1px solid ${theme.border}` }}>
          <div className="flex justify-between items-center mb-6">
            <h2 className="text-2xl font-bold">Recent Projects</h2>
            <a href="#" className="flex items-center gap-1 text-sm font-medium hover:underline" style={{ color: theme.accent }}>
              All Projects <ArrowRight size={14} />
            </a>
          </div>

          <div className="flex flex-col gap-6 flex-1">
            {(projects?.length > 0 ? projects.slice(0, 3) : [
              { title: 'Shifra, Your Virtual Assistant', category: 'Ai', image: 'https://images.unsplash.com/photo-1677442136019-21780ecad995?w=500&h=300&fit=crop' },
              { title: 'Product Developing', category: 'Web', image: 'https://images.unsplash.com/photo-1460925895917-afdab827c52f?w=500&h=300&fit=crop' },
              { title: 'Neon Cipher', category: 'Cyber', image: 'https://images.unsplash.com/photo-1526374965328-7f61d4dc18c5?w=500&h=300&fit=crop' }
            ]).map((proj, idx) => (
              <motion.div key={idx} whileHover={{ scale: 1.02 }} className="group relative rounded-2xl overflow-hidden cursor-pointer h-48 md:h-56 border" style={{ borderColor: theme.border, backgroundColor: '#0E1018' }}>
                <img src={proj.image || proj.imageUrl} alt={proj.title} className="w-full h-full object-cover opacity-60 group-hover:opacity-100 transition-opacity duration-500" />
                <div className="absolute inset-0 flex flex-col justify-end p-4 bg-gradient-to-t from-black/80 to-transparent">
                  <span className="self-start px-3 py-1 rounded-lg text-xs font-bold mb-2 shadow-sm" style={{ backgroundColor: '#fff', color: '#000' }}>
                    {proj.category || 'Ai'}
                  </span>
                </div>
              </motion.div>
            ))}
          </div>

          <div className="mt-8">
            <MarqueeText text="Let's 👋 Work Together • Let's 👋 Work Together" />
          </div>
        </motion.div>
      </div>

      <style>{`
        .animate-marquee {
          animation: marquee 20s linear infinite;
        }
        .animate-marquee2 {
          animation: marquee2 20s linear infinite;
        }
        .animate-marquee-reverse {
          animation: marquee-reverse 20s linear infinite;
        }
        @keyframes marquee {
          0% { transform: translateX(0%); }
          100% { transform: translateX(-100%); }
        }
        @keyframes marquee2 {
          0% { transform: translateX(100%); }
          100% { transform: translateX(0%); }
        }
        @keyframes marquee-reverse {
          0% { transform: translateX(-100%); }
          100% { transform: translateX(0%); }
        }
      `}</style>
    </motion.div>
  );
};

export default ContentArea;
