import React, { useState } from 'react';
import { Bell, Calendar, Tag, ArrowRight, MessageCircle } from 'lucide-react';
import { ANNOUNCEMENTS, SCHOOL_INFO } from '../data/schoolData';

export const NewsAndEvents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Notice', 'Sports'];

  const filteredAnnouncements = selectedCategory === 'All'
    ? ANNOUNCEMENTS
    : ANNOUNCEMENTS.filter(a => a.category === selectedCategory);

  return (
    <section id="events" className="py-20 bg-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Bell className="w-4 h-4 text-amber-700" />
            <span>Updates & Calendar</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            School News & Announcements
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Stay informed on academic schedules, entrance examination dates, and co-curricular events at Tofem Private School & Tofem College.
          </p>
        </div>

        {/* Filters */}
        <div className="flex flex-wrap items-center justify-center gap-2">
          {categories.map((cat) => (
            <button
              key={cat}
              onClick={() => setSelectedCategory(cat)}
              className={`px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                selectedCategory === cat
                  ? 'bg-blue-900 text-white shadow'
                  : 'bg-white text-slate-600 hover:bg-slate-200 border border-slate-200'
              }`}
            >
              {cat}
            </button>
          ))}
        </div>

        {/* Cards Grid */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          {filteredAnnouncements.map((item) => (
            <div
              key={item.id}
              className="bg-white rounded-3xl p-6 border border-slate-200 shadow-sm hover:shadow-lg transition-all space-y-4 flex flex-col justify-between"
            >
              <div className="space-y-3">
                <div className="flex items-center justify-between">
                  <span className={`text-[10px] font-bold uppercase px-2.5 py-1 rounded-full ${item.badgeColor || 'bg-blue-100 text-blue-900'}`}>
                    {item.category}
                  </span>
                  <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                    <Calendar className="w-3.5 h-3.5" />
                    {item.date}
                  </span>
                </div>

                <h3 className="text-lg font-bold text-slate-900 leading-snug">
                  {item.title}
                </h3>
                
                <p className="text-xs text-slate-600 leading-relaxed">
                  {item.content}
                </p>
              </div>

              <div className="pt-4 border-t border-slate-100 flex items-center justify-between">
                <a
                  href={`https://wa.me/${SCHOOL_INFO.whatsappNumber}?text=Hello%20Tofem%20School%2C%20I%20have%20a%20question%20regarding%20${encodeURIComponent(item.title)}.`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-xs font-bold text-emerald-700 hover:underline flex items-center gap-1"
                >
                  <MessageCircle className="w-3.5 h-3.5" />
                  <span>Ask on WhatsApp</span>
                </a>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
};
