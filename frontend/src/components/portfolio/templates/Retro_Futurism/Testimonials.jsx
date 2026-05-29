import React from 'react';
import { motion } from 'framer-motion';
import { Star, MessageSquare } from 'lucide-react';
import SectionHeading from './SectionHeading';
import data from '../../../../data/dummy_data.json';

export default function Testimonials() {
  return (
    <section>
      <SectionHeading><Star size={36} className="text-cyan-400" /> User Feedback</SectionHeading>
      <div className="grid md:grid-cols-3 gap-4 sm:gap-6">
        {data.testimonials.map((test, i) => (
          <motion.div key={i} whileHover={{ y: -8, scale: 1.05 }} className="bg-slate-900/80 border border-slate-800 hover:border-cyan-500 p-6 rounded-xl backdrop-blur-md relative overflow-hidden group">
            <div className="absolute top-0 right-0 p-4 opacity-10 group-hover:opacity-30 transition-opacity">
              <MessageSquare size={48} className="text-cyan-500" />
            </div>
            <p className="text-slate-300 text-xs sm:text-sm italic mb-6 relative z-10">"{test.text}"</p>
            <div className="flex items-center gap-4 relative z-10">
              <img src={test.avatar} alt={test.name} className="w-12 h-12 rounded-full border-2 border-pink-500" />
              <div>
                <h4 className="text-pink-400 font-bold text-xs sm:text-sm">{test.name}</h4>
                <span className="text-slate-500 text-[11px] sm:text-xs">{test.role}</span>
              </div>
            </div>
          </motion.div>
        ))}
      </div>
    </section>
  );
}
