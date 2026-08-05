import React, { useState } from 'react';
import { Bell, Calendar, ArrowRight, MessageCircle, Sparkles, Image as ImageIcon } from 'lucide-react';
import { ANNOUNCEMENTS, SCHOOL_INFO } from '../data/schoolData';

export const NewsAndEvents: React.FC = () => {
  const [selectedCategory, setSelectedCategory] = useState<string>('All');

  const categories = ['All', 'Academic', 'Notice', 'Sports'];

  const filteredAnnouncements = selectedCategory === 'All'
    ? ANNOUNCEMENTS
    : ANNOUNCEMENTS.filter(a => a.category === selectedCategory);

  const getThumbnail = (id: string) => {
    if (id === 'ann-grad-2026') return 'https://i.ibb.co/27d7jkrj/Whats-App-Image-2026-08-05-at-7-17-04-PM-1.jpg';
    if (id === 'ann-culture') return 'https://i.ibb.co/8n4j00XF/Whats-App-Image-2026-08-05-at-7-17-08-PM.jpg';
    return null;
  };

  return (
    <section id="events" className="py-20 bg-slate-100 text-slate-900">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12">
        
        {/* Section Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-amber-100 text-amber-900 border border-amber-300">
            <Bell className="w-4 h-4 text-amber-700" />
            <span>Updates, Events & Highlights</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-slate-900 tracking-tight">
            School News & Highlights
          </h2>
          <p className="text-slate-600 text-base sm:text-lg leading-relaxed font-normal">
            Stay informed on our recent graduation ceremonies, cultural showcases, admissions schedules, and academic milestones at Tofem Private School & Tofem College.
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
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
          {filteredAnnouncements.map((item) => {
            const thumb = getThumbnail(item.id);
            return (
              <div
                key={item.id}
                className="bg-white rounded-3xl overflow-hidden border border-slate-200 shadow-sm hover:shadow-lg transition-all flex flex-col justify-between group"
              >
                {thumb && (
                  <div className="relative aspect-[16/10] w-full overflow-hidden bg-slate-900">
                    <img
                      src={thumb}
                      alt={item.title}
                      className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                      referrerPolicy="no-referrer"
                    />
                    <div className="absolute inset-0 bg-gradient-to-t from-slate-900/60 to-transparent" />
                    <a
                      href="#gallery"
                      className="absolute bottom-2 right-2 text-[10px] font-bold bg-black/70 hover:bg-red-600 text-white px-2 py-0.5 rounded-full flex items-center gap-1 transition-colors"
                    >
                      <ImageIcon className="w-3 h-3" />
                      <span>View Gallery</span>
                    </a>
                  </div>
                )}

                <div className="p-6 space-y-3 flex-1 flex flex-col justify-between">
                  <div className="space-y-2">
                    <div className="flex items-center justify-between">
                      <span className={`text-[10px] font-bold uppercase px-2.5 py-0.5 rounded-full ${item.badgeColor || 'bg-blue-100 text-blue-900'}`}>
                        {item.category}
                      </span>
                      <span className="text-xs text-slate-400 flex items-center gap-1 font-medium">
                        <Calendar className="w-3.5 h-3.5" />
                        {item.date}
                      </span>
                    </div>

                    <h3 className="text-base font-bold text-slate-900 leading-snug group-hover:text-blue-900 transition-colors">
                      {item.title}
                    </h3>
                    
                    <p className="text-xs text-slate-600 leading-relaxed">
                      {item.content}
                    </p>
                  </div>

                  <div className="pt-4 border-t border-slate-100 flex items-center justify-between mt-auto">
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
              </div>
            );
          })}
        </div>

        {/* Gallery Quick Link Banner */}
        <div className="bg-gradient-to-r from-blue-950 via-slate-900 to-blue-950 rounded-3xl p-6 sm:p-8 text-white flex flex-col sm:flex-row items-center justify-between gap-6 border border-blue-900 shadow-md">
          <div className="space-y-1 text-center sm:text-left">
            <h3 className="text-lg sm:text-xl font-black text-white flex items-center justify-center sm:justify-start gap-2">
              <Sparkles className="w-5 h-5 text-amber-400" />
              <span>Explore Our Full Photo Gallery</span>
            </h3>
            <p className="text-xs sm:text-sm text-slate-300">
              Browse 20+ photos capturing Graduation 2026, Cultural Day festivals, 10th Anniversary banquet, and campus life.
            </p>
          </div>
          <a
            href="#gallery"
            className="px-5 py-2.5 bg-red-600 hover:bg-red-500 text-white font-bold text-xs sm:text-sm rounded-xl transition-all shadow-md shrink-0 flex items-center gap-1.5"
          >
            <span>Open Gallery</span>
            <ArrowRight className="w-4 h-4" />
          </a>
        </div>

      </div>
    </section>
  );
};
