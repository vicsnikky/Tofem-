import React, { useState } from 'react';
import { Quote, Sparkles, Award, HeartHandshake, Compass, CheckCircle2, Heart, GraduationCap, ShieldCheck } from 'lucide-react';

export const FoundersSection: React.FC = () => {
  const [activeTab, setActiveTab] = useState<'both' | 'director' | 'proprietress'>('both');

  return (
    <section id="leadership" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 -left-20 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-96 h-96 bg-rose-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-10">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/90 text-white shadow-md">
            <Sparkles className="w-4 h-4" />
            <span>Words of Encouragement & Motivation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Messages from Our Co-Founders
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Co-founded with visionary leadership and motherly devotion by <strong className="text-white">Pastor Olabiran Joshua</strong> and <strong className="text-white">Pastor Mrs. Olabiran Oluwatoyin</strong>, dedicated to guiding every student toward academic brilliance and moral excellence.
          </p>

          {/* Quick View Switcher Tabs */}
          <div className="pt-4 flex justify-center">
            <div className="inline-flex p-1.5 rounded-2xl bg-slate-800 border border-slate-700/80 shadow-lg">
              <button
                onClick={() => setActiveTab('both')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'both'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                Both Co-Founders
              </button>
              <button
                onClick={() => setActiveTab('director')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'director'
                    ? 'bg-red-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                1. Managing Director
              </button>
              <button
                onClick={() => setActiveTab('proprietress')}
                className={`px-4 py-2 rounded-xl text-xs sm:text-sm font-bold transition-all ${
                  activeTab === 'proprietress'
                    ? 'bg-rose-600 text-white shadow-md'
                    : 'text-slate-400 hover:text-white'
                }`}
              >
                2. Proprietress
              </button>
            </div>
          </div>
        </div>

        {/* Side-by-Side Co-Founders Cards Grid */}
        <div className={`grid grid-cols-1 ${activeTab === 'both' ? 'lg:grid-cols-2' : 'max-w-4xl mx-auto'} gap-8 lg:gap-10`}>
          
          {/* 1. MANAGING DIRECTOR CARD (FIRST) */}
          {(activeTab === 'both' || activeTab === 'director') && (
            <div id="director" className="bg-slate-800/90 rounded-3xl border border-slate-700/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-sm group hover:border-red-500/50 transition-all">
              
              <div className="space-y-6">
                {/* Co-Founder Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-red-600/20 text-red-400 border border-red-500/30 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                    <Award className="w-4 h-4 text-red-400" /> Co-Founder & Managing Director
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Leader 1</span>
                </div>

                {/* Profile Photo & Name Banner */}
                <div className="flex flex-col sm:flex-row items-center gap-5 bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80">
                  <div className="relative shrink-0">
                    <img
                      src="https://i.ibb.co/27dL3ssR/Whats-App-Image-2026-08-01-at-3-02-55-PM.jpg"
                      alt="Pastor Olabiran Joshua - Co-Founder & Managing Director"
                      className="w-28 h-32 sm:w-32 sm:h-36 object-cover object-top rounded-xl border-2 border-red-500/60 shadow-md group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Pastor Olabiran Joshua
                    </h3>
                    <p className="text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Co-Founder & Managing Director
                    </p>
                    <p className="text-slate-400 text-xs">
                      Tofem Private School & Tofem College
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 border border-slate-700">
                        Visionary Leader
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 border border-slate-700">
                        Academic Excellence
                      </span>
                    </div>
                  </div>
                </div>

                {/* Speech Header */}
                <div className="flex items-start gap-3 bg-red-950/30 p-4 rounded-2xl border border-red-900/40">
                  <Quote className="w-7 h-7 text-red-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      "Believing in the Potential of Every Child"
                    </h4>
                    <p className="text-xs text-amber-300 font-medium">
                      Words of Encouragement to Our Tofem Family
                    </p>
                  </div>
                </div>

                {/* Speech Content */}
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-white">Dear Pupils, Students, Parents, and Friends of Tofem,</strong>
                  </p>
                  <p>
                    Education is the most powerful tool for transforming lives and shaping a brighter tomorrow. Every child entering our gates arrives with a spark of genius, waiting to be nurtured into greatness.
                  </p>
                  <p>
                    <strong className="text-amber-300">To Our Pupils & Students:</strong> Never let anyone measure your capabilities by where you start. Success is built day by day through discipline, curiosity, and courage. Hard work will always unlock doors that talent alone cannot open.
                  </p>
                  <p>
                    <strong className="text-red-300">To Our Parents:</strong> Partnering with you to raise disciplined, morally upright leaders is our highest honor.
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-blue-400 font-bold">
                      <Compass className="w-4 h-4" /> Shared Purpose
                    </div>
                    <p className="text-slate-400">Building brilliance & moral character.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-emerald-400 font-bold">
                      <HeartHandshake className="w-4 h-4" /> Community
                    </div>
                    <p className="text-slate-400">Ensuring no child is left behind.</p>
                  </div>
                </div>
              </div>

              {/* Signature Footer */}
              <div className="pt-5 mt-6 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">Warm regards,</p>
                  <p className="text-sm font-bold text-white font-serif">Pastor Olabiran Joshua</p>
                  <p className="text-[11px] text-red-400 font-semibold">Co-Founder & Managing Director</p>
                </div>
                <div className="px-3 py-1 rounded-lg bg-red-600/10 border border-red-500/30 text-red-300 text-xs font-bold">
                  Co-Founder
                </div>
              </div>

            </div>
          )}

          {/* 2. PROPRIETRESS CARD (SECOND) */}
          {(activeTab === 'both' || activeTab === 'proprietress') && (
            <div id="proprietress" className="bg-slate-800/90 rounded-3xl border border-slate-700/90 p-6 sm:p-8 flex flex-col justify-between shadow-2xl relative overflow-hidden backdrop-blur-sm group hover:border-rose-500/50 transition-all">
              
              <div className="space-y-6">
                {/* Co-Founder Badge */}
                <div className="flex items-center justify-between">
                  <span className="px-3.5 py-1 rounded-full bg-rose-600/20 text-rose-400 border border-rose-500/30 text-xs font-black uppercase tracking-wider flex items-center gap-1.5">
                    <Heart className="w-4 h-4 text-rose-400" /> Co-Founder & Proprietress
                  </span>
                  <span className="text-xs text-slate-400 font-mono">Leader 2</span>
                </div>

                {/* Profile Photo & Name Banner */}
                <div className="flex flex-col sm:flex-row items-center gap-5 bg-slate-900/80 p-4 rounded-2xl border border-slate-700/80">
                  <div className="relative shrink-0">
                    <img
                      src="https://i.ibb.co/cpccBsy/Whats-App-Image-2026-08-01-at-4-32-58-PM.jpg"
                      alt="Pastor Mrs. Olabiran Oluwatoyin - Co-Founder & Proprietress"
                      className="w-28 h-32 sm:w-32 sm:h-36 object-cover object-top rounded-xl border-2 border-rose-500/60 shadow-md group-hover:scale-105 transition-transform duration-300"
                      referrerPolicy="no-referrer"
                    />
                  </div>
                  <div className="text-center sm:text-left space-y-1">
                    <h3 className="text-xl sm:text-2xl font-bold text-white">
                      Pastor Mrs. Olabiran Oluwatoyin
                    </h3>
                    <p className="text-rose-400 text-xs sm:text-sm font-semibold uppercase tracking-wider">
                      Co-Founder & Proprietress
                    </p>
                    <p className="text-slate-400 text-xs">
                      Tofem Private School & Tofem College
                    </p>
                    <div className="pt-2 flex flex-wrap justify-center sm:justify-start gap-1.5">
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 border border-slate-700">
                        Motherly Care
                      </span>
                      <span className="px-2 py-0.5 rounded bg-slate-800 text-[11px] text-slate-300 border border-slate-700">
                        Character Building
                      </span>
                    </div>
                  </div>
                </div>

                {/* Speech Header */}
                <div className="flex items-start gap-3 bg-rose-950/30 p-4 rounded-2xl border border-rose-900/40">
                  <Quote className="w-7 h-7 text-rose-400 shrink-0 mt-0.5" />
                  <div>
                    <h4 className="text-base font-bold text-white">
                      "Nurturing Character, Igniting Minds"
                    </h4>
                    <p className="text-xs text-amber-300 font-medium">
                      Motherly Encouragement & Inspiration
                    </p>
                  </div>
                </div>

                {/* Speech Content */}
                <div className="space-y-3 text-slate-300 text-sm sm:text-base leading-relaxed">
                  <p>
                    <strong className="text-white">My Beloved Students, Parents, and Tofem Family,</strong>
                  </p>
                  <p>
                    Building a school is about building human lives, instilling values, and cradling the dreams of the next generation. From our humble beginnings to our dual campuses, God's grace and motherly passion have been our anchor.
                  </p>
                  <p>
                    <strong className="text-amber-300">To My Dearest Children:</strong> You are unique and filled with unlimited promise. Strive for excellence in your studies, maintain moral uprightness, and let your light shine brightly wherever you go.
                  </p>
                  <p>
                    <strong className="text-rose-300">To Our Parents:</strong> Thank you for trusting us with your most cherished treasures in a safe, loving environment.
                  </p>
                </div>

                {/* Key Pillars */}
                <div className="grid grid-cols-2 gap-3 pt-2">
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-rose-400 font-bold">
                      <GraduationCap className="w-4 h-4" /> Holistic Growth
                    </div>
                    <p className="text-slate-400">Balancing academics & moral discipline.</p>
                  </div>
                  <div className="p-3 rounded-xl bg-slate-900/80 border border-slate-700 text-xs space-y-1">
                    <div className="flex items-center gap-1.5 text-amber-400 font-bold">
                      <ShieldCheck className="w-4 h-4" /> Safe Haven
                    </div>
                    <p className="text-slate-400">A loving & encouraging environment.</p>
                  </div>
                </div>
              </div>

              {/* Signature Footer */}
              <div className="pt-5 mt-6 border-t border-slate-700/80 flex items-center justify-between">
                <div>
                  <p className="text-xs text-slate-400">With love & blessings,</p>
                  <p className="text-sm font-bold text-white font-serif">Pastor Mrs. Olabiran Oluwatoyin</p>
                  <p className="text-[11px] text-rose-400 font-semibold">Co-Founder & Proprietress</p>
                </div>
                <div className="px-3 py-1 rounded-lg bg-rose-600/10 border border-rose-500/30 text-rose-300 text-xs font-bold">
                  Co-Founder
                </div>
              </div>

            </div>
          )}

        </div>

      </div>
    </section>
  );
};
