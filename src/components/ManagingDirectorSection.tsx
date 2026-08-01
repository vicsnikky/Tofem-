import React from 'react';
import { Quote, Sparkles, Award, HeartHandshake, Compass, CheckCircle2 } from 'lucide-react';

export const ManagingDirectorSection: React.FC = () => {
  return (
    <section id="director" className="py-20 bg-slate-900 text-white relative overflow-hidden border-t border-slate-800">
      {/* Background Decorative Gradients */}
      <div className="absolute top-1/4 -left-20 w-80 h-80 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-1/4 -right-20 w-80 h-80 bg-blue-600/15 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        
        {/* Section Header Badge */}
        <div className="text-center max-w-3xl mx-auto space-y-3 mb-12 sm:mb-16">
          <div className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600/90 text-white shadow-md">
            <Sparkles className="w-4 h-4" />
            <span>Word of Encouragement & Motivation</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black tracking-tight text-white">
            Message from the Managing Director
          </h2>
          <p className="text-slate-300 text-base sm:text-lg leading-relaxed">
            Guiding Tofem Private School & Tofem College with vision, integrity, and an unwavering commitment to every child's success.
          </p>
        </div>

        {/* Main Content Card Layout */}
        <div className="bg-slate-800/80 rounded-3xl border border-slate-700/80 p-6 sm:p-10 lg:p-12 shadow-2xl backdrop-blur-sm">
          <div className="grid grid-cols-1 lg:grid-cols-12 gap-10 lg:gap-12 items-center">
            
            {/* Director Photo & Badge Column */}
            <div className="lg:col-span-5 flex flex-col items-center">
              <div className="relative w-full max-w-sm sm:max-w-md lg:max-w-none">
                {/* Outer Glow Ring */}
                <div className="absolute -inset-1.5 bg-gradient-to-r from-red-600 via-amber-500 to-blue-600 rounded-3xl blur-md opacity-60 group-hover:opacity-100 transition duration-1000"></div>
                
                <div className="relative bg-slate-900 rounded-3xl overflow-hidden border-2 border-slate-700 shadow-2xl">
                  <img
                    src="https://i.ibb.co/27dL3ssR/Whats-App-Image-2026-08-01-at-3-02-55-PM.jpg"
                    alt="Mr. Olabiran Joshua - Managing Director"
                    className="w-full h-80 sm:h-96 object-cover object-top hover:scale-105 transition-transform duration-500"
                    referrerPolicy="no-referrer"
                  />
                  
                  {/* Floating Identity Label */}
                  <div className="absolute bottom-0 inset-x-0 bg-gradient-to-t from-slate-950 via-slate-950/80 to-transparent p-5 text-center">
                    <h3 className="text-xl sm:text-2xl font-bold text-white tracking-wide">
                      Mr. Olabiran Joshua
                    </h3>
                    <p className="text-red-400 text-xs sm:text-sm font-semibold uppercase tracking-wider mt-1">
                      Managing Director
                    </p>
                    <p className="text-slate-300 text-xs mt-0.5">
                      Tofem Private School & Tofem College
                    </p>
                  </div>
                </div>

                {/* Verified Leadership Pill Badge */}
                <div className="absolute -top-3 -right-3 bg-amber-500 text-slate-950 text-xs font-black uppercase tracking-wider px-3.5 py-1.5 rounded-full shadow-lg border border-amber-300 flex items-center gap-1.5">
                  <Award className="w-4 h-4 text-slate-950" />
                  <span>Executive Director</span>
                </div>
              </div>

              {/* Core Values Tagline */}
              <div className="mt-6 flex flex-wrap justify-center gap-2 max-w-sm">
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-emerald-400" /> Visionary Leadership
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-amber-400" /> Moral Excellence
                </span>
                <span className="px-3 py-1 rounded-lg bg-slate-900 border border-slate-700 text-xs font-medium text-slate-300 flex items-center gap-1">
                  <CheckCircle2 className="w-3.5 h-3.5 text-blue-400" /> Pupil Empowerment
                </span>
              </div>
            </div>

            {/* Motivational Speech Column */}
            <div className="lg:col-span-7 space-y-6">
              
              <div className="flex items-center gap-3">
                <div className="p-3 bg-red-600/20 text-red-500 rounded-2xl border border-red-500/30">
                  <Quote className="w-8 h-8" />
                </div>
                <div>
                  <h3 className="text-2xl sm:text-3xl font-extrabold text-white tracking-tight">
                    "Believing in the Potential of Every Child"
                  </h3>
                  <p className="text-amber-400 text-sm font-semibold">
                    A Words of Encouragement to Our Tofem Family
                  </p>
                </div>
              </div>

              <div className="space-y-4 text-slate-200 text-base sm:text-lg leading-relaxed font-normal">
                <p>
                  <strong className="text-white font-semibold">Dear Pupils, Students, Parents, and Friends of Tofem,</strong>
                </p>

                <p>
                  At Tofem Private School and Tofem College, we hold a profound conviction that education is the most powerful tool for transforming lives and shaping a brighter tomorrow. Every child entering our gates arrives with a spark of genius, waiting to be nurtured into greatness.
                </p>

                <p>
                  <strong className="text-amber-300">To Our Pupils & Students:</strong> Never let anyone measure your capabilities by where you start. Success is built day by day through discipline, curiosity, and courage. Fall in love with learning, ask questions boldly, treat your peers with kindness, and remember that hard work will always unlock doors that talent alone cannot open.
                </p>

                <p>
                  <strong className="text-red-400">To Our Esteemed Parents & Guardians:</strong> Partnering with you in raising confident, disciplined, and morally upright leaders is our highest honor. Our commitment remains unwavering—to offer high-quality, character-building, and accessible education across our dual campuses.
                </p>
              </div>

              {/* Motivational Highlight Boxes */}
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 pt-2">
                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 shrink-0">
                    <Compass className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Our Shared Purpose</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Building intellectual brilliance and unshakeable character in every child.
                    </p>
                  </div>
                </div>

                <div className="p-4 rounded-2xl bg-slate-900/90 border border-slate-700/80 flex items-start gap-3">
                  <div className="p-2.5 rounded-xl bg-emerald-600/20 text-emerald-400 border border-emerald-500/30 shrink-0">
                    <HeartHandshake className="w-5 h-5" />
                  </div>
                  <div>
                    <h4 className="text-sm font-bold text-white">Community & Growth</h4>
                    <p className="text-xs text-slate-300 mt-1">
                      Standing together with families to ensure no child is left behind.
                    </p>
                  </div>
                </div>
              </div>

              {/* Director Signature / Closing */}
              <div className="pt-4 border-t border-slate-700/60 flex flex-wrap items-center justify-between gap-4">
                <div>
                  <p className="text-sm text-slate-400">Warm regards & encouragement,</p>
                  <p className="text-lg font-bold text-white font-serif tracking-wide mt-0.5">
                    Olabiran Joshua
                  </p>
                  <p className="text-xs font-semibold text-red-400">
                    Managing Director, Tofem Group of Schools
                  </p>
                </div>

                <div className="px-4 py-2 rounded-xl bg-red-600/10 border border-red-500/30 text-red-300 text-xs font-bold uppercase tracking-wider">
                  Tofem Leadership
                </div>
              </div>

            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
