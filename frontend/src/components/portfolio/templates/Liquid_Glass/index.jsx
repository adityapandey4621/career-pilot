import React from 'react';
import { motion } from 'framer-motion';
import { Mail, Github, Linkedin, ExternalLink, Code2, Briefcase, MapPin, ChevronRight, Palette, Layers, Terminal } from 'lucide-react';
import data from '../../../../data/dummy_data.json';

// --- Reusable Glass Card Component ---
const GlassCard = ({ children, className = "", delay = 0 }) => (
  <motion.div
    initial={{ opacity: 0, y: 20 }}
    whileInView={{ opacity: 1, y: 0 }}
    viewport={{ once: true }}
    transition={{ duration: 0.6, delay, ease: [0.22, 1, 0.36, 1] }}
    className={`relative overflow-hidden bg-white/10 backdrop-blur-2xl border border-white/20 shadow-[0_8px_32px_0_rgba(0,0,0,0.1)] rounded-3xl ${className}`}
  >
    {/* Subtle inner light reflection */}
    <div className="absolute inset-0 bg-gradient-to-br from-white/20 to-transparent opacity-50 pointer-events-none" />
    {/* Content container */}
    <div className="relative z-10">{children}</div>
  </motion.div>
);

export default function LiquidGlass() {
  const { personal, socials, skills, projects, experience, testimonials, stats } = data;

  return (
    <div className="relative min-h-screen font-sans overflow-x-hidden selection:bg-white/30 selection:text-white bg-[#0f172a]">
      
      {/* --- Dynamic Abstract Background --- */}
      <div className="fixed inset-0 z-0 overflow-hidden pointer-events-none">
        {/* Deep base color */}
        <div className="absolute inset-0 bg-slate-950" />
        {/* Floating gradient orbs */}
        <motion.div 
          animate={{ 
            x: [0, 100, -100, 0], 
            y: [0, -100, 100, 0],
            scale: [1, 1.2, 0.8, 1]
          }}
          transition={{ duration: 20, repeat: Infinity, ease: "linear" }}
          className="absolute top-[-10%] left-[-10%] w-[50vw] h-[50vw] rounded-full bg-indigo-600/40 mix-blend-screen blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, -150, 150, 0], 
            y: [0, 150, -150, 0],
            scale: [1, 0.8, 1.2, 1]
          }}
          transition={{ duration: 25, repeat: Infinity, ease: "linear" }}
          className="absolute bottom-[-10%] right-[-10%] w-[60vw] h-[60vw] rounded-full bg-emerald-500/30 mix-blend-screen blur-[120px]" 
        />
        <motion.div 
          animate={{ 
            x: [0, 50, -50, 0], 
            y: [0, 50, -50, 0],
          }}
          transition={{ duration: 15, repeat: Infinity, ease: "linear" }}
          className="absolute top-[20%] right-[20%] w-[30vw] h-[30vw] rounded-full bg-cyan-500/40 mix-blend-screen blur-[100px]" 
        />
      </div>

      {/* --- Main Content --- */}
      <main className="relative z-10 max-w-7xl mx-auto px-6 py-20 lg:py-32 flex flex-col gap-12 lg:gap-20">
        
        {/* HEADER / HERO SECTION */}
        <GlassCard className="p-8 md:p-12 lg:p-16 flex flex-col md:flex-row items-center gap-10 md:gap-16">
          <div className="relative group">
            {/* Avatar glow */}
            <div className="absolute -inset-1 bg-gradient-to-tr from-cyan-400 to-indigo-500 rounded-full blur opacity-50 group-hover:opacity-100 transition duration-1000 group-hover:duration-200" />
            <img 
              src={personal.avatar} 
              alt={personal.name} 
              className="relative w-40 h-40 md:w-56 md:h-56 rounded-full object-cover border-4 border-white/20 shadow-2xl"
            />
          </div>
          
          <div className="flex-1 text-center md:text-left text-white">
            <motion.h1 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              className="text-5xl md:text-7xl font-black tracking-tight mb-4"
            >
              {personal.name}
            </motion.h1>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.1 }}
              className="text-xl md:text-3xl font-light text-slate-300 mb-8"
            >
              {personal.title}
            </motion.p>
            <motion.p 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.2 }}
              className="text-lg text-slate-400 max-w-2xl leading-relaxed mb-8"
            >
              {personal.bio}
            </motion.p>
            
            <motion.div 
              initial={{ opacity: 0, y: 10 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ delay: 0.3 }}
              className="flex flex-wrap justify-center md:justify-start gap-4"
            >
              {socials.github && (
                <a href={socials.github} className="p-3 bg-white/5 hover:bg-white/20 border border-white/10 rounded-full transition-all duration-300 hover:scale-110">
                  <Github className="w-6 h-6" />
                </a>
              )}
              {socials.linkedin && (
                <a href={socials.linkedin} className="p-3 bg-white/5 hover:bg-white/20 border border-white/10 rounded-full transition-all duration-300 hover:scale-110">
                  <Linkedin className="w-6 h-6" />
                </a>
              )}
              <div className="flex items-center gap-2 px-4 py-3 bg-white/5 border border-white/10 rounded-full text-sm font-medium">
                <MapPin className="w-4 h-4 text-emerald-400" />
                {personal.location}
              </div>
            </motion.div>
          </div>
        </GlassCard>

        {/* STATS & SKILLS ROW */}
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 lg:gap-12">
          
          {/* STATS */}
          <GlassCard className="lg:col-span-4 p-8 flex flex-col justify-center gap-8" delay={0.1}>
            <div className="text-white">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-emerald-300 to-cyan-300">{stats.yearsExperience}+</div>
              <div className="text-slate-400 font-medium uppercase tracking-wider text-sm mt-2">Years Experience</div>
            </div>
            <div className="w-full h-px bg-white/10" />
            <div className="text-white">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-cyan-300 to-indigo-300">{stats.projectsCompleted}</div>
              <div className="text-slate-400 font-medium uppercase tracking-wider text-sm mt-2">Projects Delivered</div>
            </div>
            <div className="w-full h-px bg-white/10" />
            <div className="text-white">
              <div className="text-5xl font-black text-transparent bg-clip-text bg-gradient-to-r from-indigo-300 to-purple-300">{stats.happyClients}</div>
              <div className="text-slate-400 font-medium uppercase tracking-wider text-sm mt-2">Happy Clients</div>
            </div>
          </GlassCard>

          {/* SKILLS */}
          <GlassCard className="lg:col-span-8 p-8 md:p-12" delay={0.2}>
            <h3 className="text-2xl font-bold text-white mb-8 flex items-center gap-3">
              <Code2 className="w-6 h-6 text-cyan-400" /> Core Arsenal
            </h3>
            <div className="flex flex-wrap gap-3">
              {skills.map((skill, i) => (
                <div 
                  key={i} 
                  className="group relative px-6 py-4 bg-white/5 hover:bg-white/10 border border-white/10 rounded-2xl transition-all duration-300 cursor-default"
                >
                  <div className="text-white font-medium mb-2">{skill.name}</div>
                  <div className="w-32 h-1.5 bg-white/10 rounded-full overflow-hidden">
                    <motion.div 
                      initial={{ width: 0 }}
                      whileInView={{ width: `${skill.level}%` }}
                      viewport={{ once: true }}
                      transition={{ duration: 1, delay: 0.3 + (i * 0.1) }}
                      className="h-full bg-gradient-to-r from-cyan-400 to-indigo-400 rounded-full"
                    />
                  </div>
                  {/* Subtle category tag */}
                  <div className="absolute top-3 right-3 opacity-0 group-hover:opacity-100 transition-opacity">
                    {skill.category === 'Frontend' ? <Palette className="w-4 h-4 text-white/30" /> : 
                     skill.category === 'Backend' ? <Terminal className="w-4 h-4 text-white/30" /> : 
                     <Layers className="w-4 h-4 text-white/30" />}
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </div>

        {/* PROJECTS GRID */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-10 pl-4 border-l-4 border-emerald-400">Selected Work</h2>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
            {projects.map((project, i) => (
              <GlassCard key={i} className="group flex flex-col h-full" delay={i * 0.1}>
                <div className="relative aspect-video overflow-hidden border-b border-white/10">
                  <div className="absolute inset-0 bg-slate-900/20 group-hover:bg-transparent transition-colors z-10" />
                  <img 
                    src={project.image} 
                    alt={project.title} 
                    className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-105"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900/90 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-300 z-20 flex items-end p-6">
                    <div className="flex gap-4 w-full">
                      {project.liveUrl && (
                        <a href={project.liveUrl} className="flex-1 py-3 bg-white/20 hover:bg-white/30 backdrop-blur-md rounded-xl text-white font-medium flex justify-center items-center gap-2 transition-colors">
                          <ExternalLink className="w-4 h-4" /> Live Site
                        </a>
                      )}
                      {project.githubUrl && (
                        <a href={project.githubUrl} className="flex-1 py-3 bg-white/10 hover:bg-white/20 backdrop-blur-md rounded-xl text-white font-medium flex justify-center items-center gap-2 transition-colors">
                          <Github className="w-4 h-4" /> Source
                        </a>
                      )}
                    </div>
                  </div>
                </div>
                <div className="p-8 flex-1 flex flex-col">
                  <h3 className="text-2xl font-bold text-white mb-3 group-hover:text-cyan-300 transition-colors">{project.title}</h3>
                  <p className="text-slate-300 mb-6 flex-1 leading-relaxed">{project.description}</p>
                  <div className="flex flex-wrap gap-2 mt-auto">
                    {project.techStack.map((tech, j) => (
                      <span key={j} className="text-xs font-medium text-cyan-200 bg-cyan-900/30 border border-cyan-700/30 px-3 py-1 rounded-full">
                        {tech}
                      </span>
                    ))}
                  </div>
                </div>
              </GlassCard>
            ))}
          </div>
        </section>

        {/* EXPERIENCE TIMELINE */}
        <section>
          <h2 className="text-3xl font-bold text-white mb-10 pl-4 border-l-4 border-indigo-400">Experience</h2>
          <GlassCard className="p-8 md:p-12">
            <div className="space-y-12 relative before:absolute before:inset-0 before:ml-5 md:before:ml-6 before:-translate-x-px md:before:mx-auto md:before:translate-x-0 before:h-full before:w-0.5 before:bg-white/10">
              {experience.map((exp, i) => (
                <div key={i} className="relative flex items-center justify-between md:justify-normal md:odd:flex-row-reverse group is-active">
                  <div className="flex items-center justify-center w-10 h-10 rounded-full border-4 border-slate-900 bg-indigo-500 text-white shadow shrink-0 md:order-1 md:group-odd:-translate-x-1/2 md:group-even:translate-x-1/2 z-10">
                    <Briefcase className="w-4 h-4" />
                  </div>
                  <div className="w-[calc(100%-4rem)] md:w-[calc(50%-2.5rem)] p-6 rounded-2xl bg-white/5 border border-white/10 hover:bg-white/10 transition-colors">
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between mb-2">
                      <h4 className="font-bold text-xl text-white">{exp.role}</h4>
                      <span className="text-emerald-400 font-mono text-sm">{exp.period}</span>
                    </div>
                    <div className="text-indigo-300 font-medium mb-4">{exp.company}</div>
                    <p className="text-slate-400 leading-relaxed">{exp.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </GlassCard>
        </section>

        {/* FOOTER CTA */}
        <GlassCard className="p-12 md:p-24 text-center mt-12 bg-gradient-to-br from-white/10 to-white/5">
          <h2 className="text-4xl md:text-6xl font-black text-white mb-6">Let's Create Together</h2>
          <p className="text-xl text-slate-300 mb-12 max-w-2xl mx-auto">
            Ready to build something extraordinary? I'm currently open for new opportunities and collaborations.
          </p>
          {socials.email && (
            <a 
              href={`mailto:${socials.email}`} 
              className="inline-flex items-center gap-3 px-8 py-4 bg-white text-slate-900 rounded-full font-bold text-lg hover:scale-105 hover:shadow-[0_0_40px_rgba(255,255,255,0.3)] transition-all duration-300"
            >
              <Mail className="w-5 h-5" /> Get in Touch
            </a>
          )}
        </GlassCard>

      </main>
    </div>
  );
}
