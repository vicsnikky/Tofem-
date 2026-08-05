import React, { useState, useEffect } from 'react';
import { Image as ImageIcon, Sparkles, X, ChevronLeft, ChevronRight, GraduationCap, PartyPopper, Palette, School, MapPin, Maximize2 } from 'lucide-react';
import { CULTURAL_PHOTOS, ANNIVERSARY_PHOTOS, GRADUATION_2026_PHOTOS } from '../data/schoolData';

interface GalleryItem {
  title: string;
  category: 'Graduation 2026' | 'Cultural Day' | '10th Anniversary' | 'Excursions' | 'Campuses & Facilities';
  image: string;
  campus: string;
  caption: string;
}

export const GallerySection: React.FC = () => {
  const [filter, setFilter] = useState<string>('All');
  const [lightboxIndex, setLightboxIndex] = useState<number | null>(null);

  const galleryItems: GalleryItem[] = [
    // 2026 Graduation Ceremony Highlights (8 photos)
    ...GRADUATION_2026_PHOTOS.map(p => ({
      title: p.title,
      category: 'Graduation 2026' as const,
      image: p.image,
      campus: p.campus,
      caption: p.caption
    })),

    // Cultural Day Pictures (3 photos)
    ...CULTURAL_PHOTOS.map(p => ({
      title: p.title,
      category: 'Cultural Day' as const,
      image: p.image,
      campus: p.campus,
      caption: p.caption
    })),

    // 10th Anniversary Pictures (3 photos)
    ...ANNIVERSARY_PHOTOS.map(p => ({
      title: p.title,
      category: '10th Anniversary' as const,
      image: p.image,
      campus: p.campus,
      caption: p.caption
    })),

    // Excursions (3 photos)
    {
      title: "Educational School Excursion Group",
      category: "Excursions",
      image: "https://i.ibb.co/kdWZCSn/Whats-App-Image-2026-07-24-at-2-44-43-PM.jpg",
      campus: "Tofem Outing",
      caption: "Learners embarking on annual educational field trips and learning excursions."
    },
    {
      title: "Student Field Trip & Learning Tour",
      category: "Excursions",
      image: "https://i.ibb.co/qMWqXWdb/Whats-App-Image-2026-07-24-at-2-44-42-PM.jpg",
      campus: "Educational Outing",
      caption: "Interactive exposure, cultural sightseeing, and practical learning outside the classroom."
    },
    {
      title: "Outdoor Cultural & Educational Excursion",
      category: "Excursions",
      image: "https://i.ibb.co/DHsvW1Pf/Whats-App-Image-2026-07-24-at-2-44-43-PM-1.jpg",
      campus: "Tofem Excursion Group",
      caption: "Primary and secondary scholars exploring historical and scientific landmarks."
    },

    // Campuses & Facilities (3 photos)
    {
      title: "Tofem Primary School Building",
      category: "Campuses & Facilities",
      image: "https://i.ibb.co/m5N6T7h8/Whats-App-Image-2026-07-24-at-2-22-42-PM.jpg",
      campus: "32, Bodunrin Street, Agbado crossing",
      caption: "The primary school campus featuring secure premises and child-friendly classrooms."
    },
    {
      title: "Tofem College Secondary Building",
      category: "Campuses & Facilities",
      image: "https://i.ibb.co/Q3yH3N0T/Whats-App-Image-2026-07-31-at-6-42-54-AM.jpg",
      campus: "22, Olaoluwa Street, Agbado crossing",
      caption: "The dedicated secondary campus hosting Junior & Senior Secondary wings and labs."
    },
    {
      title: "Tofem Primary Classrooms & Learning Environment",
      category: "Campuses & Facilities",
      image: "https://i.ibb.co/fGYpjw7t/Whats-App-Image-2026-07-31-at-7-25-58-AM.jpg",
      campus: "Tofem Primary Campus",
      caption: "Well-ventilated, structured classrooms with modern instructional aids."
    }
  ];

  const categories = [
    { id: 'All', label: 'All Photos', count: galleryItems.length },
    { id: 'Graduation 2026', label: 'Graduation 2026', count: 8, icon: GraduationCap },
    { id: 'Cultural Day', label: 'Cultural Day', count: 3, icon: Palette },
    { id: '10th Anniversary', label: '10th Anniversary', count: 3, icon: PartyPopper },
    { id: 'Excursions', label: 'Excursions', count: 3, icon: Sparkles },
    { id: 'Campuses & Facilities', label: 'Campuses', count: 3, icon: School }
  ];

  const filteredItems = filter === 'All'
    ? galleryItems
    : galleryItems.filter(i => i.category === filter);

  // Keyboard navigation for lightbox
  useEffect(() => {
    const handleKeyDown = (e: KeyboardEvent) => {
      if (lightboxIndex === null) return;
      if (e.key === 'Escape') setLightboxIndex(null);
      if (e.key === 'ArrowRight') {
        setLightboxIndex((prev) => (prev !== null && prev < filteredItems.length - 1 ? prev + 1 : 0));
      }
      if (e.key === 'ArrowLeft') {
        setLightboxIndex((prev) => (prev !== null && prev > 0 ? prev - 1 : filteredItems.length - 1));
      }
    };
    window.addEventListener('keydown', handleKeyDown);
    return () => window.removeEventListener('keydown', handleKeyDown);
  }, [lightboxIndex, filteredItems.length]);

  const openLightbox = (index: number) => {
    setLightboxIndex(index);
  };

  const closeLightbox = () => {
    setLightboxIndex(null);
  };

  const nextImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex + 1) % filteredItems.length);
    }
  };

  const prevImage = (e: React.MouseEvent) => {
    e.stopPropagation();
    if (lightboxIndex !== null) {
      setLightboxIndex((lightboxIndex - 1 + filteredItems.length) % filteredItems.length);
    }
  };

  return (
    <section id="gallery" className="py-20 bg-slate-950 text-white border-t border-blue-950 relative overflow-hidden">
      {/* Background Subtle Highlights */}
      <div className="absolute top-0 left-1/4 w-96 h-96 bg-red-600/10 rounded-full blur-3xl pointer-events-none" />
      <div className="absolute bottom-0 right-1/4 w-96 h-96 bg-blue-600/10 rounded-full blur-3xl pointer-events-none" />

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 space-y-12 relative z-10">
        
        {/* Header */}
        <div className="text-center max-w-3xl mx-auto space-y-4">
          <div className="inline-flex items-center gap-2 px-3.5 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider bg-red-600 text-white shadow-md">
            <ImageIcon className="w-4 h-4" />
            <span>Campus Life & Milestones Gallery</span>
          </div>
          <h2 className="text-3xl sm:text-4xl lg:text-5xl font-black text-white tracking-tight">
            Our Memories & Celebrations
          </h2>
          <p className="text-slate-300 text-base leading-relaxed">
            Explore authentic moments from our <strong className="text-red-400 font-bold">2026 Graduation Ceremony</strong>, vibrant <strong className="text-amber-400 font-bold">Cultural Day Celebrations</strong>, milestone <strong className="text-blue-400 font-bold">10th Anniversary</strong>, and educational excursions across our dual campuses.
          </p>
        </div>

        {/* Highlight Feature Banners */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-4">
          {/* Graduation Spotlight */}
          <button
            onClick={() => setFilter('Graduation 2026')}
            className={`text-left p-5 rounded-2xl border transition-all ${
              filter === 'Graduation 2026'
                ? 'bg-red-950/80 border-red-500 shadow-lg ring-2 ring-red-500/50'
                : 'bg-slate-900/80 border-slate-800 hover:border-red-500/50 hover:bg-slate-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-red-600/20 text-red-400 border border-red-500/30 flex items-center justify-center">
                <GraduationCap className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold text-red-400 bg-red-950 px-2.5 py-0.5 rounded-full border border-red-800">
                8 Photos
              </span>
            </div>
            <h3 className="text-base font-bold text-white mt-3">2026 Graduation Highlights</h3>
            <p className="text-xs text-slate-400 mt-1">Pupils in academic regalia, awards, and valedictory moments.</p>
          </button>

          {/* Cultural Day Spotlight */}
          <button
            onClick={() => setFilter('Cultural Day')}
            className={`text-left p-5 rounded-2xl border transition-all ${
              filter === 'Cultural Day'
                ? 'bg-amber-950/80 border-amber-500 shadow-lg ring-2 ring-amber-500/50'
                : 'bg-slate-900/80 border-slate-800 hover:border-amber-500/50 hover:bg-slate-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-amber-600/20 text-amber-400 border border-amber-500/30 flex items-center justify-center">
                <Palette className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold text-amber-400 bg-amber-950 px-2.5 py-0.5 rounded-full border border-amber-800">
                3 Photos
              </span>
            </div>
            <h3 className="text-base font-bold text-white mt-3">Cultural Day Presentation</h3>
            <p className="text-xs text-slate-400 mt-1">Vibrant traditional Nigerian attire, dance, and drama.</p>
          </button>

          {/* 10th Anniversary Spotlight */}
          <button
            onClick={() => setFilter('10th Anniversary')}
            className={`text-left p-5 rounded-2xl border transition-all ${
              filter === '10th Anniversary'
                ? 'bg-blue-950/80 border-blue-500 shadow-lg ring-2 ring-blue-500/50'
                : 'bg-slate-900/80 border-slate-800 hover:border-blue-500/50 hover:bg-slate-900'
            }`}
          >
            <div className="flex items-center justify-between">
              <span className="w-10 h-10 rounded-xl bg-blue-600/20 text-blue-400 border border-blue-500/30 flex items-center justify-center">
                <PartyPopper className="w-5 h-5" />
              </span>
              <span className="text-xs font-bold text-blue-400 bg-blue-950 px-2.5 py-0.5 rounded-full border border-blue-800">
                3 Photos
              </span>
            </div>
            <h3 className="text-base font-bold text-white mt-3">10th Anniversary Celebration</h3>
            <p className="text-xs text-slate-400 mt-1">Decade milestone banquet, thanksgiving, and founders.</p>
          </button>
        </div>

        {/* Category Filters Bar */}
        <div className="flex flex-wrap items-center justify-center gap-2 pt-2">
          {categories.map((cat) => {
            const Icon = cat.icon;
            const isActive = filter === cat.id;
            return (
              <button
                key={cat.id}
                onClick={() => setFilter(cat.id)}
                className={`flex items-center gap-2 px-4 py-2 text-xs font-bold rounded-xl transition-all ${
                  isActive
                    ? 'bg-red-600 text-white shadow-md ring-2 ring-red-400/50'
                    : 'bg-slate-900 text-slate-300 hover:bg-slate-800 border border-slate-800'
                }`}
              >
                {Icon && <Icon className="w-3.5 h-3.5" />}
                <span>{cat.label}</span>
                <span className={`text-[10px] px-1.5 py-0.5 rounded-full ${isActive ? 'bg-black/30 text-white' : 'bg-slate-800 text-slate-400'}`}>
                  {cat.count}
                </span>
              </button>
            );
          })}
        </div>

        {/* Gallery Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
          {filteredItems.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openLightbox(idx)}
              className="group relative rounded-2xl overflow-hidden bg-slate-900 border border-slate-800/80 shadow-lg cursor-pointer hover:border-slate-600 transition-all transform hover:-translate-y-1"
            >
              {/* Image Container */}
              <div className="relative aspect-[4/3] w-full overflow-hidden bg-slate-950">
                <img
                  src={item.image}
                  alt={item.title}
                  className="w-full h-full object-cover group-hover:scale-105 transition-transform duration-500"
                  referrerPolicy="no-referrer"
                  loading="lazy"
                />
                <div className="absolute inset-0 bg-gradient-to-t from-slate-950 via-slate-950/40 to-transparent opacity-75 group-hover:opacity-90 transition-opacity" />

                {/* Top Badge */}
                <div className="absolute top-3 left-3 right-3 flex items-center justify-between pointer-events-none">
                  <span className={`text-[10px] font-extrabold uppercase tracking-wider px-2.5 py-0.5 rounded-full shadow-sm ${
                    item.category === 'Graduation 2026'
                      ? 'bg-red-600 text-white'
                      : item.category === 'Cultural Day'
                      ? 'bg-amber-500 text-slate-950'
                      : item.category === '10th Anniversary'
                      ? 'bg-blue-600 text-white'
                      : 'bg-slate-800 text-slate-200'
                  }`}>
                    {item.category}
                  </span>

                  <span className="w-7 h-7 rounded-full bg-black/60 backdrop-blur-md text-white flex items-center justify-center opacity-0 group-hover:opacity-100 transition-opacity">
                    <Maximize2 className="w-3.5 h-3.5" />
                  </span>
                </div>

                {/* Bottom Overlay Info */}
                <div className="absolute bottom-3 left-3 right-3 text-white space-y-1 pointer-events-none">
                  <h4 className="text-sm font-bold text-white leading-snug line-clamp-1 group-hover:text-red-300 transition-colors">
                    {item.title}
                  </h4>
                  <p className="text-[11px] text-slate-300 flex items-center gap-1 truncate">
                    <MapPin className="w-3 h-3 text-red-400 shrink-0" />
                    <span className="truncate">{item.campus}</span>
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Footer Note */}
        <div className="text-center pt-6 border-t border-slate-900 text-xs text-slate-400 flex flex-wrap items-center justify-center gap-4">
          <span>Click any picture to expand in full-screen lightbox viewer.</span>
          <span className="text-slate-600">•</span>
          <span className="text-slate-300 font-semibold">Tofem Private School & Tofem College</span>
        </div>

      </div>

      {/* Lightbox Modal */}
      {lightboxIndex !== null && filteredItems[lightboxIndex] && (
        <div
          role="dialog"
          aria-modal="true"
          onClick={closeLightbox}
          className="fixed inset-0 z-50 bg-black/95 backdrop-blur-md flex items-center justify-center p-4 sm:p-6 select-none animate-fadeIn"
        >
          {/* Controls Bar */}
          <div className="absolute top-4 left-4 right-4 flex items-center justify-between text-white z-20">
            <div className="flex items-center gap-2 bg-slate-900/90 px-3.5 py-1.5 rounded-full border border-slate-700 text-xs font-bold">
              <span className="text-red-400 font-bold">{lightboxIndex + 1}</span>
              <span className="text-slate-500">/</span>
              <span>{filteredItems.length}</span>
              <span className="text-slate-500">•</span>
              <span className="text-slate-300">{filteredItems[lightboxIndex].category}</span>
            </div>

            <button
              onClick={closeLightbox}
              aria-label="Close Lightbox"
              className="w-10 h-10 rounded-full bg-slate-900/90 hover:bg-red-600 text-white border border-slate-700 hover:border-red-500 flex items-center justify-center transition-colors shadow-lg"
            >
              <X className="w-5 h-5" />
            </button>
          </div>

          {/* Previous Button */}
          <button
            onClick={prevImage}
            aria-label="Previous Image"
            className="absolute left-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-white hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center transition-all z-20 shadow-xl"
          >
            <ChevronLeft className="w-6 h-6" />
          </button>

          {/* Next Button */}
          <button
            onClick={nextImage}
            aria-label="Next Image"
            className="absolute right-4 top-1/2 -translate-y-1/2 w-12 h-12 rounded-full bg-slate-900/80 hover:bg-white hover:text-slate-950 text-white border border-slate-700 flex items-center justify-center transition-all z-20 shadow-xl"
          >
            <ChevronRight className="w-6 h-6" />
          </button>

          {/* Image & Caption Container */}
          <div
            onClick={(e) => e.stopPropagation()}
            className="max-w-4xl max-h-[85vh] w-full flex flex-col items-center justify-center text-center space-y-4"
          >
            <div className="relative max-h-[70vh] rounded-2xl overflow-hidden shadow-2xl border border-slate-800 bg-slate-950">
              <img
                src={filteredItems[lightboxIndex].image}
                alt={filteredItems[lightboxIndex].title}
                className="max-h-[70vh] w-auto max-w-full object-contain rounded-xl"
                referrerPolicy="no-referrer"
              />
            </div>

            <div className="bg-slate-900/90 border border-slate-800 px-6 py-3.5 rounded-2xl max-w-2xl text-center space-y-1 shadow-xl">
              <h4 className="text-base sm:text-lg font-bold text-white">
                {filteredItems[lightboxIndex].title}
              </h4>
              <p className="text-xs text-slate-300">
                {filteredItems[lightboxIndex].caption}
              </p>
              <div className="pt-1 flex items-center justify-center gap-2 text-[11px] text-red-400 font-medium">
                <MapPin className="w-3.5 h-3.5" />
                <span>{filteredItems[lightboxIndex].campus}</span>
              </div>
            </div>
          </div>
        </div>
      )}
    </section>
  );
};
