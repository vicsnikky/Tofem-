import React from 'react';
import { Target, Compass, Eye, ShieldCheck, Award, Heart, BookOpen, Lightbulb } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const IdentityValues: React.FC = () => {
  const corePillars = [
    {
      title: "Academic Excellence",
      desc: "Delivering Ogun State Ministry of Education standard curriculum enriched with modern problem-solving and critical thinking.",
      icon: BookOpen,
      color: "bg-blue-500/10 text-blue-600 border-blue-200"
    },
    {
      title: "Good Character & Morals",
      desc: "Instilling discipline, respect, integrity, and ethical leadership in every child from creche through secondary school.",
      icon: ShieldCheck,
      color: "bg-emerald-500/10 text-emerald-600 border-emerald-200"
    },
    {
      title: "Financial Accessibility",
      desc: "Pioneered daily payment lesson plans to ensure quality education remains accessible to all families regardless of income.",
      icon: Heart,
      color: "bg-amber-500/10 text-amber-600 border-amber-200"
    },
    {
      title: "Leadership & Innovation",
      desc: "Empowering pupils to think critically, speak confidently, and become transformative leaders in society.",
      icon: Lightbulb,
      color: "bg-indigo-500/10 text-indigo-600 border-indigo-200"
    }
  ];

  return (
    <section id="values" className="py-20 bg-blue-950 text-white relative overflow-hidden border-t border-blue-900">
      {/* Background accents */}
      <div className="absolute top-0 right-0 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 left-0 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white shadow-sm">
            <Award className="w-4 h-4" />
            <span>Our Foundation & Identity</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Mission, Motto & Vision
          </h2>
          <p className="text-blue-100 text-base sm:text-lg leading-relaxed font-normal">
            At Tofem Private School & Tofem College, we believe education is about building both the mind and the character.
          </p>
        </div>

        {/* 3 Core Identity Cards */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          
          {/* Mission */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-3xl p-8 border border-blue-800 hover:border-red-500/50 transition-all shadow-xl space-y-4 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-800 text-white flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-700">
                <Target className="w-7 h-7 text-red-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 block">Our Mission</span>
              <h3 className="text-2xl font-black text-white italic">
                "Building Future Leaders"
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                {SCHOOL_INFO.mission}
              </p>
            </div>
            <div className="pt-4 border-t border-blue-800 text-xs font-semibold text-blue-200 flex items-center gap-1.5">
              <span>Future-Focused Pedagogy</span>
            </div>
          </div>

          {/* Motto */}
          <div className="bg-gradient-to-b from-red-600/30 via-blue-900 to-blue-950 backdrop-blur-md rounded-3xl p-8 border border-red-500/40 hover:border-red-400 transition-all shadow-xl space-y-4 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-red-600 text-white flex items-center justify-center group-hover:scale-110 transition-transform font-bold border border-white/20">
                <Compass className="w-7 h-7" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-300 block">Our Motto</span>
              <h3 className="text-2xl font-black text-white italic">
                "Modelling for Greatness"
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                We lead by example — in character, in learning, and in service. Every teacher, staff, and student strives to be a role model for academic and moral excellence.
              </p>
            </div>
            <div className="pt-4 border-t border-red-500/30 text-xs font-semibold text-red-200 flex items-center gap-1.5">
              <span>Excellence by Example</span>
            </div>
          </div>

          {/* Vision */}
          <div className="bg-blue-900/80 backdrop-blur-md rounded-3xl p-8 border border-blue-800 hover:border-red-500/50 transition-all shadow-xl space-y-4 flex flex-col justify-between group">
            <div className="space-y-4">
              <div className="w-14 h-14 rounded-2xl bg-blue-800 text-white flex items-center justify-center group-hover:scale-110 transition-transform border border-blue-700">
                <Eye className="w-7 h-7 text-red-400" />
              </div>
              <span className="text-xs font-bold uppercase tracking-widest text-red-400 block">Our Vision</span>
              <h3 className="text-2xl font-black text-white italic">
                "Sustainable Knowledge & Character"
              </h3>
              <p className="text-sm text-blue-100 leading-relaxed">
                {SCHOOL_INFO.vision}
              </p>
            </div>
            <div className="pt-4 border-t border-blue-800 text-xs font-semibold text-blue-200 flex items-center gap-1.5">
              <span>Mind & Character Development</span>
            </div>
          </div>

        </div>

        {/* 4 Core Value Pillars */}
        <div className="space-y-6 pt-6">
          <div className="text-center">
            <h3 className="text-xl font-bold text-white">Our Strategic Educational Pillars</h3>
          </div>

          <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
            {corePillars.map((pillar, idx) => {
              const IconComp = pillar.icon;
              return (
                <div key={idx} className="bg-blue-900/60 p-5 rounded-2xl border border-blue-800 space-y-2">
                  <div className={`w-10 h-10 rounded-xl flex items-center justify-center border bg-blue-800 text-white border-blue-700`}>
                    <IconComp className="w-5 h-5 text-red-400" />
                  </div>
                  <h4 className="text-base font-bold text-white">{pillar.title}</h4>
                  <p className="text-xs text-blue-100 leading-relaxed">{pillar.desc}</p>
                </div>
              );
            })}
          </div>
        </div>

      </div>
    </section>
  );
};
