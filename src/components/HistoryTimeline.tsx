import React from 'react';
import { HeartHandshake, Award, GraduationCap, Building2, Calendar, Sparkles, CheckCircle2, UserCheck } from 'lucide-react';
import { SCHOOL_INFO } from '../data/schoolData';

export const HistoryTimeline: React.FC = () => {
  return (
    <section id="history" className="py-20 bg-slate-50 text-slate-900 relative">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4 mb-16">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white shadow-sm">
            <Sparkles className="w-4 h-4" />
            <span>Our Journey & Growth</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-blue-950 tracking-tight">
            The History of Tofem Private School
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            From a single rented room in 2013 to two government-approved campuses today — driven by dedication, sacrifice, and the belief that every child deserves quality education.
          </p>
        </div>

        {/* Story Banner */}
        <div className="mb-16 bg-blue-950 text-white rounded-3xl p-6 sm:p-10 shadow-xl border border-blue-900 relative overflow-hidden">
          <div className="relative z-10 grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
            <div className="lg:col-span-8 space-y-4">
              <span className="text-red-400 font-bold text-xs uppercase tracking-widest flex items-center gap-1.5">
                <Calendar className="w-4 h-4" />
                Founded June 3rd, 2013
              </span>
              <h3 className="text-2xl sm:text-3xl font-extrabold text-white">
                Founded on a Vision to Serve Every Child
              </h3>
              <p className="text-blue-100 text-sm sm:text-base leading-relaxed">
                {SCHOOL_INFO.foundingStory}
              </p>
              <div className="pt-2 flex flex-wrap gap-4 text-xs font-semibold text-white">
                <div className="flex items-center gap-1.5 bg-blue-900/80 px-3 py-1.5 rounded-lg border border-blue-700/60">
                  <UserCheck className="w-4 h-4 text-red-400" />
                  <span>1 Female Teacher & Proprietress</span>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-900/80 px-3 py-1.5 rounded-lg border border-blue-700/60">
                  <HeartHandshake className="w-4 h-4 text-red-400" />
                  <span>Flexible Fee Payment Plan</span>
                </div>
                <div className="flex items-center gap-1.5 bg-blue-900/80 px-3 py-1.5 rounded-lg border border-blue-700/60">
                  <Award className="w-4 h-4 text-red-400" />
                  <span>Ogun State Government Approved</span>
                </div>
              </div>
            </div>

            <div className="lg:col-span-4 bg-white/10 backdrop-blur-md p-6 rounded-2xl border border-white/20 text-center space-y-3">
              <div className="w-16 h-16 rounded-full bg-red-600 text-white mx-auto flex items-center justify-center font-black text-2xl shadow-lg border-2 border-white">
                TPS
              </div>
              <h4 className="text-white font-bold text-lg">Modelling for Greatness</h4>
              <p className="text-xs text-blue-200">
                "We lead by example — in character, in learning, and in service."
              </p>
            </div>
          </div>
        </div>

        {/* Timeline Grid */}
        <div className="relative">
          {/* Vertical Center Line for Desktop */}
          <div className="hidden lg:block absolute left-1/2 transform -translate-x-1/2 top-0 bottom-0 w-1 bg-blue-200 rounded-full" />

          <div className="space-y-12 relative">
            
            {/* 2013 Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 lg:text-right space-y-3 order-2 lg:order-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-700 border border-red-200">
                  June 3rd, 2013
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                  1. Founded on a Vision to Serve
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Began in a rented space as a Creche and Care Centre for less privileged children who were old enough to begin formal education. Introduced flexible fee payment plans so finances would not be a barrier to education. Operated with just one female teacher and the Proprietress.
                </p>
                <div className="inline-flex items-center gap-1 text-xs font-bold text-blue-900 bg-blue-50 px-3 py-1 rounded-md border border-blue-200">
                  Pioneered Flexible Fee Access
                </div>
              </div>

              <div className="lg:col-span-2 flex justify-center order-1 lg:order-2">
                <div className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg border-4 border-white font-bold text-lg z-10">
                  <HeartHandshake className="w-7 h-7 text-red-400" />
                </div>
              </div>

              <div className="lg:col-span-5 order-3">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-2">
                  <h4 className="font-bold text-blue-950 text-sm">Founding Principles</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                      <span>Financial inclusivity for less privileged children</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                      <span>Sacrifice and dedicated early care</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-red-600 shrink-0" />
                      <span>Belief that every child deserves quality education</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* 2017 Card */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 order-3 lg:order-1">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-2">
                  <h4 className="font-bold text-blue-950 text-sm">State Recognition Milestone</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>Approved by Ogun State Ministry of Education</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>Transitioned to fully structured basic school</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-700 shrink-0" />
                      <span>Official name adopted: Tofem Private School</span>
                    </li>
                  </ul>
                </div>
              </div>

              <div className="lg:col-span-2 flex justify-center order-1 lg:order-2">
                <div className="w-14 h-14 rounded-full bg-blue-950 text-white flex items-center justify-center shadow-lg border-4 border-white font-bold text-lg z-10">
                  <Award className="w-7 h-7 text-red-400" />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3 order-2 lg:order-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200">
                  Within 4 Years (2017)
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                  2. Growth and Government Recognition
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  Within 4 years of steady growth and academic excellence, the Ogun State Government officially approved the school as Tofem Private School. This replaced the initial name "Tofem Group of Schools" and marked our evolution into a fully structured basic school.
                </p>
              </div>
            </div>

            {/* Secondary Expansion */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 lg:text-right space-y-3 order-2 lg:order-1">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-red-100 text-red-800 border border-red-200">
                  2000/2001 Academic Session
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                  3. Expansion to Secondary Education
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  To ensure smooth academic continuity for our pupils, Tofem College commenced in the 2000/2001 academic session with a pioneer set of JSS1 students. Today, Tofem has grown into a complete institution with both Primary and Secondary schools fully approved by the Ogun State Government.
                </p>
              </div>

              <div className="lg:col-span-2 flex justify-center order-1 lg:order-2">
                <div className="w-14 h-14 rounded-full bg-blue-900 text-white flex items-center justify-center shadow-lg border-4 border-white font-bold text-lg z-10">
                  <GraduationCap className="w-7 h-7 text-red-400" />
                </div>
              </div>

              <div className="lg:col-span-5 order-3">
                <div className="bg-white p-6 rounded-2xl shadow-md border border-slate-200 space-y-2">
                  <h4 className="font-bold text-blue-950 text-sm">Tofem College Highlights</h4>
                  <ul className="text-xs text-slate-600 space-y-1.5 font-medium">
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0" />
                      <span>Junior & Senior Secondary (JSS 1-3 & SSS 1-3)</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0" />
                      <span>Sciences, Arts & Commercial academic streams</span>
                    </li>
                    <li className="flex items-center gap-2">
                      <CheckCircle2 className="w-4 h-4 text-blue-800 shrink-0" />
                      <span>WAEC & NECO Examination Readiness</span>
                    </li>
                  </ul>
                </div>
              </div>
            </div>

            {/* Present Day Dual Campuses */}
            <div className="grid grid-cols-1 lg:grid-cols-12 gap-8 items-center">
              <div className="lg:col-span-5 order-3 lg:order-1">
                <div className="bg-red-50 p-6 rounded-2xl border border-red-200 space-y-2">
                  <h4 className="font-bold text-red-900 text-sm">Two Dedicated Campuses at Agbado Crossing</h4>
                  <p className="text-xs text-slate-700">
                    Located a stone's throw from each other for age-appropriate care, discipline, and focused learning environment.
                  </p>
                </div>
              </div>

              <div className="lg:col-span-2 flex justify-center order-1 lg:order-2">
                <div className="w-14 h-14 rounded-full bg-red-600 text-white flex items-center justify-center shadow-lg border-4 border-white font-bold text-lg z-10">
                  <Building2 className="w-7 h-7 text-white" />
                </div>
              </div>

              <div className="lg:col-span-5 space-y-3 order-2 lg:order-3">
                <span className="inline-block px-3 py-1 rounded-full text-xs font-bold bg-blue-100 text-blue-900 border border-blue-200">
                  Our Campuses Today
                </span>
                <h3 className="text-xl sm:text-2xl font-bold text-blue-950">
                  4. Complete Institution Raising Future Leaders
                </h3>
                <p className="text-sm text-slate-600 leading-relaxed">
                  From a single rented room in 2013 to two approved campuses today, Tofem Private School remains committed to excellence, access, and raising children for greatness — one child at a time.
                </p>
              </div>
            </div>

          </div>
        </div>

      </div>
    </section>
  );
};
