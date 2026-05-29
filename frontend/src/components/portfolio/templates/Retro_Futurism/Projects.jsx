import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github } from 'lucide-react';
import SectionHeading from './SectionHeading';
import data from '../../../../data/dummy_data.json';

export default function Projects() {
  return (
    <section className="p-8 rounded-xl border border-fuchsia-500/30 bg-slate-950/80 backdrop-blur-md shadow-[0_0_30px_rgba(217,70,239,0.15)]">
      <SectionHeading>System Modules</SectionHeading>
      <div className="grid md:grid-cols-2 gap-8 mt-2">
        {data.projects.map((project, i) => (
          <motion.div key={i} whileHover={{ y: -10, scale: 1.02 }} className="bg-slate-900/90 border border-slate-800 hover:border-cyan-400 rounded-xl overflow-hidden transition-all duration-300 shadow-xl hover:shadow-[0_0_25px_rgba(6,182,212,0.4)]">
            <div className="h-56 overflow-hidden relative border-b border-slate-800">
              <div className="absolute inset-0 bg-gradient-to-t from-slate-900 via-transparent to-transparent z-10" />
              <img src={project.image} alt={project.title} className="w-full h-full object-cover filter contrast-125 saturate-150" />
            </div>
            <div className="p-6 relative z-20">
              <h3 className="text-lg sm:text-xl md:text-2xl font-bold text-pink-400 mb-3">{project.title}</h3>
              <p className="text-xs sm:text-sm md:text-sm leading-relaxed text-slate-300 mb-6">{project.description}</p>
              <div className="flex gap-4 mt-2">
                <a href={project.liveUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-cyan-400 hover:text-cyan-200"><ExternalLink size={16} /> Live Boot</a>
                <a href={project.githubUrl} target="_blank" rel="noreferrer" className="flex items-center gap-2 text-sm text-slate-400 hover:text-white"><Github size={16} /> Source</a>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
