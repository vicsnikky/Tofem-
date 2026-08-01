import React, { useState } from 'react';
import { BookOpen, Baby, School, GraduationCap, HeartHandshake, CheckCircle2, ShieldCheck, ArrowRight, Wallet, Sparkles } from 'lucide-react';
import { ACADEMIC_PROGRAMS, SCHOOL_INFO } from '../data/schoolData';

interface AcademicsAndFeesProps {
  onOpenAdmissionModal: (plan?: string) => void;
}

export const AcademicsAndFees: React.FC<AcademicsAndFeesProps> = ({ onOpenAdmissionModal }) => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Early Years', 'Primary', 'Junior Secondary', 'Senior Secondary'];

  const filteredPrograms = selectedCategory === 'All'
    ? ACADEMIC_PROGRAMS
    : ACADEMIC_PROGRAMS.filter(p => p.category === selectedCategory);

  return (
    <section id="academics" className="py-20 bg-slate-50 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-16">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-indigo-100 text-indigo-900 border border-indigo-200">
            <BookOpen className="w-4 h-4 text-indigo-700" />
            <span>Academic Excellence & Accessibility</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            Comprehensive Curriculum & Flexible Fees
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            From Creche care to WAEC/NECO senior secondary graduation, we provide age-appropriate academic focus across our two Ogun State approved campuses with flexible fee payment structures and standard termly options.
          </p>
        </div>

        {/* Feature Spotlight: Flexible Fee Payment Structure */}
        <div className="bg-gradient-to-br from-blue-900 via-indigo-950 to-slate-900 text-white rounded-3xl p-8 sm:p-12 shadow-2xl border border-blue-800/80 relative overflow-hidden">
          <div className="absolute top-0 right-0 w-80 h-80 bg-amber-500/10 rounded-full blur-3xl pointer-events-none" />

          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            
            <div className="lg:col-span-7 space-y-5">
              <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full text-xs font-bold bg-amber-400 text-slate-950">
                <HeartHandshake className="w-4 h-4" />
                <span>Accessible Education</span>
              </div>
              <h3 className="text-2xl sm:text-4xl font-extrabold text-white leading-tight">
                Flexible & Standard Termly Fee Options
              </h3>
              <p className="text-slate-200 text-sm sm:text-base leading-relaxed">
                When Tofem Private School began on June 3rd, 2013, we established accessible fee options so that finances would never stand as a barrier to education. Today, we continue this legacy of inclusion with standard termly fees and flexible payment plans.
              </p>

              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 text-xs text-slate-200 pt-2">
                <div className="flex items-start gap-2 bg-white/10 p-3 rounded-xl border border-white/10">
                  <Wallet className="w-4 h-4 text-amber-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-amber-300 font-bold">Flexible Fee Structure</strong>
                    <span>Pay standard termly fees or arrange flexible installments with the bursary.</span>
                  </div>
                </div>
                <div className="flex items-start gap-2 bg-white/10 p-3 rounded-xl border border-white/10">
                  <ShieldCheck className="w-4 h-4 text-emerald-400 shrink-0 mt-0.5" />
                  <div>
                    <strong className="block text-emerald-300 font-bold">No Disruption to Learning</strong>
                    <span>Children attend classes continuously without learning interruption.</span>
                  </div>
                </div>
              </div>

              <div className="pt-4 flex flex-wrap items-center gap-3">
                <button
                  onClick={() => onOpenAdmissionModal('Flexible Fee Payment')}
                  className="px-6 py-3 bg-amber-400 hover:bg-amber-300 text-slate-950 font-bold text-xs rounded-xl shadow-lg transition-all flex items-center gap-2"
                >
                  <span>Enquire for Fee Plans</span>
                  <ArrowRight className="w-4 h-4" />
                </button>
                <a
                  href={SCHOOL_INFO.whatsappUrl}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="px-5 py-3 bg-white/10 hover:bg-white/20 text-white font-semibold text-xs rounded-xl border border-white/20 transition-colors"
                >
                  Ask Bursar on WhatsApp
                </a>
              </div>
            </div>

            <div className="lg:col-span-5 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-slate-200 space-y-4">
              <h4 className="text-lg font-bold text-white flex items-center gap-2">
                <Sparkles className="w-5 h-5 text-amber-400" />
                Payment Methods Available
              </h4>
              <ul className="space-y-3 text-xs">
                <li className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                  <strong className="text-amber-300 font-bold block text-sm">1. Standard Termly Fee</strong>
                  <span>Traditional full termly tuition payment per academic term.</span>
                </li>
                <li className="p-3 bg-slate-900/60 rounded-xl border border-slate-700/60">
                  <strong className="text-blue-300 font-bold block text-sm">2. Flexible Installment Plan</strong>
                  <span>Customized installment arrangements with the school bursary based on family budget.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>

        {/* Category Tabs */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow-md'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Program Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
          {filteredPrograms.map((prog) => (
            <div
              key={prog.id}
              className="bg-white rounded-3xl p-6 sm:p-8 border border-slate-200 shadow-sm hover:shadow-md transition-shadow space-y-6 flex flex-col justify-between"
            >
              <div className="space-y-4">
                <div className="flex items-center justify-between">
                  <span className="text-xs font-bold uppercase tracking-wider text-blue-900 bg-blue-50 px-3 py-1 rounded-full border border-blue-200">
                    {prog.category}
                  </span>
                  <span className="text-xs font-semibold text-slate-500 bg-slate-100 px-2.5 py-1 rounded-md">
                    Age: {prog.ageRange}
                  </span>
                </div>

                <h3 className="text-xl sm:text-2xl font-bold text-slate-900">
                  {prog.level}
                </h3>
                <p className="text-xs sm:text-sm text-slate-600 leading-relaxed">
                  {prog.description}
                </p>

                {/* Key Subjects */}
                <div className="space-y-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Key Subjects Covered</span>
                  <div className="flex flex-wrap gap-1.5">
                    {prog.subjects.map((sub, i) => (
                      <span key={i} className="text-[11px] font-medium text-slate-700 bg-slate-100 px-2.5 py-1 rounded-lg">
                        {sub}
                      </span>
                    ))}
                  </div>
                </div>

                {/* Key Features */}
                <div className="space-y-2 pt-2">
                  <span className="text-xs font-bold text-slate-900 uppercase tracking-wider block">Key Benefits</span>
                  <ul className="space-y-1.5 text-xs text-slate-600">
                    {prog.keyFeatures.map((feat, i) => (
                      <li key={i} className="flex items-center gap-2">
                        <CheckCircle2 className="w-4 h-4 text-emerald-600 shrink-0" />
                        <span>{feat}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <span className="text-xs text-slate-500 font-medium">Flexible & Termly Fees</span>
                <button
                  onClick={() => onOpenAdmissionModal(prog.level)}
                  className="px-4 py-2 bg-blue-900 hover:bg-blue-800 text-white font-bold text-xs rounded-xl shadow transition-colors"
                >
                  Apply for {prog.level}
                </button>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
