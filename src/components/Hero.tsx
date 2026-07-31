import React from 'react';
import { ShieldCheck, MessageCircle, ArrowRight, HeartHandshake, Sparkles, CheckCircle2 } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

interface HeroProps {
  onOpenAdmissionModal: () => void;
  onExploreCampuses: () => void;
  onViewHistory: () => void;
}

export const Hero: React.FC<HeroProps> = ({
  onOpenAdmissionModal,
  onExploreCampuses,
  onViewHistory
}) => {
  return (
    <section id="home" className="relative bg-blue-950 text-white overflow-hidden pt-8 pb-16 lg:py-20 border-b border-blue-900">
      {/* Background Image with Blue Overlay */}
      <div className="absolute inset-0 z-0 opacity-20">
        <img 
          src="/images/tofem_hero_banner_1785475269203.jpg" 
          alt="Tofem Pupils in Classroom" 
          className="w-full h-full object-cover object-center scale-105 filter blur-[1px]"
          referrerPolicy="no-referrer"
        />
        <div className="absolute inset-0 bg-gradient-to-t from-blue-950 via-blue-950/90 to-blue-900/90" />
      </div>

      <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-center">
          
          {/* Main Content */}
          <div className="lg:col-span-7 space-y-6 text-center lg:text-left">
            
            {/* Badges & Trust Signals */}
            <div className="inline-flex flex-wrap items-center justify-center lg:justify-start gap-2">
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-bold bg-red-600 text-white shadow-sm">
                <ShieldCheck className="w-3.5 h-3.5" />
                Ogun State Government Approved
              </span>
              <span className="inline-flex items-center gap-1.5 px-3 py-1 rounded-full text-xs font-semibold bg-blue-900/80 text-blue-200 border border-blue-700/60">
                <Sparkles className="w-3.5 h-3.5 text-blue-300" />
                Est. June 3rd, 2013
              </span>
            </div>

            {/* Main Headline */}
            <div className="space-y-3">
              <h2 className="text-red-500 font-extrabold text-xs sm:text-sm tracking-widest uppercase">
                {SCHOOL_INFO.motto}
              </h2>
              <h1 className="text-3xl sm:text-5xl lg:text-6xl font-black tracking-tight text-white leading-[1.15]">
                Tofem Private School <br className="hidden sm:inline" />
                <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-200 via-white to-red-200">
                  & Tofem College
                </span>
              </h1>
              <p className="text-base sm:text-lg text-blue-100 max-w-2xl font-normal leading-relaxed mx-auto lg:mx-0">
                <strong className="font-semibold text-white">Building Future Leaders</strong> — Delivering holistic primary and secondary education in Agbado crossing, Ogun State, with age-appropriate discipline, moral integrity, and academic excellence.
              </p>
            </div>

            {/* Founding Pill / Daily Payment Plan Feature Callout */}
            <div className="bg-blue-900/60 backdrop-blur-md rounded-2xl p-4 border border-blue-800 text-left max-w-2xl mx-auto lg:mx-0 shadow-lg">
              <div className="flex items-start gap-3">
                <div className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 flex items-center justify-center shrink-0 mt-0.5 border border-red-500/30">
                  <HeartHandshake className="w-5 h-5" />
                </div>
                <div className="space-y-1">
                  <h4 className="text-sm font-bold text-white flex items-center gap-2">
                    Our Unique Heritage: Daily Payment Lesson Plan
                  </h4>
                  <p className="text-xs sm:text-sm text-blue-100">
                    Founded in 2013 with a heart to serve every child, Tofem introduced a flexible daily payment plan so financial constraints never stop any child from receiving quality basic education.
                  </p>
                </div>
              </div>
            </div>

            {/* CTAs */}
            <div className="flex flex-col sm:flex-row items-center justify-center lg:justify-start gap-3 pt-2">
              <button
                onClick={onOpenAdmissionModal}
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-extrabold text-white bg-red-600 hover:bg-red-500 rounded-xl shadow-lg hover:shadow-red-600/30 transition-all flex items-center justify-center gap-2 border border-red-500"
              >
                <span>Apply for Admission</span>
                <ArrowRight className="w-4 h-4" />
              </button>

              <a
                href={SCHOOL_INFO.whatsappUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="w-full sm:w-auto px-6 py-3.5 text-sm font-bold text-white bg-emerald-600 hover:bg-emerald-500 rounded-xl shadow-lg transition-all flex items-center justify-center gap-2"
              >
                <MessageCircle className="w-4 h-4" />
                <span>Chat on WhatsApp</span>
              </a>

              <button
                onClick={onViewHistory}
                className="w-full sm:w-auto px-5 py-3.5 text-sm font-semibold text-blue-100 hover:text-white bg-blue-900/80 hover:bg-blue-800 rounded-xl border border-blue-700 transition-colors"
              >
                Read School History
              </button>
            </div>

            {/* Key Quick Bullet Badges */}
            <div className="pt-4 grid grid-cols-2 sm:grid-cols-3 gap-3 text-xs text-blue-100 font-medium">
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Primary School (32 Bodunrin St)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Secondary College (22 Olaoluwa St)</span>
              </div>
              <div className="flex items-center gap-2">
                <CheckCircle2 className="w-4 h-4 text-red-500 shrink-0" />
                <span>Ogun State Approved</span>
              </div>
            </div>

          </div>

          {/* Graphic / Visual Card Showcase */}
          <div className="lg:col-span-5 space-y-4">
            <div className="relative rounded-3xl overflow-hidden bg-blue-900 border border-blue-800 p-2 shadow-2xl">
              <img 
                src="/images/tofem_hero_banner_1785475269203.jpg" 
                alt="Tofem Classroom Learning" 
                className="w-full h-64 sm:h-80 object-cover rounded-2xl"
                referrerPolicy="no-referrer"
              />
              <div className="absolute bottom-4 left-4 right-4 bg-blue-950/90 backdrop-blur-md p-4 rounded-xl border border-blue-800">
                <div className="flex items-center justify-between">
                  <div>
                    <span className="text-xs font-bold text-red-400 uppercase tracking-wider">Dual Campuses</span>
                    <h3 className="text-base font-bold text-white">Primary & Secondary Schools</h3>
                    <p className="text-xs text-blue-200">Agbado crossing, Ogun State</p>
                  </div>
                  <button 
                    onClick={onExploreCampuses}
                    className="px-3.5 py-1.5 text-xs font-bold text-blue-950 bg-white hover:bg-blue-50 rounded-lg shrink-0 transition-colors shadow-sm"
                  >
                    View Campuses
                  </button>
                </div>
              </div>
            </div>

            {/* Quick Stat Cards */}
            <div className="grid grid-cols-3 gap-3">
              <div className="bg-blue-900/70 p-3.5 rounded-2xl border border-blue-800 text-center">
                <div className="text-2xl font-black text-red-500">2013</div>
                <div className="text-[11px] font-semibold text-blue-100">Founded Year</div>
              </div>
              <div className="bg-blue-900/70 p-3.5 rounded-2xl border border-blue-800 text-center">
                <div className="text-2xl font-black text-white">2</div>
                <div className="text-[11px] font-semibold text-blue-100">Separate Campuses</div>
              </div>
              <div className="bg-blue-900/70 p-3.5 rounded-2xl border border-blue-800 text-center">
                <div className="text-2xl font-black text-emerald-400">100%</div>
                <div className="text-[11px] font-semibold text-blue-100">Govt Approved</div>
              </div>
            </div>

          </div>

        </div>
      </div>
    </section>
  );
};
